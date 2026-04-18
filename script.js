const subjects = [
  {
    name: "AP Lang",

    rapidQuestions: [
      {
        prompt: "Which choice best describes a critical tone?",
        choices: [
          { text: "Strongly approving", correct: false, choiceExplanation: " is incorrect because approving is the opposite of critical." },
          { text: "Evaluative and fault-finding", correct: true, choiceExplanation: " is correct because a critical tone evaluates and points out flaws." },
          { text: "Playful and joking", correct: false, choiceExplanation: " is incorrect because playful does not mean critical." },
          { text: "Confused and uncertain", correct: false, choiceExplanation: " is incorrect because critical does not necessarily mean confused." }
        ],
        category: "tone"
      },
      {
        prompt: "Which choice best describes an author's main claim?",
        choices: [
          { text: "A random detail", correct: false, choiceExplanation: " is incorrect because a claim is the author's main point, not a random detail." },
          { text: "The central argument being made", correct: true, choiceExplanation: " is correct because a claim is the author's main argument." },
          { text: "A quote from another source", correct: false, choiceExplanation: " is incorrect because a claim is not just any quote." },
          { text: "A grammar rule", correct: false, choiceExplanation: " is incorrect because a claim is about argument, not grammar." }
        ],
        category: "main idea"
      }
    ],
    
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

  rapidQuestions: [
    {
      prompt: "Which development most directly increased cultural exchange across regions?",
      choices: [
        { text: "Isolation", correct: false, choiceExplanation: " is incorrect because isolation reduces exchange." },
        { text: "Trade networks", correct: true, choiceExplanation: " is correct because trade networks connected different regions." },
        { text: "Crop failure", correct: false, choiceExplanation: " is incorrect because crop failure does not directly increase cultural exchange." },
        { text: "Local disputes", correct: false, choiceExplanation: " is incorrect because local disputes do not usually expand exchange." }
      ],
      category: "trade"
    }
  ],

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
let weakPoints = {};
let currentMode = "";
let rapidQuestions = [];
let rapidQuestionIndex = 0;
let rapidAdvanceDelay = 1000;
let rapidStreak = 0;
let bestRapidStreak = 0;
const indexToLetters = ["A", "B", "C", "D"];

function showHomePage() {
  appContainer.innerHTML = `
    <div class="home-header">
      <h1 class="app-title">PrepSprint</h1>
      <p class="app-subtitle">A fast, free, and reliable way to study for your AP exams from the comfort of your phone.</p>
    </div>

    <button id="go-subjects-btn">Choose Subject</button>

    <div class="home-stats">
      <p class="home-stats-title">What is PrepSprint?</p>
      <p class="home-stats-text">
        PrepSprint is a digital tool that I made to help people study for their AP exams. With PrepSprint, you can:
        </p>
    
      <p class="home-stats-text">  • Practice multiple-choice questions<br>
        • Review explanations<br>
        • Study by subject</p>
        
      <p class="home-stats-text"> 
      As of right now, PrepSprint only has a very limited selection of AP Lang and AP World questions. Within the next week, I intend on adding more questions for not only these subjects, but other popular AP classes such as AP Chem, AP Precalc, AP Psych, and AP Bio.
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
    <div class="subject-card">
      <div class="subject-card-title">${subject.name}</div>
      <div class="subject-card-desc">Choose a study mode</div>

      <button class="subject-btn" onclick="startSubject(${index}, 'standard')">
        Standard Practice
      </button>

      <button class="subject-btn" onclick="startSubject(${index}, 'rapid')">
        Rapid Fire
      </button>
    </div>
  `;
});

  document.getElementById("back-home-btn").addEventListener("click", showHomePage);
}

function startSubject(subjectIndex, mode = "standard") {
  currentSubject = subjectIndex;
  currentPassage = 0;
  currentQuestion = 0;
  score = 0;
  weakPoints = {};
  currentMode = mode;
  rapidStreak = 0;
  bestRapidStreak = 0;

  if (mode === "rapid") {
    rapidQuestions = shuffleArray(subjects[subjectIndex].rapidQuestions || []);
    rapidQuestionIndex = 0;

    if (rapidQuestions.length === 0) {
      appContainer.innerHTML = `
        <h2>${subjects[subjectIndex].name}</h2>
        <p>Rapid Fire questions are not available for this subject yet.</p>
        <button onclick="showSubjectPage()">Back to Subjects</button>
        <button onclick="showHomePage()">Home</button>
      `;
      return;
    }

    showRapidQuestion();
    return;
  }

  showQuestion();
}

