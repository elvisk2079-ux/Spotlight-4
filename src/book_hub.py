# Builds ../<book>/index.html — cover page with chapter tabs (books/<book>/book.tsv: n, title, words, file)
import html, os, sys, re
base = os.path.dirname(os.path.abspath(__file__))
css = open(os.path.join(base, 'engine', 'style.css')).read()
e = html.escape
for book in sorted(os.listdir(os.path.join(base, 'books'))):
    d = os.path.join(base, 'books', book)
    rows = [l.rstrip('\n').split('\t') for l in open(os.path.join(d, 'book.tsv')) if l.strip()]
    info = dict(re.findall(r'^(\w+)\t(.*)$', open(os.path.join(d, 'info.tsv')).read(), re.M))
    tabs = [l.rstrip('\n').split('\t') for l in open(os.path.join(d, 'tabs.tsv')) if l.strip()]
    nav = '<nav class="tabs wrap" aria-label="Главы">' + ''.join(f'<a class="tab{" on" if h == "index.html" else ""}" href="{e(h)}">{e(t)}</a>' for t, h in tabs) + '</nav>'
    items = ''.join(f'''
      <li><a class="row" href="{e(f)}">
        <span class="n">{"Глава " + e(n) if n.isdigit() else e(n)}</span>
        <span class="t"><b>{e(t)}</b><span class="s">{e(w)}</span></span>
        <span class="go" aria-hidden="true">→</span>
      </a></li>''' for n, t, w, f in rows)
    page = f'''<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(info["title"])}</title>
{css}
.tabs {{ display: flex; flex-wrap: wrap; gap: 6px; padding-top: 4px; padding-bottom: 14px; }}
.tab {{ padding: 7px 13px; border: 1px solid var(--line); border-radius: 999px; background: var(--card); color: var(--ink); text-decoration: none; font-size: 14px; }}
.tab:hover {{ border-color: var(--accent); color: var(--accent); }}
.tab.on {{ background: var(--accent); border-color: var(--accent); color: #fff; }}
.toc {{ list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 6px; }}
.row {{ display: grid; grid-template-columns: 5.2em minmax(0,1fr) 1.2em; align-items: center; gap: 12px; padding: 12px 14px; background: var(--card); border: 1px solid var(--line); border-radius: 10px; text-decoration: none; color: var(--ink); }}
.row:hover {{ border-color: var(--accent); }}
.row:hover .go {{ color: var(--accent); transform: translateX(2px); }}
.n {{ font-family: var(--font-mono); font-size: 13px; color: var(--accent); }}
.t {{ display: flex; flex-direction: column; min-width: 0; }}
.t .s {{ color: var(--muted, #777); font-size: 14px; }}
.go {{ color: var(--muted, #999); transition: transform .15s; }}
.cover {{ font-size: 44px; margin: 6px 0 2px; }}
</style>
</head>
<body>
<header class="hero wrap">
  <a class="home" href="../index.html">← Все темы</a>
  <p class="eyebrow">{e(info["eyebrow"])}</p>
  <div class="cover" aria-hidden="true">{e(info["cover"])}</div>
  <h1>{e(info["title"])}</h1>
  <p class="sub">{e(info["sub"])}</p>
</header>
{nav}
<main class="wrap">
  <ol class="toc">{items}
  </ol>
</main>
</body>
</html>
'''
    os.makedirs(os.path.join(base, '..', book), exist_ok=True)
    open(os.path.join(base, '..', book, 'index.html'), 'w').write(page)
