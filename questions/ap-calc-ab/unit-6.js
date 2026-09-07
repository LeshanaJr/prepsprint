window.questionBanks = window.questionBanks || {};
window.questionBanks.apCalcAB = window.questionBanks.apCalcAB || [];

window.questionBanks.apCalcAB.push({
  name: "Unit 6: Integration and Accumulation of Change",

  rapidQuestions: [
    {
      prompt: "Let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
      choices: [
        { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
      choices: [
        { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
      choices: [
        { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "What is ∫ 2x(x^2+4)^4 dx?",
      choices: [
        { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Average value of f on [1,5] is",
      choices: [
        { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
      choices: [
        { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
      choices: [
        { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
      choices: [
        { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "What is ∫ 2x(x^2+4)^4 dx?",
      choices: [
        { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Average value of f on [1,5] is",
      choices: [
        { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
      choices: [
        { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
      choices: [
        { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
      choices: [
        { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "What is ∫ 2x(x^2+4)^4 dx?",
      choices: [
        { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Average value of f on [1,5] is",
      choices: [
        { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
      choices: [
        { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
      choices: [
        { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
      choices: [
        { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "What is ∫ 2x(x^2+4)^4 dx?",
      choices: [
        { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Average value of f on [1,5] is",
      choices: [
        { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
      choices: [
        { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
      choices: [
        { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
      choices: [
        { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "What is ∫ 2x(x^2+4)^4 dx?",
      choices: [
        { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Average value of f on [1,5] is",
      choices: [
        { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
      choices: [
        { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
      choices: [
        { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
      choices: [
        { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "What is ∫ 2x(x^2+4)^4 dx?",
      choices: [
        { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Average value of f on [1,5] is",
      choices: [
        { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
      choices: [
        { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
      choices: [
        { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
      choices: [
        { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "What is ∫ 2x(x^2+4)^4 dx?",
      choices: [
        { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Average value of f on [1,5] is",
      choices: [
        { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
      choices: [
        { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
      choices: [
        { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
      choices: [
        { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "What is ∫ 2x(x^2+4)^4 dx?",
      choices: [
        { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Average value of f on [1,5] is",
      choices: [
        { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
      choices: [
        { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
      choices: [
        { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
      choices: [
        { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "What is ∫ 2x(x^2+4)^4 dx?",
      choices: [
        { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Average value of f on [1,5] is",
      choices: [
        { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
      choices: [
        { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
      choices: [
        { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
      choices: [
        { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "What is ∫ 2x(x^2+4)^4 dx?",
      choices: [
        { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    },
    {
      prompt: "Average value of f on [1,5] is",
      choices: [
        { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 6: Integration and Accumulation of Change"
    }
  ],

  passages: [
    {
      title: "Accumulation Scenario",
      image: "",
      imageAlt: "",
      text: `Water enters a tank at rate R(t)=4+sin(t) liters per minute and leaves at rate L(t)=2+0.5t liters per minute for 0≤t≤6. The tank initially contains 20 liters.\n\nStudents compare endpoint rates, net rate, total accumulation, and average value. One student subtracts rates, while another argues that total change must come from a definite integral.\n\nUse accumulation and FTC reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
          choices: [
            { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
          choices: [
            { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
          choices: [
            { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, what is ∫ 2x(x^2+4)^4 dx?",
          choices: [
            { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, average value of f on [1,5] is",
          choices: [
            { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        }
      ]
    },
    {
      title: "Accumulation Scenario",
      image: "",
      imageAlt: "",
      text: `Water enters a tank at rate R(t)=4+sin(t) liters per minute and leaves at rate L(t)=2+0.5t liters per minute for 0≤t≤6. The tank initially contains 20 liters.\n\nStudents compare endpoint rates, net rate, total accumulation, and average value. One student subtracts rates, while another argues that total change must come from a definite integral.\n\nUse accumulation and FTC reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
          choices: [
            { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
          choices: [
            { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
          choices: [
            { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, what is ∫ 2x(x^2+4)^4 dx?",
          choices: [
            { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, average value of f on [1,5] is",
          choices: [
            { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        }
      ]
    },
    {
      title: "Accumulation Scenario",
      image: "",
      imageAlt: "",
      text: `Water enters a tank at rate R(t)=4+sin(t) liters per minute and leaves at rate L(t)=2+0.5t liters per minute for 0≤t≤6. The tank initially contains 20 liters.\n\nStudents compare endpoint rates, net rate, total accumulation, and average value. One student subtracts rates, while another argues that total change must come from a definite integral.\n\nUse accumulation and FTC reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
          choices: [
            { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
          choices: [
            { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
          choices: [
            { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, what is ∫ 2x(x^2+4)^4 dx?",
          choices: [
            { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, average value of f on [1,5] is",
          choices: [
            { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        }
      ]
    },
    {
      title: "Accumulation Scenario",
      image: "",
      imageAlt: "",
      text: `Water enters a tank at rate R(t)=4+sin(t) liters per minute and leaves at rate L(t)=2+0.5t liters per minute for 0≤t≤6. The tank initially contains 20 liters.\n\nStudents compare endpoint rates, net rate, total accumulation, and average value. One student subtracts rates, while another argues that total change must come from a definite integral.\n\nUse accumulation and FTC reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
          choices: [
            { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
          choices: [
            { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
          choices: [
            { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, what is ∫ 2x(x^2+4)^4 dx?",
          choices: [
            { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, average value of f on [1,5] is",
          choices: [
            { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        }
      ]
    },
    {
      title: "Accumulation Scenario",
      image: "",
      imageAlt: "",
      text: `Water enters a tank at rate R(t)=4+sin(t) liters per minute and leaves at rate L(t)=2+0.5t liters per minute for 0≤t≤6. The tank initially contains 20 liters.\n\nStudents compare endpoint rates, net rate, total accumulation, and average value. One student subtracts rates, while another argues that total change must come from a definite integral.\n\nUse accumulation and FTC reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
          choices: [
            { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
          choices: [
            { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
          choices: [
            { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, what is ∫ 2x(x^2+4)^4 dx?",
          choices: [
            { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, average value of f on [1,5] is",
          choices: [
            { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        }
      ]
    },
    {
      title: "Accumulation Scenario",
      image: "",
      imageAlt: "",
      text: `Water enters a tank at rate R(t)=4+sin(t) liters per minute and leaves at rate L(t)=2+0.5t liters per minute for 0≤t≤6. The tank initially contains 20 liters.\n\nStudents compare endpoint rates, net rate, total accumulation, and average value. One student subtracts rates, while another argues that total change must come from a definite integral.\n\nUse accumulation and FTC reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
          choices: [
            { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
          choices: [
            { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
          choices: [
            { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, what is ∫ 2x(x^2+4)^4 dx?",
          choices: [
            { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, average value of f on [1,5] is",
          choices: [
            { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        }
      ]
    },
    {
      title: "Accumulation Scenario",
      image: "",
      imageAlt: "",
      text: `Water enters a tank at rate R(t)=4+sin(t) liters per minute and leaves at rate L(t)=2+0.5t liters per minute for 0≤t≤6. The tank initially contains 20 liters.\n\nStudents compare endpoint rates, net rate, total accumulation, and average value. One student subtracts rates, while another argues that total change must come from a definite integral.\n\nUse accumulation and FTC reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
          choices: [
            { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
          choices: [
            { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
          choices: [
            { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, what is ∫ 2x(x^2+4)^4 dx?",
          choices: [
            { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, average value of f on [1,5] is",
          choices: [
            { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        }
      ]
    },
    {
      title: "Accumulation Scenario",
      image: "",
      imageAlt: "",
      text: `Water enters a tank at rate R(t)=4+sin(t) liters per minute and leaves at rate L(t)=2+0.5t liters per minute for 0≤t≤6. The tank initially contains 20 liters.\n\nStudents compare endpoint rates, net rate, total accumulation, and average value. One student subtracts rates, while another argues that total change must come from a definite integral.\n\nUse accumulation and FTC reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
          choices: [
            { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
          choices: [
            { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
          choices: [
            { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, what is ∫ 2x(x^2+4)^4 dx?",
          choices: [
            { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, average value of f on [1,5] is",
          choices: [
            { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        }
      ]
    },
    {
      title: "Accumulation Scenario",
      image: "",
      imageAlt: "",
      text: `Water enters a tank at rate R(t)=4+sin(t) liters per minute and leaves at rate L(t)=2+0.5t liters per minute for 0≤t≤6. The tank initially contains 20 liters.\n\nStudents compare endpoint rates, net rate, total accumulation, and average value. One student subtracts rates, while another argues that total change must come from a definite integral.\n\nUse accumulation and FTC reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
          choices: [
            { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
          choices: [
            { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
          choices: [
            { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, what is ∫ 2x(x^2+4)^4 dx?",
          choices: [
            { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, average value of f on [1,5] is",
          choices: [
            { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        }
      ]
    },
    {
      title: "Accumulation Scenario",
      image: "",
      imageAlt: "",
      text: `Water enters a tank at rate R(t)=4+sin(t) liters per minute and leaves at rate L(t)=2+0.5t liters per minute for 0≤t≤6. The tank initially contains 20 liters.\n\nStudents compare endpoint rates, net rate, total accumulation, and average value. One student subtracts rates, while another argues that total change must come from a definite integral.\n\nUse accumulation and FTC reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let g(x)=∫_2^x (t^2+1) dt. What is g'(x)?",
          choices: [
            { text: "2x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^3/3+1x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x^2+1", correct: 1, choiceExplanation: " is correct because it applies Fundamental Theorem of Calculus to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, differentiate by evaluating the integrand at x. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, rate r(t)=3t+2 liters/min. Which gives water added from t=1 to t=4?",
          choices: [
            { text: "r'(4)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (3t+2) dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^4 (3t+2) dt", correct: 1, choiceExplanation: " is correct because it applies accumulation from a rate to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, amount is the integral of the rate. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "r(4)-r(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, left Riemann sum with 3 equal subintervals on [0,6] for f(x)=x^2 is",
          choices: [
            { text: "6[f(0)+f(2)+f(4)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2[f(0)+f(2)+f(4)]", correct: 1, choiceExplanation: " is correct because it applies Riemann sums to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, width is 2 and left endpoints are 0,2,4. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2[f(2)+f(4)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3[f(0)+f(3)+f(6)]", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, what is ∫ 2x(x^2+4)^4 dx?",
          choices: [
            { text: "(x^2+4)^5/5 + C", correct: 1, choiceExplanation: " is correct because it applies u-substitution to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, u=x^2+a gives du=2x dx. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "2(x^2+4)^5/5 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "8x(x^2+4)^3 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+4)^4 + C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        },
        {
          prompt: "Based on the passage, average value of f on [1,5] is",
          choices: [
            { text: "∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/5)∫_1^5 f(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "f(5)-f(1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/4)∫_1^5 f(x) dx", correct: 1, choiceExplanation: " is correct because it applies average value of a function to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, divide the integral by interval length. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 6: Integration and Accumulation of Change"
        }
      ]
    }
  ]
});
