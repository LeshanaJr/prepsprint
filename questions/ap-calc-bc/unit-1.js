window.questionBanks = window.questionBanks || {};
window.questionBanks.apCalcBC = window.questionBanks.apCalcBC || [];

window.questionBanks.apCalcBC.push({
  name: "Unit 1: Limits and Continuity",

  rapidQuestions: [
    {
      prompt: "Let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
      choices: [
        { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
      choices: [
        { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
      choices: [
        { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
      choices: [
        { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
      choices: [
        { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
      choices: [
        { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
      choices: [
        { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
      choices: [
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
      choices: [
        { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
      choices: [
        { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
      choices: [
        { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
      choices: [
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
      choices: [
        { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
      choices: [
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
      choices: [
        { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
      choices: [
        { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
      choices: [
        { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
      choices: [
        { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
      choices: [
        { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
      choices: [
        { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
      choices: [
        { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
      choices: [
        { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
      choices: [
        { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
      choices: [
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
      choices: [
        { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
      choices: [
        { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
      choices: [
        { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
      choices: [
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
      choices: [
        { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
      choices: [
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
      choices: [
        { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
      choices: [
        { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
      choices: [
        { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
      choices: [
        { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
      choices: [
        { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
      choices: [
        { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
      choices: [
        { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "Let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "A graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
      choices: [
        { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 1: Limits and Continuity"
    },
    {
      prompt: "f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
      choices: [
        { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 1: Limits and Continuity"
    }
  ],

  passages: [
    {
      title: "Limit and Continuity Evidence",
      image: "",
      imageAlt: "",
      text: `A graphing calculator shows a removable hole, a jump, and a vertical asymptote. A table near x=2 gives f(1.9)=3.91, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.10.\n\nA student claims f(2) must equal 4 because the nearby values approach 4. Another student says the limit can exist even if f(2) is undefined or assigned differently.\n\nUse the table, graph behavior, and continuity conditions to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
          choices: [
            { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
          choices: [
            { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
          choices: [
            { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
          choices: [
            { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
          choices: [
            { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        }
      ]
    },
    {
      title: "Limit and Continuity Evidence",
      image: "",
      imageAlt: "",
      text: `A graphing calculator shows a removable hole, a jump, and a vertical asymptote. A table near x=2 gives f(1.9)=3.91, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.10.\n\nA student claims f(2) must equal 4 because the nearby values approach 4. Another student says the limit can exist even if f(2) is undefined or assigned differently.\n\nUse the table, graph behavior, and continuity conditions to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
          choices: [
            { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
          choices: [
            { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        }
      ]
    },
    {
      title: "Limit and Continuity Evidence",
      image: "",
      imageAlt: "",
      text: `A graphing calculator shows a removable hole, a jump, and a vertical asymptote. A table near x=2 gives f(1.9)=3.91, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.10.\n\nA student claims f(2) must equal 4 because the nearby values approach 4. Another student says the limit can exist even if f(2) is undefined or assigned differently.\n\nUse the table, graph behavior, and continuity conditions to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
          choices: [
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
          choices: [
            { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
          choices: [
            { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
          choices: [
            { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        }
      ]
    },
    {
      title: "Limit and Continuity Evidence",
      image: "",
      imageAlt: "",
      text: `A graphing calculator shows a removable hole, a jump, and a vertical asymptote. A table near x=2 gives f(1.9)=3.91, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.10.\n\nA student claims f(2) must equal 4 because the nearby values approach 4. Another student says the limit can exist even if f(2) is undefined or assigned differently.\n\nUse the table, graph behavior, and continuity conditions to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
          choices: [
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
          choices: [
            { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
          choices: [
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
          choices: [
            { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
          choices: [
            { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        }
      ]
    },
    {
      title: "Limit and Continuity Evidence",
      image: "",
      imageAlt: "",
      text: `A graphing calculator shows a removable hole, a jump, and a vertical asymptote. A table near x=2 gives f(1.9)=3.91, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.10.\n\nA student claims f(2) must equal 4 because the nearby values approach 4. Another student says the limit can exist even if f(2) is undefined or assigned differently.\n\nUse the table, graph behavior, and continuity conditions to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
          choices: [
            { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
          choices: [
            { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
          choices: [
            { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
          choices: [
            { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
          choices: [
            { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        }
      ]
    },
    {
      title: "Limit and Continuity Evidence",
      image: "",
      imageAlt: "",
      text: `A graphing calculator shows a removable hole, a jump, and a vertical asymptote. A table near x=2 gives f(1.9)=3.91, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.10.\n\nA student claims f(2) must equal 4 because the nearby values approach 4. Another student says the limit can exist even if f(2) is undefined or assigned differently.\n\nUse the table, graph behavior, and continuity conditions to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
          choices: [
            { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
          choices: [
            { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        }
      ]
    },
    {
      title: "Limit and Continuity Evidence",
      image: "",
      imageAlt: "",
      text: `A graphing calculator shows a removable hole, a jump, and a vertical asymptote. A table near x=2 gives f(1.9)=3.91, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.10.\n\nA student claims f(2) must equal 4 because the nearby values approach 4. Another student says the limit can exist even if f(2) is undefined or assigned differently.\n\nUse the table, graph behavior, and continuity conditions to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
          choices: [
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
          choices: [
            { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
          choices: [
            { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
          choices: [
            { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        }
      ]
    },
    {
      title: "Limit and Continuity Evidence",
      image: "",
      imageAlt: "",
      text: `A graphing calculator shows a removable hole, a jump, and a vertical asymptote. A table near x=2 gives f(1.9)=3.91, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.10.\n\nA student claims f(2) must equal 4 because the nearby values approach 4. Another student says the limit can exist even if f(2) is undefined or assigned differently.\n\nUse the table, graph behavior, and continuity conditions to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
          choices: [
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
          choices: [
            { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
          choices: [
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
          choices: [
            { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
          choices: [
            { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        }
      ]
    },
    {
      title: "Limit and Continuity Evidence",
      image: "",
      imageAlt: "",
      text: `A graphing calculator shows a removable hole, a jump, and a vertical asymptote. A table near x=2 gives f(1.9)=3.91, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.10.\n\nA student claims f(2) must equal 4 because the nearby values approach 4. Another student says the limit can exist even if f(2) is undefined or assigned differently.\n\nUse the table, graph behavior, and continuity conditions to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
          choices: [
            { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
          choices: [
            { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
          choices: [
            { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
          choices: [
            { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
          choices: [
            { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        }
      ]
    },
    {
      title: "Limit and Continuity Evidence",
      image: "",
      imageAlt: "",
      text: `A graphing calculator shows a removable hole, a jump, and a vertical asymptote. A table near x=2 gives f(1.9)=3.91, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.10.\n\nA student claims f(2) must equal 4 because the nearby values approach 4. Another student says the limit can exist even if f(2) is undefined or assigned differently.\n\nUse the table, graph behavior, and continuity conditions to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=(x^2-1)/(x-1) for x≠1. What value makes f continuous at x=1?",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2", correct: 1, choiceExplanation: " is correct because it applies removable discontinuities and limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, factoring gives x+1, so the limit is 2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a table has f(1.9)=3.9, f(1.99)=3.99, f(2.01)=4.01, and f(2.1)=4.1. What is the best estimate for lim as x approaches 2 of f(x)?",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not exist", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4", correct: 1, choiceExplanation: " is correct because it applies limits from tables to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the values approach 4 from both sides. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, let f(x)=abs(x-3)/(x-3). What is lim as x approaches 3 of f(x)?",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The limit does not exist.", correct: 1, choiceExplanation: " is correct because it applies one-sided limits to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the left and right limits are different. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, a graph has a vertical asymptote at x=4 and horizontal asymptote y=6. Which statement must be true?",
          choices: [
            { text: "lim as x approaches infinity of f(x) = 6", correct: 1, choiceExplanation: " is correct because it applies asymptotic behavior to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a horizontal asymptote describes end behavior. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "f(4)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "lim as x approaches 4 of f(x)=6", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f is continuous everywhere", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 1: Limits and Continuity"
        },
        {
          prompt: "Based on the passage, f is continuous on [1,5], f(1)=3, and f(5)=9. Which value is guaranteed by the IVT?",
          choices: [
            { text: "13", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "only endpoint values", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6", correct: 1, choiceExplanation: " is correct because it applies Intermediate Value Theorem to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the value lies between the endpoint values. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 1: Limits and Continuity"
        }
      ]
    }
  ]
});
