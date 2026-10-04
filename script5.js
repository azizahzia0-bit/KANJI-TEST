/* =========================================
   KANJI TEST
   PERTEMUAN 5
========================================= */


/* =========================================
   SOUND
========================================= */

const correctSound =
    new Audio("assets/sounds/correct.mp3");

const wrongSound =
    new Audio("assets/sounds/wrong.mp3");

const resultSound =
    new Audio("assets/sounds/result.mp3");


function playSound(sound) {

    sound.currentTime = 0;

    sound.play().catch(() => {});

}


/* =========================================
   DATABASE PERTEMUAN 5
========================================= */

const kanjiData = [

    {
        kanji: "暦",
        kun: ["こよみ"],
        on: ["レキ"],
        bushu: "日",
        bushuName: "にち",
        strokes: 14,
        jukugo: [
            {
                word: "暦学",
                reading: "れきがく",
                meaning: "Studi kalender"
            },
            {
                word: "暦日",
                reading: "れきじつ",
                meaning: "Hari / tanggal dalam kalender"
            }
        ]
    },

    {
        kanji: "陰",
        kun: ["かげ", "かげる"],
        on: ["イン"],
        bushu: "阝",
        bushuName: "こざとへん",
        strokes: 11,
        jukugo: [
            {
                word: "陰口",
                reading: "かげぐち",
                meaning: "Membicarakan keburukan seseorang di belakang"
            },
            {
                word: "陰気",
                reading: "いんき",
                meaning: "Suram"
            }
        ]
    },

    {
        kanji: "補",
        kun: ["おぎなう"],
        on: ["ホ"],
        bushu: "衤",
        bushuName: "ころもへん",
        strokes: 12,
        jukugo: [
            {
                word: "補助",
                reading: "ほじょ",
                meaning: "Bantuan"
            },
            {
                word: "補修",
                reading: "ほしゅう",
                meaning: "Perbaikan"
            }
        ]
    },

    {
        kanji: "旧",
        kun: [],
        on: ["キュウ"],
        bushu: "日",
        bushuName: "にち",
        strokes: 5,
        jukugo: [
            {
                word: "旧例",
                reading: "きゅうれい",
                meaning: "Kebiasaan lama"
            },
            {
                word: "旧館",
                reading: "きゅうかん",
                meaning: "Gedung lama"
            }
        ]
    },

    {
        kanji: "睦",
        kun: ["むつむ", "むつぶ", "むつまじい"],
        on: ["ボク", "モク"],
        bushu: "目",
        bushuName: "めへん",
        strokes: 13,
        jukugo: [
            {
                word: "睦言",
                reading: "むつごと",
                meaning: "Percakapan mesra"
            },
            {
                word: "親睦",
                reading: "しんぼく",
                meaning: "Keakraban"
            }
        ]
    },

    {
        kanji: "如",
        kun: ["ごとし"],
        on: ["ジョ", "ニョ"],
        bushu: "女",
        bushuName: "おんなへん",
        strokes: 6,
        jukugo: [
            {
                word: "如上",
                reading: "じょじょう",
                meaning: "Seperti yang disebutkan di atas"
            },
            {
                word: "如意",
                reading: "にょい",
                meaning: "Sesuai keinginan / kehendak"
            }
        ]
    },

    {
        kanji: "弥",
        kun: ["いや", "や", "いよいよ", "あまねし"],
        on: ["ミ", "ビ"],
        bushu: "弓",
        bushuName: "ゆみへん",
        strokes: 8,
        jukugo: [
            {
                word: "弥生",
                reading: "やよい",
                meaning: "Bulan ketiga (Maret)"
            },
            {
                word: "弥生時代",
                reading: "やよいじだい",
                meaning: "Zaman Yayoi"
            }
        ]
    },

    {
        kanji: "旬",
        kun: [],
        on: ["シュン", "ジュン"],
        bushu: "日",
        bushuName: "にち",
        strokes: 6,
        jukugo: [
            {
                word: "旬報",
                reading: "じゅんぽう",
                meaning: "Laporan 10 harian"
            },
            {
                word: "旬日",
                reading: "じゅんじつ",
                meaning: "10 hari"
            }
        ]
    },

    {
        kanji: "諸",
        kun: ["もろ"],
        on: ["ショ"],
        bushu: "言",
        bushuName: "ごんべん",
        strokes: 15,
        jukugo: [
            {
                word: "諸国",
                reading: "しょこく",
                meaning: "Berbagai negara"
            },
            {
                word: "諸事",
                reading: "しょじ",
                meaning: "Berbagai hal"
            }
        ]
    },

    {
        kanji: "閏",
        kun: ["うるう"],
        on: ["ジュン"],
        bushu: "門",
        bushuName: "もんがまえ",
        strokes: 12,
        jukugo: [
            {
                word: "閏年",
                reading: "うるうどし",
                meaning: "Tahun kabisat"
            },
            {
                word: "閏月",
                reading: "うるうづき",
                meaning: "Bulan kabisat"
            }
        ]
    },

    {
        kanji: "唐",
        kun: ["から"],
        on: ["トウ"],
        bushu: "口",
        bushuName: "くち",
        strokes: 10,
        jukugo: [
            {
                word: "唐揚げ",
                reading: "からあげ",
                meaning: "Ayam goreng"
            },
            {
                word: "唐辛子",
                reading: "とうがらし",
                meaning: "Cabai"
            }
        ]
    },

    {
        kanji: "施",
        kun: ["ほどこす"],
        on: ["シ", "セ"],
        bushu: "方",
        bushuName: "かたへん",
        strokes: 9,
        jukugo: [
            {
                word: "施設",
                reading: "しせつ",
                meaning: "Fasilitas"
            },
            {
                word: "実施",
                reading: "じっし",
                meaning: "Pelaksanaan"
            }
        ]
    },

    {
        kanji: "惑",
        kun: ["まどう"],
        on: ["ワク"],
        bushu: "心",
        bushuName: "こころ",
        strokes: 12,
        jukugo: [
            {
                word: "思惑",
                reading: "おもわく",
                meaning: "Harapan / niat / ekspektasi"
            },
            {
                word: "迷惑",
                reading: "めいわく",
                meaning: "Mengganggu"
            }
        ]
    },

    {
        kanji: "慮",
        kun: [],
        on: ["リョ"],
        bushu: "心",
        bushuName: "こころ",
        strokes: 15,
        jukugo: [
            {
                word: "遠慮",
                reading: "えんりょ",
                meaning: "Sungkan"
            },
            {
                word: "配慮",
                reading: "はいりょ",
                meaning: "Pertimbangan / perhatian"
            }
        ]
    },

    {
        kanji: "幼",
        kun: ["おさない"],
        on: ["ヨウ"],
        bushu: "幺",
        bushuName: "いとがしら",
        strokes: 5,
        jukugo: [
            {
                word: "幼稚",
                reading: "ようち",
                meaning: "Kekanak-kanakan"
            },
            {
                word: "幼児",
                reading: "ようじ",
                meaning: "Anak kecil"
            }
        ]
    },

    {
        kanji: "稚",
        kun: ["いとけない", "わかい"],
        on: ["チ"],
        bushu: "禾",
        bushuName: "のぎへん",
        strokes: 13,
        jukugo: [
            {
                word: "稚魚",
                reading: "ちぎょ",
                meaning: "Anak ikan"
            },
            {
                word: "稚拙",
                reading: "ちせつ",
                meaning: "Tidak terampil"
            }
        ]
    },

    {
        kanji: "混",
        kun: ["こむ", "まざる", "まじる", "まぜる"],
        on: ["コン"],
        bushu: "氵",
        bushuName: "さんずい",
        strokes: 11,
        jukugo: [
            {
                word: "混雑",
                reading: "こんざつ",
                meaning: "Padat / ramai"
            },
            {
                word: "混声",
                reading: "こんせい",
                meaning: "Campuran suara"
            }
        ]
    },

    {
        kanji: "冒",
        kun: ["おかす"],
        on: ["ボウ"],
        bushu: "曰",
        bushuName: "ひらび",
        strokes: 9,
        jukugo: [
            {
                word: "冒涜",
                reading: "ぼうとく",
                meaning: "Penistaan"
            },
            {
                word: "冒険",
                reading: "ぼうけん",
                meaning: "Petualangan"
            }
        ]
    },

    {
        kanji: "改",
        kun: ["あらたまる", "あらためる"],
        on: ["カイ"],
        bushu: "攵",
        bushuName: "ぼくづくり",
        strokes: 9,
        jukugo: [
            {
                word: "改正",
                reading: "かいせい",
                meaning: "Amandemen / revisi"
            },
            {
                word: "改宗",
                reading: "かいしゅう",
                meaning: "Pindah agama"
            }
        ]
    },

    {
        kanji: "善",
        kun: ["よい", "いい", "よく"],
        on: ["ゼン"],
        bushu: "口",
        bushuName: "くち",
        strokes: 12,
        jukugo: [
            {
                word: "改善",
                reading: "かいぜん",
                meaning: "Perbaikan"
            },
            {
                word: "善悪",
                reading: "ぜんあく",
                meaning: "Baik dan buruk"
            }
        ]
    },

    {
        kanji: "掘",
        kun: ["ほる"],
        on: ["クツ"],
        bushu: "扌",
        bushuName: "てへん",
        strokes: 11,
        jukugo: [
            {
                word: "発掘",
                reading: "はっくつ",
                meaning: "Penggalian"
            },
            {
                word: "採掘",
                reading: "さいくつ",
                meaning: "Penambangan"
            }
        ]
    },

    {
        kanji: "跡",
        kun: ["あと"],
        on: ["セキ"],
        bushu: "足",
        bushuName: "あしへん",
        strokes: 13,
        jukugo: [
            {
                word: "遺跡",
                reading: "いせき",
                meaning: "Peninggalan / situs bersejarah"
            },
            {
                word: "奇跡",
                reading: "きせき",
                meaning: "Keajaiban"
            }
        ]
    },

    {
        kanji: "墓",
        kun: ["はか"],
        on: ["ボ"],
        bushu: "土",
        bushuName: "つち",
        strokes: 13,
        jukugo: [
            {
                word: "墓地",
                reading: "ぼち",
                meaning: "Pemakaman"
            },
            {
                word: "墓穴",
                reading: "ぼけつ",
                meaning: "Lubang kubur"
            }
        ]
    },

    {
        kanji: "頂",
        kun: ["いただく", "いただき"],
        on: ["チョウ"],
        bushu: "頁",
        bushuName: "おおがい",
        strokes: 11,
        jukugo: [
            {
                word: "頂上",
                reading: "ちょうじょう",
                meaning: "Puncak"
            },
            {
                word: "頂点",
                reading: "ちょうてん",
                meaning: "Titik tertinggi"
            }
        ]
    },

    {
        kanji: "納",
        kun: ["おさまる", "おさめる", "いれる"],
        on: ["ノウ", "トウ", "ナッ", "ナ", "ナン"],
        bushu: "糸",
        bushuName: "いとへん",
        strokes: 10,
        jukugo: [
            {
                word: "納金",
                reading: "のうきん",
                meaning: "Pembayaran / penyetoran uang"
            },
            {
                word: "全納",
                reading: "ぜんのう",
                meaning: "Pembayaran lunas sekaligus"
            }
        ]
    },

    {
        kanji: "就",
        kun: ["つく", "つける", "なす", "なる"],
        on: ["シュウ", "ジュ"],
        bushu: "尢",
        bushuName: "だいのまげあし",
        strokes: 12,
        jukugo: [
            {
                word: "就寝",
                reading: "しゅうしん",
                meaning: "Pergi tidur"
            },
            {
                word: "就学",
                reading: "しゅうがく",
                meaning: "Bersekolah"
            }
        ]
    },

    {
        kanji: "邪",
        kun: ["よこしま"],
        on: ["ジャ", "シャ", "ヤ"],
        bushu: "阝",
        bushuName: "おおざと",
        strokes: 8,
        jukugo: [
            {
                word: "邪魔",
                reading: "じゃま",
                meaning: "Mengganggu"
            },
            {
                word: "邪道",
                reading: "じゃどう",
                meaning: "Cara yang menyimpang"
            }
        ]
    },

    {
        kanji: "魔",
        kun: [],
        on: ["マ", "バ"],
        bushu: "鬼",
        bushuName: "おに",
        strokes: 21,
        jukugo: [
            {
                word: "魔法",
                reading: "まほう",
                meaning: "Sihir"
            },
            {
                word: "魔王",
                reading: "まおう",
                meaning: "Raja iblis"
            }
        ]
    },

    {
        kanji: "測",
        kun: ["はかる"],
        on: ["ソク"],
        bushu: "氵",
        bushuName: "さんずい",
        strokes: 12,
        jukugo: [
            {
                word: "測量",
                reading: "そくりょう",
                meaning: "Mengukur"
            },
            {
                word: "予測",
                reading: "よそく",
                meaning: "Prediksi / prakiraan"
            }
        ]
    },

    {
        kanji: "端",
        kun: [
            "はし",
            "はた",
            "は",
            "ただしい",
            "はした",
            "はじめ",
            "はな"
        ],
        on: ["タン"],
        bushu: "立",
        bushuName: "たつへん",
        strokes: 14,
        jukugo: [
            {
                word: "両端",
                reading: "りょうたん",
                meaning: "Kedua sisi"
            },
            {
                word: "上端",
                reading: "じょうたん",
                meaning: "Ujung / tepi atas"
            }
        ]
    },

    {
        kanji: "竜",
        kun: ["たつ"],
        on: ["リュウ", "リョウ", "リン"],
        bushu: "竜",
        bushuName: "りゅう",
        strokes: 10,
        jukugo: [
            {
                word: "竜巻",
                reading: "たつまき",
                meaning: "Angin puting beliung"
            },
            {
                word: "竜神",
                reading: "りゅうじん",
                meaning: "Dewa naga"
            }
        ]
    },

    {
        kanji: "滝",
        kun: ["たき"],
        on: ["ロウ"],
        bushu: "氵",
        bushuName: "さんずい",
        strokes: 13,
        jukugo: [
            {
                word: "滝口",
                reading: "たきぐち",
                meaning: "Bagian / mulut air terjun"
            },
            {
                word: "白滝",
                reading: "しらたき",
                meaning: "Mie shirataki"
            }
        ]
    },

    {
        kanji: "鯉",
        kun: ["こい"],
        on: ["リ"],
        bushu: "魚",
        bushuName: "うおへん",
        strokes: 18,
        jukugo: [
            {
                word: "真鯉",
                reading: "まごい",
                meaning: "Ikan koi hitam"
            },
            {
                word: "鯉口",
                reading: "こいぐち",
                meaning: "Mulut / bagian masuk sarung pedang"
            }
        ]
    }

];


