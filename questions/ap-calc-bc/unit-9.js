window.questionBanks = window.questionBanks || {};
window.questionBanks.apCalcBC = window.questionBanks.apCalcBC || [];

window.questionBanks.apCalcBC.push({
  name: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions",

  rapidQuestions: [
    {
      prompt: "For x=t^2+1 and y=t^3-t, dy/dx is",
      choices: [
        { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For r(t)=<t^2,t^3>, speed at t=2 is",
      choices: [
        { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Area inside r=2sin θ from 0 to π is",
      choices: [
        { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For a polar curve, dy/dx equals",
      choices: [
        { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Parametric speed is",
      choices: [
        { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For x=t^2+1 and y=t^3-t, dy/dx is",
      choices: [
        { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For r(t)=<t^2,t^3>, speed at t=2 is",
      choices: [
        { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Area inside r=2sin θ from 0 to π is",
      choices: [
        { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For a polar curve, dy/dx equals",
      choices: [
        { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Parametric speed is",
      choices: [
        { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For x=t^2+1 and y=t^3-t, dy/dx is",
      choices: [
        { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For r(t)=<t^2,t^3>, speed at t=2 is",
      choices: [
        { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Area inside r=2sin θ from 0 to π is",
      choices: [
        { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For a polar curve, dy/dx equals",
      choices: [
        { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Parametric speed is",
      choices: [
        { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For x=t^2+1 and y=t^3-t, dy/dx is",
      choices: [
        { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For r(t)=<t^2,t^3>, speed at t=2 is",
      choices: [
        { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Area inside r=2sin θ from 0 to π is",
      choices: [
        { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For a polar curve, dy/dx equals",
      choices: [
        { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Parametric speed is",
      choices: [
        { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For x=t^2+1 and y=t^3-t, dy/dx is",
      choices: [
        { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For r(t)=<t^2,t^3>, speed at t=2 is",
      choices: [
        { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Area inside r=2sin θ from 0 to π is",
      choices: [
        { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For a polar curve, dy/dx equals",
      choices: [
        { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Parametric speed is",
      choices: [
        { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For x=t^2+1 and y=t^3-t, dy/dx is",
      choices: [
        { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For r(t)=<t^2,t^3>, speed at t=2 is",
      choices: [
        { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Area inside r=2sin θ from 0 to π is",
      choices: [
        { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For a polar curve, dy/dx equals",
      choices: [
        { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Parametric speed is",
      choices: [
        { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For x=t^2+1 and y=t^3-t, dy/dx is",
      choices: [
        { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For r(t)=<t^2,t^3>, speed at t=2 is",
      choices: [
        { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Area inside r=2sin θ from 0 to π is",
      choices: [
        { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For a polar curve, dy/dx equals",
      choices: [
        { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Parametric speed is",
      choices: [
        { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For x=t^2+1 and y=t^3-t, dy/dx is",
      choices: [
        { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For r(t)=<t^2,t^3>, speed at t=2 is",
      choices: [
        { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Area inside r=2sin θ from 0 to π is",
      choices: [
        { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For a polar curve, dy/dx equals",
      choices: [
        { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Parametric speed is",
      choices: [
        { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For x=t^2+1 and y=t^3-t, dy/dx is",
      choices: [
        { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For r(t)=<t^2,t^3>, speed at t=2 is",
      choices: [
        { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Area inside r=2sin θ from 0 to π is",
      choices: [
        { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For a polar curve, dy/dx equals",
      choices: [
        { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Parametric speed is",
      choices: [
        { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For x=t^2+1 and y=t^3-t, dy/dx is",
      choices: [
        { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For r(t)=<t^2,t^3>, speed at t=2 is",
      choices: [
        { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Area inside r=2sin θ from 0 to π is",
      choices: [
        { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "For a polar curve, dy/dx equals",
      choices: [
        { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    },
    {
      prompt: "Parametric speed is",
      choices: [
        { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
    }
  ],

  passages: [
    {
      title: "Parametric and Polar Motion",
      image: "",
      imageAlt: "",
      text: `A particle moves in the plane according to x(t)=t^2+1 and y(t)=t^3-t. A second curve is given in polar form by r=2sin θ.\n\nStudents distinguish position, velocity, speed, acceleration, dy/dx, and polar area. One student uses rectangular formulas directly, while another treats x and y as functions of a parameter.\n\nUse parametric, vector, and polar relationships to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, for x=t^2+1 and y=t^3-t, dy/dx is",
          choices: [
            { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for r(t)=<t^2,t^3>, speed at t=2 is",
          choices: [
            { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, area inside r=2sin θ from 0 to π is",
          choices: [
            { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for a polar curve, dy/dx equals",
          choices: [
            { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, parametric speed is",
          choices: [
            { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        }
      ]
    },
    {
      title: "Parametric and Polar Motion",
      image: "",
      imageAlt: "",
      text: `A particle moves in the plane according to x(t)=t^2+1 and y(t)=t^3-t. A second curve is given in polar form by r=2sin θ.\n\nStudents distinguish position, velocity, speed, acceleration, dy/dx, and polar area. One student uses rectangular formulas directly, while another treats x and y as functions of a parameter.\n\nUse parametric, vector, and polar relationships to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, for x=t^2+1 and y=t^3-t, dy/dx is",
          choices: [
            { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for r(t)=<t^2,t^3>, speed at t=2 is",
          choices: [
            { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, area inside r=2sin θ from 0 to π is",
          choices: [
            { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for a polar curve, dy/dx equals",
          choices: [
            { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, parametric speed is",
          choices: [
            { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        }
      ]
    },
    {
      title: "Parametric and Polar Motion",
      image: "",
      imageAlt: "",
      text: `A particle moves in the plane according to x(t)=t^2+1 and y(t)=t^3-t. A second curve is given in polar form by r=2sin θ.\n\nStudents distinguish position, velocity, speed, acceleration, dy/dx, and polar area. One student uses rectangular formulas directly, while another treats x and y as functions of a parameter.\n\nUse parametric, vector, and polar relationships to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, for x=t^2+1 and y=t^3-t, dy/dx is",
          choices: [
            { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for r(t)=<t^2,t^3>, speed at t=2 is",
          choices: [
            { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, area inside r=2sin θ from 0 to π is",
          choices: [
            { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for a polar curve, dy/dx equals",
          choices: [
            { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, parametric speed is",
          choices: [
            { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        }
      ]
    },
    {
      title: "Parametric and Polar Motion",
      image: "",
      imageAlt: "",
      text: `A particle moves in the plane according to x(t)=t^2+1 and y(t)=t^3-t. A second curve is given in polar form by r=2sin θ.\n\nStudents distinguish position, velocity, speed, acceleration, dy/dx, and polar area. One student uses rectangular formulas directly, while another treats x and y as functions of a parameter.\n\nUse parametric, vector, and polar relationships to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, for x=t^2+1 and y=t^3-t, dy/dx is",
          choices: [
            { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for r(t)=<t^2,t^3>, speed at t=2 is",
          choices: [
            { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, area inside r=2sin θ from 0 to π is",
          choices: [
            { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for a polar curve, dy/dx equals",
          choices: [
            { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, parametric speed is",
          choices: [
            { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        }
      ]
    },
    {
      title: "Parametric and Polar Motion",
      image: "",
      imageAlt: "",
      text: `A particle moves in the plane according to x(t)=t^2+1 and y(t)=t^3-t. A second curve is given in polar form by r=2sin θ.\n\nStudents distinguish position, velocity, speed, acceleration, dy/dx, and polar area. One student uses rectangular formulas directly, while another treats x and y as functions of a parameter.\n\nUse parametric, vector, and polar relationships to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, for x=t^2+1 and y=t^3-t, dy/dx is",
          choices: [
            { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for r(t)=<t^2,t^3>, speed at t=2 is",
          choices: [
            { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, area inside r=2sin θ from 0 to π is",
          choices: [
            { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for a polar curve, dy/dx equals",
          choices: [
            { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, parametric speed is",
          choices: [
            { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        }
      ]
    },
    {
      title: "Parametric and Polar Motion",
      image: "",
      imageAlt: "",
      text: `A particle moves in the plane according to x(t)=t^2+1 and y(t)=t^3-t. A second curve is given in polar form by r=2sin θ.\n\nStudents distinguish position, velocity, speed, acceleration, dy/dx, and polar area. One student uses rectangular formulas directly, while another treats x and y as functions of a parameter.\n\nUse parametric, vector, and polar relationships to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, for x=t^2+1 and y=t^3-t, dy/dx is",
          choices: [
            { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for r(t)=<t^2,t^3>, speed at t=2 is",
          choices: [
            { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, area inside r=2sin θ from 0 to π is",
          choices: [
            { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for a polar curve, dy/dx equals",
          choices: [
            { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, parametric speed is",
          choices: [
            { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        }
      ]
    },
    {
      title: "Parametric and Polar Motion",
      image: "",
      imageAlt: "",
      text: `A particle moves in the plane according to x(t)=t^2+1 and y(t)=t^3-t. A second curve is given in polar form by r=2sin θ.\n\nStudents distinguish position, velocity, speed, acceleration, dy/dx, and polar area. One student uses rectangular formulas directly, while another treats x and y as functions of a parameter.\n\nUse parametric, vector, and polar relationships to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, for x=t^2+1 and y=t^3-t, dy/dx is",
          choices: [
            { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for r(t)=<t^2,t^3>, speed at t=2 is",
          choices: [
            { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, area inside r=2sin θ from 0 to π is",
          choices: [
            { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for a polar curve, dy/dx equals",
          choices: [
            { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, parametric speed is",
          choices: [
            { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        }
      ]
    },
    {
      title: "Parametric and Polar Motion",
      image: "",
      imageAlt: "",
      text: `A particle moves in the plane according to x(t)=t^2+1 and y(t)=t^3-t. A second curve is given in polar form by r=2sin θ.\n\nStudents distinguish position, velocity, speed, acceleration, dy/dx, and polar area. One student uses rectangular formulas directly, while another treats x and y as functions of a parameter.\n\nUse parametric, vector, and polar relationships to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, for x=t^2+1 and y=t^3-t, dy/dx is",
          choices: [
            { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for r(t)=<t^2,t^3>, speed at t=2 is",
          choices: [
            { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, area inside r=2sin θ from 0 to π is",
          choices: [
            { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for a polar curve, dy/dx equals",
          choices: [
            { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, parametric speed is",
          choices: [
            { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        }
      ]
    },
    {
      title: "Parametric and Polar Motion",
      image: "",
      imageAlt: "",
      text: `A particle moves in the plane according to x(t)=t^2+1 and y(t)=t^3-t. A second curve is given in polar form by r=2sin θ.\n\nStudents distinguish position, velocity, speed, acceleration, dy/dx, and polar area. One student uses rectangular formulas directly, while another treats x and y as functions of a parameter.\n\nUse parametric, vector, and polar relationships to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, for x=t^2+1 and y=t^3-t, dy/dx is",
          choices: [
            { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for r(t)=<t^2,t^3>, speed at t=2 is",
          choices: [
            { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, area inside r=2sin θ from 0 to π is",
          choices: [
            { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for a polar curve, dy/dx equals",
          choices: [
            { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, parametric speed is",
          choices: [
            { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        }
      ]
    },
    {
      title: "Parametric and Polar Motion",
      image: "",
      imageAlt: "",
      text: `A particle moves in the plane according to x(t)=t^2+1 and y(t)=t^3-t. A second curve is given in polar form by r=2sin θ.\n\nStudents distinguish position, velocity, speed, acceleration, dy/dx, and polar area. One student uses rectangular formulas directly, while another treats x and y as functions of a parameter.\n\nUse parametric, vector, and polar relationships to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, for x=t^2+1 and y=t^3-t, dy/dx is",
          choices: [
            { text: "(2t)/(3t^2-1)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3t^2-1", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2t", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(3t^2-1)/(2t)", correct: 1, choiceExplanation: " is correct because it applies parametric derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dy/dx=(dy/dt)/(dx/dt). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for r(t)=<t^2,t^3>, speed at t=2 is",
          choices: [
            { text: "<4,12>", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "20", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(16+144)", correct: 1, choiceExplanation: " is correct because it applies vector speed to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity <2t,3t^2>. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "sqrt(4+8)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, area inside r=2sin θ from 0 to π is",
          choices: [
            { text: "(1/2)∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(1/2)∫_0^π (2sin θ)^2 dθ", correct: 1, choiceExplanation: " is correct because it applies polar area to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use one-half integral of r squared. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "∫_0^π 2sin θ dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "π∫_0^π (2sin θ)^2 dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, for a polar curve, dy/dx equals",
          choices: [
            { text: "(dy/dθ)/(dx/dθ)", correct: 1, choiceExplanation: " is correct because it applies polar slope to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, x and y are functions of θ. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "dr/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "r/(dr/dθ)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dx/dθ+dy/dθ", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        },
        {
          prompt: "Based on the passage, parametric speed is",
          choices: [
            { text: "dx/dt+dy/dt", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt(x(t)^2+y(t)^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "dy/dx", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "sqrt((dx/dt)^2+(dy/dt)^2)", correct: 1, choiceExplanation: " is correct because it applies speed in the plane to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed is magnitude of velocity. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
        }
      ]
    }
  ]
});
