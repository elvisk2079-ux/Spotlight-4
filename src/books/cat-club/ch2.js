// TITLE: Chapter 2. The Empty Jar
// EYEBROW: The Cat Club and the Secret Cake · Глава 2 из 6
// SUB: Слова из главы 2: recipe, ingredients, fridge, jar, empty, shopping list, watch, quiet. Сначала карточки, потом задания одно за другим.
// BOARD: Слова главы 2
// HOME: index.html
// TABS: book
const META = { ls: "s4-cat-club-ch2" };
const P = [
  { id: "recipe", phrase: "recipe", ru: "рецепт", img: "open-book" },
  { id: "ingredients", phrase: "ingredients", ru: "ингредиенты", img: "flour butter" },
  { id: "fridge", phrase: "fridge", ru: "холодильник" },
  { id: "jar", phrase: "jar", ru: "банка", img: "jar" },
  { id: "empty", phrase: "empty", ru: "пустой" },
  { id: "list", phrase: "shopping list", ru: "список покупок", img: "memo" },
  { id: "watch", phrase: "watch", ru: "наблюдать", img: "eyes" },
  { id: "quiet", phrase: "quiet", ru: "тихий", img: "muted-speaker" }
];
P.forEach(p => { p.en = p.ru; });
const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", size: 5, instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "listenpic", title: "Послушай и найди картинку", short: "Картинки", n: 4, instr: "Нажми 🔊, послушай слово и нажми на нужную картинку." },
  { type: "pic", title: "Что на картинке?", short: "Что это?", instr: "Посмотри на картинку и выбери слово." },
  { type: "pick", title: "Прочитай и найди картинку", short: "Читаем", n: 4, instr: "Прочитай слово и нажми на нужную картинку." },
  { type: "meaning", title: "Как это по-английски?", short: "Перевод", instr: "Прочитай слово по-русски и выбери английское." },
  { type: "gaps", title: "Вспомни главу 2", short: "История", keepOrder: true, layout: "text", pic: "🍋📖", story: "Chapter 2. The Empty Jar", instr: "Прочитай кусочки из главы и выбери слово.",
    items: [
      { id: "recipe", t: "Polina has got a big book of {{*recipes|calendars|paws}}. \"Here it is! A lemon cake!\"" },
      { id: "ingredients", t: "Flour, butter, sugar and two lemons. These are the {{*ingredients|shopkeepers|ceilings}}." },
      { id: "fridge", t: "There is a lot of flour. There is some butter in the {{*fridge|basket|calendar}}." },
      { id: "jar", t: "Polina takes the sugar {{*jar|tail|idea}} and opens it." },
      { id: "empty", t: "It is {{*empty|heavy|golden}}! There is no sugar!" },
      { id: "list", t: "Veronika writes a {{*shopping list|recipe|secret}}: sugar, two lemons." },
      { id: "watch", t: "The cats sit on the window. They {{*watch|bake|cut}} the girls." },
      { id: "quiet", t: "They are very {{*quiet|hairy|delicious}}. Too quiet..." }
    ] },
  { type: "tf", title: "Верно или неверно?", short: "Верно?", instr: "Вспомни главу 2. Это верно или неверно?",
    items: [
      {"id": "recipe", "t": "Polina has got a big book of recipes.", "ok": true},
      {"id": "ingredients", "t": "The ingredients are flour, butter, sugar and two lemons.", "ok": true},
      {"id": "fridge", "t": "The butter is in the cupboard.", "ok": false, "fix": "The butter is in the fridge."},
      {"id": "jar", "t": "Polina opens the sugar jar.", "ok": true},
      {"id": "empty", "t": "The sugar jar is full.", "ok": false, "fix": "The sugar jar is empty."},
      {"id": "list", "t": "Anya writes a shopping list.", "ok": false, "fix": "Veronika writes a shopping list."},
      {"id": "watch", "t": "The cats watch the girls.", "ok": true},
      {"id": "quiet", "t": "The cats say \"Meow, meow!\" all the time.", "ok": false, "fix": "The cats are very quiet."}
    ] },
  { type: "gaps", title: "Новые предложения", short: "Предложения", instr: "Это уже не из книжки! Прочитай и выбери подходящее слово.",
    items: [
      { id: "recipe", img: "open-book", t: "Let's look at the {{*recipe|fridge|jar}} for pancakes." },
      { id: "ingredients", img: "flour butter", t: "Eggs, milk and flour are the {{*ingredients|recipes|jars}} for pancakes." },
      { id: "fridge", t: "The milk is cold. It is in the {{*fridge|jar|recipe}}." },
      { id: "jar", img: "jar", t: "There is jam in the {{*jar|fridge|recipe}}." },
      { id: "empty", t: "My glass is {{*empty|quiet|fresh}}. Can I have some more juice?" },
      { id: "list", img: "memo", t: "Let's go to the shop. Where is the {{*shopping list|recipe|fridge}}?" },
      { id: "watch", img: "eyes", t: "I like to {{*watch|empty|quiet}} the birds in the park." },
      { id: "quiet", img: "muted-speaker", t: "Be {{*quiet|empty|watch}}, please! Dad is sleeping." }
    ] },
  { type: "order", title: "Собери фразу", short: "Фразы", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "empty", q: "Банка пустая.", s: "The jar is empty." },
      { id: "ingredients", img: "flour butter", q: "Что нам нужно?", s: "What do we need?" },
      { id: "fridge", q: "В холодильнике есть масло.", s: "There is some butter in the fridge." },
      { id: "watch", img: "eyes", q: "Кошки наблюдают за девочками.", s: "The cats watch the girls." },
      { id: "quiet", img: "muted-speaker", q: "Они очень тихие.", s: "They are very quiet." },
      { id: "recipe", img: "open-book", q: "Вот рецепт!", s: "Here is the recipe!" },
      { id: "list", img: "memo", q: "Вероника пишет список покупок.", s: "Veronika writes a shopping list." },
      { id: "jar", img: "jar", q: "Полина открывает банку.", s: "Polina opens the jar." }
    ] },
  { type: "gaps", title: "Впиши слово", short: "Впиши", instr: "Выбери слово из рамки и впиши его в предложение.",
    bank: ["empty", "fridge", "ingredients", "jar", "quiet", "recipe", "shopping list", "watch"],
    items: [
      { id: "recipe", img: "open-book", t: "A lemon cake! Here is the [[recipe]]!" },
      { id: "ingredients", img: "flour butter", t: "Flour, butter, sugar — these are the [[ingredients]]." },
      { id: "fridge", t: "Put the butter in the [[fridge]], please." },
      { id: "jar", img: "jar", t: "Can you open the sugar [[jar]]?" },
      { id: "empty", t: "Oh no! The jar is [[empty]]!" },
      { id: "list", img: "memo", t: "Sugar, two lemons — it's our [[shopping list]]." },
      { id: "watch", img: "eyes", t: "The cats sit and [[watch]] the girls." },
      { id: "quiet", img: "muted-speaker", t: "Shhh! Be [[quiet]]!" }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово.", ids: ["recipe", "ingredients", "fridge", "jar", "empty", "watch", "quiet"] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Прочитай перевод и напиши слово по-английски. Забыл — вернись к карточкам." }
];