/* =========================================
   QUIZ STATE
========================================= */

let currentQuiz = 1;
let currentQuestion = 0;

let currentJukugoSession = 1;
let jukugoSessionBank = null;

let questions = [];
let score = 0;
let answered = false;


/* =========================================
   RANDOMIZER
========================================= */

function shuffle(array) {

    return [...array]
        .sort(() => Math.random() - 0.5);

}


/* =========================================
   START QUIZ
========================================= */

function startQuiz(quizNumber) {

    currentQuiz = quizNumber;
    currentQuestion = 0;
    score = 0;
    answered = false;

    if (quizNumber !== 3) {
        currentJukugoSession = 1;
    }


    const quizButtons =
        document.querySelectorAll(
            "main > .quiz-selector:not(#jukugoSessionSelector) .quiz-select"
        );


    quizButtons.forEach((button, index) => {

        button.classList.toggle(
            "active",
            index + 1 === quizNumber
        );

    });


    const sessionSelector =
        document.getElementById(
            "jukugoSessionSelector"
        );


    if (quizNumber === 3) {

        sessionSelector.style.display = "flex";

        updateSessionButtons();

    }
    else {

        sessionSelector.style.display = "none";

    }


    createQuestions();


    document.getElementById(
        "quizArea"
    ).style.display = "block";


    document.getElementById(
        "resultArea"
    ).style.display = "none";


    showQuestion();

}


