const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  auth.signInWithEmailAndPassword(email, password)
    
    .then(() => {
      
      window.location.href = "admin.html";
      
    })
    
    .catch((error) => {
      
      alert(error.message);
      
    });
  
});