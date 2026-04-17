const passages = [
  {
    title: "Passage 1",
    text: `Education plays a crucial role in shaping society. It not only provides knowledge but also builds critical thinking skills. Many argue that modern education systems focus too much on memorization rather than understanding.`,

    questions: [
      {
        prompt: "What is the author's main argument?",
        choices: [
          "Education is unnecessary",
          "Education should focus more on understanding",
          "Memorization is the best method",
          "Schools should be eliminated"
        ],
        answer: 1,
        explanation: "The author criticizes memorization and supports deeper understanding.",
        category: "main idea"
      },
      {
        prompt: "What tone does the author use?",
        choices: [
          "Angry",
          "Neutral",
          "Critical",
          "Humorous"
        ],
        answer: 2,
        explanation: "The author critiques current systems, so the tone is critical.",
        category: "tone"
      }
    ]
  }
];

const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");

let currentPassage = 0;
let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const passage = passages[currentPassage];
  const q = passage.questions[currentQuestion];

  quizContainer.innerHTML = `
    <h2>${passage.title}</h2>
    <p>${passage.text}</p>

    <hr>

    <h3>Question ${currentQuestion + 1}</h3>
    <p>${q.prompt}</p>

    ${q.choices.map((choice, i) => `
      <button onclick="selectAnswer(${i})">${choice}</button>
    `).join("")}
  `;
}

function selectAnswer(i) {
  const q = passages[currentPassage].questions[currentQuestion];

  if (i === q.answer) score++;

  quizContainer.innerHTML = `
    <p><strong>Answer:</strong> ${q.choices[q.answer]}</p>
    <p><strong>Explanation:</strong> ${q.explanation}</p>
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
