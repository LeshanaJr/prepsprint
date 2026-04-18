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
    <h1>PrepSprint</h1>
    <p>Quick AP practice on your phone.</p>
    <button id="go-subjects-btn">Choose Subject</button>
  `;

  document.getElementById("go-subjects-btn").addEventListener("click", showSubjectPage);
}

function showSubjectPage() {
  appContainer.innerHTML = `
    <h1>Select a Subject</h1>
    <div id="subject-list"></div>
    <button id="back-home-btn">Back</button>
  `;

  const subjectList = document.getElementById("subject-list");

  subjects.forEach((subject, index) => {
    subjectList.innerHTML += `
      <button class="subject-btn" onclick="startSubject(${index})">
        ${subject.name}
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

  currentShuffledChoices = shuffleArray(q.choices);

  appContainer.innerHTML = `
    <h2>${subject.name}</h2>
    <h3>${passage.title}</h3>
    <p class="passage-text">${passage.text}</p>
    <hr>
    <p><strong>Question ${currentQuestion + 1}</strong></p>
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
    <p><strong>Your Choice:</strong> ${indexToLetters[i]}: ${currentShuffledChoices[i].text}</p>
    <p><strong>Answer:</strong> ${indexToLetters[correctIndex]}: ${currentShuffledChoices[correctIndex].text}</p>
    <p><strong>Explanation:</strong> Answer choice ${indexToLetters[i]}${selectedChoice.choiceExplanation}</p>
    <button id="next-btn" onclick="nextQuestion()">Next</button>
  `;
}

function nextQuestion() {
  currentQuestion++;

  const subject = subjects[currentSubject];
  const passage = subject.passages[currentPassage];

  if (currentQuestion < passage.questions.length) {
    showQuestion();
  } else {
    appContainer.innerHTML = `
      <h2>${subject.name} Complete</h2>
      <p>Score: ${score}/${passage.questions.length}</p>
      <button onclick="showSubjectPage()">Choose Another Subject</button>
      <button onclick="showHomePage()">Home</button>
    `;
  }
}

showHomePage();
