# PrepSprint curriculum update — 2026–27

Frameworks were checked against current College Board course pages on **September 6, 2026**. PrepSprint supports the 18 courses listed below. It does not cover every AP course offered by College Board.

This is **a starter practice bank, not a complete AP preparation course or a College Board question bank**. Framework alignment, valid answer structure, and teacher review are different checks. No question in this update is claimed to have received independent educator approval. Original questions and synthetic literary excerpts are newly authored for PrepSprint; they are not copied from released exams or AP Classroom.

## What changed

- **Statistics:** The active nine-unit bank was replaced with five revised units for fall 2026. There are 61 original questions: one starter item for each of the 55 topic identifiers, plus two three-question sets on probability and regression. The visual-passage extension adds two more questions. Topic identifiers describe the intended alignment; one item per topic does not cover every learning objective or establish mastery.
- The retired Statistics topics—nonlinear transformations for regression, combining random variables, geometric distributions, chi-square goodness-of-fit, and inference for slopes—are absent from the active revised bank. Descriptive regression and inference for differences in sample means remain in scope. The nine old files are preserved but are not listed in `manifest.js`.
- **Computer Science A:** Course titles now follow the current four-unit organization. An original item was added to each unit. Existing inherited source questions have not been comprehensively checked against every element of the Java subset.
- **Physics C and Psychology:** Current unit organization is retained, with new concrete calculus-based Physics C items and research/interpretation Psychology items. Physics C: E&M correctly uses official unit numbers 8–13.
- **Chemistry and Biology:** Current unit labels are used, including Biology Unit 2, Cells, and Chemistry’s current compound, mixture, thermochemistry, and electrochemistry labels.
- **Precalculus:** The malformed Unit 3 file was repaired. Unit 4 was added as extension practice and is explicitly marked **not assessed on the AP Exam**. Its material should be excluded from default exam practice.
- **All 18 courses:** Every one of the 128 course units has at least one original, concrete practice item. The 17 courses other than Statistics have 123 new unit-sampler questions in total. Original items have descriptive skill/topic metadata; Statistics also has the revised topic identifiers. English Language focus labels are PrepSprint summaries, not official College Board unit titles.
- A malformed Biology Unit 2 passage boundary was repaired, restoring the full unit’s ability to load.

## Content quality and exclusions

The previous generated banks in Calculus AB/BC, CSP, Environmental Science, Psychology, Literature, both Physics C courses, Human Geography, U.S. History, World History, and English Language repeatedly asked generic questions unsupported by their stimuli. Many explanations referred to unrelated historical or rhetorical settings. Those **9,300 questions** are excluded from active practice as complete template families.

The old Precalculus material had multiple competing answer keys and equivalent answer options. Its **250 questions** are also excluded pending review. Across the four remaining legacy courses, structural and duplicate checks excluded **25 additional questions**. All original source files are retained; `window.questionBanksLegacy` contains the loaded questions excluded during normalization. This archive is not an alternative bank to present as approved practice.

For retained legacy items, normalization accepts only explicit Boolean answer flags or numeric 0/1, requires exactly one correct answer, rejects empty or duplicate choices, and removes repeated prompts within the same stimulus context. These checks cannot establish that a scientifically or mathematically stated answer is true. In particular, detecting algebraically equivalent answer choices requires subject review beyond string matching.

**2,642 retained legacy questions remain unreviewed:** 479 Government, 395 Computer Science A, 957 Chemistry, and 811 Biology. These retain `reviewStatus: "legacy-review-pending"`. The other active questions use `reviewStatus: "original-practice"`, which means newly authored practice with implementation-level checking, not educator certification.

## Coverage snapshot

Counts include the 14 original visual passages from `passage-media.js` and count each passage question separately. The optional Precalculus Unit 4 item is included in these totals. See `curriculum-audit.json` for the machine-readable snapshot.

| Course | Units | Original questions | Unreviewed legacy | Excluded loaded questions |
| --- | ---: | ---: | ---: | ---: |
| U.S. Government | 5 | 7 | 479 | 3 |
| Calculus AB | 8 | 10 | 0 | 800 |
| Calculus BC | 10 | 12 | 0 | 1,000 |
| Computer Science Principles | 5 | 7 | 0 | 500 |
| Environmental Science | 9 | 11 | 0 | 900 |
| Psychology | 5 | 7 | 0 | 500 |
| English Literature | 9 | 9 | 0 | 900 |
| Precalculus | 4 | 6 | 0 | 250 |
| Physics C: Mechanics | 7 | 9 | 0 | 700 |
| Statistics | 5 | 63 | 0 | 0 |
| Physics C: E&M | 6 | 8 | 0 | 600 |
| Human Geography | 7 | 9 | 0 | 700 |
| U.S. History | 9 | 9 | 0 | 900 |
| World History: Modern | 9 | 9 | 0 | 900 |
| Computer Science A | 4 | 6 | 395 | 5 |
| Chemistry | 9 | 11 | 957 | 1 |
| Biology | 8 | 10 | 811 | 16 |
| English Language | 9 | 9 | 0 | 900 |
| **Total** | **128** | **212** | **2,642** | **9,575** |