/* =========================================
   JUKUGO SESSION
========================================= */

function selectJukugoSession(session) {

    currentQuiz = 3;
    currentJukugoSession = session;

    currentQuestion = 0;
    score = 0;
    answered = false;


    const quizButtons =
        document.querySelectorAll(
            "main > .quiz-selector:not(#jukugoSessionSelector) .quiz-select"
        );


    quizButtons.forEach((button, index) => {

        button.classList.toggle(
            "active",
            index + 1 === 3
        );

    });


    updateSessionButtons();

    createQuestions();


    document.getElementById(
        "quizArea"
    ).style.display = "block";


    document.getElementById(
        "resultArea"
    ).style.display = "none";


    showQuestion();

}


function updateSessionButtons() {

    for (let i = 1; i <= 3; i++) {

        const button =
            document.getElementById(
                `sessionButton${i}`
            );

        if (!button) continue;


        button.classList.toggle(
            "active",
            i === currentJukugoSession
        );

    }

}


/* =========================================
   CREATE QUESTIONS
========================================= */

function createQuestions() {

    questions = [];


    if (currentQuiz === 1) {

        createBasicQuestions();

    }
    else if (currentQuiz === 2) {

        createReverseQuestions();

    }
    else if (currentQuiz === 3) {

        createJukugoQuestions();

    }
    else if (currentQuiz === 4) {

        createHOTSQuestions();

    }

}


