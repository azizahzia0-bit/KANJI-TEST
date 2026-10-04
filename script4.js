/* =========================================
   KANJI TEST
   PERTEMUAN 4
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
   DATABASE PERTEMUAN 4
========================================= */

const kanjiData = [

    {
        kanji: "慰",
        kun: ["なぐさめる", "なぐさむ"],
        on: ["イ"],
        bushu: "心",
        bushuName: "したごころ",
        strokes: 15,
        jukugo: [
            {
                word: "慰安",
                reading: "いあん",
                meaning: "Hiburan / rekreasi / pelipur lara"
            },
            {
                word: "慰霊",
                reading: "いれい",
                meaning: "Penghormatan arwah / bela sungkawa"
            }
        ]
    },

    {
        kanji: "漏",
        kun: ["もる", "もらす", "もれる"],
        on: ["ロウ"],
        bushu: "氵",
        bushuName: "さんずい",
        strokes: 14,
        jukugo: [
            {
                word: "漏洩",
                reading: "ろうえい",
                meaning: "Kebocoran (rahasia/data)"
            },
            {
                word: "水漏れ",
                reading: "みずもれ",
                meaning: "Kebocoran air"
            }
        ]
    },

    {
        kanji: "盗",
        kun: ["ぬすむ"],
        on: ["トウ"],
        bushu: "皿",
        bushuName: "さら",
        strokes: 11,
        jukugo: [
            {
                word: "盗難",
                reading: "とうなん",
                meaning: "Pencurian"
            },
            {
                word: "強盗",
                reading: "ごうとう",
                meaning: "Perampokan"
            }
        ]
    },

    {
        kanji: "厳",
        kun: ["きびしい", "おごそか"],
        on: ["ゲン", "ゴン"],
        bushu: "ツ",
        bushuName: "つかんむり",
        strokes: 17,
        jukugo: [
            {
                word: "厳密",
                reading: "げんみつ",
                meaning: "Sangat ketat"
            },
            {
                word: "厳重",
                reading: "げんじゅう",
                meaning: "Ketat / sangat dijaga"
            }
        ]
    },

    {
        kanji: "遺",
        kun: ["のこす"],
        on: ["イ", "イツ"],
        bushu: "辶",
        bushuName: "しんにょう",
        strokes: 15,
        jukugo: [
            {
                word: "遺跡",
                reading: "いせき",
                meaning: "Peninggalan sejarah / situs purbakala"
            },
            {
                word: "遺産",
                reading: "いさん",
                meaning: "Warisan"
            }
        ]
    },

    {
        kanji: "振",
        kun: ["ふる", "ふるう", "ふれる"],
        on: ["シン"],
        bushu: "手",
        bushuName: "てへん",
        strokes: 10,
        jukugo: [
            {
                word: "振動",
                reading: "しんどう",
                meaning: "Getaran"
            },
            {
                word: "振込",
                reading: "ふりこみ",
                meaning: "Transfer bank"
            }
        ]
    },

    {
        kanji: "励",
        kun: ["はげむ", "はげます"],
        on: ["レイ"],
        bushu: "力",
        bushuName: "ちから",
        strokes: 7,
        jukugo: [
            {
                word: "奨励",
                reading: "しょうれい",
                meaning: "Dorongan / promosi kerja"
            },
            {
                word: "激励",
                reading: "げきれい",
                meaning: "Dorongan / penyemangat"
            }
        ]
    },

    {
        kanji: "折",
        kun: ["おる", "おれる"],
        on: ["セツ"],
        bushu: "手",
        bushuName: "てへん",
        strokes: 7,
        jukugo: [
            {
                word: "折々",
                reading: "おりおり",
                meaning: "Dari waktu ke waktu"
            },
            {
                word: "骨折",
                reading: "こっせつ",
                meaning: "Patah tulang"
            }
        ]
    },

    {
        kanji: "鍵",
        kun: ["かぎ"],
        on: ["ケン"],
        bushu: "金",
        bushuName: "かねへん",
        strokes: 17,
        jukugo: [
            {
                word: "打鍵",
                reading: "だけん",
                meaning: "Menekan tombol/tuts"
            },
            {
                word: "鍵盤",
                reading: "けんばん",
                meaning: "Papan tuts (piano)"
            }
        ]
    },

    {
        kanji: "骨",
        kun: ["ほね"],
        on: ["コツ"],
        bushu: "骨",
        bushuName: "ほね",
        strokes: 10,
        jukugo: [
            {
                word: "骨折",
                reading: "こっせつ",
                meaning: "Patah tulang"
            },
            {
                word: "骨組み",
                reading: "ほねぐみ",
                meaning: "Kerangka"
            }
        ]
    },

    {
        kanji: "津",
        kun: ["つ"],
        on: ["シン"],
        bushu: "氵",
        bushuName: "さんずい",
        strokes: 9,
        jukugo: [
            {
                word: "津波",
                reading: "つなみ",
                meaning: "Tsunami"
            },
            {
                word: "国津",
                reading: "くにつ",
                meaning: "tempat berlabuh di suatu negeri"
            }
        ]
    },

    {
        kanji: "尋",
        kun: ["たずねる"],
        on: ["ジン"],
        bushu: "寸",
        bushuName: "すん",
        strokes: 12,
        jukugo: [
            {
                word: "尋常",
                reading: "じんじょう",
                meaning: "Biasa"
            },
            {
                word: "尋問",
                reading: "じんもん",
                meaning: "Interogasi / pemeriksaan"
            }
        ]
    },

    {
        kanji: "燃",
        kun: ["もえる", "もやす"],
        on: ["ネン"],
        bushu: "火",
        bushuName: "火へん",
        strokes: 16,
        jukugo: [
            {
                word: "燃料",
                reading: "ねんりょう",
                meaning: "Bahan bakar"
            },
            {
                word: "燃焼",
                reading: "ねんしょう",
                meaning: "Pembakaran"
            }
        ]
    },

    {
        kanji: "蔵",
        kun: ["くら"],
        on: ["ゾウ"],
        bushu: "艹",
        bushuName: "くさかんむり",
        strokes: 15,
        jukugo: [
            {
                word: "冷蔵庫",
                reading: "れいぞうこ",
                meaning: "Kulkas / lemari es"
            },
            {
                word: "貯蔵",
                reading: "ちょぞう",
                meaning: "Penyimpanan / penimbunan"
            }
        ]
    },

    {
        kanji: "創",
        kun: ["つくる"],
        on: ["ソウ"],
        bushu: "刂",
        bushuName: "りっとう",
        strokes: 12,
        jukugo: [
            {
                word: "創作",
                reading: "そうさく",
                meaning: "Kreasi / karya cipta"
            },
            {
                word: "創立",
                reading: "そうりつ",
                meaning: "Pendirian / pendirian institusi"
            }
        ]
    }

];


