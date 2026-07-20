// ===============================
// RESULT PAGE
// ===============================

// Get student information
const student = JSON.parse(localStorage.getItem("mlStudent"));

// Get score
const score = Number(localStorage.getItem("quizScore")) || 0;

// Total questions
const totalQuestions = 10;

// Calculate percentage
const percentage = Math.round((score / totalQuestions) * 100);

// Airtime calculation
const airtime = score * 100;

// Display data
document.getElementById("studentName").textContent = student ? student.fullname : "Participant";

document.getElementById("score").textContent = `${score} / ${totalQuestions}`;

document.getElementById("percentage").textContent = `${percentage}%`;

document.getElementById("airtime").textContent = `₦${airtime}`;

// ===============================
// PERFORMANCE MESSAGE
// ===============================

const performance = document.getElementById("performance");

if (percentage >= 90) {
  
  performance.textContent = "🏆 Outstanding Performance!";
  performance.style.background = "#16a34a";
  
} else if (percentage >= 70) {
  
  performance.textContent = "🥇 Excellent Work!";
  performance.style.background = "#22c55e";
  
} else if (percentage >= 50) {
  
  performance.textContent = "👏 Good Job!";
  performance.style.background = "#f59e0b";
  
} else {
  
  performance.textContent = "📚 Keep Practicing!";
  performance.style.background = "#ef4444";
  
}

// ===============================
// SHARE TO WHATSAPP
// ===============================

document.getElementById("shareBtn").addEventListener("click", () => {
  
  const message =
    `🎓 ML Trivia 2026

Name: ${student ? student.fullname : "Participant"}

Score: ${score}/${totalQuestions}

Percentage: ${percentage}%

I just completed the ML Trivia 2026 Mathematics Challenge! 🎉`;
  
  window.open(
    `https://wa.me/?text=${encodeURIComponent(message)}`,
    "_blank"
  );
  
});

// ===============================
// CLEAR DATA (Optional)
// ===============================

// Uncomment if you want to clear registration after viewing results

// localStorage.removeItem("mlStudent");
// localStorage.removeItem("quizScore");