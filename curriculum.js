/* PrepSprint curriculum map. Sources checked 2026-09-06. Original practice is not College Board material. */
(function () {
  'use strict';
  const definitions = {
    apGov: ['AP U.S. Government and Politics', 'ap-united-states-government-and-politics', ['Foundations of American Democracy', 'Interactions Among Branches of Government', 'Civil Liberties and Civil Rights', 'American Political Ideologies and Beliefs', 'Political Participation']],
    apCalcAB: ['AP Calculus AB','ap-calculus-ab',['Limits and Continuity','Differentiation: Definition and Fundamental Properties','Differentiation: Composite, Implicit, and Inverse Functions','Contextual Applications of Differentiation','Analytical Applications of Differentiation','Integration and Accumulation of Change','Differential Equations','Applications of Integration']],
    apCalcBC: ['AP Calculus BC','ap-calculus-bc',['Limits and Continuity','Differentiation: Definition and Fundamental Properties','Differentiation: Composite, Implicit, and Inverse Functions','Contextual Applications of Differentiation','Analytical Applications of Differentiation','Integration and Accumulation of Change','Differential Equations','Applications of Integration','Parametric Equations, Polar Coordinates, and Vector-Valued Functions','Infinite Sequences and Series']],
    apCSP: ['AP Computer Science Principles','ap-computer-science-principles',['Creative Development','Data','Algorithms and Programming','Computer Systems and Networks','Impact of Computing']],
    apEnvironmentalScience: ['AP Environmental Science','ap-environmental-science',['The Living World: Ecosystems','The Living World: Biodiversity','Populations','Earth Systems and Resources','Land and Water Use','Energy Resources and Consumption','Atmospheric Pollution','Aquatic and Terrestrial Pollution','Global Change']],
    apPsych: ['AP Psychology','ap-psychology',['Biological Bases of Behavior','Cognition','Development and Learning','Social Psychology and Personality','Mental and Physical Health']],
    apLit: ['AP English Literature and Composition','ap-english-literature-and-composition',['Short Fiction I','Poetry I','Longer Fiction or Drama I','Short Fiction II','Poetry II','Longer Fiction or Drama II','Short Fiction III','Poetry III','Longer Fiction or Drama III']],
    apPrecalc: ['AP Precalculus','ap-precalculus',['Polynomial and Rational Functions','Exponential and Logarithmic Functions','Trigonometric and Polar Functions','Functions Involving Parameters, Vectors, and Matrices']],
    apPhysicsCMechanics: ['AP Physics C: Mechanics','ap-physics-c-mechanics',['Kinematics','Force and Translational Dynamics','Work, Energy, and Power','Linear Momentum','Torque and Rotational Dynamics','Energy and Momentum of Rotating Systems','Oscillations']],
    apStats: ['AP Statistics','ap-statistics',['Exploring One-Variable Data and Collecting Data','Probability, Random Variables, and Probability Distributions','Inference for Categorical Data: Proportions','Inference for Quantitative Data: Means','Regression Analysis']],
    apPhysicsCEM: ['AP Physics C: Electricity and Magnetism','ap-physics-c-electricity-and-magnetism',["Electric Charges, Fields, and Gauss's Law",'Electric Potential','Conductors and Capacitors','Electric Circuits','Magnetic Fields and Electromagnetism','Electromagnetic Induction']],
    apHumanGeo: ['AP Human Geography','ap-human-geography',['Thinking Geographically','Population and Migration Patterns and Processes','Cultural Patterns and Processes','Political Patterns and Processes','Agriculture and Rural Land-Use Patterns and Processes','Cities and Urban Land-Use Patterns and Processes','Industrial and Economic Development Patterns and Processes']],
    apUSH: ['AP U.S. History','ap-united-states-history',['Period 1: 1491-1607','Period 2: 1607-1754','Period 3: 1754-1800','Period 4: 1800-1848','Period 5: 1844-1877','Period 6: 1865-1898','Period 7: 1890-1945','Period 8: 1945-1980','Period 9: 1980-Present']],
    apWorld: ['AP World History: Modern','ap-world-history-modern',['The Global Tapestry','Networks of Exchange','Land-Based Empires','Transoceanic Interconnections','Revolutions','Consequences of Industrialization','Global Conflict','Cold War and Decolonization','Globalization']],
    apJava: ['AP Computer Science A','ap-computer-science-a',['Using Objects and Methods','Selection and Iteration','Class Creation','Data Collections']],
    apChem: ['AP Chemistry','ap-chemistry',['Atomic Structure and Properties','Compound Structure and Properties','Properties of Substances and Mixtures','Chemical Reactions','Kinetics','Thermochemistry','Equilibrium','Acids and Bases','Thermodynamics and Electrochemistry']],
    apBio: ['AP Biology','ap-biology',['Chemistry of Life','Cells','Cellular Energetics','Cell Communication and Cell Cycle','Heredity','Gene Expression and Regulation','Natural Selection','Ecology']],
    // College Board labels English Language units numerically. These are app focus labels, not official unit titles.
    apLang: ['AP English Language and Composition','ap-english-language-and-composition',['Rhetorical situation and evidence','Audience and line of reasoning','Claims, evidence, and sources','Developing an argument','Commentary and cohesion','Position and perspective','Complexity and qualification','Style and rhetorical choices','Synthesis and complex arguments']]
  };
  const subjects = {};
  for (const [key, [title, slug, titles]] of Object.entries(definitions)) {
    subjects[key] = {
      title, sourceUrl: 'https://apstudents.collegeboard.org/courses/' + slug,
      schoolYear: '2026-27', checkedOn: '2026-09-06',
      coverageStatus: key === 'apStats' ? 'original-topic-sampler' : 'original-unit-sampler-with-legacy-review',
      units: titles.map((title, index) => ({
        id: key + '-u' + (index + (key === 'apPhysicsCEM' ? 8 : 1)),
        number: index + (key === 'apPhysicsCEM' ? 8 : 1), title,
        label: (key === 'apCSP' ? 'Big Idea ' : 'Unit ') + (index + (key === 'apPhysicsCEM' ? 8 : 1)) + ': ' + title,
        titleKind: key === 'apLang' ? 'app-focus' : 'framework',
        examAssessed: !(key === 'apPrecalc' && index === 3)
      }))
    };
  }
  subjects.apStats.frameworkSource = 'https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf';
  subjects.apStats.revisionSource = 'https://apcentral.collegeboard.org/courses/ap-statistics/future-revisions';
  subjects.apStats.revisionNote = 'Fall 2026: five units. Includes investigative questions; retired content is excluded from the active bank.';
  subjects.apStats.examNote = 'May 2027: 42 multiple-choice questions with four choices, including probability and regression sets; four free-response questions. PrepSprint currently provides multiple-choice practice only.';
  subjects.apStats.retiredTopics = ['Nonlinear transformations for regression','Combining random variables','Geometric distributions','Chi-square goodness-of-fit','Inference for regression slopes'];
  subjects.apJava.revisionNote = 'Uses the four-unit framework effective fall 2025. Class inheritance is outside this framework.';
  subjects.apPrecalc.revisionNote = 'Unit 4 is optional extension practice and is not assessed on the AP Exam.';
  subjects.apLang.revisionNote = 'The focus labels are PrepSprint summaries; the official framework revisits reading and writing skills across nine numbered units.';
  subjects.apPsych.revisionNote = 'Five-unit framework; research methods and evidence interpretation are practiced across units. This app does not score the article-analysis or evidence-based free responses.';
  window.AP_CURRICULUM = {
    schoolYear: '2026-27', checkedOn: '2026-09-06', contentVersion: '2026.09', subjects,
    notice: 'Original practice plus a legacy bank awaiting educator review. Unit alignment does not certify complete topic coverage, answer accuracy, or AP exam equivalence.'
  };
  const applied = new WeakSet();
  window.applyCurriculumUpdates = function (banks = window.questionBanks) {
    if (!banks || applied.has(banks)) return banks;
    if (!window.CURRICULUM_PRACTICE) throw new Error('Original curriculum sampler is not loaded.');
    for (const [key, course] of Object.entries(subjects)) {
      if (!Array.isArray(banks[key]) || banks[key].length !== course.units.length) throw new Error('Curriculum unit count mismatch: ' + key);
      if (key !== 'apStats' && window.CURRICULUM_PRACTICE[key]?.length !== course.units.length) throw new Error('Original sampler unit count mismatch: ' + key);
    }
    // These generated course families repeatedly used questions unsupported by the
    // stimulus and boilerplate explanations. Keep their source, but not as active practice.
    const templateCourses = new Set(['apCalcAB','apCalcBC','apCSP','apEnvironmentalScience','apPsych','apLit','apPhysicsCMechanics','apPhysicsCEM','apHumanGeo','apUSH','apWorld','apLang','apPrecalc']);
    const templateText = /a student must justify a conclusion|best follows from the passage.s evidence|details are weighed together|different time period or rhetorical situation|matches the specific evidence in the prompt rather than simply naming|the scenario is meant to test reasoning/i;
    window.questionBanksLegacy = {};
    const audit = { checkedOn: '2026-09-06', subjects: {}, activeQuestions: 0, originalQuestions: 0, legacyQuestions: 0, quarantinedQuestions: 0 };
    for (const [key, course] of Object.entries(subjects)) {
      const units = banks[key];
      if (!Array.isArray(units) || units.length !== course.units.length) throw new Error('Curriculum unit count mismatch: ' + key);
      const archivedUnits = [];
      const seenPrompts = new Set();
      const structurallyValid = (q, context = '') => {
        if (!q || typeof q.prompt !== 'string' || !q.prompt.trim() || !Array.isArray(q.choices) || q.choices.length < 2) return false;
        for (const choice of q.choices) {
          if (choice.correct === 0 || choice.correct === 1) choice.correct = choice.correct === 1;
          if (typeof choice.text !== 'string' || !choice.text.trim() || typeof choice.correct !== 'boolean' || typeof choice.choiceExplanation !== 'string' || !choice.choiceExplanation.trim()) return false;
        }
        if (q.choices.filter(c => c.correct).length !== 1) return false;
        const normalize = text => text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
        if (new Set(q.choices.map(c => normalize(c.text))).size !== q.choices.length) return false;
        const key = context + '\n' + normalize(q.prompt);
        if (seenPrompts.has(key)) return false;
        seenPrompts.add(key);
        return true;
      };
      const counts = { units: units.length, activeQuestions: 0, originalQuestions: 0, legacyQuestions: 0, quarantinedQuestions: 0 };
      units.forEach((unit, index) => {
        const meta = course.units[index];
        const quarantined = { name: unit.name || meta.label, reason: 'Template family or unsupported generic stimulus; educator rewrite required.', rapidQuestions: [], passages: [] };
        const isTemplate = item => item.reviewStatus !== 'original-practice' && (templateCourses.has(key) || templateText.test(JSON.stringify(item)));
        unit.rapidQuestions = (unit.rapidQuestions || []).filter(q => { if (!isTemplate(q)) return true; quarantined.rapidQuestions.push(q); return false; });
        unit.passages = (unit.passages || []).filter(p => { if (!isTemplate(p)) return true; quarantined.passages.push(p); return false; });
        unit.rapidQuestions = unit.rapidQuestions.filter(q => {
          if (structurallyValid(q)) return true;
          q.quarantineReason = 'Invalid answer structure or duplicate prompt/choices';
          quarantined.rapidQuestions.push(q); return false;
        });
        unit.passages = unit.passages.filter(p => {
          const rejected = [];
          p.questions = p.questions.filter(q => { if (structurallyValid(q, p.text || p.title)) return true; rejected.push(q); return false; });
          if (rejected.length) quarantined.passages.push({...p, questions: rejected, quarantineReason: 'Invalid answer structure or duplicate prompt/choices'});
          return p.questions.length > 0;
        });
        archivedUnits.push(quarantined);
        counts.quarantinedQuestions += quarantined.rapidQuestions.length + quarantined.passages.reduce((n,p) => n + p.questions.length, 0);
        const original = window.CURRICULUM_PRACTICE[key]?.[index];
        if (original) {
          const choices = [original.answer, ...original.distractors].map((text, i) => ({ text, correct: i === 0, choiceExplanation: (i === 0 ? 'Correct. ' : 'Incorrect. ') + original.explanation }));
          choices.push(...choices.splice(0, index % choices.length));
          unit.rapidQuestions.unshift({ id: original.id, prompt: original.prompt, choices, topic: original.topic, skill: original.skill, reviewStatus: 'original-practice', originalEducationalMaterial: true, contentVersion: '2026.09', frameworkSource: course.sourceUrl });
        }
        unit.name = meta.label;
        unit.id = meta.id;
        unit.curriculum = {...meta, schoolYear: course.schoolYear, sourceUrl: course.sourceUrl};
        unit.examAssessed = meta.examAssessed;
        const tag = (q, suffix) => {
          if (!q.id) q.id = meta.id + '-' + suffix;
          q.category = meta.label;
          q.unitId = meta.id;
          q.reviewStatus = q.reviewStatus || 'legacy-review-pending';
          q.contentVersion = q.contentVersion || 'legacy';
        };
        unit.rapidQuestions.forEach((q, i) => tag(q, 'r' + (i + 1)));
        unit.passages.forEach((p, i) => {
          if (!p.id) p.id = meta.id + '-p' + (i + 1);
          p.reviewStatus = p.reviewStatus || 'legacy-review-pending';
          p.questions.forEach((q, j) => tag(q, 'p' + (i + 1) + '-q' + (j + 1)));
        });
        const active = [...unit.rapidQuestions, ...unit.passages.flatMap(p => p.questions)];
        counts.activeQuestions += active.length;
        counts.originalQuestions += active.filter(q => q.reviewStatus === 'original-practice').length;
        counts.legacyQuestions += active.filter(q => q.reviewStatus === 'legacy-review-pending').length;
      });
      window.questionBanksLegacy[key] = archivedUnits;
      audit.subjects[key] = counts;
      for (const field of ['activeQuestions','originalQuestions','legacyQuestions','quarantinedQuestions']) audit[field] += counts[field];
      course.coverageStatus = counts.legacyQuestions ? 'original-unit-sampler-and-unreviewed-legacy' : (key === 'apStats' ? 'original-topic-sampler' : 'original-unit-sampler');
    }
    window.AP_CURRICULUM.audit = audit;
    applied.add(banks);
    return banks;
  };
})();
