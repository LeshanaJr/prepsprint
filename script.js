const subjects = [
  {
    name: "AP Lang",

    rapidQuestions: [
{
  prompt: "What does a 'critical' tone most nearly mean?",
  choices: [
    { text: "Strongly approving", correct: false, choiceExplanation: " is incorrect because approving is the opposite of critical." },
    { text: "Evaluating and pointing out flaws", correct: true, choiceExplanation: " is correct because a critical tone analyzes and critiques ideas." },
    { text: "Confused and uncertain", correct: false, choiceExplanation: " is incorrect because critical does not imply confusion." },
    { text: "Playful and humorous", correct: false, choiceExplanation: " is incorrect because humor is not necessarily critical." }
  ],
  category: "tone"
},
{
  prompt: "Which best describes an author's claim?",
  choices: [
    { text: "A minor detail", correct: false, choiceExplanation: " is incorrect because a claim is the main argument." },
    { text: "The central argument", correct: true, choiceExplanation: " is correct because a claim is the main point being argued." },
    { text: "A random quote", correct: false, choiceExplanation: " is incorrect because a claim is not just a quote." },
    { text: "A background fact", correct: false, choiceExplanation: " is incorrect because a claim is argumentative." }
  ],
  category: "main idea"
},
{
  prompt: "What is the purpose of a rhetorical question?",
  choices: [
    { text: "To confuse the reader", correct: false, choiceExplanation: " is incorrect because rhetorical questions clarify or persuade." },
    { text: "To make the reader think", correct: true, choiceExplanation: " is correct because rhetorical questions engage the audience." },
    { text: "To provide data", correct: false, choiceExplanation: " is incorrect because rhetorical questions are not evidence." },
    { text: "To summarize", correct: false, choiceExplanation: " is incorrect because rhetorical questions are not summaries." }
  ],
  category: "rhetoric"
},
{
  prompt: "Which appeal relies on credibility?",
  choices: [
    { text: "Pathos", correct: false, choiceExplanation: " is incorrect because pathos appeals to emotion." },
    { text: "Logos", correct: false, choiceExplanation: " is incorrect because logos appeals to logic." },
    { text: "Ethos", correct: true, choiceExplanation: " is correct because ethos establishes credibility." },
    { text: "Syntax", correct: false, choiceExplanation: " is incorrect because syntax is sentence structure." }
  ],
  category: "rhetoric"
},
{
  prompt: "What does 'diction' refer to?",
  choices: [
    { text: "Sentence length", correct: false, choiceExplanation: " is incorrect because that is syntax." },
    { text: "Word choice", correct: true, choiceExplanation: " is correct because diction refers to word choice." },
    { text: "Paragraph order", correct: false, choiceExplanation: " is incorrect because that is organization." },
    { text: "Tone only", correct: false, choiceExplanation: " is incorrect because diction influences tone but is not the same." }
  ],
  category: "style"
},
{
  prompt: "Which best describes 'syntax'?",
  choices: [
    { text: "Word meaning", correct: false, choiceExplanation: " is incorrect because that is diction." },
    { text: "Sentence structure", correct: true, choiceExplanation: " is correct because syntax is how sentences are arranged." },
    { text: "Tone", correct: false, choiceExplanation: " is incorrect because syntax contributes to tone but is not tone itself." },
    { text: "Grammar errors", correct: false, choiceExplanation: " is incorrect because syntax is not just errors." }
  ],
  category: "style"
},
{
  prompt: "Which best describes 'logos'?",
  choices: [
    { text: "Emotional appeal", correct: false, choiceExplanation: " is incorrect because that is pathos." },
    { text: "Logical reasoning", correct: true, choiceExplanation: " is correct because logos appeals to logic." },
    { text: "Speaker credibility", correct: false, choiceExplanation: " is incorrect because that is ethos." },
    { text: "Humor", correct: false, choiceExplanation: " is incorrect because humor is not logos." }
  ],
  category: "rhetoric"
},
{
  prompt: "A 'satirical' tone is best described as:",
  choices: [
    { text: "Serious and formal", correct: false, choiceExplanation: " is incorrect because satire is not purely serious." },
    { text: "Mocking to expose flaws", correct: true, choiceExplanation: " is correct because satire criticizes through humor." },
    { text: "Neutral and objective", correct: false, choiceExplanation: " is incorrect because satire is not neutral." },
    { text: "Confused", correct: false, choiceExplanation: " is incorrect because satire is intentional." }
  ],
  category: "tone"
},
{
  prompt: "What is a counterargument?",
  choices: [
    { text: "The author's main claim", correct: false, choiceExplanation: " is incorrect because a counterargument opposes the claim." },
    { text: "An opposing viewpoint", correct: true, choiceExplanation: " is correct because it presents the other side." },
    { text: "A summary", correct: false, choiceExplanation: " is incorrect because it is not a summary." },
    { text: "A conclusion", correct: false, choiceExplanation: " is incorrect because it is not the ending." }
  ],
  category: "argument"
},
{
  prompt: "What does 'pathos' appeal to?",
  choices: [
    { text: "Logic", correct: false, choiceExplanation: " is incorrect because that is logos." },
    { text: "Emotion", correct: true, choiceExplanation: " is correct because pathos appeals to feelings." },
    { text: "Credibility", correct: false, choiceExplanation: " is incorrect because that is ethos." },
    { text: "Structure", correct: false, choiceExplanation: " is incorrect because structure is not pathos." }
  ],
  category: "rhetoric"
},
{
  prompt: "Which best describes 'tone'?",
  choices: [
    { text: "The author's attitude", correct: true, choiceExplanation: " is correct because tone reflects attitude." },
    { text: "The main idea", correct: false, choiceExplanation: " is incorrect because tone is not the claim." },
    { text: "Sentence structure", correct: false, choiceExplanation: " is incorrect because that is syntax." },
    { text: "Grammar rules", correct: false, choiceExplanation: " is incorrect because tone is not grammar." }
  ],
  category: "tone"
},
{
  prompt: "What is the function of evidence?",
  choices: [
    { text: "To weaken the argument", correct: false, choiceExplanation: " is incorrect because evidence strengthens arguments." },
    { text: "To support a claim", correct: true, choiceExplanation: " is correct because evidence backs up the argument." },
    { text: "To confuse the reader", correct: false, choiceExplanation: " is incorrect because evidence clarifies." },
    { text: "To summarize", correct: false, choiceExplanation: " is incorrect because evidence is not summary." }
  ],
  category: "argument"
},
{
  prompt: "Which is an example of figurative language?",
  choices: [
    { text: "Literal statement", correct: false, choiceExplanation: " is incorrect because figurative language is non-literal." },
    { text: "Metaphor", correct: true, choiceExplanation: " is correct because metaphor compares unlike things." },
    { text: "Fact", correct: false, choiceExplanation: " is incorrect because facts are literal." },
    { text: "Statistic", correct: false, choiceExplanation: " is incorrect because statistics are literal." }
  ],
  category: "style"
},
{
  prompt: "What does 'bias' mean?",
  choices: [
    { text: "Complete neutrality", correct: false, choiceExplanation: " is incorrect because bias is not neutral." },
    { text: "A preference or prejudice", correct: true, choiceExplanation: " is correct because bias reflects a leaning." },
    { text: "A summary", correct: false, choiceExplanation: " is incorrect because bias is not summary." },
    { text: "A tone", correct: false, choiceExplanation: " is incorrect because bias is not tone itself." }
  ],
  category: "argument"
},
{
  prompt: "What is 'purpose' in rhetoric?",
  choices: [
    { text: "The audience", correct: false, choiceExplanation: " is incorrect because audience is separate." },
    { text: "The reason the author writes", correct: true, choiceExplanation: " is correct because purpose is the author's goal." },
    { text: "The structure", correct: false, choiceExplanation: " is incorrect because structure is different." },
    { text: "The tone", correct: false, choiceExplanation: " is incorrect because tone is attitude." }
  ],
  category: "rhetoric"
},
{
  prompt: "Which best describes a concession?",
  choices: [
    { text: "Ignoring the opposition", correct: false, choiceExplanation: " is incorrect because concession acknowledges it." },
    { text: "Acknowledging opposing views", correct: true, choiceExplanation: " is correct because concession admits the other side." },
    { text: "Ending the argument", correct: false, choiceExplanation: " is incorrect because concession is not the conclusion." },
    { text: "Changing the topic", correct: false, choiceExplanation: " is incorrect because concession stays on topic." }
  ],
  category: "argument"
},
{
  prompt: "What is 'audience'?",
  choices: [
    { text: "The author's tone", correct: false, choiceExplanation: " is incorrect because audience is the reader." },
    { text: "The intended readers", correct: true, choiceExplanation: " is correct because audience is who the text targets." },
    { text: "The argument", correct: false, choiceExplanation: " is incorrect because argument is separate." },
    { text: "The evidence", correct: false, choiceExplanation: " is incorrect because evidence is support." }
  ],
  category: "rhetoric"
},
{
  prompt: "Which choice best defines 'parallelism'?",
  choices: [
    { text: "Repeating structure for effect", correct: true, choiceExplanation: " is correct because parallelism repeats structure." },
    { text: "Changing topics suddenly", correct: false, choiceExplanation: " is incorrect because that is not parallelism." },
    { text: "Using only short sentences", correct: false, choiceExplanation: " is incorrect because parallelism is about structure." },
    { text: "Adding emotion", correct: false, choiceExplanation: " is incorrect because that is pathos." }
  ],
  category: "style"
},
{
  prompt: "What does 'exigence' mean?",
  choices: [
    { text: "The audience", correct: false, choiceExplanation: " is incorrect because exigence is the situation." },
    { text: "The reason the text exists", correct: true, choiceExplanation: " is correct because exigence is what prompted the writing." },
    { text: "The tone", correct: false, choiceExplanation: " is incorrect because tone is attitude." },
    { text: "The structure", correct: false, choiceExplanation: " is incorrect because structure is different." }
  ],
  category: "rhetoric"
},
{
  prompt: "Which best describes 'formal tone'?",
  choices: [
    { text: "Casual and slang-filled", correct: false, choiceExplanation: " is incorrect because formal tone avoids slang." },
    { text: "Professional and structured", correct: true, choiceExplanation: " is correct because formal tone is polished." },
    { text: "Joking and playful", correct: false, choiceExplanation: " is incorrect because that is informal." },
    { text: "Angry and emotional", correct: false, choiceExplanation: " is incorrect because formal tone is controlled." }
  ],
  category: "tone"
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
let weakAreaQuestions = [];
let weakAreaQuestionIndex = 0;
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

function getSubjectDescription(subjectName) {
  if (subjectName === "AP Lang") {
    return "Questions on rhetoric, argument, tone, and style.";
  }

  if (subjectName === "AP World") {
    return "Questions on historical thinking, trade, and global change.";
  }

  return "Practice questions by subject";
}

function getSubjectIcon(subjectName) {
  if (subjectName === "AP Lang") return "📘";
  if (subjectName === "AP World") return "🌍";
  return "📚";
}

function showSubjectPage() {
  appContainer.innerHTML = `
    <div class="subject-page-header">
      <h1 class="section-title">Choose a Subject</h1>
      <p class="subject-page-subtitle">Pick a class, then choose how you want to practice.</p>
    </div>

    <div id="subject-list" class="subject-list"></div>

    <button id="back-home-btn">Back</button>
  `;

  const subjectList = document.getElementById("subject-list");

  subjects.forEach((subject, index) => {
    subjectList.innerHTML += `
      <div class="subject-card">
        <div class="subject-card-top">
          <div>
<div class="subject-card-title">${getSubjectIcon(subject.name)} ${subject.name}</div>
            <div class="subject-card-desc">${getSubjectDescription(subject.name)}</div>
          </div>
        </div>

        <div class="subject-mode-group">
          <button class="mode-btn standard-btn" onclick="startSubject(${index}, 'standard')">
            Standard Practice
          </button>

          <button class="mode-btn rapid-btn" onclick="startSubject(${index}, 'rapid')">
            Rapid Fire
          </button>
        </div>
      </div>
    `;
  });

  document.getElementById("back-home-btn").addEventListener("click", showHomePage);
}

function getQuestionsByCategories(subjectIndex, categories) {
  const subject = subjects[subjectIndex];
  const matchingQuestions = [];

  subject.passages.forEach((passage) => {
    passage.questions.forEach((question) => {
      if (categories.includes(question.category)) {
        matchingQuestions.push({
          ...question,
          sourceType: "standard",
          passageTitle: passage.title,
          passageText: passage.text
        });
      }
    });
  });

  (subject.rapidQuestions || []).forEach((question) => {
    if (categories.includes(question.category)) {
      matchingQuestions.push({
        ...question,
        sourceType: "rapid"
      });
    }
  });

  return matchingQuestions;
}

function getTopWeakCategories(limit = 2) {
  const entries = Object.entries(weakPoints);

  if (entries.length === 0) {
    return [];
  }

  entries.sort((a, b) => b[1] - a[1]);

  return entries.slice(0, limit).map(([category]) => category);
}

function startSubject(subjectIndex, mode = "standard") {
  currentSubject = subjectIndex;
  currentPassage = 0;
  currentQuestion = 0;
  score = 0;
  currentMode = mode;
  rapidStreak = 0;
  bestRapidStreak = 0;

  if (mode === "rapid") {
    weakPoints = {};
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

  if (mode === "weak") {
    const topCategories = getTopWeakCategories(2);
    weakAreaQuestions = shuffleArray(getQuestionsByCategories(subjectIndex, topCategories));
    weakAreaQuestionIndex = 0;
    score = 0;

    if (weakAreaQuestions.length === 0) {
      appContainer.innerHTML = `
        <h2>${subjects[subjectIndex].name}</h2>
        <p>No weak-area questions are available yet.</p>
        <button onclick="showSubjectPage()">Back to Subjects</button>
        <button onclick="showHomePage()">Home</button>
      `;
      return;
    }

    showWeakAreaQuestion();
    return;
  }

  weakPoints = {};
  showQuestion();
}

function showWeakAreaQuestion() {
  const subject = subjects[currentSubject];
  const q = weakAreaQuestions[weakAreaQuestionIndex];
  const progressPercent = ((weakAreaQuestionIndex + 1) / weakAreaQuestions.length) * 100;

  currentShuffledChoices = shuffleArray(q.choices);

  appContainer.innerHTML = `
    <h2>${subject.name}</h2>
    <p class="progress-text">
      Practice Weak Areas • Question ${weakAreaQuestionIndex + 1} of ${weakAreaQuestions.length}
    </p>

    <div class="progress-bar-container">
      <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
    </div>

    ${q.passageTitle ? `<h3>${q.passageTitle}</h3>` : ""}
    ${q.passageText ? `<p class="passage-text">${q.passageText}</p><hr>` : ""}

    <p><strong>Focus:</strong> ${q.category}</p>
    <p>${q.prompt}</p>

    ${currentShuffledChoices.map((choice, i) => `
      <button class="answer-btn" onclick="selectWeakAreaAnswer(${i})">
        ${indexToLetters[i]}: ${choice.text}
      </button>
    `).join("")}
  `;
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

function selectWeakAreaAnswer(i) {
  const q = weakAreaQuestions[weakAreaQuestionIndex];
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
    <button id="next-btn" onclick="nextWeakAreaQuestion()">Next</button>
  `;
}

function nextWeakAreaQuestion() {
  weakAreaQuestionIndex++;

  if (weakAreaQuestionIndex < weakAreaQuestions.length) {
    showWeakAreaQuestion();
    return;
  }

  appContainer.innerHTML = `
    <h2>${subjects[currentSubject].name} Weak Areas Complete</h2>
    <p>Final Score: ${score}/${weakAreaQuestions.length}</p>
    <p>${getResultMessage(score, weakAreaQuestions.length)}</p>
    <button onclick="startSubject(currentSubject, 'weak')">Practice Weak Areas Again</button>
    <button onclick="startSubject(currentSubject, 'standard')">Back to Standard Practice</button>
    <button onclick="showSubjectPage()">Choose Another Subject</button>
    <button onclick="showHomePage()">Home</button>
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
    <button onclick="startSubject(currentSubject, 'weak')">Practice Weak Areas</button>
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
  <p>You can retry this section, practice your weak areas, or test your knowledge on another AP class.</p>
  <button onclick="startSubject(currentSubject, 'weak')">Practice Weak Areas</button>
<button onclick="startSubject(currentSubject, 'standard')">Retry Subject</button>
<button onclick="showSubjectPage()">Choose Another Subject</button>
<button onclick="showHomePage()">Home</button>
`;
}

showHomePage();
