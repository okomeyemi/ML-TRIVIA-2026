const tbody = document.getElementById("leaderboardBody");

db.collection("students")

.orderBy("score","desc")

.limit(10)

.onSnapshot((snapshot)=>{

tbody.innerHTML="";

let rank=1;

snapshot.forEach((doc)=>{

const student=doc.data();

tbody.innerHTML +=`

<tr>

<td>${rank}</td>

<td>${student.fullname}</td>

<td>${student.score}</td>

<td>${student.percentage}%</td>

</tr>

`;

rank++;

});

});