window.questionBanks = window.questionBanks || {};
window.questionBanks.apCalcBC = window.questionBanks.apCalcBC || [];

window.questionBanks.apCalcBC.push({
  name: "Unit 4: Contextual Applications of Differentiation",

  rapidQuestions: [
    {
      prompt: "A particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
      choices: [
        { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "The radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
      choices: [
        { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If R(t) is gallons per minute, what are the units of R'(t)?",
      choices: [
        { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If f'(4)=-4 for temperature f(t), what does this mean?",
      choices: [
        { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "Given f(2)=5 and f'(2)=3, estimate f(2.1).",
      choices: [
        { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "A particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
      choices: [
        { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "The radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
      choices: [
        { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If R(t) is gallons per minute, what are the units of R'(t)?",
      choices: [
        { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If f'(4)=-4 for temperature f(t), what does this mean?",
      choices: [
        { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "Given f(2)=5 and f'(2)=3, estimate f(2.1).",
      choices: [
        { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "A particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
      choices: [
        { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "The radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
      choices: [
        { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If R(t) is gallons per minute, what are the units of R'(t)?",
      choices: [
        { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If f'(4)=-4 for temperature f(t), what does this mean?",
      choices: [
        { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "Given f(2)=5 and f'(2)=3, estimate f(2.1).",
      choices: [
        { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "A particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
      choices: [
        { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "The radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
      choices: [
        { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If R(t) is gallons per minute, what are the units of R'(t)?",
      choices: [
        { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If f'(4)=-4 for temperature f(t), what does this mean?",
      choices: [
        { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "Given f(2)=5 and f'(2)=3, estimate f(2.1).",
      choices: [
        { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "A particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
      choices: [
        { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "The radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
      choices: [
        { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If R(t) is gallons per minute, what are the units of R'(t)?",
      choices: [
        { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If f'(4)=-4 for temperature f(t), what does this mean?",
      choices: [
        { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "Given f(2)=5 and f'(2)=3, estimate f(2.1).",
      choices: [
        { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "A particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
      choices: [
        { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "The radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
      choices: [
        { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If R(t) is gallons per minute, what are the units of R'(t)?",
      choices: [
        { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If f'(4)=-4 for temperature f(t), what does this mean?",
      choices: [
        { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "Given f(2)=5 and f'(2)=3, estimate f(2.1).",
      choices: [
        { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "A particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
      choices: [
        { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "The radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
      choices: [
        { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If R(t) is gallons per minute, what are the units of R'(t)?",
      choices: [
        { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If f'(4)=-4 for temperature f(t), what does this mean?",
      choices: [
        { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "Given f(2)=5 and f'(2)=3, estimate f(2.1).",
      choices: [
        { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "A particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
      choices: [
        { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "The radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
      choices: [
        { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If R(t) is gallons per minute, what are the units of R'(t)?",
      choices: [
        { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If f'(4)=-4 for temperature f(t), what does this mean?",
      choices: [
        { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "Given f(2)=5 and f'(2)=3, estimate f(2.1).",
      choices: [
        { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "A particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
      choices: [
        { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "The radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
      choices: [
        { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If R(t) is gallons per minute, what are the units of R'(t)?",
      choices: [
        { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If f'(4)=-4 for temperature f(t), what does this mean?",
      choices: [
        { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "Given f(2)=5 and f'(2)=3, estimate f(2.1).",
      choices: [
        { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "A particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
      choices: [
        { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "The radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
      choices: [
        { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If R(t) is gallons per minute, what are the units of R'(t)?",
      choices: [
        { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "If f'(4)=-4 for temperature f(t), what does this mean?",
      choices: [
        { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
        { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    },
    {
      prompt: "Given f(2)=5 and f'(2)=3, estimate f(2.1).",
      choices: [
        { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
        { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
      ],
      category: "Unit 4: Contextual Applications of Differentiation"
    }
  ],

  passages: [
    {
      title: "Particle Motion Model",
      image: "",
      imageAlt: "",
      text: `A particle moves along the x-axis with velocity v(t)=t^2-6t+8 for 0≤t≤5. The initial position is x(0)=3 meters.\n\nStudents must decide when the particle moves right, moves left, speeds up, slows down, and changes direction. They compare signs of velocity and acceleration rather than relying on one value alone.\n\nUse the velocity model and context to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, a particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
          choices: [
            { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, the radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
          choices: [
            { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if R(t) is gallons per minute, what are the units of R'(t)?",
          choices: [
            { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if f'(4)=-4 for temperature f(t), what does this mean?",
          choices: [
            { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, given f(2)=5 and f'(2)=3, estimate f(2.1).",
          choices: [
            { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        }
      ]
    },
    {
      title: "Particle Motion Model",
      image: "",
      imageAlt: "",
      text: `A particle moves along the x-axis with velocity v(t)=t^2-6t+8 for 0≤t≤5. The initial position is x(0)=3 meters.\n\nStudents must decide when the particle moves right, moves left, speeds up, slows down, and changes direction. They compare signs of velocity and acceleration rather than relying on one value alone.\n\nUse the velocity model and context to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, a particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
          choices: [
            { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, the radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
          choices: [
            { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if R(t) is gallons per minute, what are the units of R'(t)?",
          choices: [
            { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if f'(4)=-4 for temperature f(t), what does this mean?",
          choices: [
            { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, given f(2)=5 and f'(2)=3, estimate f(2.1).",
          choices: [
            { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        }
      ]
    },
    {
      title: "Particle Motion Model",
      image: "",
      imageAlt: "",
      text: `A particle moves along the x-axis with velocity v(t)=t^2-6t+8 for 0≤t≤5. The initial position is x(0)=3 meters.\n\nStudents must decide when the particle moves right, moves left, speeds up, slows down, and changes direction. They compare signs of velocity and acceleration rather than relying on one value alone.\n\nUse the velocity model and context to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, a particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
          choices: [
            { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, the radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
          choices: [
            { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if R(t) is gallons per minute, what are the units of R'(t)?",
          choices: [
            { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if f'(4)=-4 for temperature f(t), what does this mean?",
          choices: [
            { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, given f(2)=5 and f'(2)=3, estimate f(2.1).",
          choices: [
            { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        }
      ]
    },
    {
      title: "Particle Motion Model",
      image: "",
      imageAlt: "",
      text: `A particle moves along the x-axis with velocity v(t)=t^2-6t+8 for 0≤t≤5. The initial position is x(0)=3 meters.\n\nStudents must decide when the particle moves right, moves left, speeds up, slows down, and changes direction. They compare signs of velocity and acceleration rather than relying on one value alone.\n\nUse the velocity model and context to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, a particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
          choices: [
            { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, the radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
          choices: [
            { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if R(t) is gallons per minute, what are the units of R'(t)?",
          choices: [
            { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if f'(4)=-4 for temperature f(t), what does this mean?",
          choices: [
            { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, given f(2)=5 and f'(2)=3, estimate f(2.1).",
          choices: [
            { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        }
      ]
    },
    {
      title: "Particle Motion Model",
      image: "",
      imageAlt: "",
      text: `A particle moves along the x-axis with velocity v(t)=t^2-6t+8 for 0≤t≤5. The initial position is x(0)=3 meters.\n\nStudents must decide when the particle moves right, moves left, speeds up, slows down, and changes direction. They compare signs of velocity and acceleration rather than relying on one value alone.\n\nUse the velocity model and context to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, a particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
          choices: [
            { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, the radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
          choices: [
            { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if R(t) is gallons per minute, what are the units of R'(t)?",
          choices: [
            { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if f'(4)=-4 for temperature f(t), what does this mean?",
          choices: [
            { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, given f(2)=5 and f'(2)=3, estimate f(2.1).",
          choices: [
            { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        }
      ]
    },
    {
      title: "Particle Motion Model",
      image: "",
      imageAlt: "",
      text: `A particle moves along the x-axis with velocity v(t)=t^2-6t+8 for 0≤t≤5. The initial position is x(0)=3 meters.\n\nStudents must decide when the particle moves right, moves left, speeds up, slows down, and changes direction. They compare signs of velocity and acceleration rather than relying on one value alone.\n\nUse the velocity model and context to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, a particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
          choices: [
            { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, the radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
          choices: [
            { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if R(t) is gallons per minute, what are the units of R'(t)?",
          choices: [
            { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if f'(4)=-4 for temperature f(t), what does this mean?",
          choices: [
            { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, given f(2)=5 and f'(2)=3, estimate f(2.1).",
          choices: [
            { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        }
      ]
    },
    {
      title: "Particle Motion Model",
      image: "",
      imageAlt: "",
      text: `A particle moves along the x-axis with velocity v(t)=t^2-6t+8 for 0≤t≤5. The initial position is x(0)=3 meters.\n\nStudents must decide when the particle moves right, moves left, speeds up, slows down, and changes direction. They compare signs of velocity and acceleration rather than relying on one value alone.\n\nUse the velocity model and context to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, a particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
          choices: [
            { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, the radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
          choices: [
            { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if R(t) is gallons per minute, what are the units of R'(t)?",
          choices: [
            { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if f'(4)=-4 for temperature f(t), what does this mean?",
          choices: [
            { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, given f(2)=5 and f'(2)=3, estimate f(2.1).",
          choices: [
            { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        }
      ]
    },
    {
      title: "Particle Motion Model",
      image: "",
      imageAlt: "",
      text: `A particle moves along the x-axis with velocity v(t)=t^2-6t+8 for 0≤t≤5. The initial position is x(0)=3 meters.\n\nStudents must decide when the particle moves right, moves left, speeds up, slows down, and changes direction. They compare signs of velocity and acceleration rather than relying on one value alone.\n\nUse the velocity model and context to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, a particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
          choices: [
            { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, the radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
          choices: [
            { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if R(t) is gallons per minute, what are the units of R'(t)?",
          choices: [
            { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if f'(4)=-4 for temperature f(t), what does this mean?",
          choices: [
            { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, given f(2)=5 and f'(2)=3, estimate f(2.1).",
          choices: [
            { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        }
      ]
    },
    {
      title: "Particle Motion Model",
      image: "",
      imageAlt: "",
      text: `A particle moves along the x-axis with velocity v(t)=t^2-6t+8 for 0≤t≤5. The initial position is x(0)=3 meters.\n\nStudents must decide when the particle moves right, moves left, speeds up, slows down, and changes direction. They compare signs of velocity and acceleration rather than relying on one value alone.\n\nUse the velocity model and context to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, a particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
          choices: [
            { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, the radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
          choices: [
            { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if R(t) is gallons per minute, what are the units of R'(t)?",
          choices: [
            { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if f'(4)=-4 for temperature f(t), what does this mean?",
          choices: [
            { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, given f(2)=5 and f'(2)=3, estimate f(2.1).",
          choices: [
            { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        }
      ]
    },
    {
      title: "Particle Motion Model",
      image: "",
      imageAlt: "",
      text: `A particle moves along the x-axis with velocity v(t)=t^2-6t+8 for 0≤t≤5. The initial position is x(0)=3 meters.\n\nStudents must decide when the particle moves right, moves left, speeds up, slows down, and changes direction. They compare signs of velocity and acceleration rather than relying on one value alone.\n\nUse the velocity model and context to answer the questions.`,
      questions: [
        {
          prompt: "Based on the passage, a particle has v(t)=t^2-2t+1. At t=1, what describes the motion?",
          choices: [
            { text: "speeding up because v is negative", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "speeding up because acceleration is positive", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "neither because position is not given", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "slowing down because v and a have opposite signs", correct: 1, choiceExplanation: " is correct because it applies speeding up and slowing down to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, speed decreases when velocity and acceleration have opposite signs. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, the radius of a circle increases at 3 cm/s. When r=4, what is dA/dt?",
          choices: [
            { text: "3π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "16π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "24π cm^2/s", correct: 1, choiceExplanation: " is correct because it applies related rates to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, dA/dt=2πr dr/dt. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "12π cm^2/s", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if R(t) is gallons per minute, what are the units of R'(t)?",
          choices: [
            { text: "minutes per gallon", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute squared", correct: 1, choiceExplanation: " is correct because it applies units of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, a derivative of a rate is rate per time. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "gallons", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "gallons per minute", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, if f'(4)=-4 for temperature f(t), what does this mean?",
          choices: [
            { text: "At 4 hours, temperature decreases at 4 degrees per hour.", correct: 1, choiceExplanation: " is correct because it applies interpretation of derivatives to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, f'(4) is an instantaneous rate of change. This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." },
            { text: "At 4 hours, temperature is -4 degrees.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "Temperature decreased by 4 degrees total.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "The average temperature is negative.", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        },
        {
          prompt: "Based on the passage, given f(2)=5 and f'(2)=3, estimate f(2.1).",
          choices: [
            { text: "8.0", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "10.5", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "4.7", correct: 0, choiceExplanation: " is wrong because it uses a related idea but applies it to the wrong quantity or condition. The prompt requires distinguishing a function value, derivative, rate, accumulated change, or setup expression. This choice is tempting if the representation is read too quickly, but it does not follow the relationship being tested. That makes it less precise than the correct answer." },
            { text: "5.3", correct: 1, choiceExplanation: " is correct because it applies linear approximation to the exact representation in the prompt. The key step is matching the equation, table, graph description, or context to the calculus relationship being tested. Here, use f(2)+f'(2)(0.1). This keeps the sign, interval, units, and interpretation consistent with AP Calculus reasoning." }
          ],
          category: "Unit 4: Contextual Applications of Differentiation"
        }
      ]
    }
  ]
});
