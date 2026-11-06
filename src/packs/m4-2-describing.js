// TITLE: What Are They Like?
// EYEBROW: Spotlight 4 · Module 4 · Unit 7a, 8a · Какие они?
// SUB: 11 слов, чтобы описать животное — tall, big, funny, clever, lazy… Карточки с картинками, потом задания.
// BOARD: Твои слова
// HOME: ../index.html
const META = { ls: "s4-m4-describing" };
const P = [
  { id: "tall", phrase: "tall", ru: "высокий", img: "giraffe" },
  { id: "short", phrase: "short", ru: "низкий, невысокий", img: "penguin" },
  { id: "big", phrase: "big", ru: "большой", img: "elephant" },
  { id: "small", phrase: "small", ru: "маленький", img: "mouse" },
  { id: "long", phrase: "long", ru: "длинный", img: "snake" },
  { id: "fat", phrase: "fat", ru: "толстый", img: "hippopotamus" },
  { id: "funny", phrase: "funny", ru: "смешной, забавный", img: "face-with-tears-of-joy" },
  { id: "silly", phrase: "silly", ru: "глупенький, дурашливый", img: "zany-face" },
  { id: "clever", phrase: "clever", ru: "умный", img: "owl" },
  { id: "lazy", phrase: "lazy", ru: "ленивый", img: "sloth" },
  { id: "amazing", phrase: "amazing", ru: "удивительный", img: "star-struck" }
];
const DRILLS = [
  { type: "pic", title: "Какое слово подходит?", short: "Картинки", instr: "Посмотри на картинку и выбери слово." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "gaps", title: "Наоборот!", short: "Наоборот", instr: "Выбери слово с противоположным значением.",
    items: [
      { id: "tall", img: "giraffe", t: "A giraffe is not short. It is {{*tall|lazy|funny}}." },
      { id: "short", img: "penguin", t: "A penguin is not tall. It is {{*short|long|big}}." },
      { id: "big", img: "spouting-whale", t: "A whale is not small. It is {{*big|short|silly}}." },
      { id: "small", img: "mouse", t: "A mouse is not big. It is {{*small|tall|fat}}." },
      { id: "lazy", img: "sloth", t: "My cat sleeps all day. It is {{*lazy|clever|tall}}." },
      { id: "clever", img: "dolphin", t: "Dolphins can do many tricks. They are {{*clever|lazy|fat}}." }
    ] },
  { type: "gaps", title: "Песня «Funny animals»", short: "Песня", keepOrder: true, instr: "Вспомни песню из учебника (стр. 58). Какое слово пропущено?",
    items: [
      { id: "tall", img: "giraffe", t: "I see a {{*tall|lazy|big}} giraffe, eating from a tree." },
      { id: "silly", img: "monkey", t: "I see a {{*silly|tall|big}} monkey, laughing at me." },
      { id: "clever", img: "dolphin", t: "I see a {{*clever|fat|lazy}} dolphin, swimming in the sea." },
      { id: "small", img: "seal", t: "I see a little seal = a {{*small|tall|long}} seal." },
      { id: "lazy", img: "lizard", t: "I see a {{*lazy|clever|tall}} lizard, sitting in the sun." },
      { id: "big", img: "spouting-whale", t: "I see a {{*big|small|short}} whale, having lots of fun." },
      { id: "funny", img: "monkey", t: "Lots of {{*funny|lazy|short}} animals looking at me." }
    ] },
  { type: "gaps", title: "Опиши животное", short: "Опиши", instr: "Посмотри на картинку и выбери слово.",
    items: [
      { id: "long", img: "crocodile", t: "A crocodile has got a {{*long|short|small}} tail." },
      { id: "fat", img: "hippopotamus", t: "A hippo is big and {{*fat|tall|clever}}." },
      { id: "tall", img: "giraffe", t: "A giraffe has got a long neck. It's very {{*tall|short|small}}." },
      { id: "small", img: "lizard", t: "A lizard is {{*small|big|fat}} and green." },
      { id: "funny", img: "monkey", t: "Monkeys make me laugh. They are {{*funny|lazy|tall}}." },
      { id: "amazing", img: "spouting-whale", t: "Whales travel thousands of miles. They're {{*amazing|lazy|short}}!" },
      { id: "long", img: "snake", t: "This snake is very {{*long|fat|tall}}." },
      { id: "silly", img: "zany-face", t: "My little brother makes silly faces. He's {{*silly|tall|fat}}!" }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово." },
  { type: "order", title: "Собери предложение", short: "Фразы", instr: "Нажимай на слова по порядку, чтобы получилось предложение.",
    items: [
      { id: "tall", img: "giraffe", q: "Жираф высокий.", s: "The giraffe is tall." },
      { id: "clever", img: "dolphin", q: "Дельфины умные.", s: "Dolphins are clever." },
      { id: "lazy", img: "lizard", q: "Я вижу ленивую ящерицу.", s: "I see a lazy lizard." },
      { id: "big", img: "elephant", q: "У слона большие уши.", s: "The elephant has got big ears." },
      { id: "funny", img: "monkey", q: "Обезьяны смешные.", s: "Monkeys are funny." },
      { id: "fat", img: "hippopotamus", q: "Бегемот толстый.", s: "The hippo is fat." }
    ] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Посмотри на картинку и перевод, напиши слово." }
];
