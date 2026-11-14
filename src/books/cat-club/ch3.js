// TITLE: Chapter 3. At the Shop
// EYEBROW: The Cat Club and the Secret Cake · Глава 3 из 6
// SUB: Слова из главы 3: shopkeeper, fresh, counter, giggle, hairy, delicious, just in case, heavy. Сначала карточки, потом задания одно за другим.
// BOARD: Слова главы 3
// HOME: index.html
// TABS: book
const META = { ls: "s4-cat-club-ch3" };
const P = [
  { id: "shopkeeper", phrase: "shopkeeper", ru: "продавец", img: "convenience-store" },
  { id: "fresh", phrase: "fresh", ru: "свежий" },
  { id: "counter", phrase: "counter", ru: "прилавок" },
  { id: "giggle", phrase: "giggle", ru: "хихикать", img: "face-with-hand-over-mouth" },
  { id: "hairy", phrase: "hairy", ru: "волосатый" },
  { id: "delicious", phrase: "delicious", ru: "очень вкусный", img: "face-savoring-food" },
  { id: "case", phrase: "just in case", ru: "на всякий случай" },
  { id: "heavy", phrase: "heavy", ru: "тяжёлый", img: "person-lifting-weights" }
];
P.forEach(p => { p.en = p.ru; });
const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", size: 5, instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "listenpic", title: "Послушай и найди картинку", short: "Картинки", n: 4, instr: "Нажми 🔊, послушай слово и нажми на нужную картинку." },
  { type: "pic", title: "Что на картинке?", short: "Что это?", instr: "Посмотри на картинку и выбери слово." },
  { type: "pick", title: "Прочитай и найди картинку", short: "Читаем", n: 4, instr: "Прочитай слово и нажми на нужную картинку." },
  { type: "meaning", title: "Как это по-английски?", short: "Перевод", instr: "Прочитай слово по-русски и выбери английское." },
  { type: "gaps", title: "Вспомни главу 3", short: "История", keepOrder: true, layout: "text", pic: "🛒🍍🥥", story: "Chapter 3. At the Shop", instr: "Прочитай кусочки из главы и выбери слово.",
    items: [
      { id: "shopkeeper", t: "Mr Brown, the {{*shopkeeper|baker|teacher}}, smiles. \"Good morning, girls!\"" },
      { id: "fresh", t: "\"Do you want tomatoes? They are {{*fresh|empty|guilty}} today.\"" },
      { id: "counter", t: "There is salt and pepper on the {{*counter|ceiling|tail}}." },
      { id: "giggle", t: "The pepper flies up into his nose. \"A-a-a-CHOO!\" The girls {{*giggle|whisper|wash}}." },
      { id: "hairy", t: "There is a yellow pineapple, a big mango and a brown, {{*hairy|quiet|empty}} coconut." },
      { id: "delicious", t: "\"Mmm, they look {{*delicious|disgusting|terrible}},\" says Veronika." },
      { id: "case", t: "\"Why?\" asks Veronika. Anya smiles. \"{{*Just in case|Of course|On top}}!\"" },
      { id: "heavy", t: "Now the basket is very {{*heavy|empty|quiet}}. And... it is moving!" }
    ] },
  { type: "tf", title: "Верно или неверно?", short: "Верно?", instr: "Вспомни главу 3. Это верно или неверно?",
    items: [
      {"id": "shopkeeper", "t": "Mr Brown is the shopkeeper.", "ok": true},
      {"id": "fresh", "t": "The tomatoes are fresh today.", "ok": true},
      {"id": "counter", "t": "The salt and pepper are on the counter.", "ok": true},
      {"id": "giggle", "t": "Mr Brown sneezes and the girls cry.", "ok": false, "fix": "The girls giggle."},
      {"id": "hairy", "t": "The coconut is yellow.", "ok": false, "fix": "The coconut is brown and hairy."},
      {"id": "delicious", "t": "Veronika says: \"Mmm, they look delicious!\"", "ok": true},
      {"id": "case", "t": "Anya buys the fruit just in case.", "ok": true},
      {"id": "heavy", "t": "The basket is empty.", "ok": false, "fix": "The basket is very heavy. There is a cat in it!"}
    ] },
  { type: "gaps", title: "Новые предложения", short: "Предложения", instr: "Это уже не из книжки! Прочитай и выбери подходящее слово.",
    items: [
      { id: "shopkeeper", img: "convenience-store", t: "The {{*shopkeeper|counter|coconut}} says: \"Good morning! What can I get you?\"" },
      { id: "fresh", t: "This bread is {{*fresh|hairy|heavy}}. It's from today!" },
      { id: "counter", t: "Put your basket on the {{*counter|shopkeeper|case}}, please." },
      { id: "giggle", img: "face-with-hand-over-mouth", t: "The joke is funny. The children {{*giggle|heavy|fresh}}." },
      { id: "hairy", t: "My dog is big and {{*hairy|fresh|delicious}}." },
      { id: "delicious", img: "face-savoring-food", t: "Mmm! Mum's pizza is {{*delicious|hairy|heavy}}!" },
      { id: "case", t: "Take some water, just in {{*case|counter|shop}}." },
      { id: "heavy", img: "person-lifting-weights", t: "My school bag is very {{*heavy|fresh|delicious}}. There are a lot of books in it." }
    ] },
  { type: "order", title: "Собери фразу", short: "Фразы", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "shopkeeper", img: "convenience-store", q: "Что вам дать?", s: "What can I get you?" },
      { id: "fresh", q: "Они сегодня свежие.", s: "They are fresh today." },
      { id: "giggle", img: "face-with-hand-over-mouth", q: "Девочки хихикают.", s: "The girls giggle." },
      { id: "delicious", img: "face-savoring-food", q: "Они выглядят очень вкусно!", s: "They look delicious!" },
      { id: "case", q: "На всякий случай!", s: "Just in case!" },
      { id: "heavy", img: "person-lifting-weights", q: "Корзина очень тяжёлая.", s: "The basket is very heavy." },
      { id: "counter", q: "На прилавке есть соль.", s: "There is salt on the counter." },
      { id: "hairy", q: "Кокос коричневый и волосатый.", s: "The coconut is brown and hairy." }
    ] },
  { type: "gaps", title: "Впиши слово", short: "Впиши", instr: "Выбери слово из рамки и впиши его в предложение.",
    bank: ["case", "counter", "delicious", "fresh", "giggle", "hairy", "heavy", "shopkeeper"],
    items: [
      { id: "shopkeeper", img: "convenience-store", t: "Mr Brown is a [[shopkeeper]]." },
      { id: "fresh", t: "The tomatoes are [[fresh]] today." },
      { id: "counter", t: "The pepper is on the [[counter]]." },
      { id: "giggle", img: "face-with-hand-over-mouth", t: "Mr Brown sneezes and the girls [[giggle]]." },
      { id: "hairy", t: "The coconut is brown and [[hairy]]." },
      { id: "delicious", img: "face-savoring-food", t: "Mmm, the mango looks [[delicious]]!" },
      { id: "case", t: "Anya buys the pineapple just in [[case]]." },
      { id: "heavy", img: "person-lifting-weights", t: "The basket is very [[heavy]]." }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово.", ids: ["shopkeeper", "fresh", "counter", "giggle", "hairy", "delicious", "heavy"] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Прочитай перевод и напиши слово по-английски. Забыл — вернись к карточкам." }
];
