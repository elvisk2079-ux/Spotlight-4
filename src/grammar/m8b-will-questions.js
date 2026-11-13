// TITLE: What Will the Weather Be Like?
// EYEBROW: Spotlight 4 Grammar · Module 8 · Unit 16a, 16b
// SUB: Future Simple: will/won't + be. Вопросительные слова: Who, What, Where, When, Why, How.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: It will be sunny tomorrow. It won't be cold. Who is he? What is this? Where is London?
const META = { ls: "s4g-m8-will", cards: false, boardLabel: "Правила" };
const P = [
  { id: "will", phrase: "will + be/verb", ru: "будущее: будет" },
  { id: "wont", phrase: "won't + be/verb", ru: "не будет" },
  { id: "qwill", phrase: "Will …? Yes/No", ru: "вопрос с will" },
  { id: "who_what", phrase: "Who…? What…?", ru: "кто? что?" },
  { id: "where_when", phrase: "Where…? When…?", ru: "где? когда?" },
  { id: "why_how", phrase: "Why…? How…?", ru: "почему? как?" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "🔮 will — предсказания о будущем", lines: [
        ["It *will* be sunny tomorrow.", "Завтра будет солнечно."],
        ["It *won't* be cold.", "Не будет холодно."],
        ["*Will* it be rainy? — Yes, it will. / No, it won't.", "вопрос и краткий ответ"] ] },
      { h: "❓ Вопросительные слова", lines: [
        ["*Who* is he? — My brother Joe.", "кто?"],
        ["*What* is this? — A present from George.", "что?"],
        ["*Where* is London? — In England.", "где?"],
        ["*When* is the race? — At seven o'clock.", "когда?"],
        ["*Why* are you buying so much food? — Because I'm having a party!", "почему?"],
        ["*How* do you go to school? — By bus.", "как?"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ It will sunny.  ✓ It will *be* sunny.", "после will не забывай be!"],
        ["✗ Who you are?  ✓ *Who are* you?", "в вопросе глагол идёт перед подлежащим"] ] }
    ] },
  { type: "sort", title: "Will или won't?", short: "Погода", instr: "Посмотри на картинку погоды и выбери правильное предложение.",
    buckets: ["will", "won't"],
    items: [
      { id: "will", img: "sun", t: "It will be sunny.", b: 0 },
      { id: "wont", img: "sun", t: "It won't be rainy.", b: 1 },
      { id: "will", img: "cloud-with-rain", t: "It will be rainy.", b: 0 },
      { id: "wont", img: "cloud-with-rain", t: "It won't be sunny.", b: 1 },
      { id: "will", img: "snowflake", t: "It will be cold.", b: 0 },
      { id: "wont", img: "snowflake", t: "It won't be hot.", b: 1 }
    ] },
  { type: "gaps", title: "Will или won't?", short: "Прогноз", instr: "Посмотри на картинку и выбери will или won't.",
    items: [
      { id: "will", img: "sun", t: "It {{*will|won't}} be sunny tomorrow." },
      { id: "wont", img: "snowflake", t: "It {{*won't|will}} be hot tomorrow. It will be cold!" },
      { id: "will", img: "cloud-with-rain", t: "It {{*will|won't}} be rainy tomorrow." },
      { id: "will", img: "wind-face", t: "It {{*will|won't}} be windy today." }
    ] },
  { type: "gaps", title: "Задай вопрос", short: "Will…?", instr: "Выбери Will, Is или Does.",
    items: [
      { id: "qwill", img: "sun", t: "{{*Will|Is|Does}} it be sunny tomorrow? — Yes, it will." },
      { id: "qwill", img: "cloud-with-rain", t: "{{*Will|Is|Does}} it rain tomorrow? — No, it won't." },
      { id: "qwill", img: "wrapped-gift", t: "{{*Will|Is|Does}} you come to the party? — Yes, I will." },
      { id: "qwill", img: "oncoming-bus", t: "{{*Will|Is|Does}} they be at home? — No, they won't." }
    ] },
  { type: "gaps", title: "Какое слово?", short: "Кто? Что? Где?", instr: "Выбери правильное вопросительное слово.",
    items: [
      { id: "who_what", t: "{{*Who|What|Where}} is he? — My brother Joe." },
      { id: "who_what", t: "{{*What|Who|When}} is this? — A present from George." },
      { id: "where_when", t: "{{*Where|When|Why}} is London? — In England." },
      { id: "where_when", img: "alarm-clock", t: "{{*When|Where|How}} is the race? — At seven o'clock." },
      { id: "why_how", img: "wrapped-gift", t: "{{*Why|How|Who}} are you buying so much food? — Because I'm having a party!" },
      { id: "why_how", img: "oncoming-bus", t: "{{*How|Why|What}} do you go to school? — By bus." }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "will", t: "It will be sunny tomorrow.", ok: true },
      { id: "wont", t: "It won't rainy tomorrow.", ok: false, fix: "It won't be rainy tomorrow." },
      { id: "qwill", t: "Will it be cold? — Yes, it will.", ok: true },
      { id: "who_what", t: "What is he? — My brother Joe.", ok: false, fix: "Who is he? — My brother Joe." },
      { id: "where_when", t: "Where is the race? — At seven o'clock.", ok: false, fix: "When is the race? — At seven o'clock." },
      { id: "why_how", t: "How do you go to school? — By bus.", ok: true }
    ] },
  { type: "order", title: "Собери предложение", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "will", img: "sun", q: "Завтра будет солнечно.", s: "It will be sunny tomorrow." },
      { id: "wont", img: "snowflake", q: "Не будет холодно.", s: "It won't be cold." },
      { id: "qwill", img: "cloud-with-rain", q: "Завтра будет дождь?", s: "Will it be rainy tomorrow?" },
      { id: "who_what", q: "Кто он?", s: "Who is he?" },
      { id: "where_when", img: "alarm-clock", q: "Когда гонка?", s: "When is the race?" },
      { id: "why_how", img: "oncoming-bus", q: "Как ты добираешься до школы?", s: "How do you go to school?" }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется главная часть.",
    items: [
      { id: "will", ru: "Завтра будет жарко.", en: "It will be hot tomorrow.", key: "will be hot" },
      { id: "wont", ru: "Не будет ветрено.", en: "It won't be windy.", key: "won't be windy" },
      { id: "qwill", ru: "Будет дождь?", en: "Will it rain?", key: "will it rain" },
      { id: "who_what", ru: "Что это?", en: "What is this?", key: "what is this" },
      { id: "where_when", ru: "Где Лондон?", en: "Where is London?", key: "where is london" },
      { id: "why_how", ru: "Почему ты покупаешь столько еды?", en: "Why are you buying so much food?", key: "why are you buying" }
    ] }
];
