localStorage.removeItem("quizTime");
localStorage.removeItem("quizSubmitted");
localStorage.removeItem("quizAnswers");
localStorage.removeItem("quizScore");

if (localStorage.getItem("quizSubmitted")) {
  window.location.href = "result.html";
}

// ===============================
// ML TRIVIA 2026 QUIZ ENGINE
// ===============================

// Check if student registered
const student = localStorage.getItem("mlStudent");

if (!student) {
  alert("Please register before taking the quiz.");
  window.location.href = "register.html";
}

// Questions array comes from questions.js

let currentQuestion = 0;
let score = 0;

// Load saved answers if available
let answers = JSON.parse(localStorage.getItem("quizAnswers")) || [];

// ===============================
// ELEMENTS
// ===============================

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const questionNumber = document.getElementById("questionNumber");
const totalQuestions = document.getElementById("totalQuestions");
const progressBar = document.getElementById("progressBar");
const questionGrid = document.getElementById("questionGrid");

totalQuestions.textContent = questions.length;

// ===============================
// CREATE QUESTION PALETTE
// ===============================

function createPalette() {
  
  questionGrid.innerHTML = "";
  
  questions.forEach((q, index) => {
    
    const btn = document.createElement("button");
    
    btn.textContent = index + 1;
    
    if (answers[index] !== undefined) {
      btn.classList.add("answered");
    }
    
    if (index === currentQuestion) {
      btn.classList.add("active");
    }
    
    btn.onclick = () => {
      
      currentQuestion = index;
      
      loadQuestion();
      
    };
    
    questionGrid.appendChild(btn);
    
  });
  
}

// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion() {
  
  const q = questions[currentQuestion];
  
  questionNumber.textContent = currentQuestion + 1;
  
  questionElement.textContent = q.question;
  
  optionsElement.innerHTML = "";
  
  q.options.forEach((option, index) => {
    
    const div = document.createElement("div");
    
    div.className = "option";
    
    div.textContent = option;
    
    if (answers[currentQuestion] === index) {
      div.classList.add("selected");
    }
    
    div.onclick = () => {
      
      answers[currentQuestion] = index;
      
      localStorage.setItem(
        "quizAnswers",
        JSON.stringify(answers)
      );
      
      loadQuestion();
      
    };
    
    optionsElement.appendChild(div);
    
  });
  
  progressBar.style.width =
    ((currentQuestion + 1) / questions.length) * 100 + "%";
  
  createPalette();
  
}

// ===============================
// NEXT BUTTON
// ===============================

document.getElementById("nextBtn").onclick = () => {
  
  if (currentQuestion < questions.length - 1) {
    
    currentQuestion++;
    
    loadQuestion();
    
  }
  
};

// ===============================
// PREVIOUS BUTTON
// ===============================

document.getElementById("prevBtn").onclick = () => {
  
  if (currentQuestion > 0) {
    
    currentQuestion--;
    
    loadQuestion();
    
  }
  
};


// ===============================
// SUBMIT QUIZ
// ===============================

document.getElementById("submitQuiz").onclick = () => {
  
  const unanswered = [];
  
  localStorage.setItem("quizSubmitted","true");
  
  questions.forEach((question, index) => {
    if (answers[index] === undefined) {
      unanswered.push(index + 1);
    }
    
  });
  
  if (unanswered.length > 0) {
    
    const proceed = confirm(
      `You have ${unanswered.length} unanswered question(s):\n\n${unanswered.join(", ")}\n\nDo you still want to submit?`
    );
    
    if (!proceed) {
      return;
    }
  }
  
  score = 0;
  
  questions.forEach((question, index) => {
    if (answers[index] === question.answer) {
      score++;
    }
  });
  
  localStorage.setItem("quizScore", score);
  localStorage.setItem("quizSubmitted", "true");
  
  localStorage.removeItem("quizTime");
  localStorage.removeItem("quizAnswers");
  
  window.location.href = "result.html";
  
};

// ===============================
// TIMER
// ===============================

const QUIZ_TIME = 600;

let savedTime = Number(localStorage.getItem("quizTime"));

let timeLeft;

if (isNaN(savedTime) || savedTime <= 0) {
    timeLeft = QUIZ_TIME;
} else {
    timeLeft = savedTime;
}

const timer = setInterval(() => {
  
  const minutes = Math.floor(timeLeft / 60);
  
  const seconds = timeLeft % 60;
  
  document.getElementById("time").textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  
  timeLeft--;
  localStorage.setItem("quizTime", timeLeft);
  
  if (timeLeft < 0) {
    
    clearInterval(timer);
    
    alert("Time is up!");
    
    document.getElementById("submitQuiz").click();
    
  }
  
}, 1000);

// ===============================
// START QUIZ
// ===============================

loadQuestion();

window.addEventListener("beforeunload", function(e) {
  
  e.preventDefault();
  
  e.returnValue = "";
  
});