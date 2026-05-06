window.questionBanks = window.questionBanks || {};
window.questionBanks.apCalcAB = window.questionBanks.apCalcAB || [];

window.questionBanks.apCalcAB.push({
  name: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions",

  rapidQuestions: [
    {
      prompt: "Let f(x)=sin(1x^2). What is f'(x)?",
      choices: [
        { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If x^2+y^2=4, what is dy/dx?",
      choices: [
        { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=ln(x^2+3). What is f'(x)?",
      choices: [
        { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
      choices: [
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let y=e^(5x)cos x. Which expression gives dy/dx?",
      choices: [
        { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=sin(1x^2). What is f'(x)?",
      choices: [
        { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If x^2+y^2=4, what is dy/dx?",
      choices: [
        { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=ln(x^2+3). What is f'(x)?",
      choices: [
        { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
      choices: [
        { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let y=e^(5x)cos x. Which expression gives dy/dx?",
      choices: [
        { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=sin(1x^2). What is f'(x)?",
      choices: [
        { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If x^2+y^2=4, what is dy/dx?",
      choices: [
        { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=ln(x^2+3). What is f'(x)?",
      choices: [
        { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
      choices: [
        { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let y=e^(5x)cos x. Which expression gives dy/dx?",
      choices: [
        { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=sin(1x^2). What is f'(x)?",
      choices: [
        { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If x^2+y^2=4, what is dy/dx?",
      choices: [
        { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=ln(x^2+3). What is f'(x)?",
      choices: [
        { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
      choices: [
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let y=e^(5x)cos x. Which expression gives dy/dx?",
      choices: [
        { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=sin(1x^2). What is f'(x)?",
      choices: [
        { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If x^2+y^2=4, what is dy/dx?",
      choices: [
        { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=ln(x^2+3). What is f'(x)?",
      choices: [
        { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
      choices: [
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let y=e^(5x)cos x. Which expression gives dy/dx?",
      choices: [
        { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=sin(1x^2). What is f'(x)?",
      choices: [
        { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If x^2+y^2=4, what is dy/dx?",
      choices: [
        { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=ln(x^2+3). What is f'(x)?",
      choices: [
        { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
      choices: [
        { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let y=e^(5x)cos x. Which expression gives dy/dx?",
      choices: [
        { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=sin(1x^2). What is f'(x)?",
      choices: [
        { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If x^2+y^2=4, what is dy/dx?",
      choices: [
        { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=ln(x^2+3). What is f'(x)?",
      choices: [
        { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
      choices: [
        { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let y=e^(5x)cos x. Which expression gives dy/dx?",
      choices: [
        { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=sin(1x^2). What is f'(x)?",
      choices: [
        { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If x^2+y^2=4, what is dy/dx?",
      choices: [
        { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=ln(x^2+3). What is f'(x)?",
      choices: [
        { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
      choices: [
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let y=e^(5x)cos x. Which expression gives dy/dx?",
      choices: [
        { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=sin(1x^2). What is f'(x)?",
      choices: [
        { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If x^2+y^2=4, what is dy/dx?",
      choices: [
        { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=ln(x^2+3). What is f'(x)?",
      choices: [
        { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
      choices: [
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let y=e^(5x)cos x. Which expression gives dy/dx?",
      choices: [
        { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=sin(1x^2). What is f'(x)?",
      choices: [
        { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If x^2+y^2=4, what is dy/dx?",
      choices: [
        { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let f(x)=ln(x^2+3). What is f'(x)?",
      choices: [
        { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "If f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
      choices: [
        { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    },
    {
      prompt: "Let y=e^(5x)cos x. Which expression gives dy/dx?",
      choices: [
        { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
    }
  ],

  passages: [
    {
      title: "Composite and Implicit Differentiation",
      image: "",
      imageAlt: "",
      text: `Two functions are defined by g(x)=sin(x^2)+ln(x+3) and an implicit curve x^2+y^2=25. Students compare chain rule, product rule, inverse derivatives, and implicit differentiation.\n\nOne student differentiates the outside function but forgets the inside derivative. Another treats y as a constant in the implicit equation.\n\nUse composite and implicit differentiation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=sin(1x^2). What is f'(x)?",
          choices: [
            { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if x^2+y^2=4, what is dy/dx?",
          choices: [
            { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let f(x)=ln(x^2+3). What is f'(x)?",
          choices: [
            { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
          choices: [
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let y=e^(5x)cos x. Which expression gives dy/dx?",
          choices: [
            { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        }
      ]
    },
    {
      title: "Composite and Implicit Differentiation",
      image: "",
      imageAlt: "",
      text: `Two functions are defined by g(x)=sin(x^2)+ln(x+3) and an implicit curve x^2+y^2=25. Students compare chain rule, product rule, inverse derivatives, and implicit differentiation.\n\nOne student differentiates the outside function but forgets the inside derivative. Another treats y as a constant in the implicit equation.\n\nUse composite and implicit differentiation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=sin(1x^2). What is f'(x)?",
          choices: [
            { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if x^2+y^2=4, what is dy/dx?",
          choices: [
            { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let f(x)=ln(x^2+3). What is f'(x)?",
          choices: [
            { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
          choices: [
            { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let y=e^(5x)cos x. Which expression gives dy/dx?",
          choices: [
            { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        }
      ]
    },
    {
      title: "Composite and Implicit Differentiation",
      image: "",
      imageAlt: "",
      text: `Two functions are defined by g(x)=sin(x^2)+ln(x+3) and an implicit curve x^2+y^2=25. Students compare chain rule, product rule, inverse derivatives, and implicit differentiation.\n\nOne student differentiates the outside function but forgets the inside derivative. Another treats y as a constant in the implicit equation.\n\nUse composite and implicit differentiation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=sin(1x^2). What is f'(x)?",
          choices: [
            { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if x^2+y^2=4, what is dy/dx?",
          choices: [
            { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let f(x)=ln(x^2+3). What is f'(x)?",
          choices: [
            { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
          choices: [
            { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let y=e^(5x)cos x. Which expression gives dy/dx?",
          choices: [
            { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        }
      ]
    },
    {
      title: "Composite and Implicit Differentiation",
      image: "",
      imageAlt: "",
      text: `Two functions are defined by g(x)=sin(x^2)+ln(x+3) and an implicit curve x^2+y^2=25. Students compare chain rule, product rule, inverse derivatives, and implicit differentiation.\n\nOne student differentiates the outside function but forgets the inside derivative. Another treats y as a constant in the implicit equation.\n\nUse composite and implicit differentiation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=sin(1x^2). What is f'(x)?",
          choices: [
            { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if x^2+y^2=4, what is dy/dx?",
          choices: [
            { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let f(x)=ln(x^2+3). What is f'(x)?",
          choices: [
            { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
          choices: [
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let y=e^(5x)cos x. Which expression gives dy/dx?",
          choices: [
            { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        }
      ]
    },
    {
      title: "Composite and Implicit Differentiation",
      image: "",
      imageAlt: "",
      text: `Two functions are defined by g(x)=sin(x^2)+ln(x+3) and an implicit curve x^2+y^2=25. Students compare chain rule, product rule, inverse derivatives, and implicit differentiation.\n\nOne student differentiates the outside function but forgets the inside derivative. Another treats y as a constant in the implicit equation.\n\nUse composite and implicit differentiation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=sin(1x^2). What is f'(x)?",
          choices: [
            { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if x^2+y^2=4, what is dy/dx?",
          choices: [
            { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let f(x)=ln(x^2+3). What is f'(x)?",
          choices: [
            { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
          choices: [
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let y=e^(5x)cos x. Which expression gives dy/dx?",
          choices: [
            { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        }
      ]
    },
    {
      title: "Composite and Implicit Differentiation",
      image: "",
      imageAlt: "",
      text: `Two functions are defined by g(x)=sin(x^2)+ln(x+3) and an implicit curve x^2+y^2=25. Students compare chain rule, product rule, inverse derivatives, and implicit differentiation.\n\nOne student differentiates the outside function but forgets the inside derivative. Another treats y as a constant in the implicit equation.\n\nUse composite and implicit differentiation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=sin(1x^2). What is f'(x)?",
          choices: [
            { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if x^2+y^2=4, what is dy/dx?",
          choices: [
            { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let f(x)=ln(x^2+3). What is f'(x)?",
          choices: [
            { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
          choices: [
            { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let y=e^(5x)cos x. Which expression gives dy/dx?",
          choices: [
            { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        }
      ]
    },
    {
      title: "Composite and Implicit Differentiation",
      image: "",
      imageAlt: "",
      text: `Two functions are defined by g(x)=sin(x^2)+ln(x+3) and an implicit curve x^2+y^2=25. Students compare chain rule, product rule, inverse derivatives, and implicit differentiation.\n\nOne student differentiates the outside function but forgets the inside derivative. Another treats y as a constant in the implicit equation.\n\nUse composite and implicit differentiation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=sin(1x^2). What is f'(x)?",
          choices: [
            { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if x^2+y^2=4, what is dy/dx?",
          choices: [
            { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let f(x)=ln(x^2+3). What is f'(x)?",
          choices: [
            { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
          choices: [
            { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let y=e^(5x)cos x. Which expression gives dy/dx?",
          choices: [
            { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        }
      ]
    },
    {
      title: "Composite and Implicit Differentiation",
      image: "",
      imageAlt: "",
      text: `Two functions are defined by g(x)=sin(x^2)+ln(x+3) and an implicit curve x^2+y^2=25. Students compare chain rule, product rule, inverse derivatives, and implicit differentiation.\n\nOne student differentiates the outside function but forgets the inside derivative. Another treats y as a constant in the implicit equation.\n\nUse composite and implicit differentiation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=sin(1x^2). What is f'(x)?",
          choices: [
            { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if x^2+y^2=4, what is dy/dx?",
          choices: [
            { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let f(x)=ln(x^2+3). What is f'(x)?",
          choices: [
            { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
          choices: [
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let y=e^(5x)cos x. Which expression gives dy/dx?",
          choices: [
            { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        }
      ]
    },
    {
      title: "Composite and Implicit Differentiation",
      image: "",
      imageAlt: "",
      text: `Two functions are defined by g(x)=sin(x^2)+ln(x+3) and an implicit curve x^2+y^2=25. Students compare chain rule, product rule, inverse derivatives, and implicit differentiation.\n\nOne student differentiates the outside function but forgets the inside derivative. Another treats y as a constant in the implicit equation.\n\nUse composite and implicit differentiation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=sin(1x^2). What is f'(x)?",
          choices: [
            { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if x^2+y^2=4, what is dy/dx?",
          choices: [
            { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let f(x)=ln(x^2+3). What is f'(x)?",
          choices: [
            { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
          choices: [
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let y=e^(5x)cos x. Which expression gives dy/dx?",
          choices: [
            { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        }
      ]
    },
    {
      title: "Composite and Implicit Differentiation",
      image: "",
      imageAlt: "",
      text: `Two functions are defined by g(x)=sin(x^2)+ln(x+3) and an implicit curve x^2+y^2=25. Students compare chain rule, product rule, inverse derivatives, and implicit differentiation.\n\nOne student differentiates the outside function but forgets the inside derivative. Another treats y as a constant in the implicit equation.\n\nUse composite and implicit differentiation reasoning to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, let f(x)=sin(1x^2). What is f'(x)?",
          choices: [
            { text: "cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1cos(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x sin(1x^2)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x cos(1x^2)", correct: 1, choiceExplanation: " is correct because it applies chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, the derivative of the inside is multiplied. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if x^2+y^2=4, what is dy/dx?",
          choices: [
            { text: "-y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "x/y", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "-x/y", correct: 1, choiceExplanation: " is correct because it applies implicit differentiation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, 2x+2y dy/dx=0. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "y/x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let f(x)=ln(x^2+3). What is f'(x)?",
          choices: [
            { text: "(x^2+3)/(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "2x/(x^2+3)", correct: 1, choiceExplanation: " is correct because it applies logarithmic differentiation with chain rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, d ln(u)/dx = u'/u. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "1/(x^2+3)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "ln(2x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, if f and g are inverses, f(4)=3, and f'(4)=8, what is g'(3)?",
          choices: [
            { text: "1/8", correct: 1, choiceExplanation: " is correct because it applies inverse function derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, g'(f(a))=1/f'(a). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "1/4", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        },
        {
          prompt: "Based on the passage, let y=e^(5x)cos x. Which expression gives dy/dx?",
          choices: [
            { text: "e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)sin x", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "e^(5x)(cos x - sin x)", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5e^(5x)cos x - e^(5x)sin x", correct: 1, choiceExplanation: " is correct because it applies product rule to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, both factors must be differentiated. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
        }
      ]
    }
  ]
});
