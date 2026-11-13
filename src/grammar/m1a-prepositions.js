// TITLE: Where Is It?
// EYEBROW: Spotlight 4 Grammar · Module 1 · Unit 1b
// SUB: Предлоги места: in, on, under, next to, behind, in front of. Слова: watch, CDs, hairbrush, helmet, guitar, camera, roller blades, keys, gloves, mobile phone.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: in the box, on the box, under the box, next to / behind / in front of the box
const META = { ls: "s4g-m1-prep", cards: false, boardLabel: "Правила" };
const P = [
  { id: "in", phrase: "in the box", ru: "в (внутри)" },
  { id: "on", phrase: "on the box", ru: "на" },
  { id: "under", phrase: "under the box", ru: "под" },
  { id: "next", phrase: "next to the box", ru: "рядом с" },
  { id: "behind", phrase: "behind the box", ru: "за, позади" },
  { id: "front", phrase: "in front of the box", ru: "перед" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "📦 Где вещь? Предлоги места", lines: [
        ["Where's my hairbrush? — It's *next to* the clock.", "Где моя расчёска? — Рядом с часами."],
        ["The watch is *in* the box.", "Часы в коробке (внутри)."],
        ["The CDs are *on* the box.", "Диски на коробке (сверху)."] ] },
      { h: "Шесть маленьких слов", lines: [
        ["*in* — внутри", "in the box"],
        ["*on* — сверху, на", "on the box"],
        ["*under* — снизу, под", "under the box"],
        ["*next to* — рядом, сбоку", "next to the box"],
        ["*behind* — сзади, за", "behind the box"],
        ["*in front of* — спереди, перед", "in front of the box"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ in front the box  ✓ *in front of* the box", "in front of — три слова вместе, of не теряем!"],
        ["next to ≠ behind", "next to — сбоку, behind — сзади, это разные места"] ] }
    ] },
  { type: "sort", title: "Где вещь?", short: "Сортировка", instr: "Прочитай, где вещь, и выбери правильный предлог.",
    buckets: ["in", "on", "under", "next to", "behind", "in front of"],
    items: [
      { id: "in", img: "watch", t: "Часы — в коробке.", b: 0 },
      { id: "in", img: "roller-skate", t: "Ролики — в коробке.", b: 0 },
      { id: "on", img: "optical-disk", t: "Диски — на коробке.", b: 1 },
      { id: "on", img: "key", t: "Ключи — на коробке.", b: 1 },
      { id: "under", img: "hairbrush", t: "Расчёска — под коробкой.", b: 2 },
      { id: "under", img: "gloves", t: "Перчатки — под коробкой.", b: 2 },
      { id: "next", img: "rescue-workers-helmet", t: "Шлем — рядом с коробкой.", b: 3 },
      { id: "next", img: "mobile-phone", t: "Телефон — рядом с коробкой.", b: 3 },
      { id: "behind", img: "guitar", t: "Гитара — за коробкой.", b: 4 },
      { id: "behind", img: "watch", t: "Часы — за диваном.", b: 4 },
      { id: "front", img: "camera", t: "Камера — перед коробкой.", b: 5 },
      { id: "front", img: "package", t: "Коробка — перед диваном.", b: 5 }
    ] },
  { type: "gaps", title: "Выбери предлог", short: "Где это?", instr: "Посмотри на картинку и выбери правильный предлог.",
    items: [
      { id: "in", img: "watch", t: "The watch is {{*in|on|under}} the box." },
      { id: "on", img: "optical-disk", t: "The CDs are {{*on|in|behind}} the box." },
      { id: "under", img: "hairbrush", t: "The hairbrush is {{*under|on|next to}} the box." },
      { id: "next", img: "rescue-workers-helmet", t: "The helmet is {{*next to|behind|under}} the box." },
      { id: "behind", img: "guitar", t: "The guitar is {{*behind|in front of|in}} the sofa." },
      { id: "front", img: "camera", t: "The camera is {{*in front of|behind|on}} the box." },
      { id: "in", img: "roller-skate", t: "The roller blades are {{*in|on|next to}} the box." },
      { id: "on", img: "key", t: "The keys are {{*on|under|in}} the box." }
    ] },
  { type: "gaps", title: "Помоги дяде Гарри!", short: "Задание 2", instr: "Дядя Гарри не может ничего найти. Напиши предлог.",
    items: [
      { id: "under", img: "gloves", t: "Where are my gloves? — They're [[under]] the box." },
      { id: "next", img: "mobile-phone", t: "Where's my mobile phone? — It's [[next]] to the box." },
      { id: "in", img: "watch", t: "Where's my watch? — It's [[in]] the box." },
      { id: "on", img: "optical-disk", t: "Where are my CDs? — They're [[on]] the box." },
      { id: "behind", img: "guitar", t: "Where's my guitar? — It's [[behind]] the sofa." },
      { id: "front", img: "camera", t: "Where's my camera? — It's [[in]] front of the box." }
    ] },
  { type: "tf", title: "Верно или неверно?", short: "Проверь себя", instr: "Прочитай предложение. Оно написано верно?",
    items: [
      { id: "front", t: "The camera is in front the box.", ok: false, fix: "The camera is in front of the box." },
      { id: "next", t: "The helmet is next to the box.", ok: true },
      { id: "under", t: "The hairbrush is under the box.", ok: true },
      { id: "behind", t: "The guitar is behind of the sofa.", ok: false, fix: "The guitar is behind the sofa." },
      { id: "in", t: "The watch is on the box.", ok: false, fix: "The watch is in the box." },
      { id: "on", t: "The CDs are on the box.", ok: true }
    ] },
  { type: "order", title: "Собери предложение", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "in", img: "watch", q: "Часы в коробке.", s: "The watch is in the box." },
      { id: "on", img: "key", q: "Ключи на коробке.", s: "The keys are on the box." },
      { id: "under", img: "gloves", q: "Перчатки под коробкой.", s: "The gloves are under the box." },
      { id: "next", img: "rescue-workers-helmet", q: "Шлем рядом с коробкой.", s: "The helmet is next to the box." },
      { id: "behind", img: "guitar", q: "Гитара за диваном.", s: "The guitar is behind the sofa." },
      { id: "front", img: "camera", q: "Камера перед коробкой.", s: "The camera is in front of the box." }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется главная часть.",
    items: [
      { id: "in", ru: "Часы в коробке.", en: "The watch is in the box.", key: "in the box" },
      { id: "on", ru: "Диски на коробке.", en: "The CDs are on the box.", key: "on the box" },
      { id: "under", ru: "Расчёска под коробкой.", en: "The hairbrush is under the box.", key: "under the box" },
      { id: "next", ru: "Телефон рядом с коробкой.", en: "The mobile phone is next to the box.", key: "next to the box" },
      { id: "behind", ru: "Гитара за диваном.", en: "The guitar is behind the sofa.", key: "behind the sofa" },
      { id: "front", ru: "Камера перед коробкой.", en: "The camera is in front of the box.", key: "in front of the box" }
    ] }
];
