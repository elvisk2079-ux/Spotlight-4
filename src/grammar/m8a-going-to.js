// TITLE: Going on Holiday!
// EYEBROW: Spotlight 4 Grammar · Module 8 · Unit 15a, 15b
// SUB: be going to — планы на будущее: I'm/he's/we're going to..., отрицание, вопрос, вопросительные слова Where/What.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: We're going to go to Australia! Are you going to swim? Where are you going to go on holiday?
const META = { ls: "s4g-m8-goingto", cards: false, boardLabel: "Правила" };
const P = [
  { id: "am", phrase: "I am (I'm) going to …", ru: "я собираюсь" },
  { id: "is", phrase: "he/she/it is (…'s) going to …", ru: "он/она собирается" },
  { id: "are", phrase: "we/you/they are (…'re) going to …", ru: "мы/вы/они собираются" },
  { id: "neg", phrase: "isn't / aren't going to …", ru: "не собирается(ются)" },
  { id: "q", phrase: "Is/Are … going to …?", ru: "вопрос" },
  { id: "wh", phrase: "Where/What … going to …?", ru: "вопрос со словом" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "🧳 be going to — планы на будущее", lines: [
        ["We're *going to* go to Australia!", "Мы собираемся поехать в Австралию."],
        ["I'm *going to* travel to Portugal.", "Я собираюсь поехать в Португалию."],
        ["He's *going to* spend the summer with the chimps.", "Он собирается провести лето с шимпанзе."] ] },
      { h: "am / is / are — кто собирается?", lines: [
        ["I *am* going to pack my suitcase.", "я — am"],
        ["She *is* going to swim every day.", "он/она/оно — is"],
        ["We *are* going to go to Australia.", "мы/вы/они — are"] ] },
      { h: "❌ Отрицание и ❓ вопрос", lines: [
        ["He *isn't* going to travel by plane.", "isn't — он/она/оно"],
        ["You *aren't* going to need boots.", "aren't — мы/вы/они"],
        ["*Are* you going to travel to Portugal? — Yes, I am.", "вопрос"],
        ["*Is* he going to go with you? — No, he isn't.", "вопрос"] ] },
      { h: "❓ Вопросительные слова + going to", lines: [
        ["*Where* are you going to go on holiday?", "где/куда ты собираешься?"],
        ["*What* are you going to buy?", "что ты собираешься?"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ He going to go.  ✓ He*'s* going to go.", "не теряй am/is/are!"],
        ["✗ going to to go.  ✓ going to *go*.", "после going to — просто глагол, второго to не нужно"] ] }
    ] },
  { type: "sort", title: "Кто собирается?", short: "am/is/are", instr: "Прочитай слово. am, is или are?",
    buckets: ["I am", "he/she/it is", "we/you/they are"],
    items: [
      { id: "am", t: "I", b: 0 },
      { id: "is", t: "Lulu", b: 1 },
      { id: "is", t: "he", b: 1 },
      { id: "are", t: "we", b: 2 },
      { id: "is", img: "elephant", t: "Chuckles", b: 1 },
      { id: "are", t: "they", b: 2 },
      { id: "are", t: "you", b: 2 },
      { id: "is", t: "it", b: 1 }
    ] },
  { type: "gaps", title: "am, is или are?", short: "Планы", instr: "Посмотри на картинку и выбери am, is или are.",
    items: [
      { id: "are", img: "airplane", t: "We {{*are|is|am}} going to go to Australia." },
      { id: "am", img: "luggage", t: "I {{*am|is|are}} going to pack my suitcase." },
      { id: "is", img: "one-piece-swimsuit", t: "She {{*is|are|am}} going to swim every day." },
      { id: "are", img: "tent", t: "They {{*are|is|am}} going to sleep in a tent." }
    ] },
  { type: "gaps", title: "Отрицание", short: "Isn't / aren't", instr: "Напиши isn't или aren't.",
    items: [
      { id: "neg", img: "airplane", t: "He [[isn't]] going to travel by plane." },
      { id: "neg", img: "hiking-boot", t: "You [[aren't]] going to need boots." },
      { id: "neg", img: "wrapped-gift", t: "She [[isn't]] going to buy a present." },
      { id: "neg", img: "tent", t: "We [[aren't]] going to sleep in a hotel." }
    ] },
  { type: "gaps", title: "Задай вопрос", short: "Is / Are?", instr: "Выбери Is, Are или Am.",
    items: [
      { id: "q", img: "airplane", t: "{{*Are|Is|Am}} you going to travel to Portugal? — Yes, I am." },
      { id: "q", img: "elephant", t: "{{*Is|Are|Am}} Chuckles going to go on holiday? — Yes, he is." },
      { id: "q", img: "one-piece-swimsuit", t: "{{*Are|Is|Am}} they going to swim? — Yes, they are." },
      { id: "q", img: "wrapped-gift", t: "{{*Is|Are|Am}} she going to buy a gift? — No, she isn't." }
    ] },
  { type: "gaps", title: "Where или What?", short: "Вопрос", instr: "Напиши Where или What.",
    items: [
      { id: "wh", img: "airplane", t: "[[Where]] are you going to go on holiday?" },
      { id: "wh", img: "wrapped-gift", t: "[[What]] are you going to buy?" },
      { id: "wh", img: "tent", t: "[[Where]] are they going to sleep?" },
      { id: "wh", img: "one-piece-swimsuit", t: "[[What]] is she going to do this summer?" }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "is", t: "He's going to spend the summer with the chimps.", ok: true },
      { id: "are", t: "We going to go to Australia.", ok: false, fix: "We're going to go to Australia." },
      { id: "neg", t: "She isn't going to buy a present.", ok: true },
      { id: "q", t: "Is you going to travel?", ok: false, fix: "Are you going to travel?" },
      { id: "wh", t: "Where are you going to go?", ok: true },
      { id: "am", t: "I going to pack my bag.", ok: false, fix: "I'm going to pack my bag." }
    ] },
  { type: "order", title: "Собери предложение", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "are", img: "airplane", q: "Мы собираемся поехать в Австралию.", s: "We're going to go to Australia." },
      { id: "is", img: "tent", q: "Он собирается спать в палатке.", s: "He's going to sleep in a tent." },
      { id: "neg", img: "wrapped-gift", q: "Она не собирается покупать подарок.", s: "She isn't going to buy a present." },
      { id: "q", img: "one-piece-swimsuit", q: "Ты собираешься плавать?", s: "Are you going to swim?" },
      { id: "wh", img: "luggage", q: "Куда ты собираешься поехать на каникулы?", s: "Where are you going to go on holiday?" },
      { id: "am", img: "hiking-boot", q: "Я собираюсь взять ботинки.", s: "I'm going to take my boots." }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется главная часть.",
    items: [
      { id: "are", ru: "Мы собираемся поехать в Турцию.", en: "We're going to go to Turkey.", key: "going to go to turkey" },
      { id: "is", ru: "Она собирается плавать каждый день.", en: "She's going to swim every day.", key: "going to swim" },
      { id: "neg", ru: "Он не собирается путешествовать на самолёте.", en: "He isn't going to travel by plane.", key: "isn't going to travel" },
      { id: "q", ru: "Ты собираешься купить подарок?", en: "Are you going to buy a present?", key: "are you going to buy" },
      { id: "wh", ru: "Что ты собираешься делать летом?", en: "What are you going to do this summer?", key: "what are you going to do" },
      { id: "am", ru: "Я собираюсь упаковать чемодан.", en: "I'm going to pack my suitcase.", key: "going to pack" }
    ] }
];
