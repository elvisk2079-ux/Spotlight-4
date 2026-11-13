// TITLE: Make a Meal of It!
// EYEBROW: Spotlight 4 · Module 3 · Unit 6a · Покупки
// SUB: 8 слов из урока 6a — packet, jar, bar, carton, kilo, bottle, loaf, tin. Карточки с картинками, потом задания.
// BOARD: Твои слова
// HOME: ../index.html
const META = { ls: "s4-m3-shopping" };
const P = [
  { id: "packet", phrase: "a packet of biscuits", ru: "пачка печенья", img: "package cookie", spell: "packet", ans: "packet" },
  { id: "jar", phrase: "a jar of jam", ru: "банка варенья", img: "jar strawberry", spell: "jar", ans: "jar" },
  { id: "bar", phrase: "a bar of chocolate", ru: "плитка шоколада", img: "chocolate-bar", spell: "bar", ans: "bar" },
  { id: "carton", phrase: "a carton of milk", ru: "пакет молока", img: "glass-of-milk", spell: "carton", ans: "carton" },
  { id: "kilo", phrase: "a kilo of potatoes", ru: "килограмм картошки", img: "potato", spell: "kilo", ans: "kilo" },
  { id: "bottle", phrase: "a bottle of Coke", ru: "бутылка колы", img: "cola-bottle", spell: "bottle", ans: "bottle" },
  { id: "loaf", phrase: "a loaf of bread", ru: "булка хлеба", img: "bread", spell: "loaf", ans: "loaf" },
  { id: "tin", phrase: "a tin of beans", ru: "банка бобов (консервы)", img: "canned-food beans", spell: "tin", ans: "tin" }
];
const DRILLS = [
  { type: "listenpic", title: "Послушай и найди", short: "Слушаем", instr: "Нажми 🔊, послушай фразу и нажми на нужную картинку." },
  { type: "pic", title: "Что это?", short: "Что это?", instr: "Посмотри на картинку и выбери фразу." },
  { type: "pick", title: "Прочитай и найди", short: "Читаем", instr: "Прочитай фразу и нажми на нужную картинку." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английскую фразу, потом на перевод." },
  { type: "sort", title: "Банка/бутылка или пачка/плитка?", short: "Упаковки", instr: "В чём это продаётся — в банке/бутылке или в пачке/плитке?",
    buckets: ["🫙 jar / bottle / carton / tin", "📦 packet / bar / loaf / kilo"],
    items: [
      { id: "jar", img: "jar strawberry", t: "a jar of jam", b: 0 },
      { id: "bottle", img: "cola-bottle", t: "a bottle of Coke", b: 0 },
      { id: "carton", img: "glass-of-milk", t: "a carton of milk", b: 0 },
      { id: "tin", img: "canned-food beans", t: "a tin of beans", b: 0 },
      { id: "packet", img: "package cookie", t: "a packet of biscuits", b: 1 },
      { id: "bar", img: "chocolate-bar", t: "a bar of chocolate", b: 1 },
      { id: "loaf", img: "bread", t: "a loaf of bread", b: 1 },
      { id: "kilo", img: "potato", t: "a kilo of potatoes", b: 1 }
    ] },
  { type: "gaps", title: "В магазине", short: "Диалог", instr: "Прочитай диалог в магазине и выбери слово.",
    items: [
      { id: "packet", img: "package cookie", t: "Can I have a {{*packet|jar|bottle}} of biscuits, please? — Yes, of course!" },
      { id: "jar", img: "jar strawberry", t: "Can I have a {{*jar|loaf|tin}} of jam, please? — Here you are." },
      { id: "bar", img: "chocolate-bar", t: "I'd like a {{*bar|carton|kilo}} of chocolate, please. — That's one pound ten pence." },
      { id: "carton", img: "glass-of-milk", t: "We need a {{*carton|bar|packet}} of milk for breakfast." },
      { id: "kilo", img: "potato", t: "Can I have a {{*kilo|jar|loaf}} of potatoes, please? — Yes, two pounds fifteen." },
      { id: "bottle", img: "cola-bottle", t: "I'd like a {{*bottle|tin|packet}} of Coke, please." },
      { id: "loaf", img: "bread", t: "We need a {{*loaf|bar|tin}} of bread for sandwiches." },
      { id: "tin", img: "canned-food beans", t: "Can I have a {{*tin|jar|carton}} of beans, please? — That's sixty-seven pence." }
    ] },
  { type: "order", title: "Собери фразу", short: "Фразы", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "packet", img: "package cookie", q: "Пачка печенья.", s: "a packet of biscuits" },
      { id: "jar", img: "jar strawberry", q: "Банка варенья.", s: "a jar of jam" },
      { id: "bar", img: "chocolate-bar", q: "Плитка шоколада.", s: "a bar of chocolate" },
      { id: "carton", img: "glass-of-milk", q: "Пакет молока.", s: "a carton of milk" },
      { id: "kilo", img: "potato", q: "Килограмм картошки.", s: "a kilo of potatoes" },
      { id: "bottle", img: "cola-bottle", q: "Бутылка колы.", s: "a bottle of Coke" },
      { id: "loaf", img: "bread", q: "Булка хлеба.", s: "a loaf of bread" },
      { id: "tin", img: "canned-food beans", q: "Банка бобов.", s: "a tin of beans" }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово." },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Посмотри на картинку и напиши нужное слово (packet, jar, bar...). Забыл — вернись к карточкам." }
];
