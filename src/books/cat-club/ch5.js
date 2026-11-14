// TITLE: Chapter 5. A Terrible Cake
// EYEBROW: The Cat Club and the Secret Cake · Глава 5 из 6
// SUB: Слова из главы 5: terrible, baker, bowl, add, spoon, mix, oven, smell, golden, piece, taste, disgusting, ceiling, guilty. Сначала карточки, потом задания одно за другим.
// BOARD: Слова главы 5
// HOME: index.html
// TABS: book
const META = { ls: "s4-cat-club-ch5" };
const P = [
  { id: "terrible", phrase: "terrible", ru: "ужасный", img: "thumbs-down" },
  { id: "baker", phrase: "baker", ru: "пекарь", img: "cook" },
  { id: "bowl", phrase: "bowl", ru: "миска", img: "bowl-with-spoon" },
  { id: "add", phrase: "add", ru: "добавлять", img: "plus" },
  { id: "spoon", phrase: "spoon", ru: "ложка", img: "spoon" },
  { id: "mix", phrase: "mix", ru: "мешать" },
  { id: "oven", phrase: "oven", ru: "духовка" },
  { id: "smell", phrase: "smell", ru: "пахнуть", img: "nose" },
  { id: "golden", phrase: "golden", ru: "золотистый" },
  { id: "piece", phrase: "piece", ru: "кусочек", img: "shortcake" },
  { id: "taste", phrase: "taste", ru: "пробовать на вкус", img: "tongue" },
  { id: "disgusting", phrase: "disgusting", ru: "отвратительный", img: "nauseated-face" },
  { id: "ceiling", phrase: "ceiling", ru: "потолок" },
  { id: "guilty", phrase: "guilty", ru: "виноватый", img: "downcast-face-with-sweat" }
];
P.forEach(p => { p.en = p.ru; });
const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", size: 5, instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "listenpic", title: "Послушай и найди картинку", short: "Картинки", n: 4, instr: "Нажми 🔊, послушай слово и нажми на нужную картинку." },
  { type: "pic", title: "Что на картинке?", short: "Что это?", instr: "Посмотри на картинку и выбери слово." },
  { type: "pick", title: "Прочитай и найди картинку", short: "Читаем", n: 4, instr: "Прочитай слово и нажми на нужную картинку." },
  { type: "meaning", title: "Как это по-английски?", short: "Перевод", instr: "Прочитай слово по-русски и выбери английское." },
  { type: "gaps", title: "Вспомни главу 5", short: "История", keepOrder: true, layout: "text", pic: "🎂🧂", story: "Chapter 5. A Terrible Cake", instr: "Прочитай кусочки из главы и выбери слово.",
    items: [
      { id: "baker", t: "Now the girls are {{*bakers|shopkeepers|teachers}}!" },
      { id: "bowl", t: "Anya puts the flour in a big {{*bowl|jar|fridge}}." },
      { id: "add", t: "Veronika {{*adds|whispers|sneezes}} the butter." },
      { id: "spoon", t: "Polina takes a white jar. \"Sugar!\" she says, and puts in two big {{*spoons|paws|pieces}}." },
      { id: "mix", t: "Then they add the two lemons. {{*Mix|Push|Purr}}, mix, mix!" },
      { id: "oven", t: "The cake goes into the {{*oven|fridge|basket}}." },
      { id: "smell", t: "The kitchen {{*smells|sneezes|watches}} wonderful." },
      { id: "golden", t: "After forty minutes the cake is ready. It is big and {{*golden|empty|hairy}}." },
      { id: "piece", t: "\"It's beautiful!\" says Anya. She cuts three small {{*pieces|spoons|tails}}." },
      { id: "taste", t: "The girls {{*taste|wash|push}} the cake." },
      { id: "disgusting", t: "\"Yuck! It's {{*disgusting|delicious|fresh}}! It's salty!\"" },
      { id: "terrible", t: "It isn't sugar. It's salt! What a {{*terrible|golden|clever}} cake!" },
      { id: "ceiling", t: "The girls look at the cats. Polina's cat looks at the {{*ceiling|counter|calendar}}." },
      { id: "guilty", t: "It looks very, very {{*guilty|fresh|golden}}." }
    ] },
  { type: "tf", title: "Верно или неверно?", short: "Верно?", instr: "Вспомни главу 5. Это верно или неверно?",
    items: [
      {"id": "baker", "t": "The girls are bakers now.", "ok": true},
      {"id": "bowl", "t": "Anya puts the flour in a big bowl.", "ok": true},
      {"id": "add", "t": "Veronika adds the milk.", "ok": false, "fix": "Veronika adds the butter."},
      {"id": "spoon", "t": "Polina puts in two big spoons from the white jar.", "ok": true},
      {"id": "mix", "t": "The girls mix the ingredients.", "ok": true},
      {"id": "oven", "t": "The cake goes into the fridge.", "ok": false, "fix": "The cake goes into the oven."},
      {"id": "smell", "t": "The kitchen smells terrible.", "ok": false, "fix": "The kitchen smells wonderful."},
      {"id": "golden", "t": "The cake is big and golden.", "ok": true},
      {"id": "piece", "t": "Anya cuts three big pieces.", "ok": false, "fix": "Anya cuts three small pieces."},
      {"id": "taste", "t": "The girls taste the cake.", "ok": true},
      {"id": "disgusting", "t": "The cake is disgusting. It's salty!", "ok": true},
      {"id": "terrible", "t": "It's a terrible cake!", "ok": true},
      {"id": "ceiling", "t": "Polina's cat looks at the floor.", "ok": false, "fix": "Polina's cat looks at the ceiling."},
      {"id": "guilty", "t": "Polina's cat looks very guilty.", "ok": true}
    ] },
  { type: "gaps", title: "Новые предложения", short: "Предложения", instr: "Это уже не из книжки! Прочитай и выбери подходящее слово.",
    items: [
      { id: "terrible", img: "thumbs-down", t: "The weather is {{*terrible|golden|guilty}}. It's cold and rainy." },
      { id: "baker", img: "cook", t: "A {{*baker|spoon|bowl}} makes bread and cakes." },
      { id: "bowl", img: "bowl-with-spoon", t: "I eat my cornflakes from a {{*bowl|oven|ceiling}}." },
      { id: "add", img: "plus", t: "{{*Add|Smell|Taste}} some sugar to your tea." },
      { id: "spoon", img: "spoon", t: "Can I have a {{*spoon|baker|ceiling}} for my soup?" },
      { id: "mix", t: "{{*Mix|Smell|Cut}} the eggs and the milk." },
      { id: "oven", t: "The pizza is hot. It's from the {{*oven|bowl|ceiling}}." },
      { id: "smell", img: "nose", t: "Mmm! The flowers {{*smell|mix|add}} nice." },
      { id: "golden", t: "In autumn the leaves are red and {{*golden|guilty|terrible}}." },
      { id: "piece", img: "shortcake", t: "Can I have a {{*piece|bowl|spoon}} of cake, please?" },
      { id: "taste", img: "tongue", t: "{{*Taste|Mix|Add}} the soup. Is it good?" },
      { id: "disgusting", img: "nauseated-face", t: "Yuck! This milk is old. It's {{*disgusting|golden|delicious}}!" },
      { id: "ceiling", t: "There is a lamp on the {{*ceiling|bowl|spoon}}." },
      { id: "guilty", img: "downcast-face-with-sweat", t: "The dog eats my sandwich. Now it looks {{*guilty|golden|terrible}}." }
    ] },
  { type: "order", title: "Собери фразу", short: "Фразы", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "baker", img: "cook", q: "Теперь девочки — пекари!", s: "Now the girls are bakers!" },
      { id: "mix", q: "Мешай, мешай, мешай!", s: "Mix, mix, mix!" },
      { id: "oven", q: "Торт идёт в духовку.", s: "The cake goes into the oven." },
      { id: "smell", img: "nose", q: "Кухня чудесно пахнет.", s: "The kitchen smells wonderful." },
      { id: "golden", q: "Торт большой и золотистый.", s: "The cake is big and golden." },
      { id: "taste", img: "tongue", q: "Девочки пробуют торт.", s: "The girls taste the cake." },
      { id: "disgusting", img: "nauseated-face", q: "Это отвратительно!", s: "It's disgusting!" },
      { id: "guilty", img: "downcast-face-with-sweat", q: "Кошка выглядит виноватой.", s: "The cat looks guilty." },
      { id: "add", img: "plus", q: "Добавь масло.", s: "Add the butter." }
    ] },
  { type: "gaps", title: "Впиши слово", short: "Впиши", instr: "Выбери слово из рамки и впиши его в предложение.",
    bank: ["adds", "bakers", "bowl", "ceiling", "golden", "oven", "pieces", "smells", "spoons", "terrible"],
    items: [
      { id: "baker", img: "cook", t: "Now the girls are [[bakers]]!" },
      { id: "bowl", img: "bowl-with-spoon", t: "Anya puts the flour in a big [[bowl]]." },
      { id: "add", img: "plus", t: "Veronika [[adds]] the butter." },
      { id: "spoon", img: "spoon", t: "Polina puts in two big [[spoons]]." },
      { id: "oven", t: "The cake goes into the [[oven]]." },
      { id: "smell", img: "nose", t: "The kitchen [[smells]] wonderful." },
      { id: "golden", t: "The cake is big and [[golden]]." },
      { id: "piece", img: "shortcake", t: "Anya cuts three small [[pieces]]." },
      { id: "ceiling", t: "The cat looks at the [[ceiling]]." },
      { id: "terrible", img: "thumbs-down", t: "Salt in a cake? It's [[terrible]]!" }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово.", ids: ["terrible", "baker", "bowl", "add", "spoon", "mix", "oven", "smell", "golden", "piece", "taste", "disgusting", "ceiling", "guilty"] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Прочитай перевод и напиши слово по-английски. Забыл — вернись к карточкам." }
];
