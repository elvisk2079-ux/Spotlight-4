Sources for the Spotlight 4 trainers (grade 4, with pictures).
packs/m4-1-animals.js …  — vocabulary, one file per topic (m<module>-<n>-<name>.js → ../m<module>/<name>.html)
grammar/m4a-….js         — grammar pages (→ ../grammar/…html)
engine/                  — shared engine (from Spotlight 7) + pics.js (pictures in cards and drills)
engine/noto.json         — the pictures used (Noto Emoji by Google, Apache 2.0)
toc.tsv                  — list for the main page (module, unit, title, words, file)

Pictures: in a pack write  img: "giraffe"  or two pictures  img: "monkey banana";
add !no for a "forbidden" sign, !yes for a green tick:  img: "bicycle !no"
New picture names → python3 engine/icons.py path/to/icons.json  (npm pack @iconify-json/noto)

Rebuild all:  sh build_all.sh
Checks:  node engine/smoke.js ../m4/*.html ../grammar/*.html ; node engine/coverage.js … ; node engine/answers.js … ; node engine/keys.js packs/*.js grammar/*.js
