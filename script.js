const MODE_CONFIG = {
  standard: {
    label: "Standard Practice",
    autoAdvance: false,
    showPassage: true
  },
  unit: {
    label: "Study by Unit",
    autoAdvance: false,
    showPassage: true
  },
  focus: {
    label: "Focus Guide Practice",
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
  unit: 35,
  focus: 45,
  rapid: 25,
  timed: 45,
  weak: 20,
  missed: 20
};

function buildSubject(subjectName, bankKey) {
  const sourceUnits = window.questionBanks?.[bankKey] || [];
  const allowed = q => savedProgress.includeLegacy || q.reviewStatus === "original-practice";
  const units = sourceUnits.map(unit => ({...unit, rapidQuestions: (unit.rapidQuestions || []).filter(allowed), passages: (unit.passages || []).map(passage => ({...passage, questions: passage.questions.filter(allowed)})).filter(passage => passage.questions.length)}));

  return {
    name: subjectName,
    bankKey,
    curriculum: window.AP_CURRICULUM?.subjects?.[bankKey],
    units,
    rapidQuestions: units.filter(unit => unit.examAssessed !== false).flatMap(unit => unit.rapidQuestions || []),
    passages: units.filter(unit => unit.examAssessed !== false).flatMap(unit => unit.passages || [])
  };
}

function getAllPassageQuestions(subject) {
  const passageQuestions = subject.passages.flatMap((passage) =>
    passage.questions.map((question) => ({
      ...question,
      sourceType: "standard",
      passageTitle: passage.title,
      passageText: passage.text,
      passageImage: passage.image,
      passageImageAlt: passage.imageAlt,
      passageImageCaption: passage.imageCaption,
      passageImageSource: passage.imageSource,
      passageImageDescription: passage.imageDescription
    }))
  );
  return [...passageQuestions, ...(subject.rapidQuestions || []).map(q => ({...q, sourceType: "rapid"}))];
}

function getRandomQuestions(questions, limit) {
  return shuffleArray(questions).slice(0, Math.min(limit, questions.length));
}

const focusGuides = {
  "AP Chem": {
    title: "AP Chemistry Focus Guide",
    boostedCategories: [
      "Unit 7: Equilibrium",
      "Unit 8: Acids and Bases",
      "Unit 9: Thermodynamics and Electrochemistry"
    ],
    boostedKeywords: [
      "equilibrium",
      "buffer",
      "titration",
      "pH",
      "Ksp",
      "Le Chatelier",
      "Gibbs",
      "cell potential",
      "electrochemical",
      "weak acid"
    ]
  },

  "AP Bio": {
    title: "AP Biology Focus Guide",
    boostedCategories: [
      "Unit 3: Cellular Energetics",
      "Unit 5: Heredity",
      "Unit 6: Gene Expression and Regulation",
      "Unit 7: Natural Selection"
    ],
    boostedKeywords: [
      "enzyme",
      "photosynthesis",
      "cellular respiration",
      "genetics",
      "meiosis",
      "gene expression",
      "natural selection",
      "Hardy-Weinberg",
      "evolution"
    ]
  },

  "AP Gov": {
    title: "AP Government Focus Guide",
    boostedCategories: [
      "Unit 2: Interactions Among Branches of Government",
      "Unit 3: Civil Liberties and Civil Rights",
      "Unit 5: Political Participation"
    ],
    boostedKeywords: [
      "judicial review",
      "federalism",
      "selective incorporation",
      "civil liberties",
      "civil rights",
      "campaign finance",
      "voter turnout",
      "interest groups"
    ]
  },

  "AP World": {
    title: "AP World Focus Guide",
    boostedCategories: [
      "Unit 2: Networks of Exchange",
      "Unit 4: Transoceanic Interconnections",
      "Unit 5: Revolutions",
      "Unit 6: Consequences of Industrialization",
      "Unit 8: Cold War and Decolonization"
    ],
    boostedKeywords: [
      "trade",
      "empire",
      "Mongol",
      "Cold War",
      "World War II",
      "colony",
      "Columbian Exchange",
      "industrialization",
      "imperialism",
      "revolution",
      "globalization"
    ]
  },

  "AP Lang": {
    title: "AP Lang Focus Guide",
    boostedCategories: [
      "Unit 1: Rhetorical Situation",
      "Unit 2: Claims and Evidence",
      "Unit 3: Reasoning and Organization",
      "Unit 7: Complexity of Arguments"
    ],
    boostedKeywords: [
      "rhetorical situation",
      "claim",
      "evidence",
      "commentary",
      "line of reasoning",
      "audience",
      "purpose",
      "tone",
      "argument"
    ]
  }
};

function getUnitPassageQuestions(unit) {
  return (unit.passages || []).flatMap((passage) =>
    passage.questions.map((question) => ({
      ...question,
      sourceType: "standard",
      passageTitle: passage.title,
      passageText: passage.text,
      passageImage: passage.image,
      passageImageAlt: passage.imageAlt,
      passageImageCaption: passage.imageCaption,
      passageImageSource: passage.imageSource,
      passageImageDescription: passage.imageDescription
    }))
  );
}

function getAllUnitQuestions(unit) {
  const passageQuestions = getUnitPassageQuestions(unit);

  const rapidQs = (unit.rapidQuestions || []).map((question) => ({
    ...question,
    sourceType: "rapid"
  }));

  return [...passageQuestions, ...rapidQs];
}

function getQuestionWeight(question, focusGuide) {
  if (!focusGuide) return 1;

  let weight = 1;

  const category = question.category || "";
  const prompt = question.prompt || "";
  const passageTitle = question.passageTitle || "";
  const passageText = question.passageText || "";

  const combinedText = `${category} ${prompt} ${passageTitle} ${passageText}`.toLowerCase();

  if (focusGuide.boostedCategories?.includes(category)) {
    weight += 5;
  }

  if (focusGuide.boostedKeywords) {
    focusGuide.boostedKeywords.forEach((keyword) => {
      if (combinedText.includes(keyword.toLowerCase())) {
        weight += 2;
      }
    });
  }

  return weight;
}

function weightedShuffleQuestions(questions, focusGuide) {
  return questions
    .map((question) => {
      const weight = getQuestionWeight(question, focusGuide);

      return {
        question,
        randomScore: Math.random() ** (1 / weight)
      };
    })
    .sort((a, b) => b.randomScore - a.randomScore)
    .map((item) => item.question);
}

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
  lastCompletedGoalDate: null,

  includeLegacy: false,
  schemaVersion: 2
};

