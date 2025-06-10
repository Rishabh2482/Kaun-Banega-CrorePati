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

let currentLevelIndex =levels.length-1;

let currentQuestionIndex =0;

let sum=0;

function startGame(){
    currentLevelIndex =levels.length-1;  
    currentQuestionIndex =0;
    sum=0;
    const username = document.getElementById("username").value;
    const errorMessage = document.getElementById("usernameError");

    if (username.trim() === "") {
        errorMessage.textContent = "Please enter a username.";
        return;
    }

    errorMessage.textContent = "";

    welcomeScreen.classList.add('hide');
    quizArea.classList.remove('hide');

loadLevels();
loadQuestion();
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
    const ans= document.getElementById("answers");

    let currentObj = questions[currentQuestionIndex];

    questionStatement.innerHTML="";
    ans.innerHTML=""
    questionStatement.innerText=currentObj.question;

    currentObj.options.forEach((option, index)=>{
        const answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        answerDiv.innerHTML= option;
        answerDiv.addEventListener('click',() => checkAnswer(index),false)
        ans.appendChild(answerDiv);
    })
}

function checkAnswer(index){
  let val = parseInt(levels[currentLevelIndex].replace(/[₹,]/g, ''), 10);
  const currentObj = questions[currentQuestionIndex];

    if(index !=currentObj.answer){
        const looseScreen = document.getElementById('looseScreen')
        quizArea.classList.add('hide');
        looseScreen.classList.remove("hide");
        earning(false,0);
        sum=0;
    }
    else{
      if(currentLevelIndex == 0){
        quizArea.classList.add('hide');
        document.getElementsByTagName('h1')[0].innerText='Congratulation Champ';
        looseScreen.classList.remove("hide");
        earning(true,val);
        return;
      }
      else
      earning(false, val);
      currentQuestionIndex++;
      currentLevelIndex--;
      loadLevels();
      loadQuestion();
    }
    return;
}


// levels -> 0(max) to 14(min)
function earning(winner,val){
    // console.log(sum);
    const earningValue = document.getElementsByTagName('h3');

    sum+=val;
    console.log(sum);
    earningValue[0].innerHTML=`You have earned ${sum}`;
    
    return;
}