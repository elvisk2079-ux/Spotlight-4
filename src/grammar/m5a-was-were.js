// TITLE: Where Were You?
// EYEBROW: Spotlight 4 Grammar · Module 5 · Unit 9a, 9b
// SUB: Прошедшее время глагола to be: was/were, отрицание, вопрос, there was/were. Плюс порядковые числительные: first, second, third, fourth...
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: I was at the cinema yesterday. Were you at school? There was a cake. first, second, third, fourth...
const META = { ls: "s4g-m5-waswere", cards: false, boardLabel: "Правила" };
const P = [
  { id: "was", phrase: "I/he/she/it + was", ru: "был(а)/было" },
  { id: "were", phrase: "we/you/they + were", ru: "были" },
  { id: "neg", phrase: "wasn't / weren't", ru: "не был(и)" },
  { id: "q", phrase: "Was/Were …?", ru: "вопрос" },
  { id: "there", phrase: "There was / there were", ru: "был(о)/были (есть)" },
  { id: "ord", phrase: "first, second, third, fourth…", ru: "порядковые числительные" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "📅 was / were — прошедшее время to be", lines: [
        ["I *was* at the cinema yesterday.", "я был(а) — was"],
        ["Where *was* Maya two days ago?", "она была — was"],
        ["We *were* in the garden.", "мы были — were"] ] },
      { h: "❌ Отрицание: wasn't / weren't", lines: [
        ["It *wasn't* me!", "это не был я!"],
        ["Mum and Dad *weren't* at home last night.", "мамы и папы не было дома прошлой ночью"] ] },
      { h: "❓ Вопрос: Was / Were…?", lines: [
        ["*Were* you at school last Monday? — Yes, I was. / No, I wasn't.", "вопрос и краткий ответ"],
        ["*Was* it you? — No, it wasn't.", "это был ты? — нет"] ] },
      { h: "There was / there were", lines: [
        ["*There was* a cake on the table.", "был один предмет — was"],
        ["*There were* a lot of people at the party.", "было много — were"] ] },
      { h: "🔢 Порядковые числительные (ordinals)", lines: [
        ["one → fir*st*, two → se*cond*, three → thi*rd*", "особые слова на 1, 2, 3"],
        ["four → four*th*, five → fif*th*, nine → nin*th*, twelve → twelf*th*", "+th, иногда с изменением"],
        ["twenty → twent*ieth*, thirty → thirt*ieth*", "-y меняется на -ieth"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ I were.  ✓ I *was*.", "I/he/she/it — was, не were"],
        ["✗ four → fourst.  ✓ four → *fourth*.", "запомни особые формы ordinals!"] ] }
    ] },
  { type: "sort", title: "Was или were?", short: "Кто был?", instr: "Прочитай слово. Это was или were?",
    buckets: ["was", "were"],
    items: [
      { id: "was", t: "I", b: 0 },
      { id: "was", t: "he", b: 0 },
      { id: "was", t: "Maya", b: 0 },
      { id: "was", img: "elephant", t: "Chuckles", b: 0 },
      { id: "was", t: "it", b: 0 },
      { id: "were", t: "we", b: 1 },
      { id: "were", t: "you", b: 1 },
      { id: "were", t: "they", b: 1 },
      { id: "were", t: "Mum and Dad", b: 1 },
      { id: "were", t: "Larry and Lulu", b: 1 }
    ] },
  { type: "gaps", title: "Was или were?", short: "Где были?", instr: "Посмотри на картинку и выбери was или were.",
    items: [
      { id: "was", img: "cinema", t: "I {{*was|were}} at the cinema yesterday." },
      { id: "were", img: "house-with-garden", t: "We {{*were|was}} in the garden an hour ago." },
      { id: "was", img: "school", t: "Uncle Harry {{*was|were}} not at school yesterday." },
      { id: "were", img: "convenience-store", t: "Larry and Lulu {{*were|was}} at the shops last night." },
      { id: "was", img: "birthday-cake", t: "The cake {{*was|were}} for Robbie's birthday." },
      { id: "were", img: "elephant", t: "The animals {{*were|was}} at the zoo last week." }
    ] },
  { type: "gaps", title: "Отрицание", short: "Wasn't / weren't", instr: "Напиши wasn't или weren't.",
    items: [
      { id: "neg", img: "cinema", t: "It [[wasn't]] me at the cinema!" },
      { id: "neg", img: "house-with-garden", t: "Mum and Dad [[weren't]] at home last night." },
      { id: "neg", img: "school", t: "Larry and Paco [[weren't]] at school yesterday." },
      { id: "neg", img: "birthday-cake", t: "Chuckles [[wasn't]] in the kitchen." }
    ] },
  { type: "gaps", title: "Задай вопрос", short: "Was / Were?", instr: "Выбери Was или Were.",
    items: [
      { id: "q", img: "school", t: "{{*Were|Was|Is}} you at school last Monday? — Yes, I was." },
      { id: "q", img: "cinema", t: "{{*Was|Were|Is}} it you at the cinema? — No, it wasn't." },
      { id: "q", img: "convenience-store", t: "{{*Were|Was|Are}} Larry and Lulu at the shops? — Yes, they were." },
      { id: "q", img: "elephant", t: "{{*Was|Were|Is}} Chuckles at the zoo? — No, he wasn't." }
    ] },
  { type: "gaps", title: "There was или there were?", short: "There was/were", instr: "Выбери there was или there were.",
    items: [
      { id: "there", img: "birthday-cake", t: "{{*There was|There were}} a cake on the table." },
      { id: "there", img: "elephant", t: "{{*There were|There was}} a lot of animals at the zoo." },
      { id: "there", img: "house-with-garden", t: "{{*There was|There were}} one apple tree in the garden." },
      { id: "there", img: "convenience-store", t: "{{*There were|There was}} a lot of people at the shops." }
    ] },
  { type: "gaps", title: "Какой это номер?", short: "Ordinals", instr: "Выбери правильное порядковое числительное.",
    items: [
      { id: "ord", img: "birthday-cake", t: "1st = {{*first|one|onest}}" },
      { id: "ord", img: "birthday-cake", t: "2nd = {{*second|two|twoth}}" },
      { id: "ord", img: "birthday-cake", t: "3rd = {{*third|three|threeth}}" },
      { id: "ord", img: "birthday-cake", t: "5th = {{*fifth|five|fiveth}}" },
      { id: "ord", img: "birthday-cake", t: "12th = {{*twelfth|twelveth|twelvth}}" },
      { id: "ord", img: "birthday-cake", t: "20th = {{*twentieth|twentyth|twenty}}" }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "was", t: "I was at the cinema yesterday.", ok: true },
      { id: "were", t: "We was in the garden.", ok: false, fix: "We were in the garden." },
      { id: "neg", t: "It wasn't me!", ok: true },
      { id: "q", t: "Were you at school? — Yes, I were.", ok: false, fix: "Were you at school? — Yes, I was." },
      { id: "there", t: "There were a cake on the table.", ok: false, fix: "There was a cake on the table." },
      { id: "ord", t: "Robbie's sixteenth birthday.", ok: true }
    ] },
  { type: "order", title: "Собери предложение", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "was", img: "cinema", q: "Я был в кино вчера.", s: "I was at the cinema yesterday." },
      { id: "were", img: "house-with-garden", q: "Мы были в саду.", s: "We were in the garden." },
      { id: "neg", img: "school", q: "Это был не я!", s: "It wasn't me!" },
      { id: "q", img: "elephant", q: "Чакклз был в зоопарке?", s: "Was Chuckles at the zoo?" },
      { id: "there", img: "birthday-cake", q: "На столе был торт.", s: "There was a cake on the table." },
      { id: "ord", img: "birthday-cake", q: "Это шестнадцатый день рождения Робби.", s: "It's Robbie's sixteenth birthday." }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется главная часть.",
    items: [
      { id: "was", ru: "Я был дома вчера.", en: "I was at home yesterday.", key: "i was at home" },
      { id: "were", ru: "Мы были в парке.", en: "We were in the park.", key: "we were in the park" },
      { id: "neg", ru: "Это был не я.", en: "It wasn't me.", key: "it wasn't me|it was not me" },
      { id: "q", ru: "Ты был в школе в понедельник?", en: "Were you at school on Monday?", key: "were you at school" },
      { id: "there", ru: "В саду было одно дерево.", en: "There was one tree in the garden.", key: "there was one tree" },
      { id: "ord", ru: "Это её двенадцатый день рождения.", en: "It's her twelfth birthday.", key: "twelfth birthday" }
    ] }
];
