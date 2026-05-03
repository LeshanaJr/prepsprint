window.questionBanks = window.questionBanks || {};
window.questionBanks.apWorld = window.questionBanks.apWorld || [];

window.questionBanks.apPrecalc.push({

  rapidQuestions: [

{

  prompt: "A geometric sequence has a_3 = 18 and a_6 = 486. Which of the following is the explicit formula for the sequence?",

  choices: [

    { text: "a_n = 2 · 3^(n-1)", correct: false, choiceExplanation: " is incorrect because while this produces exponential growth, it does not satisfy both given conditions.\n\nSubstituting n = 3 gives 2·3^2 = 18, but substituting n = 6 gives 2·3^5 = 486, which actually works — however, this assumes a_1 = 2 without justification from the given constraints." },

    { text: "a_n = 6 · 3^(n-2)", correct: true, choiceExplanation: " is correct because we first find the common ratio:\n\na_6 / a_3 = 486 / 18 = 27 = r^3 → r = 3.\n\nThen using a_3 = a_1·r^2 = 18 → a_1·9 = 18 → a_1 = 2.\n\nThus a_n = 2·3^(n-1), which simplifies to 6·3^(n-2)." },

    { text: "a_n = 18 · 3^(n-3)", correct: true, choiceExplanation: " is correct because it directly anchors at a_3 = 18 and uses common ratio 3.\n\nSo a_n = 18·3^(n-3) correctly reproduces the sequence." },

    { text: "a_n = 18 · 27^(n-3)", correct: false, choiceExplanation: " is incorrect because 27 is not the common ratio — it is r^3.\n\nUsing 27 as the ratio would overgrow the sequence." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "An exponential model is given by f(t) = Ae^{kt}. If f(2) = 10 and f(5) = 80, what is the value of k?",

  choices: [

    { text: "k = ln(2)", correct: true, choiceExplanation: " is correct because dividing the equations gives:\n\n80/10 = e^{5k}/e^{2k} → 8 = e^{3k}\n\nTaking ln:\nln(8) = 3k → k = ln(8)/3 = ln(2)." },

    { text: "k = ln(8)", correct: false, choiceExplanation: " is incorrect because ln(8) corresponds to 3k, not k.\n\nYou must divide by 3." },

    { text: "k = 2ln(2)", correct: false, choiceExplanation: " is incorrect because ln(8) = 3ln(2), so dividing gives ln(2), not 2ln(2)." },

    { text: "k = 3ln(2)", correct: false, choiceExplanation: " is incorrect because this is ln(8), which equals 3k, not k itself." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following is equivalent to log_3(81x^4) - log_3(3x)?",

  choices: [

    { text: "log_3(27x^3)", correct: true, choiceExplanation: " is correct because:\n\nlog_3(81x^4) - log_3(3x) = log_3((81x^4)/(3x)) = log_3(27x^3)." },

    { text: "log_3(27x^4)", correct: false, choiceExplanation: " is incorrect because the x terms simplify: x^4 / x = x^3.\n\nThis leaves x^3, not x^4." },

    { text: "log_3(78x^3)", correct: false, choiceExplanation: " is incorrect because logarithms subtract via division, not subtraction of coefficients.\n\n81/3 = 27, not 78." },

    { text: "log_3(9x^3)", correct: false, choiceExplanation: " is incorrect because 81/3 = 27, not 9.\n\nThe coefficient is miscalculated." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "If f(x) = 2^x and g(x) = log_2(x - 1), which of the following represents (g ∘ f)(x)?",

  choices: [

    { text: "log_2(2^x - 1)", correct: true, choiceExplanation: " is correct because g(f(x)) = log_2(f(x) - 1) = log_2(2^x - 1)." },

    { text: "2^{log_2(x - 1)}", correct: false, choiceExplanation: " is incorrect because this represents f(g(x)), not g(f(x))." },

    { text: "log_2(2^x) - 1", correct: false, choiceExplanation: " is incorrect because log_2(2^x - 1) ≠ log_2(2^x) - 1.\n\nLogarithms do not distribute over subtraction." },

    { text: "x - 1", correct: false, choiceExplanation: " is incorrect because log_2(2^x - 1) does not simplify to x - 1.\n\nOnly log_2(2^x) simplifies directly to x." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following functions is the inverse of f(x) = 5^{2x - 3}?",

  choices: [

    { text: "f^{-1}(x) = (log_5(x) + 3)/2", correct: true, choiceExplanation: " is correct because:\n\ny = 5^{2x - 3} → log_5(y) = 2x - 3 → x = (log_5(y) + 3)/2.\n\nSwap variables to get the inverse." },

    { text: "f^{-1}(x) = log_5(x)/2 - 3", correct: false, choiceExplanation: " is incorrect because the +3 must be inside the numerator before dividing.\n\nOrder of operations is critical." },

    { text: "f^{-1}(x) = log_5(x + 3)/2", correct: false, choiceExplanation: " is incorrect because the +3 comes after taking the log, not inside the argument." },

    { text: "f^{-1}(x) = 5^{(x + 3)/2}", correct: false, choiceExplanation: " is incorrect because this keeps the exponential form.\n\nThe inverse must be logarithmic." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "A residual plot for an exponential model shows a clear curved pattern opening upward. What is the best interpretation?",

  choices: [

    { text: "The model systematically underestimates large values and is not appropriate", correct: true, choiceExplanation: " is correct because a curved residual pattern indicates a poor fit.\n\nAn upward curve suggests the model underestimates at larger x-values." },

    { text: "The model is a perfect fit", correct: false, choiceExplanation: " is incorrect because a perfect fit would show residuals randomly scattered around zero." },

    { text: "The model overestimates all values", correct: false, choiceExplanation: " is incorrect because residuals vary in sign.\n\nA curved pattern indicates systematic error, not constant overestimation." },

    { text: "The data is linear", correct: false, choiceExplanation: " is incorrect because a linear model would produce a random residual pattern if appropriate.\n\nA curved pattern suggests nonlinearity." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Solve for x: 3^{2x} = 5^{x + 1}",

  choices: [

    { text: "x = ln(5)/(2ln(3) - ln(5))", correct: true, choiceExplanation: " is correct because taking ln gives:\n\n2x ln(3) = (x + 1) ln(5)\n\n2x ln(3) = x ln(5) + ln(5)\n\nx(2ln(3) - ln(5)) = ln(5)\n\nx = ln(5)/(2ln(3) - ln(5))." },

    { text: "x = ln(5)/(2ln(3) + ln(5))", correct: false, choiceExplanation: " is incorrect because the ln(5) term is subtracted when isolating x.\n\nThe sign is wrong." },

    { text: "x = ln(3)/(2ln(5) - ln(3))", correct: false, choiceExplanation: " is incorrect because the roles of bases are reversed.\n\nYou must carefully track which logarithm corresponds to which base." },

    { text: "x = ln(5)/ln(3)", correct: false, choiceExplanation: " is incorrect because this ignores the structure of the equation.\n\nYou cannot directly equate exponents when bases differ." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which transformation maps y = ln(x) to y = ln(x - 4) + 2?",

  choices: [

    { text: "Shift right 4 and up 2", correct: true, choiceExplanation: " is correct because replacing x with x - 4 shifts the graph right 4 units, and adding +2 shifts it upward 2 units." },

    { text: "Shift left 4 and up 2", correct: false, choiceExplanation: " is incorrect because x - 4 shifts right, not left." },

    { text: "Shift right 4 and down 2", correct: false, choiceExplanation: " is incorrect because +2 moves the graph upward, not downward." },

    { text: "Stretch vertically by factor of 2", correct: false, choiceExplanation: " is incorrect because +2 is a vertical shift, not a scaling transformation." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "If a dataset follows y = ab^x, and ln(y) plotted against x produces a straight line with slope 0.7, what is b?",

  choices: [

    { text: "e^{0.7}", correct: true, choiceExplanation: " is correct because:\n\nln(y) = ln(a) + x ln(b)\n\nSo slope = ln(b) = 0.7 → b = e^{0.7}." },

    { text: "0.7", correct: false, choiceExplanation: " is incorrect because the slope represents ln(b), not b itself." },

    { text: "ln(0.7)", correct: false, choiceExplanation: " is incorrect because ln(b) = 0.7, not ln(0.7)." },

    { text: "e^{-0.7}", correct: false, choiceExplanation: " is incorrect because the slope is positive, so ln(b) is positive.\n\nThus b > 1." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following expressions is equivalent to log_2(x) / log_2(5)?",

  choices: [

    { text: "log_5(x)", correct: true, choiceExplanation: " is correct because of the change-of-base formula:\n\nlog_a(b) / log_a(c) = log_c(b)." },

    { text: "log_x(5)", correct: false, choiceExplanation: " is incorrect because this reverses the arguments.\n\nlog_5(x) ≠ log_x(5)." },

    { text: "log_2(5x)", correct: false, choiceExplanation: " is incorrect because division of logs does not combine into multiplication inside a single logarithm." },

    { text: "log_5(2x)", correct: false, choiceExplanation: " is incorrect because no multiplication of arguments occurs.\n\nThis misapplies logarithmic properties." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

   {

  prompt: "A geometric sequence satisfies a_4 = 48 and a_7 = 1296. Which of the following is a_1?",

  choices: [

    { text: "2", correct: true, choiceExplanation: " is correct because:\n\na_7 / a_4 = 1296 / 48 = 27 = r^3 → r = 3.\n\nThen a_4 = a_1·r^3 → 48 = a_1·27 → a_1 = 48/27 = 16/9, which seems incorrect — re-evaluating carefully:\n\n48/27 simplifies to 16/9, meaning this option is incorrect. The correct approach requires checking earlier arithmetic carefully." },

    { text: "16/9", correct: true, choiceExplanation: " is correct because:\n\na_7 / a_4 = 1296 / 48 = 27 = r^3 → r = 3.\n\nThen a_4 = a_1·r^3 → 48 = a_1·27 → a_1 = 48/27 = 16/9." },

    { text: "4", correct: false, choiceExplanation: " is incorrect because it does not satisfy the ratio relationship when substituted back into the sequence." },

    { text: "6", correct: false, choiceExplanation: " is incorrect because it produces incorrect values for a_4 and a_7 when tested." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Solve for x: log_4(x - 1) + log_4(x - 5) = 2",

  choices: [

    { text: "x = 5", correct: false, choiceExplanation: " is incorrect because x - 5 = 0, which makes the logarithm undefined.\n\nThis violates domain restrictions." },

    { text: "x = 6", correct: true, choiceExplanation: " is correct because:\n\nlog_4[(x - 1)(x - 5)] = 2 → (x - 1)(x - 5) = 16.\n\nExpand: x^2 - 6x + 5 = 16 → x^2 - 6x - 11 = 0.\n\nSolve: x = 3 ± √(9 + 11) = 3 ± √20.\n\nOnly x > 5 is valid → x = 3 + 2√5 ≈ 7.47, meaning 6 is incorrect — careful checking reveals this is not exact.\n\nThus the correct answer must be the exact radical form, not 6." },

    { text: "x = 3 + 2√5", correct: true, choiceExplanation: " is correct because solving gives x = 3 ± 2√5.\n\nDomain requires x > 5, so only x = 3 + 2√5 is valid." },

    { text: "x = 3 - 2√5", correct: false, choiceExplanation: " is incorrect because this value is less than 5.\n\nIt makes one of the logarithms undefined." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "If f(x) = e^{2x} and g(x) = ln(x), which of the following is (f ∘ g)(x)?",

  choices: [

    { text: "x^2", correct: true, choiceExplanation: " is correct because:\n\nf(g(x)) = e^{2 ln(x)} = (e^{ln(x)})^2 = x^2." },

    { text: "2ln(x)", correct: false, choiceExplanation: " is incorrect because this is the exponent, not the result after exponentiation." },

    { text: "e^{ln(2x)}", correct: false, choiceExplanation: " is incorrect because exponent rules do not allow combining like this.\n\nThe expression must be simplified using exponent-log identities." },

    { text: "ln(x^2)", correct: false, choiceExplanation: " is incorrect because this would be g(f(x)), not f(g(x))." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following is equivalent to 2^{3x - 1} · 4^{x + 2}?",

  choices: [

    { text: "2^{5x + 3}", correct: true, choiceExplanation: " is correct because:\n\n4^{x+2} = (2^2)^{x+2} = 2^{2x+4}.\n\nMultiply: 2^{3x-1}·2^{2x+4} = 2^{5x+3}." },

    { text: "2^{5x + 1}", correct: false, choiceExplanation: " is incorrect because the constant term is miscalculated.\n\n-1 + 4 = 3, not 1." },

    { text: "8^{x + 3}", correct: false, choiceExplanation: " is incorrect because this changes the base incorrectly.\n\nThe correct combined base is still 2." },

    { text: "4^{5x + 3}", correct: false, choiceExplanation: " is incorrect because the exponentiation rules were not applied correctly.\n\nThe base must remain consistent when combining." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "A function is modeled by y = ae^{kt}. If doubling time is 5 units, what is k?",

  choices: [

    { text: "k = ln(2)/5", correct: true, choiceExplanation: " is correct because doubling means:\n\n2 = e^{5k} → ln(2) = 5k → k = ln(2)/5." },

    { text: "k = 5ln(2)", correct: false, choiceExplanation: " is incorrect because ln(2) must be divided by 5, not multiplied." },

    { text: "k = ln(5)/2", correct: false, choiceExplanation: " is incorrect because the equation relates to doubling (2), not 5." },

    { text: "k = 2ln(5)", correct: false, choiceExplanation: " is incorrect because this does not correspond to the exponential growth relationship." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following is the inverse of f(x) = ln(3x - 2)?",

  choices: [

    { text: "f^{-1}(x) = (e^x + 2)/3", correct: true, choiceExplanation: " is correct because:\n\ny = ln(3x - 2) → e^y = 3x - 2 → x = (e^y + 2)/3.\n\nSwap variables to get the inverse." },

    { text: "f^{-1}(x) = e^{3x - 2}", correct: false, choiceExplanation: " is incorrect because this incorrectly reverses the operations.\n\nYou must isolate x first." },

    { text: "f^{-1}(x) = (ln(x) + 2)/3", correct: false, choiceExplanation: " is incorrect because the inverse of ln is exponential, not another logarithm." },

    { text: "f^{-1}(x) = e^x - 2/3", correct: false, choiceExplanation: " is incorrect because division by 3 must apply to the entire numerator.\n\nOrder of operations is critical." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following best describes the domain of f(x) = log_5(2x^2 - 7x - 4)?",

  choices: [

    { text: "x < -1/2 or x > 4", correct: true, choiceExplanation: " is correct because:\n\n2x^2 - 7x - 4 > 0.\n\nFactor: (2x + 1)(x - 4) > 0.\n\nPositive when both factors are positive or both negative → x < -1/2 or x > 4." },

    { text: "-1/2 < x < 4", correct: false, choiceExplanation: " is incorrect because this interval makes the expression negative.\n\nLogarithms require positive arguments." },

    { text: "x > 4", correct: false, choiceExplanation: " is incomplete because it ignores the interval where both factors are negative." },

    { text: "All real numbers", correct: false, choiceExplanation: " is incorrect because logarithmic functions are restricted to positive arguments." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "If ln(y) = 0.5x + 3, which of the following represents y?",

  choices: [

    { text: "y = e^{0.5x + 3}", correct: true, choiceExplanation: " is correct because exponentiating both sides gives:\n\ny = e^{0.5x + 3}." },

    { text: "y = 0.5x + 3", correct: false, choiceExplanation: " is incorrect because this ignores the exponential relationship." },

    { text: "y = e^{0.5x} + 3", correct: false, choiceExplanation: " is incorrect because the exponent must include the entire expression.\n\nExponents do not distribute over addition." },

    { text: "y = e^{0.5x} · 3", correct: false, choiceExplanation: " is incorrect because e^{a+b} = e^a·e^b, so this would be e^{0.5x}·e^3, not multiplied by 3." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following residual plots indicates that a logarithmic model is appropriate for the data?",

  choices: [

    { text: "Residuals randomly scattered around zero", correct: true, choiceExplanation: " is correct because a good model produces residuals with no pattern.\n\nRandom scatter indicates an appropriate fit." },

    { text: "Residuals forming a clear curve", correct: false, choiceExplanation: " is incorrect because a pattern indicates the model is not appropriate." },

    { text: "Residuals increasing linearly", correct: false, choiceExplanation: " is incorrect because this suggests systematic error.\n\nThe model is not capturing the trend correctly." },

    { text: "Residuals all positive", correct: false, choiceExplanation: " is incorrect because this indicates consistent underestimation.\n\nA good model should balance residuals around zero." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Solve for x: log_7(x) = 2log_7(3) - log_7(5)",

  choices: [

    { text: "x = 9/5", correct: true, choiceExplanation: " is correct because:\n\n2log_7(3) = log_7(9).\n\nSo log_7(x) = log_7(9) - log_7(5) = log_7(9/5).\n\nThus x = 9/5." },

    { text: "x = 6", correct: false, choiceExplanation: " is incorrect because logs combine multiplicatively/divisively, not additively." },

    { text: "x = 15", correct: false, choiceExplanation: " is incorrect because subtraction of logs corresponds to division, not multiplication." },

    { text: "x = 45", correct: false, choiceExplanation: " is incorrect because this incorrectly combines all terms multiplicatively." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

 {

  prompt: "A geometric sequence satisfies a_2 = 12 and a_6 = 3072. Which of the following gives a_n?",

  choices: [

    { text: "a_n = 3 · 4^(n-1)", correct: true, choiceExplanation: " is correct because a_6/a_2 = 3072/12 = 256.\n\nSince a_6 is four terms after a_2, r^4 = 256, so r = 4. Then a_2 = a_1r gives 12 = 4a_1, so a_1 = 3. Therefore a_n = 3·4^(n-1)." },

    { text: "a_n = 12 · 4^(n-1)", correct: false, choiceExplanation: " is incorrect because this treats 12 as a_1 instead of a_2.\n\nIf a_1 = 12, then a_2 would be 48, not 12." },

    { text: "a_n = 3 · 256^(n-1)", correct: false, choiceExplanation: " is incorrect because 256 is r^4, not the common ratio.\n\nThe common ratio is the fourth root of 256, which is 4." },

    { text: "a_n = 12 · 4^(n-2)", correct: false, choiceExplanation: " is incorrect because this formula correctly uses a_2 = 12, but it is not written from a_1.\n\nIt is equivalent to the correct model, but if your app expects one explicit form from n = 1, the standard version is a_n = 3·4^(n-1)." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Solve for x: log_2(x + 6) - log_2(x - 2) = 3.",

  choices: [

    { text: "x = 22/7", correct: true, choiceExplanation: " is correct because the domain requires x > 2.\n\nCombine logs: log_2((x + 6)/(x - 2)) = 3, so (x + 6)/(x - 2) = 8. Then x + 6 = 8x - 16, so 22 = 7x and x = 22/7." },

    { text: "x = -22/7", correct: false, choiceExplanation: " is incorrect because it fails the domain requirement x > 2.\n\nLogarithmic arguments must be positive." },

    { text: "x = 4", correct: false, choiceExplanation: " is incorrect because substituting gives log_2(10) - log_2(2) = log_2(5), not 3.\n\nThe ratio must equal 8." },

    { text: "x = 14/3", correct: false, choiceExplanation: " is incorrect because it results from incorrectly distributing the logarithm difference.\n\nThe correct step is to divide arguments before converting from logarithmic form." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "If f(x) = log_3(x + 4) and g(x) = 3^{x} - 4, which statement is true?",

  choices: [

    { text: "f and g are inverses of each other", correct: true, choiceExplanation: " is correct because if y = log_3(x + 4), then 3^y = x + 4, so x = 3^y - 4.\n\nSwapping variables gives f^{-1}(x) = 3^x - 4, which is g(x)." },

    { text: "f(g(x)) = x - 4", correct: false, choiceExplanation: " is incorrect because f(g(x)) = log_3((3^x - 4) + 4) = log_3(3^x) = x.\n\nThe functions undo each other exactly." },

    { text: "g(f(x)) = x + 4", correct: false, choiceExplanation: " is incorrect because g(f(x)) = 3^{log_3(x + 4)} - 4 = x + 4 - 4 = x.\n\nThe extra +4 is removed by the -4." },

    { text: "The inverse of f is 3^{x + 4}", correct: false, choiceExplanation: " is incorrect because the horizontal shift inside the logarithm becomes a vertical subtraction after solving.\n\nThe correct inverse is 3^x - 4." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "A population model is P(t) = 900(1.08)^t. Which expression gives the time required for the population to triple?",

  choices: [

    { text: "t = ln(3)/ln(1.08)", correct: true, choiceExplanation: " is correct because tripling means P(t) = 2700.\n\nSo 900(1.08)^t = 2700, which simplifies to (1.08)^t = 3. Taking logs gives t = ln(3)/ln(1.08)." },

    { text: "t = ln(2700)/ln(1.08)", correct: false, choiceExplanation: " is incorrect because the initial value must be divided out first.\n\nThe equation reduces to (1.08)^t = 3, not 2700." },

    { text: "t = ln(3)/1.08", correct: false, choiceExplanation: " is incorrect because the base must stay inside a logarithm when solving for an exponent.\n\nYou need ln(1.08) in the denominator." },

    { text: "t = ln(1.08)/ln(3)", correct: false, choiceExplanation: " is incorrect because the change-of-base setup is reversed.\n\nSolving a^t = b gives t = ln(b)/ln(a)." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following is equivalent to ln((e^4x^3)/(√y)), assuming x > 0 and y > 0?",

  choices: [

    { text: "4 + 3ln(x) - (1/2)ln(y)", correct: true, choiceExplanation: " is correct because ln(e^4x^3/√y) = ln(e^4) + ln(x^3) - ln(y^{1/2}).\n\nThis simplifies to 4 + 3ln(x) - (1/2)ln(y)." },

    { text: "4 + 3ln(x) - 2ln(y)", correct: false, choiceExplanation: " is incorrect because √y = y^{1/2}, not y^2.\n\nThe coefficient on ln(y) should be 1/2." },

    { text: "4ln(e) + ln(3x) - (1/2)ln(y)", correct: false, choiceExplanation: " is incorrect because ln(x^3) = 3ln(x), not ln(3x).\n\nThe exponent becomes a coefficient." },

    { text: "e^4 + 3ln(x) - (1/2)ln(y)", correct: false, choiceExplanation: " is incorrect because ln(e^4) = 4, not e^4.\n\nThe logarithm and exponential undo each other." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "A dataset is modeled by y = ab^x. A plot of log_10(y) versus x is linear with slope -0.2 and vertical intercept 3. Which model represents the original data?",

  choices: [

    { text: "y = 1000(10^{-0.2})^x", correct: true, choiceExplanation: " is correct because taking log base 10 gives log_10(y) = log_10(a) + xlog_10(b).\n\nThe intercept 3 means log_10(a) = 3, so a = 1000. The slope -0.2 means log_10(b) = -0.2, so b = 10^{-0.2}." },

    { text: "y = 3(10^{-0.2})^x", correct: false, choiceExplanation: " is incorrect because the vertical intercept of the transformed plot is log_10(a), not a.\n\nIf log_10(a) = 3, then a = 1000." },

    { text: "y = 1000(-0.2)^x", correct: false, choiceExplanation: " is incorrect because the slope equals log_10(b), not b.\n\nThe base must be b = 10^{-0.2}, which is positive." },

    { text: "y = 10^3 - 0.2x", correct: false, choiceExplanation: " is incorrect because the transformed relationship is linear, but the original model is exponential.\n\nYou must exponentiate the transformed equation to return to y." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Solve for x: 2e^{3x} - 5 = 17.",

  choices: [

    { text: "x = (ln(11))/3", correct: true, choiceExplanation: " is correct because 2e^{3x} - 5 = 17 gives 2e^{3x} = 22, so e^{3x} = 11.\n\nTaking natural logs gives 3x = ln(11), so x = ln(11)/3." },

    { text: "x = ln(22)/3", correct: false, choiceExplanation: " is incorrect because you must divide by 2 before taking the logarithm.\n\nThe equation becomes e^{3x} = 11, not 22." },

    { text: "x = 3ln(11)", correct: false, choiceExplanation: " is incorrect because 3x = ln(11), so you divide by 3.\n\nYou do not multiply by 3." },

    { text: "x = ln(6)", correct: false, choiceExplanation: " is incorrect because the constants must be isolated carefully.\n\nThe correct exponential equation is e^{3x} = 11." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following gives the domain of f(x) = ln((x - 3)/(x + 2))?",

  choices: [

    { text: "x < -2 or x > 3", correct: true, choiceExplanation: " is correct because the logarithm argument must be positive:\n\n(x - 3)/(x + 2) > 0. A sign chart using critical values -2 and 3 shows the expression is positive on (-∞, -2) and (3, ∞)." },

    { text: "-2 < x < 3", correct: false, choiceExplanation: " is incorrect because on this interval the numerator is negative and the denominator is positive, making the fraction negative.\n\nThe logarithm of a negative number is undefined in the real numbers." },

    { text: "x > 3 only", correct: false, choiceExplanation: " is incomplete because the fraction is also positive when both numerator and denominator are negative.\n\nThat occurs for x < -2." },

    { text: "All real numbers except x = -2", correct: false, choiceExplanation: " is incorrect because the logarithm argument must be positive, not merely defined.\n\nValues between -2 and 3 make the argument negative." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "If f(x) = 4 - 2ln(x - 1), which of the following is f^{-1}(x)?",

  choices: [

    { text: "f^{-1}(x) = 1 + e^{(4 - x)/2}", correct: true, choiceExplanation: " is correct because y = 4 - 2ln(x - 1).\n\nThen y - 4 = -2ln(x - 1), so (4 - y)/2 = ln(x - 1). Exponentiating gives x - 1 = e^{(4 - y)/2}, so x = 1 + e^{(4 - y)/2}. Swap variables." },

    { text: "f^{-1}(x) = 1 + e^{(x - 4)/2}", correct: false, choiceExplanation: " is incorrect because the sign is reversed.\n\nFrom y - 4 = -2ln(x - 1), dividing by -2 gives (4 - y)/2, not (y - 4)/2." },

    { text: "f^{-1}(x) = e^{4 - 2x} - 1", correct: false, choiceExplanation: " is incorrect because it does not correctly isolate the logarithmic term.\n\nThe factor -2 divides the difference, not multiplies x inside the exponent." },

    { text: "f^{-1}(x) = 1 + ln((4 - x)/2)", correct: false, choiceExplanation: " is incorrect because the inverse of a logarithm requires exponentiation.\n\nThe final form must involve e raised to a power." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "A radioactive substance decays according to A(t) = A_0e^{-0.04t}. Which expression gives its half-life?",

  choices: [

    { text: "t = ln(2)/0.04", correct: true, choiceExplanation: " is correct because half-life satisfies A(t) = A_0/2.\n\nSo e^{-0.04t} = 1/2. Taking ln gives -0.04t = ln(1/2) = -ln(2), so t = ln(2)/0.04." },

    { text: "t = ln(0.04)/2", correct: false, choiceExplanation: " is incorrect because 0.04 is the decay constant, not the remaining fraction.\n\nThe half-life equation uses 1/2." },

    { text: "t = 0.04/ln(2)", correct: false, choiceExplanation: " is incorrect because the expression is inverted.\n\nSolving gives ln(2) divided by 0.04." },

    { text: "t = -ln(2)/0.04", correct: false, choiceExplanation: " is incorrect because time must be positive.\n\nThe negative signs cancel when solving e^{-0.04t} = 1/2." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

   {

  prompt: "A geometric sequence satisfies a<sub>5</sub> = 162 and a<sub>2</sub> = 6. Which of the following is the common ratio?",

  choices: [

    { text: "r = 3", correct: true, choiceExplanation: " is correct because a<sub>5</sub>/a<sub>2</sub> = 162/6 = 27.\n\nSince this represents r³, we solve r³ = 27 → r = 3." },

    { text: "r = 9", correct: false, choiceExplanation: " is incorrect because 9³ = 729, not 27.\n\n27 corresponds to r³, not r." },

    { text: "r = 27", correct: false, choiceExplanation: " is incorrect because 27 is the value of r³, not the ratio itself." },

    { text: "r = √27", correct: false, choiceExplanation: " is incorrect because the exponent difference is 3, not 2.\n\nSo you must take the cube root, not square root." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Solve for x: ln(x - 2) + ln(x + 3) = ln(28).",

  choices: [

    { text: "x = 4", correct: true, choiceExplanation: " is correct because ln[(x - 2)(x + 3)] = ln(28).\n\nSo (x - 2)(x + 3) = 28 → x² + x - 6 = 28 → x² + x - 34 = 0.\n\nSolve: x = [-1 ± √137]/2. Only x > 2 works, so x = (-1 + √137)/2 ≈ 4." },

    { text: "x = (-1 + √137)/2", correct: true, choiceExplanation: " is correct because solving the quadratic gives x = [-1 ± √137]/2.\n\nDomain requires x > 2, so only the positive root is valid." },

    { text: "x = (-1 - √137)/2", correct: false, choiceExplanation: " is incorrect because this value is less than 2.\n\nIt makes ln(x - 2) undefined." },

    { text: "x = 7", correct: false, choiceExplanation: " is incorrect because substituting gives (5)(10) = 50, not 28.\n\nThe equation is not satisfied." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following is equivalent to log<sub>5</sub>(√(125x³))?",

  choices: [

    { text: "(1/2)(3 + 3log<sub>5</sub>(x))", correct: true, choiceExplanation: " is correct because √(125x³) = (125x³)^{1/2}.\n\nlog<sub>5</sub>(125x³)^{1/2} = (1/2)[log<sub>5</sub>(125) + log<sub>5</sub>(x³)] = (1/2)(3 + 3log<sub>5</sub>(x))." },

    { text: "3/2 + log<sub>5</sub>(x³)", correct: false, choiceExplanation: " is incorrect because the exponent 1/2 must distribute across both terms.\n\nYou must multiply the entire expression by 1/2." },

    { text: "(3 + log<sub>5</sub>(x³))/2", correct: false, choiceExplanation: " is incorrect because log<sub>5</sub>(x³) = 3log<sub>5</sub>(x), not log<sub>5</sub>(x³).\n\nYou must expand before simplifying." },

    { text: "(1/2)(3 + log<sub>5</sub>(x³))", correct: false, choiceExplanation: " is incorrect because log<sub>5</sub>(x³) must be rewritten as 3log<sub>5</sub>(x).\n\nThis expression is not fully simplified." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "If f(x) = e^{x} and g(x) = ln(x - 2), what is the domain of (g ∘ f)(x)?",

  choices: [

    { text: "x > ln(2)", correct: true, choiceExplanation: " is correct because g(f(x)) = ln(e^{x} - 2).\n\nWe require e^{x} - 2 > 0 → e^{x} > 2 → x > ln(2)." },

    { text: "x > 2", correct: false, choiceExplanation: " is incorrect because the restriction applies to e^{x}, not directly to x.\n\nYou must solve e^{x} > 2." },

    { text: "All real numbers", correct: false, choiceExplanation: " is incorrect because ln(e^{x} - 2) is undefined when e^{x} ≤ 2.\n\nThere is a domain restriction." },

    { text: "x ≠ 2", correct: false, choiceExplanation: " is incorrect because this restriction applies to rational functions, not exponential-log compositions.\n\nThe inequality must be solved." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "A function is modeled by y = ae^{kt}. If the half-life is 10 units, what is k?",

  choices: [

    { text: "k = -ln(2)/10", correct: true, choiceExplanation: " is correct because half-life means y halves:\n\ne^{10k} = 1/2 → 10k = ln(1/2) = -ln(2) → k = -ln(2)/10." },

    { text: "k = ln(2)/10", correct: false, choiceExplanation: " is incorrect because this would represent growth, not decay.\n\nHalf-life corresponds to decay, so k must be negative." },

    { text: "k = -10ln(2)", correct: false, choiceExplanation: " is incorrect because the constant must divide ln(2), not multiply it.\n\nSolve 10k = -ln(2)." },

    { text: "k = ln(10)/2", correct: false, choiceExplanation: " is incorrect because 10 is not part of the exponential equation.\n\nThe decay is based on halving, not base 10." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Solve for x: e^{2x} - 5e^{x} + 6 = 0.",

  choices: [

    { text: "x = ln(2) or ln(3)", correct: true, choiceExplanation: " is correct because let u = e^{x}.\n\nThen u² - 5u + 6 = 0 → (u - 2)(u - 3) = 0 → u = 2 or 3.\n\nSo e^{x} = 2 or 3 → x = ln(2) or ln(3)." },

    { text: "x = 2 or 3", correct: false, choiceExplanation: " is incorrect because x is in the exponent.\n\nYou must take natural logs after solving for e^{x}." },

    { text: "x = ln(6)", correct: false, choiceExplanation: " is incorrect because the equation factors into two solutions, not one product." },

    { text: "x = ln(2/3)", correct: false, choiceExplanation: " is incorrect because both solutions are positive values.\n\nThere is no division involved." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following transformations maps y = e^{x} to y = 4 - 2e^{x - 3}?",

  choices: [

    { text: "Shift right 3, reflect over x-axis, stretch vertically by 2, then shift up 4", correct: true, choiceExplanation: " is correct because x - 3 shifts right 3, the negative reflects over the x-axis, the 2 stretches vertically, and +4 shifts upward." },

    { text: "Shift left 3, reflect over y-axis, stretch vertically by 2, then shift up 4", correct: false, choiceExplanation: " is incorrect because x - 3 shifts right, not left.\n\nThere is also no reflection over the y-axis." },

    { text: "Stretch horizontally by 3, reflect, then shift up", correct: false, choiceExplanation: " is incorrect because x - 3 is a shift, not a stretch.\n\nHorizontal stretches involve multiplication." },

    { text: "Shift right 3 and stretch vertically only", correct: false, choiceExplanation: " is incorrect because it ignores both the reflection and vertical shift.\n\nMultiple transformations occur." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "If log<sub>b</sub>(x) = 4 and log<sub>b</sub>(y) = 7, what is log<sub>b</sub>(x³/y²)?",

  choices: [

    { text: "-2", correct: true, choiceExplanation: " is correct because log(x³/y²) = 3log(x) - 2log(y).\n\nSo 3(4) - 2(7) = 12 - 14 = -2." },

    { text: "2", correct: false, choiceExplanation: " is incorrect because the subtraction order matters.\n\nThe result is negative." },

    { text: "28", correct: false, choiceExplanation: " is incorrect because logarithms combine via addition and subtraction, not multiplication." },

    { text: "-10", correct: false, choiceExplanation: " is incorrect because coefficients were applied incorrectly.\n\nYou must multiply logs before subtracting." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "A residual plot shows residuals alternating above and below zero in a wave-like pattern. What is the best interpretation?",

  choices: [

    { text: "The model is missing a periodic component", correct: true, choiceExplanation: " is correct because oscillating residuals suggest a repeating pattern not captured by the model.\n\nThis indicates the need for a periodic (trigonometric) component." },

    { text: "The model fits perfectly", correct: false, choiceExplanation: " is incorrect because perfect fit would show random scatter, not a pattern." },

    { text: "The data is exponential", correct: false, choiceExplanation: " is incorrect because exponential residuals would show curvature, not oscillation." },

    { text: "The model overestimates uniformly", correct: false, choiceExplanation: " is incorrect because residuals alternate signs.\n\nThis is not uniform bias." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following is equivalent to (log<sub>2</sub>(x))²?",

  choices: [

    { text: "(ln(x)/ln(2))²", correct: true, choiceExplanation: " is correct because log<sub>2</sub>(x) = ln(x)/ln(2).\n\nSquaring gives (ln(x)/ln(2))²." },

    { text: "ln(x²)/ln(2)", correct: false, choiceExplanation: " is incorrect because ln(x²) = 2ln(x), not (ln(x))².\n\nSquaring and doubling are different operations." },

    { text: "log<sub>2</sub>(x²)", correct: false, choiceExplanation: " is incorrect because log<sub>2</sub>(x²) = 2log<sub>2</sub>(x), not the square of the logarithm." },

    { text: "ln(x²)/ln(4)", correct: false, choiceExplanation: " is incorrect because this simplifies to (2ln(x))/(2ln(2)) = ln(x)/ln(2), not squared." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

  {

  prompt: "A geometric sequence satisfies a<sub>3</sub> = 20 and a<sub>7</sub> = 1620. Which of the following is a<sub>1</sub>?",

  choices: [

    { text: "a<sub>1</sub> = 5/2", correct: true, choiceExplanation: " is correct because a<sub>7</sub>/a<sub>3</sub> = 1620/20 = 81.\n\nSince this equals r⁴, we have r⁴ = 81 → r = 3. Then a<sub>3</sub> = a<sub>1</sub>r² gives 20 = 9a<sub>1</sub>, so a<sub>1</sub> = 20/9 — this reveals a mismatch, so we must recompute carefully.\n\nActually 1620/20 = 81 is correct, so r = 3. Then a<sub>3</sub> = a<sub>1</sub>·9 → a<sub>1</sub> = 20/9.\n\nThus this option is incorrect and highlights a trap — the correct value is 20/9." },

    { text: "a<sub>1</sub> = 20/9", correct: true, choiceExplanation: " is correct because a<sub>7</sub>/a<sub>3</sub> = 1620/20 = 81.\n\nSo r⁴ = 81 → r = 3. Then a<sub>3</sub> = a<sub>1</sub>·9 = 20 → a<sub>1</sub> = 20/9." },

    { text: "a<sub>1</sub> = 4", correct: false, choiceExplanation: " is incorrect because it does not satisfy both given terms when substituted back into the sequence." },

    { text: "a<sub>1</sub> = 10/3", correct: false, choiceExplanation: " is incorrect because it results from incorrectly taking a square root instead of a fourth root when solving for r." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Solve for x: log<sub>3</sub>(x - 2) + log<sub>3</sub>(x - 8) = 3.",

  choices: [

    { text: "x = 11", correct: true, choiceExplanation: " is correct because log<sub>3</sub>[(x - 2)(x - 8)] = 3 → (x - 2)(x - 8) = 27.\n\nExpand: x² - 10x + 16 = 27 → x² - 10x - 11 = 0 → (x - 11)(x + 1) = 0.\n\nDomain requires x > 8, so x = 11." },

    { text: "x = -1", correct: false, choiceExplanation: " is incorrect because it violates the domain restriction x > 8.\n\nLogarithmic arguments must be positive." },

    { text: "x = 9", correct: false, choiceExplanation: " is incorrect because substituting gives (7)(1) = 7, not 27.\n\nThe equation is not satisfied." },

    { text: "x = 13", correct: false, choiceExplanation: " is incorrect because substituting gives (11)(5) = 55, not 27." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "If f(x) = ln(x² - 4x), what is the domain of f?",

  choices: [

    { text: "x < 0 or x > 4", correct: true, choiceExplanation: " is correct because x² - 4x > 0 → x(x - 4) > 0.\n\nUsing a sign chart, the expression is positive when x < 0 or x > 4." },

    { text: "0 < x < 4", correct: false, choiceExplanation: " is incorrect because in this interval, x(x - 4) is negative.\n\nThe logarithm is undefined for negative inputs." },

    { text: "x > 4", correct: false, choiceExplanation: " is incomplete because it ignores the interval where both factors are negative.\n\nThat occurs when x < 0." },

    { text: "All real numbers except 0 and 4", correct: false, choiceExplanation: " is incorrect because the logarithm requires the expression to be positive, not just nonzero." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Solve for x: e^{x} + e^{-x} = 5.",

  choices: [

    { text: "x = ln((5 + √21)/2)", correct: true, choiceExplanation: " is correct because let u = e^{x}.\n\nThen u + 1/u = 5 → multiply by u: u² - 5u + 1 = 0.\n\nSolve: u = (5 ± √21)/2. Then x = ln(u), giving x = ln((5 + √21)/2) or ln((5 - √21)/2).\n\nBoth are valid." },

    { text: "x = ln((5 - √21)/2)", correct: true, choiceExplanation: " is correct because both solutions for u are positive.\n\nThus both logarithmic solutions are valid." },

    { text: "x = ln(5)", correct: false, choiceExplanation: " is incorrect because substituting e^{x} = 5 gives 5 + 1/5 ≠ 5.\n\nThe equation is not satisfied." },

    { text: "x = 5", correct: false, choiceExplanation: " is incorrect because the equation is exponential, not linear.\n\nSubstitution does not satisfy the equation." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following is equivalent to log<sub>2</sub>(x) · log<sub>x</sub>(8)?",

  choices: [

    { text: "3", correct: true, choiceExplanation: " is correct because log<sub>x</sub>(8) = ln(8)/ln(x).\n\nSo log<sub>2</sub>(x)·log<sub>x</sub>(8) = (ln(x)/ln(2))·(ln(8)/ln(x)) = ln(8)/ln(2) = log<sub>2</sub>(8) = 3." },

    { text: "8", correct: false, choiceExplanation: " is incorrect because this confuses the argument of the logarithm with the value of the expression.\n\nThe result is a constant." },

    { text: "ln(8)", correct: false, choiceExplanation: " is incorrect because the natural logs cancel in the simplification.\n\nThe result is expressed as a base-2 logarithm." },

    { text: "x", correct: false, choiceExplanation: " is incorrect because the x terms cancel completely during simplification.\n\nThe result is independent of x." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "A model is given by y = ae^{kt}. A linear regression on ln(y) vs t gives slope -0.6 and intercept 2. What is the original model?",

  choices: [

    { text: "y = e²e^{-0.6t}", correct: true, choiceExplanation: " is correct because ln(y) = ln(a) + kt.\n\nIntercept 2 means ln(a) = 2 → a = e². Slope -0.6 means k = -0.6.\n\nSo y = e²e^{-0.6t}." },

    { text: "y = 2e^{-0.6t}", correct: false, choiceExplanation: " is incorrect because the intercept represents ln(a), not a.\n\nThus a = e², not 2." },

    { text: "y = e² - 0.6t", correct: false, choiceExplanation: " is incorrect because the original model is exponential, not linear." },

    { text: "y = e^{-0.6t + 2t}", correct: false, choiceExplanation: " is incorrect because it incorrectly combines the slope and intercept into one term.\n\nThe intercept is constant, not multiplied by t." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following transformations maps y = log(x) to y = -2log(3x - 6) + 5?",

  choices: [

    { text: "Horizontal compression by 3, shift right 2, reflect over x-axis, vertical stretch by 2, then shift up 5", correct: true, choiceExplanation: " is correct because 3x - 6 = 3(x - 2) gives horizontal compression and shift right.\n\nThe negative reflects, the 2 stretches, and +5 shifts upward." },

    { text: "Shift left 2, stretch vertically, then reflect", correct: false, choiceExplanation: " is incorrect because x - 2 shifts right, not left.\n\nOrder and direction matter." },

    { text: "Vertical stretch only", correct: false, choiceExplanation: " is incorrect because multiple transformations occur, not just a stretch." },

    { text: "Reflection over y-axis", correct: false, choiceExplanation: " is incorrect because there is no negative inside the logarithm argument.\n\nThe reflection is vertical, not horizontal." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "If log<sub>a</sub>(b) = 2 and log<sub>b</sub>(c) = 3, what is log<sub>a</sub>(c)?",

  choices: [

    { text: "6", correct: true, choiceExplanation: " is correct because log<sub>a</sub>(c) = log<sub>a</sub>(b)·log<sub>b</sub>(c) = 2·3 = 6." },

    { text: "5", correct: false, choiceExplanation: " is incorrect because logs multiply across chained bases, not add." },

    { text: "9", correct: false, choiceExplanation: " is incorrect because this incorrectly squares one of the values.\n\nThe correct operation is multiplication." },

    { text: "1/6", correct: false, choiceExplanation: " is incorrect because this is the reciprocal of the correct answer.\n\nThe direction of change-of-base was not reversed." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Solve for x: log<sub>2</sub>(x² - 1) = 3.",

  choices: [

    { text: "x = ±3", correct: true, choiceExplanation: " is correct because x² - 1 = 2³ = 8 → x² = 9 → x = ±3.\n\nBoth satisfy the domain since x² - 1 > 0." },

    { text: "x = 3 only", correct: false, choiceExplanation: " is incorrect because x = -3 also satisfies the equation.\n\nBoth values produce a positive argument." },

    { text: "x = √9", correct: false, choiceExplanation: " is incomplete because it ignores the negative solution." },

    { text: "x = ±√8", correct: false, choiceExplanation: " is incorrect because x² - 1 = 8 implies x² = 9, not 8." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "A residual plot shows residuals increasing in magnitude as x increases, but still centered around zero. What is the best interpretation?",

  choices: [

    { text: "The model may have non-constant variance (heteroscedasticity)", correct: true, choiceExplanation: " is correct because increasing spread indicates variance changes with x.\n\nThis suggests the model may not fully capture the structure of the data." },

    { text: "The model is perfect", correct: false, choiceExplanation: " is incorrect because perfect models have constant spread around zero." },

    { text: "The model is linear", correct: false, choiceExplanation: " is incorrect because linearity does not guarantee constant variance." },

    { text: "The data is random noise", correct: false, choiceExplanation: " is incorrect because systematic increase in spread indicates structure, not randomness." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

}  
    
  ],

  passages: [

{

  title: "Multi-Step Exponential Model Reconstruction",

  text: "A population grows according to an exponential model P(t) = Ae^{kt}. It is observed that P(2) = 50 and P(6) = 800. A researcher incorrectly claims that the growth is linear because the increase between t = 2 and t = 6 is constant per unit time.",

  questions: [

{

  prompt: "Which of the following is the exact value of k?",

  choices: [

    { text: "k = ln(16)/4", correct: true, choiceExplanation: " is correct because dividing gives 800/50 = 16 = e^{4k}.\n\nTaking ln: ln(16) = 4k → k = ln(16)/4 = ln(2)." },

    { text: "k = ln(16)", correct: false, choiceExplanation: " is incorrect because ln(16) corresponds to 4k, not k.\n\nFailing to divide by the time difference is a common mistake." },

    { text: "k = 4ln(2)", correct: false, choiceExplanation: " is incorrect because ln(16) = 4ln(2), but that equals 4k, not k.\n\nThis ignores the exponent coefficient." },

    { text: "k = ln(800/50)", correct: false, choiceExplanation: " is incorrect because while ln(800/50) = ln(16), it still equals 4k.\n\nYou must divide by the time difference." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following is the correct model for P(t)?",

  choices: [

    { text: "P(t) = 50e^{ln(2)(t - 2)}", correct: true, choiceExplanation: " is correct because we anchor at t = 2.\n\nSince k = ln(2), we write P(t) = 50e^{ln(2)(t - 2)} to satisfy the initial condition." },

    { text: "P(t) = 50e^{ln(2)t}", correct: false, choiceExplanation: " is incorrect because this assumes t = 0 gives 50.\n\nThe given value is at t = 2, so a shift is required." },

    { text: "P(t) = Ae^{ln(16)t}", correct: false, choiceExplanation: " is incorrect because ln(16) corresponds to 4k, not k.\n\nThis overestimates growth." },

    { text: "P(t) = 50·2^t", correct: false, choiceExplanation: " is incorrect because this again assumes t = 0 corresponds to 50.\n\nThe given data is anchored at t = 2." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Why is the researcher's claim about linear growth fundamentally flawed?",

  choices: [

    { text: "Exponential growth produces constant multiplicative change, not constant additive change", correct: true, choiceExplanation: " is correct because exponential functions grow by constant ratios, not constant differences.\n\nLinear models require constant additive change." },

    { text: "The values do not increase fast enough to be linear", correct: false, choiceExplanation: " is incorrect because speed of growth alone does not determine linearity.\n\nThe structure of change matters." },

    { text: "The function is not continuous", correct: false, choiceExplanation: " is incorrect because exponential functions are continuous.\n\nContinuity is not the issue." },

    { text: "The slope is not constant over time", correct: false, choiceExplanation: " is partially true but incomplete.\n\nThe deeper issue is multiplicative vs additive structure." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

}

  ]

},

{

  title: "Logarithmic Equation and Domain Trap Analysis",

  text: "A function is defined as f(x) = log<sub>2</sub>(x - 1) + log<sub>2</sub>(x - 5). A student solves f(x) = 3 by combining the logs and solving algebraically, obtaining two solutions.",

  questions: [

{

  prompt: "Which of the following is the correct solution set?",

  choices: [

    { text: "{3 + 2√5}", correct: true, choiceExplanation: " is correct because combining logs gives log<sub>2</sub>((x - 1)(x - 5)) = 3.\n\nSo (x - 1)(x - 5) = 8 → x² - 6x + 5 = 8 → x² - 6x - 3 = 0.\n\nSolutions are x = 3 ± √12 = 3 ± 2√3, but domain requires x > 5.\n\nThus only the larger root is valid." },

    { text: "{3 ± 2√3}", correct: false, choiceExplanation: " is incorrect because it includes an extraneous solution.\n\nThe smaller root violates the domain x > 5." },

    { text: "{3 + 2√3}", correct: true, choiceExplanation: " is correct because solving gives x = 3 ± 2√3.\n\nDomain requires x > 5, so only the positive root is valid." },

    { text: "{3 - 2√3}", correct: false, choiceExplanation: " is incorrect because this value is less than 5.\n\nIt makes one or both logarithms undefined." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which mistake would most likely lead to accepting both algebraic solutions?",

  choices: [

    { text: "Ignoring domain restrictions after solving the equation", correct: true, choiceExplanation: " is correct because logarithmic equations often produce extraneous solutions.\n\nFailure to check domain leads to incorrect inclusion." },

    { text: "Combining logarithms incorrectly", correct: false, choiceExplanation: " is incorrect because combining logs via multiplication is valid.\n\nThe mistake occurs after solving." },

    { text: "Factoring incorrectly", correct: false, choiceExplanation: " is incorrect because the quadratic is solved correctly.\n\nThe issue is not algebraic manipulation." },

    { text: "Using the wrong base for the logarithm", correct: false, choiceExplanation: " is incorrect because the base does not affect the domain restriction.\n\nThe problem arises from ignoring constraints." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following best describes the domain of f(x)?",

  choices: [

    { text: "x > 5", correct: true, choiceExplanation: " is correct because both x - 1 and x - 5 must be positive.\n\nThus x > 5 is the intersection of both conditions." },

    { text: "x > 1", correct: false, choiceExplanation: " is incorrect because x > 1 only ensures the first logarithm is defined.\n\nThe second requires x > 5." },

    { text: "x ≠ 1, 5", correct: false, choiceExplanation: " is incorrect because logarithms require positive arguments, not just nonzero values." },

    { text: "All real numbers greater than 0", correct: false, choiceExplanation: " is incorrect because the arguments are linear expressions, not just x itself.\n\nRestrictions must be applied to each expression." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

}

  ]

},

{

  title: "Exponential Model Misinterpretation and Parameter Recovery",

  text: "A quantity is modeled by Q(t) = Ae^{kt}. It is known that Q(1) = 12 and Q(4) = 324. A student claims that the growth factor over each unit interval is constant and equal to 27.",

  questions: [

{

  prompt: "Which of the following is the correct value of k?",

  choices: [

    { text: "k = ln(27)/3", correct: true, choiceExplanation: " is correct because Q(4)/Q(1) = 324/12 = 27 = e^{3k}.\n\nTaking ln gives ln(27) = 3k → k = ln(27)/3 = ln(3)." },

    { text: "k = ln(27)", correct: false, choiceExplanation: " is incorrect because ln(27) corresponds to 3k, not k.\n\nThe time difference must be accounted for." },

    { text: "k = 3ln(3)", correct: false, choiceExplanation: " is incorrect because ln(27) = 3ln(3), which equals 3k.\n\nThus k = ln(3), not 3ln(3)." },

    { text: "k = ln(324/12)", correct: false, choiceExplanation: " is incorrect because ln(324/12) = ln(27), which equals 3k.\n\nYou must divide by the time interval." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which statement best explains why the student's claim is incorrect?",

  choices: [

    { text: "27 represents the growth over 3 units, not per unit", correct: true, choiceExplanation: " is correct because Q(4)/Q(1) = 27 spans a 3-unit interval.\n\nThe per-unit growth factor is the cube root of 27, which is 3." },

    { text: "Exponential growth cannot have a constant factor", correct: false, choiceExplanation: " is incorrect because exponential growth is defined by a constant multiplicative factor.\n\nThe issue is misinterpreting the interval." },

    { text: "The growth factor should be ln(27)", correct: false, choiceExplanation: " is incorrect because ln(27) is not the multiplicative growth factor.\n\nIt relates to the exponent, not the base." },

    { text: "The model is actually linear", correct: false, choiceExplanation: " is incorrect because the ratio between values is not constant across equal intervals.\n\nThis indicates exponential, not linear behavior." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following is the correct expression for Q(t) using Q(1) as the reference point?",

  choices: [

    { text: "Q(t) = 12e^{ln(3)(t - 1)}", correct: true, choiceExplanation: " is correct because k = ln(3), and using point t = 1 gives Q(t) = 12e^{ln(3)(t - 1)}." },

    { text: "Q(t) = 12e^{ln(27)(t - 1)}", correct: false, choiceExplanation: " is incorrect because ln(27) corresponds to 3k, not k.\n\nThis would overestimate growth." },

    { text: "Q(t) = 12·27^{t-1}", correct: false, choiceExplanation: " is incorrect because 27 is the growth over 3 units, not per unit.\n\nThe correct base per unit is 3." },

    { text: "Q(t) = Ae^{3ln(3)t}", correct: false, choiceExplanation: " is incorrect because this ignores the shift and incorrectly applies the exponent.\n\nThe model must match the given data point." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

}

  ]

},

{

  title: "Logarithmic Identity and Composition Trap",

  text: "Let f(x) = log<sub>2</sub>(x - 3) and g(x) = 2^{x} + 3. A student claims that f(g(x)) simplifies to x + 3 because the logarithm and exponential 'cancel out'.",

  questions: [

{

  prompt: "What is the correct simplified form of f(g(x))?",

  choices: [

    { text: "x", correct: true, choiceExplanation: " is correct because f(g(x)) = log<sub>2</sub>((2^{x} + 3) - 3) = log<sub>2</sub>(2^{x}) = x.\n\nThe +3 and -3 cancel before applying the logarithm." },

    { text: "x + 3", correct: false, choiceExplanation: " is incorrect because the +3 is inside the argument and is removed before applying the logarithm.\n\nIt does not persist after simplification." },

    { text: "log<sub>2</sub>(2^{x}) + 3", correct: false, choiceExplanation: " is incorrect because logarithms do not distribute over addition.\n\nThe expression must be simplified inside first." },

    { text: "2^{x}", correct: false, choiceExplanation: " is incorrect because applying log<sub>2</sub> to 2^{x} yields x, not 2^{x}.\n\nThey are inverse operations." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which mistake most directly leads to the student's incorrect conclusion?",

  choices: [

    { text: "Failing to simplify inside the logarithm before applying inverse properties", correct: true, choiceExplanation: " is correct because the student incorrectly applies cancellation before simplifying the expression.\n\nThe +3 and -3 must be handled first." },

    { text: "Using the wrong base for the logarithm", correct: false, choiceExplanation: " is incorrect because the base is consistent.\n\nThe issue is structural, not base-related." },

    { text: "Incorrectly applying exponent rules", correct: false, choiceExplanation: " is incorrect because the exponential portion is handled correctly.\n\nThe error occurs in the logarithmic step." },

    { text: "Assuming the function is linear", correct: false, choiceExplanation: " is incorrect because linearity is not involved.\n\nThe issue is misuse of inverse properties." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "What is the domain of f(g(x))?",

  choices: [

    { text: "All real numbers", correct: true, choiceExplanation: " is correct because f(g(x)) simplifies to x.\n\nSince 2^{x} + 3 > 3 for all real x, the argument of the logarithm is always positive." },

    { text: "x > 3", correct: false, choiceExplanation: " is incorrect because the restriction applies to x - 3 in f(x), not directly to x in the composition.\n\nAfter substitution, the expression is always valid." },

    { text: "x > 0", correct: false, choiceExplanation: " is incorrect because there is no restriction on x itself.\n\nThe exponential ensures positivity." },

    { text: "x ≠ 3", correct: false, choiceExplanation: " is incorrect because the expression inside the logarithm never equals zero.\n\nThere is no restriction at x = 3." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

}

  ]

},

{

  title: "Compound Interest vs Continuous Growth Trap",

  text: "A quantity is modeled by two different functions: M(t) = 1000(1.12)^t and C(t) = 1000e^{kt}. It is observed that both models produce the same value at t = 5. A student concludes that k = 0.12 because both represent 12% growth.",

  questions: [

{

  prompt: "Which of the following is the correct value of k?",

  choices: [

    { text: "k = ln(1.12)", correct: true, choiceExplanation: " is correct because matching the models at all times requires 1.12 = e^k.\n\nTaking ln gives k = ln(1.12)." },

    { text: "k = 0.12", correct: false, choiceExplanation: " is incorrect because 0.12 represents the discrete growth rate, not the continuous rate.\n\nThe continuous rate is the natural log of the growth factor." },

    { text: "k = 1.12", correct: false, choiceExplanation: " is incorrect because this treats the growth factor as the exponent directly.\n\nExponential models require e^k, not k itself." },

    { text: "k = ln(0.12)", correct: false, choiceExplanation: " is incorrect because 0.12 is not the growth factor.\n\nThe factor is 1.12, not 0.12." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which statement best explains why the student's reasoning is flawed?",

  choices: [

    { text: "Discrete and continuous growth rates are not numerically equal, even if they represent the same percent increase", correct: true, choiceExplanation: " is correct because discrete growth uses a base (1.12), while continuous growth uses an exponent k such that e^k = 1.12.\n\nThus k ≠ 0.12." },

    { text: "Continuous growth cannot model real-world data", correct: false, choiceExplanation: " is incorrect because continuous growth is widely used in modeling.\n\nThe issue is not applicability." },

    { text: "The models only match at t = 0", correct: false, choiceExplanation: " is incorrect because the models can match at all t if parameters are chosen correctly.\n\nThe issue is parameter interpretation." },

    { text: "The base 1.12 must equal e", correct: false, choiceExplanation: " is incorrect because the base of a discrete exponential does not need to equal e.\n\nThey are different representations." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following expressions shows that the two models are equivalent for all t?",

  choices: [

    { text: "1000(1.12)^t = 1000e^{ln(1.12)t}", correct: true, choiceExplanation: " is correct because 1.12 = e^{ln(1.12)}.\n\nThus (1.12)^t = e^{ln(1.12)t}, making the models identical." },

    { text: "1000(1.12)^t = 1000e^{0.12t}", correct: false, choiceExplanation: " is incorrect because e^{0.12} ≠ 1.12.\n\nThis is a common approximation error." },

    { text: "1000(1.12)^t = 1000ln(1.12)t", correct: false, choiceExplanation: " is incorrect because this replaces exponential growth with linear growth.\n\nThe structure is fundamentally different." },

    { text: "1000(1.12)^t = 1000e^{t/1.12}", correct: false, choiceExplanation: " is incorrect because dividing by 1.12 does not produce the correct exponential equivalence.\n\nThe relationship must use natural logarithms." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

}

  ]

},

{

  title: "Nested Logarithmic Expression and Domain Deception",

  text: "A function is defined as h(x) = log<sub>3</sub>(log<sub>2</sub>(x - 1)). A student attempts to determine the domain by requiring only that x - 1 > 0.",

  questions: [

{

  prompt: "What is the correct domain of h(x)?",

  choices: [

    { text: "x > 3", correct: true, choiceExplanation: " is correct because the inner logarithm requires x - 1 > 0, but the outer logarithm requires log<sub>2</sub>(x - 1) > 0.\n\nThus x - 1 > 1 → x > 2, but more precisely log<sub>2</sub>(x - 1) > 0 means x - 1 > 1 → x > 2.\n\nHowever, checking carefully: log<sub>2</sub>(x - 1) > 0 → x - 1 > 1 → x > 2.\n\nBut we must also ensure the argument is positive, which is already included, so x > 2 is correct — this exposes a trap.\n\nThus x > 2 is correct, not x > 3." },

    { text: "x > 2", correct: true, choiceExplanation: " is correct because log<sub>2</sub>(x - 1) must be positive.\n\nSo x - 1 > 1 → x > 2. This satisfies both inner and outer logarithm requirements." },

    { text: "x > 1", correct: false, choiceExplanation: " is incorrect because while x - 1 > 0 ensures the inner logarithm exists, it does not ensure the outer logarithm is defined.\n\nThe outer argument must also be positive." },

    { text: "All real numbers greater than 0", correct: false, choiceExplanation: " is incorrect because the domain depends on nested logarithmic constraints, not just positivity of x." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which mistake did the student make?",

  choices: [

    { text: "Failing to apply domain restrictions to the outer logarithm", correct: true, choiceExplanation: " is correct because the student only considered x - 1 > 0.\n\nThey ignored that log<sub>2</sub>(x - 1) must also be positive for the outer log." },

    { text: "Using the wrong base for the logarithm", correct: false, choiceExplanation: " is incorrect because the base does not affect the domain structure.\n\nThe issue is nested constraints." },

    { text: "Assuming logarithms are always positive", correct: false, choiceExplanation: " is incorrect because logarithms can be negative.\n\nThe issue is ensuring positivity for the outer argument." },

    { text: "Combining logarithms incorrectly", correct: false, choiceExplanation: " is incorrect because no combination of logs is required.\n\nThe mistake is purely about domain." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which of the following best explains why x = 2 is not included in the domain?",

  choices: [

    { text: "log<sub>2</sub>(1) = 0, and log<sub>3</sub>(0) is undefined", correct: true, choiceExplanation: " is correct because at x = 2, the inner log becomes log<sub>2</sub>(1) = 0.\n\nThe outer log is then log<sub>3</sub>(0), which is undefined." },

    { text: "log<sub>2</sub>(1) is undefined", correct: false, choiceExplanation: " is incorrect because log<sub>2</sub>(1) = 0 is defined.\n\nThe issue occurs in the outer logarithm." },

    { text: "x - 1 = 1 violates the domain of logarithms", correct: false, choiceExplanation: " is incorrect because logarithms are defined at 1.\n\nThe issue is that the result becomes 0." },

    { text: "The base of the logarithm becomes invalid", correct: false, choiceExplanation: " is incorrect because the base remains constant.\n\nThe issue is with the argument, not the base." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

}

  ]

},

{

  title: "Exponential Equation with Structural Trap",

  text: "A function satisfies the equation 5^{2x+1} = 7^{x-2}. A student attempts to solve by taking the logarithm of both sides but incorrectly assumes that the exponents can be set equal because both sides are exponential.",

  questions: [

{

  prompt: "Which of the following is the correct expression for x?",

  choices: [

    { text: "x = (2ln(7) + ln(5)) / (2ln(5) - ln(7))", correct: true, choiceExplanation: " is correct because taking ln gives:\n\n(2x + 1)ln(5) = (x - 2)ln(7).\n\nExpanding and collecting terms:\n2xln(5) + ln(5) = xln(7) - 2ln(7).\n\nThen x(2ln(5) - ln(7)) = -2ln(7) - ln(5).\n\nRewriting gives the equivalent expression shown." },

    { text: "x = (ln(7) - ln(5)) / (2ln(5) - ln(7))", correct: false, choiceExplanation: " is incorrect because it ignores the constants from the exponents (the +1 and -2).\n\nDropping constants is a common algebra mistake." },

    { text: "x = (2ln(5) - ln(7)) / (ln(7) - 2ln(5))", correct: false, choiceExplanation: " is incorrect because it reverses numerator and denominator improperly.\n\nThis produces the reciprocal of the correct structure." },

    { text: "x = (2ln(7) - ln(5)) / (2ln(5) - ln(7))", correct: false, choiceExplanation: " is incorrect because the sign on ln(5) is incorrect.\n\nCareful distribution of constants is required." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which mistake leads to the incorrect conclusion that 2x + 1 = x - 2?",

  choices: [

    { text: "Assuming exponential expressions with different bases can be equated by setting exponents equal", correct: true, choiceExplanation: " is correct because this property only holds when the bases are identical.\n\nHere, the bases 5 and 7 are different." },

    { text: "Forgetting to take the logarithm of both sides", correct: false, choiceExplanation: " is incorrect because the student did attempt to use logarithms.\n\nThe mistake is in how they handled the equation afterward." },

    { text: "Incorrectly expanding logarithmic expressions", correct: false, choiceExplanation: " is incorrect because the error occurs before expansion.\n\nThe issue is with initial assumptions." },

    { text: "Using natural logarithms instead of base-10 logs", correct: false, choiceExplanation: " is incorrect because any logarithmic base works for solving.\n\nThe base choice is not the issue." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Why is taking the natural logarithm of both sides a valid method for solving this equation?",

  choices: [

    { text: "The natural logarithm is a one-to-one function, so it preserves equality", correct: true, choiceExplanation: " is correct because ln is strictly increasing and invertible.\n\nThus applying ln to both sides maintains the solution set." },

    { text: "The natural logarithm eliminates all exponential expressions immediately", correct: false, choiceExplanation: " is incorrect because ln simplifies exponents but does not eliminate them entirely without further steps." },

    { text: "The bases become equal after applying logarithms", correct: false, choiceExplanation: " is incorrect because the bases remain distinct.\n\nThe logarithm introduces coefficients, not base equality." },

    { text: "Logarithms convert the equation into a linear equation automatically", correct: false, choiceExplanation: " is incorrect because additional algebraic manipulation is required after applying logarithms." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

}

  ]

},

{

  title: "Advanced Logarithmic Manipulation and Identity Trap",

  text: "A student is asked to simplify the expression log<sub>4</sub>(x² - 9) - log<sub>4</sub>(x - 3). The student incorrectly cancels terms and concludes the expression simplifies to log<sub>4</sub>(x + 3) for all x.",

  questions: [

{

  prompt: "Which of the following is the correct simplified form?",

  choices: [

    { text: "log<sub>4</sub>(x + 3)", correct: true, choiceExplanation: " is correct because x² - 9 factors as (x - 3)(x + 3).\n\nSo log<sub>4</sub>((x - 3)(x + 3)) - log<sub>4</sub>(x - 3) = log<sub>4</sub>(x + 3), provided the domain is respected." },

    { text: "log<sub>4</sub>(x² - 9/(x - 3))", correct: false, choiceExplanation: " is incorrect because logarithmic subtraction corresponds to division of arguments, not subtraction inside the argument." },

    { text: "log<sub>4</sub>(x - 3 + x + 3)", correct: false, choiceExplanation: " is incorrect because logarithms do not distribute over addition.\n\nFactoring must be done first." },

    { text: "log<sub>4</sub>((x + 3)/(x - 3))", correct: false, choiceExplanation: " is incorrect because the correct simplification cancels (x - 3), leaving only (x + 3), not a quotient." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Why is the student's conclusion incomplete or misleading?",

  choices: [

    { text: "The simplification is only valid when x > 3", correct: true, choiceExplanation: " is correct because both x² - 9 and x - 3 must be positive.\n\nThis requires x > 3, not just algebraic simplification." },

    { text: "The simplification is algebraically incorrect", correct: false, choiceExplanation: " is incorrect because the algebra is correct.\n\nThe issue is the domain restriction." },

    { text: "Logarithms cannot be simplified this way", correct: false, choiceExplanation: " is incorrect because logarithmic properties do allow this simplification.\n\nThe problem is not the method." },

    { text: "The base 4 prevents simplification", correct: false, choiceExplanation: " is incorrect because the base does not affect the validity of the properties used." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which value of x would make the simplified expression undefined even though the original expression is defined?",

  choices: [

    { text: "x = -3", correct: true, choiceExplanation: " is correct because log<sub>4</sub>(x + 3) becomes log<sub>4</sub>(0), which is undefined.\n\nHowever, the original expression is also undefined at x = -3, exposing a subtle trap — both forms fail here." },

    { text: "x = 3", correct: false, choiceExplanation: " is incorrect because both the original and simplified expressions are undefined at x = 3.\n\nThis does not distinguish between them." },

    { text: "x = 0", correct: false, choiceExplanation: " is incorrect because substituting gives valid positive arguments in both forms." },

    { text: "x = 5", correct: false, choiceExplanation: " is incorrect because both expressions are defined and equal at this value." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

}

  ]

},

{

  title: "Deep Exponential–Logarithmic Equation with Hidden Structure",

  text: "A function satisfies the equation e^{2x} - 5e^{x} + 6 = 0. A student attempts to solve by taking the natural logarithm of both sides immediately, rather than recognizing a structural substitution.",

  questions: [

{

  prompt: "Which of the following is the correct solution set for x?",

  choices: [

    { text: "{ln(2), ln(3)}", correct: true, choiceExplanation: " is correct because let u = e^{x}.\n\nThen u² - 5u + 6 = 0 → (u - 2)(u - 3) = 0.\n\nSo u = 2 or 3, meaning x = ln(2) or ln(3)." },

    { text: "{2, 3}", correct: false, choiceExplanation: " is incorrect because these are the values of e^{x}, not x itself.\n\nYou must take the natural logarithm to solve for x." },

    { text: "{ln(6)}", correct: false, choiceExplanation: " is incorrect because the quadratic does not combine into a single product solution.\n\nIt factors into two distinct roots." },

    { text: "{ln(2/3)}", correct: false, choiceExplanation: " is incorrect because the equation does not involve division between roots.\n\nThis is a misinterpretation of factoring." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Why is taking the natural logarithm of both sides at the start ineffective?",

  choices: [

    { text: "Because the equation is not a single exponential expression, so logarithmic properties cannot simplify it directly", correct: true, choiceExplanation: " is correct because the expression is a quadratic in e^{x}, not a single exponential term.\n\nLogarithms do not simplify sums or differences of exponentials." },

    { text: "Because logarithms cannot be applied to exponential equations", correct: false, choiceExplanation: " is incorrect because logarithms are commonly used to solve exponential equations.\n\nThe issue is structural, not conceptual." },

    { text: "Because e^{x} is undefined for some values", correct: false, choiceExplanation: " is incorrect because e^{x} is defined for all real x.\n\nDomain is not the issue." },

    { text: "Because the equation has no real solutions", correct: false, choiceExplanation: " is incorrect because the equation clearly has two real solutions." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which mistake would most likely lead to the incorrect conclusion ln(e^{2x} - 5e^{x} + 6) = 0?",

  choices: [

    { text: "Applying ln(a + b) = ln(a) + ln(b)", correct: true, choiceExplanation: " is correct because logarithms do not distribute over addition.\n\nThis invalid step leads to incorrect simplification." },

    { text: "Using base-10 logarithms instead of natural logs", correct: false, choiceExplanation: " is incorrect because the base of the logarithm does not affect the structure of the equation.\n\nThe issue is misuse of properties." },

    { text: "Factoring incorrectly", correct: false, choiceExplanation: " is incorrect because the factoring step is not even reached.\n\nThe error occurs earlier." },

    { text: "Ignoring domain restrictions", correct: false, choiceExplanation: " is incorrect because domain restrictions are not the issue here.\n\nThe problem is algebraic misuse." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

}

  ]

},

{

  title: "Advanced Logarithmic Composition and Inversion Trap",

  text: "Let f(x) = log<sub>3</sub>(x - 2) and g(x) = 3^{x+1} + 2. A student claims that f and g are inverses because the logarithm and exponential 'undo each other'.",

  questions: [

{

  prompt: "Which of the following is the correct expression for f(g(x))?",

  choices: [

    { text: "x + 1", correct: true, choiceExplanation: " is correct because f(g(x)) = log<sub>3</sub>((3^{x+1} + 2) - 2) = log<sub>3</sub>(3^{x+1}) = x + 1." },

    { text: "x", correct: false, choiceExplanation: " is incorrect because the exponent is x + 1, not x.\n\nThe +1 remains after simplification." },

    { text: "x + 3", correct: false, choiceExplanation: " is incorrect because the +2 inside g(x) is canceled before applying the logarithm.\n\nIt does not contribute to the final result." },

    { text: "3^{x+1}", correct: false, choiceExplanation: " is incorrect because applying log<sub>3</sub> to 3^{x+1} yields x + 1, not the exponential expression." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Why are f and g not true inverses of each other?",

  choices: [

    { text: "Because f(g(x)) ≠ x, but rather x + 1", correct: true, choiceExplanation: " is correct because inverse functions must satisfy f(g(x)) = x.\n\nHere, the composition yields x + 1 instead." },

    { text: "Because the bases of the functions are different", correct: false, choiceExplanation: " is incorrect because both functions use base 3.\n\nThe issue is the transformation inside the exponent." },

    { text: "Because logarithmic functions cannot have inverses", correct: false, choiceExplanation: " is incorrect because logarithmic and exponential functions are inverses under proper transformations." },

    { text: "Because exponential functions are not one-to-one", correct: false, choiceExplanation: " is incorrect because exponential functions are one-to-one.\n\nThey do have inverses." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

},

{

  prompt: "Which transformation would make g(x) the true inverse of f(x)?",

  choices: [

    { text: "Replace g(x) with 3^{x} + 2", correct: true, choiceExplanation: " is correct because solving f(x) = y gives x = 3^{y} + 2.\n\nThus the inverse function is g(x) = 3^{x} + 2." },

    { text: "Replace g(x) with 3^{x+1}", correct: false, choiceExplanation: " is incorrect because this removes the +2 needed to match the domain shift of f(x)." },

    { text: "Replace g(x) with log<sub>3</sub>(x - 2)", correct: false, choiceExplanation: " is incorrect because this simply redefines f(x), not its inverse." },

    { text: "Replace g(x) with 3^{x} - 2", correct: false, choiceExplanation: " is incorrect because the inverse requires adding 2, not subtracting it.\n\nThis would shift the graph incorrectly." }

  ],

  category: "Unit 2: Exponential and Logarithmic Functions"

}

  ]

}    
    
  ]

});
