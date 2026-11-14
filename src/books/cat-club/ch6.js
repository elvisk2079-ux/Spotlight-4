// TITLE: Chapter 6. The Best Surprise
// EYEBROW: The Cat Club and the Secret Cake · Глава 6 из 6
// SUB: Слова из главы 6: idea, cut, glass, on top, understand, of course, clever, under, purr. Сначала карточки, потом задания одно за другим.
// BOARD: Слова главы 6
// HOME: index.html
// TABS: book
const META = { ls: "s4-cat-club-ch6" };
const P = [
  { id: "idea", phrase: "idea", ru: "идея", img: "light-bulb" },
  { id: "cut", phrase: "cut", ru: "резать", img: "kitchen-knife" },
  { id: "glass", phrase: "glass", ru: "стеклянный" },
  { id: "top", phrase: "on top", ru: "сверху" },
  { id: "understand", phrase: "understand", ru: "понимать" },
  { id: "course", phrase: "of course", ru: "конечно", img: "thumbs-up" },
  { id: "clever", phrase: "clever", ru: "умный", img: "brain" },
  { id: "under", phrase: "under", ru: "под" },
  { id: "purr", phrase: "purr", ru: "мурлыкать", img: "smiling-cat-with-heart-eyes" }
];
P.forEach(p => { p.en = p.ru; });
const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", size: 5, instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "listenpic", title: "Послушай и найди картинку", short: "Картинки", n: 4, instr: "Нажми 🔊, послушай слово и нажми на нужную картинку." },
  { type: "pic", title: "Что на картинке?", short: "Что это?", instr: "Посмотри на картинку и выбери слово." },
  { type: "pick", title: "Прочитай и найди картинку", short: "Читаем", n: 4, instr: "Прочитай слово и нажми на нужную картинку." },
  { type: "meaning", title: "Как это по-английски?", short: "Перевод", instr: "Прочитай слово по-русски и выбери английское." },
  { type: "gaps", title: "Вспомни главу 6", short: "История", keepOrder: true, layout: "text", pic: "🍍🥭🥥💛", story: "Chapter 6. The Best Surprise", instr: "Прочитай кусочки из главы и выбери слово.",
    items: [
      { id: "idea", t: "Anya looks at the basket. \"Girls, I have got an {{*idea|oven|mess}}!\"" },
      { id: "cut", t: "They {{*cut|sneeze|whisper}} the fruit..." },
      { id: "glass", t: "...and put it in a big {{*glass|hairy|guilty}} bowl." },
      { id: "top", t: "They put some lemon {{*on top|under|just in case}}. It's a beautiful fruit salad!" },
      { id: "understand", t: "\"Now I {{*understand|bake|purr}} your 'just in case'!\" laughs Veronika." },
      { id: "course", t: "In the evening the Cat Club goes to the teacher's house. And the cats go too, {{*of course|sometimes|on top}}!" },
      { id: "clever", t: "\"Mmm! It's delicious! Thank you, my {{*clever|guilty|hairy}} girls!\"" },
      { id: "under", t: "And the salty cake? Look {{*under|on top|of course}} the table!" },
      { id: "purr", t: "Three cats are eating it. {{*Purr|Achoo|Yuck}}, purr, purr..." }
    ] },
  { type: "tf", title: "Верно или неверно?", short: "Верно?", instr: "Вспомни главу 6. Это верно или неверно?",
    items: [
      {"id": "idea", "t": "Anya has got an idea.", "ok": true},
      {"id": "cut", "t": "The girls cut the fruit.", "ok": true},
      {"id": "glass", "t": "They put the fruit in a big glass bowl.", "ok": true},
      {"id": "top", "t": "They put some sugar on top.", "ok": false, "fix": "They put some lemon on top."},
      {"id": "understand", "t": "Now Veronika understands Anya's \"just in case\".", "ok": true},
      {"id": "course", "t": "The cats stay at home.", "ok": false, "fix": "The cats go too, of course!"},
      {"id": "clever", "t": "The teacher says: \"Thank you, my clever girls!\"", "ok": true},
      {"id": "under", "t": "The cats eat the salty cake on the table.", "ok": false, "fix": "The cats eat the salty cake under the table."},
      {"id": "purr", "t": "The cats purr. They are happy.", "ok": true}
    ] },
  { type: "gaps", title: "Новые предложения", short: "Предложения", instr: "Это уже не из книжки! Прочитай и выбери подходящее слово.",
    items: [
      { id: "idea", img: "light-bulb", t: "Let's go to the park! — Good {{*idea|glass|top}}!" },
      { id: "cut", img: "kitchen-knife", t: "Can you {{*cut|purr|understand}} the bread, please?" },
      { id: "glass", t: "This is a {{*glass|clever|purr}} bowl. Be careful!" },
      { id: "top", t: "Put a cherry {{*on top|under|of course}} of the cake." },
      { id: "understand", t: "I don't {{*understand|cut|purr}}. Can you help me?" },
      { id: "course", img: "thumbs-up", t: "Can I play with you? — {{*Of course|On top|Under}}!" },
      { id: "clever", img: "brain", t: "My friend is very {{*clever|glass|under}}. She knows a lot!" },
      { id: "under", t: "The ball is {{*under|of course|clever}} the bed." },
      { id: "purr", img: "smiling-cat-with-heart-eyes", t: "My cat is happy. It {{*purrs|cuts|understands}}." }
    ] },
  { type: "order", title: "Собери фразу", short: "Фразы", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "idea", img: "light-bulb", q: "У меня есть идея!", s: "I have got an idea!" },
      { id: "cut", img: "kitchen-knife", q: "Они режут фрукты.", s: "They cut the fruit." },
      { id: "glass", q: "Это большая стеклянная миска.", s: "It's a big glass bowl." },
      { id: "top", q: "Они кладут лимон сверху.", s: "They put some lemon on top." },
      { id: "understand", q: "Теперь я понимаю!", s: "Now I understand!" },
      { id: "course", img: "thumbs-up", q: "Кошки тоже идут, конечно!", s: "The cats go too, of course!" },
      { id: "clever", img: "brain", q: "Спасибо, мои умные девочки!", s: "Thank you, my clever girls!" },
      { id: "under", q: "Посмотри под столом!", s: "Look under the table!" },
      { id: "purr", img: "smiling-cat-with-heart-eyes", q: "Кошки мурлыкают.", s: "The cats purr." }
    ] },
  { type: "gaps", title: "Впиши слово", short: "Впиши", instr: "Выбери слово из рамки и впиши его в предложение.",
    bank: ["clever", "cut", "glass", "idea", "of course", "on top", "purr", "under", "understand"],
    items: [
      { id: "idea", img: "light-bulb", t: "Girls, I have got an [[idea]]!" },
      { id: "cut", img: "kitchen-knife", t: "Let's [[cut]] the pineapple." },
      { id: "glass", t: "Put the fruit in a big [[glass]] bowl." },
      { id: "top", t: "Put some lemon [[on top]]." },
      { id: "understand", t: "Now I [[understand]] your \"just in case\"!" },
      { id: "course", img: "thumbs-up", t: "The cats go too, [[of course]]!" },
      { id: "clever", img: "brain", t: "Thank you, my [[clever]] girls!" },
      { id: "under", t: "The cats are [[under]] the table." },
      { id: "purr", img: "smiling-cat-with-heart-eyes", t: "The cats are happy. They [[purr]]." }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово.", ids: ["idea", "cut", "glass", "understand", "clever", "under", "purr"] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Прочитай перевод и напиши слово по-английски. Забыл — вернись к карточкам." }
];
