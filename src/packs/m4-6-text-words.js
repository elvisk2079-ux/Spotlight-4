// TITLE: Words from the Texts
// EYEBROW: Spotlight 4 · Module 4 · Units 7–8 · Слова из текстов
// SUB: Слова из комикса, текста про китов и «Fun at school» — journey, suitcase, passport, herbivore, carnivore… Карточки с картинками и задания.
// BOARD: Твои слова
// HOME: ../index.html
const META = { ls: "s4-m4-text-words" };
const P = [
  { id: "zoo", phrase: "zoo", ru: "зоопарк", img: "giraffe elephant" },
  { id: "lunchtime", phrase: "lunchtime", ru: "время обеда", img: "fork-and-knife-with-plate" },
  { id: "cookery", phrase: "cookery book", ru: "кулинарная книга", img: "cook green-book" },
  { id: "journey", phrase: "journey", ru: "путешествие", img: "world-map" },
  { id: "passport", phrase: "passport", ru: "паспорт", img: "passport-control" },
  { id: "suitcase", phrase: "suitcase", ru: "чемодан", img: "luggage" },
  { id: "ticket", phrase: "ticket", ru: "билет", img: "ticket" },
  { id: "plant", phrase: "plant", ru: "растение", img: "potted-plant" },
  { id: "meat", phrase: "meat", ru: "мясо", img: "cut-of-meat" },
  { id: "herbivore", phrase: "herbivore", ru: "травоядное животное", img: "rabbit carrot" },
  { id: "carnivore", phrase: "carnivore", ru: "плотоядное (хищник)", img: "lion meat-on-bone" },
  { id: "omnivore", phrase: "omnivore", ru: "всеядное животное", img: "bear fish" }
];
const DRILLS = [
  { type: "pic", title: "Что на картинке?", short: "Картинки", instr: "Посмотри на картинку и выбери слово." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "sort", title: "Кто что ест?", short: "Еда зверей", instr: "Herbivore ест растения, carnivore — мясо, omnivore — и то и другое. Куда отнести животное?",
    buckets: ["🌿 herbivore", "🥩 carnivore", "🍎🥩 omnivore"],
    items: [
      { id: "herbivore", img: "rabbit", t: "rabbit", b: 0 },
      { id: "herbivore", img: "elephant", t: "elephant", b: 0 },
      { id: "herbivore", img: "cow", t: "cow", b: 0 },
      { id: "carnivore", img: "lion", t: "lion", b: 1 },
      { id: "carnivore", img: "tiger", t: "tiger", b: 1 },
      { id: "carnivore", img: "wolf", t: "wolf", b: 1 },
      { id: "carnivore", img: "seal", t: "seal", b: 1 },
      { id: "omnivore", img: "bear", t: "bear", b: 2 },
      { id: "omnivore", img: "chicken", t: "chicken", b: 2 },
      { id: "omnivore", img: "monkey", t: "monkey (gorilla)", b: 2 }
    ] },
  { type: "gaps", title: "A Whale of a Time!", short: "Текст", keepOrder: true, layout: "text", pic: "🐋", story: "Grey whales", instr: "Вспомни текст про серых китов (стр. 63) и выбери слово.",
    items: [
      { id: "journey", t: "Grey whales make an amazing {{*journey|ticket|plant}} every year!" },
      { id: "passport", t: "They don't need tickets, {{*passports|plants|meat}} or suitcases." },
      { id: "suitcase", t: "Whales don't need {{*suitcases|lunchtime|zoos}} — they just swim!" }
    ] },
  { type: "gaps", title: "Выбери слово", short: "Предложения", instr: "Прочитай и выбери подходящее слово.",
    items: [
      { id: "zoo", img: "giraffe elephant", t: "Let's go to the {{*zoo|meat|passport}} after school!" },
      { id: "lunchtime", img: "seal", t: "The seals always clap at {{*lunchtime|journey|plant}}." },
      { id: "cookery", img: "cook green-book", t: "Have a good look at the {{*cookery book|suitcase|ticket}}!" },
      { id: "suitcase", img: "luggage", t: "Put your clothes in the {{*suitcase|plant|meat}}." },
      { id: "ticket", img: "ticket", t: "Here is your {{*ticket|meat|plant}} for the zoo." },
      { id: "passport", img: "passport-control", t: "You need a {{*passport|plant|lunchtime}} to go to another country." },
      { id: "plant", img: "potted-plant", t: "A herbivore eats only {{*plants|meat|tickets}}." },
      { id: "meat", img: "cut-of-meat", t: "A carnivore eats {{*meat|plants|suitcases}}." },
      { id: "herbivore", img: "panda", t: "Pandas eat only plants. They are {{*herbivores|carnivores|omnivores}}." },
      { id: "carnivore", img: "tiger", t: "Tigers eat meat. They are {{*carnivores|herbivores|omnivores}}." },
      { id: "omnivore", img: "bear", t: "Bears eat fish and fruit. They are {{*omnivores|herbivores|carnivores}}." }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку.", ids: ["zoo", "lunchtime", "journey", "passport", "suitcase", "ticket", "plant", "meat"] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Посмотри на картинку и перевод, напиши слово." }
];
