window.questionBanks = window.questionBanks || {};
window.questionBanks.apCalcBC = window.questionBanks.apCalcBC || [];

window.questionBanks.apCalcBC.push({
  name: "Unit 10: Infinite Sequences and Series",

  rapidQuestions: [
    {
      prompt: "Which series converges?",
      choices: [
        { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "For alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
      choices: [
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Maclaurin series for e^x begins",
      choices: [
        { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which test shows sum n/(n+1) diverges immediately?",
      choices: [
        { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Geometric series sum (5/10)^n from n=0 to infinity equals",
      choices: [
        { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which series converges?",
      choices: [
        { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "For alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
      choices: [
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Maclaurin series for e^x begins",
      choices: [
        { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which test shows sum n/(n+1) diverges immediately?",
      choices: [
        { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Geometric series sum (5/10)^n from n=0 to infinity equals",
      choices: [
        { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which series converges?",
      choices: [
        { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "For alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Maclaurin series for e^x begins",
      choices: [
        { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which test shows sum n/(n+1) diverges immediately?",
      choices: [
        { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Geometric series sum (5/10)^n from n=0 to infinity equals",
      choices: [
        { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which series converges?",
      choices: [
        { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "For alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
      choices: [
        { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Maclaurin series for e^x begins",
      choices: [
        { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which test shows sum n/(n+1) diverges immediately?",
      choices: [
        { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Geometric series sum (5/10)^n from n=0 to infinity equals",
      choices: [
        { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which series converges?",
      choices: [
        { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "For alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
      choices: [
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Maclaurin series for e^x begins",
      choices: [
        { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which test shows sum n/(n+1) diverges immediately?",
      choices: [
        { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Geometric series sum (5/10)^n from n=0 to infinity equals",
      choices: [
        { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which series converges?",
      choices: [
        { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "For alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
      choices: [
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Maclaurin series for e^x begins",
      choices: [
        { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which test shows sum n/(n+1) diverges immediately?",
      choices: [
        { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Geometric series sum (5/10)^n from n=0 to infinity equals",
      choices: [
        { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which series converges?",
      choices: [
        { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "For alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
      choices: [
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Maclaurin series for e^x begins",
      choices: [
        { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which test shows sum n/(n+1) diverges immediately?",
      choices: [
        { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Geometric series sum (5/10)^n from n=0 to infinity equals",
      choices: [
        { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which series converges?",
      choices: [
        { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "For alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
      choices: [
        { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Maclaurin series for e^x begins",
      choices: [
        { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which test shows sum n/(n+1) diverges immediately?",
      choices: [
        { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Geometric series sum (5/10)^n from n=0 to infinity equals",
      choices: [
        { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which series converges?",
      choices: [
        { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "For alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
      choices: [
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Maclaurin series for e^x begins",
      choices: [
        { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which test shows sum n/(n+1) diverges immediately?",
      choices: [
        { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Geometric series sum (5/10)^n from n=0 to infinity equals",
      choices: [
        { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which series converges?",
      choices: [
        { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "For alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
      choices: [
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Maclaurin series for e^x begins",
      choices: [
        { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Which test shows sum n/(n+1) diverges immediately?",
      choices: [
        { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    },
    {
      prompt: "Geometric series sum (5/10)^n from n=0 to infinity equals",
      choices: [
        { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 10: Infinite Sequences and Series"
    }
  ],

  passages: [
    {
      title: "Series and Error Analysis",
      image: "",
      imageAlt: "",
      text: `Several infinite series are compared: a geometric series, a p-series, an alternating series, and a Taylor polynomial approximation. Partial sums are shown, but students must justify convergence and estimate error analytically.\n\nOne student assumes decreasing terms are enough for convergence. Another checks whether terms approach zero, whether alternating terms decrease, and whether a known Maclaurin series applies.\n\nUse series tests and approximation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which series converges?",
          choices: [
            { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, for alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
          choices: [
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, maclaurin series for e^x begins",
          choices: [
            { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, which test shows sum n/(n+1) diverges immediately?",
          choices: [
            { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, geometric series sum (5/10)^n from n=0 to infinity equals",
          choices: [
            { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        }
      ]
    },
    {
      title: "Series and Error Analysis",
      image: "",
      imageAlt: "",
      text: `Several infinite series are compared: a geometric series, a p-series, an alternating series, and a Taylor polynomial approximation. Partial sums are shown, but students must justify convergence and estimate error analytically.\n\nOne student assumes decreasing terms are enough for convergence. Another checks whether terms approach zero, whether alternating terms decrease, and whether a known Maclaurin series applies.\n\nUse series tests and approximation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which series converges?",
          choices: [
            { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, for alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
          choices: [
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, maclaurin series for e^x begins",
          choices: [
            { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, which test shows sum n/(n+1) diverges immediately?",
          choices: [
            { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, geometric series sum (5/10)^n from n=0 to infinity equals",
          choices: [
            { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        }
      ]
    },
    {
      title: "Series and Error Analysis",
      image: "",
      imageAlt: "",
      text: `Several infinite series are compared: a geometric series, a p-series, an alternating series, and a Taylor polynomial approximation. Partial sums are shown, but students must justify convergence and estimate error analytically.\n\nOne student assumes decreasing terms are enough for convergence. Another checks whether terms approach zero, whether alternating terms decrease, and whether a known Maclaurin series applies.\n\nUse series tests and approximation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which series converges?",
          choices: [
            { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, for alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, maclaurin series for e^x begins",
          choices: [
            { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, which test shows sum n/(n+1) diverges immediately?",
          choices: [
            { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, geometric series sum (5/10)^n from n=0 to infinity equals",
          choices: [
            { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        }
      ]
    },
    {
      title: "Series and Error Analysis",
      image: "",
      imageAlt: "",
      text: `Several infinite series are compared: a geometric series, a p-series, an alternating series, and a Taylor polynomial approximation. Partial sums are shown, but students must justify convergence and estimate error analytically.\n\nOne student assumes decreasing terms are enough for convergence. Another checks whether terms approach zero, whether alternating terms decrease, and whether a known Maclaurin series applies.\n\nUse series tests and approximation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which series converges?",
          choices: [
            { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, for alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
          choices: [
            { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, maclaurin series for e^x begins",
          choices: [
            { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, which test shows sum n/(n+1) diverges immediately?",
          choices: [
            { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, geometric series sum (5/10)^n from n=0 to infinity equals",
          choices: [
            { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        }
      ]
    },
    {
      title: "Series and Error Analysis",
      image: "",
      imageAlt: "",
      text: `Several infinite series are compared: a geometric series, a p-series, an alternating series, and a Taylor polynomial approximation. Partial sums are shown, but students must justify convergence and estimate error analytically.\n\nOne student assumes decreasing terms are enough for convergence. Another checks whether terms approach zero, whether alternating terms decrease, and whether a known Maclaurin series applies.\n\nUse series tests and approximation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which series converges?",
          choices: [
            { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, for alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
          choices: [
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, maclaurin series for e^x begins",
          choices: [
            { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, which test shows sum n/(n+1) diverges immediately?",
          choices: [
            { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, geometric series sum (5/10)^n from n=0 to infinity equals",
          choices: [
            { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        }
      ]
    },
    {
      title: "Series and Error Analysis",
      image: "",
      imageAlt: "",
      text: `Several infinite series are compared: a geometric series, a p-series, an alternating series, and a Taylor polynomial approximation. Partial sums are shown, but students must justify convergence and estimate error analytically.\n\nOne student assumes decreasing terms are enough for convergence. Another checks whether terms approach zero, whether alternating terms decrease, and whether a known Maclaurin series applies.\n\nUse series tests and approximation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which series converges?",
          choices: [
            { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, for alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
          choices: [
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, maclaurin series for e^x begins",
          choices: [
            { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, which test shows sum n/(n+1) diverges immediately?",
          choices: [
            { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, geometric series sum (5/10)^n from n=0 to infinity equals",
          choices: [
            { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        }
      ]
    },
    {
      title: "Series and Error Analysis",
      image: "",
      imageAlt: "",
      text: `Several infinite series are compared: a geometric series, a p-series, an alternating series, and a Taylor polynomial approximation. Partial sums are shown, but students must justify convergence and estimate error analytically.\n\nOne student assumes decreasing terms are enough for convergence. Another checks whether terms approach zero, whether alternating terms decrease, and whether a known Maclaurin series applies.\n\nUse series tests and approximation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which series converges?",
          choices: [
            { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, for alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
          choices: [
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, maclaurin series for e^x begins",
          choices: [
            { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, which test shows sum n/(n+1) diverges immediately?",
          choices: [
            { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, geometric series sum (5/10)^n from n=0 to infinity equals",
          choices: [
            { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        }
      ]
    },
    {
      title: "Series and Error Analysis",
      image: "",
      imageAlt: "",
      text: `Several infinite series are compared: a geometric series, a p-series, an alternating series, and a Taylor polynomial approximation. Partial sums are shown, but students must justify convergence and estimate error analytically.\n\nOne student assumes decreasing terms are enough for convergence. Another checks whether terms approach zero, whether alternating terms decrease, and whether a known Maclaurin series applies.\n\nUse series tests and approximation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which series converges?",
          choices: [
            { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, for alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
          choices: [
            { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, maclaurin series for e^x begins",
          choices: [
            { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, which test shows sum n/(n+1) diverges immediately?",
          choices: [
            { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, geometric series sum (5/10)^n from n=0 to infinity equals",
          choices: [
            { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        }
      ]
    },
    {
      title: "Series and Error Analysis",
      image: "",
      imageAlt: "",
      text: `Several infinite series are compared: a geometric series, a p-series, an alternating series, and a Taylor polynomial approximation. Partial sums are shown, but students must justify convergence and estimate error analytically.\n\nOne student assumes decreasing terms are enough for convergence. Another checks whether terms approach zero, whether alternating terms decrease, and whether a known Maclaurin series applies.\n\nUse series tests and approximation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which series converges?",
          choices: [
            { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, for alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
          choices: [
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, maclaurin series for e^x begins",
          choices: [
            { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, which test shows sum n/(n+1) diverges immediately?",
          choices: [
            { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, geometric series sum (5/10)^n from n=0 to infinity equals",
          choices: [
            { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        }
      ]
    },
    {
      title: "Series and Error Analysis",
      image: "",
      imageAlt: "",
      text: `Several infinite series are compared: a geometric series, a p-series, an alternating series, and a Taylor polynomial approximation. Partial sums are shown, but students must justify convergence and estimate error analytically.\n\nOne student assumes decreasing terms are enough for convergence. Another checks whether terms approach zero, whether alternating terms decrease, and whether a known Maclaurin series applies.\n\nUse series tests and approximation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which series converges?",
          choices: [
            { text: "sum 1/n", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum n/(n+1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/sqrt(n)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sum 1/n^2", correct: 1, choiceExplanation: " is correct because it applies p-series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, p=2 is greater than 1. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, for alternating sum (-1)^(n+1)/n^2, error after 2 terms is at most",
          choices: [
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/9", correct: 1, choiceExplanation: " is correct because it applies alternating series error to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, error is bounded by first omitted term. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, maclaurin series for e^x begins",
          choices: [
            { text: "x+x^2+x^3+...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1+x+x^2/2!+x^3/3!+...", correct: 1, choiceExplanation: " is correct because it applies Maclaurin series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, e^x has all positive factorial terms. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "x-x^3/3!+x^5/5!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1-x^2/2!+x^4/4!-...", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, which test shows sum n/(n+1) diverges immediately?",
          choices: [
            { text: "nth-term test", correct: 1, choiceExplanation: " is correct because it applies nth-term test to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, terms do not approach 0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "ratio test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "alternating series test", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "integral test only", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        },
        {
          prompt: "Based on the passage, geometric series sum (5/10)^n from n=0 to infinity equals",
          choices: [
            { text: "5/10", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1+5/10)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "does not converge", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/(1-5/10)", correct: 1, choiceExplanation: " is correct because it applies geometric series to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, sum is 1/(1-r). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 10: Infinite Sequences and Series"
        }
      ]
    }
  ]
});