function normalizeProgress(raw) {
  const clean = structuredClone(defaultProgress);
  if (!raw || typeof raw !== "object") return clean;
  clean.includeLegacy = raw.includeLegacy === true;
  const number = (value, max = 1000000) => Number.isInteger(value) && value >= 0 ? Math.min(value, max) : 0;
  for (const key of ["totalQuizzesCompleted", "dailyAnswered", "dailyStreak"]) clean[key] = number(raw[key]);
  clean.dailyGoal = number(raw.dailyGoal, 200) || 20;
  clean.dailyAnswered = Math.min(clean.dailyAnswered, clean.dailyGoal);
  clean.lastSubjectIndex = number(raw.lastSubjectIndex, 17);
  clean.lastMode = Object.hasOwn(MODE_CONFIG, raw.lastMode) ? raw.lastMode : "standard";
  clean.lastTimedDuration = number(raw.lastTimedDuration, 3600) || 300;
  clean.recentSubjectIndexes = [...new Set(Array.isArray(raw.recentSubjectIndexes) ? raw.recentSubjectIndexes : [])].filter(x => Number.isInteger(x) && x >= 0 && x < 18).slice(0, 3);
  for (const key of ["lastGoalDate", "lastCompletedGoalDate"]) clean[key] = /^\d{4}-\d{2}-\d{2}$/.test(raw[key]) ? raw[key] : null;
  const statFields = ["standardBestScore", "rapidBestScore", "weakBestScore", "missedBestScore", "timedBestScore", "bestRapidStreak", "quizzesCompleted"];
  clean.subjectStats = Object.fromEntries(Object.entries(raw.subjectStats || {}).filter(([name, stats]) => name.startsWith("AP ") && name.length < 100 && stats && typeof stats === "object").slice(0, 30).map(([name, stats]) => [name, Object.fromEntries(statFields.map(key => [key, number(stats[key])]))]));
  // Persist only references to bundled questions. Cloud/cache text never becomes quiz content.
  const active = raw.activeQuiz;
  if (active && typeof active === "object" && Object.hasOwn(MODE_CONFIG, active.mode) && Number.isInteger(active.subjectIndex) && active.subjectIndex >= 0 && active.subjectIndex < 18) {
    const result = { mode: active.mode, subjectIndex: active.subjectIndex, answered: active.answered === true };
    for (const key of ["score", "rapidStreak", "bestRapidStreak", "timedDuration", "timeRemaining", "standardQuestionIndex", "rapidQuestionIndex", "unitQuestionIndex", "currentUnitIndex", "focusGuideQuestionIndex", "weakAreaQuestionIndex", "missedQuestionIndex", "missedReviewStartTotal"]) result[key] = number(active[key], 3600);
    result.weakPoints = Object.fromEntries(Object.entries(active.weakPoints || {}).filter(([k]) => k.length < 160 && !["__proto__", "constructor", "prototype"].includes(k)).slice(0, 150).map(([k,v]) => [k,number(v,10000)]));
    for (const key of ["standardQuestions", "rapidQuestions", "unitQuestions", "focusGuideQuestions", "weakAreaQuestions", "missedQuestions"]) result[key] = (Array.isArray(active[key]) ? active[key] : []).slice(0, 100).map(q => typeof q === "string" ? q : q?.id).filter(q => typeof q === "string" && q.length < 180);
    clean.activeQuiz = result;
  }
  return clean;
}

function loadProgress() { return normalizeProgress(accountUI.load(defaultProgress)); }
function saveProgress(options) { accountUI.save(savedProgress, options); }
function syncUserStatsToFirebase() { return accountUI.flush(); }

function getTodayKey() {
  const date = new Date();
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}

function getYesterdayKey() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, "0"), String(date.getDate()).padStart(2, "0")].join("-");
}

