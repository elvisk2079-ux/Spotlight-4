// TITLE: Months
// EYEBROW: Spotlight 4 · Module 4 · Unit 8a · Месяцы
// SUB: 12 месяцев с картинками. Пишутся с большой буквы! Карточки, порядок месяцев, времена года и «When's your birthday?».
// BOARD: Твои месяцы
// HOME: ../index.html
const META = { ls: "s4-m4-months" };
const P = [
  { id: "jan", phrase: "January", ru: "январь", img: "snowman" },
  { id: "feb", phrase: "February", ru: "февраль", img: "snowflake" },
  { id: "mar", phrase: "March", ru: "март", img: "tulip" },
  { id: "apr", phrase: "April", ru: "апрель", img: "umbrella-with-rain-drops" },
  { id: "may", phrase: "May", ru: "май", img: "cherry-blossom" },
  { id: "jun", phrase: "June", ru: "июнь", img: "strawberry" },
  { id: "jul", phrase: "July", ru: "июль", img: "beach-with-umbrella" },
  { id: "aug", phrase: "August", ru: "август", img: "watermelon" },
  { id: "sep", phrase: "September", ru: "сентябрь", img: "school" },
  { id: "oct", phrase: "October", ru: "октябрь", img: "fallen-leaf" },
  { id: "nov", phrase: "November", ru: "ноябрь", img: "cloud-with-rain" },
  { id: "dec", phrase: "December", ru: "декабрь", img: "christmas-tree" }
];
const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и выбери", short: "Слушаем", instr: "Нажми 🔊, послушай месяц и выбери перевод." },
  { type: "mcq", title: "Что идёт дальше?", short: "Порядок", instr: "Какой месяц идёт следующим?",
    items: [
      { id: "feb", q: "January → …", o: ["February", "March", "December"] },
      { id: "mar", q: "February → …", o: ["March", "May", "January"] },
      { id: "apr", q: "March → …", o: ["April", "August", "May"] },
      { id: "may", q: "April → …", o: ["May", "March", "June"] },
      { id: "jun", q: "May → …", o: ["June", "July", "January"] },
      { id: "jul", q: "June → …", o: ["July", "January", "August"] },
      { id: "aug", q: "July → …", o: ["August", "April", "June"] },
      { id: "sep", q: "August → …", o: ["September", "October", "November"] },
      { id: "oct", q: "September → …", o: ["October", "November", "August"] },
      { id: "nov", q: "October → …", o: ["November", "December", "September"] },
      { id: "dec", q: "November → …", o: ["December", "October", "January"] },
      { id: "jan", q: "December → …", o: ["January", "February", "November"] }
    ] },
  { type: "sort", title: "Какое время года?", short: "Сезоны", instr: "Нажми на время года для каждого месяца.",
    buckets: ["❄️ winter", "🌷 spring", "☀️ summer", "🍂 autumn"],
    items: [
      { id: "dec", t: "December", b: 0 }, { id: "jan", t: "January", b: 0 }, { id: "feb", t: "February", b: 0 },
      { id: "mar", t: "March", b: 1 }, { id: "apr", t: "April", b: 1 }, { id: "may", t: "May", b: 1 },
      { id: "jun", t: "June", b: 2 }, { id: "jul", t: "July", b: 2 }, { id: "aug", t: "August", b: 2 },
      { id: "sep", t: "September", b: 3 }, { id: "oct", t: "October", b: 3 }, { id: "nov", t: "November", b: 3 }
    ] },
  { type: "gaps", title: "Пропущенные месяцы", short: "Пропуски", keepOrder: true, layout: "text", instr: "Впиши пропущенные месяцы. Не забудь большую букву!",
    items: [
      { id: "jan", t: "[[January]], February, [[March#mar]], April, [[May#may]], June," },
      { id: "jul", t: "July, [[August#aug]], [[September#sep]], October, [[November#nov]], December." }
    ] },
  { type: "gaps", title: "Праздники и каникулы", short: "Праздники", instr: "Выбери месяц.",
    items: [
      { id: "jan", img: "snowman", t: "New Year's Day is in {{*January|June|July}}." },
      { id: "mar", img: "tulip", t: "Women's Day (8 March) is in {{*March|May|October}}." },
      { id: "sep", img: "school", t: "School starts in {{*September|August|December}}." },
      { id: "dec", img: "christmas-tree", t: "There's a New Year tree at home in {{*December|July|April}}." },
      { id: "may", img: "cherry-blossom", t: "Victory Day (9 May) is in {{*May|March|November}}." },
      { id: "jun", img: "strawberry", t: "The summer holidays start in {{*June|February|October}}." },
      { id: "apr", img: "umbrella-with-rain-drops", t: "April Fool's Day is in {{*April|August|January}}." },
      { id: "feb", img: "snowflake", t: "Valentine's Day is in {{*February|September|June}}." }
    ] },
  { type: "gaps", title: "When's your birthday?", short: "Birthday", instr: "Прочитай по-русски и выбери нужный ответ.",
    items: [
      { id: "jul", t: "Мой день рождения в июле. — My birthday is {{*in July|on July|at July}}." },
      { id: "oct", t: "Когда твой день рождения? — {{*When's|What's|Where's}} your birthday?" },
      { id: "nov", t: "Он в ноябре. — It's in {{*November|november|Novembers}}." },
      { id: "aug", t: "Её день рождения в августе. — Her birthday is in {{*August|April|autumn}}." }
    ] },
  { type: "letters", title: "Собери месяц из букв", short: "Буквы", instr: "Нажимай на буквы по порядку. Первая буква — большая!" },
  { type: "write", title: "Напиши месяц", short: "Пишем", instr: "Напиши месяц по-английски с большой буквы." }
];
