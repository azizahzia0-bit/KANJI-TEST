/* =========================================
   KANJI TEST
   PERTEMUAN 6
========================================= */

/* =========================================
   SOUND
========================================= */

const correctSound = new Audio("assets/sounds/correct.mp3");
const wrongSound = new Audio("assets/sounds/wrong.mp3");
const resultSound = new Audio("assets/sounds/result.mp3");

function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(() => {});
}


/* =========================================
   DATABASE PERTEMUAN 6
========================================= */

const kanjiData = [

    {
        kanji: "鉛",
        kun: ["なまり"],
        on: ["エン"],
        bushu: "釒",
        bushuName: "かねへん",
        strokes: 13,
        jukugo: [
            {
                word: "鉛筆",
                reading: "えんぴつ",
                meaning: "Pensil"
            },
            {
                word: "鉛管",
                reading: "えんかん",
                meaning: "Pipa timah"
            }
        ]
    },

    {
        kanji: "削",
        kun: ["けずる", "はつる", "そぐ"],
        on: ["サク"],
        bushu: "刂",
        bushuName: "りっとう",
        strokes: 9,
        jukugo: [
            {
                word: "削除",
                reading: "さくじょ",
                meaning: "Penghapusan"
            },
            {
                word: "鉛筆削り",
                reading: "えんぴつけずり",
                meaning: "Rautan pensil"
            }
        ]
    },

    {
        kanji: "瓶",
        kun: [],
        on: ["ビン"],
        bushu: "瓦",
        bushuName: "かわら",
        strokes: 11,
        jukugo: [
            {
                word: "花瓶",
                reading: "かびん",
                meaning: "Vas bunga"
            },
            {
                word: "水瓶",
                reading: "みずがめ",
                meaning: "Kendi air"
            }
        ]
    },

    {
        kanji: "排",
        kun: [],
        on: ["ハイ"],
        bushu: "扌",
        bushuName: "てへん",
        strokes: 11,
        jukugo: [
            {
                word: "排除",
                reading: "はいじょ",
                meaning: "Eliminasi, pengecualian"
            },
            {
                word: "排気",
                reading: "はいき",
                meaning: "Gas buang"
            }
        ]
    },

    {
        kanji: "鋭",
        kun: ["するどい"],
        on: ["エイ"],
        bushu: "釒",
        bushuName: "かねへん",
        strokes: 15,
        jukugo: [
            {
                word: "鋭利",
                reading: "えいり",
                meaning: "Tajam"
            },
            {
                word: "鋭角",
                reading: "えいかく",
                meaning: "Sudut lancip"
            }
        ]
    },

    {
        kanji: "属",
        kun: [],
        on: ["ゾク"],
        bushu: "尸",
        bushuName: "しかばね",
        strokes: 12,
        jukugo: [
            {
                word: "金属",
                reading: "きんぞく",
                meaning: "Logam"
            },
            {
                word: "所属",
                reading: "しょぞく",
                meaning: "Afiliasi, keanggotaan"
            }
        ]
    },

    {
        kanji: "錆",
        kun: ["さび", "さびる"],
        on: ["ショウ", "セイ"],
        bushu: "釒",
        bushuName: "かねへん",
        strokes: 16,
        jukugo: [
            {
                word: "錆びる",
                reading: "さびる",
                meaning: "Berkarat"
            },
            {
                word: "錆び付く",
                reading: "さびつく",
                meaning: "Menjadi/melekat karena karat"
            }
        ]
    },

    {
        kanji: "捜",
        kun: ["さがす"],
        on: ["ソウ"],
        bushu: "扌",
        bushuName: "てへん",
        strokes: 10,
        jukugo: [
            {
                word: "捜索",
                reading: "そうさく",
                meaning: "Pencarian"
            },
            {
                word: "捜査",
                reading: "そうさ",
                meaning: "Penyelidikan (kepolisian)"
            }
        ]
    },

    {
        kanji: "跳",
        kun: ["はねる", "とぶ"],
        on: ["チョウ"],
        bushu: "足",
        bushuName: "あしへん",
        strokes: 13,
        jukugo: [
            {
                word: "跳躍",
                reading: "ちょうやく",
                meaning: "Lompatan"
            },
            {
                word: "跳び箱",
                reading: "とびばこ",
                meaning: "Kotak lompat / alat lompat senam"
            }
        ]
    },

    {
        kanji: "遺",
        kun: ["のこす", "のこる"],
        on: ["イ", "ユイ"],
        bushu: "⻌",
        bushuName: "しんにょう",
        strokes: 15,
        jukugo: [
            {
                word: "世界遺産",
                reading: "せかいいさん",
                meaning: "Warisan dunia"
            },
            {
                word: "遺言",
                reading: "ゆいごん",
                meaning: "Wasiat"
            }
        ]
    },

    {
        kanji: "嫁",
        kun: ["よめ", "とつぐ"],
        on: ["カ"],
        bushu: "女",
        bushuName: "おんなへん",
        strokes: 13,
        jukugo: [
            {
                word: "花嫁",
                reading: "はなよめ",
                meaning: "Pengantin wanita"
            },
            {
                word: "嫁入り",
                reading: "よめいり",
                meaning: "Pernikahan / masuk ke keluarga suami"
            }
        ]
    },

    {
        kanji: "躍",
        kun: ["おどる"],
        on: ["ヤク"],
        bushu: "足",
        bushuName: "あしへん",
        strokes: 21,
        jukugo: [
            {
                word: "跳躍",
                reading: "ちょうやく",
                meaning: "Lompatan"
            },
            {
                word: "躍進",
                reading: "やくしん",
                meaning: "Kemajuan pesat"
            }
        ]
    },

    {
        kanji: "維",
        kun: ["これ"],
        on: ["イ"],
        bushu: "糸",
        bushuName: "いとへん",
        strokes: 14,
        jukugo: [
            {
                word: "維持",
                reading: "いじ",
                meaning: "Pemeliharaan"
            },
            {
                word: "繊維",
                reading: "せんい",
                meaning: "Serat"
            }
        ]
    },

    {
        kanji: "税",
        kun: [],
        on: ["ゼイ"],
        bushu: "禾",
        bushuName: "のぎへん",
        strokes: 12,
        jukugo: [
            {
                word: "税金",
                reading: "ぜいきん",
                meaning: "Pajak"
            },
            {
                word: "消費税",
                reading: "しょうひぜい",
                meaning: "Pajak konsumsi (PPN)"
            }
        ]
    },

    {
        kanji: "咳",
        kun: ["せき"],
        on: ["ガイ"],
        bushu: "口",
        bushuName: "くちへん",
        strokes: 9,
        jukugo: [
            {
                word: "咳止め",
                reading: "せきどめ",
                meaning: "Obat batuk"
            },
            {
                word: "空咳",
                reading: "からせき",
                meaning: "Batuk kering"
            }
        ]
    },

    {
        kanji: "潮",
        kun: ["しお"],
        on: ["チョウ"],
        bushu: "氵",
        bushuName: "さんずい",
        strokes: 15,
        jukugo: [
            {
                word: "満潮",
                reading: "まんちょう",
                meaning: "Air pasang"
            },
            {
                word: "干潮",
                reading: "かんちょう",
                meaning: "Air surut"
            }
        ]
    },

    {
        kanji: "癖",
        kun: ["くせ"],
        on: ["ヘキ"],
        bushu: "疒",
        bushuName: "やまいだれ",
        strokes: 18,
        jukugo: [
            {
                word: "口癖",
                reading: "くちぐせ",
                meaning: "Kata-kata kebiasaan"
            },
            {
                word: "悪癖",
                reading: "あくへき",
                meaning: "Kebiasaan buruk"
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

        if (!jukugoSessionBank) {
            createJukugoSessionBank();
        }

        selectJukugoSession(1);

        return;
    }

    sessionSelector.style.display = "none";

    createQuestions();

    document.getElementById("quizArea").style.display =
        "block";

    document.getElementById("resultArea").style.display =
        "none";

    document.getElementById("nextSessionButton").style.display =
        "none";

    showQuestion();
}


/* =========================================
   JUKUGO SESSION SELECTOR
========================================= */

function selectJukugoSession(session) {

    currentQuiz = 3;
    currentJukugoSession = session;

    currentQuestion = 0;
    score = 0;
    answered = false;

    const sessionButtons =
        document.querySelectorAll(
            "#jukugoSessionSelector .quiz-select"
        );

    sessionButtons.forEach((button, index) => {

        button.classList.toggle(
            "active",
            index + 1 === session
        );

    });

    createQuestions();

    document.getElementById("quizArea").style.display =
        "block";

    document.getElementById("resultArea").style.display =
        "none";

    document.getElementById("nextSessionButton").style.display =
        "none";

    showQuestion();
}


/* =========================================
   CREATE QUESTIONS
========================================= */

function createQuestions() {

    questions = [];

    if (currentQuiz === 1) {

        createBasicQuestions();

    } else if (currentQuiz === 2) {

        createReverseQuestions();

    } else if (currentQuiz === 3) {

        createJukugoQuestions();

    } else if (currentQuiz === 4) {

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
   JUKUGO SESSION BANK
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

        1: shuffledJukugo.slice(0, 11),

        2: shuffledJukugo.slice(11, 22),

        3: shuffledJukugo.slice(22, 34)

    };

    const sessionTypeCounts = {

        1: {
            reading1: 3,
            reading2: 3,
            meaning: 5
        },

        2: {
            reading1: 3,
            reading2: 3,
            meaning: 5
        },

        3: {
            reading1: 4,
            reading2: 4,
            meaning: 4
        }

    };

    jukugoSessionBank = {};

    [1, 2, 3].forEach(session => {

        const items =
            shuffle(sessionJukugo[session]);

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
                    questionType: "reading1"
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
                    questionType: "reading2"
                }));

        const meaning =
            items
                .slice(
                    counts.reading1 +
                    counts.reading2
                )
                .map(juku => ({
                    ...juku,
                    questionType: "meaning"
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
   JUKUGO QUESTIONS
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
   HOTS
========================================= */

function createHOTSQuestions() {

    const hotsQuestions = [

        {
            type: "Context Selection",

            question:
                "鉛筆を使ったあと、先が丸くなったので、専用の道具で削りました。この道具は何ですか？",

            answer:
                "鉛筆削り",

            choices:
                makeChoices(
                    "鉛筆削り",
                    [
                        "鉛筆削り",
                        "花瓶",
                        "捜索",
                        "税金",
                        "口癖"
                    ]
                )
        },

        {
            type: "Context Selection",

            question:
                "工場から出る空気や煙を外へ出すための設備に関係する言葉はどれですか？",

            answer:
                "排気",

            choices:
                makeChoices(
                    "排気",
                    [
                        "排気",
                        "干潮",
                        "維持",
                        "遺言",
                        "嫁入り"
                    ]
                )
        },

        {
            type: "Context Selection",

            question:
                "金属の表面が赤茶色になり、時間がたつとその状態が進みました。この状態を表す言葉は？",

            answer:
                "錆びる",

            choices:
                makeChoices(
                    "錆びる",
                    [
                        "錆びる",
                        "跳躍",
                        "所属",
                        "消費税",
                        "空咳"
                    ]
                )
        },

        {
            type: "Context Selection",

            question:
                "海の水位が一番高くなっている時間です。この状態を何と言いますか？",

            answer:
                "満潮",

            choices:
                makeChoices(
                    "満潮",
                    [
                        "満潮",
                        "干潮",
                        "花嫁",
                        "削除",
                        "金属"
                    ]
                )
        },

        {
            type: "Context Reading",

            question:
                "警察が事件について調べています。「捜査」の読み方は？",

            answer:
                "そうさ",

            choices:
                makeChoices(
                    "そうさ",
                    [
                        "そうさ",
                        "そうさく",
                        "さくじょ",
                        "しょぞく",
                        "きんぞく"
                    ]
                )
        },

        {
            type: "Context Reading",

            question:
                "税金について説明を聞きました。「消費税」の読み方は？",

            answer:
                "しょうひぜい",

            choices:
                makeChoices(
                    "しょうひぜい",
                    [
                        "しょうひぜい",
                        "ぜいきん",
                        "まんちょう",
                        "かんちょう",
                        "せんい"
                    ]
                )
        },

        {
            type: "Situation / Application",

            question:
                "研究室で使う金属製の道具を長く良い状態で使えるように、定期的に手入れをしています。この行動に最も近い言葉は？",

            answer:
                "維持",

            choices:
                makeChoices(
                    "維持",
                    [
                        "維持",
                        "排除",
                        "削除",
                        "嫁入り",
                        "悪癖"
                    ]
                )
        },

        {
            type: "Situation / Application",

            question:
                "旅行中に大切な場所を見つけ、その場所が世界的に価値のある文化・自然の遺産として登録されています。この言葉は？",

            answer:
                "世界遺産",

            choices:
                makeChoices(
                    "世界遺産",
                    [
                        "世界遺産",
                        "跳躍",
                        "花瓶",
                        "鋭角",
                        "捜査"
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

    } else {

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

    } else {

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

    } else {

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
        message = "よくできました！";

    } else if (percentage >= 50) {

        title = "いい感じ！";
        message = "もう少し頑張ろう！";

    } else {

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

    } else {

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
        currentQuiz === 3 &&
        currentJukugoSession < 3
    ) {

        selectJukugoSession(
            currentJukugoSession + 1
        );

    }
}


/* =========================================
   RETRY
========================================= */

function retryQuiz() {

    if (currentQuiz === 3) {

        selectJukugoSession(
            currentJukugoSession
        );

    } else {

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
        shuffle(uniquePool)
            .slice(0, 3);

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