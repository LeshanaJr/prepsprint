/* Fail visibly on bad banks; preserve unit order while loading courses in parallel. */
function loadScript(src) {
  if (!/^questions\/ap-[a-z-]+\/(?:revised-)?unit-\d+\.js$/.test(src)) return Promise.reject(new Error("Invalid question-bank path."));
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const timeout = setTimeout(() => { script.remove(); reject(new Error("Question loading timed out. Reload to retry.")); }, 30000);
    script.src = src;
    script.onload = () => { clearTimeout(timeout); resolve(); };
    script.onerror = () => { clearTimeout(timeout); reject(new Error("Failed to load " + src + ". Reload to retry.")); };
    document.head.appendChild(script);
  });
}
async function loadUnitFiles() {
  if (!window.UNIT_MANIFEST) throw new Error("Question-bank manifest is missing.");
  await Promise.all(Object.values(window.UNIT_MANIFEST).map(async files => {
    for (const file of files) await loadScript(file);
  }));
}
window.validateQuestionBanks = function () {
  const ids = new Set();
  for (const [bankKey, files] of Object.entries(window.UNIT_MANIFEST)) {
    const units = window.questionBanks?.[bankKey];
    if (!Array.isArray(units) || units.length !== files.length) throw new Error("Incomplete course: " + bankKey);
    for (const [unitIndex, unit] of units.entries()) {
      for (const passage of (unit.passages || [])) {
        if (typeof passage.text !== "string" || !Array.isArray(passage.questions)) throw new Error("Invalid passage in " + bankKey);
        if (passage.image && (!safeImagePath(passage.image) || !passage.imageAlt)) throw new Error("Invalid or inaccessible image in " + bankKey);
      }
      const questions = [...(unit.rapidQuestions || []), ...(unit.passages || []).flatMap(p => p.questions)];
      for (const [index, q] of questions.entries()) {
        q.id ||= bankKey + "-u" + (unitIndex+1) + "-q" + (index+1);
        if (ids.has(q.id)) throw new Error("Duplicate question ID: " + q.id);
        ids.add(q.id);
        if (typeof q.prompt !== "string" || !q.prompt.trim() || typeof q.category !== "string" || !Array.isArray(q.choices) || q.choices.length < 2 || q.choices.length > 5 || q.choices.filter(c => c.correct === true).length !== 1 || q.choices.some(c => typeof c.text !== "string" || typeof c.correct !== "boolean" || typeof c.choiceExplanation !== "string")) throw new Error("Invalid question: " + q.id);
      }
    }
  }
};
