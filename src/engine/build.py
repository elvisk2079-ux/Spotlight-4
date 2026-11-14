# Build one trainer page: python3 engine/build.py packs/x.js out.html
import sys, re, html, os, json
base = os.path.dirname(os.path.abspath(__file__))
src = open(sys.argv[1]).read(); out = sys.argv[2]
meta = {k: v.strip() for k, v in re.findall(r'^// (TITLE|EYEBROW|SUB|BOARD|LEAD|HOME|TABS): (.*)$', src, re.M)}
css = open(os.path.join(base, 'style.css')).read()
eng = open(os.path.join(base, 'engine.js')).read()
pics_js = open(os.path.join(base, 'pics.js')).read()
eng = eng.replace('function startDrill(', pics_js + '\nfunction startDrill(', 1)
# pictures: only the ones this page uses (subset of Noto Emoji, Apache 2.0, in noto.json)
lib = json.load(open(os.path.join(base, 'noto.json')))
raster_path = os.path.join(base, 'raster.json')
if os.path.exists(raster_path):
    lib.update(json.load(open(raster_path)))  # real photos/drawings override emoji+custom for matching names
names = set()
for spec in re.findall(r'\bimg:\s*"([^"]+)"', src):
    for t in spec.split():
        names.add({'!no': 'prohibited', '!yes': 'check-mark-button'}.get(t, t))
missing = [n for n in names if n not in lib]
if missing: sys.exit(f'{sys.argv[1]}: no picture for {missing} — run engine/icons.py')
pics = {n: lib[n] for n in sorted(names)}
# optional chapter tabs: "// TABS: book" reads tabs.tsv (label<TAB>file) next to the pack
tabs = ''
if meta.get('TABS'):
    tp = os.path.join(os.path.dirname(os.path.abspath(sys.argv[1])), 'tabs.tsv')
    me = os.path.basename(out)
    rows = [l.rstrip('\n').split('\t') for l in open(tp) if l.strip()]
    tabs = '<nav class="tabs wrap" aria-label="Главы">' + ''.join(
        f'<a class="tab{" on" if h == me else ""}" href="{html.escape(h)}">{html.escape(t)}</a>' for t, h in rows) + '</nav>'
TABS_CSS = """
.tabs { display: flex; flex-wrap: wrap; gap: 6px; padding-top: 4px; padding-bottom: 14px; }
.tab { padding: 7px 13px; border: 1px solid var(--line); border-radius: 999px; background: var(--card); color: var(--ink); text-decoration: none; font-size: 14px; }
.tab:hover { border-color: var(--accent); color: var(--accent); }
.tab.on { background: var(--accent); border-color: var(--accent); color: #fff; }
"""
e = html.escape
page = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(meta["TITLE"])}</title>
{css}{TABS_CSS if tabs else ''}</style>
</head>
<body>
<header class="hero wrap">
  {f'<a class="home" href="{e(meta["HOME"])}">{"← К книжке" if meta.get("TABS") else "← Все темы"}</a>' if meta.get("HOME") else ''}
  <p class="eyebrow">{e(meta["EYEBROW"])}</p>
  <h1>{e(meta["TITLE"])}</h1>
  <p class="sub">{e(meta["SUB"])}</p>
</header>
{tabs}

<div class="bar">
  <div class="wrap">
    <nav class="nav" id="nav" aria-label="Задания"></nav>
    <div class="progress" aria-live="polite">
      <div class="track"><div class="fill" id="fill"></div></div>
      <span><b id="mastered">0</b> / <b id="ptotal">0</b> выучено</span>
    </div>
  </div>
</div>

<main class="wrap" id="main">
  <section id="board-sec">
    <h2>{e(meta.get('BOARD','Твои слова'))}</h2>
    <p class="lead">{e(meta.get('LEAD','Каждый правильный ответ — одна точка. Все точки зелёные — слово выучено. Красная рамка — повтори это слово.'))}</p>
    <div class="board" id="board"></div>
    <div class="board-foot">
      <span>Прогресс сохраняется в этом браузере.</span>
      <button class="btn small" type="button" id="reset-all">Сбросить прогресс</button>
    </div>
  </section>
</main>
<footer class="wrap credits">Картинки: Noto Emoji (Google), лицензия Apache 2.0.</footer>

<script>
const PICS = {json.dumps(pics, ensure_ascii=False)};
{src}
{eng}
</script>
</body>
</html>
'''
open(out, 'w').write(page)
