// TITLE: What Happened Yesterday?
// EYEBROW: Spotlight 4 Grammar · Module 6 · Unit 11a, 11b
// SUB: Past Simple правильных глаголов: -ed, -d, удвоение согласной, y → ied. Плюс вопрос Did...? и отрицание didn't.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ — одна точка. Все точки зелёные — правило усвоено. Красная рамка — повтори это правило.
// HOME: index.html
// HUB: The tortoise surprised them all! Did the tortoise win the race? The hare didn't win.
const META = { ls: "s4g-m6-pastreg", cards: false, boardLabel: "Правила" };
const P = [
  { id: "ed", phrase: "watch → watched", ru: "большинство глаголов: +ed" },
  { id: "de", phrase: "surprise → surprised", ru: "слово на -e: +d" },
  { id: "dbl", phrase: "stop → stopped", ru: "удваиваем согласную +ed" },
  { id: "y", phrase: "study → studied", ru: "согласная + y → ied" },
  { id: "neg", phrase: "didn't + глагол", ru: "отрицание в прошедшем" },
  { id: "q", phrase: "Did … + глагол?", ru: "вопрос в прошедшем" }
];
const DRILLS = [
  { type: "rule", title: "Запомни!", short: "Правило", instr: "Прочитай правило. Жёлтым выделено самое важное.",
    blocks: [
      { h: "⏪ Past Simple — что было вчера", lines: [
        ["John *laughed* at the funny film.", "Джон смеялся над смешным фильмом."],
        ["The tortoise *surprised* them all.", "Черепаха всех удивила."],
        ["She *cooked* dinner last night.", "Она приготовила ужин вчера вечером."] ] },
      { h: "✏️ Как пишется -ed?", lines: [
        ["watch → watch*ed*, jump → jump*ed*, walk → walk*ed*, talk → talk*ed*, play → play*ed*, open → open*ed*", "обычно просто +ed"],
        ["surprise → surpris*ed*, live → liv*ed*", "слово на -e → просто +d"],
        ["stop → sto*pped*, plan → pla*nned*", "короткое слово (согласная-гласная-согласная) → удваиваем последнюю букву"],
        ["cry → cr*ied*, study → stud*ied*", "согласная + y → убираем y, +ied"] ] },
      { h: "❓❌ Вопрос и отрицание: did / didn't", lines: [
        ["*Did* she cook dinner? — Yes, she did.", "did + глагол БЕЗ -ed"],
        ["She *didn't* watch TV.", "didn't + глагол БЕЗ -ed"] ] },
      { h: "Ловушка!", warn: true, lines: [
        ["✗ Did she cooked?  ✓ Did she *cook*?", "после did глагол без -ed!"],
        ["✗ She didn't cooked.  ✓ She *didn't cook*.", "после didn't тоже без -ed"],
        ["✗ stoped  ✓ *stopped*", "не забывай удвоить согласную"] ] }
    ] },
  { type: "sort", title: "Как пишется -ed?", short: "-ed/-d/…", instr: "К какой группе относится глагол?",
    buckets: ["+ed", "+d (на -e)", "удваиваем +ed", "y → ied"],
    items: [
      { id: "ed", t: "watch → watched", b: 0 },
      { id: "ed", t: "jump → jumped", b: 0 },
      { id: "ed", t: "walk → walked", b: 0 },
      { id: "ed", t: "talk → talked", b: 0 },
      { id: "de", t: "surprise → surprised", b: 1 },
      { id: "de", t: "live → lived", b: 1 },
      { id: "dbl", t: "stop → stopped", b: 2 },
      { id: "dbl", t: "plan → planned", b: 2 },
      { id: "y", t: "cry → cried", b: 3 },
      { id: "y", t: "study → studied", b: 3 }
    ] },
  { type: "gaps", title: "Напиши глагол", short: "Tortoise and Hare", instr: "Напиши глагол в прошедшем времени.",
    items: [
      { id: "ed", img: "rabbit", t: "The hare [[laughed]] at the tortoise." },
      { id: "de", img: "turtle", t: "The tortoise [[surprised]] them all." },
      { id: "dbl", img: "rabbit", t: "The hare [[stopped]] to rest under the tree." },
      { id: "y", img: "paintbrush", t: "She [[studied]] English yesterday." },
      { id: "ed", img: "television", t: "She [[watched]] TV last night." },
      { id: "ed", img: "fork-and-knife-with-plate", t: "She [[cooked]] dinner last night." }
    ] },
  { type: "gaps", title: "Задай вопрос", short: "Did…?", instr: "Выбери Did, Was или Do.",
    items: [
      { id: "q", img: "turtle", t: "{{*Did|Was|Do}} the tortoise win the race? — Yes, it did." },
      { id: "q", img: "rabbit", t: "{{*Did|Was|Do}} the hare rest under the tree? — Yes, it did." },
      { id: "q", img: "television", t: "{{*Did|Was|Do}} she watch TV? — No, she didn't." },
      { id: "q", img: "dog", t: "{{*Did|Was|Do}} he walk the dog yesterday? — Yes, he did." }
    ] },
  { type: "gaps", title: "Отрицание", short: "Didn't", instr: "Напиши didn't.",
    items: [
      { id: "neg", img: "rabbit", t: "The hare [[didn't]] win the race." },
      { id: "neg", img: "television", t: "She [[didn't]] watch TV last night." },
      { id: "neg", img: "fork-and-knife-with-plate", t: "He [[didn't]] cook dinner." },
      { id: "neg", img: "musical-notes", t: "They [[didn't]] listen to music." }
    ] },
  { type: "tf", title: "Найди ошибку", short: "Ошибки", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "ed", t: "She cooked dinner last night.", ok: true },
      { id: "de", t: "The tortoise surprised them all.", ok: true },
      { id: "dbl", t: "The hare stoped to rest.", ok: false, fix: "The hare stopped to rest." },
      { id: "y", t: "She studyed English.", ok: false, fix: "She studied English." },
      { id: "q", t: "Did she cooked dinner?", ok: false, fix: "Did she cook dinner?" },
      { id: "neg", t: "She didn't watched TV.", ok: false, fix: "She didn't watch TV." }
    ] },
  { type: "order", title: "Собери предложение", short: "Порядок", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "ed", img: "dog", q: "Он вчера гулял с собакой.", s: "He walked the dog yesterday." },
      { id: "de", img: "turtle", q: "Черепаха всех удивила.", s: "The tortoise surprised them all." },
      { id: "dbl", img: "rabbit", q: "Заяц остановился отдохнуть.", s: "The hare stopped to rest." },
      { id: "y", img: "paintbrush", q: "Она изучала английский вчера.", s: "She studied English yesterday." },
      { id: "q", img: "turtle", q: "Черепаха выиграла гонку?", s: "Did the tortoise win the race?" },
      { id: "neg", img: "television", q: "Она вчера не смотрела телевизор.", s: "She didn't watch TV yesterday." }
    ] },
  { type: "translate", title: "Скажи по-английски", short: "Перевод", instr: "Скажи вслух, потом напиши. Проверяется главная часть.",
    items: [
      { id: "ed", ru: "Она вчера приготовила ужин.", en: "She cooked dinner yesterday.", key: "cooked dinner" },
      { id: "de", ru: "Заяц всех удивил.", en: "The hare surprised everyone.", key: "surprised" },
      { id: "dbl", ru: "Он остановился под деревом.", en: "He stopped under the tree.", key: "stopped" },
      { id: "y", ru: "Она изучала английский язык.", en: "She studied English.", key: "studied english" },
      { id: "q", ru: "Черепаха выиграла гонку?", en: "Did the tortoise win the race?", key: "did the tortoise win" },
      { id: "neg", ru: "Заяц не выиграл гонку.", en: "The hare didn't win the race.", key: "didn't win|did not win" }
    ] }
];
