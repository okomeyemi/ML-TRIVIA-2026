const questions = [
    
    {
        question: "Given that 2p − m = 6 and 2p + 4m = 18, find the value of (4p + 3m).",
        options: ["1", "3", "5", "7"],
        answer: 3
    },
    
    {
        question: "Solve for y in the equations: 2x − 3y = 22 and 3x + 2y = 7.",
        options: ["-5", "-4", "4", "5"],
        answer: 1
    },
    
    {
        question: "If 3p − q = 6 and 2p + 3q = 4, find q.",
        options: ["0", "1/2", "2/3", "No Answer"],
        answer: 3
    },
    
    {
        question: "Solve the simultaneous equations: x + y = 3/2 and x − y = 5/2. Find (2y + x).",
        options: ["-2", "-1", "1/2", "1"],
        answer: 3
    },
    
    {
        question: "If x + y = 12 and 3x − y = 20, find the value of (2x − y).",
        options: ["8", "10", "12", "15"],
        answer: 2
    },
    
    {
        question: "Solve simultaneously: 3x − 2y = 10 and x + 3y = 7.",
        options: [
            "x = -4 and y = 1",
            "x = -1 and y = -4",
            "x = 1 and y = 4",
            "x = 4 and y = 1"
        ],
        answer: 3
    },
    
    {
        question: "If x + 0.4y = 3 and y = 1/2x, find the value of (x + y).",
        options: ["1¼", "2½", "3¾", "5"],
        answer: 2
    },
    
    {
        question: "If 3p = 4q and 9p = kq − 12, find the value of k.",
        options: ["12", "7", "-7", "-12"],
        answer: 0
    },
    
    {
        question: "If 2x − 3y = -11 and 3x + 2y = 3, evaluate (y − x)².",
        options: ["4", "9", "16", "25"],
        answer: 2
    },
    
    {
        question: "Given that x + y = 1 and x + 3y = 5, find the value of (x² + 4xy + 3y²).",
        options: ["1", "5", "10", "25"],
        answer: 1
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