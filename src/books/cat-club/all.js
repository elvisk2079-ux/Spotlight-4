// TITLE: Повторяем все слова
// EYEBROW: The Cat Club and the Secret Cake · Повторяем все 6 глав
// SUB: Все 55 слов из книжки вместе — для повторения, когда пройдены все главы.
// BOARD: Твои слова
// HOME: index.html
// TABS: book
const META = { ls: "s4-cat-club-cake" };
const P = [
  // Chapter 1. The Cat Club
  { id: "group", phrase: "group", ru: "группа", img: "cc-group" },
  { id: "sometimes", phrase: "sometimes", ru: "иногда" },
  { id: "calendar", phrase: "calendar", ru: "календарь", img: "cc-calendar" },
  { id: "whisper", phrase: "whisper", ru: "шептать", img: "cc-whisper" },
  { id: "surprise", phrase: "surprise", ru: "сюрприз", img: "cc-surprise" },
  { id: "bake", phrase: "bake", ru: "печь (выпекать)", img: "cc-bake" },
  { id: "secret", phrase: "secret", ru: "секрет", img: "cc-secret" },
  // Chapter 2. The Empty Jar
  { id: "recipe", phrase: "recipe", ru: "рецепт", img: "open-book" },
  { id: "ingredients", phrase: "ingredients", ru: "ингредиенты", img: "flour butter" },
  { id: "fridge", phrase: "fridge", ru: "холодильник" },
  { id: "jar", phrase: "jar", ru: "банка", img: "jar" },
  { id: "empty", phrase: "empty", ru: "пустой" },
  { id: "list", phrase: "shopping list", ru: "список покупок", img: "memo" },
  { id: "watch", phrase: "watch", ru: "наблюдать", img: "eyes" },
  { id: "quiet", phrase: "quiet", ru: "тихий", img: "muted-speaker" },
  // Chapter 3. At the Shop
  { id: "shopkeeper", phrase: "shopkeeper", ru: "продавец", img: "convenience-store" },
  { id: "fresh", phrase: "fresh", ru: "свежий" },
  { id: "counter", phrase: "counter", ru: "прилавок" },
  { id: "giggle", phrase: "giggle", ru: "хихикать", img: "face-with-hand-over-mouth" },
  { id: "hairy", phrase: "hairy", ru: "волосатый" },
  { id: "delicious", phrase: "delicious", ru: "очень вкусный", img: "face-savoring-food" },
  { id: "case", phrase: "just in case", ru: "на всякий случай" },
  { id: "heavy", phrase: "heavy", ru: "тяжёлый", img: "person-lifting-weights" },
  // Chapter 4. What a Mess!
  { id: "mess", phrase: "mess", ru: "беспорядок" },
  { id: "tail", phrase: "tail", ru: "хвост" },
  { id: "sneeze", phrase: "sneeze", ru: "чихать", img: "sneezing-face" },
  { id: "laughing", phrase: "can't stop laughing", ru: "не могут перестать смеяться", img: "rolling-on-the-floor-laughing" },
  { id: "clean", phrase: "clean", ru: "убирать", img: "broom" },
  { id: "wash", phrase: "wash", ru: "мыть", img: "soap" },
  { id: "paw", phrase: "paw", ru: "лапа", img: "paw-prints" },
  { id: "push", phrase: "push", ru: "толкать" },
  { id: "places", phrase: "change places", ru: "поменяться местами", img: "counterclockwise-arrows-button" },
  // Chapter 5. A Terrible Cake
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
  { id: "guilty", phrase: "guilty", ru: "виноватый", img: "downcast-face-with-sweat" },
  // Chapter 6. The Best Surprise
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
P.forEach(p => { p.en = p.ru; }); // «перевод → слово»: показываем русский, выбираем английское

const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", size: 6, instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "listenpic", title: "Послушай и найди картинку", short: "Картинки", n: 4, instr: "Нажми 🔊, послушай слово и нажми на нужную картинку." },
  { type: "pic", title: "Что на картинке?", short: "Что это?", instr: "Посмотри на картинку и выбери слово." },
  { type: "meaning", title: "Как это по-английски?", short: "Перевод", instr: "Прочитай слово по-русски и выбери английское." },

  { type: "gaps", title: "Chapter 1. The Cat Club", short: "Глава 1", keepOrder: true, layout: "text", pic: "🐱🐱🐱", story: "Chapter 1", instr: "Вспомни первую главу и выбери слово.",
    items: [
      { id: "group", t: "\"We are not just a {{*group|recipe|ceiling}},\" says Polina. \"We are the Cat Club!\"" },
      { id: "sometimes", t: "The cats sit on the books. {{*Sometimes|Of course|Under}} they sleep on the homework!" },
      { id: "calendar", t: "Veronika looks at the {{*calendar|fridge|oven}} on the wall. There is a big red heart on Saturday." },
      { id: "whisper", t: "\"Look! Saturday is our teacher's birthday!\" she {{*whispers|sneezes|purrs}}." },
      { id: "surprise", t: "\"Let's make a {{*surprise|mess|counter}}!\" says Anya." },
      { id: "bake", t: "\"Let's {{*bake|wash|push}} a cake!\" says Polina." },
      { id: "secret", t: "Shhh... It's a {{*secret|spoon|tail}}!" }
    ] },
  { type: "gaps", title: "Chapter 2. The Empty Jar", short: "Глава 2", keepOrder: true, layout: "text", pic: "🍋📖", story: "Chapter 2", instr: "Вспомни вторую главу и выбери слово.",
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
  { type: "gaps", title: "Chapter 3. At the Shop", short: "Глава 3", keepOrder: true, layout: "text", pic: "🛒🍍🥥", story: "Chapter 3", instr: "Вспомни третью главу и выбери слово.",
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
  { type: "gaps", title: "Chapter 4. What a Mess!", short: "Глава 4", keepOrder: true, layout: "text", pic: "🐈🧂", story: "Chapter 4", instr: "Вспомни четвёртую главу и выбери слово.",
    items: [
      { id: "mess", t: "They open the kitchen door and... oh no! What a {{*mess|surprise|recipe}}!" },
      { id: "tail", t: "Anya's cat is in the flour bag. Now it is white from its nose to its {{*tail|paw|ceiling}}!" },
      { id: "sneeze", t: "Veronika's cat is playing with the pepper. \"Achoo!\" The cat {{*sneezes|purrs|giggles}}." },
      { id: "laughing", t: "The cats look so funny! The girls {{*can't stop laughing|change places|bake a cake}}." },
      { id: "clean", t: "They {{*clean|taste|watch}} the kitchen." },
      { id: "wash", t: "They {{*wash|bake|cut}} the white cat." },
      { id: "push", t: "Polina's cat goes to the jars and {{*pushes|bakes|tastes}} them..." },
      { id: "paw", t: "...with its {{*paw|spoon|ceiling}}. Click! Clack!" },
      { id: "places", t: "The jars {{*change places|can't stop laughing|look delicious}}. And the girls don't see it..." }
    ] },
  { type: "gaps", title: "Chapter 5. A Terrible Cake", short: "Глава 5", keepOrder: true, layout: "text", pic: "🎂🧂", story: "Chapter 5", instr: "Вспомни пятую главу и выбери слово.",
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
  { type: "gaps", title: "Chapter 6. The Best Surprise", short: "Глава 6", keepOrder: true, layout: "text", pic: "🍍🥭🥥💛", story: "Chapter 6", instr: "Вспомни шестую главу и выбери слово.",
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

  { type: "tf", title: "Верно или неверно?", short: "Верно?", instr: "Вспомни всю историю. Это верно или неверно?",
    items: [
      { id: "calendar", t: "There is a red heart on the calendar. It's the teacher's birthday.", ok: true },
      { id: "empty", t: "The sugar jar is full.", ok: false, fix: "The sugar jar is empty." },
      { id: "shopkeeper", t: "Mr Brown is a baker.", ok: false, fix: "Mr Brown is a shopkeeper." },
      { id: "hairy", t: "The coconut is brown and hairy.", ok: true },
      { id: "case", t: "Anya buys the pineapple, the mango and the coconut just in case.", ok: true },
      { id: "heavy", t: "The basket is empty.", ok: false, fix: "The basket is very heavy. There is a cat in it!" },
      { id: "sneeze", t: "Veronika's cat sneezes. It plays with the pepper.", ok: true },
      { id: "places", t: "Polina's cat pushes the jars. They change places.", ok: true },
      { id: "delicious", t: "The cake is delicious.", ok: false, fix: "The cake is disgusting. It's salty!" },
      { id: "guilty", t: "Polina's cat looks guilty.", ok: true },
      { id: "glass", t: "The girls put the fruit in a glass bowl.", ok: true },
      { id: "under", t: "The teacher eats the salty cake.", ok: false, fix: "The cats eat the salty cake under the table." }
    ] },
  { type: "sort", title: "Предмет, действие или «какой?»", short: "Сортируем", instr: "Это предмет (что?), действие (что делать?) или слово «какой?»",
    buckets: ["🥣 Что? — предмет", "🏃 Что делать? — действие", "✨ Какой? — признак"],
    items: [
      { id: "jar", img: "jar", t: "jar", b: 0 }, { id: "bowl", img: "bowl-with-spoon", t: "bowl", b: 0 },
      { id: "spoon", img: "spoon", t: "spoon", b: 0 }, { id: "oven", t: "oven", b: 0 },
      { id: "fridge", t: "fridge", b: 0 }, { id: "calendar", img: "cc-calendar", t: "calendar", b: 0 },
      { id: "recipe", img: "open-book", t: "recipe", b: 0 }, { id: "ceiling", t: "ceiling", b: 0 },
      { id: "bake", img: "cc-bake", t: "bake", b: 1 }, { id: "whisper", img: "cc-whisper", t: "whisper", b: 1 },
      { id: "sneeze", img: "sneezing-face", t: "sneeze", b: 1 }, { id: "wash", img: "soap", t: "wash", b: 1 },
      { id: "mix", t: "mix", b: 1 }, { id: "taste", img: "tongue", t: "taste", b: 1 },
      { id: "cut", img: "kitchen-knife", t: "cut", b: 1 }, { id: "push", t: "push", b: 1 },
      { id: "empty", t: "empty", b: 2 }, { id: "quiet", img: "muted-speaker", t: "quiet", b: 2 },
      { id: "fresh", t: "fresh", b: 2 }, { id: "heavy", img: "person-lifting-weights", t: "heavy", b: 2 },
      { id: "golden", t: "golden", b: 2 }, { id: "guilty", img: "downcast-face-with-sweat", t: "guilty", b: 2 },
      { id: "clever", img: "brain", t: "clever", b: 2 }, { id: "hairy", t: "hairy", b: 2 }
    ] },
  { type: "order", title: "Собери фразу", short: "Фразы", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "bake", img: "cc-bake", q: "Давайте испечём торт!", s: "Let's bake a cake!" },
      { id: "secret", img: "cc-secret", q: "Это секрет!", s: "It's a secret!" },
      { id: "empty", q: "Банка пустая.", s: "The jar is empty." },
      { id: "mess", q: "Какой беспорядок!", s: "What a mess!" },
      { id: "sneeze", img: "sneezing-face", q: "Кошка чихает.", s: "The cat sneezes." },
      { id: "smell", img: "nose", q: "Кухня чудесно пахнет.", s: "The kitchen smells wonderful." },
      { id: "idea", img: "light-bulb", q: "У меня есть идея!", s: "I have got an idea!" },
      { id: "under", q: "Посмотри под столом!", s: "Look under the table!" },
      { id: "clever", img: "brain", q: "Спасибо, мои умные девочки!", s: "Thank you, my clever girls!" },
      { id: "purr", img: "smiling-cat-with-heart-eyes", q: "Кошки мурлыкают.", s: "The cats purr." }
    ] },
  { type: "gaps", title: "Впиши слово", short: "Впиши", instr: "Выбери слово из рамки и впиши его в предложение.",
    bank: ["fridge", "tail", "spoon", "heavy", "secret", "oven", "empty", "paws", "idea", "case"],
    items: [
      { id: "fridge", t: "Put the milk in the [[fridge]], please." },
      { id: "tail", t: "My cat has got a long [[tail]]." },
      { id: "spoon", img: "spoon", t: "I eat soup with a [[spoon]]." },
      { id: "heavy", img: "person-lifting-weights", t: "This bag is very [[heavy]]!" },
      { id: "secret", img: "cc-secret", t: "Don't tell Mum! It's a [[secret]]!" },
      { id: "oven", t: "Granny puts the pie in the [[oven]]." },
      { id: "empty", t: "The jar is [[empty]]. There is no jam in it." },
      { id: "paw", img: "paw-prints", t: "My dog has got four [[paws]]." },
      { id: "idea", img: "light-bulb", t: "Let's make a fruit salad! What a good [[idea]]!" },
      { id: "case", t: "Take an umbrella, just in [[case]]." }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово.",
    ids: ["group", "secret", "bake", "jar", "empty", "fridge", "quiet", "fresh", "heavy", "mess", "tail", "paw", "bowl", "spoon", "oven", "piece", "taste", "guilty", "idea", "clever", "under", "purr"] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Прочитай перевод и напиши слово по-английски. Забыл — вернись к карточкам." }
];
