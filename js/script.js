// ================================
// ELEMENTS
// ================================

const pages = document.querySelectorAll(".page");

const welcome = document.getElementById("welcome");
const register = document.getElementById("register");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const registerForm = document.getElementById("registerForm");

const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

const timer = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");

const finalScore = document.getElementById("finalScore");
const performance = document.getElementById("performance");


// ================================
// VARIABLES
// ================================

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

let timeLeft = 15;
let countdown;




function showPage(page){

    pages.forEach(p => p.classList.remove("active"));

    page.classList.add("active");

}




startBtn.addEventListener("click", () => {

    showPage(register);

});




registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    showPage(quiz);

    loadQuestion();

});


function loadQuestion() {

    clearInterval(countdown);

    timeLeft = 15;

    timer.textContent = `${timeLeft}s`;

    startTimer();

    selectedAnswer = null;

    nextBtn.style.display = "none";

    const current = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    question.textContent = current.question;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answers.innerHTML = "";

    current.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.textContent = answer;

        button.onclick = () => selectAnswer(button, index);

        answers.appendChild(button);

    });

}