/* =========================================
   QUIZ 1
   BASIC RECALL
========================================= */

function createBasicQuestions() {

    let bushuQuestions = [];
    let readingQuestions = [];


    kanjiData.forEach(item => {

        if (item.kun.length > 0) {

            readingQuestions.push({

                type: "Kunyomi",

                question:
                    `「${item.kanji}」の訓読みは？`,

                answer:
                    item.kun[0],

                choices:
                    makeChoices(
                        item.kun[0],
                        getAllKun()
                    )

            });

        }


        if (item.on.length > 0) {

            readingQuestions.push({

                type: "Onyomi",

                question:
                    `「${item.kanji}」の音読みは？`,

                answer:
                    item.on[0],

                choices:
                    makeChoices(
                        item.on[0],
                        getAllOn()
                    )

            });

        }


        bushuQuestions.push({

            type: "Bushu",

            question:
                `「${item.kanji}」の部首は？`,

            answer:
                `${item.bushu}（${item.bushuName}）`,

            choices:
                makeBushuChoices(item)

        });

    });


    bushuQuestions =
        shuffle(bushuQuestions)
            .slice(0, 4);


    readingQuestions =
        shuffle(readingQuestions)
            .slice(0, 7);


    questions =
        shuffle([
            ...bushuQuestions,
            ...readingQuestions
        ]);

}


