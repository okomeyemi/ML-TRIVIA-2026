// Mobile Navigation

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


// ===============================
// COUNTDOWN TIMER
// ===============================

const targetDate = new Date("August 15, 2026 08:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(timer);

        document.querySelector(".countdown-container").innerHTML = `
            <h2 style="text-align:center;width:100%;color:#fff;">
                🎉 The Competition Has Started!
            </h2>
        `;
    }

}, 1000);

// ===============================
// FAQ ACCORDION
// ===============================

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {

    faq.addEventListener("click", () => {

        faq.classList.toggle("active");

    });

});


//=========================
// SCROLL ANIMATION
//=========================

const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            
            entry.target.classList.add("show");
            
        }
        
    });
    
});

document.querySelectorAll(".hidden").forEach(el => {
    
    observer.observe(el);
    
});

//=========================
// PROGRESS BAR
//=========================

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/height)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});