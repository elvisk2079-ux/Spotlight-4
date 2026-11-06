// TITLE: Zoo Animals
// EYEBROW: Spotlight 4 · Module 4 · Unit 7a, 8a · Животные в зоопарке
// SUB: 13 животных из модуля «At the zoo!» — giraffe, monkey, dolphin, seal… Карточки с картинками и озвучкой, потом весёлые задания.
// BOARD: Твои животные
// HOME: ../index.html
const META = { ls: "s4-m4-animals" };
const P = [
  { id: "giraffe", phrase: "giraffe", ru: "жираф", img: "giraffe" },
  { id: "monkey", phrase: "monkey", ru: "обезьяна", img: "monkey" },
  { id: "dolphin", phrase: "dolphin", ru: "дельфин", img: "dolphin" },
  { id: "seal", phrase: "seal", ru: "тюлень", img: "seal" },
  { id: "lizard", phrase: "lizard", ru: "ящерица", img: "lizard" },
  { id: "whale", phrase: "whale", ru: "кит", img: "spouting-whale" },
  { id: "hippo", phrase: "hippo", ru: "бегемот", img: "hippopotamus" },
  { id: "crocodile", phrase: "crocodile", ru: "крокодил", img: "crocodile" },
  { id: "elephant", phrase: "elephant", ru: "слон", img: "elephant" },
  { id: "panda", phrase: "panda", ru: "панда", img: "panda" },
  { id: "parrot", phrase: "parrot", ru: "попугай", img: "parrot" },
  { id: "kangaroo", phrase: "kangaroo", ru: "кенгуру", img: "kangaroo" },
  { id: "koala", phrase: "koala", ru: "коала", img: "koala" }
];
const DRILLS = [
  { type: "listenpic", title: "Послушай и найди", short: "Слушаем", instr: "Нажми 🔊, послушай слово и нажми на нужную картинку." },
  { type: "pic", title: "Кто это?", short: "Кто это?", instr: "Посмотри на картинку и выбери слово." },
  { type: "pick", title: "Прочитай и найди", short: "Читаем", instr: "Прочитай слово и нажми на нужную картинку." },
  { type: "match", title: "Найди пару", short: "Пары", instr: "Нажми на английское слово, потом на перевод." },
  { type: "letters", title: "Собери слово из букв", short: "Буквы", instr: "Нажимай на буквы по порядку, чтобы получилось слово." },
  { type: "gaps", title: "Песня «Funny animals»", short: "Песня", keepOrder: true, instr: "Вспомни песню из учебника (стр. 58). Выбери животное.",
    items: [
      { id: "giraffe", img: "giraffe", t: "I see a tall {{*giraffe|seal|lizard}}, eating from a tree." },
      { id: "monkey", img: "monkey", t: "I see a silly {{*monkey|whale|hippo}}, laughing at me." },
      { id: "dolphin", img: "dolphin", t: "I see a clever {{*dolphin|giraffe|monkey}}, swimming in the sea." },
      { id: "seal", img: "seal", t: "I see a little {{*seal|giraffe|elephant}}, clapping one, two, three!" },
      { id: "lizard", img: "lizard", t: "I see a lazy {{*lizard|dolphin|whale}}, sitting in the sun." },
      { id: "whale", img: "spouting-whale", t: "I see a big {{*whale|lizard|parrot}}, having lots of fun." },
      { id: "hippo", img: "hippopotamus", t: "I see a baby {{*hippo|seal|monkey}}, learning how to run." },
      { id: "crocodile", img: "crocodile", t: "And one {{*crocodile|giraffe|panda}}, crying on its own!" }
    ] },
  { type: "gaps", title: "Угадай животное", short: "Загадки", instr: "Прочитай загадку и выбери животное.",
    items: [
      { id: "giraffe", t: "It is very tall. It has got a long neck. — Who is it? {{*giraffe|seal|lizard}}." },
      { id: "elephant", t: "It is big and grey. It has got big ears. — Who is it? {{*elephant|parrot|koala}}." },
      { id: "kangaroo", t: "It lives in Australia. It can jump. — Who is it? {{*kangaroo|whale|hippo}}." },
      { id: "koala", t: "It lives in Australia. It sleeps in a tree. — Who is it? {{*koala|dolphin|crocodile}}." },
      { id: "parrot", t: "It is green and red. It can fly and talk. — Who is it? {{*parrot|panda|seal}}." },
      { id: "panda", t: "It is black and white. It eats plants. — Who is it? {{*panda|parrot|lizard}}." },
      { id: "monkey", t: "It can climb trees. It likes bananas. — Who is it? {{*monkey|whale|seal}}." },
      { id: "whale", t: "It lives in the sea. It is very, very big. — Who is it? {{*whale|monkey|koala}}." },
      { id: "dolphin", t: "It lives in the sea. It is clever and it can jump. — Who is it? {{*dolphin|giraffe|panda}}." },
      { id: "crocodile", t: "It is green. It has got big teeth. — Who is it? {{*crocodile|parrot|koala}}." },
      { id: "hippo", t: "It is big and fat. It likes water. — Who is it? {{*hippo|lizard|parrot}}." },
      { id: "seal", t: "It lives in the water. It can clap! — Who is it? {{*seal|giraffe|kangaroo}}." },
      { id: "lizard", t: "It is small and green. It sits in the sun. — Who is it? {{*lizard|elephant|whale}}." }
    ] },
  { type: "order", title: "Собери предложение", short: "Фразы", instr: "Нажимай на слова по порядку, чтобы получилось предложение.",
    items: [
      { id: "giraffe", img: "giraffe", q: "Посмотри на жирафа!", s: "Look at the giraffe!" },
      { id: "monkey", img: "monkey", q: "Я вижу обезьяну.", s: "I see a monkey." },
      { id: "elephant", img: "elephant", q: "Слон большой.", s: "The elephant is big." },
      { id: "dolphin", img: "dolphin", q: "Мне нравятся дельфины.", s: "I like dolphins." },
      { id: "seal", img: "seal", q: "Тюлени умеют хлопать.", s: "Seals can clap." },
      { id: "kangaroo", img: "kangaroo", q: "Кенгуру умеет прыгать.", s: "A kangaroo can jump." }
    ] },
  { type: "write", title: "Напиши по-английски", short: "Пишем", instr: "Посмотри на картинку и напиши слово. Забыл — вернись к карточкам." }
];
