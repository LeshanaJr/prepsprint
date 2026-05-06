window.questionBanks = window.questionBanks || {};
window.questionBanks.apCalcAB = window.questionBanks.apCalcAB || [];

window.questionBanks.apCalcAB.push({
  name: "Unit 8: Applications of Integration",

  rapidQuestions: [
    {
      prompt: "Area between y=x and y=x^2 on [0,1] is",
      choices: [
        { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Region under y=x^2 from 0 to 2 revolved around x-axis has volume",
      choices: [
        { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Square cross sections under y=sin x on [0,π] give volume",
      choices: [
        { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "If v(t) is velocity, ∫_1^4 |v(t)| dt represents",
      choices: [
        { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Arc length of y=f(x) from x=1 to x=3 is",
      choices: [
        { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Area between y=x and y=x^2 on [0,1] is",
      choices: [
        { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Region under y=x^2 from 0 to 2 revolved around x-axis has volume",
      choices: [
        { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Square cross sections under y=sin x on [0,π] give volume",
      choices: [
        { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "If v(t) is velocity, ∫_1^4 |v(t)| dt represents",
      choices: [
        { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Arc length of y=f(x) from x=1 to x=3 is",
      choices: [
        { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Area between y=x and y=x^2 on [0,1] is",
      choices: [
        { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Region under y=x^2 from 0 to 2 revolved around x-axis has volume",
      choices: [
        { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Square cross sections under y=sin x on [0,π] give volume",
      choices: [
        { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "If v(t) is velocity, ∫_1^4 |v(t)| dt represents",
      choices: [
        { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Arc length of y=f(x) from x=1 to x=3 is",
      choices: [
        { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Area between y=x and y=x^2 on [0,1] is",
      choices: [
        { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Region under y=x^2 from 0 to 2 revolved around x-axis has volume",
      choices: [
        { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Square cross sections under y=sin x on [0,π] give volume",
      choices: [
        { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "If v(t) is velocity, ∫_1^4 |v(t)| dt represents",
      choices: [
        { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Arc length of y=f(x) from x=1 to x=3 is",
      choices: [
        { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Area between y=x and y=x^2 on [0,1] is",
      choices: [
        { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Region under y=x^2 from 0 to 2 revolved around x-axis has volume",
      choices: [
        { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Square cross sections under y=sin x on [0,π] give volume",
      choices: [
        { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "If v(t) is velocity, ∫_1^4 |v(t)| dt represents",
      choices: [
        { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Arc length of y=f(x) from x=1 to x=3 is",
      choices: [
        { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Area between y=x and y=x^2 on [0,1] is",
      choices: [
        { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Region under y=x^2 from 0 to 2 revolved around x-axis has volume",
      choices: [
        { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Square cross sections under y=sin x on [0,π] give volume",
      choices: [
        { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "If v(t) is velocity, ∫_1^4 |v(t)| dt represents",
      choices: [
        { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Arc length of y=f(x) from x=1 to x=3 is",
      choices: [
        { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Area between y=x and y=x^2 on [0,1] is",
      choices: [
        { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Region under y=x^2 from 0 to 2 revolved around x-axis has volume",
      choices: [
        { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Square cross sections under y=sin x on [0,π] give volume",
      choices: [
        { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "If v(t) is velocity, ∫_1^4 |v(t)| dt represents",
      choices: [
        { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Arc length of y=f(x) from x=1 to x=3 is",
      choices: [
        { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Area between y=x and y=x^2 on [0,1] is",
      choices: [
        { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Region under y=x^2 from 0 to 2 revolved around x-axis has volume",
      choices: [
        { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Square cross sections under y=sin x on [0,π] give volume",
      choices: [
        { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "If v(t) is velocity, ∫_1^4 |v(t)| dt represents",
      choices: [
        { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Arc length of y=f(x) from x=1 to x=3 is",
      choices: [
        { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Area between y=x and y=x^2 on [0,1] is",
      choices: [
        { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Region under y=x^2 from 0 to 2 revolved around x-axis has volume",
      choices: [
        { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Square cross sections under y=sin x on [0,π] give volume",
      choices: [
        { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "If v(t) is velocity, ∫_1^4 |v(t)| dt represents",
      choices: [
        { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Arc length of y=f(x) from x=1 to x=3 is",
      choices: [
        { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Area between y=x and y=x^2 on [0,1] is",
      choices: [
        { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Region under y=x^2 from 0 to 2 revolved around x-axis has volume",
      choices: [
        { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Square cross sections under y=sin x on [0,π] give volume",
      choices: [
        { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "If v(t) is velocity, ∫_1^4 |v(t)| dt represents",
      choices: [
        { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 8: Applications of Integration"
    },
    {
      prompt: "Arc length of y=f(x) from x=1 to x=3 is",
      choices: [
        { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 8: Applications of Integration"
    }
  ],

  passages: [
    {
      title: "Area and Volume Setup",
      image: "",
      imageAlt: "",
      text: `A region in the first quadrant is bounded by y=x and y=x^2 from x=0 to x=1. In a related problem, square cross sections are perpendicular to the x-axis.\n\nStudents decide whether to subtract top minus bottom, square a radius or side length, and include π. They also compare displacement, distance, and accumulated change.\n\nUse integral setup reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, area between y=x and y=x^2 on [0,1] is",
          choices: [
            { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, region under y=x^2 from 0 to 2 revolved around x-axis has volume",
          choices: [
            { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, square cross sections under y=sin x on [0,π] give volume",
          choices: [
            { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, if v(t) is velocity, ∫_1^4 |v(t)| dt represents",
          choices: [
            { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, arc length of y=f(x) from x=1 to x=3 is",
          choices: [
            { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        }
      ]
    },
    {
      title: "Area and Volume Setup",
      image: "",
      imageAlt: "",
      text: `A region in the first quadrant is bounded by y=x and y=x^2 from x=0 to x=1. In a related problem, square cross sections are perpendicular to the x-axis.\n\nStudents decide whether to subtract top minus bottom, square a radius or side length, and include π. They also compare displacement, distance, and accumulated change.\n\nUse integral setup reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, area between y=x and y=x^2 on [0,1] is",
          choices: [
            { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, region under y=x^2 from 0 to 2 revolved around x-axis has volume",
          choices: [
            { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, square cross sections under y=sin x on [0,π] give volume",
          choices: [
            { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, if v(t) is velocity, ∫_1^4 |v(t)| dt represents",
          choices: [
            { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, arc length of y=f(x) from x=1 to x=3 is",
          choices: [
            { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        }
      ]
    },
    {
      title: "Area and Volume Setup",
      image: "",
      imageAlt: "",
      text: `A region in the first quadrant is bounded by y=x and y=x^2 from x=0 to x=1. In a related problem, square cross sections are perpendicular to the x-axis.\n\nStudents decide whether to subtract top minus bottom, square a radius or side length, and include π. They also compare displacement, distance, and accumulated change.\n\nUse integral setup reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, area between y=x and y=x^2 on [0,1] is",
          choices: [
            { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, region under y=x^2 from 0 to 2 revolved around x-axis has volume",
          choices: [
            { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, square cross sections under y=sin x on [0,π] give volume",
          choices: [
            { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, if v(t) is velocity, ∫_1^4 |v(t)| dt represents",
          choices: [
            { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, arc length of y=f(x) from x=1 to x=3 is",
          choices: [
            { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        }
      ]
    },
    {
      title: "Area and Volume Setup",
      image: "",
      imageAlt: "",
      text: `A region in the first quadrant is bounded by y=x and y=x^2 from x=0 to x=1. In a related problem, square cross sections are perpendicular to the x-axis.\n\nStudents decide whether to subtract top minus bottom, square a radius or side length, and include π. They also compare displacement, distance, and accumulated change.\n\nUse integral setup reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, area between y=x and y=x^2 on [0,1] is",
          choices: [
            { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, region under y=x^2 from 0 to 2 revolved around x-axis has volume",
          choices: [
            { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, square cross sections under y=sin x on [0,π] give volume",
          choices: [
            { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, if v(t) is velocity, ∫_1^4 |v(t)| dt represents",
          choices: [
            { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, arc length of y=f(x) from x=1 to x=3 is",
          choices: [
            { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        }
      ]
    },
    {
      title: "Area and Volume Setup",
      image: "",
      imageAlt: "",
      text: `A region in the first quadrant is bounded by y=x and y=x^2 from x=0 to x=1. In a related problem, square cross sections are perpendicular to the x-axis.\n\nStudents decide whether to subtract top minus bottom, square a radius or side length, and include π. They also compare displacement, distance, and accumulated change.\n\nUse integral setup reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, area between y=x and y=x^2 on [0,1] is",
          choices: [
            { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, region under y=x^2 from 0 to 2 revolved around x-axis has volume",
          choices: [
            { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, square cross sections under y=sin x on [0,π] give volume",
          choices: [
            { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, if v(t) is velocity, ∫_1^4 |v(t)| dt represents",
          choices: [
            { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, arc length of y=f(x) from x=1 to x=3 is",
          choices: [
            { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        }
      ]
    },
    {
      title: "Area and Volume Setup",
      image: "",
      imageAlt: "",
      text: `A region in the first quadrant is bounded by y=x and y=x^2 from x=0 to x=1. In a related problem, square cross sections are perpendicular to the x-axis.\n\nStudents decide whether to subtract top minus bottom, square a radius or side length, and include π. They also compare displacement, distance, and accumulated change.\n\nUse integral setup reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, area between y=x and y=x^2 on [0,1] is",
          choices: [
            { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, region under y=x^2 from 0 to 2 revolved around x-axis has volume",
          choices: [
            { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, square cross sections under y=sin x on [0,π] give volume",
          choices: [
            { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, if v(t) is velocity, ∫_1^4 |v(t)| dt represents",
          choices: [
            { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, arc length of y=f(x) from x=1 to x=3 is",
          choices: [
            { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        }
      ]
    },
    {
      title: "Area and Volume Setup",
      image: "",
      imageAlt: "",
      text: `A region in the first quadrant is bounded by y=x and y=x^2 from x=0 to x=1. In a related problem, square cross sections are perpendicular to the x-axis.\n\nStudents decide whether to subtract top minus bottom, square a radius or side length, and include π. They also compare displacement, distance, and accumulated change.\n\nUse integral setup reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, area between y=x and y=x^2 on [0,1] is",
          choices: [
            { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, region under y=x^2 from 0 to 2 revolved around x-axis has volume",
          choices: [
            { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, square cross sections under y=sin x on [0,π] give volume",
          choices: [
            { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, if v(t) is velocity, ∫_1^4 |v(t)| dt represents",
          choices: [
            { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, arc length of y=f(x) from x=1 to x=3 is",
          choices: [
            { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        }
      ]
    },
    {
      title: "Area and Volume Setup",
      image: "",
      imageAlt: "",
      text: `A region in the first quadrant is bounded by y=x and y=x^2 from x=0 to x=1. In a related problem, square cross sections are perpendicular to the x-axis.\n\nStudents decide whether to subtract top minus bottom, square a radius or side length, and include π. They also compare displacement, distance, and accumulated change.\n\nUse integral setup reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, area between y=x and y=x^2 on [0,1] is",
          choices: [
            { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, region under y=x^2 from 0 to 2 revolved around x-axis has volume",
          choices: [
            { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, square cross sections under y=sin x on [0,π] give volume",
          choices: [
            { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, if v(t) is velocity, ∫_1^4 |v(t)| dt represents",
          choices: [
            { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, arc length of y=f(x) from x=1 to x=3 is",
          choices: [
            { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        }
      ]
    },
    {
      title: "Area and Volume Setup",
      image: "",
      imageAlt: "",
      text: `A region in the first quadrant is bounded by y=x and y=x^2 from x=0 to x=1. In a related problem, square cross sections are perpendicular to the x-axis.\n\nStudents decide whether to subtract top minus bottom, square a radius or side length, and include π. They also compare displacement, distance, and accumulated change.\n\nUse integral setup reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, area between y=x and y=x^2 on [0,1] is",
          choices: [
            { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, region under y=x^2 from 0 to 2 revolved around x-axis has volume",
          choices: [
            { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, square cross sections under y=sin x on [0,π] give volume",
          choices: [
            { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, if v(t) is velocity, ∫_1^4 |v(t)| dt represents",
          choices: [
            { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, arc length of y=f(x) from x=1 to x=3 is",
          choices: [
            { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        }
      ]
    },
    {
      title: "Area and Volume Setup",
      image: "",
      imageAlt: "",
      text: `A region in the first quadrant is bounded by y=x and y=x^2 from x=0 to x=1. In a related problem, square cross sections are perpendicular to the x-axis.\n\nStudents decide whether to subtract top minus bottom, square a radius or side length, and include π. They also compare displacement, distance, and accumulated change.\n\nUse integral setup reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, area between y=x and y=x^2 on [0,1] is",
          choices: [
            { text: "∫_0^1 (x^2-x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 x*x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x+x^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^1 (x-x^2) dx", correct: 1, choiceExplanation: " is correct because it applies area between curves to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, top minus bottom is x-x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, region under y=x^2 from 0 to 2 revolved around x-axis has volume",
          choices: [
            { text: "2π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^2 x^4 dx", correct: 1, choiceExplanation: " is correct because it applies disk method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, radius is x^2. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^2 x^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, square cross sections under y=sin x on [0,π] give volume",
          choices: [
            { text: "2π∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π (sin x)^2 dx", correct: 1, choiceExplanation: " is correct because it applies cross-sectional volume to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, square area is side squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "π∫_0^π (sin x)^2 dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_0^π sin x dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, if v(t) is velocity, ∫_1^4 |v(t)| dt represents",
          choices: [
            { text: "total distance traveled", correct: 1, choiceExplanation: " is correct because it applies distance from velocity to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, integrating speed gives distance. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "displacement", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "average velocity", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "acceleration at t=4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 8: Applications of Integration"
        },
        {
          prompt: "Based on the passage, arc length of y=f(x) from x=1 to x=3 is",
          choices: [
            { text: "∫_1^3 sqrt(1+f(x)^2) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 f'(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 2πf(x) dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "∫_1^3 sqrt(1+(f'(x))^2) dx", correct: 1, choiceExplanation: " is correct because it applies arc length to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use sqrt(1+(dy/dx)^2). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 8: Applications of Integration"
        }
      ]
    }
  ]
});