function checkDailyGoalDate() {
  const today = getTodayKey();

  if (savedProgress.lastGoalDate !== today) {
    savedProgress.dailyAnswered = 0;
    savedProgress.lastGoalDate = today;
    saveProgress({ housekeeping: true });
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
    answered: answerLocked,
    subjectIndex: currentSubject,
    mode: currentMode,
    score,
    weakPoints,
    missedQuestions: missedQuestions.map(q => q.id),
    rapidStreak,
    bestRapidStreak,
    timedDuration,
    timeRemaining,

    standardQuestions: ["standard", "timed"].includes(currentMode) ? standardQuestions.map(q => q.id) : [],
    standardQuestionIndex,

    rapidQuestions: currentMode === "rapid" ? rapidQuestions.map(q => q.id) : [],
    rapidQuestionIndex,

    unitQuestions: currentMode === "unit" ? unitQuestions.map(q => q.id) : [],
    unitQuestionIndex,
    currentUnitIndex,

    focusGuideQuestions: currentMode === "focus" ? focusGuideQuestions.map(q => q.id) : [],
    focusGuideQuestionIndex,

    weakAreaQuestions: currentMode === "weak" ? weakAreaQuestions.map(q => q.id) : [],
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
  const stored = savedProgress.activeQuiz;
  const active = stored ? { ...stored } : null;
  if (active) {
    const subject = subjects[active.subjectIndex];
    if (!subject) { clearActiveQuiz(); showHomePage(); return; }
    const known = new Map(subject.units.flatMap(getAllUnitQuestions).map(q => [q.id, q]));
    for (const key of ["standardQuestions", "rapidQuestions", "unitQuestions", "focusGuideQuestions", "weakAreaQuestions", "missedQuestions"]) {
      const refs = active[key] || [];
      active[key] = refs.map(id => known.get(id)).filter(Boolean);
      if (active[key].length !== refs.length) { clearActiveQuiz(); renderUnavailableScreen(active.subjectIndex, "The question bank changed. Please start a fresh practice session; your completed progress is preserved."); return; }
    }
  }

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
  timeRemaining = active.timeRemaining ?? timedDuration;

  standardQuestions = active.standardQuestions || [];
  standardQuestionIndex = active.standardQuestionIndex || 0;

  rapidQuestions = active.rapidQuestions || [];
  rapidQuestionIndex = active.rapidQuestionIndex || 0;

  unitQuestions = active.unitQuestions || [];
  unitQuestionIndex = active.unitQuestionIndex || 0;
  currentUnitIndex = active.currentUnitIndex || 0;

  focusGuideQuestions = active.focusGuideQuestions || [];
  focusGuideQuestionIndex = active.focusGuideQuestionIndex || 0;
  
  unitQuestions = active.unitQuestions || [];
  unitQuestionIndex = active.unitQuestionIndex || 0;
  currentUnitIndex = active.currentUnitIndex || 0;

  focusGuideQuestions = active.focusGuideQuestions || [];
  focusGuideQuestionIndex = active.focusGuideQuestionIndex || 0;
  
  weakAreaQuestions = active.weakAreaQuestions || [];
  weakAreaQuestionIndex = active.weakAreaQuestionIndex || 0;

  missedQuestionIndex = active.missedQuestionIndex || 0;
  missedReviewStartTotal = active.missedReviewStartTotal || missedQuestions.length;

  if (currentMode === "timed") {
    if (timeRemaining <= 0) { renderTimedOutScreen(); return; }
    startTimer(timeRemaining);
  }
  if (active.answered) { answerLocked = true; goToNextQuestion(); return; }
  renderQuestionScreen();
}

function formatMath(text) {
  if (!text) return "";

  return escapeHTML(text)
    .replace(/([A-Za-z])_(\d+)/g, "$1<sub>$2</sub>")
    .replace(/log_(\d+)/g, "log<sub>$1</sub>")
    .replace(/\^(\([^)]*\)|[+-]?\d+(?:\.\d+)?|[A-Za-z])/g, "<sup>$1</sup>")
    .replace(/<sup>\((.*?)\)<\/sup>/g, "<sup>$1</sup>");
}

const appContainer = document.getElementById("app-container");
const indexToLetters = ["A", "B", "C", "D", "E"];
let subjects = [];

let currentSubject = 0;
let currentPassage = 0;
let currentQuestion = 0;
let currentMode = "standard";
let standardQuestions = [];
let standardQuestionIndex = 0;

let score = 0;
let answerLocked = false;
let currentShuffledChoices = [];
let weakPoints = {};

let rapidQuestions = [];
let rapidQuestionIndex = 0;
let rapidAdvanceDelay = 1000;
let rapidStreak = 0;
let bestRapidStreak = 0;

let unitQuestions = [];
let unitQuestionIndex = 0;
let currentUnitIndex = 0;

