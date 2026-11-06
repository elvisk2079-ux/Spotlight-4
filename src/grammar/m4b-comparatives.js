// TITLE: Bigger or Smaller?
// EYEBROW: Spotlight 4 Grammar · Module 4 · Unit 8a
// SUB: Сравниваем животных: bigger than, funnier than, better, worse. Правило, картинки и задания с проверкой.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: small → smaller than, big → bigger, funny → funnier, good → better
const META = { ls: "s4g-m4-comparatives", cards: false, boardLabel: "Правила" };
const P = [
  { id: "er", phrase: "small → smaller", ru: "обычно + -er" },
  { id: "e", phrase: "nice → nicer", ru: "на -e: только -r" },
  { id: "dbl", phrase: "big → bigger, fat → fatter", ru: "удваиваем букву" },
  { id: "ier", phrase: "funny → funnier", ru: "-y → -ier" },
  { id: "irr", phrase: "good → better, bad → worse", ru: "особые слова" },
  { id: "than", phrase: "bigger than", ru: "than = чем" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "Как сравнить двух животных", lines: [
        ["Parrots are *smaller than* pandas.", "Попугаи меньше, чем панды."],
        ["Whales are *bigger than* dolphins.", "Киты больше, чем дельфины."],
        ["than = чем", "после сравнения всегда than"] ] },
      { h: "Как образовать", lines: [
        ["small → small*er*, tall → tall*er*, clever → clever*er*", "обычно прибавляем -er"],
        ["nice → nice*r*", "слово на -e: только -r"],
        ["big → big*ger*, fat → fat*ter*", "короткое слово: удваиваем последнюю букву"],
        ["funny → funn*ier*, lazy → laz*ier*", "-y меняем на -ier"] ] },
      { h: "Особые слова — запомни!", warn: true, lines: [
        ["good → *better*", "хороший → лучше"],
        ["bad → *worse*", "плохой → хуже"],
        ["✗ gooder, ✗ bader, ✗ more big", "так нельзя!"] ] }
    ] },
  { type: "sort", title: "Как образовать?", short: "Сортировка", instr: "Какое правило подходит для слова?",
    buckets: ["+ -er / -r", "удвоить букву", "-y → -ier", "особое слово"],
    items: [
      { id: "er", t: "tall → taller", b: 0 },
      { id: "er", t: "long → longer", b: 0 },
      { id: "e", t: "nice → nicer", b: 0 },
      { id: "dbl", t: "big → bigger", b: 1 },
      { id: "dbl", t: "fat → fatter", b: 1 },
      { id: "ier", t: "funny → funnier", b: 2 },
      { id: "ier", t: "lazy → lazier", b: 2 },
      { id: "irr", t: "good → better", b: 3 },
      { id: "irr", t: "bad → worse", b: 3 }
    ] },
  { type: "gaps", title: "Кто больше?", short: "Картинки", instr: "Посмотри на картинку и выбери слово.",
    items: [
      { id: "dbl", img: "spouting-whale dolphin", t: "Whales are {{*bigger|smaller}} than dolphins." },
      { id: "er", img: "parrot panda", t: "Parrots are {{*smaller|bigger}} than pandas." },
      { id: "er", img: "giraffe elephant", t: "A giraffe is {{*taller|shorter}} than an elephant." },
      { id: "er", img: "crocodile lizard", t: "A crocodile is {{*longer|shorter}} than a lizard." },
      { id: "dbl", img: "hippopotamus seal", t: "A hippo is {{*fatter|thinner}} than a seal." },
      { id: "er", img: "mouse elephant", t: "A mouse is {{*smaller|bigger}} than an elephant." },
      { id: "ier", img: "monkey parrot", t: "Monkeys are {{*funnier|funnyer|more funny}} than parrots." },
      { id: "er", img: "dolphin fish", t: "A dolphin is {{*cleverer|cleverier|more clever}} than a fish." }
    ] },
  { type: "gaps", title: "Поставь слово в нужную форму", short: "Пишем", instr: "Напиши слово в скобках в форме сравнения. Пример: clever → cleverer.",
    items: [
      { id: "er", img: "elephant giraffe", t: "An elephant is [[shorter]] (short) than a giraffe." },
      { id: "dbl", img: "kangaroo lizard", t: "A kangaroo is [[bigger]] (big) than a lizard." },
      { id: "er", img: "tiger dog-face", t: "A tiger is [[taller]] (tall) than a dog." },
      { id: "dbl", img: "hippopotamus seal", t: "A hippo is [[fatter]] (fat) than a seal." },
      { id: "ier", img: "monkey parrot", t: "A monkey is [[funnier]] (funny) than a parrot." },
      { id: "e", img: "cat-face", t: "My cat is [[nicer]] (nice) than your cat!" },
      { id: "ier", img: "sloth", t: "A sloth is [[lazier]] (lazy) than a monkey." },
      { id: "irr", img: "thumbs-up", t: "Ice cream is [[better]] (good) than soup!" },
      { id: "irr", img: "thumbs-down", t: "Rain is [[worse]] (bad) than snow." }
    ] },
  { type: "tf", title: "Правда или нет?", short: "Правда?", instr: "Посмотри на картинку. Это правда?",
    items: [
      { id: "than", img: "spouting-whale dolphin", t: "Whales are bigger than dolphins.", ok: true },
      { id: "er", img: "mouse elephant", t: "A mouse is taller than an elephant.", ok: false, fix: "A mouse is smaller than an elephant." },
      { id: "er", img: "giraffe hippopotamus", t: "A giraffe is taller than a hippo.", ok: true },
      { id: "er", img: "lizard crocodile", t: "A lizard is longer than a crocodile.", ok: false, fix: "A lizard is shorter than a crocodile." },
      { id: "dbl", img: "seal hippopotamus", t: "A seal is fatter than a hippo.", ok: false, fix: "A hippo is fatter than a seal." }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "dbl", t: "Whales are biger than dolphins.", ok: false, fix: "Whales are bigger than dolphins." },
      { id: "ier", t: "Monkeys are funnyer than seals.", ok: false, fix: "Monkeys are funnier than seals." },
      { id: "irr", t: "My picture is gooder than yours.", ok: false, fix: "My picture is better than yours." },
      { id: "than", t: "A giraffe is taller then a horse.", ok: false, fix: "A giraffe is taller than a horse." },
      { id: "irr", t: "Today the weather is worse than yesterday.", ok: true },
      { id: "e", t: "This dog is nicer than that dog.", ok: true }
    ] },
  { type: "order", title: "Собери предложение", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "than", img: "spouting-whale dolphin", q: "Киты больше, чем дельфины.", s: "Whales are bigger than dolphins." },
      { id: "er", img: "parrot panda", q: "Попугаи меньше, чем панды.", s: "Parrots are smaller than pandas." },
      { id: "ier", img: "monkey", q: "Обезьяны смешнее, чем жирафы.", s: "Monkeys are funnier than giraffes." },
      { id: "irr", img: "thumbs-up", q: "Мой рисунок лучше.", s: "My picture is better." },
      { id: "e", img: "cat-face", q: "Твоя кошка милее, чем моя.", s: "Your cat is nicer than my cat." }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется слово сравнения.",
    items: [
      { id: "er", ru: "Жираф выше, чем слон.", en: "A giraffe is taller than an elephant.", key: "taller than" },
      { id: "dbl", ru: "Слон больше, чем кенгуру.", en: "An elephant is bigger than a kangaroo.", key: "bigger than" },
      { id: "ier", ru: "Обезьяна смешнее, чем тюлень.", en: "A monkey is funnier than a seal.", key: "funnier than" },
      { id: "irr", ru: "Летом лучше, чем зимой.", en: "Summer is better than winter.", key: "better than" },
      { id: "than", ru: "Дельфины умнее, чем рыбы.", en: "Dolphins are cleverer than fish.", key: "cleverer than|smarter than" }
    ] }
];
