const welcomeScreen = document.getElementById("welcomeScreen");
const quizArea = document.getElementById("quizArea");

const levels = [
    '₹ 1,000,000',
    '₹ 5,00,000',
    '₹ 2,50,000',
    '₹ 1,25,000',
    '₹ 64,000',
    '₹ 32,000',
    '₹ 16,000',
    '₹ 8,000',
    '₹ 4,000',
    '₹ 2,000',
    '₹ 1,000',
    '₹ 500',
    '₹ 300',
    '₹ 200',
    '₹ 100'
]

const questions = [
    {
      question: "Who is known as the Father of the Nation in India?",
      options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
      answer: 1
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: 1
    },
    {
      question: "Which is the largest mammal?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
      answer: 1
    },
    {
        question: "Who is known as the Father of the Nation in India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
        answer: 1
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
      },
      {
        question: "Which is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: 1
      },
      {
        question: "Who is known as the Father of the Nation in India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
        answer: 1
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
      },
      {
        question: "Which is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: 1
      },
      {
        question: "Who is known as the Father of the Nation in India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
        answer: 1
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: 2
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
      },
      {
        question: "Which is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: 1
      }
];

const currentLevelIndex =levels.length-1;

function startGame(){
    const username = document.getElementById("username").value;
    const errorMessage = document.getElementById("usernameError");

    if (username.trim() === "") {
        errorMessage.textContent = "Please enter a username.";
        return;
    }

    errorMessage.textContent = ""; // Clear any previous error message

    welcomeScreen.classList.add('hide');
    quizArea.classList.remove('hide');

loadLevels();
    
}

function loadLevels() {
    const levelList = document.getElementById("levelList");
    levelList.innerHTML = "";
    levels.forEach((level, index)=>{
        const levelDiv = document.createElement("li");
        levelDiv.classList.add("level");
        levelDiv.innerHTML = `
          <span class="levelNumber">${levels.length - index}</span>
          <span class="levelAmount">${level}</span>
        `;
        if(currentLevelIndex === index){
            levelDiv.classList.add("active");
        }
        levelList.appendChild(levelDiv);
    })
}

function loadQuestion(){
    const questionStatement = document.getElementById("questionStatement");
    const currentObj = questions[currentLevelIndex];

    questionStatement.innerText=currentObj.question;
















    // const ans= document.getElementById("answers");
    // // console.log(ans)

    // const obj = questions[currentLevelIndex];
    //     const question = document.createElement('p'); // for question
    //     question.classList.add("questionStyle");

    //     const answerl1 = document.createElement('p');   // for options
    //     answerl1.classList.add("optionsStyle");

    //     question.innerHTML = obj.question;  // adding question

    //     obj.options.forEach((val, ind)=>{   // for each question 4 options
    //         const op = document.createElement('span');  // created a span tag
    //         op.innerText=val;   // added answer in that tag
    //         answerl1.appendChild(op);   // appended each option in options class.
    //     })
    //     questionStatement.appendChild(question);
    //     ans.appendChild(answerl1);
    
}
loadQuestion();