let focusGuideQuestions = [];
let focusGuideQuestionIndex = 0;

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
  const descriptions = {
    "AP Lang": "Questions on rhetoric, argument, tone, style, and rhetorical situation.",
    "AP World": "Questions on global history, trade networks, empire, revolution, conflict, and globalization.",
    "AP U.S. History": "Questions on American history, historical evidence, causation, continuity, and change.",
    "AP Literature": "Questions on poetry, fiction, drama, characterization, structure, tone, and theme.",
    "AP Human Geography": "Questions on spatial patterns, population, culture, politics, agriculture, cities, and development.",

    "AP Bio": "Questions on cells, genetics, evolution, ecology, physiology, and scientific reasoning.",
    "AP Biology": "Questions on cells, genetics, evolution, ecology, physiology, and scientific reasoning.",

    "AP Chem": "Questions on atomic structure, bonding, reactions, thermodynamics, equilibrium, acids/bases, and kinetics.",
    "AP Chemistry": "Questions on atomic structure, bonding, reactions, thermodynamics, equilibrium, acids/bases, and kinetics.",

    "AP Physics C: Mechanics": "Questions on motion, forces, energy, momentum, rotation, and oscillations.",
    "AP Physics C: Electricity & Magnetism": "Questions on electric fields, circuits, magnetism, induction, and electromagnetic relationships.",

    "AP Environmental Science": "Questions on ecosystems, biodiversity, populations, resources, pollution, energy, and global change.",
    "APES": "Questions on ecosystems, biodiversity, populations, resources, pollution, energy, and global change.",

    "AP Stats": "Questions on data analysis, probability, sampling, inference, chi-square tests, and regression.",
    "AP Statistics": "Questions on data analysis, probability, sampling, inference, chi-square tests, and regression.",

    "AP Calculus AB": "Questions on limits, derivatives, integrals, differential equations, and applications of calculus.",
    "AP Calc AB": "Questions on limits, derivatives, integrals, differential equations, and applications of calculus.",

    "AP Calculus BC": "Questions on AB calculus topics plus parametric, polar, vector-valued functions, and series.",
    "AP Calc BC": "Questions on AB calculus topics plus parametric, polar, vector-valued functions, and series.",

    "AP Precalc": "Questions on functions, modeling, trigonometry, exponential/logarithmic relationships, and analytical reasoning.",
    "AP Precalculus": "Questions on functions, modeling, trigonometry, exponential/logarithmic relationships, and analytical reasoning.",

    "AP Java": "Questions on Java programming, objects, arrays, ArrayLists, recursion, and algorithmic thinking.",
    "AP Computer Science A": "Questions on Java programming, objects, arrays, ArrayLists, recursion, and algorithmic thinking.",

    "AP CSP": "Questions on algorithms, data, programming, networks, cybersecurity, and computing impacts.",
    "AP Computer Science Principles": "Questions on algorithms, data, programming, networks, cybersecurity, and computing impacts.",

    "AP Gov": "Questions on constitutional principles, branches of government, civil liberties, political beliefs, and participation.",
    "AP Government": "Questions on constitutional principles, branches of government, civil liberties, political beliefs, and participation.",

    "AP Psych": "Questions on behavior, cognition, development, learning, social psychology, personality, and mental health.",
    "AP Psychology": "Questions on behavior, cognition, development, learning, social psychology, personality, and mental health."
  };

  return descriptions[subjectName] || "Practice questions by subject.";
}
function getSubjectIcon(subjectName) {
  if (subjectName === "AP Lang" || subjectName === "AP Lit") return "📘";
  if (subjectName === "AP World" || subjectName === "AP Gov" || subjectName === "AP Human Geography") return "🌍";
  if (subjectName === "AP U.S. History") return "🇺🇸";
  if (subjectName === "AP Chem") return "🧪";
  if (subjectName === "AP Environmental Science") return "🌳";
  if (subjectName === "AP Computer Science Principles" || subjectName === "AP Java") return "💻";
  if (subjectName === "AP Bio") return "🧬";
  if (subjectName === "AP Physics C: Mechanics") return "🚀";
  if (subjectName === "AP Physics C: Electromagnetics") return "🧲";
  if (subjectName === "AP Stats") return "📈";
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

  if (percent === 1) return "Every answer correct in this practice session. Try another unit to check your understanding.";
  if (percent >= 0.8) return "Strong practice accuracy. Review missed questions and explain the reasoning in your own words.";
  if (percent >= 0.6) return "A useful start. Work through the explanations for the questions you missed.";
  return "Review the explanations, then try another practice session. These results are not an AP score prediction.";
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
  passageImageAlt: passage.imageAlt,
      passageImageCaption: passage.imageCaption,
      passageImageSource: passage.imageSource,
      passageImageDescription: passage.imageDescription
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
  if (currentMode === "unit") return unitQuestions;
  if (currentMode === "focus") return focusGuideQuestions;
  if (currentMode === "weak") return weakAreaQuestions;
  if (currentMode === "missed") return missedQuestions;
  if (currentMode === "standard" || currentMode === "timed") return standardQuestions;

  return [];
}

function getCurrentQuestionIndex() {
  if (currentMode === "rapid") return rapidQuestionIndex;
  if (currentMode === "unit") return unitQuestionIndex;
  if (currentMode === "focus") return focusGuideQuestionIndex;
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
  } else if (mode === "unit") {
    stats.standardBestScore = Math.max(stats.standardBestScore, scoreValue);
  } else if (mode === "focus") {
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
    <h2>${escapeHTML(subjects[subjectIndex].name)}</h2>
    <p>${escapeHTML(message)}</p>
   <button class="mode-btn dark-btn" data-action="showSubjectPage()">Back to Subjects</button>
<button class="mode-btn standard-btn" data-action="showHomePage()">Home</button>
  `;
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  clearTimeout(rapidTimeout);
  rapidTimeout = null;
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
    if (savedProgress.activeQuiz) { savedProgress.activeQuiz.timeRemaining = timeRemaining; saveProgress(); }
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
        <button class="top-action-btn" data-action="exitTimedPractice()">Exit Timed Practice</button>
      </div>
    `;
  }

  if (currentMode === "rapid") {
    return `
      <div class="quiz-action-row">
        <button class="top-action-btn" data-action="exitRapidFire()">Exit Rapid Fire</button>
      </div>
    `;
  }

  return `
    <div class="quiz-action-row">
      <button class="top-action-btn" data-action="showSubjectPage()">Back to Subjects</button>
    </div>
  `;
}

