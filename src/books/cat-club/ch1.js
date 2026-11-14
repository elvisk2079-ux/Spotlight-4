// TITLE: Chapter 1. The Cat Club
// EYEBROW: The Cat Club and the Secret Cake · Глава 1 из 6
// SUB: Слова из главы 1: group, sometimes, calendar, whisper, surprise, bake, secret. Сначала карточки, потом задания одно за другим.
// BOARD: Слова главы 1
// HOME: index.html
// TABS: book
const META = { ls: "s4-cat-club-ch1" };
const P = [
  { id: "group", phrase: "group", ru: "группа", img: "people-holding-hands" },
  { id: "sometimes", phrase: "sometimes", ru: "иногда" },
  { id: "calendar", phrase: "calendar", ru: "календарь", img: "spiral-calendar" },
  { id: "whisper", phrase: "whisper", ru: "шептать", img: "shushing-face" },
  { id: "surprise", phrase: "surprise", ru: "сюрприз", img: "wrapped-gift" },
  { id: "bake", phrase: "bake", ru: "печь (выпекать)", img: "bread" },
  { id: "secret", phrase: "secret", ru: "секрет", img: "zipper-mouth-face" }
];
P.forEach(p => { p.en = p.ru; });
const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", size: 5, instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "listenpic", title: "Послушай и найди картинку", short: "Картинки", n: 4, instr: "Нажми 🔊, послушай слово и нажми на нужную картинку." },
  { type: "pic", title: "Что на картинке?", short: "Что это?", instr: "Посмотри на картинку и выбери слово." },
  { type: "pick", title: "Прочитай и найди картинку", short: "Читаем", n: 4, instr: "Прочитай слово и нажми на нужную картинку." },
  { type: "meaning", title: "Как это по-английски?", short: "Перевод", instr: "Прочитай слово по-русски и выбери английское." },
  { type: "gaps", title: "Вспомни главу 1", short: "История", keepOrder: true, layout: "text", pic: "🐱🐱🐱", story: "Chapter 1. The Cat Club", instr: "Прочитай кусочки из главы и выбери слово.",
    items: [
      { id: "group", t: "\"We are not just a {{*group|recipe|ceiling}},\" says Polina. \"We are the Cat Club!\"" },
      { id: "sometimes", t: "The cats sit on the books. {{*Sometimes|Of course|Under}} they sleep on the homework!" },
      { id: "calendar", t: "Veronika looks at the {{*calendar|fridge|oven}} on the wall. There is a big red heart on Saturday." },
      { id: "whisper", t: "\"Look! Saturday is our teacher's birthday!\" she {{*whispers|sneezes|purrs}}." },
      { id: "surprise", t: "\"Let's make a {{*surprise|mess|counter}}!\" says Anya." },
      { id: "bake", t: "\"Let's {{*bake|wash|push}} a cake!\" says Polina." },
      { id: "secret", t: "Shhh... It's a {{*secret|spoon|tail}}!" }
    ] },
  { type: "tf", title: "Верно или неверно?", short: "Верно?", instr: "Вспомни главу 1. Это верно или неверно?",
    items: [
      {"id": "group", "t": "Anya, Veronika and Polina are a group of friends.", "ok": true},
      {"id": "sometimes", "t": "The cats sometimes sleep on the homework.", "ok": true},
      {"id": "calendar", "t": "The calendar is on the table.", "ok": false, "fix": "The calendar is on the wall."},
      {"id": "whisper", "t": "Veronika shouts: \"Saturday is our teacher's birthday!\"", "ok": false, "fix": "Veronika whispers."},
      {"id": "surprise", "t": "The girls want to make a surprise for the teacher.", "ok": true},
      {"id": "bake", "t": "Polina wants to bake a cake.", "ok": true},
      {"id": "secret", "t": "The cake is a secret.", "ok": true}
    ] },
  { type: "gaps", title: "Новые предложения", short: "Предложения", instr: "Это уже не из книжки! Прочитай и выбери подходящее слово.",
    items: [
      { id: "group", img: "people-holding-hands", t: "Our class is a big {{*group|secret|calendar}}." },
      { id: "sometimes", t: "I {{*sometimes|whisper|bake}} play football. Not every day." },
      { id: "calendar", img: "spiral-calendar", t: "Look at the {{*calendar|surprise|group}}! Today is Monday." },
      { id: "whisper", img: "shushing-face", t: "Shhh! Please {{*whisper|bake|sometimes}}. The baby is sleeping." },
      { id: "surprise", img: "wrapped-gift", t: "Happy birthday! Here is a {{*surprise|calendar|group}} for you!" },
      { id: "bake", img: "bread", t: "Granny likes to {{*bake|whisper|sometimes}} cakes and pies." },
      { id: "secret", img: "zipper-mouth-face", t: "Don't tell anyone! It's a {{*secret|calendar|group}}!" }
    ] },
  { type: "order", title: "Собери фразу", short: "Фразы", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "bake", img: "bread", q: "Давайте испечём торт!", s: "Let's bake a cake!" },
      { id: "secret", img: "zipper-mouth-face", q: "Это секрет!", s: "It's a secret!" },
      { id: "surprise", img: "wrapped-gift", q: "Давайте сделаем сюрприз!", s: "Let's make a surprise!" },
      { id: "group", img: "people-holding-hands", q: "Мы не просто группа.", s: "We are not just a group." },
      { id: "sometimes", q: "Иногда они спят на домашнем задании.", s: "Sometimes they sleep on the homework." },
      { id: "calendar", img: "spiral-calendar", q: "Посмотри на календарь!", s: "Look at the calendar!" },
      { id: "whisper", img: "shushing-face", q: "Она шепчет.", s: "She whispers." }
    ] },
  { type: "gaps", title: "Впиши слово", short: "Впиши", instr: "Выбери слово из рамки и впиши его в предложение.",
    bank: ["bake", "calendar", "group", "secret", "sometimes", "surprise", "whispers"],
    items: [
      { id: "group", img: "people-holding-hands", t: "The girls are a [[group]] of friends." },
      { id: "sometimes", t: "The cats [[sometimes]] sleep on the books." },
      { id: "calendar", img: "spiral-calendar", t: "There is a red heart on the [[calendar]]." },
      { id: "whisper", img: "shushing-face", t: "Veronika [[whispers]]: \"It's our teacher's birthday!\"" },
      { id: "surprise", img: "wrapped-gift", t: "Let's make a [[surprise]]!" },
      { id: "bake", img: "bread", t: "Let's [[bake]] a cake!" },
      { id: "secret", img: "zipper-mouth-face", t: "Shhh... It's a [[secret]]!" }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово.", ids: ["group", "sometimes", "calendar", "whisper", "surprise", "bake", "secret"] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Прочитай перевод и напиши слово по-английски. Забыл — вернись к карточкам." }
];