/* =========================================
   QUIZ 2
   REVERSE RECALL
========================================= */

function createReverseQuestions() {

    let bushuQuestions = [];
    let readingQuestions = [];


    kanjiData.forEach(item => {

        if (item.kun.length > 0) {

            readingQuestions.push({

                type: "Kanji Recall",

                question:
                    `「${item.kun[0]}」と読む漢字は？`,

                answer:
                    item.kanji,

                choices:
                    makeChoices(
                        item.kanji,
                        kanjiData.map(
                            x => x.kanji
                        )
                    )

            });

        }


        if (item.on.length > 0) {

            readingQuestions.push({

                type: "Kanji Recall",

                question:
                    `「${item.on[0]}」と読む漢字は？`,

                answer:
                    item.kanji,

                choices:
                    makeChoices(
                        item.kanji,
                        kanjiData.map(
                            x => x.kanji
                        )
                    )

            });

        }


        bushuQuestions.push({

            type: "Bushu Reading",

            question:
                `「${item.bushuName}」の部首はどれ？`,

            answer:
                item.bushu,

            choices:
                makeBushuReadingChoices(item)

        });

    });


    bushuQuestions =
        shuffle(bushuQuestions)
            .slice(0, 4);


    readingQuestions =
        shuffle(readingQuestions)
            .slice(0, 7);


    questions =
        shuffle([
            ...bushuQuestions,
            ...readingQuestions
        ]);

}


/* =========================================
   CREATE JUKUGO SESSION BANK
========================================= */

