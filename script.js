const questions = [
  {
    prompt: "What is the author's main purpose?",
    choices: ["To entertain", "To inform", "To criticize", "To compare"],
    answer: 1,
    explanation: "The passage mainly gives information."
  }
];

const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  quizContainer.innerHTML = `
    <p>${q.prompt}</p>
    ${q.choices.map((choice, i) => `<button onclick="selectAnswer(${i})">${choice}</button>`).join("")}
  `;
}

function selectAnswer(i) {
  const q = questions[currentQuestion];
  if (i === q.answer) score++;

  quizContainer.innerHTML = `
    <p><strong>Explanation:</strong> ${q.explanation}</p>
    <button onclick="nextQuestion()">Next</button>
  `;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    quizContainer.innerHTML = `<h2>Score: ${score}/${questions.length}</h2>`;
  }
}
