auth.onAuthStateChanged((user) => {
  
  if (!user) {
    
    window.location.href = "admin-login.html";
    
    return;
  }
  
  loadStudents();
  
});

function loadStudents() {
  
  db.collection("students")
    .orderBy("score", "desc")
    .onSnapshot((snapshot) => {
      
      const table = document.getElementById("studentTable");
      
      table.innerHTML = "";
      
      snapshot.forEach((doc) => {
        
        const student = doc.data();
        
        table.innerHTML += `
                <tr>
                    <td>${student.fullname || ""}</td>
                    <td>${student.phone || ""}</td>
                    <td>${student.score ?? 0}</td>
                    <td>${student.percentage ?? 0}%</td>
                </tr>
            `;
      });
      
    });
  
}


const table = document.getElementById("studentTable");

db.collection("students")
.orderBy("score","desc")
.onSnapshot((snapshot)=>{

table.innerHTML="";

snapshot.forEach((doc)=>{

const student=doc.data();

table.innerHTML +=`

<tr>

<td>${student.fullname||""}</td>

<td>${student.phone||""}</td>

<td>${student.score??0}</td>

<td>${student.percentage??0}%</td>

</tr>

`;

});

});