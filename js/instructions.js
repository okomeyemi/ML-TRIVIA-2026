const startQuiz = document.getElementById("startQuiz");

startQuiz.addEventListener("click", () => {
    window.location.href = "quiz.html";
});
const student = localStorage.getItem("mlStudent");

if (!student) {
  alert("Please register before starting the quiz.");
  window.location.href = "register.html";
}