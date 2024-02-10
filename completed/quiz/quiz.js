const data = [
  {
    question: "2+2",
    answer: 4,
    options: [1, 2, 3, 4],
  },
  {
    question: "3*3",
    answer: 9,
    options: [6, 9, 33, 12],
  },
  {
    question: "2+2+2",
    answer: 6,
    options: [2, 4, 6, 8],
  },
  {
    question: "2+2-2",
    answer: 2,
    options: [2, 4, 0, 22],
  },
  {
    question: "3+3-6",
    answer: 0,
    options: [6, 3, 1, 0],
  },
];

const start = document.querySelector("#start");
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
let timer = 5;
let questionCounter = 0;
const timerP = document.querySelector(".timer");
const questionP = document.querySelector(".question");
const optionsP = document.querySelector(".options");
const scoreP = document.querySelector("#screen3 span");
const userAnswers = []

start.onclick = () => {
  screen1.style.display = "none";
  screen2.style.display = "flex";

  startQuiz();
};

function startQuiz() {

  //For the very first question
  timerP.innerHTML = 5;
  questionP.innerHTML = nextQuestion();
  showOptions();
  questionCounter++;

  //For second question onwards
  let x = setInterval(() => {
    if (timer === 0) {
      timer = 5;
      timerP.innerHTML = timer;
      const next = nextQuestion();

      // If we still have questions
      if (next) {
        storeUserAnswer()
        questionP.innerHTML = next;
        showOptions();
        questionCounter++;
      } else {
        //Wrap everything up
        storeUserAnswer()
        clearInterval(x);
        screen2.style.display = "none";
        screen3.style.display = "flex";
        showScore();
      }
    } else {
      timerP.innerHTML = --timer;
    }
  }, 1000);
}

function storeUserAnswer(){
  const inputs = optionsP.querySelectorAll("input")
  for(let i=0;i<inputs.length;i++){
    if(inputs[i].checked) userAnswers.push(Number(inputs[i].value))
  }
}

function nextQuestion() {
  // console.log(questionCounter);
  if (questionCounter >= data.length) return false;
  else {
    return data[questionCounter].question;
  }
}

function showOptions() {
  optionsP.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("value", data[questionCounter].options[i]);
    input.setAttribute("name", "option");

    const span = document.createElement("span");
    span.innerHTML = data[questionCounter].options[i];

    const label = document.createElement("label");
    label.append(input);
    label.append(span);

    optionsP.append(label);
  }
}

function showScore() {
  let score = 0
  for(let i=0;i<data.length;i++){
    if(data[i].answer === userAnswers[i]) score++
  }
  scoreP.innerHTML = `${score} out of ${data.length} questions`
}
