const MODE_CONFIG = {
  standard: {
    label: "Standard Practice",
    autoAdvance: false,
    showPassage: true
  },
  rapid: {
    label: "Rapid Fire",
    autoAdvance: true,
    showPassage: false
  },
  weak: {
    label: "Practice Weak Areas",
    autoAdvance: false,
    showPassage: true
  },
  missed: {
    label: "Review Missed Questions",
    autoAdvance: false,
    showPassage: true
  }
};

const appContainer = document.getElementById("app-container");
const indexToLetters = ["A", "B", "C", "D"];

let currentSubject = 0;
let currentPassage = 0;
let currentQuestion = 0;
let currentMode = "standard";

let score = 0;
let currentShuffledChoices = [];
let weakPoints = {};

let rapidQuestions = [];
let rapidQuestionIndex = 0;
let rapidAdvanceDelay = 1000;
let rapidStreak = 0;
let bestRapidStreak = 0;

let weakAreaQuestions = [];
let weakAreaQuestionIndex = 0;

let missedQuestions = [];
let missedQuestionIndex = 0;
let missedReviewStartTotal = 0;

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function getSubjectDescription(subjectName) {
  if (subjectName === "AP Lang") return "Questions on rhetoric, argument, tone, and style.";
  if (subjectName === "AP World") return "Questions on historical thinking, trade, and global change.";
  return "Practice questions by subject.";
}

function getSubjectIcon(subjectName) {
  if (subjectName === "AP Lang") return "📘";
  if (subjectName === "AP World") return "🌍";
  return "📚";
}

function getTotalQuestionsForCurrentSubject() {
  return subjects[currentSubject].passages.reduce((total, passage) => {
    return total + passage.questions.length;
  }, 0);
}

