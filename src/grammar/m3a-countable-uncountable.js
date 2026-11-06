// TITLE: Can You Count It?
// EYEBROW: Spotlight 4 Grammar · Module 3 · Unit 5a, 5b
// SUB: Исчисляемые и неисчисляемые: a tomato / two tomatoes, но butter, sugar, flour. Плюс How many? How much? A lot of. Правило, картинки и задания с проверкой.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: a lemon, two lemons — но sugar, butter; How many / How much; a lot of
const META = { ls: "s4g-m3-countable", cards: false, boardLabel: "Правила" };
const P = [
  { id: "c", phrase: "a lemon, two lemons", ru: "исчисляемые: можно посчитать" },
  { id: "pl", phrase: "tomato → tomatoes", ru: "много: + -s / -es" },
  { id: "u", phrase: "sugar, butter, flour", ru: "неисчисляемые: без a и без -s" },
  { id: "isare", phrase: "there is / there are", ru: "is — один и неисчисл., are — много" },
  { id: "many", phrase: "How many …?", ru: "сколько? — исчисляемые" },
  { id: "much", phrase: "How much …?", ru: "сколько? — неисчисляемые" },
  { id: "alot", phrase: "a lot of", ru: "много — с любыми" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "🍋 Исчисляемые — можно посчитать", lines: [
        ["*a* lemon — two lemon*s*", "один лимон — два лимона"],
        ["*a* mango — three mango*es*, *a* tomato — tomato*es*", "на -o часто + -es"],
        ["*an* egg, *an* apple", "перед гласной — an"] ] },
      { h: "🧈 Неисчисляемые — нельзя посчитать штуками", lines: [
        ["butter, sugar, flour, salt, pepper, olive oil, milk, bread, cheese", "это вещество, а не штуки"],
        ["✗ a sugar  ✗ two butters", "без a и без -s!"],
        ["Можно посчитать упаковки: *a bottle of* oil, *a bag of* flour", "бутылка масла, пакет муки"] ] },
      { h: "Как спросить «сколько?»", lines: [
        ["*How many* mangoes are there? — Not many. / A lot!", "many — с исчисляемыми"],
        ["*How much* sugar is there? — Not much. / A lot!", "much — с неисчисляемыми"],
        ["There is *a lot of* sugar. There are *a lot of* eggs.", "a lot of = много — с любыми"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["There *is* some butter. There *are* some tomatoes.", "неисчисляемое — всегда is"],
        ["✗ How much eggs?  ✓ *How many* eggs?", "eggs можно посчитать"] ] }
    ] },
  { type: "sort", title: "Можно посчитать?", short: "Сортировка", instr: "Посмотри на картинку. Это можно посчитать штуками или нет?",
    buckets: ["🔢 можно (countable)", "🚫 нельзя (uncountable)"],
    items: [
      { id: "c", img: "lemon", t: "lemon", b: 0 },
      { id: "u", img: "sugar", t: "sugar", b: 1 },
      { id: "c", img: "mango", t: "mango", b: 0 },
      { id: "u", img: "butter", t: "butter", b: 1 },
      { id: "c", img: "pineapple", t: "pineapple", b: 0 },
      { id: "u", img: "flour", t: "flour", b: 1 },
      { id: "c", img: "tomato", t: "tomato", b: 0 },
      { id: "u", img: "salt", t: "salt", b: 1 },
      { id: "c", img: "coconut", t: "coconut", b: 0 },
      { id: "u", img: "olive-oil", t: "olive oil", b: 1 },
      { id: "c", img: "egg", t: "egg", b: 0 },
      { id: "u", img: "glass-of-milk", t: "milk", b: 1 },
      { id: "u", img: "cheese-wedge", t: "cheese", b: 1 },
      { id: "c", img: "banana", t: "banana", b: 0 }
    ] },
  { type: "gaps", title: "a, an или ничего?", short: "a / an / —", instr: "Выбери a, an или «—» (ничего не нужно).",
    items: [
      { id: "c", img: "lemon", t: "I've got {{*a|an|—}} lemon." },
      { id: "c", img: "egg", t: "I've got {{*an|a|—}} egg." },
      { id: "u", img: "sugar", t: "I need {{*—|a|an}} sugar for the cake." },
      { id: "u", img: "butter", t: "There is {{*—|a|an}} butter in the fridge." },
      { id: "c", img: "pineapple", t: "Let's buy {{*a|an|—}} pineapple." },
      { id: "u", img: "flour", t: "We need {{*—|a|an}} flour for pancakes." },
      { id: "c", img: "red-apple", t: "She is eating {{*an|a|—}} apple." },
      { id: "u", img: "salt", t: "Can you pass me {{*the|a|an}} salt, please?" }
    ] },
  { type: "gaps", title: "Один или много?", short: "-s / -es", instr: "Посмотри на картинку и выбери правильное слово.",
    items: [
      { id: "pl", img: "lemon lemon", t: "two {{*lemons|lemon|lemones}}" },
      { id: "pl", img: "tomato tomato tomato", t: "three {{*tomatoes|tomatos|tomato}}" },
      { id: "pl", img: "mango mango", t: "two {{*mangoes|mango|mangoe}}" },
      { id: "pl", img: "coconut", t: "one {{*coconut|coconuts|coconutes}}" },
      { id: "u", img: "sugar", t: "a lot of {{*sugar|sugars|a sugar}}" },
      { id: "u", img: "butter", t: "some {{*butter|butters|a butter}}" },
      { id: "pl", img: "egg egg egg", t: "a lot of {{*eggs|egg|egges}}" },
      { id: "u", img: "flour", t: "a bag of {{*flour|flours|a flour}}" }
    ] },
  { type: "gaps", title: "How many или How much?", short: "Сколько?", instr: "Это задание 1 из учебника (стр. 44). Выбери How many или How much.",
    items: [
      { id: "many", img: "tangerine", t: "{{*How many|How much}} oranges are there in the bag?" },
      { id: "much", img: "butter", t: "{{*How much|How many}} butter is there in the fridge?" },
      { id: "much", img: "bread", t: "{{*How much|How many}} bread is there on the table?" },
      { id: "many", img: "egg", t: "{{*How many|How much}} eggs are there in the box?" },
      { id: "many", img: "potato", t: "{{*How many|How much}} potatoes are there in the cupboard?" },
      { id: "much", img: "sugar", t: "{{*How much|How many}} sugar is there? — Not much!" },
      { id: "many", img: "mango", t: "{{*How many|How much}} mangoes do we need? — Not many. Only two." },
      { id: "much", img: "glass-of-milk", t: "{{*How much|How many}} milk have we got? — A lot!" }
    ] },
  { type: "gaps", title: "There is или There are?", short: "is / are", instr: "Посмотри на картинку на стр. 55 учебника и вспомни: is или are?",
    items: [
      { id: "isare", img: "bread", t: "There {{*is|are}} a lot of bread." },
      { id: "isare", img: "tomato tomato", t: "There {{*are|is}} a lot of tomatoes." },
      { id: "isare", img: "olive-oil", t: "There {{*is|are}} a lot of olive oil." },
      { id: "isare", img: "cookie", t: "There {{*are|is}} a lot of biscuits." },
      { id: "isare", img: "egg egg", t: "There {{*are|is}} a lot of eggs." },
      { id: "isare", img: "butter", t: "There {{*is|are}} a lot of butter." },
      { id: "alot", img: "sugar", t: "There is {{*a lot of|many|a}} sugar in the tea." }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "u", img: "sugar", t: "I want a sugar in my tea.", ok: false, fix: "I want sugar in my tea." },
      { id: "many", img: "egg", t: "How much eggs are there?", ok: false, fix: "How many eggs are there?" },
      { id: "much", img: "butter", t: "How much butter is there?", ok: true },
      { id: "u", img: "flour", t: "We need two flours.", ok: false, fix: "We need two bags of flour." },
      { id: "pl", img: "tomato", t: "There are three tomatos.", ok: false, fix: "There are three tomatoes." },
      { id: "alot", img: "lemon", t: "There are a lot of lemons.", ok: true },
      { id: "isare", img: "salt", t: "There are a lot of salt in the salad.", ok: false, fix: "There is a lot of salt in the salad." }
    ] },
  { type: "order", title: "Собери предложение", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "many", img: "mango", q: "Сколько манго нам нужно?", s: "How many mangoes do we need?" },
      { id: "much", img: "sugar", q: "Сколько сахара есть?", s: "How much sugar is there?" },
      { id: "alot", img: "salt", q: "В салате много соли!", s: "There is a lot of salt in the salad!" },
      { id: "isare", img: "lemon lemon", q: "Есть два лимона.", s: "There are two lemons." },
      { id: "u", img: "butter", q: "В холодильнике есть масло.", s: "There is butter in the fridge." }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется главная часть.",
    items: [
      { id: "many", ru: "Сколько яиц?", en: "How many eggs?", key: "how many eggs" },
      { id: "much", ru: "Сколько муки?", en: "How much flour?", key: "how much flour" },
      { id: "alot", ru: "Здесь много сахара.", en: "There is a lot of sugar.", key: "a lot of sugar|lots of sugar" },
      { id: "pl", ru: "У меня три помидора.", en: "I have got three tomatoes.", key: "three tomatoes" },
      { id: "c", ru: "Мне нужен лимон.", en: "I need a lemon.", key: "a lemon" }
    ] }
];