The 900 retired Statistics questions are preserved in files that are no longer loaded and therefore are not included in the “excluded loaded” column. Active total: **2,854 questions** before selection of exam-assessed units.

The smaller original-only courses intentionally offer short practice. They do not have enough reviewed material for full-length exams or reliable score prediction. The app does not reproduce free-response scoring, the CSP Create task, complete literary works, a full historical primary-source corpus, laboratory practice, or all course learning objectives. The May 2027 Statistics exam’s revised format is documented in metadata, but the app offers multiple-choice practice rather than a complete simulation of that exam.

## Verified official references

The source linked for each course supports its current framework structure. Descriptive topic and skill labels in newly authored questions are PrepSprint metadata unless explicitly identified as topic codes.

| Course | College Board reference |
| --- | --- |
| U.S. Government | [Course and units](https://apstudents.collegeboard.org/courses/ap-united-states-government-and-politics) |
| Calculus AB | [Course and units](https://apstudents.collegeboard.org/courses/ap-calculus-ab) |
| Calculus BC | [Course and units](https://apstudents.collegeboard.org/courses/ap-calculus-bc) |
| Computer Science Principles | [Course and big ideas](https://apstudents.collegeboard.org/courses/ap-computer-science-principles) |
| Environmental Science | [Course and units](https://apstudents.collegeboard.org/courses/ap-environmental-science) |
| Psychology | [Course and units](https://apstudents.collegeboard.org/courses/ap-psychology) |
| English Literature | [Course and units](https://apstudents.collegeboard.org/courses/ap-english-literature-and-composition) |
| Precalculus | [Course and units, including the non-exam Unit 4](https://apstudents.collegeboard.org/courses/ap-precalculus) |
| Physics C: Mechanics | [Course and units](https://apstudents.collegeboard.org/courses/ap-physics-c-mechanics) |
| Statistics | [Current course and units](https://apstudents.collegeboard.org/courses/ap-statistics) |
| Physics C: E&M | [Course and units](https://apstudents.collegeboard.org/courses/ap-physics-c-electricity-and-magnetism) |
| Human Geography | [Course and units](https://apstudents.collegeboard.org/courses/ap-human-geography) |
| U.S. History | [Course and units](https://apstudents.collegeboard.org/courses/ap-united-states-history) |
| World History: Modern | [Course and units](https://apstudents.collegeboard.org/courses/ap-world-history-modern) |
| Computer Science A | [Course and units](https://apstudents.collegeboard.org/courses/ap-computer-science-a) |
| Chemistry | [Course and units](https://apstudents.collegeboard.org/courses/ap-chemistry) |
| Biology | [Course and units](https://apstudents.collegeboard.org/courses/ap-biology) |
| English Language | [Course and numbered units](https://apstudents.collegeboard.org/courses/ap-english-language-and-composition) |

The [Statistics revision notice](https://apcentral.collegeboard.org/courses/ap-statistics/future-revisions) documents the fall-2026 content removals and May-2027 exam changes. The [Statistics CED effective fall 2026](https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf) supplies the five-unit structure and 55 topic identifiers used by the new bank.

## Maintenance and validation

Load `manifest.js`, `curriculum-practice.js`, and `curriculum.js`; load all manifest files; call `applyCurriculumUpdates(questionBanks)` once; then call `applyPassageMedia(questionBanks)`. Normalization is idempotent for the same bank object and rejects incomplete unit loads. `AP_CURRICULUM.audit` captures normalization counts before the separate visual-passage hook; the saved JSON report includes that hook.

Run `node --test tests/curriculum.test.cjs` to verify bank loading, course/unit counts, question/answer structure, unique IDs, all 55 Statistics topic identifiers, exclusion of template families, non-exam Precalculus metadata, and idempotence. These regression checks do not replace educator review of content.

For the next content release, an AP teacher should review each original item and each retained legacy item, verify stimulus sufficiency and every distractor, add questions at multiple difficulty levels, and record actual topic/skill coverage and reviewer/date information. Retired material should only return after that review and explicit retagging.

## Default practice selection

The app defaults to the 212 original questions (including optional Precalculus Unit 4, which is excluded from general exam practice). More → Practice library offers the additional 2,642 unreviewed legacy questions. Each question identifies its review status. Neither selection claims comprehensive coverage or educator certification.
