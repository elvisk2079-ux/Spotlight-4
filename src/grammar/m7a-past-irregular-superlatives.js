// TITLE: My Best Day Ever!
// EYEBROW: Spotlight 4 Grammar · Module 7 · Unit 13a, 13b, 14a
// SUB: Неправильные глаголы в прошедшем времени (go-went, see-saw...) + Did/didn't. Плюс превосходная степень: kindest, prettiest, best, worst.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: I went to a concert! Did you go to the party? Ann was the kindest student in my class.
const META = { ls: "s4g-m7-irrsup", cards: false, boardLabel: "Правила" };
const P = [
  { id: "irr", phrase: "go → went, see → saw…", ru: "неправильные глаголы: особая форма" },
  { id: "q", phrase: "Did … + go/see/take…?", ru: "вопрос: начальная форма" },
  { id: "neg", phrase: "didn't + go/see/take…", ru: "отрицание: начальная форма" },
  { id: "est", phrase: "kind → kindest", ru: "превосходная степень: +est" },
  { id: "iest", phrase: "pretty → prettiest", ru: "-y → -iest" },
  { id: "irrsup", phrase: "good → best, bad → worst", ru: "особые формы" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "⏪ Неправильные глаголы — особая форма!", lines: [
        ["go → *went*, see → *saw*, come → *came*", "не -ed, а совсем другое слово!"],
        ["have → *had*, ride → *rode*, win → *won*", "ещё примеры"],
        ["meet → *met*, sleep → *slept*, take → *took*, swim → *swam*", "запоминай наизусть!"],
        ["draw → *drew*, make → *made*, eat → *ate*, drink → *drank*", "и ещё"],
        ["sing → *sang*, leave → *left*, write → *wrote*, buy → *bought*, give → *gave*", "и ещё!"] ] },
      { h: "❓❌ Вопрос и отрицание: did / didn't", lines: [
        ["*Did* you go to the party? — Yes, I did.", "did + начальная форма (go, не went!)"],
        ["I *didn't* go to the party.", "didn't + начальная форма"] ] },
      { h: "🏆 Превосходная степень — самый…!", lines: [
        ["kind → kind*er* → kind*est*", "+est: самый добрый"],
        ["strong → strong*er* → strong*est*", "+est"],
        ["pretty → prett*ier* → prett*iest*", "-y → -iest"],
        ["good → *better* → *best*", "особая форма: лучший"],
        ["bad → *worse* → *worst*", "особая форма: худший"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ Did you went?  ✓ Did you *go*?", "после did/didn't — начальная форма, не went!"],
        ["✗ goodest.  ✓ *best*.", "good — особое слово, не +est"] ] }
    ] },
  { type: "gaps", title: "Напиши глагол", short: "Прошедшее время", instr: "Напиши глагол в прошедшем времени.",
    items: [
      { id: "irr", img: "airplane", t: "Uncle Harry [[came]] from Australia." },
      { id: "irr", img: "elephant", t: "I [[rode]] an elephant!" },
      { id: "irr", img: "tent", t: "We [[slept]] in a tent." },
      { id: "irr", img: "trophy", t: "I [[won]] a trophy!" },
      { id: "irr", img: "glass-of-milk", t: "Paco [[drank]] some milk." },
      { id: "irr", img: "artist-palette", t: "I [[drew]] a picture." },
      { id: "irr", img: "envelope", t: "I [[wrote]] a letter." },
      { id: "irr", img: "birthday-cake", t: "I [[had]] a big birthday party." }
    ] },
  { type: "gaps", title: "Задай вопрос", short: "Did…?", instr: "После did — начальная форма глагола!",
    items: [
      { id: "q", t: "Did you {{*go|went|goes}} to the party?" },
      { id: "q", t: "Did she {{*see|saw|sees}} the dinosaurs?" },
      { id: "q", t: "Did they {{*swim|swam|swims}} in the sea?" },
      { id: "q", t: "Did he {{*take|took|takes}} a photo?" }
    ] },
  { type: "gaps", title: "Отрицание", short: "Didn't", instr: "Напиши didn't.",
    items: [
      { id: "neg", t: "I [[didn't]] go to the party." },
      { id: "neg", t: "She [[didn't]] see the film." },
      { id: "neg", t: "We [[didn't]] win the race." },
      { id: "neg", t: "He [[didn't]] eat the cake." }
    ] },
  { type: "gaps", title: "Самый...!", short: "Superlative", instr: "Выбери правильную превосходную степень.",
    items: [
      { id: "est", img: "musical-notes", t: "Ann was the {{*kindest|kinder|kind}} student in my class." },
      { id: "est", t: "He is the {{*strongest|stronger|strong}} boy in the team." },
      { id: "est", t: "This is the {{*loudest|louder|loud}} instrument." },
      { id: "iest", t: "She is the {{*prettiest|prettier|pretty}} girl in the photo." },
      { id: "irrsup", t: "He is the {{*best|goodest|gooder}} student in the class." },
      { id: "irrsup", t: "It was the {{*worst|baddest|badder}} day of my life." }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "irr", t: "I went to a concert last night.", ok: true },
      { id: "q", t: "Did you went to the party?", ok: false, fix: "Did you go to the party?" },
      { id: "neg", t: "I didn't go to the party.", ok: true },
      { id: "est", t: "He is the strongest boy.", ok: true },
      { id: "iest", t: "She is the prettiest girl.", ok: true },
      { id: "irrsup", t: "He is the goodest student.", ok: false, fix: "He is the best student." }
    ] },
  { type: "order", title: "Собери предложение", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "irr", img: "elephant", q: "Я катался на слоне.", s: "I rode an elephant." },
      { id: "q", img: "trophy", q: "Ты выиграл приз?", s: "Did you win a trophy?" },
      { id: "neg", img: "birthday-cake", q: "Я не ходил на вечеринку.", s: "I didn't go to the party." },
      { id: "est", q: "Он самый сильный мальчик в команде.", s: "He is the strongest boy in the team." },
      { id: "iest", q: "Она самая красивая девочка.", s: "She is the prettiest girl." },
      { id: "irrsup", q: "Он лучший ученик в классе.", s: "He is the best student in the class." }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется главная часть.",
    items: [
      { id: "irr", ru: "Я написал письмо.", en: "I wrote a letter.", key: "i wrote a letter" },
      { id: "q", ru: "Ты видел динозавров?", en: "Did you see the dinosaurs?", key: "did you see" },
      { id: "neg", ru: "Она не выиграла гонку.", en: "She didn't win the race.", key: "didn't win|did not win" },
      { id: "est", ru: "Это самый громкий инструмент.", en: "It's the loudest instrument.", key: "loudest" },
      { id: "iest", ru: "Это была самая симпатичная открытка.", en: "It was the prettiest card.", key: "prettiest" },
      { id: "irrsup", ru: "Это был худший день в моей жизни.", en: "It was the worst day of my life.", key: "worst day" }
    ] }
];