function resetSavedProgress() {
  const confirmed = confirm("Are you sure you want to reset all saved progress on this device?");

  if (!confirmed) return;

  accountUI.reset();
  savedProgress = structuredClone(defaultProgress);
  rebuildSubjects();
  saveProgress();

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
      <button class="bottom-nav-btn ${active === "home" ? "active" : ""}" data-action="showHomePage()">
        <small>Home</small>
      </button>

      <button class="bottom-nav-btn ${active === "practice" ? "active" : ""}" data-action="showSubjectPage()">
        <small>Practice</small>
      </button>

      <button class="bottom-nav-btn ${active === "progress" ? "active" : ""}" data-action="showProgressPage()">
        <small>Progress</small>
      </button>

      <button class="bottom-nav-btn ${active === "more" ? "active" : ""}" data-action="showMorePage()">
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
      <p class="app-subtitle">Build understanding, one practice session at a time.</p>
    </div>

    ${accountUI.panel()}

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
          <span>${escapeHTML(lastSubjectName)}</span>
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
          Resume your last quiz or pick a new subject to practice.
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
      <button class="quick-practice-card" data-action="startQuickPractice(${subjectIndex})">
        <span>${getSubjectIcon(subject.name)} ${escapeHTML(subject.name)}</span>
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
      <p class="home-stats-text">Last subject practiced: ${escapeHTML(lastSubjectName)}</p>
      <p class="home-stats-text">Daily streak: 🔥 ${savedProgress.dailyStreak}</p>
      <p class="home-stats-text">Today's goal: ${savedProgress.dailyAnswered}/${savedProgress.dailyGoal}</p>
    </div>

    ${getBottomNav("progress")}
  `;
}

function showMorePage() {
  stopTimer();
  appContainer.innerHTML = `
    <div class="subject-page-header"><h1 class="section-title">More</h1><p class="subject-page-subtitle">Your account and study resources.</p></div>
    ${accountUI.panel()}
    <div class="subject-card"><div class="subject-card-title">About PrepSprint</div>
      <p>Free practice built by Warren Grant. Study by unit, read passages, interpret diagrams, or set a practice timer.</p>
      <p>Course organization follows the 2026–27 frameworks. Concrete practice replaces template questions; retained legacy questions still need subject-expert review. Coverage varies by unit. Timed sessions and multiple-choice results do not predict an AP score or replace free-response practice.</p>
      <p>AP® is a trademark of the College Board, which does not sponsor or endorse PrepSprint.</p>
      <p><a href="CURRICULUM.md" target="_blank" rel="noopener">Course sources and coverage</a></p>
    </div>
    <div class="subject-card"><div class="subject-card-title">Practice library</div><p>Updated original questions are the default. You can also include the older questions that still need educator review. Changing this starts a fresh session and keeps completed progress.</p><button class="mode-btn dark-btn" data-action="toggleLegacyPractice()">${savedProgress.includeLegacy ? "Use original practice only" : "Include older questions (unreviewed)"}</button><p class="curriculum-note">Current selection: ${savedProgress.includeLegacy ? "Original and unreviewed legacy practice" : "Original practice"}.</p></div>
    <button class="reset-link-btn" data-action="resetSavedProgress()">Reset current progress</button>
    ${getBottomNav("more")}
  `;
}

function rebuildSubjects() {
  subjects = subjects.map(subject => buildSubject(subject.name, subject.bankKey));
  window.subjects = subjects;
}
function toggleLegacyPractice() {
  savedProgress.includeLegacy = !savedProgress.includeLegacy;
  clearActiveQuiz();
  rebuildSubjects();
  showMorePage();
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

    <div id="subject-list" class="subject-list compact-subject-list"></div>

    ${getBottomNav("practice")}
  `;

  const subjectList = document.getElementById("subject-list");

  subjects.forEach((subject, index) => {
    const stats = getSubjectStats(index);

    const card = document.createElement("button");
    card.className = "compact-subject-card";

    card.innerHTML = `
      <div class="compact-subject-icon">${getSubjectIcon(subject.name)}</div>

      <div class="compact-subject-info">
        <div class="compact-subject-title">${escapeHTML(subject.name)}</div>
        <div class="compact-subject-desc">${getSubjectDescription(subject.name)}</div>
        <div class="compact-subject-stats">
          Best Streak: ${stats.bestRapidStreak || 0}
        </div>
      </div>

      <div class="compact-subject-arrow">›</div>
    `;

    card.addEventListener("click", () => {
      showSubjectModePage(index);
    });

    subjectList.appendChild(card);
  });
}

function showSubjectModePage(index) {
  stopTimer();

  const subject = subjects[index];
  const stats = getSubjectStats(index);

  appContainer.innerHTML = `
    <button class="subject-back-btn" id="back-subjects-btn">← Back</button>

    <div class="selected-subject-card">
      <div class="selected-subject-title">
        ${getSubjectIcon(subject.name)} ${escapeHTML(subject.name)}
      </div>

      <div class="selected-subject-desc">
        ${getSubjectDescription(subject.name)}
      </div>

      <div class="selected-subject-stats">
        <div>
          <span>Best Standard</span>
          <strong>${stats.standardBestScore || 0}</strong>
        </div>
        <div>
          <span>Best Rapid</span>
          <strong>${stats.rapidBestScore || 0}</strong>
        </div>
        <div>
          <span>Best Timed</span>
          <strong>${stats.timedBestScore || 0}</strong>
        </div>
        <div>
          <span>Best Streak</span>
          <strong>${stats.bestRapidStreak || 0}</strong>
        </div>
      </div>

            <p class="curriculum-note">2026–27 course framework · Practice coverage varies by unit.</p>
      <p class="curriculum-note">${escapeHTML(subject.curriculum?.revisionNote || "Includes original practice and retained questions awaiting educator review.")}</p>
      <p><a href="${escapeHTML(subject.curriculum?.sourceUrl || "https://apstudents.collegeboard.org/courses")}" target="_blank" rel="noopener">Official course framework</a></p>
      <button class="mode-btn standard-btn" id="standard-mode-btn">
        Standard Practice
      </button>

      <button class="mode-btn standard-btn" id="unit-mode-btn">
        Study by Unit
      </button>

      <button class="mode-btn standard-btn" id="focus-mode-btn">
        Focus Guide Practice
      </button>

      <button class="mode-btn rapid-btn" id="rapid-mode-btn">
        Rapid Fire
      </button>

      <button class="mode-btn rapid-btn" id="timed-mode-btn">
        Timed Practice
      </button>

    ${getBottomNav("practice")}
  `;

  document.getElementById("back-subjects-btn").addEventListener("click", showSubjectPage);

  document.getElementById("standard-mode-btn").addEventListener("click", () => {
    startSubject(index, "standard");
  });

  document.getElementById("rapid-mode-btn").addEventListener("click", () => {
    startSubject(index, "rapid");
  });

  document.getElementById("timed-mode-btn").addEventListener("click", () => {
    showTimedModePage(index);
  });

    document.getElementById("unit-mode-btn").addEventListener("click", () => {
    showStudyByUnitPage(index);
  });

  document.getElementById("focus-mode-btn").addEventListener("click", () => {
    startSubject(index, "focus");
  });
}

