window.questionBanks = window.questionBanks || {};
window.questionBanks.apCalcAB = window.questionBanks.apCalcAB || [];

window.questionBanks.apCalcAB.push({
  name: "Unit 7: Differential Equations",

  rapidQuestions: [
    {
      prompt: "Which solves dy/dx=1y?",
      choices: [
        { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "For dy/dx=x-y, zero slopes occur on",
      choices: [
        { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "If dy/dx=ky and y(0)=5, what is y?",
      choices: [
        { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
      choices: [
        { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "dy/dt=0.2y(1-y/500) has carrying capacity",
      choices: [
        { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Which solves dy/dx=1y?",
      choices: [
        { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "For dy/dx=x-y, zero slopes occur on",
      choices: [
        { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "If dy/dx=ky and y(0)=5, what is y?",
      choices: [
        { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
      choices: [
        { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "dy/dt=0.2y(1-y/500) has carrying capacity",
      choices: [
        { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Which solves dy/dx=1y?",
      choices: [
        { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "For dy/dx=x-y, zero slopes occur on",
      choices: [
        { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "If dy/dx=ky and y(0)=5, what is y?",
      choices: [
        { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
      choices: [
        { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "dy/dt=0.2y(1-y/500) has carrying capacity",
      choices: [
        { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Which solves dy/dx=1y?",
      choices: [
        { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "For dy/dx=x-y, zero slopes occur on",
      choices: [
        { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "If dy/dx=ky and y(0)=5, what is y?",
      choices: [
        { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
      choices: [
        { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "dy/dt=0.2y(1-y/500) has carrying capacity",
      choices: [
        { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Which solves dy/dx=1y?",
      choices: [
        { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "For dy/dx=x-y, zero slopes occur on",
      choices: [
        { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "If dy/dx=ky and y(0)=5, what is y?",
      choices: [
        { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
      choices: [
        { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "dy/dt=0.2y(1-y/500) has carrying capacity",
      choices: [
        { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Which solves dy/dx=1y?",
      choices: [
        { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "For dy/dx=x-y, zero slopes occur on",
      choices: [
        { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "If dy/dx=ky and y(0)=5, what is y?",
      choices: [
        { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
      choices: [
        { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "dy/dt=0.2y(1-y/500) has carrying capacity",
      choices: [
        { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Which solves dy/dx=1y?",
      choices: [
        { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "For dy/dx=x-y, zero slopes occur on",
      choices: [
        { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "If dy/dx=ky and y(0)=5, what is y?",
      choices: [
        { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
      choices: [
        { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "dy/dt=0.2y(1-y/500) has carrying capacity",
      choices: [
        { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Which solves dy/dx=1y?",
      choices: [
        { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "For dy/dx=x-y, zero slopes occur on",
      choices: [
        { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "If dy/dx=ky and y(0)=5, what is y?",
      choices: [
        { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
      choices: [
        { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "dy/dt=0.2y(1-y/500) has carrying capacity",
      choices: [
        { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Which solves dy/dx=1y?",
      choices: [
        { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "For dy/dx=x-y, zero slopes occur on",
      choices: [
        { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "If dy/dx=ky and y(0)=5, what is y?",
      choices: [
        { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
      choices: [
        { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "dy/dt=0.2y(1-y/500) has carrying capacity",
      choices: [
        { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Which solves dy/dx=1y?",
      choices: [
        { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "For dy/dx=x-y, zero slopes occur on",
      choices: [
        { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "If dy/dx=ky and y(0)=5, what is y?",
      choices: [
        { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "Euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
      choices: [
        { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 7: Differential Equations"
    },
    {
      prompt: "dy/dt=0.2y(1-y/500) has carrying capacity",
      choices: [
        { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 7: Differential Equations"
    }
  ],

  passages: [
    {
      title: "Differential Equation Model",
      image: "",
      imageAlt: "",
      text: `A population P satisfies dP/dt=0.3P(1-P/1000). A slope field is drawn for several initial values.\n\nStudents compare exponential and logistic behavior, equilibrium solutions, and Euler approximations. One student treats the growth rate as constant, while another checks how the factor involving P changes the sign and size of dP/dt.\n\nUse the differential equation and slope field reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which solves dy/dx=1y?",
          choices: [
            { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, for dy/dx=x-y, zero slopes occur on",
          choices: [
            { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, if dy/dx=ky and y(0)=5, what is y?",
          choices: [
            { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
          choices: [
            { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, dy/dt=0.2y(1-y/500) has carrying capacity",
          choices: [
            { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        }
      ]
    },
    {
      title: "Differential Equation Model",
      image: "",
      imageAlt: "",
      text: `A population P satisfies dP/dt=0.3P(1-P/1000). A slope field is drawn for several initial values.\n\nStudents compare exponential and logistic behavior, equilibrium solutions, and Euler approximations. One student treats the growth rate as constant, while another checks how the factor involving P changes the sign and size of dP/dt.\n\nUse the differential equation and slope field reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which solves dy/dx=1y?",
          choices: [
            { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, for dy/dx=x-y, zero slopes occur on",
          choices: [
            { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, if dy/dx=ky and y(0)=5, what is y?",
          choices: [
            { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
          choices: [
            { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, dy/dt=0.2y(1-y/500) has carrying capacity",
          choices: [
            { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        }
      ]
    },
    {
      title: "Differential Equation Model",
      image: "",
      imageAlt: "",
      text: `A population P satisfies dP/dt=0.3P(1-P/1000). A slope field is drawn for several initial values.\n\nStudents compare exponential and logistic behavior, equilibrium solutions, and Euler approximations. One student treats the growth rate as constant, while another checks how the factor involving P changes the sign and size of dP/dt.\n\nUse the differential equation and slope field reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which solves dy/dx=1y?",
          choices: [
            { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, for dy/dx=x-y, zero slopes occur on",
          choices: [
            { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, if dy/dx=ky and y(0)=5, what is y?",
          choices: [
            { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
          choices: [
            { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, dy/dt=0.2y(1-y/500) has carrying capacity",
          choices: [
            { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        }
      ]
    },
    {
      title: "Differential Equation Model",
      image: "",
      imageAlt: "",
      text: `A population P satisfies dP/dt=0.3P(1-P/1000). A slope field is drawn for several initial values.\n\nStudents compare exponential and logistic behavior, equilibrium solutions, and Euler approximations. One student treats the growth rate as constant, while another checks how the factor involving P changes the sign and size of dP/dt.\n\nUse the differential equation and slope field reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which solves dy/dx=1y?",
          choices: [
            { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, for dy/dx=x-y, zero slopes occur on",
          choices: [
            { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, if dy/dx=ky and y(0)=5, what is y?",
          choices: [
            { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
          choices: [
            { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, dy/dt=0.2y(1-y/500) has carrying capacity",
          choices: [
            { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        }
      ]
    },
    {
      title: "Differential Equation Model",
      image: "",
      imageAlt: "",
      text: `A population P satisfies dP/dt=0.3P(1-P/1000). A slope field is drawn for several initial values.\n\nStudents compare exponential and logistic behavior, equilibrium solutions, and Euler approximations. One student treats the growth rate as constant, while another checks how the factor involving P changes the sign and size of dP/dt.\n\nUse the differential equation and slope field reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which solves dy/dx=1y?",
          choices: [
            { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, for dy/dx=x-y, zero slopes occur on",
          choices: [
            { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, if dy/dx=ky and y(0)=5, what is y?",
          choices: [
            { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
          choices: [
            { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, dy/dt=0.2y(1-y/500) has carrying capacity",
          choices: [
            { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        }
      ]
    },
    {
      title: "Differential Equation Model",
      image: "",
      imageAlt: "",
      text: `A population P satisfies dP/dt=0.3P(1-P/1000). A slope field is drawn for several initial values.\n\nStudents compare exponential and logistic behavior, equilibrium solutions, and Euler approximations. One student treats the growth rate as constant, while another checks how the factor involving P changes the sign and size of dP/dt.\n\nUse the differential equation and slope field reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which solves dy/dx=1y?",
          choices: [
            { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, for dy/dx=x-y, zero slopes occur on",
          choices: [
            { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, if dy/dx=ky and y(0)=5, what is y?",
          choices: [
            { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
          choices: [
            { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, dy/dt=0.2y(1-y/500) has carrying capacity",
          choices: [
            { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        }
      ]
    },
    {
      title: "Differential Equation Model",
      image: "",
      imageAlt: "",
      text: `A population P satisfies dP/dt=0.3P(1-P/1000). A slope field is drawn for several initial values.\n\nStudents compare exponential and logistic behavior, equilibrium solutions, and Euler approximations. One student treats the growth rate as constant, while another checks how the factor involving P changes the sign and size of dP/dt.\n\nUse the differential equation and slope field reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which solves dy/dx=1y?",
          choices: [
            { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, for dy/dx=x-y, zero slopes occur on",
          choices: [
            { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, if dy/dx=ky and y(0)=5, what is y?",
          choices: [
            { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
          choices: [
            { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, dy/dt=0.2y(1-y/500) has carrying capacity",
          choices: [
            { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        }
      ]
    },
    {
      title: "Differential Equation Model",
      image: "",
      imageAlt: "",
      text: `A population P satisfies dP/dt=0.3P(1-P/1000). A slope field is drawn for several initial values.\n\nStudents compare exponential and logistic behavior, equilibrium solutions, and Euler approximations. One student treats the growth rate as constant, while another checks how the factor involving P changes the sign and size of dP/dt.\n\nUse the differential equation and slope field reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which solves dy/dx=1y?",
          choices: [
            { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, for dy/dx=x-y, zero slopes occur on",
          choices: [
            { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, if dy/dx=ky and y(0)=5, what is y?",
          choices: [
            { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
          choices: [
            { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, dy/dt=0.2y(1-y/500) has carrying capacity",
          choices: [
            { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        }
      ]
    },
    {
      title: "Differential Equation Model",
      image: "",
      imageAlt: "",
      text: `A population P satisfies dP/dt=0.3P(1-P/1000). A slope field is drawn for several initial values.\n\nStudents compare exponential and logistic behavior, equilibrium solutions, and Euler approximations. One student treats the growth rate as constant, while another checks how the factor involving P changes the sign and size of dP/dt.\n\nUse the differential equation and slope field reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which solves dy/dx=1y?",
          choices: [
            { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, for dy/dx=x-y, zero slopes occur on",
          choices: [
            { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, if dy/dx=ky and y(0)=5, what is y?",
          choices: [
            { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
          choices: [
            { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, dy/dt=0.2y(1-y/500) has carrying capacity",
          choices: [
            { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        }
      ]
    },
    {
      title: "Differential Equation Model",
      image: "",
      imageAlt: "",
      text: `A population P satisfies dP/dt=0.3P(1-P/1000). A slope field is drawn for several initial values.\n\nStudents compare exponential and logistic behavior, equilibrium solutions, and Euler approximations. One student treats the growth rate as constant, while another checks how the factor involving P changes the sign and size of dP/dt.\n\nUse the differential equation and slope field reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, which solves dy/dx=1y?",
          choices: [
            { text: "y=1x+C", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Cx^1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=e^x+1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=Ce^(1x)", correct: 1, choiceExplanation: " is correct because it applies separable differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/y=a dx integrates to an exponential. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, for dy/dx=x-y, zero slopes occur on",
          choices: [
            { text: "x=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=x", correct: 1, choiceExplanation: " is correct because it applies slope fields to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, set x-y=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=-x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, if dy/dx=ky and y(0)=5, what is y?",
          choices: [
            { text: "y=e^(5kx)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=5e^(kx)", correct: 1, choiceExplanation: " is correct because it applies exponential models to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, proportional growth gives an exponential solution. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y=5+kx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "y=kx^2+5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, euler's method with step 0.5 for dy/dx=x+y from (0,1) gives next y",
          choices: [
            { text: "1.5", correct: 1, choiceExplanation: " is correct because it applies Euler's method to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, y_new=1+0.5(1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "0.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 7: Differential Equations"
        },
        {
          prompt: "Based on the passage, dy/dt=0.2y(1-y/500) has carrying capacity",
          choices: [
            { text: "0.2", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "100", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "250", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "500", correct: 1, choiceExplanation: " is correct because it applies logistic differential equations to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, growth stops at y=500. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 7: Differential Equations"
        }
      ]
    }
  ]
});
