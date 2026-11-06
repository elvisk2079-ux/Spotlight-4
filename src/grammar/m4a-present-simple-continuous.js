// TITLE: Always or Now?
// EYEBROW: Spotlight 4 Grammar · Module 4 · Unit 7b
// SUB: Present Simple и Present Continuous: «Тюлени всегда хлопают в обед» и «Смотри! Тюлени хлопают!». Правило, картинки и задания с проверкой.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: always clap / are clapping now — обычно или прямо сейчас
const META = { ls: "s4g-m4-ps-pc", cards: false, boardLabel: "Правила" };
const P = [
  { id: "ps", phrase: "They always clap.", ru: "Present Simple: обычно, всегда" },
  { id: "s3", phrase: "She plays, he eats", ru: "he / she / it + -s" },
  { id: "pssig", phrase: "always, usually, every day", ru: "слова-подсказки: обычно" },
  { id: "pc", phrase: "They are clapping.", ru: "Present Continuous: сейчас" },
  { id: "be", phrase: "am / is / are + -ing", ru: "I am, he is, they are" },
  { id: "pcsig", phrase: "now, Look!, at the moment", ru: "слова-подсказки: сейчас" },
  { id: "q", phrase: "What are you doing?", ru: "вопрос: что ты делаешь (сейчас)?" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "🔁 Present Simple — обычно, всегда, каждый день", lines: [
        ["The seals *always clap* at lunchtime.", "Тюлени всегда хлопают в обед."],
        ["I *play* the piano. She *plays* the piano.", "he / she / it → прибавь -s"],
        ["always, usually, often, sometimes, never, every day, in the evenings", "слова-подсказки"] ] },
      { h: "👀 Present Continuous — прямо сейчас", lines: [
        ["Look! The seals *are clapping*!", "Смотри! Тюлени хлопают (сейчас)!"],
        ["I *am* read*ing*. He *is* read*ing*. They *are* read*ing*.", "am / is / are + глагол с -ing"],
        ["*What are* you *doing*? — I'*m reading*.", "Что ты делаешь? — Я читаю."],
        ["now, at the moment, Look!, Listen!", "слова-подсказки"] ] },
      { h: "Как прибавить -ing", lines: [
        ["play → playing, eat → eating, read → reading", "обычно просто -ing"],
        ["swim → swimming, run → running, sit → sitting", "удваиваем последнюю букву"],
        ["dance → dancing, write → writing", "немое -e убираем"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ Look! The monkey eat.  ✓ Look! The monkey *is eating*.", "сейчас — нужно is + -ing"],
        ["✗ She always is playing.  ✓ She always *plays*.", "always — без -ing"] ] }
    ] },
  { type: "sort", title: "Обычно или сейчас?", short: "Сортировка", instr: "Прочитай. Это бывает обычно или происходит прямо сейчас?",
    buckets: ["🔁 обычно", "👀 сейчас"],
    items: [
      { id: "pssig", img: "seal", t: "The seals always clap at lunchtime.", b: 0, why: "always — всегда, обычно." },
      { id: "pcsig", img: "seal", t: "Look! The seals are clapping!", b: 1, why: "Look! + are clapping — сейчас." },
      { id: "ps", img: "monkey", t: "Monkeys climb trees.", b: 0, why: "Это обычное действие." },
      { id: "pc", img: "monkey", t: "The monkey is climbing a tree now.", b: 1, why: "now — сейчас." },
      { id: "s3", img: "dolphin", t: "The dolphin plays every morning.", b: 0, why: "every morning — каждое утро." },
      { id: "be", img: "hippopotamus", t: "The hippos are having a bath.", b: 1, why: "are having — сейчас." },
      { id: "pssig", img: "lizard", t: "The lizard usually sits in the sun.", b: 0, why: "usually — обычно." },
      { id: "q", img: "open-book", t: "What are you doing? — I'm reading.", b: 1, why: "are … doing — что делаешь сейчас?" }
    ] },
  { type: "gaps", title: "Выбери правильно", short: "Выбор", instr: "Посмотри на слова-подсказки и выбери нужную форму.",
    items: [
      { id: "pssig", img: "seal", t: "The seals always {{*clap|are clapping}} at lunchtime." },
      { id: "pcsig", img: "seal", t: "Look! The seals {{*are clapping|clap}}!" },
      { id: "s3", img: "musical-keyboard", t: "She always {{*plays|is playing|play}} the piano in the evenings." },
      { id: "pc", img: "musical-keyboard", t: "Listen! She {{*is playing|plays|play}} the piano now." },
      { id: "be", img: "monkey banana", t: "The monkeys {{*are|is|am}} having lunch now." },
      { id: "be", img: "open-book", t: "I {{*am|is|are}} reading a book about dolphins." },
      { id: "ps", img: "hippopotamus", t: "Hippos {{*have|are having}} a bath every afternoon." },
      { id: "pcsig", img: "dolphin", t: "Look! The dolphin {{*is catching|catches}} a fish!" },
      { id: "q", img: "question-mark", t: "What {{*are|is|do}} you doing? — I'm drawing." },
      { id: "s3", img: "giraffe", t: "A giraffe {{*eats|eat|is eat}} leaves every day." }
    ] },
  { type: "gaps", title: "В зоопарке", short: "История", keepOrder: true, layout: "text", pic: "🦁🐒🦭", story: "A Day at the Zoo", instr: "Прочитай историю и выбери нужную форму.",
    items: [
      { id: "pc", t: "Hi! I'm Larry. It's Saturday and I {{*am visiting|visit}} the zoo with my family." },
      { id: "pcsig", t: "Look! The monkeys {{*are eating|eat}} bananas now." },
      { id: "pssig", t: "Monkeys {{*eat|are eating}} bananas every day — they love them!" },
      { id: "s3", t: "The zoo keeper {{*feeds|feed|is feed}} the seals at one o'clock every day." },
      { id: "pc", t: "Listen! The seals {{*are clapping|clap}}. They want fish!" },
      { id: "ps", t: "My sister Lulu {{*likes|is liking}} the giraffes." },
      { id: "be", t: "Right now she {{*is taking|are taking|take}} a photo of a tall giraffe." },
      { id: "q", t: "Mum: “Larry, what {{*are you doing|do you do}}?” — “I'm watching the funny hippo!”" }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "pc", img: "monkey", t: "Look! The monkey is climbing a tree.", ok: true },
      { id: "pcsig", img: "dolphin", t: "Look! The dolphins swim.", ok: false, fix: "Look! The dolphins are swimming." },
      { id: "pssig", img: "seal", t: "The seals always are clapping at lunchtime.", ok: false, fix: "The seals always clap at lunchtime." },
      { id: "s3", img: "elephant", t: "The elephant eat a lot every day.", ok: false, fix: "The elephant eats a lot every day." },
      { id: "be", img: "open-book", t: "I is reading now.", ok: false, fix: "I am reading now." },
      { id: "ps", img: "lizard", t: "Lizards sit in the sun every day.", ok: true },
      { id: "q", img: "question-mark", t: "What are you doing?", ok: true }
    ] },
  { type: "order", title: "Собери предложение", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "pc", img: "seal", q: "Смотри! Тюлени хлопают!", s: "Look! The seals are clapping!" },
      { id: "pssig", img: "seal", q: "Они всегда хлопают в обед.", s: "They always clap at lunchtime." },
      { id: "be", img: "monkey banana", q: "Обезьяна сейчас ест банан.", s: "The monkey is eating a banana now." },
      { id: "s3", img: "musical-keyboard", q: "Она играет на пианино каждый вечер.", s: "She plays the piano every evening." },
      { id: "q", img: "question-mark", q: "Что ты делаешь?", s: "What are you doing?" }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется главная часть.",
    items: [
      { id: "pc", ru: "Смотри! Жираф ест.", en: "Look! The giraffe is eating.", key: "is eating" },
      { id: "ps", ru: "Жирафы едят листья.", en: "Giraffes eat leaves.", key: "eat" },
      { id: "be", ru: "Я читаю книгу сейчас.", en: "I am reading a book now.", key: "am reading|i'm reading" },
      { id: "s3", ru: "Мой папа всегда готовит в воскресенье.", en: "My dad always cooks on Sunday.", key: "cooks" },
      { id: "q", ru: "Что ты делаешь?", en: "What are you doing?", key: "what are you doing" }
    ] }
];