function showStudyByUnitPage(subjectIndex) {
  stopTimer();

  const subject = subjects[subjectIndex];
  const units = subject.units || [];

  if (!units.length) {
    renderUnavailableScreen(subjectIndex, "Unit practice is not available for this subject yet.");
    return;
  }

  appContainer.innerHTML = `
    <button class="subject-back-btn" data-action="showSubjectModePage(${subjectIndex})">← Back</button>

    <div class="subject-page-header">
      <h1 class="section-title">${escapeHTML(subject.name)}</h1>
      <p class="subject-page-subtitle">
        Choose a unit to practice.
      </p>
    </div>

    <div class="subject-list compact-subject-list">
      ${units.map((unit, unitIndex) => {
        const rapidCount = unit.rapidQuestions?.length || 0;
        const passageCount = (unit.passages || []).reduce((total, passage) => {
          return total + (passage.questions?.length || 0);
        }, 0);

        return `
          <button class="compact-subject-card" data-action="startUnitPractice(${subjectIndex}, ${unitIndex})">
            <div class="compact-subject-icon">📖</div>

            <div class="compact-subject-info">
              <div class="compact-subject-title">${escapeHTML(unit.name)}</div>
              <div class="compact-subject-desc">
                ${passageCount} passage questions • ${rapidCount} concept questions
                ${unit.examAssessed === false ? " · Optional extension · not on the AP Exam" : ""}
              </div>
            </div>

            <div class="compact-subject-arrow">›</div>
          </button>
        `;
      }).join("")}
    </div>

    ${getBottomNav("practice")}
  `;
}

function startUnitPractice(subjectIndex, unitIndex) {
  stopTimer();
  clearActiveQuiz();

  const subject = subjects[subjectIndex];
  const unit = subject.units?.[unitIndex];

  if (!unit) {
    renderUnavailableScreen(subjectIndex, "That unit could not be found.");
    return;
  }

  currentSubject = subjectIndex;
  currentUnitIndex = unitIndex;
  currentMode = "unit";

  currentPassage = 0;
  currentQuestion = 0;
  score = 0;
  currentShuffledChoices = [];

  weakPoints = {};
  missedQuestions = [];
  missedQuestionIndex = 0;

  rapidStreak = 0;
  bestRapidStreak = 0;

  unitQuestions = getRandomQuestions(
    getAllUnitQuestions(unit),
    QUIZ_LIMITS.unit
  );

  unitQuestionIndex = 0;

  savedProgress.lastSubjectIndex = subjectIndex;
  savedProgress.lastMode = "unit";
  updateRecentSubjects(subjectIndex);
  saveProgress();

  if (!unitQuestions.length) {
    renderUnavailableScreen(subjectIndex, "No questions are available for this unit yet.");
    return;
  }

  renderQuestionScreen();
}

