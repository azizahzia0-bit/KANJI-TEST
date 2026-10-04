/* =========================================
   KANJI TEST
   PERTEMUAN 2
========================================= */


/* =========================================
   SOUND
========================================= */

const correctSound = new Audio("assets/sounds/correct.mp3");
const wrongSound = new Audio("assets/sounds/wrong.mp3");
const resultSound = new Audio("assets/sounds/result.mp3");


function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(() => { });
}


/* =========================================
   DATABASE PERTEMUAN 2
========================================= */

const kanjiData = [

    {
        kanji: "促",
        kun: ["うながす"],
        on: ["ソク"],
        bushu: "亻",
        bushuName: "にんべん",
        strokes: 9,
        jukugo: [
            {
                word: "促進",
                reading: "そくしん",
                meaning: "Promosi / pendorong"
            },
            {
                word: "催促",
                reading: "さいそく",
                meaning: "Desakan / penagihan"
            }
        ]
    },

    {
        kanji: "編",
        kun: ["あむ"],
        on: ["ヘン"],
        bushu: "糸",
        bushuName: "いとへん",
        strokes: 15,
        jukugo: [
            {
                word: "編集",
                reading: "へんしゅう",
                meaning: "Penyuntingan / edit"
            },
            {
                word: "短編",
                reading: "たんぺん",
                meaning: "Cerita pendek"
            }
        ]
    },

    {
        kanji: "娯",
        kun: [],
        on: ["ゴ"],
        bushu: "女",
        bushuName: "おんなへん",
        strokes: 10,
        jukugo: [
            {
                word: "娯楽",
                reading: "ごらく",
                meaning: "Hiburan / rekreasi"
            }
        ]
    },

    {
        kanji: "魅",
        kun: [],
        on: ["ミ"],
        bushu: "鬼",
        bushuName: "きにょう",
        strokes: 15,
        jukugo: [
            {
                word: "魅力",
                reading: "みりょく",
                meaning: "Daya tarik / pesona"
            },
            {
                word: "魅了",
                reading: "みりょう",
                meaning: "Memikat / mempesona"
            }
        ]
    },

    {
        kanji: "視",
        kun: ["みる"],
        on: ["シ"],
        bushu: "見",
        bushuName: "みる",
        strokes: 11,
        jukugo: [
            {
                word: "視力",
                reading: "しりょく",
                meaning: "Penglihatan"
            },
            {
                word: "無視",
                reading: "むし",
                meaning: "Mengabaikan"
            }
        ]
    },

    {
        kanji: "争",
        kun: ["あらそう"],
        on: ["ソウ"],
        bushu: "亅",
        bushuName: "はねぼう",
        strokes: 6,
        jukugo: [
            {
                word: "戦争",
                reading: "せんそう",
                meaning: "Perang"
            },
            {
                word: "競争",
                reading: "きょうそう",
                meaning: "Kompetisi / persaingan"
            }
        ]
    },

    {
        kanji: "層",
        kun: [],
        on: ["ソウ"],
        bushu: "尸",
        bushuName: "しかばね",
        strokes: 14,
        jukugo: [
            {
                word: "階層",
                reading: "かいそう",
                meaning: "Kelas / strata"
            },
            {
                word: "層",
                reading: "そう",
                meaning: "Lapisan"
            }
        ]
    },

    {
        kanji: "刊",
        kun: [],
        on: ["カン"],
        bushu: "刂",
        bushuName: "りっとう",
        strokes: 5,
        jukugo: [
            {
                word: "朝刊",
                reading: "ちょうかん",
                meaning: "Koran pagi"
            },
            {
                word: "新刊",
                reading: "しんかん",
                meaning: "Terbitan baru"
            }
        ]
    },

    {
        kanji: "巨",
        kun: [],
        on: ["キョ"],
        bushu: "工",
        bushuName: "たくみ",
        strokes: 4,
        jukugo: [
            {
                word: "巨大",
                reading: "きょだい",
                meaning: "Raksasa / sangat besar"
            },
            {
                word: "巨額",
                reading: "きょがく",
                meaning: "Jumlah uang yang sangat besar"
            }
        ]
    },

    {
        kanji: "競",
        kun: ["きそう", "せる"],
        on: ["キョウ", "ケイ"],
        bushu: "立",
        bushuName: "たつ",
        strokes: 20,
        jukugo: [
            {
                word: "競争",
                reading: "きょうそう",
                meaning: "Kompetisi / persaingan"
            },
            {
                word: "競馬",
                reading: "けいば",
                meaning: "Balapan kuda"
            }
        ]
    },

    {
        kanji: "浮",
        kun: ["うく", "うかれる", "うかぶ", "うかべる"],
        on: ["フ"],
        bushu: "氵",
        bushuName: "さんずい",
        strokes: 10,
        jukugo: [
            {
                word: "浮力",
                reading: "ふりょく",
                meaning: "Daya apung"
            },
            {
                word: "浮上",
                reading: "ふじょう",
                meaning: "Mengapung / muncul ke permukaan"
            }
        ]
    },

    {
        kanji: "蓄",
        kun: ["たくわえる"],
        on: ["チク"],
        bushu: "艹",
        bushuName: "くさかんむり",
        strokes: 13,
        jukugo: [
            {
                word: "貯蓄",
                reading: "ちょちく",
                meaning: "Tabungan / simpanan"
            },
            {
                word: "蓄積",
                reading: "ちくせき",
                meaning: "Akumulasi / penumpukan"
            }
        ]
    },

    {
        kanji: "河",
        kun: ["かわ"],
        on: ["カ"],
        bushu: "氵",
        bushuName: "さんずい",
        strokes: 8,
        jukugo: [
            {
                word: "河川",
                reading: "かせん",
                meaning: "Sungai-sungai"
            },
            {
                word: "運河",
                reading: "うんが",
                meaning: "Kanal / terusan"
            }
        ]
    },

    {
        kanji: "秘",
        kun: ["ひめる"],
        on: ["ヒ"],
        bushu: "禾",
        bushuName: "のぎへん",
        strokes: 10,
        jukugo: [
            {
                word: "秘密",
                reading: "ひみつ",
                meaning: "Rahasia"
            },
            {
                word: "神秘",
                reading: "しんぴ",
                meaning: "Misteri / gaib"
            }
        ]
    },

    {
        kanji: "歴",
        kun: [],
        on: ["レキ"],
        bushu: "止",
        bushuName: "とめる",
        strokes: 14,
        jukugo: [
            {
                word: "歴史",
                reading: "れきし",
                meaning: "Sejarah"
            },
            {
                word: "学歴",
                reading: "がくれき",
                meaning: "Riwayat pendidikan"
            }
        ]
    },

    {
        kanji: "遭",
        kun: ["あう"],
        on: ["ソウ"],
        bushu: "辶",
        bushuName: "しんにょう",
        strokes: 14,
        jukugo: [
            {
                word: "遭遇",
                reading: "そうぐう",
                meaning: "Pertemuan tak terduga"
            },
            {
                word: "遭難",
                reading: "そうなん",
                meaning: "Kecelakaan / musibah"
            }
        ]
    },

    {
        kanji: "幻",
        kun: ["まぼろし"],
        on: ["ゲン"],
        bushu: "幺",
        bushuName: "いとがしら",
        strokes: 4,
        jukugo: [
            {
                word: "幻覚",
                reading: "げんかく",
                meaning: "Halusinasi"
            },
            {
                word: "幻想",
                reading: "げんそう",
                meaning: "Fantasi / ilusi"
            }
        ]
    },

    {
        kanji: "襲",
        kun: ["おそう"],
        on: ["シュウ"],
        bushu: "衣",
        bushuName: "ころも",
        strokes: 22,
        jukugo: [
            {
                word: "襲撃",
                reading: "しゅうげき",
                meaning: "Serangan"
            },
            {
                word: "世襲",
                reading: "せしゅう",
                meaning: "Pewarisan / turun-temurun"
            }
        ]
    },

    {
        kanji: "粉",
        kun: ["こ", "こな"],
        on: ["フン"],
        bushu: "米",
        bushuName: "こめへん",
        strokes: 10,
        jukugo: [
            {
                word: "花粉",
                reading: "かふん",
                meaning: "Serbuk sari"
            },
            {
                word: "粉末",
                reading: "ふんまつ",
                meaning: "Bubuk / serbuk"
            }
        ]
    },

    {
        kanji: "源",
        kun: ["みなもと"],
        on: ["ゲン"],
        bushu: "氵",
        bushuName: "さんずい",
        strokes: 13,
        jukugo: [
            {
                word: "資源",
                reading: "しげん",
                meaning: "Sumber daya"
            },
            {
                word: "起源",
                reading: "きげん",
                meaning: "Asal usul"
            }
        ]
    },

    {
        kanji: "鉱",
        kun: [],
        on: ["コウ"],
        bushu: "金",
        bushuName: "かねへん",
        strokes: 13,
        jukugo: [
            {
                word: "鉱物",
                reading: "こうぶつ",
                meaning: "Mineral / bahan tambang"
            },
            {
                word: "炭鉱",
                reading: "たんこう",
                meaning: "Tambang batu bara"
            }
        ]
    },

    {
        kanji: "漠",
        kun: [],
        on: ["バク"],
        bushu: "氵",
        bushuName: "さんずい",
        strokes: 14,
        jukugo: [
            {
                word: "砂漠",
                reading: "さばく",
                meaning: "Gurun pasir"
            },
            {
                word: "漠然",
                reading: "ばくぜん",
                meaning: "Kabur / samar-samar"
            }
        ]
    },

    {
        kanji: "徴",
        kun: ["しるし"],
        on: ["チョウ"],
        bushu: "彳",
        bushuName: "ぎょうにんべん",
        strokes: 14,
        jukugo: [
            {
                word: "特徴",
                reading: "とくちょう",
                meaning: "Ciri khas / karakteristik"
            },
            {
                word: "象徴",
                reading: "しょうちょう",
                meaning: "Simbol / lambang"
            }
        ]
    },

    {
        kanji: "睡",
        kun: [],
        on: ["スイ"],
        bushu: "目",
        bushuName: "めへん",
        strokes: 13,
        jukugo: [
            {
                word: "睡眠",
                reading: "すいみん",
                meaning: "Tidur"
            },
            {
                word: "睡魔",
                reading: "すいま",
                meaning: "Rasa kantuk"
            }
        ]
    },

    {
        kanji: "嫌",
        kun: ["きらう", "いや"],
        on: ["ケン", "ゲン"],
        bushu: "女",
        bushuName: "おんなへん",
        strokes: 13,
        jukugo: [
            {
                word: "嫌悪",
                reading: "けんお",
                meaning: "Kebencian / rasa jijik"
            },
            {
                word: "機嫌",
                reading: "きげん",
                meaning: "Suasana hati / mood"
            }
        ]
    },

    {
        kanji: "署",
        kun: [],
        on: ["ショ"],
        bushu: "罒",
        bushuName: "あみがしら",
        strokes: 13,
        jukugo: [
            {
                word: "警察署",
                reading: "けいさつしょ",
                meaning: "Kantor polisi"
            },
            {
                word: "署名",
                reading: "しょめい",
                meaning: "Tanda tangan / bubuhan nama"
            }
        ]
    },

    {
        kanji: "悔",
        kun: ["くやむ", "くやしい"],
        on: ["カイ"],
        bushu: "忄",
        bushuName: "りっしんべん",
        strokes: 10,
        jukugo: [
            {
                word: "後悔",
                reading: "こうかい",
                meaning: "Penyesalan"
            },
            {
                word: "悔悟",
                reading: "かいご",
                meaning: "Pertobatan / penyesalan mendalam"
            }
        ]
    },

    {
        kanji: "隠",
        kun: ["かくす", "かくれる"],
        on: ["イン", "オン"],
        bushu: "阝",
        bushuName: "こざとへん",
        strokes: 14,
        jukugo: [
            {
                word: "隠居",
                reading: "いんきょ",
                meaning: "Pensiun / mengasingkan diri"
            },
            {
                word: "隠蔽",
                reading: "いんぺい",
                meaning: "Penyembunyian / menutupi"
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

/* Bank Quiz 3 dibuat SATU KALI */
let jukugoSessionBank = null;

let questions = [];
let score = 0;
let answered = false;


/* =========================================
   RANDOMIZER
========================================= */

function shuffle(array) {

    return [...array].sort(
        () => Math.random() - 0.5
    );

}


/* =========================================
   START QUIZ
========================================= */

function startQuiz(quizNumber) {

    currentQuiz = quizNumber;
    currentQuestion = 0;
    score = 0;
    answered = false;


    if (quizNumber === 3) {

        currentJukugoSession = 1;

        showJukugoSessionSelector();

    }

    else {

        hideJukugoSessionSelector();

    }


    /* Aktifkan tombol Quiz 1 / 2 / 3 / 4 */

    document
        .querySelectorAll(
            "#mainQuizSelector .quiz-select"
        )
        .forEach((button, index) => {

            button.classList.toggle(
                "active",
                index + 1 === quizNumber
            );

        });


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
   JUKUGO SESSION SELECTOR
========================================= */

function showJukugoSessionSelector() {

    document.getElementById(
        "jukugoSessionSelector"
    ).style.display = "flex";

    updateSessionButtons();

}


function hideJukugoSessionSelector() {

    document.getElementById(
        "jukugoSessionSelector"
    ).style.display = "none";

}


function updateSessionButtons() {

    document
        .querySelectorAll(
            "#jukugoSessionSelector .quiz-select"
        )
        .forEach((button, index) => {

            button.classList.toggle(
                "active",
                index + 1 === currentJukugoSession
            );

        });

}


function selectJukugoSession(sessionNumber) {

    currentJukugoSession = sessionNumber;

    currentQuestion = 0;
    score = 0;
    answered = false;

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


/* =========================================
   CREATE QUESTIONS
========================================= */

function createQuestions() {

    questions = [];


    if (currentQuiz === 1) {

        createBasicQuestions();

        questions =
            shuffle(questions).slice(0, 11);

    }


    else if (currentQuiz === 2) {

        createReverseQuestions();

        questions =
            shuffle(questions).slice(0, 11);

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
        shuffle(bushuQuestions).slice(0, 4);


    readingQuestions =
        shuffle(readingQuestions).slice(0, 7);


    questions = shuffle([

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
        shuffle(bushuQuestions).slice(0, 4);


    readingQuestions =
        shuffle(readingQuestions).slice(0, 7);


    questions = shuffle([

        ...bushuQuestions,
        ...readingQuestions

    ]);

}


/* =========================================
   QUIZ 3
   JUKUGO SESSION BANK
========================================= */

/*
   P2 total:
   56 Jukugo

   Sesi 1 = 19
   Sesi 2 = 19
   Sesi 3 = 18

   Komposisi:

   Sesi 1
   Reading 1 = 6
   Reading 2 = 6
   Meaning   = 7

   Sesi 2
   Reading 1 = 6
   Reading 2 = 6
   Meaning   = 7

   Sesi 3
   Reading 1 = 5
   Reading 2 = 5
   Meaning   = 8

   TOTAL:

   Reading 1 = 17
   Reading 2 = 17
   Meaning   = 22

   = 56 Jukugo
*/

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


    /*
       Acak semua Jukugo SATU KALI
    */

    const shuffledJukugo =
        shuffle(allJukugo);


    /*
       Bagi menjadi 3 sesi
    */

    const sessionJukugo = {

        1:
            shuffledJukugo.slice(
                0,
                19
            ),

        2:
            shuffledJukugo.slice(
                19,
                38
            ),

        3:
            shuffledJukugo.slice(
                38,
                56
            )

    };


    /*
       Komposisi tipe soal
    */

    const sessionTypeCounts = {

        1: {
            reading1: 6,
            reading2: 6,
            meaning: 7
        },

        2: {
            reading1: 6,
            reading2: 6,
            meaning: 7
        },

        3: {
            reading1: 5,
            reading2: 5,
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


        /*
           Reading 1
           Jukugo → Reading
        */

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


        /*
           Reading 2
           Reading → Jukugo
        */

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


        /*
           Meaning
           Jukugo → Meaning
        */

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
        shuffle(
            sessionQuestions
        );

}


/* =========================================
   QUIZ 4
   HOTS / CONTEXT
========================================= */

/*
   P2 = 8 soal

   Context Selection = 3
   Context Reading   = 2
   Situation / Apply = 3

   Semua menggunakan Jukugo
   Pertemuan 2.
*/

function createHOTSQuestions() {

    const hotsQuestions = [];


    /* =====================================
       CONTEXT SELECTION
       3 SOAL
    ===================================== */


    hotsQuestions.push({

        type: "Context Selection",

        question:
            `会社では、新しい製品をもっと多くの人に知ってもらうために、宣伝や活動を＿＿します。`,

        answer:
            "促進",

        choices:
            makeChoices(
                "促進",
                [
                    "促進",
                    "睡眠",
                    "砂漠",
                    "秘密"
                ]
            )

    });


    hotsQuestions.push({

        type: "Context Selection",

        question:
            `この映画はとても＿＿があり、多くの人が見たいと思っています。`,

        answer:
            "魅力",

        choices:
            makeChoices(
                "魅力",
                [
                    "魅力",
                    "学歴",
                    "後悔",
                    "河川"
                ]
            )

    });


    hotsQuestions.push({

        type: "Context Selection",

        question:
            `毎月少しずつお金を＿＿して、将来のために貯めています。`,

        answer:
            "貯蓄",

        choices:
            makeChoices(
                "貯蓄",
                [
                    "貯蓄",
                    "遭難",
                    "競馬",
                    "幻覚"
                ]
            )

    });


    /* =====================================
       CONTEXT READING
       2 SOAL
    ===================================== */


    hotsQuestions.push({

        type: "Context Reading",

        question:
            `毎日よく寝て、十分な「睡眠」をとることは健康に大切です。\n「睡眠」の読み方はどれですか？`,

        answer:
            "すいみん",

        choices:
            makeChoices(
                "すいみん",
                [
                    "すいみん",
                    "すいめん",
                    "すいまん",
                    "すいもん"
                ]
            )

    });


    hotsQuestions.push({

        type: "Context Reading",

        question:
            `この地域には美しい「河川」がたくさんあります。\n「河川」の読み方はどれですか？`,

        answer:
            "かせん",

        choices:
            makeChoices(
                "かせん",
                [
                    "かせん",
                    "かぜん",
                    "がせん",
                    "かぜい"
                ]
            )

    });


    /* =====================================
       SITUATION / APPLICATION
       3 SOAL
    ===================================== */


    hotsQuestions.push({

        type: "Situation / Application",

        question:
            `Aさんは山で道に迷ってしまい、何時間も助けを待ちました。\nこのような状況を何と言いますか。`,

        answer:
            "遭難",

        choices:
            makeChoices(
                "遭難",
                [
                    "遭難",
                    "娯楽",
                    "編集",
                    "署名"
                ]
            )

    });


    hotsQuestions.push({

        type: "Situation / Application",

        question:
            `田中さんは試験の結果を見て、「もっと勉強しておけばよかった」と思いました。\n田中さんはどんな気持ちですか。`,

        answer:
            "後悔",

        choices:
            makeChoices(
                "後悔",
                [
                    "後悔",
                    "競争",
                    "資源",
                    "睡魔"
                ]
            )

    });


    hotsQuestions.push({

        type: "Situation / Application",

        question:
            `友達があなたに秘密の話をしました。\nその話を他の人に言わないでほしいと言われました。\nこの場合、話を＿＿ことが大切です。`,

        answer:
            "秘密",

        choices:
            makeChoices(
                "秘密",
                [
                    "秘密",
                    "編集",
                    "競争",
                    "歴史"
                ]
            )

    });


    /*
       Acak urutan 8 soal
    */

    questions =
        shuffle(
            hotsQuestions
        );

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

    else if (currentQuiz === 4) {

        document.getElementById(
            "quizTitle"
        ).textContent =
            "Quiz 4 · HOTS";

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
        (
            currentQuestion /
            questions.length
        ) * 100;


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
    ).style.display = "none";


    document.getElementById(
        "resultArea"
    ).style.display = "block";


    const percentage =
        Math.round(

            (
                score /
                questions.length
            ) * 100

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
   NEXT JUKUGO SESSION
========================================= */

function goToNextSession() {

    if (
        currentQuiz !== 3 ||
        currentJukugoSession >= 3
    ) {

        return;

    }


    currentJukugoSession++;


    currentQuestion = 0;
    score = 0;
    answered = false;


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


/* =========================================
   RETRY
========================================= */

function retryQuiz() {

    if (currentQuiz === 3) {

        /*
           Bank Quiz 3 tidak dibuat ulang.
        */

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


/* =========================================
   BUSHU CHOICES
========================================= */

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


/* =========================================
   BUSHU READING CHOICES
========================================= */

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


/* =========================================
   READING HELPERS
========================================= */

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