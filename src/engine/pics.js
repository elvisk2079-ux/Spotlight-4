/* ===== Pictures (Noto Emoji, Apache 2.0). p.img / it.img = "giraffe" or "bicycle !no" or "mouse elephant" =====
   PICS = { name: "<svg…>" } is injected by build.py with only the pictures a page uses. */
const hasPic = p => !!(p && p.img);
function picHTML(spec) {
  const parts = spec.split(/\s+/).filter(Boolean);
  const no = parts.includes("!no"), yes = parts.includes("!yes");
  const names = parts.filter(x => x[0] !== "!");
  const imgs = names.map(n => `<span class="pi">${PICS[n] || ""}</span>`).join("");
  return `<span class="pics n${names.length}">${imgs}</span>` +
    (no ? `<span class="pic-no">${PICS["prohibited"] || ""}</span>` : "") +
    (yes ? `<span class="pic-yes">${PICS["check-mark-button"] || ""}</span>` : "");
}
const picEl = (p, cls) => { const d = el("div", (cls || "pic") + " has-img"); d.innerHTML = picHTML(p.img); return d; };
const itemPic = (it, cls) => it && it.img ? picEl(it, cls || "pic i-pic") : null;

/* picture → choose the word */
RENDER.pic = function (d) {
  const ol = el("ol", "items pic-items");
  const pool = (d.def.ids ? P.filter(p => d.def.ids.includes(p.id)) : P).filter(hasPic);
  shuffle(pool).forEach(p => {
    const li = el("li");
    li.append(picEl(p, "pic q-pic"));
    const others = shuffle(pool.filter(x => x.id !== p.id)).map(x => x.phrase).slice(0, (d.def.n || 4) - 1);
    const box = el("div", "mcq");
    box.append(options([p.phrase, ...others], [p.phrase], p.id, d, true));
    d.total++;
    li.append(box); ol.append(li);
  });
  d.body.append(ol);
};

/* buttons with pictures; first is correct */
function picOptions(right, pool, d, n) {
  const wrap = el("div", "pic-opts");
  let done = false;
  const others = shuffle(pool.filter(x => x.id !== right.id && x.img !== right.img)).slice(0, (n || 4) - 1);
  reg(right.id);
  shuffle([right, ...others]).forEach(p => {
    const b = el("button", "popt"); b.type = "button";
    b.innerHTML = picHTML(p.img);
    b.setAttribute("aria-label", p.phrase);
    b.addEventListener("click", () => {
      if (done || b.disabled) return;
      if (p.id === right.id) {
        done = true; b.classList.add("ok");
        wrap.querySelectorAll(".popt").forEach(x => { if (x !== b) { x.classList.add("dim"); x.disabled = true; } });
        d.ok++; setScore(d); hit(right.id, true);
      } else { b.classList.add("bad", "shake"); b.disabled = true; hit(right.id, false); }
    });
    wrap.append(b);
  });
  return wrap;
}
/* read the word → tap the picture */
RENDER.pick = function (d) {
  const ol = el("ol", "items");
  const pool = (d.def.ids ? P.filter(p => d.def.ids.includes(p.id)) : P).filter(hasPic);
  shuffle(pool).forEach(p => {
    const li = el("li");
    const q = el("p", "q big-q", p.phrase);
    li.append(q, picOptions(p, pool, d, d.def.n)); d.total++;
    ol.append(li);
  });
  d.body.append(ol);
};
/* listen → tap the picture */
RENDER.listenpic = function (d) {
  const ol = el("ol", "items");
  const pool = (d.def.ids ? P.filter(p => d.def.ids.includes(p.id)) : P).filter(hasPic);
  shuffle(pool).forEach(p => {
    const li = el("li");
    const q = el("div", "listen-q");
    if (HAS_TTS) {
      const s = el("button", "speak", "🔊"); s.type = "button"; s.setAttribute("aria-label", "слушать");
      s.addEventListener("click", () => speak(sayText(p)));
      const w = el("button", "btn small ghost", "показать слово"); w.type = "button";
      w.addEventListener("click", () => { w.replaceWith(el("b", "listen-word", p.phrase)); });
      q.append(s, w);
    } else q.append(el("b", "listen-word", p.phrase));
    li.append(q, picOptions(p, pool, d, d.def.n)); d.total++;
    ol.append(li);
  });
  d.body.append(ol);
};

/* auto drills built from P (pictures carried into each item) */
RENDER.ru2en = function (d) {
  const pool = d.def.ids ? P.filter(p => d.def.ids.includes(p.id)) : P;
  d.def = Object.assign({}, d.def, { items: pool.map(p => ({ id: p.id, img: p.img, q: p.ru, o: [p.phrase, ...shuffle(pool.filter(x => x.id !== p.id)).slice(0, 3).map(x => x.phrase)] })) });
  RENDER.mcq(d);
};
RENDER.en2ru = function (d) {
  const pool = d.def.ids ? P.filter(p => d.def.ids.includes(p.id)) : P;
  d.def = Object.assign({}, d.def, { items: pool.map(p => ({ id: p.id, q: p.phrase, o: [p.ru, ...shuffle(pool.filter(x => x.id !== p.id)).slice(0, 3).map(x => x.ru)] })) });
  RENDER.mcq(d);
};
RENDER.letters = function (d) {
  const pool = (d.def.ids ? P.filter(p => d.def.ids.includes(p.id)) : P).filter(p => !/\s/.test(p.spell || p.phrase));
  d.def = Object.assign({}, d.def, { items: pool.map(p => ({ id: p.id, img: p.img, q: p.ru, s: (p.spell || p.phrase).split("").join(" ") })) });
  RENDER.order(d);
};
RENDER.write = function (d) {
  const pool = d.def.ids ? P.filter(p => d.def.ids.includes(p.id)) : P;
  d.def = Object.assign({}, d.def, { items: pool.map(p => ({ id: p.id, img: p.img, t: `${p.ru} — [[${p.ans || p.phrase}]]` })) });
  RENDER.gaps(d);
};
