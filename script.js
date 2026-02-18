const questions = [
    {
        question: "What was our first dinner together?",
        answers: ["Cheese", "Tapas", "Cookies", "Sashimi"],
        correct: 3,
        word: "First dinner"
    },
    {
        question: "Where did we go the afertoon we went when we bought the socks in Lyon?",
        answers: ["Asian bar", "Cafe", "Vap store"],
        correct: 0,
        word: "Piggy Socks"
    },
    {
        question: "Where did we go the first night we went out together?",
        answers: ["Bar", "Bowling", "Restaurant"],
        correct: 1,
        word: "Bowling"
    }, //first weekend
    {
        question: "What was my favourite dish in Tempo?",
        answers: ["Fish", "Tomato", "Cucumber dessert"],
        correct: 0,
        word: "TEMPO🍅"
    },
    {
        question: "When did we do our fist lego?",
        answers: ["First weekend (Lyon)", "Second weekend (Rouen)", "Third weekend (Dijon)"],
        correct: 1,
        word: "First Lego❤️"
    },
    {
        question: "Where did we go the last day in Rouen?",
        answers: ["Vap shop", "Tiger", "Árboles", "Monoprix"],
        correct: 2,
        word: "Árboles🌲"
    }, //second weekend
    {
        question: "What we liked the most in Vigo in August?",
        answers: ["Cheese", "Cookies", "Pulpo"],
        correct: 2,
        word: "Le pulpo de la fla fla Duduuuuu🐙"
    },
    {
        question: "Where did we want to fuck?",
        answers: ["Small beach", "Big beach", "Everywhere"],
        correct: 2,
        word: "Tskitski👉🏻👈🏻"
    },
    {
        question: "What did you enjoy more?",
        answers: ["Ceramica", "Ferry", "MARCO Museum", "See the ruins during the night"],
        correct: 0,
        word: "Ceramica🖌️"
    }, //Vigo Holidays
    {
        question: "Where did we go FIRST the first Morning the first weekend in Dijon?",
        answers: ["Mercado", "Restaurant next to Mercado", "Amorino"],
        correct: 0,
        word: "Dijon❤️"
    },
    {
        question: "Which stinky cheese did we buy the first weekend in Dijon?",
        answers: ["Époisses", "Camembert", "Brie"],
        correct: 0,
        word: "Cheese lovers🧀"
    },
    {
        question: "Where do we want to go since the first weekend in Dijon?",
        answers: ["Wine bar", "Cibo", "Tower", "Dream Donuts"],
        correct: 3,
        word: "Donuuuut🍩"
    }, //fisrt weekend Dijon
    {
        question: "What did we love the most of the second Airbnb in Dijon?",
        answers: ["The kitchen", "The bed", "The bathroom"],
        correct: 1,
        word: "Dijon life🏠"
    },
    {
        question: "When did we paint Capitan Chorizo?",
        answers: ["Second weekend in Dijon", "Third weekend in Dijon", "Fourth weekend in Dijon"],
        correct: 0,
        word: "Capitan Chorizo💂🏻‍♀️"
    },
    {
        question: "What did you cook for a veeeeery long time the second weekend in Dijon?",
        answers: ["Pea soup", "Crêpes", "Onion Soup"],
        correct: 2,
        word: "Your meals❤️🥣"
    }, //second weekend Dijon
    {
        question: "Where did we go for the first time the third weekend in Dijon?",
        answers: ["Cibo", "Beaune", "Vap shop"],
        correct: 1,
        word: "Beaune🍷"
    },
    {
        question: "Which is my favourite restaurant?",
        answers: ["L'ecrit vin", "Raclette's restaurant", "Both"],
        correct: 2,
        word: "Beaune and Rouen❤️🍷🧀"
    },
    {
        question: "Which bar did we love to go the third weekend in Dijon?",
        answers: ["Baglestein", "Cafe of mantecado", "Wine bar", "Simone"],
        correct: 3,
        word: "Beeeeer🍻"
    }, //third weekend Dijon
    {
        question: "The fourth weekend in Dijon, did we went to the mercado?",
        answers: ["Yes", "No"],
        correct: 0,
        word: "Mercado🍎🥒"
    },
    {
        question: "What did I cook the fourth weekend in Dijon?",
        answers: ["Zucchini", "Gambas al ajillo", "Omelette"],
        correct: 1,
        word: "Gambas🦐"
    },
    {
        question: "Where did we go in Beaune the fourth weekend in Dijon?",
        answers: ["Cafe", "Shops", "Museum"],
        correct: 2,
        word: "Dijon museum🏛️"
    }, //fourth weekend Dijon
    {
        question: "During the holidays of January, what we cooked the most?",
        answers: ["Eggs", "Sesam cookies", "Noodles"],
        correct: 1,
        word: "Sesam cookies🍪"
    },
    {
        question: "Which was our favourite wine bar?",
        answers: ["75cl", "Cepa Verde", "Cepas vellas"],
        correct: 0,
        word: "Wine🍷"
    },
    {
        question: "What we bought in Vigo together?",
        answers: ["Clothes", "Necklace", "Wristband"],
        correct: 1,
        word: "Vigo🐙"
    }, //Vigo Holidays in January
    {
        question: "Which is our song?",
        answers: ["Can't help falling in love", "Spoon", "Sign"],
        correct: 0,
        word: "US🎤"
    },
    {
        question: "What was a incredible night only us?",
        answers: ["Raclette night", "First night watching a movie", "Last night"],
        correct: 0,
        word: "Raclette🧀"
    },
    {
        question: "What was our favourite night the last weekend?",
        answers: ["Karaokes night", "Raclette night", "Last night"],
        correct: 0,
        word: "Karaoke🎤"
    }
];