function showTimedModePage(subjectIndex) {
  const subject = subjects[subjectIndex];

  appContainer.innerHTML = `
    <div class="subject-page-header">
      <h1 class="section-title">${escapeHTML(subject.name)} Timed Practice</h1>
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
        <button class="mode-btn standard-btn end-btn" data-action="startTimedSubject(${subjectIndex}, 2100)">
          35 Minutes
        </button>
        <button class="mode-btn standard-btn end-btn" data-action="startTimedSubject(${subjectIndex}, 2700)">
          45 Minutes
        </button>
        <button class="mode-btn standard-btn end-btn" data-action="startTimedSubject(${subjectIndex}, 3600)">
          60 Minutes
        </button>
        <button class="mode-btn rapid-btn end-btn" data-action="showSubjectPage()">
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

   if (mode === "focus") {
    weakPoints = {};
    missedQuestions = [];
    missedQuestionIndex = 0;

    const subject = subjects[subjectIndex];
    const focusGuide = focusGuides[subject.name];

    const allQuestions = [
      ...getAllPassageQuestions(subject),

    ];

    focusGuideQuestions = weightedShuffleQuestions(allQuestions, focusGuide)
      .slice(0, Math.min(QUIZ_LIMITS.focus, allQuestions.length));

    focusGuideQuestionIndex = 0;

    if (!focusGuideQuestions.length) {
      renderUnavailableScreen(subjectIndex, "Focus Guide questions are not available for this subject yet.");
      return;
    }

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
  if (!q) { renderUnavailableScreen(currentSubject, "No questions remain in this session. Choose a unit to start again."); return; }
  answerLocked = false;
  saveActiveQuiz();
  
  const config = MODE_CONFIG[currentMode];
  const progressPercent = ((questionIndex + 1) / questionList.length) * 100;

  currentShuffledChoices = shuffleArray(q.choices);

  const showPassage = config.showPassage && (q.passageText || q.passageImage);

  appContainer.innerHTML = `
    ${getQuizActionButtons()}

    <h2>${escapeHTML(subject.name)}</h2>
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

   ${showPassage ? `<h3>${escapeHTML(q.passageTitle || "")}</h3>` : ""}
${showPassage ? renderPassageMedia(q) : ""}
${showPassage ? `<p class="passage-text">${escapeHTML(q.passageText)}</p><hr>` : ""}

    <p class="curriculum-note">${q.reviewStatus === "original-practice" ? "Original practice · 2026–27 course framework" : "Legacy practice · awaiting educator review"}</p>
    ${currentMode === "weak" ? `<p><strong>Focus:</strong> ${escapeHTML(q.category)}</p>` : ""}
    <p>${formatMath(q.prompt)}</p>

    ${currentShuffledChoices.map((choice, i) => `
      <button class="answer-btn" data-action="handleAnswer(${i})">
        ${indexToLetters[i]}: ${formatMath(choice.text)}
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

  if (answerLocked || !selectedChoice || !q) return;
  answerLocked = true;
  recordDailyQuestionAnswered();

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
      missedQuestions.push({ ...q });
    }
  }

  if (currentMode === "missed" && !selectedChoice.correct) {
    missedQuestionIndex++;
  }

  saveActiveQuiz();
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
      <p><strong>Your Choice:</strong> ${indexToLetters[i]}: ${formatMath(currentShuffledChoices[i].text)}</p>
      <p><strong>Answer:</strong> ${indexToLetters[correctIndex]}: ${formatMath(currentShuffledChoices[correctIndex].text)}</p>
      <p><strong>Explanation:</strong> ${formatMath(selectedChoice.choiceExplanation).trim()}</p>
    </div>
    <button id="next-btn" data-action="goToNextQuestion()">Next</button>
  `;
}

function goToNextQuestion() {
  if (!answerLocked) return;
  clearTimeout(rapidTimeout);
  rapidTimeout = null;
  if (currentMode === "rapid") {
    rapidQuestionIndex++;

    if (rapidQuestionIndex < rapidQuestions.length) {
      renderQuestionScreen();
      return;
    }

    renderResultsScreen("rapid");
    return;
  }

  if (currentMode === "unit") {
    unitQuestionIndex++;

    if (unitQuestionIndex < unitQuestions.length) {
      renderQuestionScreen();
      return;
    }

    renderResultsScreen("unit");
    return;
  }

  if (currentMode === "focus") {
    focusGuideQuestionIndex++;

    if (focusGuideQuestionIndex < focusGuideQuestions.length) {
      renderQuestionScreen();
      return;
    }

    renderResultsScreen("focus");
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
  syncUserStatsToFirebase();

  appContainer.innerHTML = `
    <div class="subject-page-header">
      <h2 class="section-title">${escapeHTML(subjects[currentSubject].name)} Timed Practice Ended</h2>
      <p class="subject-page-subtitle">Time ran out.</p>
    </div>

    <div class="subject-card">
      <div class="subject-card-top">
        <div class="subject-card-title">⏰ Time's Up</div>
        <div class="subject-card-desc">Score so far: ${score}/${total}</div>
      </div>

      <p>${getResultMessage(score, total)}</p>
      <p><strong>Focus on:</strong> ${escapeHTML(getWeakPointSummary())}</p>

      <div class="subject-mode-group">
        <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'timed')">
          ⏱ Retry Timed Practice
        </button>
        <button class="mode-btn rapid-btn end-btn" data-action="startSubject(currentSubject, 'standard')">
          📘 Standard Practice
        </button>
        <button class="mode-btn rapid-btn end-btn" data-action="showSubjectPage()">
          📚 Choose Another Subject
        </button>
        <button class="mode-btn rapid-btn end-btn" data-action="showHomePage()">
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

    if (mode === "unit") {
    title = "Unit Practice Results";
    subtitle = "Focused unit practice finished.";
    total = unitQuestions.length;

    buttons = `
      <button class="mode-btn standard-btn end-btn" data-action="startUnitPractice(currentSubject, currentUnitIndex)">
        📖 Retry This Unit
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="showStudyByUnitPage(currentSubject)">
        📚 Choose Another Unit
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'missed')">
        ❌ Review Missed Questions
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'weak')">
        🎯 Practice Weak Areas
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showSubjectPage()">
        📚 Choose Another Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showHomePage()">
        🏠 Home
      </button>
    `;
  } else if (mode === "focus") {
    title = "Focus Guide Results";
    subtitle = "Targeted review finished.";
    total = focusGuideQuestions.length;

    buttons = `
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'focus')">
        🎯 Retry Focus Guide
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'missed')">
        ❌ Review Missed Questions
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'weak')">
        🎯 Practice Weak Areas
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="startSubject(currentSubject, 'standard')">
        📘 Standard Practice
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showSubjectPage()">
        📚 Choose Another Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showHomePage()">
        🏠 Home
      </button>
    `;
  } else if (mode === "rapid") {
    title = "Rapid Fire Results";
    subtitle = "Speed round finished.";
    total = rapidQuestions.length;
    extraLine = `<p><strong>Best Streak:</strong> ${bestRapidStreak}</p>`;
    buttons = `
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'missed')">
        ❌ Review Missed Questions
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'weak')">
        🎯 Practice Weak Areas
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'rapid')">
        ⚡ Retry Rapid Fire
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="startSubject(currentSubject, 'standard')">
        📘 Standard Practice
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showSubjectPage()">
        📚 Choose Another Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showHomePage()">
        🏠 Home
      </button>
    `;
  } else if (mode === "weak") {
    title = "Weak Areas Results";
    subtitle = "Focused review finished.";
    total = weakAreaQuestions.length;
    buttons = `
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'weak')">
        🎯 Practice Weak Areas Again
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'standard')">
        📘 Back to Standard Practice
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showSubjectPage()">
        📚 Choose Another Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showHomePage()">
        🏠 Home
      </button>
    `;
  } else if (mode === "missed") {
    title = "Missed Questions Results";
    subtitle = "Review session finished.";
    total = missedReviewStartTotal;
    buttons = `
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'missed')">
        ❌ Review Missed Questions Again
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'weak')">
        🎯 Practice Weak Areas
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="startSubject(currentSubject, 'standard')">
        📘 Standard Practice
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showSubjectPage()">
        📚 Choose Another Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showHomePage()">
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
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'timed')">
        ⏱ Retry Timed Practice
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="showTimedModePage(currentSubject)">
        ⏱ Choose Another Timer
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'missed')">
        ❌ Review Missed Questions
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'weak')">
        🎯 Practice Weak Areas
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showSubjectPage()">
        📚 Choose Another Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showHomePage()">
        🏠 Home
      </button>
    `;
  } else {
    buttons = `
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'missed')">
        ❌ Review Missed Questions
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'weak')">
        🎯 Practice Weak Areas
      </button>
      <button class="mode-btn standard-btn end-btn" data-action="startSubject(currentSubject, 'standard')">
        🔁 Retry Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showSubjectPage()">
        📚 Choose Another Subject
      </button>
      <button class="mode-btn rapid-btn end-btn" data-action="showHomePage()">
        🏠 Home
      </button>
    `;
  }

  clearActiveQuiz();
recordCompletedQuiz(mode, score, total);
syncUserStatsToFirebase();
  
    appContainer.innerHTML = `
    <div class="subject-page-header">
      <h2 class="section-title">${escapeHTML(subject.name)} Complete</h2>
      <p class="subject-page-subtitle">${subtitle}</p>
    </div>

    <div class="subject-card">
      <div class="subject-card-top">
        <div class="subject-card-title">${title}</div>
        <div class="subject-card-desc">Final Score: ${score}/${total}</div>
      </div>

      <p>${getResultMessage(score, total)}</p>
      ${mode !== "weak" ? `<p><strong>Focus on:</strong> ${escapeHTML(getWeakPointSummary())}</p>` : ""}
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
      <p id="review-status" role="status" aria-live="polite"></p>
      <p><strong>On a scale of 1 to 5, how much has PrepSprint helped you study?</strong></p>

      <textarea 
        id="review-comment" maxlength="2000" aria-label="Optional feedback" 
        placeholder="Optional: Tell us how we can improve..."
        style="width: 100%; margin: 10px 0; padding: 8px;"
      ></textarea>

      <button class="mode-btn standard-btn" data-action="submitAppReview(5)">5 - The best study resource I've used</button>
