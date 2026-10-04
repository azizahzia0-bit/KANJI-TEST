/* =========================================
   KANJI TEST
   PERTEMUAN 3
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
   DATABASE PERTEMUAN 3
========================================= */

const kanjiData = [

    {
        kanji: "褒",
        kun: ["ほめる"],
        on: ["ホ"],
        bushu: "衣",
        bushuName: "ころも",
        strokes: 15,
        jukugo: [
            {
                word: "褒める",
                reading: "ほめる",
                meaning: "Memuji / menyanjung"
            },
            {
                word: "褒美",
                reading: "ほうび",
                meaning: "Hadiah / penghargaan"
            }
        ]
    },

    {
        kanji: "謙",
        kun: [],
        on: ["ケン"],
        bushu: "言",
        bushuName: "ごんべん",
        strokes: 17,
        jukugo: [
            {
                word: "謙遜",
                reading: "けんそん",
                meaning: "Kerendahan hati / rendah diri"
            },
            {
                word: "謙虚",
                reading: "けんきょ",
                meaning: "Rendah hati / bersahaja"
            }
        ]
    },

    {
        kanji: "遜",
        kun: ["へりくだる"],
        on: ["ソン"],
        bushu: "辶",
        bushuName: "しんにょう",
        strokes: 13,
        jukugo: [
            {
                word: "謙遜",
                reading: "けんそん",
                meaning: "Kerendahan hati / rendah hati"
            }
        ]
    },

    {
        kanji: "担",
        kun: ["かつぐ", "になう"],
        on: ["タン"],
        bushu: "手",
        bushuName: "てへん",
        strokes: 8,
        jukugo: [
            {
                word: "担当",
                reading: "たんとう",
                meaning: "Tanggung jawab / penanggung jawab"
            },
            {
                word: "負担",
                reading: "ふたん",
                meaning: "Beban / tanggungan"
            }
        ]
    },

    {
        kanji: "脇",
        kun: ["わき"],
        on: ["キョウ"],
        bushu: "月",
        bushuName: "にくづき",
        strokes: 10,
        jukugo: [
            {
                word: "脇腹",
                reading: "わきばら",
                meaning: "Lambung / rusuk samping"
            },
            {
                word: "脇道",
                reading: "わきみち",
                meaning: "Jalan samping / jalan pintas"
            }
        ]
    },

    {
        kanji: "脚",
        kun: ["あし"],
        on: ["キャク"],
        bushu: "月",
        bushuName: "にくづき",
        strokes: 11,
        jukugo: [
            {
                word: "失脚",
                reading: "しっきゃく",
                meaning: "Jatuh dari jabatan / lengser"
            },
            {
                word: "脚色",
                reading: "きゃくしょく",
                meaning: "Adaptasi (naskah) / dramatisasi"
            }
        ]
    },

    {
        kanji: "脈",
        kun: [],
        on: ["ミャク"],
        bushu: "月",
        bushuName: "にくづき",
        strokes: 10,
        jukugo: [
            {
                word: "動脈",
                reading: "どうみゃく",
                meaning: "Pembuluh nadi / arteri"
            },
            {
                word: "山脈",
                reading: "さんみゃく",
                meaning: "Pegunungan"
            }
        ]
    },

    {
        kanji: "偉",
        kun: ["えらい"],
        on: ["イ"],
        bushu: "亻",
        bushuName: "にんべん",
        strokes: 12,
        jukugo: [
            {
                word: "偉い",
                reading: "えらい",
                meaning: "Hebat / luar biasa"
            },
            {
                word: "偉人",
                reading: "いじん",
                meaning: "Orang besar / tokoh terkemuka"
            }
        ]
    },

    {
        kanji: "徐",
        kun: ["おもむろに"],
        on: ["ジョ"],
        bushu: "彳",
        bushuName: "ぎょうにんべん",
        strokes: 10,
        jukugo: [
            {
                word: "徐行",
                reading: "じょこう",
                meaning: "Pelan-pelan / berjalan lambat (kendaraan)"
            },
            {
                word: "徐々",
                reading: "じょじょ",
                meaning: "Berangsur-angsur / perlahan"
            }
        ]
    },

    {
        kanji: "弊",
        kun: [],
        on: ["ヘイ"],
        bushu: "廾",
        bushuName: "にじゅうあし",
        strokes: 15,
        jukugo: [
            {
                word: "弊害",
                reading: "へいがい",
                meaning: "Dampak buruk / keburukan"
            },
            {
                word: "弊社",
                reading: "へっしゃ",
                meaning: "Perusahaan kami (sopan)"
            }
        ]
    },

    {
        kanji: "老",
        kun: ["おいる", "ふける"],
        on: ["ロウ"],
        bushu: "老",
        bushuName: "おいかんむり",
        strokes: 6,
        jukugo: [
            {
                word: "老後",
                reading: "ろうご",
                meaning: "Masa tua"
            },
            {
                word: "老人",
                reading: "ろうじん",
                meaning: "Orang lanjut usia / lansia"
            }
        ]
    },

    {
        kanji: "舗",
        kun: [],
        on: ["ホ"],
        bushu: "舌",
        bushuName: "したへん",
        strokes: 15,
        jukugo: [
            {
                word: "店舗",
                reading: "てんぽ",
                meaning: "Toko / kedai"
            },
            {
                word: "老舗",
                reading: "しにせ",
                meaning: "Toko legendaris / bisnis tua"
            }
        ]
    },

    {
        kanji: "絨",
        kun: [],
        on: ["ジュウ"],
        bushu: "糸",
        bushuName: "いとへん",
        strokes: 12,
        jukugo: [
            {
                word: "絨毯",
                reading: "じゅうたん",
                meaning: "Karpet / permadani"
            },
            {
                word: "絨毛",
                reading: "じゅうもう",
                meaning: "Bulu halus / villus"
            }
        ]
    },

    {
        kanji: "毯",
        kun: [],
        on: ["タン"],
        bushu: "毛",
        bushuName: "け",
        strokes: 12,
        jukugo: [
            {
                word: "絨毯",
                reading: "じゅうたん",
                meaning: "Karpet / permadani"
            },
            {
                word: "毛毯",
                reading: "もうたん",
                meaning: "Selimut wol"
            }
        ]
    },

    {
        kanji: "拓",
        kun: ["ひらく"],
        on: ["タク"],
        bushu: "手",
        bushuName: "てへん",
        strokes: 8,
        jukugo: [
            {
                word: "開拓",
                reading: "かいたく",
                meaning: "Pembukaan / perintisan (lahan)"
            },
            {
                word: "拓殖",
                reading: "たくしょく",
                meaning: "Kolonisasi / pembukaan wilayah"
            }
        ]
    },

    {
        kanji: "鼓",
        kun: ["つづみ"],
        on: ["コ"],
        bushu: "鼓",
        bushuName: "つづみ",
        strokes: 13,
        jukugo: [
            {
                word: "鼓動",
                reading: "こどう",
                meaning: "Denyut / detak jantung"
            },
            {
                word: "太鼓",
                reading: "たいこ",
                meaning: "Taiko / gendang Jepang"
            }
        ]
    },

    {
        kanji: "鬼",
        kun: ["おに"],
        on: ["キ"],
        bushu: "鬼",
        bushuName: "おに",
        strokes: 10,
        jukugo: [
            {
                word: "吸血鬼",
                reading: "きゅうけつき",
                meaning: "Vampir"
            },
            {
                word: "鬼ごっこ",
                reading: "おにごっこ",
                meaning: "Permainan petak umpet / kejar-kejaran"
            }
        ]
    },

    {
        kanji: "棋",
        kun: [],
        on: ["キ"],
        bushu: "木",
        bushuName: "きへん",
        strokes: 12,
        jukugo: [
            {
                word: "将棋",
                reading: "しょうぎ",
                meaning: "Shogi (catur Jepang)"
            },
            {
                word: "棋士",
                reading: "きし",
                meaning: "Pemain shogi/go profesional"
            }
        ]
    },

    {
        kanji: "寿",
        kun: ["ことぶき"],
        on: ["ジュ"],
        bushu: "寸",
        bushuName: "スン",
        strokes: 7,
        jukugo: [
            {
                word: "寿命",
                reading: "じゅみょう",
                meaning: "Usia / jangka hayat"
            },
            {
                word: "寿司",
                reading: "すし",
                meaning: "Sushi"
            }
        ]
    },

    {
        kanji: "嬢",
        kun: [],
        on: ["ジョウ"],
        bushu: "女",
        bushuName: "おんなへん",
        strokes: 16,
        jukugo: [
            {
                word: "お嬢さん",
                reading: "おじょうさん",
                meaning: "Nona / putri (seseorang)"
            },
            {
                word: "令嬢",
                reading: "れいじょう",
                meaning: "Putri keluarga terpandang"
            }
        ]
    },

    {
        kanji: "欧",
        kun: [],
        on: ["オウ"],
        bushu: "欠",
        bushuName: "あくび",
        strokes: 8,
        jukugo: [
            {
                word: "欧州",
                reading: "おうしゅう",
                meaning: "Eropa"
            },
            {
                word: "欧米",
                reading: "おうべい",
                meaning: "Eropa dan Amerika / Barat"
            }
        ]
    },

    {
        kanji: "揺",
        kun: ["ゆれる", "ゆる", "ゆす"],
        on: ["ヨウ"],
        bushu: "手",
        bushuName: "てへん",
        strokes: 12,
        jukugo: [
            {
                word: "動揺",
                reading: "どうよう",
                meaning: "Goncangan emosi / kecemasan"
            },
            {
                word: "揺籃",
                reading: "ようらん",
                meaning: "Buaian / tempat tidur bayi"
            }
        ]
    },

    {
        kanji: "環",
        kun: ["わ"],
        on: ["カン"],
        bushu: "王",
        bushuName: "おうへん",
        strokes: 17,
        jukugo: [
            {
                word: "環境",
                reading: "かんきょう",
                meaning: "Lingkungan"
            },
            {
                word: "循環",
                reading: "じゅんかん",
                meaning: "Sirkulasi / perputaran"
            }
        ]
    },

    {
        kanji: "境",
        kun: ["さかい"],
        on: ["キョウ", "ケイ"],
        bushu: "土",
        bushuName: "つちへん",
        strokes: 14,
        jukugo: [
            {
                word: "境界",
                reading: "きょうかい",
                meaning: "Batas / perbatasan"
            },
            {
                word: "国境",
                reading: "こっきょう",
                meaning: "Perbatasan negara"
            }
        ]
    },

    {
        kanji: "誉",
        kun: ["ほまれ"],
        on: ["ヨ"],
        bushu: "言",
        bushuName: "ことば / ゲン",
        strokes: 13,
        jukugo: [
            {
                word: "名誉",
                reading: "めいよ",
                meaning: "Kehormatan / reputasi"
            },
            {
                word: "栄誉",
                reading: "えいよ",
                meaning: "Kemuliaan / kehormatan"
            }
        ]
    },

    {
        kanji: "徳",
        kun: [],
        on: ["トク"],
        bushu: "彳",
        bushuName: "ぎょうにんべん",
        strokes: 14,
        jukugo: [
            {
                word: "道徳",
                reading: "どうとく",
                meaning: "Moral / etika"
            },
            {
                word: "徳",
                reading: "とく",
                meaning: "Budi pekerti / kebajikan"
            }
        ]
    },

    {
        kanji: "怠",
        kun: ["おこたる", "なまける"],
        on: ["タイ"],
        bushu: "心",
        bushuName: "したごころ",
        strokes: 9,
        jukugo: [
            {
                word: "怠ける",
                reading: "なまける",
                meaning: "Malas / melalaikan"
            },
            {
                word: "怠慢",
                reading: "たいまん",
                meaning: "Kelalaian / kemalasan"
            }
        ]
    },

    {
        kanji: "駄",
        kun: [],
        on: ["ダ"],
        bushu: "馬",
        bushuName: "うまへん",
        strokes: 14,
        jukugo: [
            {
                word: "無駄",
                reading: "むだ",
                meaning: "Sia-sia / percuma"
            },
            {
                word: "駄菓子",
                reading: "だがし",
                meaning: "Permen murah / jajanan anak-anak"
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

        if (!jukugoSessionBank) {
            createJukugoSessionBank();
        }

        currentJukugoSession = 1;

        showJukugoSessionSelector();

    } else {

        hideJukugoSessionSelector();

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


    createQuestions();


    document.getElementById("quizArea").style.display =
        "block";

    document.getElementById("resultArea").style.display =
        "none";


    showQuestion();

}


/* =========================================
   JUKUGO SESSION SELECTOR
========================================= */

function showJukugoSessionSelector() {

    document.getElementById(
        "jukugoSessionSelector"
    ).style.display = "grid";

    updateSessionButtons();

}


function hideJukugoSessionSelector() {

    document.getElementById(
        "jukugoSessionSelector"
    ).style.display = "none";

}


function selectJukugoSession(session) {

    currentQuiz = 3;
    currentJukugoSession = session;

    currentQuestion = 0;
    score = 0;
    answered = false;

    updateSessionButtons();

    createJukugoQuestions();

    document.getElementById("quizArea").style.display =
        "block";

    document.getElementById("resultArea").style.display =
        "none";

    showQuestion();

}


function updateSessionButtons() {

    [1, 2, 3].forEach(session => {

        const button =
            document.getElementById(
                `sessionButton${session}`
            );

        if (button) {

            button.classList.toggle(
                "active",
                session === currentJukugoSession
            );

        }

    });

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
        shuffle(bushuQuestions).slice(0, 4);


    readingQuestions =
        shuffle(readingQuestions).slice(0, 7);


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
        shuffle(bushuQuestions).slice(0, 4);


    readingQuestions =
        shuffle(readingQuestions).slice(0, 7);


    questions =
        shuffle([
            ...bushuQuestions,
            ...readingQuestions
        ]);

}


/* =========================================
   QUIZ 3
   JUKUGO EVALUATION
========================================= */


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


    const sessionJukugo = {

        1: shuffledJukugo.slice(0, 19),

        2: shuffledJukugo.slice(19, 38),

        3: shuffledJukugo.slice(38, 56)

    };


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
   CREATE JUKUGO QUESTIONS
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

function createHOTSQuestions() {

    const hotsQuestions = [

        {
            type: "Context Selection",

            question:
                "新聞の記事を読みやすくするために、文章を直しました。この作業は何ですか？",

            answer:
                "編集",

            choices:
                makeChoices(
                    "編集",
                    [
                        "編集",
                        "開拓",
                        "循環",
                        "怠慢",
                        "担当"
                    ]
                )
        },


        {
            type: "Context Selection",

            question:
                "毎月、お金を少しずつ将来のために残しています。この行動に合う言葉は？",

            answer:
                "貯蓄",

            choices:
                makeChoices(
                    "貯蓄",
                    [
                        "貯蓄",
                        "負担",
                        "無駄",
                        "名誉",
                        "寿命"
                    ]
                )
        },


        {
            type: "Context Selection",

            question:
                "山で道に迷い、助けを待つことになりました。この状況に関係する言葉は？",

            answer:
                "遭難",

            choices:
                makeChoices(
                    "遭難",
                    [
                        "遭難",
                        "徐行",
                        "動揺",
                        "老後",
                        "競争"
                    ]
                )
        },


        {
            type: "Context Selection",

            question:
                "父の仕事を息子が受け継ぎ、同じ仕事を続けています。これは何ですか？",

            answer:
                "世襲",

            choices:
                makeChoices(
                    "世襲",
                    [
                        "世襲",
                        "謙遜",
                        "環境",
                        "名誉",
                        "店舗"
                    ]
                )
        },


        {
            type: "Context Reading",

            question:
                "船は運河を通って、別の地域へ向かいました。文中の「運河」の読み方は？",

            answer:
                "うんが",

            choices:
                makeChoices(
                    "うんが",
                    [
                        "うんが",
                        "かんきょう",
                        "どうよう",
                        "きょうかい",
                        "さんみゃく"
                    ]
                )
        },


        {
            type: "Context Reading",

            question:
                "この製品の特徴は、軽くて丈夫なことです。文中の「特徴」の読み方は？",

            answer:
                "とくちょう",

            choices:
                makeChoices(
                    "とくちょう",
                    [
                        "とくちょう",
                        "どうとく",
                        "めいよ",
                        "かいたく",
                        "ろうご"
                    ]
                )
        },


        {
            type: "Situation / Application",

            question:
                "現実にはない理想の世界を頭の中で作り、それを思い描いています。この状態に近い言葉は？",

            answer:
                "幻想",

            choices:
                makeChoices(
                    "幻想",
                    [
                        "幻想",
                        "現実",
                        "負担",
                        "店舗",
                        "老後"
                    ]
                )
        },


        {
            type: "Situation / Application",

            question:
                "何度話しかけても返事をせず、ずっと不機嫌そうです。この人の状態に関係する言葉は？",

            answer:
                "機嫌",

            choices:
                makeChoices(
                    "機嫌",
                    [
                        "機嫌",
                        "魅力",
                        "寿命",
                        "環境",
                        "道徳"
                    ]
                )
        }

    ];


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


    if (!question) {

        console.error(
            "Soal tidak ditemukan:",
            currentQuiz,
            currentQuestion,
            questions
        );

        return;

    }


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
        (currentQuestion / questions.length) * 100;


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


        button.onclick = function () {

            checkAnswer(
                button,
                choice,
                question.answer
            );

        };


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
            (score / questions.length) * 100
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

        message =
            "よくできました！";

    }

    else if (percentage >= 50) {

        title = "いい感じ！";

        message =
            "もう少し頑張ろう！";

    }

    else {

        title = "大丈夫！";

        message =
            "もう一度練習してみよう！";

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


    selectJukugoSession(
        currentJukugoSession + 1
    );

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
   ALL KUNYOMI
========================================= */

function getAllKun() {

    return kanjiData.flatMap(
        item => item.kun
    );

}


/* =========================================
   ALL ONYOMI
========================================= */

function getAllOn() {

    return kanjiData.flatMap(
        item => item.on
    );

}


/* =========================================
   START DEFAULT
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        startQuiz(1);

    }
);