let currentQuestion = 0;
let collectedWords = [];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progressEl = document.getElementById("progress");
const floatingContainer = document.getElementById("floating-container");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index);
        answersEl.appendChild(btn);
    });

    progressEl.textContent = `Pregunta ${currentQuestion + 1} de ${questions.length}`;
}

function checkAnswer(index) {
    const q = questions[currentQuestion];

    if (index === q.correct) {
        createFloatingWord(q.word);
        collectedWords.push(q.word);

        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            document.getElementById("quiz-container").style.display = "none";
            setTimeout(formHeartAnd27, 1500);

        }

    } else {
        alert("❌ Incorrecto... piensa mejor 😏");
    }
}


function createFloatingWord(text) {
    const word = document.createElement("div");
    word.className = "floating-word";
    word.textContent = text;

    word.style.left = Math.random() * window.innerWidth + "px";
    word.style.top = Math.random() * window.innerHeight + "px";

    floatingContainer.appendChild(word);

    setTimeout(() => {
        word.remove();
    }, 5000);
}

function formHeartAnd27() {
    floatingContainer.innerHTML = "";

    const width = window.innerWidth;
    const height = window.innerHeight;

    const centerX = width / 2;
    const centerY = height / 2;

    const elements = [];

    // Configuración de tamaño común
    const shapeSize = Math.min(width, height) * 0.30;
    const density = 0.05; // controla qué tan relleno está

    const emojis = ["❤️", "🐙"];

    //CORAZÓN RELLENO

    for (let x = -1.5; x <= 1.5; x += density) {
        for (let y = -1.5; y <= 1.5; y += density) {
            const formula =
                Math.pow(x * x + y * y - 1, 3) -
                x * x * Math.pow(y, 3);

            if (formula <= 0) {
                elements.push({
                    x: centerX - shapeSize / 1.1 + x * shapeSize / 2,
                    y: centerY - y * shapeSize / 2
                });
            }
        }
    }

    
    //27 RELLENO

    const matrix = [
        "111111111   1111111",
        "000000001        11",
        "111111111      111",
        "100000000     11",
        "111111111    11"
    ];

    const pixel = shapeSize / 20;
    const startX = centerX + shapeSize / 2;
    const startY = centerY - shapeSize / 3;

    matrix.forEach((row, rowIndex) => {
        [...row].forEach((cell, colIndex) => {
            if (cell === "1") {
                elements.push({
                    x: startX + colIndex * pixel,
                    y: startY + rowIndex * pixel
                });
            }
        });
    });

    //CREACIÓN Y ANIMACIÓN

    elements.forEach((point, i) => {
        const el = document.createElement("div");
        el.className = "final-emoji";

        el.textContent = emojis[i % emojis.length];

        el.style.left = Math.random() * width + "px";
        el.style.top = Math.random() * height + "px";

        floatingContainer.appendChild(el);

        setTimeout(() => {
            el.style.left = point.x + "px";
            el.style.top = point.y + "px";
        }, 20);
    });
}


function enableMouseInteraction() {
    document.addEventListener("mousemove", (e) => {
        const words = document.querySelectorAll(".floating-word");

        words.forEach(word => {
            const rect = word.getBoundingClientRect();
            const dx = rect.left + rect.width / 2 - e.clientX;
            const dy = rect.top + rect.height / 2 - e.clientY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                word.style.transform = "scale(1.5)";
            } else {
                word.style.transform = "scale(1)";
            }
        });
    });
}

loadQuestion();
