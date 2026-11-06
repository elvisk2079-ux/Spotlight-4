# Refresh engine/noto.json with every picture used in packs/ and grammar/.
# Needs the Noto set: npm pack @iconify-json/noto && tar xzf iconify-json-noto-*.tgz
# python3 engine/icons.py path/to/package/icons.json
import sys, json, re, glob, os
base = os.path.dirname(os.path.abspath(__file__)); root = os.path.dirname(base)
full = json.load(open(sys.argv[1])); W = full.get('width', 128); H = full.get('height', 128)
names = {'prohibited', 'check-mark-button'}
for f in glob.glob(os.path.join(root, 'packs', '*.js')) + glob.glob(os.path.join(root, 'grammar', '*.js')):
    for spec in re.findall(r'\bimg:\s*"([^"]+)"', open(f).read()):
        names |= {t for t in spec.split() if t[0] != '!'}
out = {}
for n in sorted(names):
    ic = full['icons'].get(n) or full['icons'].get(full.get('aliases', {}).get(n, {}).get('parent', ''))
    if not ic: print('NOT FOUND:', n); continue
    w, h = ic.get('width', W), ic.get('height', H)
    out[n] = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{ic.get("left",0)} {ic.get("top",0)} {w} {h}" aria-hidden="true">{ic["body"]}</svg>'
json.dump(out, open(os.path.join(base, 'noto.json'), 'w'), ensure_ascii=False)
print(len(out), 'pictures ->', os.path.join(base, 'noto.json'))
