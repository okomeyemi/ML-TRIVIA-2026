// Start a fresh quiz
localStorage.removeItem("quizTime");
localStorage.removeItem("quizSubmitted");
localStorage.removeItem("quizAnswers");
localStorage.removeItem("quizScore");

// =============================
// MOBILE MENU
// =============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    
    navLinks.classList.toggle("active");
    
    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
});

// =============================
// REGISTRATION
// =============================

const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e) {
    
    e.preventDefault();
    
    const fullname = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const agree = document.getElementById("agree").checked;
    
    if (fullname === "") {
        alert("Please enter your full name.");
        return;
    }
    
    if (phone.length < 11) {
        alert("Please enter a valid WhatsApp number.");
        return;
    }
    
    if (!agree) {
        alert("Please agree to the competition rules.");
        return;
    }
    
    
const student = {
    fullname,
    phone,
    registeredAt: firebase.firestore.FieldValue.serverTimestamp()
};

// Save to Firebase
db.collection("students").add(student)
    
    .then(() => {
        
        // Save locally for the current quiz session
        localStorage.setItem("mlStudent", JSON.stringify({
            fullname,
            phone
        }));
        
        alert("Registration successful!");
        
        window.location.href = "instructions.html";
        
    })
    
    .catch((error) => {
    
    alert(error.message);
    
});

});