function createJukugoSessionBank() {

    const allJukugo = [];


    kanjiData.forEach(item => {

        item.jukugo.forEach(juku => {

            allJukugo.push({

                word: juku.word,

                reading: juku.reading,

                meaning: juku.meaning

            });

        });

    });


    const shuffledJukugo =
        shuffle(allJukugo);


    /*
       66 JUKUGO
       22 JUKUGO PER SESSION
    */

    const sessionJukugo = {

        1: shuffledJukugo.slice(0, 22),

        2: shuffledJukugo.slice(22, 44),

        3: shuffledJukugo.slice(44, 66)

    };


    /*
       EACH SESSION:
       7 Reading 1
       7 Reading 2
       8 Meaning
    */

    const sessionTypeCounts = {

        1: {
            reading1: 7,
            reading2: 7,
            meaning: 8
        },

        2: {
            reading1: 7,
            reading2: 7,
            meaning: 8
        },

        3: {
            reading1: 7,
            reading2: 7,
            meaning: 8
        }

    };


    jukugoSessionBank = {};


    [1, 2, 3].forEach(session => {

        const items =
            shuffle(
                sessionJukugo[session]
            );


        const counts =
            sessionTypeCounts[session];


        const reading1 =
            items
                .slice(
                    0,
                    counts.reading1
                )
                .map(juku => ({

                    ...juku,

                    questionType:
                        "reading1"

                }));


        const reading2 =
            items
                .slice(
                    counts.reading1,

                    counts.reading1 +
                    counts.reading2

                )
                .map(juku => ({

                    ...juku,

                    questionType:
                        "reading2"

                }));


        const meaning =
            items
                .slice(
                    counts.reading1 +
                    counts.reading2
                )
                .map(juku => ({

                    ...juku,

                    questionType:
                        "meaning"

                }));


        jukugoSessionBank[session] = [

            ...reading1,

            ...reading2,

            ...meaning

        ];

    });

}


/* =========================================
   QUIZ 3
   JUKUGO EVALUATION
========================================= */

function createJukugoQuestions() {

    if (!jukugoSessionBank) {

        createJukugoSessionBank();

    }


    const sessionJukugo =
        jukugoSessionBank[
            currentJukugoSession
        ];


    const allJukugo =
        Object.values(
            jukugoSessionBank
        ).flat();


    const allReadings =
        allJukugo.map(
            juku => juku.reading
        );


    const allWords =
        allJukugo.map(
            juku => juku.word
        );


    const allMeanings =
        allJukugo.map(
            juku => juku.meaning
        );


    const sessionQuestions =
        sessionJukugo.map(juku => {


            if (
                juku.questionType ===
                "reading1"
            ) {

                return {

                    type:
                        "Jukugo → Reading",

                    question:
                        `「${juku.word}」の読み方は？`,

                    answer:
                        juku.reading,

                    choices:
                        makeChoices(
                            juku.reading,
                            allReadings
                        )

                };

            }


            if (
                juku.questionType ===
                "reading2"
            ) {

                return {

                    type:
                        "Reading → Jukugo",

                    question:
                        `「${juku.reading}」と読む熟語はどれ？`,

                    answer:
                        juku.word,

                    choices:
                        makeChoices(
                            juku.word,
                            allWords
                        )

                };

            }


            return {

                type:
                    "Jukugo → Meaning",

                question:
                    `「${juku.word}」の意味は？`,

                answer:
                    juku.meaning,

                choices:
                    makeChoices(
                        juku.meaning,
                        allMeanings
                    )

            };

        });


    questions =
        shuffle(sessionQuestions);

}


/* =========================================
   QUIZ 4
   HOTS / CONTEXT
========================================= */