function getResultMessage(scoreValue, total) {
  const percent = scoreValue / total;

  if (percent === 1) return "Perfect score! If these exact questions were on the real AP exam, you'd get a 5.";
  if (percent >= 0.8) return "Good job! If these exact questions were on the real AP exam, you'd get a 4.";
  if (percent >= 0.6) return "This is a solid start. Review the ones you missed. If these exact questions were on the real AP exam, you'd get a 3.";
  return "Practice makes perfect. Keep answering questions and you'll improve.";
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

function getTopWeakCategories(limit = 2) {
  const entries = Object.entries(weakPoints);

  if (entries.length === 0) {
    return [];
  }

  entries.sort((a, b) => b[1] - a[1]);

  return entries.slice(0, limit).map(([category]) => category);
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

function getCurrentQuestionList() {
  if (currentMode === "rapid") return rapidQuestions;
  if (currentMode === "weak") return weakAreaQuestions;
  if (currentMode === "missed") return missedQuestions;

  return subjects[currentSubject].passages[currentPassage].questions;
}

function getCurrentQuestionIndex() {
  if (currentMode === "rapid") return rapidQuestionIndex;
  if (currentMode === "weak") return weakAreaQuestionIndex;

  return currentQuestion;
}

function renderUnavailableScreen(subjectIndex, message) {
  appContainer.innerHTML = `
    <h2>${subjects[subjectIndex].name}</h2>
    <p>${message}</p>
    <button onclick="showSubjectPage()">Back to Subjects</button>
    <button onclick="showHomePage()">Home</button>
  `;
}

function showHomePage() {
  appContainer.innerHTML = `
    <div class="home-header">
      <h1 class="app-title">PrepSprint</h1>
      <p class="app-subtitle">Fast, free AP practice built for your phone.</p>
    </div>

    <div class="home-stats">
      <p class="home-stats-title">What is PrepSprint?</p>
      <p class="home-stats-text">
        PrepSprint helps you study with multiple-choice practice, explanations, and subject-based review modes.
      </p>
    </div>

    <div class="subject-card" style="margin-top: 18px;">
      <div class="subject-card-top">
        <div class="subject-card-title">Start Practicing</div>
        <div class="subject-card-desc">
          Choose a subject and pick a mode that fits how you want to study.
        </div>
      </div>

      <div class="subject-mode-group">
        <button id="go-subjects-btn" class="mode-btn standard-btn">Choose Subject</button>
      </div>
    </div>
  `;

  document.getElementById("go-subjects-btn").addEventListener("click", showSubjectPage);
}

function showSubjectPage() {
  appContainer.innerHTML = `
    <div class="subject-page-header">
      <h1 class="section-title">Choose a Subject</h1>
      <p class="subject-page-subtitle">
        Pick a class, then choose how you want to practice.
      </p>
    </div>

    <div id="subject-list" class="subject-list"></div>
    <button id="back-home-btn">Back</button>
  `;

  const subjectList = document.getElementById("subject-list");

  subjects.forEach((subject, index) => {
    subjectList.innerHTML += `
      <div class="subject-card">
        <div class="subject-card-top">
          <div class="subject-card-title">${getSubjectIcon(subject.name)} ${subject.name}</div>
          <div class="subject-card-desc">${getSubjectDescription(subject.name)}</div>
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

function startSubject(subjectIndex, mode = "standard") {
  currentSubject = subjectIndex;
  currentPassage = 0;
  currentQuestion = 0;
  score = 0;
  currentMode = mode;
  currentShuffledChoices = [];
  rapidStreak = 0;
  bestRapidStreak = 0;

  if (mode === "standard") {
    weakPoints = {};
    missedQuestions = [];
    missedQuestionIndex = 0;
    renderQuestionScreen();
    return;
  }

  if (mode === "rapid") {
    weakPoints = {};
    missedQuestions = [];
    missedQuestionIndex = 0;
    rapidQuestions = shuffleArray(subjects[subjectIndex].rapidQuestions || []);
    rapidQuestionIndex = 0;

    if (!rapidQuestions.length) {
      renderUnavailableScreen(subjectIndex, "Rapid Fire questions are not available for this subject yet.");
      return;
    }

    renderQuestionScreen();
    return;
  }

  if (mode === "weak") {
    const topCategories = getTopWeakCategories(2);
    weakAreaQuestions = shuffleArray(getQuestionsByCategories(subjectIndex, topCategories));
    weakAreaQuestionIndex = 0;

    if (!weakAreaQuestions.length) {
      renderUnavailableScreen(subjectIndex, "No weak-area questions are available yet.");
      return;
    }

    renderQuestionScreen();
    return;
  }

 if (mode === "missed") {
  missedQuestionIndex = 0;

  if (!missedQuestions.length) {
    renderUnavailableScreen(subjectIndex, "No missed questions are available yet.");
    return;
  }

  missedReviewStartTotal = missedQuestions.length;
  renderQuestionScreen();
}
}

function renderQuestionScreen() {
  const subject = subjects[currentSubject];
  const questionList = getCurrentQuestionList();
  const questionIndex = getCurrentQuestionIndex();
  const q = questionList[questionIndex];
  const config = MODE_CONFIG[currentMode];
  const progressPercent = ((questionIndex + 1) / questionList.length) * 100;

  currentShuffledChoices = shuffleArray(q.choices);

  const showPassage = config.showPassage && q.passageText;

  appContainer.innerHTML = `
    <h2>${subject.name}</h2>
    <p class="progress-text">
      ${config.label} • Question ${questionIndex + 1} of ${questionList.length}
      ${currentMode === "rapid" ? ` • Streak: ${rapidStreak}` : ""}
    </p>

    <div class="progress-bar-container">
      <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
    </div>

    ${showPassage ? `<h3>${q.passageTitle || ""}</h3>` : ""}
    ${showPassage ? `<p class="passage-text">${q.passageText}</p><hr>` : ""}

    ${currentMode === "weak" ? `<p><strong>Focus:</strong> ${q.category}</p>` : ""}
    <p>${q.prompt}</p>

    ${currentShuffledChoices.map((choice, i) => `
      <button class="answer-btn" onclick="handleAnswer(${i})">
        ${indexToLetters[i]}: ${choice.text}
      </button>
    `).join("")}
  `;
}

function handleAnswer(i) {
  const questionList = getCurrentQuestionList();
  const questionIndex = getCurrentQuestionIndex();
  const q = questionList[questionIndex];
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

  if (currentMode === "rapid") {
    rapidStreak++;
    if (rapidStreak > bestRapidStreak) {
      bestRapidStreak = rapidStreak;
    }
  }

  if (currentMode === "missed") {
    missedQuestions = missedQuestions.filter((question) => question.prompt !== q.prompt);
  }
} else {
  weakPoints[q.category] = (weakPoints[q.category] || 0) + 1;

  if (currentMode === "rapid") {
    rapidStreak = 0;
  }

  const alreadySaved = missedQuestions.some((question) => question.prompt === q.prompt);

  if (!alreadySaved) {
    missedQuestions.push({
      ...q
    });
  }
}

  if (currentMode === "missed" && !selectedChoice.correct) {
  missedQuestionIndex++;
}

  if (currentMode === "rapid") {
    appContainer.innerHTML += `
      <div class="feedback-box">
        <p><strong>${selectedChoice.correct ? "Correct" : "Incorrect"}</strong></p>
      </div>
    `;

    setTimeout(() => {
      goToNextQuestion();
    }, rapidAdvanceDelay);

    return;
  }

  appContainer.innerHTML += `
    <div class="feedback-box">
      <p><strong>Your Choice:</strong> ${indexToLetters[i]}: ${currentShuffledChoices[i].text}</p>
      <p><strong>Answer:</strong> ${indexToLetters[correctIndex]}: ${currentShuffledChoices[correctIndex].text}</p>
      <p><strong>Explanation:</strong> Answer choice ${indexToLetters[i]}${selectedChoice.choiceExplanation}</p>
    </div>
    <button id="next-btn" onclick="goToNextQuestion()">Next</button>
  `;
}

function goToNextQuestion() {
  if (currentMode === "rapid") {
    rapidQuestionIndex++;

    if (rapidQuestionIndex < rapidQuestions.length) {
      renderQuestionScreen();
      return;
    }

    renderResultsScreen("rapid");
    return;
  }

  if (currentMode === "weak") {
    weakAreaQuestionIndex++;

    if (weakAreaQuestionIndex < weakAreaQuestions.length) {
      renderQuestionScreen();
      return;
    }

    renderResultsScreen("weak");
    return;
  }

  if (currentMode === "missed") {
  if (missedQuestionIndex >= missedQuestions.length) {
    renderResultsScreen("missed");
    return;
  }

  renderQuestionScreen();
  return;
}

  const subject = subjects[currentSubject];
  const passage = subject.passages[currentPassage];

  currentQuestion++;

  if (currentQuestion < passage.questions.length) {
    renderQuestionScreen();
    return;
  }

  currentPassage++;
  currentQuestion = 0;

  if (currentPassage < subject.passages.length) {
    renderQuestionScreen();
    return;
  }

  renderResultsScreen("standard");
}

function renderResultsScreen(mode) {
  const subject = subjects[currentSubject];

  let title = "Results";
  let subtitle = "Here’s how you did.";
  let total = getTotalQuestionsForCurrentSubject();
  let extraLine = "";
  let buttons = "";

  if (mode === "rapid") {
    title = "Rapid Fire Results";
    subtitle = "Speed round finished.";
    total = rapidQuestions.length;
    extraLine = `<p><strong>Best Streak:</strong> ${bestRapidStreak}</p>`;
    buttons = `
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'missed')">
        ❌ Review Missed Questions
      </button>
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'weak')">
        🎯 Practice Weak Areas
      </button>
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'rapid')">
        ⚡ Retry Rapid Fire
      </button>
      <button class="mode-btn rapid-btn end-btn" onclick="startSubject(currentSubject, 'standard')">
        📘 Standard Practice
      </button>
      <button class="mode-btn rapid-btn end-btn" onclick="showSubjectPage()">
        📚 Choose Another Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" onclick="showHomePage()">
        🏠 Home
      </button>
    `;
  } else if (mode === "weak") {
    title = "Weak Areas Results";
    subtitle = "Focused review finished.";
    total = weakAreaQuestions.length;
    buttons = `
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'weak')">
        🎯 Practice Weak Areas Again
      </button>
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'standard')">
        📘 Back to Standard Practice
      </button>
      <button class="mode-btn rapid-btn end-btn" onclick="showSubjectPage()">
        📚 Choose Another Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" onclick="showHomePage()">
        🏠 Home
      </button>
    `;
  } else if (mode === "missed") {
    title = "Missed Questions Results";
    subtitle = "Review session finished.";
    total = missedReviewStartTotal;
    buttons = `
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'missed')">
        ❌ Review Missed Questions Again
      </button>
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'weak')">
        🎯 Practice Weak Areas
      </button>
      <button class="mode-btn rapid-btn end-btn" onclick="startSubject(currentSubject, 'standard')">
        📘 Standard Practice
      </button>
      <button class="mode-btn rapid-btn end-btn" onclick="showSubjectPage()">
        📚 Choose Another Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" onclick="showHomePage()">
        🏠 Home
      </button>
    `;
  } else {
    buttons = `
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'missed')">
        ❌ Review Missed Questions
      </button>
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'weak')">
        🎯 Practice Weak Areas
      </button>
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'standard')">
        🔁 Retry Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" onclick="showSubjectPage()">
        📚 Choose Another Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" onclick="showHomePage()">
        🏠 Home
      </button>
    `;
  }

  appContainer.innerHTML = `
    <div class="subject-page-header">
      <h2 class="section-title">${subject.name} Complete</h2>
      <p class="subject-page-subtitle">${subtitle}</p>
    </div>

    <div class="subject-card">
      <div class="subject-card-top">
        <div class="subject-card-title">${title}</div>
        <div class="subject-card-desc">Final Score: ${score}/${total}</div>
      </div>

      <p>${getResultMessage(score, total)}</p>
      ${mode !== "weak" ? `<p><strong>Focus on:</strong> ${getWeakPointSummary()}</p>` : ""}
      ${extraLine}

      <div class="subject-mode-group">
        ${buttons}
      </div>
    </div>
  `;
}

showHomePage();
