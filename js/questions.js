const questions = [

{
    question: "What is the value of √144?",
    options: ["10", "12", "14", "16"],
    answer: 1
},

{
    question: "Solve: 15 × 8",
    options: ["100", "110", "120", "125"],
    answer: 2
},

{
    question: "What is 25% of 200?",
    options: ["25", "40", "50", "75"],
    answer: 2
},

{
    question: "Simplify: 9²",
    options: ["18", "72", "81", "99"],
    answer: 2
},

{
    question: "Solve: 72 ÷ 8",
    options: ["8", "9", "10", "11"],
    answer: 1
},

{
    question: "What is the value of π (Pi) to 2 decimal places?",
    options: ["3.12", "3.14", "3.16", "3.18"],
    answer: 1
},

{
    question: "What is 7³?",
    options: ["49", "243", "343", "729"],
    answer: 2
},

{
    question: "Solve: 5x = 45. Find x.",
    options: ["5", "7", "8", "9"],
    answer: 3
},

{
    question: "What is the next prime number after 17?",
    options: ["18", "19", "21", "23"],
    answer: 1
},

{
    question: "Solve: (18 + 12) × 2",
    options: ["40", "50", "60", "70"],
    answer: 2
}

];

const result = {
    name: JSON.parse(localStorage.getItem("mlStudent")).fullname,
    phone: JSON.parse(localStorage.getItem("mlStudent")).phone,
    score: score,
    total: questions.length,
    percentage: (score / questions.length) * 100,
    airtime: score * 100
};

localStorage.setItem("quizResult", JSON.stringify(result));