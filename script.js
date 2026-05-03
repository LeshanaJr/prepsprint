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
  },
  timed: {
    label: "Timed Practice",
    autoAdvance: false,
    showPassage: true
  }
};

const QUIZ_LIMITS = {
  standard: 45,
  rapid: 25,
  timed: 45,
  weak: 20,
  missed: 20
};

function buildSubject(subjectName, bankKey) {
  const units = window.questionBanks?.[bankKey] || [];

  return {
    name: subjectName,
    rapidQuestions: units.flatMap(unit => unit.rapidQuestions || []),
    passages: units.flatMap(unit => unit.passages || [])
  };
}

function getAllPassageQuestions(subject) {
  return subject.passages.flatMap((passage) =>
    passage.questions.map((question) => ({
      ...question,
      sourceType: "standard",
      passageTitle: passage.title,
      passageText: passage.text,
      passageImage: passage.image,
      passageImageAlt: passage.imageAlt
    }))
  );
}

function getRandomQuestions(questions, limit) {
  return shuffleArray(questions).slice(0, Math.min(limit, questions.length));
}

const STORAGE_KEY = "prepsprint_progress_v1";

const defaultProgress = {
  totalQuizzesCompleted: 0,
  lastSubjectIndex: 0,
recentSubjectIndexes: [],
lastMode: "standard",
  lastTimedDuration: 300,
  subjectStats: {},
  activeQuiz: null,

  dailyGoal: 20,
  dailyAnswered: 0,
  dailyStreak: 0,
  lastGoalDate: null,
  lastCompletedGoalDate: null
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(defaultProgress);

    const parsed = JSON.parse(raw);

    return {
      ...structuredClone(defaultProgress),
      ...parsed,
      subjectStats: parsed.subjectStats || {}
    };
  } catch (error) {
    console.error("Failed to load progress:", error);
    return structuredClone(defaultProgress);
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedProgress));
  } catch (error) {
    console.error("Failed to save progress:", error);
  }
}

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

function getYesterdayKey() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().split("T")[0];
}

function checkDailyGoalDate() {
  const today = getTodayKey();

  if (savedProgress.lastGoalDate !== today) {
    savedProgress.dailyAnswered = 0;
    savedProgress.lastGoalDate = today;
    saveProgress();
  }
}

function recordDailyQuestionAnswered() {
  checkDailyGoalDate();

  if (savedProgress.dailyAnswered < savedProgress.dailyGoal) {
    savedProgress.dailyAnswered++;
  }

  if (
    savedProgress.dailyAnswered >= savedProgress.dailyGoal &&
    savedProgress.lastCompletedGoalDate !== getTodayKey()
  ) {
    const yesterday = getYesterdayKey();

    if (savedProgress.lastCompletedGoalDate === yesterday) {
      savedProgress.dailyStreak++;
    } else {
      savedProgress.dailyStreak = 1;
    }

    savedProgress.lastCompletedGoalDate = getTodayKey();
  }

  saveProgress();
}

function getModeQuestionIndexKey(mode) {
  if (mode === "rapid") return "rapidQuestionIndex";
  if (mode === "weak") return "weakAreaQuestionIndex";
  if (mode === "missed") return "missedQuestionIndex";
  return "standardQuestionIndex";
}

function saveActiveQuiz() {
  const questionList = getCurrentQuestionList();

  if (!questionList.length) return;

  savedProgress.activeQuiz = {
    subjectIndex: currentSubject,
    mode: currentMode,
    score,
    weakPoints,
    missedQuestions,
    rapidStreak,
    bestRapidStreak,
    timedDuration,
    timeRemaining,
    standardQuestions,
    standardQuestionIndex,
    rapidQuestions,
    rapidQuestionIndex,
    weakAreaQuestions,
    weakAreaQuestionIndex,
    missedQuestionIndex,
    missedReviewStartTotal
  };

  saveProgress();
}

function clearActiveQuiz() {
  savedProgress.activeQuiz = null;
  saveProgress();
}

