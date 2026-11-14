# Plug in pictures from ChatGPT: python3 books/cat-club/add_pics.py <folder with word.png files>
# File name = the word (shopping-list.png, just-in-case.png …). Makes ../assets/cat-club/<id>.webp,
# registers "cc-<id>" in engine/raster.json and switches every img of that word in the chapter packs.
import sys, os, re, json, glob
from PIL import Image
here = os.path.dirname(os.path.abspath(__file__)); src = os.path.dirname(os.path.dirname(here))
assets = os.path.join(src, '..', 'assets', 'cat-club'); os.makedirs(assets, exist_ok=True)
ALIAS = {'shopping-list': 'list', 'just-in-case': 'case', 'cant-stop-laughing': 'laughing', 'change-places': 'places',
         'on-top': 'top', 'of-course': 'course'}
packs = sorted(glob.glob(os.path.join(here, '*.js')))
rpath = os.path.join(src, 'engine', 'raster.json'); raster = json.load(open(rpath))
texts = {f: open(f).read() for f in packs}
for f in sorted(glob.glob(os.path.join(sys.argv[1], '*.png'))):
    name = os.path.splitext(os.path.basename(f))[0].lower(); wid = ALIAS.get(name, name)
    line = re.search(r'\{ id: "%s", phrase: "([^"]*)", ru: "([^"]*)"(?:, img: "([^"]*)")? \}' % re.escape(wid), texts[packs[0]] + ''.join(texts.values()))
    if not line: print('?? no word for', name); continue
    im = Image.open(f).convert('RGBA'); im.thumbnail((420, 420), Image.LANCZOS)
    im.save(os.path.join(assets, wid + '.webp'), 'WEBP', quality=85, method=6)  # keeps transparency
    key = 'cc-' + wid
    raster[key] = f'<img src="../assets/cat-club/{wid}.webp" alt="{line.group(1)}" loading="lazy">'
    old = line.group(3)
    for p in packs:
        t = texts[p]
        if old and old != key:
            t = t.replace(f'img: "{old}"', f'img: "{key}"')  # every task with this word's picture
        t = re.sub(r'(\{ id: "%s", phrase: "[^"]*", ru: "[^"]*")( \})' % re.escape(wid), r'\1, img: "%s"\2' % key, t)
        texts[p] = t
    print('ok', name, '->', key, '(was', old, ')')
for p, t in texts.items(): open(p, 'w').write(t)
json.dump(raster, open(rpath, 'w'), ensure_ascii=False, indent=2)