function showRapidQuestion() {
  const subject = subjects[currentSubject];
  const q = rapidQuestions[rapidQuestionIndex];
  const progressPercent = ((rapidQuestionIndex + 1) / rapidQuestions.length) * 100;

  currentShuffledChoices = shuffleArray(q.choices);

  appContainer.innerHTML = `
    <h2>${subject.name}</h2>
    <p class="progress-text">
  Rapid Fire • Question ${rapidQuestionIndex + 1} of ${rapidQuestions.length} • Streak: ${rapidStreak}
</p>

    <div class="progress-bar-container">
      <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
    </div>

    <p>${q.prompt}</p>

    ${currentShuffledChoices.map((choice, i) => `
      <button class="answer-btn" onclick="selectRapidAnswer(${i})">
        ${indexToLetters[i]}: ${choice.text}
      </button>
    `).join("")}
  `;
}

function selectRapidAnswer(i) {
  const q = rapidQuestions[rapidQuestionIndex];
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
  rapidStreak++;
  if (rapidStreak > bestRapidStreak) {
    bestRapidStreak = rapidStreak;
  }
} else {
  const category = q.category;
  weakPoints[category] = (weakPoints[category] || 0) + 1;
  rapidStreak = 0;
}

  appContainer.innerHTML += `
    <div class="feedback-box">
      <p><strong>${selectedChoice.correct ? "Correct" : "Incorrect"}</strong></p>
    </div>
  `;

  setTimeout(() => {
    nextRapidQuestion();
  }, rapidAdvanceDelay);
}

function nextRapidQuestion() {
  rapidQuestionIndex++;

  if (rapidQuestionIndex < rapidQuestions.length) {
    showRapidQuestion();
    return;
  }

  appContainer.innerHTML = `
    <h2>${subjects[currentSubject].name} Rapid Fire Complete</h2>
    <p>Final Score: ${score}/${rapidQuestions.length}</p>
    <p>Best Streak: ${bestRapidStreak}</p>
    <p>${getResultMessage(score, rapidQuestions.length)}</p>
    <p><strong>Focus on:</strong> ${getWeakPointSummary()}</p>
    <button onclick="startSubject(currentSubject, 'rapid')">Retry Rapid Fire</button>
    <button onclick="startSubject(currentSubject, 'standard')">Try Standard Practice</button>
    <button onclick="showSubjectPage()">Choose Another Subject</button>
    <button onclick="showHomePage()">Home</button>
  `;
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
  } else {
  const category = q.category;
  weakPoints[category] = (weakPoints[category] || 0) + 1;
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

function getResultMessage(score, total) {
  const percent = score / total;

  if (percent === 1) return "Perfect score! If these exact questions were on the real AP exam, you'd get a 5.";
  if (percent >= 0.8) return "Good job! If these exact questions were on the real AP exam, you'd get a 4.";
  if (percent >= 0.6) return "This is a solid start, make sure to review the ones you missed. If these exact questions were on the real AP exam, you'd get a 3.";
  return "Remember that practice makes perfect. Keep studying and answering questions, and you'll definitely improve your score.";
}

function getWeakPointSummary() {
  const entries = Object.entries(weakPoints);

  if (entries.length === 0) {
    return "No major weak points so far.";
  }

  entries.sort((a, b) => b[1] - a[1]);

  return entries
    .map(([category, count]) => `${category} (${count} missed)`)
    .join(", ");
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
  <p>${getResultMessage(score, getTotalQuestionsForCurrentSubject())}</p>
  <p><strong>Focus on:</strong> ${getWeakPointSummary()}</p>
  <p>You can retry this section, or test your knowledge on another AP class.</p>
  <button onclick="startSubject(currentSubject, 'standard')">Retry Subject</button>
  <button onclick="showSubjectPage()">Choose Another Subject</button>
  <button onclick="showHomePage()">Home</button>
`;
}

showHomePage();
