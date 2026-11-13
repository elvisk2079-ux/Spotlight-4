// TITLE: What Do You Do?
// EYEBROW: Spotlight 4 Grammar · Module 2 · Unit 3b
// SUB: Present Simple: I/you/we/they + verb, he/she/it + verb-s. Do/Does, don't/doesn't. Наречия частоты: always, usually, sometimes, never.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: I work at a hospital. She works at a hospital. We always play football on Sundays.
const META = { ls: "s4g-m2-simple", cards: false, boardLabel: "Правила" };
const P = [
  { id: "do", phrase: "I/you/we/they + verb", ru: "обычная форма глагола" },
  { id: "does", phrase: "he/she/it + verb-s", ru: "добавляем -s/-es/-ies" },
  { id: "qdo", phrase: "Do/Does …?", ru: "вопрос" },
  { id: "neg", phrase: "don't / doesn't", ru: "отрицание" },
  { id: "freq", phrase: "always/usually/sometimes/never", ru: "наречия частоты — перед глаголом" },
  { id: "spell", phrase: "watch → watches, study → studies", ru: "особое написание -es/-ies" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "🔁 Present Simple — что бывает обычно", lines: [
        ["I *work* at a hospital.", "я/ты/мы/они — просто глагол"],
        ["She *works* at a hospital.", "он/она/оно — глагол + -s"] ] },
      { h: "✏️ -s, -es или -ies?", lines: [
        ["work → work*s*, play → play*s*", "обычно просто +s"],
        ["watch → watch*es*, wash → wash*es*, go → go*es*, do → do*es*", "после -ch, -sh, -o, -x, -s → +es"],
        ["study → stud*ies*, cry → cr*ies*", "согласная + y → убираем y, +ies"] ] },
      { h: "❓ Вопрос и ❌ отрицание", lines: [
        ["*Do* you work at a hospital? — Yes, I do.", "do — я/ты/мы/они"],
        ["*Does* she work at a hospital? — Yes, she does.", "does — он/она/оно"],
        ["I *don't* work on Sundays.", "don't = do not"],
        ["She *doesn't* work on Sundays.", "doesn't = does not"] ] },
      { h: "📊 Как часто? always / usually / sometimes / never", lines: [
        ["We *always* play football on Sundays. ✓✓✓✓", "всегда"],
        ["We *usually* wake up late on Saturdays. ✓✓✓", "обычно"],
        ["We *sometimes* go to the park. ✓✓", "иногда"],
        ["We *never* go to school on Sundays. ✓", "никогда"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ She work.  ✓ She *works*.", "не забывай -s для he/she/it!"],
        ["✗ Does she works?  ✓ *Does she work*?", "после do/does глагол БЕЗ -s"] ] }
    ] },
  { type: "sort", title: "Как пишется -s?", short: "-s/-es/-ies", instr: "Прочитай глагол. Какое окончание он получает для he/she/it?",
    buckets: ["+s", "+es", "+ies"],
    items: [
      { id: "spell", t: "work → works", b: 0 },
      { id: "spell", t: "play → plays", b: 0 },
      { id: "spell", t: "read → reads", b: 0 },
      { id: "spell", t: "clean → cleans", b: 0 },
      { id: "spell", img: "fork-and-knife-with-plate", t: "watch → watches", b: 1 },
      { id: "spell", t: "wash → washes", b: 1 },
      { id: "spell", t: "go → goes", b: 1 },
      { id: "spell", t: "do → does", b: 1 },
      { id: "spell", img: "envelope", t: "carry → carries", b: 2 },
      { id: "spell", t: "study → studies", b: 2 }
    ] },
  { type: "gaps", title: "Do или Does?", short: "Вопрос", instr: "Посмотри на картинку и выбери Do или Does.",
    items: [
      { id: "qdo", img: "cook", t: "{{*Does|Do}} the baker work at night?" },
      { id: "qdo", img: "mechanic", t: "{{*Do|Does}} you fix cars? — No, I don't." },
      { id: "qdo", img: "health-worker", t: "{{*Does|Do}} she help sick people? — Yes, she does." },
      { id: "qdo", img: "envelope", t: "{{*Do|Does}} postmen carry big bags? — Yes, they do." }
    ] },
  { type: "gaps", title: "He / She + -s", short: "Задание 2", instr: "Напиши глагол с правильным окончанием.",
    items: [
      { id: "does", img: "fork-and-knife-with-plate", t: "The waiter [[serves]] food and drinks." },
      { id: "does", img: "mechanic", t: "The mechanic [[fixes]] cars." },
      { id: "does", img: "envelope", t: "The postman [[carries]] a big bag." },
      { id: "does", img: "health-worker", t: "The nurse [[helps]] sick people." }
    ] },
  { type: "gaps", title: "Как часто?", short: "Наречия", instr: "Посмотри на галочки и выбери always, usually, sometimes или never.",
    items: [
      { id: "freq", img: "soccer-ball", t: "We {{*always|never|sometimes}} play football on Sundays. ✓✓✓✓" },
      { id: "freq", img: "alarm-clock", t: "We {{*usually|always|never}} wake up late on Saturdays. ✓✓✓" },
      { id: "freq", img: "shopping-bags", t: "We {{*sometimes|always|never}} go shopping. ✓✓" },
      { id: "freq", img: "open-book", t: "We {{*never|always|usually}} read books on Sundays. ✓" }
    ] },
  { type: "gaps", title: "Отрицание", short: "Don't / doesn't", instr: "Напиши don't или doesn't.",
    items: [
      { id: "neg", img: "alarm-clock", t: "I [[don't]] wake up late on school days." },
      { id: "neg", img: "broom", t: "He [[doesn't]] clean his room every day." },
      { id: "neg", img: "sponge", t: "They [[don't]] wash the dishes on Sundays." },
      { id: "neg", img: "open-book", t: "She [[doesn't]] read books every day." }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "does", t: "She works at a hospital.", ok: true },
      { id: "does", t: "He go to school every day.", ok: false, fix: "He goes to school every day." },
      { id: "qdo", t: "Does she works at a hospital?", ok: false, fix: "Does she work at a hospital?" },
      { id: "neg", t: "I don't like football.", ok: true },
      { id: "do", t: "They play football every day.", ok: true },
      { id: "do", t: "I likes football.", ok: false, fix: "I like football." }
    ] },
  { type: "order", title: "Собери предложение", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "does", img: "health-worker", q: "Она помогает больным людям.", s: "She helps sick people." },
      { id: "qdo", img: "mechanic", q: "Он чинит машины?", s: "Does he fix cars?" },
      { id: "neg", img: "alarm-clock", q: "Я не просыпаюсь поздно.", s: "I don't wake up late." },
      { id: "freq", img: "soccer-ball", q: "Мы всегда играем в футбол по воскресеньям.", s: "We always play football on Sundays." },
      { id: "spell", img: "envelope", q: "Почтальон носит большую сумку.", s: "The postman carries a big bag." },
      { id: "do", img: "open-book", q: "Я читаю книги каждый день.", s: "I read books every day." }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется главная часть.",
    items: [
      { id: "does", ru: "Он работает в гараже.", en: "He works in a garage.", key: "he works" },
      { id: "qdo", ru: "Ты работаешь в больнице?", en: "Do you work at a hospital?", key: "do you work" },
      { id: "neg", ru: "Она не убирает комнату каждый день.", en: "She doesn't clean her room every day.", key: "doesn't clean" },
      { id: "freq", ru: "Мы иногда ходим в парк.", en: "We sometimes go to the park.", key: "sometimes go" },
      { id: "spell", ru: "Почтальон носит большую сумку.", en: "The postman carries a big bag.", key: "carries a big bag" },
      { id: "do", ru: "Я читаю книгу каждый день.", en: "I read a book every day.", key: "i read a book" }
    ] }
];
