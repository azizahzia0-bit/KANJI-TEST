/* =========================================
   KANJI TEST
   PERTEMUAN 1
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
   DATABASE PERTEMUAN 1
========================================= */

const kanjiData = [

    {
        kanji: "株",
        kun: ["かぶ"],
        on: ["シュ"],
        bushu: "木",
        bushuName: "きへん",
        strokes: 10,
        jukugo: [
            {
                word: "株式",
                reading: "かぶしき",
                meaning: "Saham / perseroan"
            },
            {
                word: "株主",
                reading: "かぶぬし",
                meaning: "Pemegang saham"
            }
        ]
    },

    {
        kanji: "随",
        kun: ["したがう"],
        on: ["ズイ"],
        bushu: "阝",
        bushuName: "こざとへん",
        strokes: 12,
        jukugo: [
            {
                word: "随筆",
                reading: "ずいひつ",
                meaning: "Esai / karangan"
            },
            {
                word: "随時",
                reading: "ずいじ",
                meaning: "Sewaktu-waktu / kapan saja"
            }
        ]
    },

    {
        kanji: "勘",
        kun: [],
        on: ["カン"],
        bushu: "力",
        bushuName: "ちから",
        strokes: 11,
        jukugo: [
            {
                word: "勘定",
                reading: "かんじょう",
                meaning: "Perhitungan / tagihan"
            },
            {
                word: "勘違い",
                reading: "かんちがい",
                meaning: "Kesalahpahaman / salah sangka"
            }
        ]
    },

    {
        kanji: "佃",
        kun: ["つくだ"],
        on: ["テン", "デン"],
        bushu: "亻",
        bushuName: "にんべん",
        strokes: 7,
        jukugo: [
            {
                word: "佃煮",
                reading: "つくだに",
                meaning: "Makanan awetan rebus (Tsukudani)"
            },
            {
                word: "佃農",
                reading: "でんのう",
                meaning: "Petani penggarap"
            }
        ]
    },

    {
        kanji: "熟",
        kun: ["うれる"],
        on: ["ジュク"],
        bushu: "灬",
        bushuName: "れっか / れんが",
        strokes: 15,
        jukugo: [
            {
                word: "熟語",
                reading: "じゅくご",
                meaning: "Kata majemuk / idiom"
            },
            {
                word: "未熟",
                reading: "みじゅく",
                meaning: "Belum matang / kurang pengalaman"
            }
        ]
    },

    {
        kanji: "錯",
        kun: ["まじる"],
        on: ["サク", "シャク"],
        bushu: "金",
        bushuName: "かねへん",
        strokes: 16,
        jukugo: [
            {
                word: "錯覚",
                reading: "さっかく",
                meaning: "Ilusi / halusinasi"
            },
            {
                word: "錯誤",
                reading: "さくご",
                meaning: "Kesalahan / kekeliruan"
            }
        ]
    },

    {
        kanji: "誤",
        kun: ["あやまる"],
        on: ["ゴ"],
        bushu: "言",
        bushuName: "ごんべん",
        strokes: 14,
        jukugo: [
            {
                word: "誤解",
                reading: "ごかい",
                meaning: "Salah paham"
            },
            {
                word: "誤字",
                reading: "ごじ",
                meaning: "Salah huruf / typo"
            }
        ]
    },

    {
        kanji: "極",
        kun: ["きわめる", "きわまる", "きわみ"],
        on: ["キョク", "ゴク"],
        bushu: "木",
        bushuName: "きへん",
        strokes: 12,
        jukugo: [
            {
                word: "極端",
                reading: "きょくたん",
                meaning: "Ekstrem"
            },
            {
                word: "南極",
                reading: "なんきょく",
                meaning: "Kutub Selatan"
            }
        ]
    },

    {
        kanji: "範",
        kun: [],
        on: ["ハン"],
        bushu: "竹",
        bushuName: "たけかんむり",
        strokes: 15,
        jukugo: [
            {
                word: "模範",
                reading: "もはん",
                meaning: "Teladan / contoh"
            },
            {
                word: "範囲",
                reading: "はんい",
                meaning: "Cakupan / jangkauan"
            }
        ]
    },

    {
        kanji: "忍",
        kun: ["しのぶ", "しのばせる"],
        on: ["ニン"],
        bushu: "心",
        bushuName: "したごころ",
        strokes: 7,
        jukugo: [
            {
                word: "忍者",
                reading: "にんじゃ",
                meaning: "Ninja"
            },
            {
                word: "忍耐",
                reading: "にんたい",
                meaning: "Kesabaran / ketabahan"
            }
        ]
    },

    {
        kanji: "看",
        kun: ["みる"],
        on: ["カン"],
        bushu: "目",
        bushuName: "め",
        strokes: 9,
        jukugo: [
            {
                word: "看護",
                reading: "かんご",
                meaning: "Perawatan"
            },
            {
                word: "看板",
                reading: "かんばん",
                meaning: "Papan tanda / reklame"
            }
        ]
    },

    {
        kanji: "蠅",
        kun: ["はえ"],
        on: ["ヨウ"],
        bushu: "虫",
        bushuName: "むしへん",
        strokes: 19,
        jukugo: [
            {
                word: "青蠅",
                reading: "あおばえ",
                meaning: "Lalat hijau"
            },
            {
                word: "蠅帳",
                reading: "はえちょう",
                meaning: "Tudung saji / penutup makanan"
            }
        ]
    },

    {
        kanji: "葵",
        kun: ["あおい"],
        on: ["キ"],
        bushu: "艹",
        bushuName: "くさかんむり",
        strokes: 12,
        jukugo: [
            {
                word: "向日葵",
                reading: "ひまわり",
                meaning: "Bunga matahari"
            },
            {
                word: "葵祭",
                reading: "あおいまつり",
                meaning: "Festival Aoi"
            }
        ]
    },

    {
        kanji: "倫",
        kun: [],
        on: ["リン"],
        bushu: "亻",
        bushuName: "にんべん",
        strokes: 10,
        jukugo: [
            {
                word: "倫理",
                reading: "りんり",
                meaning: "Etika / moral"
            },
            {
                word: "不倫",
                reading: "ふりん",
                meaning: "Perselingkuhan"
            }
        ]
    },

    {
        kanji: "敦",
        kun: ["あつい"],
        on: ["トン"],
        bushu: "攵",
        bushuName: "ぼくづくり",
        strokes: 12,
        jukugo: [
            {
                word: "敦厚",
                reading: "とんこう",
                meaning: "Tulus / baik hati"
            },
            {
                word: "倫敦",
                reading: "ロンドン",
                meaning: "London (Ateji)"
            }
        ]
    },

    {
        kanji: "情",
        kun: ["なさけ"],
        on: ["ジョウ", "セイ"],
        bushu: "忄",
        bushuName: "りっしんべん",
        strokes: 11,
        jukugo: [
            {
                word: "情報",
                reading: "じょうほう",
                meaning: "Informasi"
            },
            {
                word: "感情",
                reading: "かんじょう",
                meaning: "Perasaan / emosi"
            }
        ]
    },

    {
        kanji: "息",
        kun: ["いき"],
        on: ["ソク"],
        bushu: "心",
        bushuName: "したごころ",
        strokes: 10,
        jukugo: [
            {
                word: "息子",
                reading: "むすこ",
                meaning: "Anak laki-laki"
            },
            {
                word: "休息",
                reading: "きゅうそく",
                meaning: "Istirahat"
            }
        ]
    },

    {
        kanji: "影",
        kun: ["かげ"],
        on: ["エイ"],
        bushu: "彡",
        bushuName: "さんづくり",
        strokes: 15,
        jukugo: [
            {
                word: "影響",
                reading: "えいきょう",
                meaning: "Pengaruh / dampak"
            },
            {
                word: "人影",
                reading: "ひとかげ",
                meaning: "Bayangan orang"
            }
        ]
    },

    {
        kanji: "響",
        kun: ["ひびく"],
        on: ["キョウ"],
        bushu: "音",
        bushuName: "おと",
        strokes: 20,
        jukugo: [
            {
                word: "反響",
                reading: "はんきょう",
                meaning: "Gema / tanggapan"
            },
            {
                word: "音響",
                reading: "おんきょう",
                meaning: "Akustik / tata suara"
            }
        ]
    },

    {
        kanji: "愉",
        kun: ["たのしい"],
        on: ["ユ"],
        bushu: "忄",
        bushuName: "りっしんべん",
        strokes: 12,
        jukugo: [
            {
                word: "愉快",
                reading: "ゆかい",
                meaning: "Menyenangkan / gembira"
            },
            {
                word: "愉悦",
                reading: "ゆえつ",
                meaning: "Sukacita"
            }
        ]
    },

    {
        kanji: "快",
        kun: ["こころよい"],
        on: ["カイ"],
        bushu: "忄",
        bushuName: "りっしんべん",
        strokes: 7,
        jukugo: [
            {
                word: "快適",
                reading: "かいてき",
                meaning: "Nyaman"
            },
            {
                word: "快速",
                reading: "かいそく",
                meaning: "Cepat / kecepatan tinggi"
            }
        ]
    },

    {
        kanji: "素",
        kun: ["もと"],
        on: ["ソ", "ス"],
        bushu: "糸",
        bushuName: "いと",
        strokes: 10,
        jukugo: [
            {
                word: "素敵",
                reading: "すてき",
                meaning: "Bagus / menawan"
            },
            {
                word: "素直",
                reading: "すなお",
                meaning: "Patuh / jujur / polos"
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


    /* Aktifkan tombol Quiz 1 / 2 / 3 */

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
   Bank ini hanya dibuat SATU KALI.

   P1 total:
   44 Jukugo

   Sesi 1 = 15
   Sesi 2 = 15
   Sesi 3 = 14

   Komposisi:

   Sesi 1
   Reading 1 = 5
   Reading 2 = 4
   Meaning   = 6

   Sesi 2
   Reading 1 = 4
   Reading 2 = 5
   Meaning   = 6

   Sesi 3
   Reading 1 = 4
   Reading 2 = 4
   Meaning   = 6

   TOTAL:

   Reading 1 = 13
   Reading 2 = 13
   Meaning   = 18

   = 44 Jukugo
*/

/* =========================================
   QUIZ 4
   HOTS / CONTEXT
========================================= */

/*
   Quiz 4 = 8 soal

   Context Selection  = 3
   Context Reading    = 2
   Situation / Apply  = 3

   Semua soal menggunakan
   Jukugo Pertemuan 1.
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
            `会社の＿＿を正しく伝えることが大切です。`,

        answer:
            "情報",

        choices:
            makeChoices(
                "情報",
                [
                    "情報",
                    "快適",
                    "忍耐",
                    "極端"
                ]
            )

    });


    hotsQuestions.push({

        type: "Context Selection",

        question:
            `仕事で間違いをしないためには、＿＿が必要です。`,

        answer:
            "忍耐",

        choices:
            makeChoices(
                "忍耐",
                [
                    "忍耐",
                    "南極",
                    "看板",
                    "素敵"
                ]
            )

    });


    hotsQuestions.push({

        type: "Context Selection",

        question:
            `このホテルの部屋は広くて、とても＿＿です。`,

        answer:
            "快適",

        choices:
            makeChoices(
                "快適",
                [
                    "快適",
                    "錯誤",
                    "随筆",
                    "誤字"
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
            `旅行のあと、ホテルで少し「休息」しました。\n「休息」の読み方はどれですか？`,

        answer:
            "きゅうそく",

        choices:
            makeChoices(
                "きゅうそく",
                [
                    "きゅうそく",
                    "きゅうしょく",
                    "きゅそく",
                    "きゅうぞく"
                ]
            )

    });


    hotsQuestions.push({

        type: "Context Reading",

        question:
            `先生の話を聞いて、新しい「情報」を知りました。\n「情報」の読み方はどれですか？`,

        answer:
            "じょうほう",

        choices:
            makeChoices(
                "じょうほう",
                [
                    "じょうほう",
                    "じょうぼう",
                    "じょほう",
                    "じょうぽう"
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
            `Aさんは、Bさんの話を聞いて「Bさんは来ない」と思いました。\nしかし、本当はBさんは来る予定でした。\nAさんはBさんの話を＿＿していました。`,

        answer:
            "誤解",

        choices:
            makeChoices(
                "誤解",
                [
                    "誤解",
                    "快適",
                    "情報",
                    "忍耐"
                ]
            )

    });


    hotsQuestions.push({

        type: "Situation / Application",

        question:
            `田中さんは仕事で何度も失敗しました。\nそれでも、あきらめずに努力しました。\n田中さんに必要なのは何ですか。`,

        answer:
            "忍耐",

        choices:
            makeChoices(
                "忍耐",
                [
                    "忍耐",
                    "愉快",
                    "素敵",
                    "看板"
                ]
            )

    });


    hotsQuestions.push({

        type: "Situation / Application",

        question:
            `友達が新しい仕事について説明しました。\nあなたはその内容をよく理解していません。\nもう一度確認するとき、必要なのはどれですか。`,

        answer:
            "情報",

        choices:
            makeChoices(
                "情報",
                [
                    "情報",
                    "南極",
                    "未熟",
                    "極端"
                ]
            )

    });


    /*
       =====================================
       ACAK URUTAN
       
       Tetap hanya 8 soal.
       =====================================
    */

    questions =
        shuffle(hotsQuestions);

}

function createJukugoSessionBank() {

    /*
       =====================================
       1. KUMPULKAN SEMUA JUKUGO
       =====================================
    */

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
       =====================================
       2. ACAK SEMUA JUKUGO SEKALI SAJA
       =====================================
    */

    const shuffledJukugo =
        shuffle(allJukugo);


    /*
       =====================================
       3. BAGI MENJADI 3 SESI
       
       Sesi 1 = 15
       Sesi 2 = 15
       Sesi 3 = 14
       =====================================
    */

    const sessionJukugo = {

        1:
            shuffledJukugo.slice(
                0,
                15
            ),

        2:
            shuffledJukugo.slice(
                15,
                30
            ),

        3:
            shuffledJukugo.slice(
                30,
                44
            )

    };


    /*
       =====================================
       4. KOMPOSISI TIPE SOAL
       =====================================
    */

    const sessionTypeCounts = {

        1: {
            reading1: 5,
            reading2: 4,
            meaning: 6
        },

        2: {
            reading1: 4,
            reading2: 5,
            meaning: 6
        },

        3: {
            reading1: 4,
            reading2: 4,
            meaning: 6
        }

    };


    /*
       =====================================
       5. SIMPAN BANK
       
       Setiap Jukugo diberi tipe soal
       dan tipe tersebut TIDAK berubah
       saat retry.
       =====================================
    */

    jukugoSessionBank = {};


    [1, 2, 3].forEach(session => {

        /*
           Acak urutan Jukugo di dalam sesi
           SATU KALI SAJA.
        */

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


        /*
           Simpan hasil akhir.
           
           Mulai dari sini bank TIDAK
           akan dibuat ulang.
        */

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

    /*
       =====================================
       BUAT BANK HANYA JIKA BELUM ADA
       =====================================
       
       Kalau retry:
       bank sudah ada → tidak dibuat ulang.
       
       Kalau pindah sesi:
       bank sudah ada → tidak dibuat ulang.
    */

    if (!jukugoSessionBank) {

        createJukugoSessionBank();

    }


    /*
       =====================================
       AMBIL JUKUGO SESUAI SESI
       =====================================
    */

    const sessionJukugo =
        jukugoSessionBank[
        currentJukugoSession
        ];


    /*
       =====================================
       KUMPULAN DISTRACTOR
       
       Menggunakan semua Jukugo P1
       supaya pilihan jawaban tetap
       beragam.
       =====================================
    */

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


    /*
       =====================================
       BUAT SOAL DARI BANK
       
       Tipe soal mengikuti questionType
       yang sudah ditentukan sebelumnya.
       =====================================
    */

    const sessionQuestions =
        sessionJukugo.map(juku => {


            /*
               READING 1

               Jukugo → Reading

               「株式」の読み方は？
               → かぶしき
            */

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


            /*
               READING 2

               Reading → Jukugo

               「かぶしき」と読む
               熟語はどれ？
               → 株式
            */

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


            /*
               MEANING

               Jukugo → Meaning

               「株式」の意味は？
               → Saham / perseroan
            */

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


    /*
       =====================================
       ACAK URUTAN SOAL
       
       PENTING:
       Yang diacak hanya urutan soal.
       
       Anggota sesi TIDAK berubah.
       Tipe soal TIDAK berubah.
       =====================================
    */

    questions =
        shuffle(
            sessionQuestions
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
           Tidak membuat bank baru.

           selectJukugoSession()
           → createQuestions()
           → createJukugoQuestions()
           → bank lama dipakai.
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