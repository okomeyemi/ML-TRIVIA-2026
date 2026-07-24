// ===============================
// CHECK IF STUDENT REGISTERED
// ===============================

const student = localStorage.getItem("mlStudent");

if (!student) {
  alert("Please register before starting the quiz.");
  window.location.href = "register.html";
}

// ===============================
// START QUIZ
// ===============================

const startQuiz = document.getElementById("startQuiz");

startQuiz.addEventListener("click", () => {
  
  // Save the quiz start time
  localStorage.setItem("quizStartTime", Date.now());
  
  // Go to quiz page
  window.location.href = "quiz.html";
  
});