<button class="mode-btn rapid-btn" data-action="submitAppReview(4)">4 - A lot</button>
<button class="mode-btn dark-btn" data-action="submitAppReview(3)">3 - A little bit</button>
<button class="mode-btn dark-btn" data-action="submitAppReview(2)">2 - Very little</button>
<button class="mode-btn dark-btn" data-action="submitAppReview(1)">1 - Not at all</button>
    </div>
  `;
}

async function submitAppReview(rating) {
  const status = document.getElementById("review-status");
  if (reviewSubmitting || !status) return;
  if (!accountUI.getState().user) { status.textContent = "Sign in with Google from Home to send feedback."; return; }
  reviewSubmitting = true;
  status.textContent = "Sending feedback…";
  try {
    await window.prepSprintAccount.submitReview(rating, document.getElementById("review-comment")?.value.trim() || "");
    status.textContent = "Thank you. Your feedback was saved.";
  } catch (error) { status.textContent = window.prepSprintAccount.errorMessage(error); }
  finally { reviewSubmitting = false; }
}
let reviewSubmitting = false;

try {
  loadUnitFiles()
  .then(() => {
   window.applyCurriculumUpdates?.(window.questionBanks);
   window.applyPassageMedia?.(window.questionBanks);
   window.validateQuestionBanks();
   window.subjects = [
     buildSubject("AP Gov", "apGov"),
     buildSubject("AP World", "apWorld"),
     buildSubject("AP Human Geography", "apHumanGeo"),
     buildSubject("AP U.S. History", "apUSH"),

     buildSubject("AP Environmental Science", "apEnvironmentalScience"),
     buildSubject("AP Chem", "apChem"),
     buildSubject("AP Bio", "apBio"),
     buildSubject("AP Psychology", "apPsych"),
     buildSubject("AP Physics C: Electromagnetics", "apPhysicsCEM"),
     buildSubject("AP Physics C: Mechanics", "apPhysicsCMechanics"),

     buildSubject("AP Precalc", "apPrecalc"),
     buildSubject("AP Calculus AB", "apCalcAB"),
     buildSubject("AP Calculus BC", "apCalcBC"),
     
     buildSubject("AP Computer Science Principles", "apCSP"),
     buildSubject("AP Java", "apJava"),
     buildSubject("AP Stats", "apStats"),
     
     buildSubject("AP Lang", "apLang"),
     buildSubject("AP Lit", "apLit")
   
];

subjects = window.subjects;

accountUI.start({
  getProgress: () => savedProgress,
  setProgress: value => { savedProgress = normalizeProgress(value); timedDuration = savedProgress.lastTimedDuration; rebuildSubjects(); },
  resetSession: () => { stopTimer(); score = 0; weakPoints = {}; missedQuestions = []; currentShuffledChoices = []; standardQuestions = []; rapidQuestions = []; unitQuestions = []; focusGuideQuestions = []; weakAreaQuestions = []; answerLocked = true; },
  render: showHomePage
});
showHomePage();
  })
  .catch((error) => {
    document.body.innerHTML = `
      <div style="font-family: Arial; padding: 20px;">
        <h2>PrepSprint failed to load questions</h2>
        <p><strong>Error:</strong> ${escapeHTML(error.message)}</p>
      </div>
    `;
    console.error(error);
  });
} catch (error) {
  document.body.innerHTML = `
    <div style="font-family: Arial; padding: 20px;">
      <h2>PrepSprint failed to load</h2>
      <p><strong>Error:</strong> ${escapeHTML(error.message)}</p>
    </div>
  `;

  console.error(error);
}


const UI_ACTIONS = { showHomePage, showSubjectPage, showProgressPage, showMorePage, toggleLegacyPractice, showSubjectModePage, showStudyByUnitPage, startQuickPractice, startUnitPractice, startTimedSubject, startSubject, showTimedModePage, handleAnswer, goToNextQuestion, resetSavedProgress, exitRapidFire, exitTimedPractice, submitAppReview, accountSignIn, accountSignOut, accountRetry, accountSync, accountKeepLocal, accountKeepCloud };
document.addEventListener("click", event => {
  const button = event.target.closest("button[data-action]");
  if (!button || button.disabled) return;
  const match = /^([a-zA-Z]+)\((.*)\)$/.exec(button.dataset.action);
  if (!match || !Object.hasOwn(UI_ACTIONS, match[1])) return;
  const raw = match[2].trim();
  const tokens = raw ? raw.split(/,\s*/) : [];
  const args = [];
  for (const token of tokens) {
    if (/^\d+$/.test(token)) args.push(Number(token));
    else if (/^'[a-z]+'$/.test(token)) args.push(token.slice(1, -1));
    else if (token === "currentSubject") args.push(currentSubject);
    else if (token === "currentUnitIndex") args.push(currentUnitIndex);
    else return;
  }
  UI_ACTIONS[match[1]](...args);
});
