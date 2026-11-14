// TITLE: Chapter 4. What a Mess!
// EYEBROW: The Cat Club and the Secret Cake · Глава 4 из 6
// SUB: Слова из главы 4: mess, tail, sneeze, can't stop laughing, clean, wash, paw, push, change places. Сначала карточки, потом задания одно за другим.
// BOARD: Слова главы 4
// HOME: index.html
// TABS: book
const META = { ls: "s4-cat-club-ch4" };
const P = [
  { id: "mess", phrase: "mess", ru: "беспорядок" },
  { id: "tail", phrase: "tail", ru: "хвост" },
  { id: "sneeze", phrase: "sneeze", ru: "чихать", img: "sneezing-face" },
  { id: "laughing", phrase: "can't stop laughing", ru: "не могут перестать смеяться", img: "rolling-on-the-floor-laughing" },
  { id: "clean", phrase: "clean", ru: "убирать", img: "broom" },
  { id: "wash", phrase: "wash", ru: "мыть", img: "soap" },
  { id: "paw", phrase: "paw", ru: "лапа", img: "paw-prints" },
  { id: "push", phrase: "push", ru: "толкать" },
  { id: "places", phrase: "change places", ru: "поменяться местами", img: "counterclockwise-arrows-button" }
];
P.forEach(p => { p.en = p.ru; });
const DRILLS = [
  { type: "match", title: "Найди пару", short: "Пары", size: 5, instr: "Нажми на английское слово, потом на перевод." },
  { type: "listen", title: "Послушай и выбери перевод", short: "Слушаем", instr: "Нажми 🔊, послушай слово и выбери перевод." },
  { type: "listenpic", title: "Послушай и найди картинку", short: "Картинки", n: 4, instr: "Нажми 🔊, послушай слово и нажми на нужную картинку." },
  { type: "pic", title: "Что на картинке?", short: "Что это?", instr: "Посмотри на картинку и выбери слово." },
  { type: "pick", title: "Прочитай и найди картинку", short: "Читаем", n: 4, instr: "Прочитай слово и нажми на нужную картинку." },
  { type: "meaning", title: "Как это по-английски?", short: "Перевод", instr: "Прочитай слово по-русски и выбери английское." },
  { type: "gaps", title: "Вспомни главу 4", short: "История", keepOrder: true, layout: "text", pic: "🐈🧂", story: "Chapter 4. What a Mess!", instr: "Прочитай кусочки из главы и выбери слово.",
    items: [
      { id: "mess", t: "They open the kitchen door and... oh no! What a {{*mess|surprise|recipe}}!" },
      { id: "tail", t: "Anya's cat is in the flour bag. Now it is white from its nose to its {{*tail|paw|ceiling}}!" },
      { id: "sneeze", t: "Veronika's cat is playing with the pepper. \"Achoo!\" The cat {{*sneezes|purrs|giggles}}." },
      { id: "laughing", t: "The cats look so funny! The girls {{*can't stop laughing|change places|bake a cake}}." },
      { id: "clean", t: "They {{*clean|taste|watch}} the kitchen." },
      { id: "wash", t: "They {{*wash|bake|cut}} the white cat." },
      { id: "push", t: "Polina's cat goes to the jars and {{*pushes|bakes|tastes}} them..." },
      { id: "paw", t: "...with its {{*paw|spoon|ceiling}}. Click! Clack!" },
      { id: "places", t: "The jars {{*change places|can't stop laughing|look delicious}}. And the girls don't see it..." }
    ] },
  { type: "tf", title: "Верно или неверно?", short: "Верно?", instr: "Вспомни главу 4. Это верно или неверно?",
    items: [
      {"id": "mess", "t": "The kitchen is a mess.", "ok": true},
      {"id": "tail", "t": "Anya's cat is white from its nose to its tail.", "ok": true},
      {"id": "sneeze", "t": "Veronika's cat sneezes. It plays with the pepper.", "ok": true},
      {"id": "laughing", "t": "The girls are angry. They cry.", "ok": false, "fix": "The girls can't stop laughing."},
      {"id": "clean", "t": "The girls clean the kitchen.", "ok": true},
      {"id": "wash", "t": "They wash the black cat.", "ok": false, "fix": "They wash the white cat."},
      {"id": "paw", "t": "A cat has got four paws.", "ok": true},
      {"id": "push", "t": "Polina's cat pushes the jars.", "ok": true},
      {"id": "places", "t": "The jars change places. The girls see it.", "ok": false, "fix": "The jars change places. The girls don't see it!"}
    ] },
  { type: "gaps", title: "Новые предложения", short: "Предложения", instr: "Это уже не из книжки! Прочитай и выбери подходящее слово.",
    items: [
      { id: "mess", t: "Your room is a {{*mess|tail|paw}}! Clean it, please!" },
      { id: "tail", t: "A monkey has got a long {{*tail|mess|paw}}." },
      { id: "sneeze", img: "sneezing-face", t: "I've got a cold. I {{*sneeze|push|clean}} all day: Achoo!" },
      { id: "laughing", img: "rolling-on-the-floor-laughing", t: "The film is so funny! We {{*can't stop laughing|change places|sneeze}}." },
      { id: "clean", img: "broom", t: "Let's {{*clean|sneeze|push}} our classroom." },
      { id: "wash", img: "soap", t: "{{*Wash|Push|Sneeze}} your hands before dinner!" },
      { id: "paw", img: "paw-prints", t: "My cat has got soft {{*paws|tails|messes}}." },
      { id: "push", t: "Don't {{*push|wash|clean}} your friend!" },
      { id: "places", img: "counterclockwise-arrows-button", t: "Anya and Polina, please {{*change places|sneeze|wash}}. Anya, sit here!" }
    ] },
  { type: "order", title: "Собери фразу", short: "Фразы", instr: "Нажимай на слова по порядку.",
    items: [
      { id: "mess", q: "Какой беспорядок!", s: "What a mess!" },
      { id: "sneeze", img: "sneezing-face", q: "Кошка чихает.", s: "The cat sneezes." },
      { id: "laughing", img: "rolling-on-the-floor-laughing", q: "Девочки не могут перестать смеяться.", s: "The girls can't stop laughing." },
      { id: "clean", img: "broom", q: "Они убирают кухню.", s: "They clean the kitchen." },
      { id: "wash", img: "soap", q: "Они моют белую кошку.", s: "They wash the white cat." },
      { id: "push", q: "Кошка толкает банки.", s: "The cat pushes the jars." },
      { id: "places", img: "counterclockwise-arrows-button", q: "Банки меняются местами.", s: "The jars change places." },
      { id: "tail", q: "Она белая от носа до хвоста.", s: "It is white from its nose to its tail." }
    ] },
  { type: "gaps", title: "Впиши слово", short: "Впиши", instr: "Выбери слово из рамки и впиши его в предложение.",
    bank: ["can't stop laughing", "change places", "clean", "mess", "paw", "pushes", "sneezes", "tail", "wash"],
    items: [
      { id: "mess", t: "Oh no! What a [[mess]]!" },
      { id: "tail", t: "The cat is white from its nose to its [[tail]]." },
      { id: "sneeze", img: "sneezing-face", t: "Achoo! The cat [[sneezes]]." },
      { id: "laughing", img: "rolling-on-the-floor-laughing", t: "The cats look funny. The girls [[can't stop laughing]]." },
      { id: "clean", img: "broom", t: "Let's [[clean]] the kitchen!" },
      { id: "wash", img: "soap", t: "Let's [[wash]] the white cat!" },
      { id: "paw", img: "paw-prints", t: "The cat pushes the jars with its [[paw]]." },
      { id: "push", t: "Click! Clack! The cat [[pushes]] the jars." },
      { id: "places", img: "counterclockwise-arrows-button", t: "Now the jars [[change places]]!" }
    ] },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово.", ids: ["mess", "tail", "sneeze", "clean", "wash", "paw", "push"] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Прочитай перевод и напиши слово по-английски. Забыл — вернись к карточкам." }
];