/* =========================================
   QUIZ STATE
========================================= */

let currentQuiz = 1;
let currentQuestion = 0;

let questions = [];
let score = 0;
let answered = false;


/* =========================================
   RANDOMIZER
========================================= */

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}


/* =========================================
   START QUIZ
========================================= */

function startQuiz(quizNumber) {

    currentQuiz = quizNumber;
    currentQuestion = 0;
    score = 0;
    answered = false;

    document.querySelectorAll(".quiz-select").forEach((button, index) => {

        button.classList.toggle(
            "active",
            index + 1 === quizNumber
        );

    });

    createQuestions();

    document.getElementById("quizArea").style.display = "block";
    document.getElementById("resultArea").style.display = "none";

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
    } else {
        createJukugoQuestions();
    }

    questions = shuffle(questions).slice(0, 11);

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
                question: `「${item.kanji}」の訓読みは？`,
                answer: item.kun[0],
                choices: makeChoices(
                    item.kun[0],
                    getAllKun()
                )
            });

        }

        if (item.on.length > 0) {

            readingQuestions.push({
                type: "Onyomi",
                question: `「${item.kanji}」の音読みは？`,
                answer: item.on[0],
                choices: makeChoices(
                    item.on[0],
                    getAllOn()
                )
            });

        }

        bushuQuestions.push({
            type: "Bushu",
            question: `「${item.kanji}」の部首は？`,
            answer: `${item.bushu}（${item.bushuName}）`,
            choices: makeBushuChoices(item)
        });

    });

    bushuQuestions = shuffle(bushuQuestions).slice(0, 4);
    readingQuestions = shuffle(readingQuestions).slice(0, 7);

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
                question: `「${item.kun[0]}」と読む漢字は？`,
                answer: item.kanji,
                choices: makeChoices(
                    item.kanji,
                    kanjiData.map(x => x.kanji)
                )
            });

        }

        if (item.on.length > 0) {

            readingQuestions.push({
                type: "Kanji Recall",
                question: `「${item.on[0]}」と読む漢字は？`,
                answer: item.kanji,
                choices: makeChoices(
                    item.kanji,
                    kanjiData.map(x => x.kanji)
                )
            });

        }

        bushuQuestions.push({
            type: "Bushu Reading",
            question: `「${item.bushuName}」の部首はどれ？`,
            answer: item.bushu,
            choices: makeBushuReadingChoices(item)
        });

    });

    bushuQuestions = shuffle(bushuQuestions).slice(0, 4);
    readingQuestions = shuffle(readingQuestions).slice(0, 7);

    questions = shuffle([
        ...bushuQuestions,
        ...readingQuestions
    ]);

}


