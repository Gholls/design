#!/usr/bin/env python3
"""Capture gallery thumbnails for every generated sample site.

Web/desktop: 1280x800 viewport -> 640x400 WebP
Mobile: 390x844 viewport -> 260x563 WebP
Usage: python3 scripts/capture-thumbnails.py [--only=slug]
"""
import json
import sys
from pathlib import Path

from PIL import Image, ImageOps
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public/thumbnails'
INDEX = json.loads((ROOT / 'public/design-index.json').read_text())
ONLY = next((a.split('=', 1)[1] for a in sys.argv[1:] if a.startswith('--only=')), None)
PLATFORM = next((a.split('=', 1)[1] for a in sys.argv[1:] if a.startswith('--platform=')), None)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    targets = [
        d for d in INDEX
        if (ROOT / 'public/generated' / d['slug'] / 'index.html').exists()
        and (ONLY is None or d['slug'] == ONLY)
        and (PLATFORM is None or d.get('platform') == PLATFORM)
    ]
    done = 0
    failed = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1280, 'height': 800}, device_scale_factor=1)
        for d in targets:
            slug = d['slug']
            mobile = d.get('platform') == 'mobile'
            try:
                if mobile:
                    page.set_viewport_size({'width': 390, 'height': 844})
                else:
                    page.set_viewport_size({'width': 1280, 'height': 800})
                page.goto((ROOT / 'public/generated' / slug / 'index.html').as_uri(), wait_until='load', timeout=20000)
                page.wait_for_timeout(140)
                raw = OUT / f'.{slug}.png'
                page.screenshot(path=str(raw))
                image = Image.open(raw).convert('RGB')
                size = (260, 563) if mobile else (640, 400)
                ImageOps.fit(image, size, method=Image.Resampling.LANCZOS).save(OUT / f'{slug}.webp', 'WEBP', quality=72, method=6)
                raw.unlink(missing_ok=True)
                done += 1
                if done % 25 == 0:
                    print(f'captured {done}/{len(targets)}')
            except Exception as exc:
                failed.append(f'{slug}: {exc}')
        browser.close()
    print(f'done {done}/{len(targets)}, failed {len(failed)}')
    for f in failed[:20]:
        print('-', f)


if __name__ == '__main__':
    main()
