const passages = [
  {
    title: "Passage 1",
    text: `Education plays a crucial role in shaping society. It not only provides knowledge but also builds critical thinking skills. Many argue that modern education systems focus too much on memorization rather than understanding.`,

    questions: [
      {
        prompt: "What is the author's main argument?",
        choices: [
          { text: "Education is unnecessary", correct: false, choiceExplanation: " is incorrect because..."},
          { text: "Education should focus more on understanding", correct: true, choiceExplanation: " is correct because in the passage, the author criticizes memorization and supports deeper understanding."},
          { text: "Memorization is the best method", correct: false, choiceExplanation: " is incorrect because..."},
          { text: "Schools should be eliminated", correct: false, choiceExplanation: " is incorrect because..."}
        ],
        category: "main idea"
      },
      {
        prompt: "What tone does the author use?",
        choices: [
         { text: "Angry", correct: false, choiceExplanation: " is incorrect because..."},
          { text: "Critical", correct: true, choiceExplanation: " is correct because in the passage, the author critiques current systems. This means that the tone is critical."},
          { text: "Neutral", correct: false, choiceExplanation: " is incorrect because..."},
          { text: "Humorous", correct: false, choiceExplanation: " is incorrect because..."}
        ],
        category: "tone"
      }
    ]
  }
];

const indexToLetters = ["A", "B", "C", "D"];

const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");

let currentPassage = 0;
let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", startQuiz);

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

let currentShuffledChoices = [];

function showQuestion() {
  const passage = passages[currentPassage];
  const q = passage.questions[currentQuestion];

  currentShuffledChoices = shuffleArray(q.choices);

  quizContainer.innerHTML = `
    <h2>${passage.title}</h2>
    <p>${passage.text}</p>
    <hr>
    <h3>Question ${currentQuestion + 1}</h3>
    <p>${q.prompt}</p>

    ${currentShuffledChoices.map((choice, i) => `
      <button class ="answer-btn" onclick="selectAnswer(${i})">
     ${indexToLetters[i] + ": " + choice.text} </button>
    `).join("")}
  `;
}

function selectAnswer(i) {
  const q = passages[currentPassage].questions[currentQuestion];
  const buttons = quizContainer.querySelectorAll("answer-btn");
  const selectedChoice = currentShuffledChoices[i];
var correctIndex = "";
  
  buttons.forEach((btn, index) => {
    if (currentShuffledChoices[index].correct) {
      btn.style.backgroundColor = "green";
      correctIndex = index;
    } else if (index === i) {
      btn.style.backgroundColor = "red";
    }

    btn.disabled = true;
  });

  if (selectedChoice.correct) {
    score++;
  }
  
  quizContainer.innerHTML += `
  <p><strong>Your Choice:</strong> ${indexToLetters[i]}</p>
    <p><strong>Answer:</strong> ${indexToLetters[correctIndex]}</p>
    <p><strong>Explanation:</strong> ${"Answer choice " + indexToLetters[correctIndex] + q.choices[i].choiceExplanation}</p>
    <button onclick="nextQuestion()">Next</button>
  `;
}

function nextQuestion() {
  currentQuestion++;

  const passage = passages[currentPassage];

  if (currentQuestion < passage.questions.length) {
    showQuestion();
  } else {
    quizContainer.innerHTML = `
      <h2>Passage Complete</h2>
      <p>Score: ${score}/${passage.questions.length}</p>
    `;
  }
}