function createHOTSQuestions() {

    const hotsQuestions = [

        {
            type: "Context Selection",

            question:
                "古い建物を修理するために、必要な部分を直しました。この作業に最も合う言葉は？",

            answer:
                "補修",

            choices:
                makeChoices(
                    "補修",
                    [
                        "補修",
                        "親睦",
                        "冒険",
                        "測量",
                        "善悪"
                    ]
                )

        },


        {
            type: "Context Selection",

            question:
                "駅にたくさんの人が集まり、自由に歩くことが難しい状態です。この状況に合う言葉は？",

            answer:
                "混雑",

            choices:
                makeChoices(
                    "混雑",
                    [
                        "混雑",
                        "補助",
                        "遠慮",
                        "改正",
                        "就学"
                    ]
                )

        },


        {
            type: "Context Selection",

            question:
                "相手の気持ちを考えて、迷惑にならないように行動しました。この行動に近い言葉は？",

            answer:
                "配慮",

            choices:
                makeChoices(
                    "配慮",
                    [
                        "配慮",
                        "邪道",
                        "魔法",
                        "発掘",
                        "陰気"
                    ]
                )

        },


        {
            type: "Context Selection",

            question:
                "新しい方法を試して、仕事のやり方をもっと良くしました。この行動に最も合う言葉は？",

            answer:
                "改善",

            choices:
                makeChoices(
                    "改善",
                    [
                        "改善",
                        "旧例",
                        "墓地",
                        "竜神",
                        "旬日"
                    ]
                )

        },


        {
            type: "Context Reading",

            question:
                "山の頂上まで登りました。「頂上」の読み方は？",

            answer:
                "ちょうじょう",

            choices:
                makeChoices(
                    "ちょうじょう",
                    [
                        "ちょうじょう",
                        "じょじょう",
                        "きゅうかん",
                        "しんぼく",
                        "そくりょう"
                    ]
                )

        },


        {
            type: "Context Reading",

            question:
                "明日から新しい学校生活が始まります。「就学」の読み方は？",

            answer:
                "しゅうがく",

            choices:
                makeChoices(
                    "しゅうがく",
                    [
                        "しゅうがく",
                        "しゅうしん",
                        "かいぜん",
                        "よそく",
                        "ぼうけん"
                    ]
                )

        },


        {
            type: "Situation / Application",

            question:
                "友達が困っているので、お金や道具などを使って助けることにしました。この行動に最も合う言葉は？",

            answer:
                "補助",

            choices:
                makeChoices(
                    "補助",
                    [
                        "補助",
                        "迷惑",
                        "邪魔",
                        "陰口",
                        "墓穴"
                    ]
                )

        },


        {
            type: "Situation / Application",

            question:
                "旅行で知らない場所へ行き、危険があるかもしれませんが新しい経験をしてみることにしました。この行動に近い言葉は？",

            answer:
                "冒険",

            choices:
                makeChoices(
                    "冒険",
                    [
                        "冒険",
                        "遠慮",
                        "納金",
                        "旧館",
                        "善悪"
                    ]
                )

        }

    ];


    questions =
        shuffle(hotsQuestions);

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    answered = false;


    const question =
        questions[currentQuestion];


    if (currentQuiz === 3) {

        document.getElementById(
            "quizTitle"
        ).textContent =
            `Quiz 3 · Sesi ${currentJukugoSession}`;

    }
    else {

        document.getElementById(
            "quizTitle"
        ).textContent =
            `Quiz ${currentQuiz}`;

    }


    document.getElementById(
        "questionNumber"
    ).textContent =
        `${currentQuestion + 1} / ${questions.length}`;


    document.getElementById(
        "questionType"
    ).textContent =
        question.type;


    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    const progress =
        (currentQuestion /
            questions.length) * 100;


    document.getElementById(
        "progressBar"
    ).style.width =
        `${progress}%`;


    const answerArea =
        document.getElementById(
            "answerArea"
        );


    answerArea.innerHTML = "";


    question.choices.forEach(choice => {

        const button =
            document.createElement(
                "button"
            );


        button.className =
            "answer-choice";


        button.textContent =
            choice;


        button.onclick = () =>
            checkAnswer(
                button,
                choice,
                question.answer
            );


        answerArea.appendChild(
            button
        );

    });


    document.getElementById(
        "nextButton"
    ).disabled = true;

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(
    button,
    selected,
    correct
) {

    if (answered) return;


    answered = true;


    const buttons =
        document.querySelectorAll(
            ".answer-choice"
        );


    buttons.forEach(btn => {

        btn.disabled = true;


        if (
            btn.textContent ===
            correct
        ) {

            btn.classList.add(
                "correct"
            );

        }

    });


    if (selected === correct) {

        button.classList.add(
            "correct"
        );

        score++;

        playSound(
            correctSound
        );

    }
    else {

        button.classList.add(
            "wrong"
        );

        playSound(
            wrongSound
        );

    }


    document.getElementById(
        "nextButton"
    ).disabled = false;

}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    if (!answered) return;


    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {

        showResult();

    }
    else {

        showQuestion();

    }

}