function resumeActiveQuiz() {
  const active = savedProgress.activeQuiz;

  if (!active) return;

  stopTimer();

  currentSubject = active.subjectIndex;
  currentMode = active.mode;
  score = active.score || 0;
  weakPoints = active.weakPoints || {};
  missedQuestions = active.missedQuestions || [];

  rapidStreak = active.rapidStreak || 0;
  bestRapidStreak = active.bestRapidStreak || 0;

  timedDuration = active.timedDuration || 300;
  timeRemaining = active.timeRemaining || timedDuration;

  standardQuestions = active.standardQuestions || [];
  standardQuestionIndex = active.standardQuestionIndex || 0;

  rapidQuestions = active.rapidQuestions || [];
  rapidQuestionIndex = active.rapidQuestionIndex || 0;

  weakAreaQuestions = active.weakAreaQuestions || [];
  weakAreaQuestionIndex = active.weakAreaQuestionIndex || 0;

  missedQuestionIndex = active.missedQuestionIndex || 0;
  missedReviewStartTotal = active.missedReviewStartTotal || missedQuestions.length;

  if (currentMode === "timed") {
    startTimer(timeRemaining);
  }

  renderQuestionScreen();
}

function formatMath(text) {
  if (!text) return "";

  return String(text)
    .replace(/([A-Za-z])_(\d+)/g, "$1<sub>$2</sub>")
    .replace(/log_(\d+)/g, "log<sub>$1</sub>")
    .replace(/\^(\([^)]*\)|[A-Za-z0-9+\-*/π√]+)/g, "<sup>$1</sup>")
    .replace(/<sup>\((.*?)\)<\/sup>/g, "<sup>$1</sup>");
}

const appContainer = document.getElementById("app-container");
const indexToLetters = ["A", "B", "C", "D"];
let subjects = [];

let currentSubject = 0;
let currentPassage = 0;
let currentQuestion = 0;
let currentMode = "standard";
let standardQuestions = [];
let standardQuestionIndex = 0;

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

let timerInterval = null;
let timeRemaining = 0;
let timedStartTotal = 0;
let timedDuration = 300;
let rapidTimeout = null;

let savedProgress = loadProgress();
timedDuration = savedProgress.lastTimedDuration || 300;

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
  if (subjectName === "AP World" || subjectName === "AP Gov") return "🌍";
  if (subjectName === "AP Chem") return "🧪";
  if (subjectName === "AP Bio") return "🧬";
  return "📚";
}

function getSubjectStats(subjectIndex) {
  const subjectName = subjects[subjectIndex].name;

  if (!savedProgress.subjectStats[subjectName]) {
    savedProgress.subjectStats[subjectName] = {
      standardBestScore: 0,
      rapidBestScore: 0,
      weakBestScore: 0,
      missedBestScore: 0,
      timedBestScore: 0,
      bestRapidStreak: 0,
      quizzesCompleted: 0
    };
  }

  return savedProgress.subjectStats[subjectName];
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

  return entries.map(([category, count]) => `${category} (${count} missed)`).join(", ");
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
  passageText: passage.text,
  passageImage: passage.image,
  passageImageAlt: passage.imageAlt
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
  if (currentMode === "standard" || currentMode === "timed") return standardQuestions;

  return [];
}

function getCurrentQuestionIndex() {
  if (currentMode === "rapid") return rapidQuestionIndex;
  if (currentMode === "weak") return weakAreaQuestionIndex;
  if (currentMode === "missed") return missedQuestionIndex;
  if (currentMode === "standard" || currentMode === "timed") return standardQuestionIndex;

  return 0;
}

function getTimedLabel(seconds) {
  if (seconds === 300) return "5 Minutes";
  if (seconds === 600) return "10 Minutes";
  if (seconds === 1500) return "25 Minutes";
  return `${Math.floor(seconds / 60)} Minutes`;
}

function recordCompletedQuiz(mode, scoreValue, total) {
  savedProgress.totalQuizzesCompleted++;

  const stats = getSubjectStats(currentSubject);
  stats.quizzesCompleted++;

  if (mode === "standard") {
    stats.standardBestScore = Math.max(stats.standardBestScore, scoreValue);
  } else if (mode === "rapid") {
    stats.rapidBestScore = Math.max(stats.rapidBestScore, scoreValue);
    stats.bestRapidStreak = Math.max(stats.bestRapidStreak, bestRapidStreak);
  } else if (mode === "weak") {
    stats.weakBestScore = Math.max(stats.weakBestScore, scoreValue);
  } else if (mode === "missed") {
    stats.missedBestScore = Math.max(stats.missedBestScore, scoreValue);
  } else if (mode === "timed") {
    stats.timedBestScore = Math.max(stats.timedBestScore, scoreValue);
  }

  saveProgress();
}

