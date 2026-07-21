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