/* =========================================
   RESULT
========================================= */

function showResult() {

    document.getElementById(
        "quizArea"
    ).style.display =
        "none";


    document.getElementById(
        "resultArea"
    ).style.display =
        "block";


    const percentage =
        Math.round(
            (score /
                questions.length) *
            100
        );


    document.getElementById(
        "scoreText"
    ).textContent =
        `${percentage}%`;


    document.getElementById(
        "correctText"
    ).textContent =
        `${score} benar`;


    document.getElementById(
        "wrongText"
    ).textContent =
        `${questions.length - score} salah`;


    let title;
    let message;


    if (percentage >= 80) {

        title = "すごい！";
        message = "よくできました！";

    }
    else if (percentage >= 50) {

        title = "いい感じ！";
        message = "もう少し頑張ろう！";

    }
    else {

        title = "大丈夫！";
        message = "もう一度練習してみよう！";

    }


    document.getElementById(
        "resultTitle"
    ).textContent =
        title;


    document.getElementById(
        "resultMessage"
    ).textContent =
        message;


    const nextSessionButton =
        document.getElementById(
            "nextSessionButton"
        );


    if (
        currentQuiz === 3 &&
        currentJukugoSession < 3
    ) {

        nextSessionButton.style.display =
            "inline-block";


        nextSessionButton.textContent =
            `Sesi ${currentJukugoSession + 1} →`;

    }
    else {

        nextSessionButton.style.display =
            "none";

    }


    playSound(
        resultSound
    );

}


/* =========================================
   NEXT SESSION
========================================= */

function goToNextSession() {

    if (currentQuiz !== 3) return;


    if (currentJukugoSession >= 3) return;


    currentJukugoSession++;


    currentQuestion = 0;
    score = 0;
    answered = false;


    updateSessionButtons();


    createQuestions();


    document.getElementById(
        "quizArea"
    ).style.display =
        "block";


    document.getElementById(
        "resultArea"
    ).style.display =
        "none";


    showQuestion();

}


/* =========================================
   RETRY
========================================= */

function retryQuiz() {

    if (currentQuiz === 3) {

        selectJukugoSession(
            currentJukugoSession
        );

    }
    else {

        startQuiz(
            currentQuiz
        );

    }

}


/* =========================================
   CHOICE HELPERS
========================================= */

function makeChoices(
    correct,
    pool
) {

    const uniquePool =
        [...new Set(pool)]
            .filter(
                x => x !== correct
            );


    const wrongChoices =
        shuffle(
            uniquePool
        ).slice(0, 3);


    return shuffle([

        correct,

        ...wrongChoices

    ]);

}


function makeBushuChoices(
    correctItem
) {

    const correct =
        `${correctItem.bushu}（${correctItem.bushuName}）`;


    const pool =
        kanjiData
            .filter(
                x =>
                    x.kanji !==
                    correctItem.kanji
            )
            .map(
                x =>
                    `${x.bushu}（${x.bushuName}）`
            );


    return makeChoices(
        correct,
        pool
    );

}


function makeBushuReadingChoices(
    correctItem
) {

    const correct =
        correctItem.bushu;


    const pool =
        kanjiData
            .filter(
                x =>
                    x.kanji !==
                    correctItem.kanji
            )
            .map(
                x =>
                    x.bushu
            );


    return makeChoices(
        correct,
        pool
    );

}


function getAllKun() {

    return kanjiData.flatMap(
        item => item.kun
    );

}


function getAllOn() {

    return kanjiData.flatMap(
        item => item.on
    );

}


/* =========================================
   DEFAULT
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        startQuiz(1);

    }
);