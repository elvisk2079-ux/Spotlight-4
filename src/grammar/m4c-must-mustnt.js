// TITLE: Must or Mustn't?
// EYEBROW: Spotlight 4 Grammar · Module 4 · Unit 8b
// SUB: Правила в зоопарке и в школе: must, mustn't, have to, don't have to, can't, may. Знаки-картинки и задания с проверкой.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: You must feed dogs. You mustn't give dogs sweets. + have to, may
const META = { ls: "s4g-m4-must", cards: false, boardLabel: "Правила" };
const P = [
  { id: "must", phrase: "You must …", ru: "ты должен, нужно" },
  { id: "mustnt", phrase: "You mustn't …", ru: "нельзя, запрещено" },
  { id: "verb", phrase: "must feed (без to)", ru: "после must — глагол без to" },
  { id: "have", phrase: "have to / don't have to", ru: "приходится / не обязательно" },
  { id: "may", phrase: "May I …?", ru: "можно мне…? (вежливо)" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "✅ must — нужно, обязательно", lines: [
        ["You *must* feed dogs every day.", "Ты должен кормить собак каждый день."],
        ["You *must* put your rubbish in the bin.", "Нужно выбрасывать мусор в урну."] ] },
      { h: "🚫 mustn't — нельзя!", lines: [
        ["You *mustn't* give dogs any sweets.", "Нельзя давать собакам сладкое."],
        ["You *mustn't* feed the animals.", "Нельзя кормить животных."],
        ["mustn't = must not", "читается [масnт]"] ] },
      { h: "Ещё полезные слова (учебник, стр. 64)", lines: [
        ["We *have to* wear a uniform.", "Нам приходится (надо) носить форму."],
        ["You *don't have to* go to school on Sunday.", "Не обязательно — в воскресенье можно не идти."],
        ["*May* I come in, please?", "Можно войти? (вежливая просьба)"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ You must to feed.  ✓ You *must feed*.", "после must нет to"],
        ["✗ He musts.  ✓ He *must*.", "must не меняется: I must, he must, they must"] ] }
    ] },
  { type: "sort", title: "Must или mustn't?", short: "Знаки", instr: "Посмотри на знак. Это нужно делать (must) или нельзя (mustn't)?",
    buckets: ["✅ must", "🚫 mustn't"],
    items: [
      { id: "mustnt", img: "monkey banana !no", t: "You … feed the animals.", b: 1 },
      { id: "mustnt", img: "bicycle !no", t: "You … ride bikes.", b: 1 },
      { id: "mustnt", img: "speaker-high-volume musical-notes !no", t: "You … play loud music.", b: 1 },
      { id: "must", img: "dog-face house !yes", t: "You … leave your pets at home.", b: 0 },
      { id: "must", img: "litter-in-bin-sign !yes", t: "You … put your rubbish in the bin.", b: 0 },
      { id: "mustnt", img: "person-running !no", t: "You … run.", b: 1 },
      { id: "must", img: "dog-face fork-and-knife-with-plate !yes", t: "You … feed your dog every day.", b: 0 },
      { id: "mustnt", img: "candy !no", t: "You … give dogs sweets.", b: 1 }
    ] },
  { type: "gaps", title: "Правила зоопарка", short: "Зоопарк", instr: "Посмотри на знак и выбери must или mustn't.",
    items: [
      { id: "mustnt", img: "monkey banana !no", t: "You {{*mustn't|must}} feed the animals." },
      { id: "mustnt", img: "bicycle !no", t: "You {{*mustn't|must}} ride bikes." },
      { id: "must", img: "litter-in-bin-sign !yes", t: "You {{*must|mustn't}} put your rubbish in the bin." },
      { id: "must", img: "dog-face house !yes", t: "You {{*must|mustn't}} leave your pets at home." },
      { id: "mustnt", img: "speaker-high-volume !no", t: "You {{*mustn't|must}} play loud music." },
      { id: "mustnt", img: "person-running !no", t: "You {{*mustn't|must}} run." },
      { id: "verb", img: "ticket !yes", t: "You must {{*buy|to buy|buys}} a ticket." }
    ] },
  { type: "gaps", title: "Правила школы", short: "Школа", instr: "Это задание 2 из учебника (стр. 64). Выбери правильный вариант.",
    items: [
      { id: "mustnt", img: "school person-running !no", t: "You {{*can't|don't have to}} run during the break." },
      { id: "have", img: "school", t: "I {{*have to|can}} wear a uniform at school. All children wear one." },
      { id: "must", img: "books", t: "You're in the library. You {{*must|may}} be quiet." },
      { id: "may", img: "woman-teacher", t: "Mr Green, {{*may|must}} I ask you a question?" },
      { id: "have", img: "calendar", t: "You {{*don't have to|mustn't}} go to school on Sunday." },
      { id: "may", img: "door", t: "{{*May|Have}} I come in, please?" }
    ] },
  { type: "gaps", title: "Мои правила дома", short: "Дома", instr: "Напиши must или mustn't.",
    items: [
      { id: "must", img: "toothbrush", t: "I [[must]] clean my teeth every morning." },
      { id: "mustnt", img: "television !no", t: "I [[mustn't/must not]] watch TV late at night." },
      { id: "must", img: "dog-face fork-and-knife-with-plate", t: "I [[must]] feed my dog every day." },
      { id: "mustnt", img: "candy !no", t: "You [[mustn't/must not]] give dogs sweets." },
      { id: "must", img: "notebook", t: "I [[must]] do my homework." }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "verb", t: "You must to feed your cat.", ok: false, fix: "You must feed your cat." },
      { id: "mustnt", t: "You mustn't feed the animals at the zoo.", ok: true },
      { id: "verb", t: "He musts clean his room.", ok: false, fix: "He must clean his room." },
      { id: "may", t: "May I come in, please?", ok: true },
      { id: "have", t: "You don't have to go to school on Sunday.", ok: true },
      { id: "mustnt", t: "You must run in the classroom.", ok: false, fix: "You mustn't run in the classroom." }
    ] },
  { type: "order", title: "Собери правило", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "mustnt", img: "monkey banana !no", q: "Нельзя кормить животных.", s: "You mustn't feed the animals." },
      { id: "must", img: "dog-face", q: "Ты должен кормить собаку каждый день.", s: "You must feed your dog every day." },
      { id: "may", img: "door", q: "Можно мне войти?", s: "May I come in?" },
      { id: "have", img: "school", q: "Нам надо носить форму.", s: "We have to wear a uniform." }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется главная часть.",
    items: [
      { id: "mustnt", ru: "Нельзя бегать в зоопарке.", en: "You mustn't run at the zoo.", key: "mustn't run|must not run" },
      { id: "must", ru: "Ты должен выбрасывать мусор в урну.", en: "You must put your rubbish in the bin.", key: "must put" },
      { id: "verb", ru: "Я должен кормить кошку.", en: "I must feed my cat.", key: "must feed" },
      { id: "may", ru: "Можно мне задать вопрос?", en: "May I ask a question?", key: "may i ask" }
    ] }
];
