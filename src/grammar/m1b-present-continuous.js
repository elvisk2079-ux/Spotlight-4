// TITLE: Always or Now?
// EYEBROW: Spotlight 4 Grammar · Module 1 · Unit 2a
// SUB: Present Continuous: am / is / are + -ing. Look! Bob is diving! Is Rose diving? Rose and Tom aren't skiing.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: Look! Bob is diving! Is Rose diving? — No, she isn't. Rose and Tom aren't skiing.
const META = { ls: "s4g-m1-contin", cards: false, boardLabel: "Правила" };
const P = [
  { id: "am", phrase: "I am (I'm) …ing", ru: "я сейчас делаю" },
  { id: "is", phrase: "He/She/It is (…'s) …ing", ru: "он/она сейчас делает" },
  { id: "are", phrase: "We/You/They are (…'re) …ing", ru: "мы/вы/они сейчас делают" },
  { id: "neg", phrase: "isn't / aren't …ing", ru: "сейчас не делает(ют)" },
  { id: "q", phrase: "Is/Are … …ing?", ru: "вопрос: сейчас делает?" },
  { id: "ing", phrase: "dive → diving, make → making", ru: "убираем -e перед -ing" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "👀 Look! Что происходит сейчас?", lines: [
        ["*Look!* Bob *is diving*!", "Смотри! Боб сейчас ныряет!"],
        ["I *am (I'm) swimming* now.", "Я сейчас плаваю."],
        ["We *are (we're) having* fun today!", "Мы сейчас веселимся!"] ] },
      { h: "am / is / are — кто делает?", lines: [
        ["I *am* skiing.", "я — am"],
        ["He/She/It *is* skating.", "он/она/оно — is"],
        ["We/You/They *are* sailing.", "мы/вы/они — are"] ] },
      { h: "❌ Отрицание: isn't / aren't", lines: [
        ["Rose and Tom *aren't* skiing.", "Роза и Том сейчас не катаются на лыжах."],
        ["Lulu *isn't* eating an ice cream.", "Лулу сейчас не ест мороженое."] ] },
      { h: "❓ Вопрос: Is / Are…?", lines: [
        ["*Is* Rose diving? — No, she isn't.", "Роза ныряет? — Нет."],
        ["*Are* they skiing? — Yes, they are.", "Они катаются на лыжах? — Да."] ] },
      { h: "✏️ -ing: убираем -e!", lines: [
        ["dive → div*ing*, make → mak*ing*, have → hav*ing*, shine → shin*ing*", "слово на -e → убираем e перед -ing"],
        ["ski → ski*ing*, surf → surf*ing*, sail → sail*ing*", "нет -e на конце → просто +ing"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ He skiing.  ✓ He *is* skiing.", "нельзя терять am/is/are!"],
        ["✗ They isn't.  ✓ They *aren't*.", "they/we/you — aren't, не isn't"] ] }
    ] },
  { type: "sort", title: "Как пишется -ing?", short: "-ing", instr: "Посмотри на картинку. Просто +ing или убираем -e?",
    buckets: ["просто +ing", "-e → убираем e"],
    items: [
      { id: "ing", img: "skier", t: "ski", b: 0 },
      { id: "ing", img: "sailboat", t: "sail", b: 0 },
      { id: "ing", img: "person-surfing", t: "surf", b: 0 },
      { id: "ing", img: "violin", t: "play", b: 0 },
      { id: "ing", img: "ice-skate", t: "skate", b: 1 },
      { id: "ing", img: "diving-mask", t: "dive", b: 1 },
      { id: "ing", img: "castle", t: "make", b: 1 },
      { id: "ing", img: "sun", t: "shine", b: 1 }
    ] },
  { type: "gaps", title: "am, is или are?", short: "Кто делает?", instr: "Посмотри на картинку и выбери am, is или are.",
    items: [
      { id: "is", img: "skier", t: "William {{*is|am|are}} skiing." },
      { id: "are", img: "sailboat", t: "Tom and Dan {{*are|is|am}} sailing." },
      { id: "am", img: "person-surfing", t: "I {{*am|is|are}} surfing now." },
      { id: "is", img: "ice-skate", t: "Rose {{*is|are|am}} skating." },
      { id: "are", img: "violin", t: "We {{*are|is|am}} playing the violin." },
      { id: "is", img: "diving-mask", t: "Bob {{*is|are|am}} diving." }
    ] },
  { type: "gaps", title: "Отрицание", short: "Isn't / aren't", instr: "Напиши isn't или aren't.",
    items: [
      { id: "neg", img: "skier", t: "Rose and Tom [[aren't]] skiing." },
      { id: "neg", img: "ice-cream", t: "Lulu [[isn't]] eating an ice cream." },
      { id: "neg", img: "castle", t: "Larry [[isn't]] making a sandcastle." },
      { id: "neg", img: "violin", t: "They [[aren't]] playing the violin." }
    ] },
  { type: "gaps", title: "Задай вопрос", short: "Is / Are?", instr: "Это задание 2 из учебника (стр. 14). Выбери Is или Are.",
    items: [
      { id: "q", img: "diving-mask", t: "{{*Is|Are|Am}} Rose diving? — No, she isn't." },
      { id: "q", img: "skier", t: "{{*Are|Is|Am}} they skiing? — Yes, they are." },
      { id: "q", img: "sun", t: "{{*Is|Are|Am}} the sun shining? — Yes, it is." },
      { id: "q", img: "person-surfing", t: "{{*Are|Is|Am}} you surfing? — Yes, I am." }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "is", t: "He is skiing.", ok: true },
      { id: "are", t: "They is sailing.", ok: false, fix: "They are sailing." },
      { id: "neg", t: "Rose and Tom aren't skiing.", ok: true },
      { id: "ing", t: "She is haveing fun.", ok: false, fix: "She is having fun." },
      { id: "q", t: "Is Bob diving?", ok: true },
      { id: "am", t: "I is surfing.", ok: false, fix: "I am surfing." }
    ] },
  { type: "order", title: "Собери предложение", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "is", img: "skier", q: "Уильям катается на лыжах.", s: "William is skiing." },
      { id: "are", img: "sailboat", q: "Том и Дэн плавают под парусом.", s: "Tom and Dan are sailing." },
      { id: "neg", img: "ice-cream", q: "Лулу сейчас не ест мороженое.", s: "Lulu isn't eating an ice cream." },
      { id: "q", img: "diving-mask", q: "Боб ныряет?", s: "Is Bob diving?" },
      { id: "am", img: "person-surfing", q: "Я сейчас занимаюсь сёрфингом.", s: "I am surfing." },
      { id: "is", img: "castle", q: "Ларри строит замок из песка.", s: "Larry is making a sandcastle." }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется главная часть.",
    items: [
      { id: "am", ru: "Я сейчас плаваю.", en: "I am swimming.", key: "i am swimming|i'm swimming" },
      { id: "are", ru: "Мы сейчас веселимся.", en: "We are having fun.", key: "we are having fun|we're having fun" },
      { id: "is", ru: "Солнце светит.", en: "The sun is shining.", key: "is shining" },
      { id: "neg", ru: "Роза сейчас не катается на коньках.", en: "Rose isn't skating.", key: "isn't skating|is not skating" },
      { id: "q", ru: "Они катаются на лыжах?", en: "Are they skiing?", key: "are they skiing" },
      { id: "ing", ru: "Ларри строит замок из песка.", en: "Larry is making a sandcastle.", key: "making a sandcastle" }
    ] }
];
