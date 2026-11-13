// TITLE: May I...?
// EYEBROW: Spotlight 4 Grammar · Module 3 · Unit 6a, 6b
// SUB: Вежливая просьба May I...? Yes, you may. / No, you may not. Плюс слова-упаковки: a packet of, a jar of, a bottle of...
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: May I leave the table? — Yes, you may. / No, you may not. + a packet of, a jar of...
const META = { ls: "s4g-m3b-may", cards: false, boardLabel: "Правила" };
const P = [
  { id: "may", phrase: "May I …?", ru: "можно мне…? (вежливая просьба)" },
  { id: "yes", phrase: "Yes, you may.", ru: "да, можно" },
  { id: "no", phrase: "No, you may not.", ru: "нет, нельзя" },
  { id: "pack", phrase: "a packet / jar / bar of …", ru: "слова-упаковки" },
  { id: "more", phrase: "a bottle / loaf / tin of …", ru: "ещё слова-упаковки" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "🙋 May I…? — вежливая просьба", lines: [
        ["*May I* have some more potatoes, please?", "Можно мне ещё картошки, пожалуйста?"],
        ["*May I* leave the table?", "Можно мне выйти из-за стола?"],
        ["*May I* ask you a question?", "Можно задать вопрос?"] ] },
      { h: "✅ Разрешаем — 🚫 Не разрешаем", lines: [
        ["Yes, *you may*. / Of course you may.", "Да, можно. / Конечно можно."],
        ["No, *you may not*.", "Нет, нельзя."],
        ["Not yet. It's still hot!", "Ещё нет. Это ещё горячее!"] ] },
      { h: "📦 Слова-упаковки (стр. 46)", lines: [
        ["*a packet* of biscuits, *a jar* of jam", "пачка печенья, банка варенья"],
        ["*a bar* of chocolate, *a carton* of milk", "плитка шоколада, пакет молока"],
        ["*a kilo* of potatoes, *a bottle* of Coke", "кило картошки, бутылка колы"],
        ["*a loaf* of bread, *a tin* of beans", "булка хлеба, банка фасоли"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ Can I have potatoes?  ✓ *May I* have some potatoes, please?", "May — вежливее, и не забывай please"],
        ["✗ Yes, you can may.  ✓ Yes, *you may*.", "can и may вместе не ставим"] ] }
    ] },
  { type: "sort", title: "Можно или нельзя?", short: "За столом", instr: "Прочитай ситуацию. Это разрешили (May) или нет (No)?",
    buckets: ["✅ Yes, you may", "🚫 No, you may not"],
    items: [
      { id: "yes", img: "fork-and-knife-with-plate", t: "May I have some more potatoes? — Of course you may!", b: 0 },
      { id: "no", img: "pie", t: "May I taste the apple pie? — Not yet, it's still hot!", b: 1 },
      { id: "no", img: "couch-and-lamp", t: "May I eat my lunch in the living room? — No, eat it in the kitchen.", b: 1 },
      { id: "yes", img: "soap", t: "May I wash my hands? — Yes, the bathroom is next to the bedroom.", b: 0 },
      { id: "yes", img: "door", t: "May I come in, please? — Yes, of course you may.", b: 0 },
      { id: "no", img: "television", t: "May I watch TV now? — No, do your homework first.", b: 1 },
      { id: "yes", img: "jar strawberry", t: "May I have some jam? — Yes, here you are.", b: 0 },
      { id: "no", img: "chocolate-bar", t: "May I eat chocolate before dinner? — No, you may not.", b: 1 }
    ] },
  { type: "gaps", title: "May, Must или Mustn't?", short: "Вежливая просьба", instr: "Выбери правильное слово для вежливой просьбы.",
    items: [
      { id: "may", img: "fork-and-knife-with-plate", t: "{{*May|Must|Mustn't}} I have some more juice, please?" },
      { id: "may", img: "jar strawberry", t: "{{*May|Many|Much}} I try the jam, please?" },
      { id: "may", img: "door", t: "{{*May|Can|Mays}} I come in, please?" },
      { id: "may", img: "toothbrush", t: "{{*May|Must|May to}} I clean my teeth now?" },
      { id: "may", img: "television", t: "{{*May|Mustn't|Many}} I watch TV, please?" }
    ] },
  { type: "gaps", title: "Yes или No?", short: "Ответ", instr: "Прочитай просьбу и выбери правильный ответ.",
    items: [
      { id: "yes", img: "soap", t: "May I wash my hands? — {{*Yes, you may|No, you may not|Yes, you must}}." },
      { id: "no", img: "pie", t: "May I taste it now, it's very hot? — {{*No, you may not|Yes, you may|Yes, you must}}." },
      { id: "yes", img: "door", t: "May I come in? — {{*Of course you may|No, you can|Yes, you mustn't}}." },
      { id: "no", img: "television", t: "May I watch TV before homework? — {{*No, you may not|Yes, you may|May I}}." }
    ] },
  { type: "gaps", title: "Какое слово-упаковка?", short: "Упаковки", instr: "Посмотри на картинку и напиши слово.",
    items: [
      { id: "pack", img: "package cookie", t: "a [[packet]] of biscuits" },
      { id: "pack", img: "jar strawberry", t: "a [[jar]] of jam" },
      { id: "pack", img: "chocolate-bar", t: "a [[bar]] of chocolate" },
      { id: "more", img: "glass-of-milk", t: "a [[carton]] of milk" },
      { id: "more", img: "potato", t: "a [[kilo]] of potatoes" },
      { id: "more", img: "cola-bottle", t: "a [[bottle]] of Coke" },
      { id: "more", img: "bread", t: "a [[loaf]] of bread" },
      { id: "more", img: "canned-food beans", t: "a [[tin]] of beans" }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "may", t: "May I have some more potatoes, please?", ok: true },
      { id: "no", t: "No, you may.", ok: false, fix: "No, you may not." },
      { id: "pack", t: "a jar of chocolate", ok: false, fix: "a bar of chocolate" },
      { id: "more", t: "a loaf of bread", ok: true },
      { id: "may", t: "Can I may come in?", ok: false, fix: "May I come in?" },
      { id: "yes", t: "Yes, you may.", ok: true },
      { id: "more", t: "a bottle of beans", ok: false, fix: "a tin of beans" }
    ] },
  { type: "order", title: "Собери просьбу", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "may", img: "fork-and-knife-with-plate", q: "Можно мне ещё картошки, пожалуйста?", s: "May I have some more potatoes, please?" },
      { id: "may", img: "door", q: "Можно войти?", s: "May I come in?" },
      { id: "no", img: "pie", q: "Нет, ещё нельзя.", s: "No, you may not." },
      { id: "pack", img: "jar strawberry", q: "Банка варенья.", s: "A jar of jam." },
      { id: "more", img: "bread", q: "Булка хлеба.", s: "A loaf of bread." }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется главная часть.",
    items: [
      { id: "may", ru: "Можно мне задать вопрос?", en: "May I ask a question?", key: "may i ask" },
      { id: "no", ru: "Нет, нельзя.", en: "No, you may not.", key: "you may not" },
      { id: "yes", ru: "Да, конечно можно.", en: "Of course you may.", key: "you may" },
      { id: "pack", ru: "Пачка печенья.", en: "A packet of biscuits.", key: "packet of biscuits" },
      { id: "more", ru: "Бутылка колы.", en: "A bottle of Coke.", key: "bottle of coke" }
    ] }
];
