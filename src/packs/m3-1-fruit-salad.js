// TITLE: Pirate's Fruit Salad
// EYEBROW: Spotlight 4 · Module 3 · Unit 5a · Продукты
// SUB: 14 слов из урока 5a — lemon, mango, coconut, flour, sugar, salt & pepper… и фразы из комикса. Карточки с картинками, потом задания.
// BOARD: Твои слова
// HOME: ../index.html
const META = { ls: "s4-m3-fruit-salad" };
const P = [
  { id: "lemon", phrase: "lemon", ru: "лимон", img: "lemon" },
  { id: "beans", phrase: "beans", ru: "бобы, фасоль", img: "beans" },
  { id: "mango", phrase: "mango", ru: "манго", img: "mango" },
  { id: "butter", phrase: "butter", ru: "сливочное масло", img: "butter" },
  { id: "coconut", phrase: "coconut", ru: "кокос", img: "coconut" },
  { id: "flour", phrase: "flour", ru: "мука", img: "flour" },
  { id: "pineapple", phrase: "pineapple", ru: "ананас", img: "pineapple" },
  { id: "oil", phrase: "olive oil", ru: "оливковое масло", img: "olive-oil" },
  { id: "sugar", phrase: "sugar", ru: "сахар", img: "sugar" },
  { id: "salt", phrase: "salt", ru: "соль", img: "salt" },
  { id: "pepper", phrase: "pepper", ru: "перец (молотый)", img: "pepper-shaker" },
  { id: "tomato", phrase: "tomato", ru: "помидор", img: "tomato" },
  { id: "basket", phrase: "basket", ru: "корзина", img: "basket" },
  { id: "tasty", phrase: "tasty", ru: "вкусный", img: "face-savoring-food" }
];
const DRILLS = [
  { type: "listenpic", title: "Послушай и найди", short: "Слушаем", instr: "Нажми 🔊, послушай слово и нажми на нужную картинку." },
  { type: "pic", title: "Что это?", short: "Что это?", instr: "Посмотри на картинку и выбери слово." },
  { type: "pick", title: "Прочитай и найди", short: "Читаем", instr: "Прочитай слово и нажми на нужную картинку." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на перевод." },
  { type: "sort", title: "Фрукт или нет?", short: "Фрукты", instr: "Это фрукт или другой продукт?",
    buckets: ["🍍 fruit — фрукт", "🧂 not fruit — не фрукт"],
    items: [
      { id: "lemon", img: "lemon", t: "lemon", b: 0 }, { id: "mango", img: "mango", t: "mango", b: 0 },
      { id: "pineapple", img: "pineapple", t: "pineapple", b: 0 }, { id: "coconut", img: "coconut", t: "coconut", b: 0 },
      { id: "butter", img: "butter", t: "butter", b: 1 }, { id: "flour", img: "flour", t: "flour", b: 1 },
      { id: "sugar", img: "sugar", t: "sugar", b: 1 }, { id: "salt", img: "salt", t: "salt", b: 1 },
      { id: "pepper", img: "pepper-shaker", t: "pepper", b: 1 }, { id: "oil", img: "olive-oil", t: "olive oil", b: 1 }
    ] },
  { type: "gaps", title: "Комикс «Pirate's fruit salad»", short: "Комикс", keepOrder: true, layout: "text", pic: "🏴‍☠️🥗", story: "Larry and Paco", instr: "Вспомни комикс из учебника (стр. 43) и выбери слово.",
    items: [
      { id: "mango", t: "Paco, how many {{*mangoes|lemons|tomatoes}} do we need? — Not many. Only two, I think." },
      { id: "lemon", t: "Can you pass me the {{*lemon|flour|beans}}, please? — Sure. Here you are!" },
      { id: "sugar", t: "Make sure you put a lot of {{*sugar|salt|pepper}} in it. — OK! A lot of sugar!" },
      { id: "salt", t: "Ugh! What's in it? — Oops! There isn't any sugar in it, but there's a lot of {{*salt|mango|butter}}!" }
    ] },
  { type: "gaps", title: "Что нам нужно?", short: "Рецепты", instr: "Посмотри на картинку и выбери слово.",
    items: [
      { id: "pineapple", img: "pineapple", t: "For a fruit salad we need a {{*pineapple|tomato|pepper}}." },
      { id: "flour", img: "flour", t: "For pancakes we need {{*flour|salt|beans}}, eggs and milk." },
      { id: "tomato", img: "tomato", t: "For a salad we need a {{*tomato|coconut|mango}} and olive oil." },
      { id: "oil", img: "olive-oil", t: "Put some olive {{*oil|sugar|butter}} in the salad." },
      { id: "butter", img: "butter", t: "I like bread and {{*butter|lemon|pepper}}." },
      { id: "sugar", img: "sugar", t: "Tea with {{*sugar|salt|pepper}}, please." },
      { id: "salt", img: "salt", t: "Pass me the {{*salt|mango|basket}} and pepper, please." },
      { id: "pepper", img: "pepper-shaker", t: "Salt and {{*pepper|pineapple|flour}}." },
      { id: "coconut", img: "coconut", t: "A {{*coconut|lemon|tomato}} is big, brown and hard." },
      { id: "lemon", img: "lemon", t: "A {{*lemon|mango|coconut}} is yellow and sour." },
      { id: "beans", img: "beans", t: "Green {{*beans|butter|sugar}} are good for you." },
      { id: "basket", img: "basket", t: "The fruit is in the {{*basket|salt|oil}}." },
      { id: "tasty", img: "face-savoring-food", t: "Mmm! This fruit salad is very {{*tasty|easy|salt}}!" },
      { id: "mango", img: "mango", t: "A {{*mango|pepper|flour}} is a sweet fruit." }
    ] },
  { type: "order", title: "Собери фразу", short: "Фразы", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "lemon", img: "lemon", q: "Можешь передать мне лимон, пожалуйста?", s: "Can you pass me the lemon, please?" },
      { id: "salt", img: "salt", q: "Передай мне соль, пожалуйста.", s: "Pass me the salt, please." },
      { id: "sugar", img: "sugar", q: "Положи много сахара.", s: "Put a lot of sugar in it." },
      { id: "tasty", img: "face-savoring-food", q: "Салат очень вкусный!", s: "The salad is very tasty!" },
      { id: "basket", img: "basket", q: "Манго в корзине.", s: "The mango is in the basket." }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово." },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Посмотри на картинку и напиши слово. Забыл — вернись к карточкам." }
];