/* =========================================
   QUIZ 3
   JUKUGO + CONTEXT
========================================= */

function createJukugoQuestions() {

    kanjiData.forEach(item => {

        item.jukugo.forEach(juku => {

            questions.push({
                type: "Jukugo Reading",
                question: `「${juku.word}」の読み方は？`,
                answer: juku.reading,
                choices: makeChoices(
                    juku.reading,
                    kanjiData.flatMap(
                        x => x.jukugo.map(j => j.reading)
                    )
                )
            });

            questions.push({
                type: "Jukugo Meaning",
                question: `「${juku.word}」の意味は？`,
                answer: juku.meaning,
                choices: makeChoices(
                    juku.meaning,
                    kanjiData.flatMap(
                        x => x.jukugo.map(j => j.meaning)
                    )
                )
            });

        });

    });

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    answered = false;

    const question = questions[currentQuestion];

    document.getElementById("quizTitle").textContent =
        `Quiz ${currentQuiz}`;

    document.getElementById("questionNumber").textContent =
        `${currentQuestion + 1} / ${questions.length}`;

    document.getElementById("questionType").textContent =
        question.type;

    document.getElementById("questionText").textContent =
        question.question;

    const progress =
        ((currentQuestion) / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        `${progress}%`;

    const answerArea =
        document.getElementById("answerArea");

    answerArea.innerHTML = "";

    question.choices.forEach(choice => {

        const button = document.createElement("button");

        button.className = "answer-choice";
        button.textContent = choice;

        button.onclick = () => checkAnswer(
            button,
            choice,
            question.answer
        );

        answerArea.appendChild(button);

    });

    document.getElementById("nextButton").disabled = true;

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(button, selected, correct) {

    if (answered) return;

    answered = true;

    const buttons =
        document.querySelectorAll(".answer-choice");

    buttons.forEach(btn => {
        btn.disabled = true;

        if (btn.textContent === correct) {
            btn.classList.add("correct");
        }
    });

    if (selected === correct) {

        button.classList.add("correct");

        score++;

        playSound(correctSound);

    } else {

        button.classList.add("wrong");

        playSound(wrongSound);

    }

    document.getElementById("nextButton").disabled = false;

}


/* =========================================
   NEXT QUESTION
========================================= */

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResult();

    } else {

        showQuestion();

    }

}


/* =========================================
   RESULT
========================================= */

function showResult() {

    document.getElementById("quizArea").style.display = "none";
    document.getElementById("resultArea").style.display = "block";

    const percentage =
        Math.round((score / questions.length) * 100);

    document.getElementById("scoreText").textContent =
        `${percentage}%`;

    document.getElementById("correctText").textContent =
        `${score} benar`;

    document.getElementById("wrongText").textContent =
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

    document.getElementById("resultTitle").textContent =
        title;

    document.getElementById("resultMessage").textContent =
        message;

    playSound(resultSound);

}


/* =========================================
   RETRY
========================================= */

function retryQuiz() {

    startQuiz(currentQuiz);

}


/* =========================================
   CHOICE HELPERS
========================================= */

function makeChoices(correct, pool) {

    const uniquePool =
        [...new Set(pool)].filter(x => x !== correct);

    const wrongChoices =
        shuffle(uniquePool).slice(0, 3);

    return shuffle([
        correct,
        ...wrongChoices
    ]);

}


function makeBushuChoices(correctItem) {

    const correct =
        `${correctItem.bushu}（${correctItem.bushuName}）`;

    const pool = kanjiData
        .filter(x => x.kanji !== correctItem.kanji)
        .map(x => `${x.bushu}（${x.bushuName}）`);

    return makeChoices(correct, pool);

}


function makeBushuReadingChoices(correctItem) {

    const correct =
        correctItem.bushu;

    const pool = kanjiData
        .filter(x => x.kanji !== correctItem.kanji)
        .map(x => x.bushu);

    return makeChoices(correct, pool);

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

document.addEventListener("DOMContentLoaded", () => {

    startQuiz(1);

});