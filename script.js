const subjects = [
  {
    name: "AP Lang",
    passages: [
      {
        title: "Passage 1",
        text: `Education plays a crucial role in shaping society. It not only provides knowledge but also builds critical thinking skills. Many argue that modern education systems focus too much on memorization rather than understanding.`,
        questions: [
  {
    prompt: "What is the author's main argument?",
    choices: [
      { text: "Education is unnecessary", correct: false, choiceExplanation: " is incorrect because..." },
      { text: "Education should focus more on understanding", correct: true, choiceExplanation: " is correct because the author criticizes memorization and supports deeper understanding." },
      { text: "Memorization is the best method", correct: false, choiceExplanation: " is incorrect because..." },
      { text: "Schools should be eliminated", correct: false, choiceExplanation: " is incorrect because..." }
    ],
    category: "main idea"
  },
  {
    prompt: "What tone does the author use?",
    choices: [
      { text: "Angry", correct: false, choiceExplanation: " is incorrect because..." },
      { text: "Critical", correct: true, choiceExplanation: " is correct because the author critiques the current system." },
      { text: "Neutral", correct: false, choiceExplanation: " is incorrect because..." },
      { text: "Humorous", correct: false, choiceExplanation: " is incorrect because..." }
    ],
    category: "tone"
  }
]
      }
    ]
  },
  {
    name: "AP World",
    passages: [
      {
        title: "Passage 1",
        text: `Trade networks connected distant regions and encouraged cultural exchange.`,
        questions: [
          {
            prompt: "What is the main idea of the passage?",
            choices: [
              { text: "Trade had no major effect", correct: false, choiceExplanation: " is incorrect because..." },
              { text: "Trade encouraged exchange between regions", correct: true, choiceExplanation: " is correct because the passage says trade networks connected distant regions." },
              { text: "Cultural exchange was harmful", correct: false, choiceExplanation: " is incorrect because..." },
              { text: "Trade only mattered locally", correct: false, choiceExplanation: " is incorrect because..." }
            ],
            category: "main idea"
          }
        ]
      }
    ]
  }
];

const appContainer = document.getElementById("app-container");

let currentSubject = 0;
let currentPassage = 0;
let currentQuestion = 0;
let score = 0;
let currentShuffledChoices = [];
const indexToLetters = ["A", "B", "C", "D"];

function showHomePage() {
  appContainer.innerHTML = `
    <div class="home-header">
      <h1 class="app-title">PrepSprint</h1>
      <p class="app-subtitle">Fast AP practice built for your phone.</p>
    </div>

    <button id="go-subjects-btn">Choose Subject</button>

    <div class="home-stats">
      <p class="home-stats-title">What this app does</p>
      <p class="home-stats-text">
        Practice multiple-choice questions, review explanations, and study by subject.
      </p>
    </div>
  `;

  document.getElementById("go-subjects-btn").addEventListener("click", showSubjectPage);
}

function showSubjectPage() {
  appContainer.innerHTML = `
    <h1 class="section-title">Select a Subject</h1>
    <div id="subject-list" class="subject-list"></div>
    <button id="back-home-btn">Back</button>
  `;

  const subjectList = document.getElementById("subject-list");

  subjects.forEach((subject, index) => {
    subjectList.innerHTML += `
      <button class="subject-card" onclick="startSubject(${index})">
        <div class="subject-card-title">${subject.name}</div>
        <div class="subject-card-desc">Tap to start practice</div>
      </button>
    `;
  });

  document.getElementById("back-home-btn").addEventListener("click", showHomePage);
}

function startSubject(subjectIndex) {
  currentSubject = subjectIndex;
  currentPassage = 0;
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function showQuestion() {
  const subject = subjects[currentSubject];
  const passage = subject.passages[currentPassage];
  const q = passage.questions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / passage.questions.length) * 100;

  currentShuffledChoices = shuffleArray(q.choices);

  appContainer.innerHTML = `
    <h2>${subject.name}</h2>
    <p class="progress-text">
      Question ${currentQuestion + 1} of ${passage.questions.length}
    </p>

    <div class="progress-bar-container">
  <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
</div>

    <h3>${passage.title}</h3>
    <p class="passage-text">${passage.text}</p>

    <hr>

    <p>${q.prompt}</p>

    ${currentShuffledChoices.map((choice, i) => `
      <button class="answer-btn" onclick="selectAnswer(${i})">
        ${indexToLetters[i]}: ${choice.text}
      </button>
    `).join("")}
  `;
}

function selectAnswer(i) {
  const subject = subjects[currentSubject];
  const q = subject.passages[currentPassage].questions[currentQuestion];
  const buttons = appContainer.querySelectorAll(".answer-btn");
  const selectedChoice = currentShuffledChoices[i];
  let correctIndex = -1;

  buttons.forEach((btn, index) => {
    if (currentShuffledChoices[index].correct) {
      btn.classList.add("correct");
      correctIndex = index;
    } else if (index === i) {
      btn.classList.add("wrong");
    }

    btn.disabled = true;
  });

  if (selectedChoice.correct) {
    score++;
  }

  appContainer.innerHTML += `
  <div class="feedback-box">
    <p><strong>Your Choice:</strong> ${indexToLetters[i]}: ${currentShuffledChoices[i].text}</p>
    <p><strong>Answer:</strong> ${indexToLetters[correctIndex]}: ${currentShuffledChoices[correctIndex].text}</p>
    <p><strong>Explanation:</strong> Answer choice ${indexToLetters[i]}${selectedChoice.choiceExplanation}</p>
  </div>
  <button id="next-btn" onclick="nextQuestion()">Next</button>
`;
}

function getTotalQuestionsForCurrentSubject() {
  return subjects[currentSubject].passages.reduce((total, passage) => {
    return total + passage.questions.length;
  }, 0);
}

function nextQuestion() {
  const subject = subjects[currentSubject];
  const passage = subject.passages[currentPassage];

  currentQuestion++;

  if (currentQuestion < passage.questions.length) {
    showQuestion();
    return;
  }

  currentPassage++;
  currentQuestion = 0;

  if (currentPassage < subject.passages.length) {
    showQuestion();
    return;
  }

  appContainer.innerHTML = `
    <h2>${subject.name} Complete</h2>
    <p>Final Score: ${score}/${getTotalQuestionsForCurrentSubject()}</p>
    <button onclick="showSubjectPage()">Choose Another Subject</button>
    <button onclick="showHomePage()">Home</button>
  `;
}

showHomePage();