function renderUnavailableScreen(subjectIndex, message) {
  appContainer.innerHTML = `
    <h2>${subjects[subjectIndex].name}</h2>
    <p>${message}</p>
   <button class="mode-btn dark-btn" onclick="showSubjectPage()">Back to Subjects</button>
<button class="mode-btn standard-btn" onclick="showHomePage()">Home</button>
  `;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function startTimer(seconds) {
  clearInterval(timerInterval);
  timeRemaining = seconds;
  timedStartTotal = seconds;

  timerInterval = setInterval(() => {
    timeRemaining--;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      timeRemaining = 0;
      renderTimedOutScreen();
      return;
    }

    updateTimerDisplay();
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

function updateTimerDisplay() {
  const timerEl = document.getElementById("timer-display");
  if (timerEl) {
    timerEl.textContent = `Time Left: ${formatTime(timeRemaining)}`;
  }
}

function exitRapidFire() {
  if (rapidTimeout) {
    clearTimeout(rapidTimeout);
    rapidTimeout = null;
  }

  rapidQuestionIndex = 0;
  rapidStreak = 0;
  showSubjectPage();
}

function exitTimedPractice() {
  stopTimer();
  showSubjectPage();
}

function getQuizActionButtons() {
  if (currentMode === "timed") {
    return `
      <div class="quiz-action-row">
        <button class="top-action-btn" onclick="exitTimedPractice()">Exit Timed Practice</button>
      </div>
    `;
  }

  if (currentMode === "rapid") {
    return `
      <div class="quiz-action-row">
        <button class="top-action-btn" onclick="exitRapidFire()">Exit Rapid Fire</button>
      </div>
    `;
  }

  return `
    <div class="quiz-action-row">
      <button class="top-action-btn" onclick="showSubjectPage()">Back to Subjects</button>
    </div>
  `;
}

function resetSavedProgress() {
  const confirmed = confirm("Are you sure you want to reset all saved progress on this device?");

  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  savedProgress = structuredClone(defaultProgress);

  currentSubject = 0;
  currentPassage = 0;
  currentQuestion = 0;
  currentMode = "standard";
  score = 0;
  currentShuffledChoices = [];
  weakPoints = {};

  rapidQuestions = [];
  rapidQuestionIndex = 0;
  rapidStreak = 0;
  bestRapidStreak = 0;

  weakAreaQuestions = [];
  weakAreaQuestionIndex = 0;

  missedQuestions = [];
  missedQuestionIndex = 0;
  missedReviewStartTotal = 0;

  stopTimer();
  timeRemaining = 0;
  timedStartTotal = 0;
  timedDuration = savedProgress.lastTimedDuration || 300;

  if (rapidTimeout) {
    clearTimeout(rapidTimeout);
    rapidTimeout = null;
  }

  showHomePage();
}


function getBottomNav(active = "home") {
  return `
    <nav class="bottom-nav">
      <button class="bottom-nav-btn ${active === "home" ? "active" : ""}" onclick="showHomePage()">
        <small>Home</small>
      </button>

      <button class="bottom-nav-btn ${active === "practice" ? "active" : ""}" onclick="showSubjectPage()">
        <small>Practice</small>
      </button>

      <button class="bottom-nav-btn ${active === "progress" ? "active" : ""}" onclick="showProgressPage()">
        <small>Progress</small>
      </button>

      <button class="bottom-nav-btn ${active === "more" ? "active" : ""}" onclick="showMorePage()">
        <span>☰</span>
        <small>More</small>
      </button>
    </nav>
  `;
}

function updateRecentSubjects(subjectIndex) {
  savedProgress.recentSubjectIndexes = savedProgress.recentSubjectIndexes || [];

  savedProgress.recentSubjectIndexes = [
    subjectIndex,
    ...savedProgress.recentSubjectIndexes.filter((index) => index !== subjectIndex)
  ].slice(0, 3);

  saveProgress();
}

function getQuickPracticeSubjects() {
  const recent = savedProgress.recentSubjectIndexes || [];

  const fallback = subjects
    .map((subject, index) => index)
    .filter((index) => !recent.includes(index));

  return [...recent, ...fallback].slice(0, 2);
}

function startQuickPractice(subjectIndex) {
  const subject = subjects[subjectIndex];

  if (subject.rapidQuestions && subject.rapidQuestions.length > 0) {
    startSubject(subjectIndex, "rapid");
    return;
  }

  startSubject(subjectIndex, "standard");
}

function showHomePage() {
  stopTimer();

  checkDailyGoalDate();

  const lastSubjectName = subjects?.[savedProgress.lastSubjectIndex]?.name || "None yet";
  const hasSavedProgress = savedProgress.totalQuizzesCompleted > 0;
  const hasActiveQuiz = !!savedProgress.activeQuiz;

  const goalPercent = Math.min(
    (savedProgress.dailyAnswered / savedProgress.dailyGoal) * 100,
    100
  );

  appContainer.innerHTML = `
    <div class="home-header compact-home-header">
      <h1 class="app-title">PrepSprint</h1>
      <p class="app-subtitle">Practice. Learn. Get ahead.</p>
    </div>

    <div class="home-stats hero-progress-card">
      <div class="goal-top-row">
        <div>
          <p class="home-stats-title">Today's Goal</p>
          <p class="home-stats-text">
            ${savedProgress.dailyAnswered}/${savedProgress.dailyGoal} questions answered
          </p>
        </div>

        <div class="streak-pill">
          🔥 ${savedProgress.dailyStreak}
        </div>
      </div>

      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${goalPercent}%"></div>
      </div>

      <div class="mini-progress-grid">
        <div class="mini-stat">
          <span>${savedProgress.totalQuizzesCompleted}</span>
          <small>Quizzes</small>
        </div>

        <div class="mini-stat">
          <span>${lastSubjectName}</span>
          <small>Last Subject</small>
        </div>

        <div class="mini-stat">
          <span>${getTimedLabel(savedProgress.lastTimedDuration)}</span>
          <small>Timer</small>
        </div>
      </div>
    </div>

    <div class="subject-card start-card">
      <div class="subject-card-top">
        <div class="subject-card-title">Start Practicing</div>
        <div class="subject-card-desc">
          Jump back in or choose a subject to practice.
        </div>
      </div>

      <div class="home-actions">
        ${hasActiveQuiz ? `<button id="resume-quiz-btn" class="home-action-btn home-primary-btn">⚡ Resume Quiz</button>` : ""}
        <button id="go-subjects-btn" class="home-action-btn home-secondary-btn">📚 Choose Subject</button>
      </div>
    </div>

    <div class="quick-practice-section">
  <p class="section-mini-title">Quick Practice</p>

  ${getQuickPracticeSubjects().map((subjectIndex) => {
    const subject = subjects[subjectIndex];
    const hasRapid = subject.rapidQuestions && subject.rapidQuestions.length > 0;

    return `
      <button class="quick-practice-card" onclick="startQuickPractice(${subjectIndex})">
        <span>${getSubjectIcon(subject.name)} ${subject.name}</span>
        <small>${hasRapid ? "Rapid Fire practice" : "Standard practice"}</small>
      </button>
    `;
  }).join("")}
</div>

    ${hasSavedProgress || hasActiveQuiz ? `
      <button id="reset-progress-btn" class="reset-link-btn">
        Reset Progress
      </button>
    ` : ""}

    ${getBottomNav("home")}
  `;

  document.getElementById("go-subjects-btn").addEventListener("click", showSubjectPage);

  if (hasActiveQuiz) {
    document.getElementById("resume-quiz-btn").addEventListener("click", resumeActiveQuiz);
  }

  if (hasSavedProgress || hasActiveQuiz) {
    document.getElementById("reset-progress-btn").addEventListener("click", resetSavedProgress);
  }
}

function showProgressPage() {
  stopTimer();

  const lastSubjectName = subjects?.[savedProgress.lastSubjectIndex]?.name || "None yet";

  appContainer.innerHTML = `
    <div class="subject-page-header">
      <h1 class="section-title">Progress</h1>
      <p class="subject-page-subtitle">Track how much you’ve practiced.</p>
    </div>

    <div class="subject-card">
      <div class="subject-card-title">Your Stats</div>
      <p class="home-stats-text">Total quizzes completed: ${savedProgress.totalQuizzesCompleted}</p>
      <p class="home-stats-text">Last subject practiced: ${lastSubjectName}</p>
      <p class="home-stats-text">Daily streak: 🔥 ${savedProgress.dailyStreak}</p>
      <p class="home-stats-text">Today's goal: ${savedProgress.dailyAnswered}/${savedProgress.dailyGoal}</p>
    </div>

    ${getBottomNav("progress")}
  `;
}

function showMorePage() {
  stopTimer();

  appContainer.innerHTML = `
    <div class="subject-page-header">
      <h1 class="section-title">More</h1>
      <p class="subject-page-subtitle">App info and settings.</p>
    </div>

    <div class="subject-card">
      <div class="subject-card-title">What is PrepSprint?</div>
      <p class="home-stats-text">
        PrepSprint is a 100% free web app that was made to help people study and prepare for their AP exams. More subjects are actively getting added, so be on the lookout for them!\n\n
        </p>
     <p class="home-stats-text">
     PrepSprint currently supports passage-based questions, rapid-fire questions for memorizing FRQ concepts, and timed tests to simulate the real exams.\n\n
</p>
<p class="home-stats-text">
        AP© is trademarked by CollegeBoard, who does not affiliate with or sponsor PrepSprint in any way.\n\n
</p>
<p class="home-stats-text">
        App created by Warren Grant
      </p>
    </div>

    <button class="reset-link-btn" onclick="resetSavedProgress()">Reset Progress</button>

    ${getBottomNav("more")}
  `;
}

function showSubjectPage() {
  stopTimer();

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
    const stats = getSubjectStats(index);

    subjectList.innerHTML += `
      <div class="subject-card">
        <div class="subject-card-top">
          <div class="subject-card-title">${getSubjectIcon(subject.name)} ${subject.name}</div>
          <div class="subject-card-desc">${getSubjectDescription(subject.name)}</div>
          <div class="subject-card-desc" style="margin-top: 8px;">
            Best Standard: ${stats.standardBestScore} • Best Rapid: ${stats.rapidBestScore}
          </div>
          <div class="subject-card-desc">
            Best Timed: ${stats.timedBestScore} • Best Streak: ${stats.bestRapidStreak}
          </div>
        </div>

        <div class="subject-mode-group">
          <button class="mode-btn standard-btn" onclick="startSubject(${index}, 'standard')">
            Standard Practice
          </button>
          <button class="mode-btn rapid-btn" onclick="startSubject(${index}, 'rapid')">
            Rapid Fire
          </button>
          <button class="mode-btn rapid-btn" onclick="showTimedModePage(${index})">
            Timed Practice
          </button>
        </div>
      </div>

      ${getBottomNav("practice")}
    `;
  });

  document.getElementById("back-home-btn").addEventListener("click", showHomePage);
}

function showTimedModePage(subjectIndex) {
  const subject = subjects[subjectIndex];

  appContainer.innerHTML = `
    <div class="subject-page-header">
      <h1 class="section-title">${subject.name} Timed Practice</h1>
      <p class="subject-page-subtitle">
        Choose how long you want your timed session to be.
      </p>
    </div>

    <div class="subject-card">
      <div class="subject-card-top">
        <div class="subject-card-title">⏱ Choose a Timer</div>
        <div class="subject-card-desc">
          Start a timed session and see how you do under pressure.
        </div>
      </div>

      <div class="subject-mode-group">
        <button class="mode-btn standard-btn end-btn" onclick="startTimedSubject(${subjectIndex}, 300)">
          5 Minutes
        </button>
        <button class="mode-btn standard-btn end-btn" onclick="startTimedSubject(${subjectIndex}, 600)">
          10 Minutes
        </button>
        <button class="mode-btn standard-btn end-btn" onclick="startTimedSubject(${subjectIndex}, 1500)">
          25 Minutes
        </button>
        <button class="mode-btn rapid-btn end-btn" onclick="showSubjectPage()">
          Back
        </button>
      </div>
    </div>
  `;
}

function startTimedSubject(subjectIndex, seconds) {
  timedDuration = seconds;
  savedProgress.lastTimedDuration = seconds;
  saveProgress();
  startSubject(subjectIndex, "timed");
}

function startSubject(subjectIndex, mode = "standard") {
  stopTimer();
clearActiveQuiz();
  
  currentSubject = subjectIndex;
  currentPassage = 0;
  currentQuestion = 0;
  score = 0;
  currentMode = mode;
  currentShuffledChoices = [];
  rapidStreak = 0;
  bestRapidStreak = 0;

savedProgress.lastSubjectIndex = subjectIndex;
savedProgress.lastMode = mode;
savedProgress.lastTimedDuration = timedDuration;
updateRecentSubjects(subjectIndex);
saveProgress();

  if (mode === "standard") {
  weakPoints = {};
  missedQuestions = [];
  missedQuestionIndex = 0;

  standardQuestions = getRandomQuestions(
    getAllPassageQuestions(subjects[subjectIndex]),
    QUIZ_LIMITS.standard
  );
  standardQuestionIndex = 0;

  renderQuestionScreen();
  return;
}

  if (mode === "rapid") {
    weakPoints = {};
    missedQuestions = [];
    missedQuestionIndex = 0;
    rapidQuestions = getRandomQuestions(
  subjects[subjectIndex].rapidQuestions || [],
  QUIZ_LIMITS.rapid
);
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
    weakAreaQuestions = getRandomQuestions(
  getQuestionsByCategories(subjectIndex, topCategories),
  QUIZ_LIMITS.weak
);
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

missedQuestions = getRandomQuestions(missedQuestions, QUIZ_LIMITS.missed);
missedReviewStartTotal = missedQuestions.length;
    renderQuestionScreen();
    return;
  }

  if (mode === "timed") {
  weakPoints = {};
  missedQuestions = [];
  missedQuestionIndex = 0;

  standardQuestions = getRandomQuestions(
    getAllPassageQuestions(subjects[subjectIndex]),
    QUIZ_LIMITS.timed
  );
  standardQuestionIndex = 0;

  startTimer(timedDuration);
  renderQuestionScreen();
}
}

function renderQuestionScreen() {
  const subject = subjects[currentSubject];
  const questionList = getCurrentQuestionList();
  const questionIndex = getCurrentQuestionIndex();
  const q = questionList[questionIndex];
  saveActiveQuiz();
  
  const config = MODE_CONFIG[currentMode];
  const progressPercent = ((questionIndex + 1) / questionList.length) * 100;

  currentShuffledChoices = shuffleArray(q.choices);

  const showPassage = config.showPassage && q.passageText;

  appContainer.innerHTML = `
    ${getQuizActionButtons()}

    <h2>${subject.name}</h2>
    <p class="progress-text">
      ${config.label} • Question ${questionIndex + 1} of ${questionList.length}
      ${currentMode === "rapid" ? ` • Streak: ${rapidStreak}` : ""}
    </p>

    ${currentMode === "timed" ? `
      <p id="timer-display" class="progress-text">
        Timed Practice • ${getTimedLabel(timedDuration)} • Time Left: ${formatTime(timeRemaining)}
      </p>
    ` : ""}

    <div class="progress-bar-container">
      <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
    </div>

   ${showPassage ? `<h3>${q.passageTitle || ""}</h3>` : ""}
${showPassage && q.passageImage ? `
  <img 
    src="${q.passageImage}" 
    alt="${q.passageImageAlt || "Passage image"}" 
    class="passage-image"
  >
` : ""}
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

recordDailyQuestionAnswered();
  
  if (typeof trackQuestionAnswered === "function") {
  trackQuestionAnswered(
    subjects[currentSubject].name,
    currentMode,
    q.category,
    selectedChoice.correct
  );
}
  
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

  saveActiveQuiz();
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
      missedQuestions.push({ ...q });
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

    rapidTimeout = setTimeout(() => {
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
  saveActiveQuiz();
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

  if (currentMode === "standard" || currentMode === "timed") {
    standardQuestionIndex++;

    if (standardQuestionIndex < standardQuestions.length) {
      renderQuestionScreen();
      return;
    }

    if (currentMode === "timed") stopTimer();

    renderResultsScreen(currentMode);
    return;
  }
}

function renderTimedOutScreen() {
  const total = getCurrentQuestionList().length;
  clearActiveQuiz();
recordCompletedQuiz("timed", score, total);

  appContainer.innerHTML = `
    <div class="subject-page-header">
      <h2 class="section-title">${subjects[currentSubject].name} Timed Practice Ended</h2>
      <p class="subject-page-subtitle">Time ran out.</p>
    </div>

    <div class="subject-card">
      <div class="subject-card-top">
        <div class="subject-card-title">⏰ Time's Up</div>
        <div class="subject-card-desc">Score so far: ${score}/${total}</div>
      </div>

      <p>${getResultMessage(score, total)}</p>
      <p><strong>Focus on:</strong> ${getWeakPointSummary()}</p>

      <div class="subject-mode-group">
        <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'timed')">
          ⏱ Retry Timed Practice
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
      </div>
    </div>
  `;
}

function renderResultsScreen(mode) {
  const subject = subjects[currentSubject];

  let title = "Results";
  let subtitle = "Here’s how you did.";
  let total = getCurrentQuestionList().length;
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
  } else if (mode === "timed") {
    title = "Timed Practice Results";
    subtitle = "Timed session finished.";
    total = standardQuestions.length;
    extraLine = `
      <p><strong>Timer:</strong> ${getTimedLabel(timedDuration)}</p>
      <p><strong>Time Used:</strong> ${formatTime(timedStartTotal - timeRemaining)}</p>
    `;
    buttons = `
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'timed')">
        ⏱ Retry Timed Practice
      </button>
      <button class="mode-btn standard-btn end-btn" onclick="showTimedModePage(currentSubject)">
        ⏱ Choose Another Timer
      </button>
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'missed')">
        ❌ Review Missed Questions
      </button>
      <button class="mode-btn standard-btn end-btn" onclick="startSubject(currentSubject, 'weak')">
        🎯 Practice Weak Areas
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

  clearActiveQuiz();
