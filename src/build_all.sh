#!/bin/sh
# Rebuild everything: vocabulary pages (m4/…), grammar pages, both hubs.
# Pictures: if you add a new picture name, first run  python3 engine/icons.py <path to Noto icons.json>
set -e
cd "$(dirname "$0")"
for f in packs/*.js; do
  n=$(basename "$f" .js); mod=$(echo "$n" | sed 's/^m\([0-9]*\)-.*/\1/'); name=$(echo "$n" | sed 's/^m[0-9]*-[0-9]*-//')
  mkdir -p ../m$mod; python3 engine/build.py "$f" "../m$mod/$name.html"
done
python3 build_grammar.py
python3 hub.py
