// TITLE: Zoo Rules
// EYEBROW: Spotlight 4 · Module 4 · Unit 8b · Правила зоопарка
// SUB: Фразы с таблички «Zoo Rules» — feed the animals, ride bikes, put rubbish in the bin… Картинки-знаки, карточки и задания.
// BOARD: Твои фразы
// HOME: ../index.html
const META = { ls: "s4-m4-zoo-rules" };
const P = [
  { id: "feed", phrase: "feed the animals", ru: "кормить животных", img: "monkey banana" },
  { id: "ride", phrase: "ride bikes", ru: "кататься на велосипеде", img: "bicycle" },
  { id: "music", phrase: "play loud music", ru: "включать громкую музыку", img: "speaker-high-volume musical-notes" },
  { id: "pets", phrase: "leave your pets at home", ru: "оставлять питомцев дома", img: "dog-face house" },
  { id: "bin", phrase: "put your rubbish in the bin", ru: "выбрасывать мусор в урну", img: "litter-in-bin-sign" },
  { id: "run", phrase: "run", ru: "бегать", img: "person-running" },
  { id: "rubbish", phrase: "rubbish", ru: "мусор", img: "wastebasket" },
  { id: "ticket", phrase: "ticket", ru: "билет", img: "ticket" },
  { id: "rules", phrase: "rules", ru: "правила", img: "clipboard" },
  { id: "zookeeper", phrase: "zoo keeper", ru: "смотритель зоопарка", img: "man-farmer" }
];
const DRILLS = [
  { type: "pic", title: "Что на табличке?", short: "Знаки", instr: "Посмотри на картинку и выбери фразу." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английскую фразу, потом на перевод.", size: 5 },
  { type: "listenpic", title: "Послушай и найди", short: "Слушаем", instr: "Нажми 🔊, послушай фразу и нажми на картинку." },
  { type: "sort", title: "Можно или нельзя?", short: "Можно?", instr: "Посмотри на знак. Это нужно делать или нельзя?",
    buckets: ["✅ You must …", "🚫 You mustn't …"],
    items: [
      { id: "feed", img: "monkey banana !no", t: "… feed the animals.", b: 1 },
      { id: "ride", img: "bicycle !no", t: "… ride bikes.", b: 1 },
      { id: "music", img: "speaker-high-volume musical-notes !no", t: "… play loud music.", b: 1 },
      { id: "pets", img: "dog-face house !yes", t: "… leave your pets at home.", b: 0 },
      { id: "bin", img: "litter-in-bin-sign !yes", t: "… put your rubbish in the bin.", b: 0 },
      { id: "run", img: "person-running !no", t: "… run.", b: 1 },
      { id: "ticket", img: "ticket !yes", t: "… buy a ticket.", b: 0 }
    ] },
  { type: "gaps", title: "Допиши правило", short: "Правила", instr: "Посмотри на знак и выбери слово.",
    items: [
      { id: "feed", img: "monkey banana !no", t: "Do not {{*feed|ride|play}} the animals!" },
      { id: "ride", img: "bicycle !no", t: "Do not ride {{*bikes|music|rubbish}}!" },
      { id: "music", img: "speaker-high-volume musical-notes !no", t: "Do not play loud {{*music|bikes|pets}}!" },
      { id: "pets", img: "dog-face house !yes", t: "Leave your {{*pets|tickets|bins}} at home." },
      { id: "bin", img: "litter-in-bin-sign !yes", t: "Put your rubbish in the {{*bin|zoo|home}}." },
      { id: "rubbish", img: "wastebasket", t: "Put your {{*rubbish|pets|music}} in the bin." },
      { id: "run", img: "person-running !no", t: "Do not {{*run|feed|leave}}!" },
      { id: "ticket", img: "ticket", t: "You need a {{*ticket|rubbish|bike}} for the zoo." },
      { id: "zookeeper", img: "man-farmer", t: "The zoo {{*keeper|ticket|rule}} feeds the animals." },
      { id: "rules", img: "clipboard", t: "Read the zoo {{*rules|bins|pets}}, please." }
    ] },
  { type: "order", title: "Собери правило", short: "Фразы", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "feed", img: "monkey banana !no", q: "Не корми животных!", s: "Do not feed the animals!" },
      { id: "ride", img: "bicycle !no", q: "Не катайся на велосипеде!", s: "Do not ride bikes!" },
      { id: "bin", img: "litter-in-bin-sign", q: "Выбрасывай мусор в урну.", s: "Put your rubbish in the bin." },
      { id: "pets", img: "dog-face house", q: "Оставляй питомцев дома.", s: "Leave your pets at home." },
      { id: "music", img: "speaker-high-volume !no", q: "Не включай громкую музыку!", s: "Do not play loud music!" }
    ] },
  { type: "ru2en", title: "Выбери по-английски", short: "Рус → Англ", instr: "Прочитай по-русски и нажми на английскую фразу." },
  { type: "write", title: "Напиши слово", short: "Пишем", instr: "Напиши слово по-английски.", ids: ["run", "rubbish", "ticket", "rules", "zookeeper"] }
];