recordCompletedQuiz(mode, score, total);

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

      <div id="review-container"></div>
    </div>
  `;

  document.getElementById("review-container").innerHTML = showReviewForm();
}

function showReviewForm() {
  return `
    <div class="feedback-box">
      <p><strong>On a scale of 1 to 5, how much has PrepSprint helped you study?</strong></p>

      <textarea 
        id="review-comment" 
        placeholder="Optional: Tell us how we can improve..."
        style="width: 100%; margin: 10px 0; padding: 8px;"
      ></textarea>

      <button class="mode-btn standard-btn" onclick="submitAppReview(5)">5 - The best study resource I've used</button>
<button class="mode-btn rapid-btn" onclick="submitAppReview(4)">4 - A lot</button>
<button class="mode-btn dark-btn" onclick="submitAppReview(3)">3 - A little bit</button>
<button class="mode-btn dark-btn" onclick="submitAppReview(2)">2 - Very little</button>
<button class="mode-btn dark-btn" onclick="submitAppReview(1)">1 - Not at all</button>
    </div>
  `;
}

function submitAppReview(rating) {
  const commentEl = document.getElementById("review-comment");
  const comment = commentEl ? commentEl.value.trim() : "";

  if (typeof submitReviewToFirebase === "function") {
  submitReviewToFirebase(rating, comment);
}

  alert("Thanks for the feedback!");
}

try {
  if (typeof trackUniqueUser === "function") {
    trackUniqueUser();
  }

  loadUnitFiles()
  .then(() => {
   window.subjects = [
  buildSubject("AP Gov", "apGov"),
     buildSubject("AP Java", "apJava"),
     buildSubject("AP Chem", "apChem"),
     buildSubject("AP Bio", "apBio"),
     buildSubject("AP Lang", "apLang"),
     buildSubject("AP World", "apWorld")
];

subjects = window.subjects;

showHomePage();
  })
  .catch((error) => {
    document.body.innerHTML = `
      <div style="font-family: Arial; padding: 20px;">
        <h2>PrepSprint failed to load questions</h2>
        <p><strong>Error:</strong> ${error.message}</p>
      </div>
    `;
    console.error(error);
  });
} catch (error) {
  document.body.innerHTML = `
    <div style="font-family: Arial; padding: 20px;">
      <h2>PrepSprint failed to load</h2>
      <p><strong>Error:</strong> ${error.message}</p>
    </div>
  `;

  console.error(error);
}
