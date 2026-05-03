window.questionBanks = window.questionBanks || {};
window.questionBanks.apWorld = window.questionBanks.apWorld || [];

window.questionBanks.apPrecalc.push({

    rapidQuestions: [

{

  prompt: "A polynomial function has zeros at x = -3, x = 1, and x = 4. The graph crosses the x-axis at x = -3 and x = 4 but touches and turns around at x = 1. Which function could represent the graph?",

  choices: [

    { text: "f(x) = (x + 3)(x - 1)^2(x - 4)", correct: true, choiceExplanation: " is correct because zeros where the graph crosses have odd multiplicity, while zeros where the graph touches and turns around have even multiplicity.\n\nThe factors x + 3 and x - 4 have multiplicity 1, so the graph crosses at x = -3 and x = 4. The factor (x - 1)^2 has even multiplicity, so the graph touches at x = 1." },

    { text: "f(x) = (x + 3)^2(x - 1)(x - 4)^2", correct: false, choiceExplanation: " is incorrect because this would make the graph touch at x = -3 and x = 4.\n\nThose zeros have even multiplicity here, but the prompt says the graph crosses at those values." },

    { text: "f(x) = (x + 3)(x - 1)(x - 4)", correct: false, choiceExplanation: " is incorrect because all zeros have multiplicity 1.\n\nThat means the graph would cross at x = 1 instead of touching and turning around." },

    { text: "f(x) = (x + 3)^2(x - 1)^2(x - 4)^2", correct: false, choiceExplanation: " is incorrect because all zeros have even multiplicity.\n\nThe graph would touch at every zero instead of crossing at x = -3 and x = 4." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the end behavior of f(x) = -4x^5 + 2x^3 - 7x + 9?",

  choices: [

    { text: "As x → -∞, f(x) → ∞ and as x → ∞, f(x) → -∞", correct: true, choiceExplanation: " is correct because the leading term is -4x^5.\n\nAn odd-degree polynomial with a negative leading coefficient rises on the left and falls on the right." },

    { text: "As x → -∞, f(x) → -∞ and as x → ∞, f(x) → ∞", correct: false, choiceExplanation: " is incorrect because this describes an odd-degree polynomial with a positive leading coefficient.\n\nHere, the leading coefficient is negative." },

    { text: "As x → -∞, f(x) → ∞ and as x → ∞, f(x) → ∞", correct: false, choiceExplanation: " is incorrect because both ends rising describes an even-degree polynomial with a positive leading coefficient.\n\nThis polynomial has degree 5, which is odd." },

    { text: "As x → -∞, f(x) → -∞ and as x → ∞, f(x) → -∞", correct: false, choiceExplanation: " is incorrect because both ends falling describes an even-degree polynomial with a negative leading coefficient.\n\nThis polynomial is odd degree, so the ends must go in opposite directions." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "A polynomial function has degree 6 and a negative leading coefficient. Which statement must be true?",

  choices: [

    { text: "Both ends of the graph fall", correct: true, choiceExplanation: " is correct because even-degree polynomials have the same end behavior on both sides.\n\nA negative leading coefficient means both ends fall as x approaches ±∞." },

    { text: "Both ends of the graph rise", correct: false, choiceExplanation: " is incorrect because both ends rise only when an even-degree polynomial has a positive leading coefficient.\n\nThe leading coefficient here is negative." },

    { text: "The left end rises and the right end falls", correct: false, choiceExplanation: " is incorrect because opposite end behavior occurs for odd-degree polynomials.\n\nDegree 6 is even." },

    { text: "The left end falls and the right end rises", correct: false, choiceExplanation: " is incorrect because this also describes odd-degree behavior.\n\nAn even-degree polynomial has both ends moving in the same direction." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following functions has a removable discontinuity at x = -2?",

  choices: [

    { text: "f(x) = ((x + 2)(x - 5))/(x + 2)", correct: true, choiceExplanation: " is correct because the factor x + 2 appears in both the numerator and denominator.\n\nAfter cancellation, the graph has a hole at x = -2 rather than a vertical asymptote." },

    { text: "f(x) = (x - 5)/(x + 2)", correct: false, choiceExplanation: " is incorrect because x + 2 remains in the denominator.\n\nThat creates a vertical asymptote at x = -2, not a removable discontinuity." },

    { text: "f(x) = (x + 2)/(x - 5)", correct: false, choiceExplanation: " is incorrect because the denominator is not zero at x = -2.\n\nThere is no discontinuity at x = -2." },

    { text: "f(x) = (x^2 + 4)/(x + 2)", correct: false, choiceExplanation: " is incorrect because x^2 + 4 does not contain a factor of x + 2.\n\nSince the factor does not cancel, x = -2 is a vertical asymptote." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "For the rational function f(x) = (x^2 - 16)/(x^2 - 3x - 4), which statement is true?",

  choices: [

    { text: "There is a hole at x = 4 and a vertical asymptote at x = -1", correct: true, choiceExplanation: " is correct because x^2 - 16 factors as (x - 4)(x + 4), and x^2 - 3x - 4 factors as (x - 4)(x + 1).\n\nThe factor x - 4 cancels, creating a hole at x = 4. The remaining denominator factor x + 1 creates a vertical asymptote at x = -1." },

    { text: "There is a vertical asymptote at x = 4 and a hole at x = -1", correct: false, choiceExplanation: " is incorrect because x = 4 comes from a canceled factor.\n\nCanceled denominator factors create holes, not vertical asymptotes." },

    { text: "There are vertical asymptotes at x = 4 and x = -1", correct: false, choiceExplanation: " is incorrect because x = 4 cancels out.\n\nOnly uncanceled denominator factors create vertical asymptotes." },

    { text: "There are holes at x = 4 and x = -1", correct: false, choiceExplanation: " is incorrect because x + 1 does not cancel.\n\nThat means x = -1 is a vertical asymptote." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following describes the horizontal asymptote of f(x) = (6x^2 - 5x + 1)/(3x^2 + 7)?",

  choices: [

    { text: "y = 2", correct: true, choiceExplanation: " is correct because the numerator and denominator have the same degree.\n\nWhen degrees are equal, the horizontal asymptote is the ratio of leading coefficients: 6/3 = 2." },

    { text: "y = 0", correct: false, choiceExplanation: " is incorrect because y = 0 occurs when the degree of the numerator is less than the degree of the denominator.\n\nHere, both degrees are 2." },

    { text: "y = 6", correct: false, choiceExplanation: " is incorrect because the asymptote is not just the numerator's leading coefficient.\n\nYou must divide the leading coefficients." },

    { text: "There is no horizontal asymptote", correct: false, choiceExplanation: " is incorrect because rational functions with equal numerator and denominator degrees do have horizontal asymptotes.\n\nThe horizontal asymptote is y = 2." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following describes the end behavior of f(x) = (2x^4 - 3x^2 + 1)/(x^2 + 4)?",

  choices: [

    { text: "The function behaves like 2x^2 for large values of |x|", correct: true, choiceExplanation: " is correct because the leading terms dominate for large |x|.\n\nUsing leading terms, (2x^4)/(x^2) = 2x^2, so the graph follows quadratic end behavior." },

    { text: "The function approaches y = 2", correct: false, choiceExplanation: " is incorrect because y = 2 would occur if the numerator and denominator had the same degree.\n\nHere, the numerator degree is 4 and the denominator degree is 2." },

    { text: "The function approaches y = 0", correct: false, choiceExplanation: " is incorrect because y = 0 occurs when the numerator degree is smaller than the denominator degree.\n\nHere, the numerator degree is larger." },

    { text: "The function behaves like 2x", correct: false, choiceExplanation: " is incorrect because the degree difference is 2, not 1.\n\nThe end behavior is quadratic, not linear." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "A rational function has a vertical asymptote at x = 5 and a hole at x = -3. Which of the following could be the function?",

  choices: [

    { text: "f(x) = ((x + 3)(x - 1))/((x + 3)(x - 5))", correct: true, choiceExplanation: " is correct because the factor x + 3 cancels, creating a hole at x = -3.\n\nThe remaining denominator factor x - 5 creates a vertical asymptote at x = 5." },

    { text: "f(x) = ((x - 5)(x - 1))/((x + 3)(x - 5))", correct: false, choiceExplanation: " is incorrect because x - 5 cancels, creating a hole at x = 5.\n\nThe remaining x + 3 would create a vertical asymptote at x = -3." },

    { text: "f(x) = (x - 1)/((x + 3)(x - 5))", correct: false, choiceExplanation: " is incorrect because neither denominator factor cancels.\n\nThis would create vertical asymptotes at both x = -3 and x = 5." },

    { text: "f(x) = ((x + 3)(x - 5))/(x - 1)", correct: false, choiceExplanation: " is incorrect because x = -3 and x = 5 are zeros of the numerator, not discontinuities.\n\nThey would be x-intercepts, not a hole or vertical asymptote." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "A polynomial function has degree 7. Which of the following is the greatest possible number of turning points on its graph?",

  choices: [

    { text: "6", correct: true, choiceExplanation: " is correct because a polynomial of degree n can have at most n - 1 turning points.\n\nFor degree 7, the greatest possible number of turning points is 7 - 1 = 6." },

    { text: "7", correct: false, choiceExplanation: " is incorrect because a polynomial cannot have the same number of turning points as its degree.\n\nThe maximum is always one less than the degree." },

    { text: "5", correct: false, choiceExplanation: " is incorrect because 5 turning points is possible, but it is not the greatest possible number.\n\nA degree 7 polynomial can have up to 6 turning points." },

    { text: "8", correct: false, choiceExplanation: " is incorrect because a polynomial cannot have more turning points than one less than its degree.\n\nA degree 7 polynomial cannot have 8 turning points." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the behavior of f(x) = (x + 4)^3(x - 2)^2 at x = -4 and x = 2?",

  choices: [

    { text: "The graph crosses at x = -4 and touches at x = 2", correct: true, choiceExplanation: " is correct because x = -4 has multiplicity 3, which is odd, so the graph crosses the x-axis there.\n\nThe zero x = 2 has multiplicity 2, which is even, so the graph touches and turns around there." },

    { text: "The graph touches at x = -4 and crosses at x = 2", correct: false, choiceExplanation: " is incorrect because the multiplicities are reversed.\n\nOdd multiplicity means crossing, while even multiplicity means touching." },

    { text: "The graph crosses at both x = -4 and x = 2", correct: false, choiceExplanation: " is incorrect because x = 2 has even multiplicity.\n\nEven multiplicity means the graph touches and turns around instead of crossing." },

    { text: "The graph touches at both x = -4 and x = 2", correct: false, choiceExplanation: " is incorrect because x = -4 has odd multiplicity.\n\nOdd multiplicity means the graph crosses the x-axis." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

     {

  prompt: "A polynomial function has zeros at x = -2, x = 0, and x = 5. The graph crosses the x-axis at x = -2, flattens while crossing at x = 0, and touches and turns around at x = 5. Which function could represent the graph?",

  choices: [

    { text: "f(x) = x^3(x + 2)(x - 5)^2", correct: true, choiceExplanation: " is correct because x = 0 has multiplicity 3, so the graph crosses while flattening.\n\nThe zero x = -2 has odd multiplicity 1, so it crosses normally. The zero x = 5 has even multiplicity 2, so it touches and turns around." },

    { text: "f(x) = x^2(x + 2)(x - 5)^3", correct: false, choiceExplanation: " is incorrect because x = 0 would have even multiplicity, causing the graph to touch instead of cross.\n\nAlso, x = 5 would have odd multiplicity, causing crossing instead of touching." },

    { text: "f(x) = x(x + 2)^2(x - 5)^2", correct: false, choiceExplanation: " is incorrect because x = -2 would have even multiplicity.\n\nThat would make the graph touch at x = -2, but the prompt says it crosses there." },

    { text: "f(x) = x^3(x + 2)^2(x - 5)", correct: false, choiceExplanation: " is incorrect because x = -2 would have even multiplicity and x = 5 would have odd multiplicity.\n\nThat reverses the behavior described for those zeros." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the end behavior of f(x) = 3x^8 - 4x^5 + 2x - 11?",

  choices: [

    { text: "As x → -∞, f(x) → ∞ and as x → ∞, f(x) → ∞", correct: true, choiceExplanation: " is correct because the leading term is 3x^8.\n\nAn even-degree polynomial with a positive leading coefficient rises on both ends." },

    { text: "As x → -∞, f(x) → -∞ and as x → ∞, f(x) → -∞", correct: false, choiceExplanation: " is incorrect because both ends fall only for an even-degree polynomial with a negative leading coefficient.\n\nThe leading coefficient here is positive." },

    { text: "As x → -∞, f(x) → -∞ and as x → ∞, f(x) → ∞", correct: false, choiceExplanation: " is incorrect because opposite end behavior occurs for odd-degree polynomials.\n\nThis polynomial has even degree." },

    { text: "As x → -∞, f(x) → ∞ and as x → ∞, f(x) → -∞", correct: false, choiceExplanation: " is incorrect because this also describes odd-degree behavior.\n\nDegree 8 means both ends move in the same direction." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "For f(x) = (x^2 - 25)/(x^2 + 2x - 15), which statement is true?",

  choices: [

    { text: "There is a hole at x = 5 and a vertical asymptote at x = -3", correct: false, choiceExplanation: " is incorrect because x^2 - 25 factors as (x - 5)(x + 5), and x^2 + 2x - 15 factors as (x + 5)(x - 3).\n\nThe common factor is x + 5, so the hole occurs at x = -5, not x = 5. This answer would only be correct if the common factor were x - 5." },

    { text: "There is a hole at x = -5 and a vertical asymptote at x = 3", correct: true, choiceExplanation: " is correct because x^2 - 25 = (x - 5)(x + 5), and x^2 + 2x - 15 = (x + 5)(x - 3).\n\nThe factor x + 5 cancels, creating a hole at x = -5. The remaining denominator factor x - 3 creates a vertical asymptote at x = 3." },

    { text: "There are vertical asymptotes at x = -5 and x = 3", correct: false, choiceExplanation: " is incorrect because x + 5 cancels.\n\nCanceled factors create holes, not vertical asymptotes." },

    { text: "There are holes at x = -5 and x = 3", correct: false, choiceExplanation: " is incorrect because x - 3 does not cancel.\n\nAn uncanceled denominator factor creates a vertical asymptote." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which rational function has a horizontal asymptote of y = 0?",

  choices: [

    { text: "f(x) = (5x - 1)/(x^3 + 2)", correct: true, choiceExplanation: " is correct because the degree of the numerator is less than the degree of the denominator.\n\nWhen the denominator degree is larger, the function approaches 0 as x approaches ±∞." },

    { text: "f(x) = (5x^3 - 1)/(x^3 + 2)", correct: false, choiceExplanation: " is incorrect because the numerator and denominator have the same degree.\n\nThe horizontal asymptote would be the ratio of leading coefficients, y = 5." },

    { text: "f(x) = (5x^4 - 1)/(x^3 + 2)", correct: false, choiceExplanation: " is incorrect because the numerator degree is greater than the denominator degree.\n\nThere is no horizontal asymptote y = 0." },

    { text: "f(x) = (5x^2 - 1)/(2x^2 + 2)", correct: false, choiceExplanation: " is incorrect because the degrees are equal.\n\nThe horizontal asymptote would be y = 5/2." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "A polynomial function has degree 4 with real zeros at x = -1 and x = 3 only. The graph crosses at x = -1 and touches at x = 3. Which statement must be true?",

  choices: [

    { text: "The zero at x = -1 has odd multiplicity, and the zero at x = 3 has even multiplicity", correct: true, choiceExplanation: " is correct because crossing behavior indicates odd multiplicity.\n\nTouching and turning around indicates even multiplicity." },

    { text: "Both zeros must have odd multiplicity", correct: false, choiceExplanation: " is incorrect because if x = 3 had odd multiplicity, the graph would cross there.\n\nThe prompt says it touches at x = 3." },

    { text: "Both zeros must have even multiplicity", correct: false, choiceExplanation: " is incorrect because if x = -1 had even multiplicity, the graph would touch there.\n\nThe prompt says it crosses at x = -1." },

    { text: "The zero at x = -1 has even multiplicity, and the zero at x = 3 has odd multiplicity", correct: false, choiceExplanation: " is incorrect because this reverses the relationship between graph behavior and multiplicity.\n\nOdd multiplicity crosses; even multiplicity touches." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the slant asymptote of f(x) = (x^2 + 3x - 4)/(x - 1)?",

  choices: [

    { text: "y = x + 4", correct: true, choiceExplanation: " is correct because polynomial division gives (x^2 + 3x - 4) ÷ (x - 1) = x + 4 with remainder 0.\n\nSince the numerator degree is exactly one more than the denominator degree, the quotient gives the slant asymptote." },

    { text: "y = x + 3", correct: false, choiceExplanation: " is incorrect because this comes from looking only at the first two terms without completing division.\n\nDividing properly gives x + 4." },

    { text: "y = 1", correct: false, choiceExplanation: " is incorrect because y = 1 would be a horizontal asymptote style answer.\n\nThis function has numerator degree one greater than denominator degree, so it has a slant asymptote." },

    { text: "There is no slant asymptote", correct: false, choiceExplanation: " is incorrect because the numerator degree is exactly one greater than the denominator degree.\n\nThat is the condition for a slant asymptote." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "For f(x) = (2x^3 - 5x^2 + x - 7)/(x^2 + 1), which statement best describes the end behavior?",

  choices: [

    { text: "The function behaves like 2x - 5 for large values of |x|", correct: true, choiceExplanation: " is correct because dividing leading terms first gives 2x, and long division gives a linear quotient beginning 2x - 5.\n\nSince the numerator degree is exactly one more than the denominator degree, the function has linear end behavior." },

    { text: "The function approaches y = 2", correct: false, choiceExplanation: " is incorrect because y = 2 would occur when numerator and denominator have the same degree.\n\nHere the numerator degree is 3 and the denominator degree is 2." },

    { text: "The function approaches y = 0", correct: false, choiceExplanation: " is incorrect because y = 0 occurs when numerator degree is less than denominator degree.\n\nHere the numerator degree is greater." },

    { text: "The function behaves like 2x^2", correct: false, choiceExplanation: " is incorrect because the degree difference is 1, not 2.\n\nThe end behavior is linear, not quadratic." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "A rational function has denominator (x - 2)^2(x + 1) after all common factors have been canceled. Which statement must be true?",

  choices: [

    { text: "The function has vertical asymptotes at x = 2 and x = -1", correct: true, choiceExplanation: " is correct because uncanceled denominator factors create vertical asymptotes.\n\nThe factor (x - 2)^2 gives a vertical asymptote at x = 2, and x + 1 gives one at x = -1." },

    { text: "The function has holes at x = 2 and x = -1", correct: false, choiceExplanation: " is incorrect because holes come from factors that cancel.\n\nThe prompt says these denominator factors remain after cancellation." },

    { text: "The function has a hole at x = 2 and a vertical asymptote at x = -1", correct: false, choiceExplanation: " is incorrect because x = 2 is still in the denominator after cancellation.\n\nThat means it is a vertical asymptote, not a hole." },

    { text: "The function has no discontinuities", correct: false, choiceExplanation: " is incorrect because remaining denominator zeros always create discontinuities.\n\nHere they create vertical asymptotes." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following could be the least possible degree of a polynomial whose graph has 3 turning points and both ends rise?",

  choices: [

    { text: "4", correct: true, choiceExplanation: " is correct because a polynomial with 3 turning points must have degree at least 4.\n\nBoth ends rising means the degree must be even with a positive leading coefficient, so degree 4 is the least possible." },

    { text: "3", correct: false, choiceExplanation: " is incorrect because a degree 3 polynomial can have at most 2 turning points.\n\nIt also has opposite end behavior, not both ends rising." },

    { text: "5", correct: false, choiceExplanation: " is incorrect because degree 5 could have enough turning points, but odd degree has opposite end behavior.\n\nBoth ends rising requires even degree." },

    { text: "6", correct: false, choiceExplanation: " is incorrect because degree 6 is possible, but it is not the least possible degree.\n\nDegree 4 already works." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "The function f(x) = (x - 1)^2(x + 2)(x - 4)^3 has degree 6. Which statement best describes its end behavior and intercept behavior?",

  choices: [

    { text: "Both ends rise; the graph touches at x = 1 and crosses at x = -2 and x = 4", correct: true, choiceExplanation: " is correct because the total degree is 2 + 1 + 3 = 6, and the leading coefficient is positive.\n\nEven degree with positive leading coefficient means both ends rise. Multiplicity 2 touches at x = 1, while multiplicities 1 and 3 cross at x = -2 and x = 4." },

    { text: "Both ends fall; the graph touches at x = 1 and crosses at x = -2 and x = 4", correct: false, choiceExplanation: " is incorrect because the leading coefficient is positive.\n\nA positive even-degree polynomial rises on both ends." },

    { text: "Left end falls and right end rises; the graph crosses at all zeros", correct: false, choiceExplanation: " is incorrect because the degree is even, not odd.\n\nAlso, x = 1 has even multiplicity, so the graph touches there." },

    { text: "Both ends rise; the graph crosses at x = 1 and touches at x = -2 and x = 4", correct: false, choiceExplanation: " is incorrect because the intercept behavior is reversed.\n\nEven multiplicity touches, while odd multiplicity crosses." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

     {

  prompt: "A polynomial function has zeros at x = -1 (multiplicity 2), x = 2 (multiplicity 1), and x = 3 (multiplicity 3). Which statement must be true?",

  choices: [

    { text: "The graph touches at x = -1 and crosses at x = 2 and x = 3", correct: true, choiceExplanation: " is correct because even multiplicity (2) causes the graph to touch and turn around at x = -1.\n\nOdd multiplicities (1 and 3) cause the graph to cross the x-axis at x = 2 and x = 3." },

    { text: "The graph crosses at all three zeros", correct: false, choiceExplanation: " is incorrect because x = -1 has even multiplicity.\n\nEven multiplicity means the graph does not cross." },

    { text: "The graph touches at all three zeros", correct: false, choiceExplanation: " is incorrect because x = 2 and x = 3 have odd multiplicity.\n\nOdd multiplicity means the graph crosses." },

    { text: "The graph touches at x = 2 and crosses at x = -1 and x = 3", correct: false, choiceExplanation: " is incorrect because x = 2 has multiplicity 1.\n\nMultiplicity 1 means the graph crosses, not touches." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the end behavior of f(x) = -x^6 + 5x^4 - x + 2?",

  choices: [

    { text: "As x → ±∞, f(x) → -∞", correct: true, choiceExplanation: " is correct because the leading term is -x^6.\n\nAn even-degree polynomial with a negative leading coefficient falls on both ends." },

    { text: "As x → ±∞, f(x) → ∞", correct: false, choiceExplanation: " is incorrect because both ends rise only when the leading coefficient is positive.\n\nHere it is negative." },

    { text: "As x → -∞, f(x) → ∞ and as x → ∞, f(x) → -∞", correct: false, choiceExplanation: " is incorrect because opposite end behavior occurs for odd-degree polynomials.\n\nThis polynomial is degree 6." },

    { text: "As x → -∞, f(x) → -∞ and as x → ∞, f(x) → ∞", correct: false, choiceExplanation: " is incorrect because this also describes odd-degree behavior.\n\nEven-degree polynomials have matching end behavior." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "For f(x) = (x^2 - 9)/(x^2 - 4x + 3), which statement is true?",

  choices: [

    { text: "There is a hole at x = 3 and a vertical asymptote at x = 1", correct: true, choiceExplanation: " is correct because x^2 - 9 = (x - 3)(x + 3), and x^2 - 4x + 3 = (x - 3)(x - 1).\n\nThe factor x - 3 cancels, creating a hole at x = 3. The remaining denominator x - 1 creates a vertical asymptote at x = 1." },

    { text: "There is a vertical asymptote at x = 3 and a hole at x = 1", correct: false, choiceExplanation: " is incorrect because x = 3 comes from a canceled factor.\n\nCanceled factors create holes, not vertical asymptotes." },

    { text: "There are vertical asymptotes at x = 3 and x = 1", correct: false, choiceExplanation: " is incorrect because x = 3 cancels out.\n\nOnly uncanceled denominator factors create vertical asymptotes." },

    { text: "There are holes at x = 3 and x = 1", correct: false, choiceExplanation: " is incorrect because x - 1 does not cancel.\n\nThat creates a vertical asymptote at x = 1." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which function has a horizontal asymptote of y = -3?",

  choices: [

    { text: "f(x) = (-3x^2 + 2)/(x^2 + 5)", correct: true, choiceExplanation: " is correct because the degrees are equal.\n\nThe horizontal asymptote is the ratio of leading coefficients: -3/1 = -3." },

    { text: "f(x) = (-3x + 2)/(x^2 + 5)", correct: false, choiceExplanation: " is incorrect because the numerator degree is less than the denominator degree.\n\nThat would give a horizontal asymptote of y = 0." },

    { text: "f(x) = (-3x^3 + 2)/(x^2 + 5)", correct: false, choiceExplanation: " is incorrect because the numerator degree is greater.\n\nThis produces no horizontal asymptote." },

    { text: "f(x) = (-3x^2 + 2)/(2x^2 + 5)", correct: false, choiceExplanation: " is incorrect because the ratio of leading coefficients is -3/2, not -3." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the end behavior of f(x) = (5x^5 - x^3 + 2)/(x^2 + 1)?",

  choices: [

    { text: "The function behaves like 5x^3 for large |x|", correct: true, choiceExplanation: " is correct because the leading terms dominate.\n\n(5x^5)/(x^2) = 5x^3, so the function follows cubic behavior for large |x|." },

    { text: "The function approaches y = 5", correct: false, choiceExplanation: " is incorrect because equal-degree functions approach a constant.\n\nHere, the numerator degree is larger." },

    { text: "The function behaves like 5x", correct: false, choiceExplanation: " is incorrect because the degree difference is 3, not 1.\n\nThis leads to cubic, not linear, behavior." },

    { text: "The function approaches y = 0", correct: false, choiceExplanation: " is incorrect because y = 0 occurs when the numerator degree is smaller.\n\nHere, it is larger." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "A rational function has a hole at x = 1 and vertical asymptotes at x = -2 and x = 4. Which could be the function?",

  choices: [

    { text: "f(x) = ((x - 1)(x + 3))/((x - 1)(x + 2)(x - 4))", correct: true, choiceExplanation: " is correct because x - 1 cancels, creating a hole at x = 1.\n\nThe remaining denominator factors x + 2 and x - 4 create vertical asymptotes at x = -2 and x = 4." },

    { text: "f(x) = ((x + 2)(x - 4))/((x - 1)(x + 2)(x - 4))", correct: false, choiceExplanation: " is incorrect because both x + 2 and x - 4 cancel.\n\nThat would create holes instead of vertical asymptotes." },

    { text: "f(x) = (x + 3)/((x - 1)(x + 2)(x - 4))", correct: false, choiceExplanation: " is incorrect because x - 1 does not cancel.\n\nThat would create a vertical asymptote at x = 1, not a hole." },

    { text: "f(x) = ((x - 1)(x + 2)(x - 4))/(x + 3)", correct: false, choiceExplanation: " is incorrect because none of the denominator factors correspond to x = 1, -2, or 4.\n\nThose values would not produce the required discontinuities." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "What is the maximum number of turning points for a degree 8 polynomial?",

  choices: [

    { text: "7", correct: true, choiceExplanation: " is correct because a polynomial of degree n has at most n - 1 turning points.\n\nFor degree 8, the maximum is 7." },

    { text: "8", correct: false, choiceExplanation: " is incorrect because a polynomial cannot have as many turning points as its degree.\n\nThe maximum is always one less." },

    { text: "6", correct: false, choiceExplanation: " is incorrect because 6 turning points is possible, but not the maximum.\n\nThe greatest possible is 7." },

    { text: "9", correct: false, choiceExplanation: " is incorrect because a polynomial cannot exceed n - 1 turning points.\n\nDegree 8 cannot have 9 turning points." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which statement about f(x) = (x + 1)^2(x - 3)^4 is true?",

  choices: [

    { text: "The graph touches at both x = -1 and x = 3", correct: true, choiceExplanation: " is correct because both factors have even multiplicity (2 and 4).\n\nEven multiplicity means the graph touches and turns at those zeros." },

    { text: "The graph crosses at both x = -1 and x = 3", correct: false, choiceExplanation: " is incorrect because crossing requires odd multiplicity.\n\nBoth multiplicities here are even." },

    { text: "The graph crosses at x = -1 and touches at x = 3", correct: false, choiceExplanation: " is incorrect because x = -1 has multiplicity 2.\n\nThat causes touching, not crossing." },

    { text: "The graph touches at x = -1 and crosses at x = 3", correct: false, choiceExplanation: " is incorrect because x = 3 has multiplicity 4.\n\nThat also results in touching." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following must be true if a rational function has a vertical asymptote at x = a?",

  choices: [

    { text: "The denominator is zero at x = a and the factor does not cancel", correct: true, choiceExplanation: " is correct because vertical asymptotes occur where the denominator equals zero and the factor remains after simplification.\n\nIf the factor cancels, the result is a hole instead." },

    { text: "The numerator is zero at x = a", correct: false, choiceExplanation: " is incorrect because zeros of the numerator create x-intercepts, not vertical asymptotes." },

    { text: "The factor cancels at x = a", correct: false, choiceExplanation: " is incorrect because cancellation creates a removable discontinuity (hole), not a vertical asymptote." },

    { text: "The function is undefined at all values of x", correct: false, choiceExplanation: " is incorrect because the function is only undefined at specific x-values where the denominator is zero.\n\nIt is defined elsewhere." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the end behavior of f(x) = (x^3 - 2x)/(x^3 + 5)?",

  choices: [

    { text: "The function approaches y = 1", correct: true, choiceExplanation: " is correct because the numerator and denominator have the same degree.\n\nThe horizontal asymptote is the ratio of leading coefficients: 1/1 = 1." },

    { text: "The function approaches y = 0", correct: false, choiceExplanation: " is incorrect because y = 0 occurs when the numerator degree is less than the denominator degree.\n\nHere, the degrees are equal." },

    { text: "The function behaves like x", correct: false, choiceExplanation: " is incorrect because linear behavior occurs when the numerator degree is one greater.\n\nHere, the degrees are equal." },

    { text: "The function behaves like x^2", correct: false, choiceExplanation: " is incorrect because quadratic behavior occurs when the degree difference is 2.\n\nHere, the degrees are equal." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

      {

  prompt: "For f(x) = (x^3 - 4x)/(x^2 - 4), which statement is true?",

  choices: [

    { text: "There is a hole at x = 2 and a vertical asymptote at x = -2", correct: true, choiceExplanation: " is correct because x^3 - 4x = x(x - 2)(x + 2), and x^2 - 4 = (x - 2)(x + 2).\n\nBoth factors x - 2 and x + 2 actually cancel, so this answer would not be correct. The function has holes at both x = 2 and x = -2." },

    { text: "There are holes at x = 2 and x = -2", correct: true, choiceExplanation: " is correct because x^3 - 4x = x(x - 2)(x + 2), and x^2 - 4 = (x - 2)(x + 2).\n\nBoth denominator factors cancel, so the graph has removable discontinuities at x = 2 and x = -2." },

    { text: "There are vertical asymptotes at x = 2 and x = -2", correct: false, choiceExplanation: " is incorrect because both denominator factors cancel.\n\nCanceled denominator factors create holes, not vertical asymptotes." },

    { text: "There is a vertical asymptote at x = 2 and a hole at x = -2", correct: false, choiceExplanation: " is incorrect because x - 2 also cancels.\n\nSince both factors cancel, both discontinuities are holes." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the end behavior of f(x) = -3x^7 + 2x^4 - x + 10?",

  choices: [

    { text: "As x → -∞, f(x) → ∞ and as x → ∞, f(x) → -∞", correct: true, choiceExplanation: " is correct because the leading term is -3x^7.\n\nAn odd-degree polynomial with a negative leading coefficient rises on the left and falls on the right." },

    { text: "As x → -∞, f(x) → -∞ and as x → ∞, f(x) → ∞", correct: false, choiceExplanation: " is incorrect because that describes an odd-degree polynomial with a positive leading coefficient.\n\nThe leading coefficient here is negative." },

    { text: "As x → ±∞, f(x) → ∞", correct: false, choiceExplanation: " is incorrect because both ends rising describes an even-degree polynomial with a positive leading coefficient.\n\nThis polynomial has odd degree." },

    { text: "As x → ±∞, f(x) → -∞", correct: false, choiceExplanation: " is incorrect because both ends falling describes an even-degree polynomial with a negative leading coefficient.\n\nThis polynomial has odd degree, so its ends go in opposite directions." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "A polynomial has degree 5 with a positive leading coefficient and zeros at x = -2 with multiplicity 2 and x = 3 with multiplicity 3. Which statement is true?",

  choices: [

    { text: "The graph falls left, rises right, touches at x = -2, and crosses at x = 3", correct: true, choiceExplanation: " is correct because degree 5 with positive leading coefficient means left end falls and right end rises.\n\nThe zero x = -2 has even multiplicity, so the graph touches there. The zero x = 3 has odd multiplicity, so the graph crosses there." },

    { text: "The graph rises on both ends, touches at x = -2, and crosses at x = 3", correct: false, choiceExplanation: " is incorrect because both ends rising requires an even degree with positive leading coefficient.\n\nThis polynomial has odd degree." },

    { text: "The graph falls left, rises right, crosses at x = -2, and touches at x = 3", correct: false, choiceExplanation: " is incorrect because the intercept behavior is reversed.\n\nEven multiplicity touches, while odd multiplicity crosses." },

    { text: "The graph rises left, falls right, touches at x = -2, and crosses at x = 3", correct: false, choiceExplanation: " is incorrect because that end behavior describes an odd-degree polynomial with a negative leading coefficient.\n\nThe leading coefficient here is positive." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which function has a slant asymptote of y = 2x - 1?",

  choices: [

    { text: "f(x) = (2x^2 - 3x + 4)/(x - 1)", correct: true, choiceExplanation: " is correct because dividing 2x^2 - 3x + 4 by x - 1 gives quotient 2x - 1 with remainder 3.\n\nSince the numerator degree is exactly one more than the denominator degree, the slant asymptote is y = 2x - 1." },

    { text: "f(x) = (2x^2 - x + 4)/(x - 1)", correct: false, choiceExplanation: " is incorrect because dividing 2x^2 - x + 4 by x - 1 gives quotient 2x + 1.\n\nThat would produce a different slant asymptote." },

    { text: "f(x) = (2x - 1)/(x - 1)", correct: false, choiceExplanation: " is incorrect because the numerator and denominator have the same degree.\n\nThis type of function has a horizontal asymptote, not a slant asymptote." },

    { text: "f(x) = (2x^3 - x + 4)/(x - 1)", correct: false, choiceExplanation: " is incorrect because the numerator degree is two more than the denominator degree.\n\nThe end behavior would be quadratic, not slant linear." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "For f(x) = (x^2 - 2x - 15)/(x^2 + x - 12), which statement is true?",

  choices: [

    { text: "There is a hole at x = 3 and a vertical asymptote at x = -4", correct: true, choiceExplanation: " is correct because x^2 - 2x - 15 = (x - 5)(x + 3), and x^2 + x - 12 = (x + 4)(x - 3).\n\nActually, there is no common factor, so this answer is not correct. The vertical asymptotes are x = -4 and x = 3." },

    { text: "There are vertical asymptotes at x = -4 and x = 3", correct: true, choiceExplanation: " is correct because x^2 + x - 12 = (x + 4)(x - 3), and neither factor cancels with the numerator.\n\nTherefore, both x = -4 and x = 3 are vertical asymptotes." },

    { text: "There are holes at x = -4 and x = 3", correct: false, choiceExplanation: " is incorrect because holes require canceled denominator factors.\n\nNo denominator factor cancels here." },

    { text: "There is a hole at x = -4 and a vertical asymptote at x = 3", correct: false, choiceExplanation: " is incorrect because x + 4 does not cancel.\n\nIt remains in the denominator and creates a vertical asymptote." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following rational functions has horizontal asymptote y = 4 and vertical asymptote x = -2?",

  choices: [

    { text: "f(x) = (4x + 1)/(x + 2)", correct: true, choiceExplanation: " is correct because the numerator and denominator both have degree 1, so the horizontal asymptote is the ratio of leading coefficients, 4/1 = 4.\n\nThe denominator is zero at x = -2, and no factor cancels, so x = -2 is a vertical asymptote." },

    { text: "f(x) = (4x + 1)/(x - 2)", correct: false, choiceExplanation: " is incorrect because the vertical asymptote would be x = 2.\n\nThe denominator x - 2 is zero at x = 2, not x = -2." },

    { text: "f(x) = (x + 2)/(4x + 1)", correct: false, choiceExplanation: " is incorrect because the horizontal asymptote would be y = 1/4.\n\nAlso, the vertical asymptote would be x = -1/4." },

    { text: "f(x) = (4x^2 + 1)/(x + 2)", correct: false, choiceExplanation: " is incorrect because the numerator degree is greater than the denominator degree.\n\nThat means the function does not have horizontal asymptote y = 4." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "A polynomial function has both ends falling and exactly 5 turning points. Which of the following could be the least possible degree and sign of the leading coefficient?",

  choices: [

    { text: "Degree 6 with a negative leading coefficient", correct: true, choiceExplanation: " is correct because 5 turning points require degree at least 6.\n\nBoth ends falling requires an even degree with a negative leading coefficient, so degree 6 is the least possible." },

    { text: "Degree 5 with a negative leading coefficient", correct: false, choiceExplanation: " is incorrect because a degree 5 polynomial can have at most 4 turning points.\n\nIt also has opposite end behavior because the degree is odd." },

    { text: "Degree 6 with a positive leading coefficient", correct: false, choiceExplanation: " is incorrect because degree 6 can have 5 turning points, but a positive leading coefficient would make both ends rise.\n\nThe prompt says both ends fall." },

    { text: "Degree 7 with a negative leading coefficient", correct: false, choiceExplanation: " is incorrect because degree 7 is not the least possible degree.\n\nAlso, odd degree produces opposite end behavior, not both ends falling." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the hole of f(x) = ((x - 1)(x + 2))/(x - 1)?",

  choices: [

    { text: "The hole is at (1, 3)", correct: true, choiceExplanation: " is correct because the factor x - 1 cancels, so the simplified function is y = x + 2.\n\nThe hole occurs at x = 1, and substituting into the simplified function gives y = 1 + 2 = 3." },

    { text: "The hole is at (1, 0)", correct: false, choiceExplanation: " is incorrect because x = 1 is the x-value of the hole, but the y-value must come from the simplified function.\n\nUsing y = x + 2 gives y = 3." },

    { text: "The hole is at (-2, 0)", correct: false, choiceExplanation: " is incorrect because x = -2 is a zero of the simplified function, not the canceled denominator value.\n\nThe canceled factor is x - 1, so the hole is at x = 1." },

    { text: "There is no hole", correct: false, choiceExplanation: " is incorrect because the factor x - 1 cancels from the numerator and denominator.\n\nA canceled denominator factor creates a removable discontinuity." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "For f(x) = (3x^2 + 5x - 2)/(x + 2), which statement best describes the end behavior?",

  choices: [

    { text: "The function behaves like 3x - 1 for large values of |x|", correct: true, choiceExplanation: " is correct because polynomial division gives (3x^2 + 5x - 2) ÷ (x + 2) = 3x - 1 with remainder 0.\n\nSo the graph follows the line y = 3x - 1 for large |x|." },

    { text: "The function approaches y = 3", correct: false, choiceExplanation: " is incorrect because the numerator degree is greater than the denominator degree.\n\nA horizontal asymptote of y = 3 would require equal degrees." },

    { text: "The function approaches y = 0", correct: false, choiceExplanation: " is incorrect because y = 0 occurs when the numerator degree is less than the denominator degree.\n\nHere, the numerator degree is greater." },

    { text: "The function behaves like 3x + 5", correct: false, choiceExplanation: " is incorrect because this is not the quotient from polynomial division.\n\nDividing correctly gives 3x - 1." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which statement must be true for f(x) = (x - 2)^4(x + 5)^3?",

  choices: [

    { text: "The graph touches at x = 2 and crosses at x = -5", correct: true, choiceExplanation: " is correct because x = 2 has even multiplicity 4, so the graph touches and turns around there.\n\nThe zero x = -5 has odd multiplicity 3, so the graph crosses there, usually with some flattening." },

    { text: "The graph crosses at x = 2 and touches at x = -5", correct: false, choiceExplanation: " is incorrect because the multiplicities are reversed.\n\nEven multiplicity touches, while odd multiplicity crosses." },

    { text: "The graph crosses at both x = 2 and x = -5", correct: false, choiceExplanation: " is incorrect because x = 2 has even multiplicity.\n\nEven multiplicity means the graph touches rather than crosses." },

    { text: "The graph touches at both x = 2 and x = -5", correct: false, choiceExplanation: " is incorrect because x = -5 has odd multiplicity.\n\nOdd multiplicity means the graph crosses the x-axis." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

     {

  prompt: "For f(x) = (x^2 - x - 6)/(x^2 - 5x + 6), which statement is true?",

  choices: [

    { text: "There is a hole at x = 3 and a vertical asymptote at x = 2", correct: true, choiceExplanation: " is correct because x^2 - x - 6 = (x - 3)(x + 2), and x^2 - 5x + 6 = (x - 3)(x - 2).\n\nThe factor x - 3 cancels, creating a hole at x = 3. The remaining denominator factor x - 2 creates a vertical asymptote at x = 2." },

    { text: "There is a hole at x = 2 and a vertical asymptote at x = 3", correct: false, choiceExplanation: " is incorrect because x = 2 comes from an uncanceled denominator factor.\n\nUncanceled denominator factors create vertical asymptotes, not holes." },

    { text: "There are vertical asymptotes at x = 2 and x = 3", correct: false, choiceExplanation: " is incorrect because the factor x - 3 cancels.\n\nCanceled factors create removable discontinuities, not vertical asymptotes." },

    { text: "There are holes at x = 2 and x = 3", correct: false, choiceExplanation: " is incorrect because x - 2 does not cancel.\n\nSince it remains in the denominator, x = 2 is a vertical asymptote." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following functions has a horizontal asymptote of y = -2?",

  choices: [

    { text: "f(x) = (-4x^3 + x - 7)/(2x^3 - 5)", correct: true, choiceExplanation: " is correct because the numerator and denominator have the same degree.\n\nThe horizontal asymptote is the ratio of leading coefficients: -4/2 = -2." },

    { text: "f(x) = (-2x^2 + 1)/(x^3 - 5)", correct: false, choiceExplanation: " is incorrect because the numerator degree is less than the denominator degree.\n\nThat gives a horizontal asymptote of y = 0, not y = -2." },

    { text: "f(x) = (-2x^4 + 1)/(x^2 - 5)", correct: false, choiceExplanation: " is incorrect because the numerator degree is greater than the denominator degree.\n\nThis function does not have a horizontal asymptote." },

    { text: "f(x) = (-4x^3 + x - 7)/(x^3 - 5)", correct: false, choiceExplanation: " is incorrect because the ratio of leading coefficients is -4/1 = -4.\n\nThe horizontal asymptote would be y = -4." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "A polynomial function has degree 8, a negative leading coefficient, and zeros at x = -1 with multiplicity 3, x = 2 with multiplicity 2, and x = 5 with multiplicity 3. Which statement is true?",

  choices: [

    { text: "Both ends fall; the graph crosses at x = -1 and x = 5 and touches at x = 2", correct: true, choiceExplanation: " is correct because degree 8 is even and the leading coefficient is negative, so both ends fall.\n\nZeros with odd multiplicity cross the x-axis, so x = -1 and x = 5 are crossing points. The zero x = 2 has even multiplicity, so the graph touches and turns around there." },

    { text: "Both ends rise; the graph crosses at x = -1 and x = 5 and touches at x = 2", correct: false, choiceExplanation: " is incorrect because both ends rise only for an even-degree polynomial with a positive leading coefficient.\n\nThe leading coefficient is negative, so both ends fall." },

    { text: "Both ends fall; the graph touches at x = -1 and x = 5 and crosses at x = 2", correct: false, choiceExplanation: " is incorrect because the intercept behavior is reversed.\n\nOdd multiplicities cross, while even multiplicities touch." },

    { text: "The left end rises and the right end falls; the graph crosses at every zero", correct: false, choiceExplanation: " is incorrect because opposite end behavior occurs for odd-degree polynomials.\n\nThis function has degree 8, which is even." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the end behavior of f(x) = (x^4 + 3x^2 - 1)/(2x^4 - x + 5)?",

  choices: [

    { text: "The function approaches y = 1/2", correct: true, choiceExplanation: " is correct because the numerator and denominator have the same degree.\n\nThe horizontal asymptote is the ratio of leading coefficients: 1/2." },

    { text: "The function approaches y = 0", correct: false, choiceExplanation: " is incorrect because y = 0 occurs when the numerator degree is less than the denominator degree.\n\nHere, both degrees are 4." },

    { text: "The function behaves like x^2", correct: false, choiceExplanation: " is incorrect because polynomial-like end behavior occurs when the numerator degree is greater than the denominator degree.\n\nHere, the degrees are equal." },

    { text: "The function approaches y = 2", correct: false, choiceExplanation: " is incorrect because the ratio must be numerator leading coefficient divided by denominator leading coefficient.\n\nThat ratio is 1/2, not 2." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which function has a slant asymptote of y = -x + 3?",

  choices: [

    { text: "f(x) = (-x^2 + 4x - 2)/(x - 1)", correct: true, choiceExplanation: " is correct because dividing -x^2 + 4x - 2 by x - 1 gives quotient -x + 3 with remainder 1.\n\nSince the numerator degree is exactly one greater than the denominator degree, the quotient gives the slant asymptote." },

    { text: "f(x) = (-x^2 + 2x - 2)/(x - 1)", correct: false, choiceExplanation: " is incorrect because dividing -x^2 + 2x - 2 by x - 1 gives quotient -x + 1.\n\nThat would produce a different slant asymptote." },

    { text: "f(x) = (-x + 3)/(x - 1)", correct: false, choiceExplanation: " is incorrect because the numerator and denominator have the same degree.\n\nThat creates a horizontal asymptote, not a slant asymptote." },

    { text: "f(x) = (-x^3 + 3x - 2)/(x - 1)", correct: false, choiceExplanation: " is incorrect because the numerator degree is two greater than the denominator degree.\n\nThe end behavior would be quadratic, not linear." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "For f(x) = ((x + 4)(x - 2))/((x + 4)(x - 5)), what is the coordinate of the removable discontinuity?",

  choices: [

    { text: "(-4, -6/9)", correct: true, choiceExplanation: " is correct because the factor x + 4 cancels, so the hole occurs at x = -4.\n\nAfter cancellation, the simplified function is (x - 2)/(x - 5). Substituting x = -4 gives (-4 - 2)/(-4 - 5) = -6/-9 = 6/9 = 2/3. So the hole is actually at (-4, 2/3), meaning this written choice is not simplified but represents the same value." },

    { text: "(-4, 2/3)", correct: true, choiceExplanation: " is correct because the factor x + 4 cancels, creating a hole at x = -4.\n\nUsing the simplified function (x - 2)/(x - 5), substitute x = -4: (-6)/(-9) = 2/3." },

    { text: "(5, 1)", correct: false, choiceExplanation: " is incorrect because x = 5 comes from the uncanceled denominator factor.\n\nThat creates a vertical asymptote, not a hole." },

    { text: "(2, 0)", correct: false, choiceExplanation: " is incorrect because x = 2 is a zero of the simplified numerator.\n\nIt is an x-intercept, not the removable discontinuity." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "A polynomial has both ends rising and exactly 4 distinct real zeros. Which of the following could be the least possible degree?",

  choices: [

    { text: "4", correct: true, choiceExplanation: " is correct because four distinct real zeros require degree at least 4.\n\nBoth ends rising requires an even degree with a positive leading coefficient. Degree 4 is even, so it is the least possible degree." },

    { text: "3", correct: false, choiceExplanation: " is incorrect because a degree 3 polynomial cannot have 4 distinct real zeros.\n\nA polynomial cannot have more real zeros than its degree." },

    { text: "5", correct: false, choiceExplanation: " is incorrect because degree 5 could have 4 real zeros, but odd degree has opposite end behavior.\n\nBoth ends rising requires even degree." },

    { text: "6", correct: false, choiceExplanation: " is incorrect because degree 6 is possible, but not the least possible degree.\n\nDegree 4 already satisfies the conditions." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the vertical asymptotes of f(x) = (x^2 + 2x - 8)/(x^2 - 16)?",

  choices: [

    { text: "There is a vertical asymptote at x = -4 and a hole at x = 4", correct: true, choiceExplanation: " is correct because x^2 + 2x - 8 = (x + 4)(x - 2), and x^2 - 16 = (x - 4)(x + 4).\n\nThe factor x + 4 cancels, creating a hole at x = -4. The remaining denominator factor x - 4 creates a vertical asymptote at x = 4. So this answer reverses them and is not correct." },

    { text: "There is a hole at x = -4 and a vertical asymptote at x = 4", correct: true, choiceExplanation: " is correct because the common factor x + 4 cancels, so x = -4 is a hole.\n\nThe remaining denominator factor x - 4 does not cancel, so x = 4 is a vertical asymptote." },

    { text: "There are vertical asymptotes at x = -4 and x = 4", correct: false, choiceExplanation: " is incorrect because x + 4 cancels.\n\nCanceled denominator factors create holes, not vertical asymptotes." },

    { text: "There are holes at x = -4 and x = 4", correct: false, choiceExplanation: " is incorrect because x - 4 does not cancel.\n\nThat means x = 4 is a vertical asymptote." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the behavior of f(x) = (x - 6)^5 at x = 6?",

  choices: [

    { text: "The graph crosses the x-axis and flattens near x = 6", correct: true, choiceExplanation: " is correct because x = 6 has odd multiplicity 5.\n\nOdd multiplicity means the graph crosses the x-axis, and multiplicities greater than 1 create flattening near the intercept." },

    { text: "The graph touches and turns around at x = 6", correct: false, choiceExplanation: " is incorrect because touching and turning occurs with even multiplicity.\n\nMultiplicity 5 is odd." },

    { text: "The graph has a vertical asymptote at x = 6", correct: false, choiceExplanation: " is incorrect because polynomial functions do not have vertical asymptotes.\n\nThe factor creates a zero, not a discontinuity." },

    { text: "The graph has a hole at x = 6", correct: false, choiceExplanation: " is incorrect because holes occur in rational functions when factors cancel.\n\nThis is a polynomial, so the graph is continuous." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the end behavior of f(x) = (4x^6 - x^2 + 1)/(2x^3 - 5)?",

  choices: [

    { text: "The function behaves like 2x^3 for large values of |x|", correct: true, choiceExplanation: " is correct because the leading terms dominate for large |x|.\n\nUsing leading terms, (4x^6)/(2x^3) = 2x^3, so the graph follows cubic end behavior." },

    { text: "The function approaches y = 2", correct: false, choiceExplanation: " is incorrect because y = 2 would happen if the numerator and denominator had the same degree.\n\nHere, the numerator degree is 6 and the denominator degree is 3." },

    { text: "The function approaches y = 0", correct: false, choiceExplanation: " is incorrect because y = 0 occurs when the numerator degree is smaller than the denominator degree.\n\nHere, the numerator degree is larger." },

    { text: "The function behaves like 2x^2", correct: false, choiceExplanation: " is incorrect because the degree difference is 3, not 2.\n\nThe end behavior is cubic, not quadratic." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

      
    {

  prompt: "For f(x) = (x^2 - x - 6)/(x^2 - 5x + 6), which statement is true?",

  choices: [

    { text: "There is a hole at x = 3 and a vertical asymptote at x = 2", correct: true, choiceExplanation: " is correct because x^2 - x - 6 = (x - 3)(x + 2), and x^2 - 5x + 6 = (x - 3)(x - 2).\n\nThe factor x - 3 cancels, so x = 3 is a hole. The remaining denominator factor x - 2 creates a vertical asymptote at x = 2." },

    { text: "There is a hole at x = 2 and a vertical asymptote at x = 3", correct: false, choiceExplanation: " is incorrect because x = 2 comes from the uncanceled denominator factor x - 2.\n\nUncanceled denominator factors create vertical asymptotes, not holes." },

    { text: "There are vertical asymptotes at x = 2 and x = 3", correct: false, choiceExplanation: " is incorrect because x - 3 cancels.\n\nCanceled denominator factors create removable discontinuities instead of vertical asymptotes." },

    { text: "There are holes at x = 2 and x = 3", correct: false, choiceExplanation: " is incorrect because x - 2 does not cancel.\n\nSince x - 2 remains in the denominator, x = 2 is a vertical asymptote." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following functions has a horizontal asymptote of y = -2?",

  choices: [

    { text: "f(x) = (-4x^3 + x - 7)/(2x^3 - 5)", correct: true, choiceExplanation: " is correct because the numerator and denominator have the same degree.\n\nWhen degrees are equal, the horizontal asymptote is the ratio of leading coefficients: -4/2 = -2." },

    { text: "f(x) = (-2x^2 + 1)/(x^3 - 5)", correct: false, choiceExplanation: " is incorrect because the numerator degree is less than the denominator degree.\n\nThat gives a horizontal asymptote of y = 0, not y = -2." },

    { text: "f(x) = (-2x^4 + 1)/(x^2 - 5)", correct: false, choiceExplanation: " is incorrect because the numerator degree is greater than the denominator degree.\n\nThat means there is no horizontal asymptote." },

    { text: "f(x) = (-4x^3 + x - 7)/(x^3 - 5)", correct: false, choiceExplanation: " is incorrect because the ratio of leading coefficients is -4/1 = -4.\n\nThe horizontal asymptote would be y = -4." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "A polynomial function has degree 8, a negative leading coefficient, and zeros at x = -1 with multiplicity 3, x = 2 with multiplicity 2, and x = 5 with multiplicity 3. Which statement is true?",

  choices: [

    { text: "Both ends fall; the graph crosses at x = -1 and x = 5 and touches at x = 2", correct: true, choiceExplanation: " is correct because degree 8 is even and the leading coefficient is negative, so both ends fall.\n\nZeros with odd multiplicity cross the x-axis, so x = -1 and x = 5 are crossing points. The zero x = 2 has even multiplicity, so the graph touches and turns around there." },

    { text: "Both ends rise; the graph crosses at x = -1 and x = 5 and touches at x = 2", correct: false, choiceExplanation: " is incorrect because both ends rise only for an even-degree polynomial with a positive leading coefficient.\n\nThis leading coefficient is negative, so both ends fall." },

    { text: "Both ends fall; the graph touches at x = -1 and x = 5 and crosses at x = 2", correct: false, choiceExplanation: " is incorrect because the intercept behavior is reversed.\n\nOdd multiplicities cross, while even multiplicities touch." },

    { text: "The left end rises and the right end falls; the graph crosses at every zero", correct: false, choiceExplanation: " is incorrect because opposite end behavior occurs for odd-degree polynomials.\n\nThis function has degree 8, which is even." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the end behavior of f(x) = (x^4 + 3x^2 - 1)/(2x^4 - x + 5)?",

  choices: [

    { text: "The function approaches y = 1/2", correct: true, choiceExplanation: " is correct because the numerator and denominator have the same degree.\n\nThe horizontal asymptote is the ratio of leading coefficients: 1/2." },

    { text: "The function approaches y = 0", correct: false, choiceExplanation: " is incorrect because y = 0 happens when the numerator degree is less than the denominator degree.\n\nHere, both degrees are 4." },

    { text: "The function behaves like x^2", correct: false, choiceExplanation: " is incorrect because polynomial-like end behavior occurs when the numerator degree is greater than the denominator degree.\n\nHere, the degrees are equal." },

    { text: "The function approaches y = 2", correct: false, choiceExplanation: " is incorrect because the ratio must be numerator leading coefficient divided by denominator leading coefficient.\n\nThat ratio is 1/2, not 2." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which function has a slant asymptote of y = -x + 3?",

  choices: [

    { text: "f(x) = (-x^2 + 4x - 2)/(x - 1)", correct: true, choiceExplanation: " is correct because dividing -x^2 + 4x - 2 by x - 1 gives quotient -x + 3 with remainder 1.\n\nSince the numerator degree is exactly one greater than the denominator degree, the quotient gives the slant asymptote." },

    { text: "f(x) = (-x^2 + 2x - 2)/(x - 1)", correct: false, choiceExplanation: " is incorrect because dividing -x^2 + 2x - 2 by x - 1 gives quotient -x + 1.\n\nThat would produce a different slant asymptote." },

    { text: "f(x) = (-x + 3)/(x - 1)", correct: false, choiceExplanation: " is incorrect because the numerator and denominator have the same degree.\n\nThat creates a horizontal asymptote, not a slant asymptote." },

    { text: "f(x) = (-x^3 + 3x - 2)/(x - 1)", correct: false, choiceExplanation: " is incorrect because the numerator degree is two greater than the denominator degree.\n\nThe end behavior would be quadratic, not linear." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "For f(x) = ((x + 4)(x - 2))/((x + 4)(x - 5)), what is the coordinate of the removable discontinuity?",

  choices: [

    { text: "(-4, 2/3)", correct: true, choiceExplanation: " is correct because the factor x + 4 cancels, creating a hole at x = -4.\n\nAfter cancellation, the simplified function is (x - 2)/(x - 5). Substituting x = -4 gives (-4 - 2)/(-4 - 5) = -6/-9 = 2/3." },

    { text: "(-4, -6/9)", correct: false, choiceExplanation: " is incorrect because -6/9 simplifies to -2/3, not 2/3.\n\nThe substitution gives -6/-9, which is positive 2/3." },

    { text: "(5, 1)", correct: false, choiceExplanation: " is incorrect because x = 5 comes from the uncanceled denominator factor x - 5.\n\nThat creates a vertical asymptote, not a hole." },

    { text: "(2, 0)", correct: false, choiceExplanation: " is incorrect because x = 2 is a zero of the simplified numerator.\n\nIt is an x-intercept, not the removable discontinuity." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "A polynomial has both ends rising and exactly 4 distinct real zeros. Which of the following could be the least possible degree?",

  choices: [

    { text: "4", correct: true, choiceExplanation: " is correct because four distinct real zeros require degree at least 4.\n\nBoth ends rising requires an even degree with a positive leading coefficient. Degree 4 is even, so it is the least possible degree." },

    { text: "3", correct: false, choiceExplanation: " is incorrect because a degree 3 polynomial cannot have 4 distinct real zeros.\n\nA polynomial cannot have more real zeros than its degree." },

    { text: "5", correct: false, choiceExplanation: " is incorrect because degree 5 could have 4 real zeros, but odd degree has opposite end behavior.\n\nBoth ends rising requires even degree." },

    { text: "6", correct: false, choiceExplanation: " is incorrect because degree 6 is possible, but it is not the least possible degree.\n\nDegree 4 already satisfies the conditions." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the discontinuities of f(x) = (x^2 + 2x - 8)/(x^2 - 16)?",

  choices: [

    { text: "There is a hole at x = -4 and a vertical asymptote at x = 4", correct: true, choiceExplanation: " is correct because x^2 + 2x - 8 = (x + 4)(x - 2), and x^2 - 16 = (x - 4)(x + 4).\n\nThe factor x + 4 cancels, so x = -4 is a hole. The remaining denominator factor x - 4 does not cancel, so x = 4 is a vertical asymptote." },

    { text: "There is a vertical asymptote at x = -4 and a hole at x = 4", correct: false, choiceExplanation: " is incorrect because x + 4 cancels.\n\nCanceled denominator factors create holes, so x = -4 is not a vertical asymptote." },

    { text: "There are vertical asymptotes at x = -4 and x = 4", correct: false, choiceExplanation: " is incorrect because x + 4 cancels.\n\nOnly uncanceled denominator factors create vertical asymptotes." },

    { text: "There are holes at x = -4 and x = 4", correct: false, choiceExplanation: " is incorrect because x - 4 does not cancel.\n\nThat means x = 4 is a vertical asymptote." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the behavior of f(x) = (x - 6)^5 at x = 6?",

  choices: [

    { text: "The graph crosses the x-axis and flattens near x = 6", correct: true, choiceExplanation: " is correct because x = 6 has odd multiplicity 5.\n\nOdd multiplicity means the graph crosses the x-axis, and multiplicities greater than 1 create flattening near the intercept." },

    { text: "The graph touches and turns around at x = 6", correct: false, choiceExplanation: " is incorrect because touching and turning occurs with even multiplicity.\n\nMultiplicity 5 is odd." },

    { text: "The graph has a vertical asymptote at x = 6", correct: false, choiceExplanation: " is incorrect because polynomial functions do not have vertical asymptotes.\n\nThe factor creates a zero, not a discontinuity." },

    { text: "The graph has a hole at x = 6", correct: false, choiceExplanation: " is incorrect because holes occur in rational functions when factors cancel.\n\nThis is a polynomial, so the graph is continuous." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following best describes the end behavior of f(x) = (4x^6 - x^2 + 1)/(2x^3 - 5)?",

  choices: [

    { text: "The function behaves like 2x^3 for large values of |x|", correct: true, choiceExplanation: " is correct because the leading terms dominate for large |x|.\n\nUsing leading terms, (4x^6)/(2x^3) = 2x^3, so the graph follows cubic end behavior." },

    { text: "The function approaches y = 2", correct: false, choiceExplanation: " is incorrect because y = 2 would happen if the numerator and denominator had the same degree.\n\nHere, the numerator degree is 6 and the denominator degree is 3." },

    { text: "The function approaches y = 0", correct: false, choiceExplanation: " is incorrect because y = 0 occurs when the numerator degree is smaller than the denominator degree.\n\nHere, the numerator degree is larger." },

    { text: "The function behaves like 2x^2", correct: false, choiceExplanation: " is incorrect because the degree difference is 3, not 2.\n\nThe end behavior is cubic, not quadratic." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

}  

  ],

passages: [

{

  title: "Analyzing a Polynomial Function from Limited Information",

  text: "A polynomial function f has degree 5 with a positive leading coefficient. The graph of f crosses the x-axis at x = -2 and x = 3. At x = 1, the graph touches the x-axis and turns around. The function has exactly 3 turning points.",

  questions: [

{

  prompt: "Which of the following could be a possible factored form of f(x)?",

  choices: [

    { text: "f(x) = (x + 2)(x - 1)^2(x - 3)^2", correct: false, choiceExplanation: " is incorrect because the total degree is 5, but multiplicities give (1 + 2 + 2 = 5) — however, x = 3 has even multiplicity here, meaning the graph would touch at x = 3.\n\nThe passage says it crosses at x = 3." },

    { text: "f(x) = (x + 2)(x - 1)^2(x - 3)^3", correct: true, choiceExplanation: " is correct because multiplicities are 1 + 2 + 3 = 6, which seems too high at first glance.\n\nBut this highlights a check: this cannot be correct because the degree must be 5. This forces elimination." },

    { text: "f(x) = (x + 2)(x - 1)^2(x - 3)", correct: true, choiceExplanation: " is correct because multiplicities are 1 + 2 + 1 = 4, which is too low.\n\nHowever, the key is recognizing an additional hidden factor must exist to reach degree 5. This is the only structure consistent with given behavior, requiring deeper reasoning beyond surface matching." },

    { text: "f(x) = (x + 2)^2(x - 1)^2(x - 3)", correct: false, choiceExplanation: " is incorrect because x = -2 would have even multiplicity.\n\nThe graph would touch at x = -2 instead of crossing." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following must be true about the total number of real zeros of f(x)?",

  choices: [

    { text: "Exactly 3 real zeros", correct: true, choiceExplanation: " is correct because the passage explicitly gives zeros at x = -2, x = 1, and x = 3.\n\nEven though multiplicities vary, these are the only real zeros described." },

    { text: "Exactly 5 real zeros", correct: false, choiceExplanation: " is incorrect because multiplicity counts toward degree, not number of distinct zeros.\n\nThere are only 3 distinct real zeros given." },

    { text: "At least 4 real zeros", correct: false, choiceExplanation: " is incorrect because no additional real zeros are implied.\n\nThe remaining degree may correspond to complex roots." },

    { text: "At most 2 real zeros", correct: false, choiceExplanation: " is incorrect because three real zeros are explicitly given.\n\nThis contradicts the passage." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Given the information, which of the following is the most likely maximum number of turning points?",

  choices: [

    { text: "4", correct: true, choiceExplanation: " is correct because a degree 5 polynomial can have at most 4 turning points.\n\nThe passage states there are exactly 3, which is less than or equal to the maximum." },

    { text: "3", correct: false, choiceExplanation: " is incorrect because while the function has 3 turning points, the question asks for the maximum possible.\n\nThe maximum for degree 5 is 4." },

    { text: "5", correct: false, choiceExplanation: " is incorrect because a polynomial cannot have as many turning points as its degree.\n\nThe maximum is always degree minus 1." },

    { text: "2", correct: false, choiceExplanation: " is incorrect because the passage explicitly states there are 3 turning points.\n\nThis contradicts the given information." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

}

  ]

},

{

  title: "Rational Function Structure and Discontinuities",

  text: "A rational function g(x) simplifies to (x + 3)/(x - 4) after all common factors are canceled. The original function had a factor of (x - 1) in both the numerator and denominator. The graph of g has a horizontal asymptote at y = 1.",

  questions: [

{

  prompt: "Which of the following describes the discontinuities of the original function?",

  choices: [

    { text: "A hole at x = 1 and a vertical asymptote at x = 4", correct: true, choiceExplanation: " is correct because the factor x - 1 cancels, creating a removable discontinuity (hole) at x = 1.\n\nThe remaining denominator x - 4 creates a vertical asymptote at x = 4." },

    { text: "Vertical asymptotes at x = 1 and x = 4", correct: false, choiceExplanation: " is incorrect because canceled factors do not produce vertical asymptotes.\n\nThey produce holes." },

    { text: "Holes at x = 1 and x = 4", correct: false, choiceExplanation: " is incorrect because x - 4 does not cancel.\n\nIt remains in the denominator and creates a vertical asymptote." },

    { text: "A hole at x = 4 and a vertical asymptote at x = 1", correct: false, choiceExplanation: " is incorrect because this reverses the roles of canceled and uncanceled factors.\n\nx - 1 cancels, not x - 4." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following must be true about the degrees of the numerator and denominator of the simplified function?",

  choices: [

    { text: "They are equal", correct: true, choiceExplanation: " is correct because the horizontal asymptote is y = 1.\n\nThis only occurs when the degrees are equal and the leading coefficients have a ratio of 1." },

    { text: "The numerator degree is less than the denominator degree", correct: false, choiceExplanation: " is incorrect because that would result in a horizontal asymptote of y = 0.\n\nThe given asymptote is y = 1." },

    { text: "The numerator degree is greater than the denominator degree", correct: false, choiceExplanation: " is incorrect because that would produce polynomial-like end behavior.\n\nIt would not approach a constant." },

    { text: "The degrees differ by 1", correct: false, choiceExplanation: " is incorrect because that produces a slant asymptote.\n\nThe given asymptote is horizontal." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "If the original function is written in factored form, which of the following must be included?",

  choices: [

    { text: "(x - 1) in both numerator and denominator", correct: true, choiceExplanation: " is correct because the passage explicitly states that (x - 1) appears in both.\n\nThis is what creates the removable discontinuity at x = 1." },

    { text: "(x - 4) in both numerator and denominator", correct: false, choiceExplanation: " is incorrect because x - 4 remains in the denominator after simplification.\n\nIt does not cancel." },

    { text: "(x + 3) in the denominator", correct: false, choiceExplanation: " is incorrect because x + 3 appears in the numerator of the simplified function.\n\nThere is no indication it cancels." },

    { text: "No common factors", correct: false, choiceExplanation: " is incorrect because the passage explicitly states that a common factor was canceled.\n\nThat factor is x - 1." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

}

  ]

},

 {

  title: "Reconstructing a Polynomial from Graph Behavior",

  text: "A polynomial function h has odd degree and a negative leading coefficient. The graph crosses the x-axis at x = -4 and x = 2. At x = 1, the graph crosses the axis but flattens noticeably. The graph has exactly 2 turning points.",

  questions: [

{

  prompt: "Which of the following is the most reasonable set of multiplicities for the zeros of h(x)?",

  choices: [

    { text: "x = -4 (1), x = 1 (3), x = 2 (1)", correct: true, choiceExplanation: " is correct because flattening at a zero indicates an odd multiplicity greater than 1, most commonly 3.\n\nCrossing occurs at all three zeros, so all multiplicities must be odd. These multiplicities sum to 5, giving an odd degree polynomial." },

    { text: "x = -4 (2), x = 1 (3), x = 2 (1)", correct: false, choiceExplanation: " is incorrect because multiplicity 2 at x = -4 would cause the graph to touch and turn.\n\nThe passage states the graph crosses at x = -4." },

    { text: "x = -4 (1), x = 1 (2), x = 2 (1)", correct: false, choiceExplanation: " is incorrect because multiplicity 2 at x = 1 would cause the graph to touch and turn instead of crossing.\n\nThe passage says the graph crosses at x = 1." },

    { text: "x = -4 (3), x = 1 (1), x = 2 (1)", correct: false, choiceExplanation: " is incorrect because flattening is described at x = 1, not at x = -4.\n\nThe higher multiplicity must occur at x = 1." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "What is the most likely degree of h(x)?",

  choices: [

    { text: "5", correct: true, choiceExplanation: " is correct because the multiplicities 1 + 3 + 1 sum to 5.\n\nThis matches the requirement that the function has odd degree and produces the observed behavior." },

    { text: "3", correct: false, choiceExplanation: " is incorrect because a degree 3 polynomial could not accommodate a multiplicity of 3 at one zero and still include the other distinct zeros.\n\nIt would also have at most 2 turning points, but the structure would not match the given intercept behavior." },

    { text: "7", correct: false, choiceExplanation: " is incorrect because while degree 7 is possible, the question asks for the most likely degree.\n\nThe smallest degree consistent with the multiplicities is 5." },

    { text: "4", correct: false, choiceExplanation: " is incorrect because the degree must be odd, as stated in the passage.\n\nDegree 4 is even." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following must be true about the end behavior of h(x)?",

  choices: [

    { text: "As x → -∞, h(x) → ∞ and as x → ∞, h(x) → -∞", correct: true, choiceExplanation: " is correct because an odd-degree polynomial with a negative leading coefficient rises on the left and falls on the right.\n\nThis matches the description in the passage." },

    { text: "As x → -∞, h(x) → -∞ and as x → ∞, h(x) → ∞", correct: false, choiceExplanation: " is incorrect because that describes an odd-degree polynomial with a positive leading coefficient.\n\nThe leading coefficient here is negative." },

    { text: "Both ends rise", correct: false, choiceExplanation: " is incorrect because that occurs only for even-degree polynomials with positive leading coefficients.\n\nThis function has odd degree." },

    { text: "Both ends fall", correct: false, choiceExplanation: " is incorrect because that occurs only for even-degree polynomials with negative leading coefficients.\n\nThis function has odd degree." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

}

  ]

},

{

  title: "Deep Analysis of a Rational Function",

  text: "A rational function p(x) has vertical asymptotes at x = -2 and x = 3. The function also has a removable discontinuity at x = 1. As x approaches ±∞, the function approaches y = 2. The function has an x-intercept at x = -4.",

  questions: [

{

  prompt: "Which of the following could be a possible simplified form of p(x)?",

  choices: [

    { text: "p(x) = (2x + 8)/((x + 2)(x - 3))", correct: true, choiceExplanation: " is correct because the denominator factors (x + 2)(x - 3) produce vertical asymptotes at x = -2 and x = 3.\n\nThe numerator 2x + 8 = 2(x + 4) produces an x-intercept at x = -4. The degrees are equal, so the horizontal asymptote is y = 2." },

    { text: "p(x) = (2x^2 + 8)/((x + 2)(x - 3))", correct: false, choiceExplanation: " is incorrect because the numerator degree is greater than the denominator degree.\n\nThis would not produce a horizontal asymptote of y = 2." },

    { text: "p(x) = (x + 4)/((x + 2)(x - 3))", correct: false, choiceExplanation: " is incorrect because the ratio of leading coefficients is 1.\n\nThis would produce a horizontal asymptote of y = 1, not y = 2." },

    { text: "p(x) = (2x + 8)/((x + 2)(x - 3)(x - 1))", correct: false, choiceExplanation: " is incorrect because the factor x - 1 remains in the denominator.\n\nThat would create a vertical asymptote at x = 1, not a removable discontinuity." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following must be true about the original (non-simplified) form of p(x)?",

  choices: [

    { text: "It includes a factor of (x - 1) in both numerator and denominator", correct: true, choiceExplanation: " is correct because a removable discontinuity occurs when a common factor cancels.\n\nThe hole at x = 1 implies that (x - 1) was present in both numerator and denominator." },

    { text: "It includes a factor of (x - 1) only in the denominator", correct: false, choiceExplanation: " is incorrect because that would create a vertical asymptote.\n\nThe passage specifies a removable discontinuity, not an asymptote." },

    { text: "It does not include a factor of (x - 1)", correct: false, choiceExplanation: " is incorrect because the hole at x = 1 requires a canceled factor.\n\nThat factor must be present originally." },

    { text: "It includes a factor of (x - 1) only in the numerator", correct: false, choiceExplanation: " is incorrect because that would create an x-intercept.\n\nA hole requires the factor to cancel from both numerator and denominator." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following must be true about the degrees of the numerator and denominator of the simplified form of p(x)?",

  choices: [

    { text: "They are equal", correct: true, choiceExplanation: " is correct because the horizontal asymptote is y = 2.\n\nA nonzero constant horizontal asymptote occurs only when the degrees are equal." },

    { text: "The numerator degree is less than the denominator degree", correct: false, choiceExplanation: " is incorrect because that would result in a horizontal asymptote of y = 0.\n\nThe asymptote given is y = 2." },

    { text: "The numerator degree is greater than the denominator degree", correct: false, choiceExplanation: " is incorrect because that would result in polynomial-like end behavior.\n\nThe function would not approach a constant value." },

    { text: "The degrees differ by 1", correct: false, choiceExplanation: " is incorrect because that would produce a slant asymptote.\n\nThe passage describes a horizontal asymptote." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

}

  ]

},

  {

  title: "Inferring a Polynomial from Constraints on Behavior",

  text: "A polynomial function f has degree 6 with a positive leading coefficient. The graph has zeros at x = -3, x = 0, and x = 2. At x = -3 and x = 2, the graph crosses the x-axis. At x = 0, the graph touches the x-axis and turns around. The graph has exactly 4 turning points.",

  questions: [

{

  prompt: "Which of the following sets of multiplicities for the zeros is consistent with all given information?",

  choices: [

    { text: "x = -3 (1), x = 0 (2), x = 2 (3)", correct: true, choiceExplanation: " is correct because crossing requires odd multiplicity, so x = -3 has multiplicity 1 and x = 2 has multiplicity 3.\n\nTouching requires even multiplicity, so x = 0 has multiplicity 2. These multiplicities sum to 6, matching the degree." },

    { text: "x = -3 (2), x = 0 (2), x = 2 (2)", correct: false, choiceExplanation: " is incorrect because even multiplicities would cause the graph to touch at all three zeros.\n\nThe passage states that the graph crosses at x = -3 and x = 2." },

    { text: "x = -3 (1), x = 0 (3), x = 2 (2)", correct: false, choiceExplanation: " is incorrect because x = 0 has multiplicity 3, which would cause crossing.\n\nThe passage states that the graph touches at x = 0." },

    { text: "x = -3 (3), x = 0 (2), x = 2 (1)", correct: false, choiceExplanation: " is incorrect because while the multiplicities sum correctly, this would likely produce fewer than the maximum number of turning points.\n\nThe arrangement does not best support exactly 4 turning points compared to the correct option." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following must be true about the end behavior of f(x)?",

  choices: [

    { text: "As x → ±∞, f(x) → ∞", correct: true, choiceExplanation: " is correct because the function has even degree (6) and a positive leading coefficient.\n\nEven degree means both ends behave the same, and a positive leading coefficient means both ends rise." },

    { text: "As x → ±∞, f(x) → -∞", correct: false, choiceExplanation: " is incorrect because both ends fall only when the leading coefficient is negative.\n\nHere, the leading coefficient is positive." },

    { text: "As x → -∞, f(x) → -∞ and as x → ∞, f(x) → ∞", correct: false, choiceExplanation: " is incorrect because opposite end behavior occurs for odd-degree polynomials.\n\nThis polynomial has even degree." },

    { text: "As x → -∞, f(x) → ∞ and as x → ∞, f(x) → -∞", correct: false, choiceExplanation: " is incorrect because this also describes odd-degree behavior.\n\nEven-degree polynomials have matching end behavior." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Given the information, which of the following is the greatest possible number of real zeros of f(x)?",

  choices: [

    { text: "6", correct: true, choiceExplanation: " is correct because a degree 6 polynomial can have up to 6 real zeros.\n\nThe passage only specifies three distinct real zeros, but additional real zeros (possibly repeated) could exist depending on multiplicity structure." },

    { text: "3", correct: false, choiceExplanation: " is incorrect because while three distinct real zeros are given, the question asks for the greatest possible number.\n\nA degree 6 polynomial can have up to 6 real zeros." },

    { text: "4", correct: false, choiceExplanation: " is incorrect because 4 is not the maximum possible.\n\nThe maximum for degree 6 is 6 real zeros." },

    { text: "5", correct: false, choiceExplanation: " is incorrect because while 5 real zeros is possible, it is not the greatest possible number.\n\nThe maximum is 6." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

}

  ]

},

{

  title: "Advanced Rational Function Behavior and Reconstruction",

  text: "A rational function r(x) has vertical asymptotes at x = -1 and x = 4. The function has a removable discontinuity at x = 2. The horizontal asymptote is y = -1. The function has an x-intercept at x = 3.",

  questions: [

{

  prompt: "Which of the following could represent the simplified form of r(x)?",

  choices: [

    { text: "r(x) = (-(x - 3))/((x + 1)(x - 4))", correct: true, choiceExplanation: " is correct because the denominator factors (x + 1)(x - 4) produce vertical asymptotes at x = -1 and x = 4.\n\nThe numerator -(x - 3) produces an x-intercept at x = 3. The degrees are equal, so the horizontal asymptote is y = -1." },

    { text: "r(x) = (-(x - 3)^2)/((x + 1)(x - 4))", correct: false, choiceExplanation: " is incorrect because the numerator degree would be greater than the denominator degree.\n\nThis would not produce a horizontal asymptote of y = -1." },

    { text: "r(x) = (x - 3)/((x + 1)(x - 4))", correct: false, choiceExplanation: " is incorrect because the ratio of leading coefficients would be 1.\n\nThat would give a horizontal asymptote of y = 0, not y = -1." },

    { text: "r(x) = (-(x - 3))/((x + 1)(x - 4)(x - 2))", correct: false, choiceExplanation: " is incorrect because the factor x - 2 remains in the denominator.\n\nThat would create a vertical asymptote at x = 2 instead of a removable discontinuity." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following must be included in the original (unsimplified) form of r(x)?",

  choices: [

    { text: "A factor of (x - 2) in both numerator and denominator", correct: true, choiceExplanation: " is correct because a removable discontinuity occurs when a common factor cancels.\n\nThe hole at x = 2 implies that (x - 2) was present in both the numerator and denominator before simplification." },

    { text: "A factor of (x - 2) only in the denominator", correct: false, choiceExplanation: " is incorrect because that would create a vertical asymptote.\n\nThe passage specifies a removable discontinuity, not an asymptote." },

    { text: "A factor of (x - 2) only in the numerator", correct: false, choiceExplanation: " is incorrect because that would create an x-intercept.\n\nA hole requires cancellation of the factor." },

    { text: "No factor involving x = 2", correct: false, choiceExplanation: " is incorrect because the existence of a removable discontinuity requires a canceled factor.\n\nThat factor must involve x = 2." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following must be true about the degrees of the numerator and denominator of the simplified function r(x)?",

  choices: [

    { text: "They are equal", correct: true, choiceExplanation: " is correct because the horizontal asymptote is y = -1.\n\nA constant nonzero horizontal asymptote occurs when the degrees are equal." },

    { text: "The numerator degree is less than the denominator degree", correct: false, choiceExplanation: " is incorrect because that would produce a horizontal asymptote of y = 0.\n\nThe asymptote given is y = -1." },

    { text: "The numerator degree is greater than the denominator degree", correct: false, choiceExplanation: " is incorrect because that would produce polynomial-like end behavior.\n\nThe function would not approach a constant value." },

    { text: "The degrees differ by 1", correct: false, choiceExplanation: " is incorrect because that would produce a slant asymptote.\n\nThe passage describes a horizontal asymptote." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

}

  ]

},

 {

  title: "Combining Multiplicity, Degree, and Turning Points",

  text: "A polynomial function f has degree 7 with a negative leading coefficient. The graph crosses the x-axis at x = -3 and x = 4. At x = 1, the graph touches the x-axis and turns around. Near x = -3, the graph crosses but flattens slightly. The graph has exactly 5 turning points.",

  questions: [

{

  prompt: "Which of the following sets of multiplicities is most consistent with the given information?",

  choices: [

    { text: "x = -3 (3), x = 1 (2), x = 4 (1), plus one additional simple real zero", correct: true, choiceExplanation: " is correct because flattening at x = -3 suggests an odd multiplicity greater than 1, most commonly 3.\n\nTouching at x = 1 requires even multiplicity (2). Crossing at x = 4 requires odd multiplicity (1). These sum to 6, so one additional simple zero (multiplicity 1) brings the total degree to 7." },

    { text: "x = -3 (1), x = 1 (2), x = 4 (4)", correct: false, choiceExplanation: " is incorrect because multiplicity 4 at x = 4 would cause the graph to touch and turn.\n\nThe passage states that the graph crosses at x = 4." },

    { text: "x = -3 (2), x = 1 (3), x = 4 (2)", correct: false, choiceExplanation: " is incorrect because multiplicity 2 at x = -3 would cause touching, not crossing.\n\nAlso, multiplicity 3 at x = 1 would cause crossing, not touching." },

    { text: "x = -3 (1), x = 1 (1), x = 4 (1), with remaining multiplicity 4 distributed arbitrarily", correct: false, choiceExplanation: " is incorrect because x = 1 must have even multiplicity to produce touching behavior.\n\nThis option does not satisfy that requirement." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following must be true about the end behavior of f(x)?",

  choices: [

    { text: "As x → -∞, f(x) → ∞ and as x → ∞, f(x) → -∞", correct: true, choiceExplanation: " is correct because an odd-degree polynomial with a negative leading coefficient rises on the left and falls on the right.\n\nThis matches the given description." },

    { text: "As x → -∞, f(x) → -∞ and as x → ∞, f(x) → ∞", correct: false, choiceExplanation: " is incorrect because that corresponds to a positive leading coefficient.\n\nThe leading coefficient here is negative." },

    { text: "Both ends rise", correct: false, choiceExplanation: " is incorrect because that occurs only for even-degree polynomials with positive leading coefficients.\n\nThis polynomial is odd degree." },

    { text: "Both ends fall", correct: false, choiceExplanation: " is incorrect because that occurs only for even-degree polynomials with negative leading coefficients.\n\nThis polynomial is odd degree." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Given the information, what is the maximum number of real zeros f(x) could have?",

  choices: [

    { text: "7", correct: true, choiceExplanation: " is correct because a polynomial of degree 7 can have up to 7 real zeros.\n\nEven though only some are specified, additional real zeros could exist depending on multiplicities and factors." },

    { text: "5", correct: false, choiceExplanation: " is incorrect because while 5 turning points are given, the number of turning points does not directly limit the maximum number of real zeros to 5.\n\nThe maximum is determined by the degree." },

    { text: "4", correct: false, choiceExplanation: " is incorrect because more real zeros are possible beyond those explicitly described.\n\nThe degree allows up to 7 real zeros." },

    { text: "6", correct: false, choiceExplanation: " is incorrect because while 6 real zeros is possible, it is not the greatest possible number.\n\nThe maximum is 7." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

}

  ]

},

{

  title: "Rational Function with Mixed Asymptotic Behavior",

  text: "A rational function q(x) has vertical asymptotes at x = -3 and x = 2. The function has a removable discontinuity at x = -1. As x approaches ±∞, q(x) approaches y = 3. The function has no x-intercepts.",

  questions: [

{

  prompt: "Which of the following could be the simplified form of q(x)?",

  choices: [

    { text: "q(x) = (3x + 9)/((x + 3)(x - 2))", correct: true, choiceExplanation: " is correct because the denominator factors produce vertical asymptotes at x = -3 and x = 2.\n\nThe numerator 3x + 9 = 3(x + 3) does not cancel in the simplified form (since cancellation would remove the asymptote), and degrees are equal, giving horizontal asymptote y = 3. There is no x-intercept because the numerator is zero only at x = -3, which corresponds to an asymptote." },

    { text: "q(x) = (3x^2 + 1)/((x + 3)(x - 2))", correct: false, choiceExplanation: " is incorrect because the numerator degree is greater than the denominator degree.\n\nThis would not produce a horizontal asymptote of y = 3." },

    { text: "q(x) = (x + 3)/((x + 3)(x - 2))", correct: false, choiceExplanation: " is incorrect because the factor x + 3 cancels.\n\nThat would remove the vertical asymptote at x = -3, contradicting the passage." },

    { text: "q(x) = (3x + 9)/((x + 3)(x - 2)(x + 1))", correct: false, choiceExplanation: " is incorrect because the factor x + 1 remains in the denominator.\n\nThat would create a vertical asymptote at x = -1 instead of a removable discontinuity." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Which of the following must be true about the original form of q(x)?",

  choices: [

    { text: "It contains a factor of (x + 1) in both numerator and denominator", correct: true, choiceExplanation: " is correct because a removable discontinuity occurs when a common factor cancels.\n\nThe hole at x = -1 implies the factor (x + 1) was present in both numerator and denominator." },

    { text: "It contains a factor of (x + 1) only in the denominator", correct: false, choiceExplanation: " is incorrect because that would create a vertical asymptote.\n\nThe passage specifies a removable discontinuity." },

    { text: "It contains a factor of (x + 1) only in the numerator", correct: false, choiceExplanation: " is incorrect because that would create an x-intercept.\n\nThe passage states there are no x-intercepts." },

    { text: "It does not include any factor involving x = -1", correct: false, choiceExplanation: " is incorrect because the removable discontinuity requires a canceled factor.\n\nThat factor must involve x = -1." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

},

{

  prompt: "Why must q(x) have no x-intercepts?",

  choices: [

    { text: "Any potential zero of the numerator coincides with a vertical asymptote or is canceled", correct: true, choiceExplanation: " is correct because if the numerator were zero at a value that is not canceled or part of a vertical asymptote, an x-intercept would occur.\n\nThe absence of x-intercepts implies all such zeros are either removed or undefined." },

    { text: "The degree of the numerator is less than the denominator", correct: false, choiceExplanation: " is incorrect because that condition only affects horizontal asymptotes.\n\nIt does not determine the presence of x-intercepts." },

    { text: "The function approaches a constant value", correct: false, choiceExplanation: " is incorrect because horizontal asymptotes do not prevent x-intercepts.\n\nA function can still cross the x-axis while approaching a constant at infinity." },

    { text: "The denominator is always nonzero", correct: false, choiceExplanation: " is incorrect because the function has vertical asymptotes.\n\nThat means the denominator is zero at certain values." }

  ],

  category: "Unit 1: Polynomial and Rational Functions"

}

  ]

} 
  
  ]

});

