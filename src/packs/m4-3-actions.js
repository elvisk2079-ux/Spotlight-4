// TITLE: What Can Animals Do?
// EYEBROW: Spotlight 4 · Module 4 · Unit 7a, 7b · Что делают животные
// SUB: 12 глаголов — climb, swim, jump, clap, fly… Пригодятся для грамматики «Look! The seal is clapping». Карточки с картинками и задания.
// BOARD: Твои слова
// HOME: ../index.html
const META = { ls: "s4-m4-actions" };
const P = [
  { id: "climb", phrase: "climb", ru: "лазить, залезать", img: "man-climbing" },
  { id: "swim", phrase: "swim", ru: "плавать", img: "person-swimming" },
  { id: "jump", phrase: "jump", ru: "прыгать", img: "kangaroo" },
  { id: "run", phrase: "run", ru: "бегать", img: "person-running" },
  { id: "fly", phrase: "fly", ru: "летать", img: "bird" },
  { id: "clap", phrase: "clap", ru: "хлопать", img: "clapping-hands" },
  { id: "eat", phrase: "eat", ru: "есть, кушать", img: "fork-and-knife-with-plate" },
  { id: "sing", phrase: "sing", ru: "петь", img: "microphone" },
  { id: "sleep", phrase: "sleep", ru: "спать", img: "sleeping-face" },
  { id: "laugh", phrase: "laugh", ru: "смеяться", img: "face-with-tears-of-joy" },
  { id: "cry", phrase: "cry", ru: "плакать", img: "loudly-crying-face" },
  { id: "play", phrase: "play", ru: "играть", img: "soccer-ball" }
];
const DRILLS = [
  { type: "pic", title: "Что они делают?", short: "Картинки", instr: "Посмотри на картинку и выбери глагол." },
  { type: "listenpic", title: "Послушай и найди", short: "Слушаем", instr: "Нажми 🔊, послушай слово и нажми на картинку." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на перевод." },
  { type: "gaps", title: "Кто что умеет?", short: "Умеет", instr: "Что умеет это животное? Выбери глагол.",
    items: [
      { id: "climb", img: "monkey", t: "Monkeys {{*climb|fly|swim}} trees." },
      { id: "swim", img: "dolphin", t: "Dolphins {{*swim|climb|fly}} in the sea." },
      { id: "jump", img: "kangaroo", t: "Kangaroos {{*jump|fly|sing}}." },
      { id: "fly", img: "parrot", t: "Parrots {{*fly|swim|climb}}." },
      { id: "clap", img: "seal", t: "Seals {{*clap|fly|climb}} at lunchtime." },
      { id: "eat", img: "giraffe", t: "Giraffes {{*eat|fly|swim}} leaves from trees." },
      { id: "sleep", img: "koala", t: "Koalas {{*sleep|swim|fly}} in trees all day." },
      { id: "run", img: "lion", t: "Lions {{*run|fly|swim}} very fast." },
      { id: "sing", img: "bird", t: "Birds {{*sing|clap|swim}} songs." },
      { id: "cry", img: "crocodile", t: "The crocodile is sad. It can {{*cry|fly|clap}}." },
      { id: "laugh", img: "monkey", t: "The silly monkey is laughing at me. Monkeys can {{*laugh|fly|swim}}." },
      { id: "play", img: "dolphin", t: "Dolphins {{*play|sleep|cry}} with a ball." }
    ] },
  { type: "tf", title: "Правда или нет?", short: "Правда?", instr: "Прочитай и реши: это правда или нет?",
    items: [
      { id: "fly", img: "elephant", t: "Elephants can fly.", ok: false, fix: "Elephants can't fly." },
      { id: "swim", img: "dolphin", t: "Dolphins can swim.", ok: true },
      { id: "climb", img: "monkey", t: "Monkeys can climb trees.", ok: true },
      { id: "jump", img: "kangaroo", t: "Kangaroos can jump.", ok: true },
      { id: "sing", img: "crocodile", t: "Crocodiles can sing.", ok: false, fix: "Crocodiles can't sing." },
      { id: "clap", img: "seal", t: "Seals can clap.", ok: true },
      { id: "run", img: "spouting-whale", t: "Whales can run.", ok: false, fix: "Whales can't run. They swim." }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово." },
  { type: "order", title: "Собери предложение", short: "Фразы", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "climb", img: "monkey", q: "Обезьяны лазают по деревьям.", s: "Monkeys climb trees." },
      { id: "swim", img: "dolphin", q: "Дельфины умеют плавать.", s: "Dolphins can swim." },
      { id: "fly", img: "elephant", q: "Слоны не умеют летать.", s: "Elephants can't fly." },
      { id: "clap", img: "seal", q: "Тюлени хлопают в обед.", s: "Seals clap at lunchtime." },
      { id: "jump", img: "kangaroo", q: "Кенгуру умеет прыгать.", s: "A kangaroo can jump." }
    ] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Посмотри на картинку и перевод, напиши глагол." }
];
