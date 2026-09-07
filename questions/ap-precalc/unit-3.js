window.questionBanks = window.questionBanks || {};
window.questionBanks.apPrecalc = window.questionBanks.apPrecalc || [];

window.questionBanks.apPrecalc.push({

rapidQuestions: [
{
  prompt: "If sin(θ) = 5/13 and θ is in Quadrant II, what is cos(θ)?",

  choices: [

    { text: "-12/13", correct: true, choiceExplanation: " is correct because sin²θ + cos²θ = 1.\n\nSo cos²θ = 1 - (5/13)² = 144/169 → cosθ = ±12/13.\n\nIn Quadrant II, cosine is negative, so cosθ = -12/13." },

    { text: "12/13", correct: false, choiceExplanation: " is incorrect because cosine is negative in Quadrant II." },

    { text: "-5/13", correct: false, choiceExplanation: " is incorrect because this repeats the sine value instead of computing cosine." },

    { text: "√(144/169)", correct: false, choiceExplanation: " is incomplete because it does not account for the sign of cosine in Quadrant II." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is equivalent to tan(θ) if sin(θ) = 3/5 and cos(θ) = 4/5?",

  choices: [

    { text: "3/4", correct: true, choiceExplanation: " is correct because tan(θ) = sin(θ)/cos(θ) = (3/5)/(4/5) = 3/4." },

    { text: "4/3", correct: false, choiceExplanation: " is incorrect because it reverses the ratio.\n\nTangent is sine over cosine, not the opposite." },

    { text: "7/5", correct: false, choiceExplanation: " is incorrect because tangent is not the sum of sine and cosine." },

    { text: "1", correct: false, choiceExplanation: " is incorrect because sine and cosine are not equal in this case." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the amplitude of the function y = -3sin(2x + π/4) + 1?",

  choices: [

    { text: "3", correct: true, choiceExplanation: " is correct because amplitude is the absolute value of the coefficient of sin(x).\n\n|-3| = 3." },

    { text: "-3", correct: false, choiceExplanation: " is incorrect because amplitude is always positive." },

    { text: "2", correct: false, choiceExplanation: " is incorrect because 2 is the frequency multiplier, not the amplitude." },

    { text: "1", correct: false, choiceExplanation: " is incorrect because 1 is the vertical shift, not the amplitude." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the period of the function y = cos(3x)?",

  choices: [

    { text: "2π/3", correct: true, choiceExplanation: " is correct because the period of cos(Bx) is 2π/B.\n\nSo the period is 2π/3." },

    { text: "3π", correct: false, choiceExplanation: " is incorrect because this incorrectly multiplies instead of divides." },

    { text: "π/3", correct: false, choiceExplanation: " is incorrect because it divides π instead of 2π." },

    { text: "2π", correct: false, choiceExplanation: " is incorrect because that is the standard period when B = 1." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is the exact value of cos(5π/6)?",

  choices: [

    { text: "-√3/2", correct: true, choiceExplanation: " is correct because 5π/6 lies in Quadrant II where cosine is negative.\n\nThe reference angle is π/6, and cos(π/6) = √3/2." },

    { text: "√3/2", correct: false, choiceExplanation: " is incorrect because cosine is negative in Quadrant II." },

    { text: "-1/2", correct: false, choiceExplanation: " is incorrect because -1/2 corresponds to cos(2π/3)." },

    { text: "1/2", correct: false, choiceExplanation: " is incorrect because both magnitude and sign are incorrect." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Solve for θ in [0, 2π): sin(θ) = -√3/2.",

  choices: [

    { text: "θ = 4π/3, 5π/3", correct: true, choiceExplanation: " is correct because sin(θ) = -√3/2 corresponds to reference angle π/3.\n\nSine is negative in Quadrants III and IV." },

    { text: "θ = π/3, 2π/3", correct: false, choiceExplanation: " is incorrect because sine is positive in Quadrants I and II." },

    { text: "θ = 3π/4, 7π/4", correct: false, choiceExplanation: " is incorrect because these correspond to ±√2/2." },

    { text: "θ = π/6, 11π/6", correct: false, choiceExplanation: " is incorrect because these correspond to ±1/2." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following represents the midline of y = 4cos(x) - 7?",

  choices: [

    { text: "y = -7", correct: true, choiceExplanation: " is correct because the midline is given by the vertical shift.\n\nThe graph oscillates around y = -7." },

    { text: "y = 4", correct: false, choiceExplanation: " is incorrect because 4 is the amplitude, not the midline." },

    { text: "y = 0", correct: false, choiceExplanation: " is incorrect because the function is shifted downward." },

    { text: "y = -3", correct: false, choiceExplanation: " is incorrect because this incorrectly combines amplitude and shift." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Convert the point (2, π/3) from polar to rectangular coordinates.",

  choices: [

    { text: "(1, √3)", correct: true, choiceExplanation: " is correct because x = rcosθ = 2·(1/2) = 1 and y = rsinθ = 2·(√3/2) = √3." },

    { text: "(√3, 1)", correct: false, choiceExplanation: " is incorrect because it swaps sine and cosine values." },

    { text: "(2, √3)", correct: false, choiceExplanation: " is incorrect because it does not apply cosine to the x-coordinate." },

    { text: "(1/2, √3/2)", correct: false, choiceExplanation: " is incorrect because this corresponds to r = 1, not r = 2." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is equivalent to sin(θ + π)?",

  choices: [

    { text: "-sin(θ)", correct: true, choiceExplanation: " is correct because adding π shifts the sine function by half a cycle, reversing its sign." },

    { text: "sin(θ)", correct: false, choiceExplanation: " is incorrect because the sine function changes sign after a π shift." },

    { text: "-cos(θ)", correct: false, choiceExplanation: " is incorrect because this corresponds to a π/2 shift, not π." },

    { text: "cos(θ)", correct: false, choiceExplanation: " is incorrect because sine and cosine are phase-shifted, not identical." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following best describes the graph of r = 3cos(θ)?",

  choices: [

    { text: "A circle centered at (3/2, 0) with radius 3/2", correct: true, choiceExplanation: " is correct because r = a·cos(θ) represents a circle centered at (a/2, 0) with radius a/2.\n\nHere a = 3." },

    { text: "A circle centered at (0, 3)", correct: false, choiceExplanation: " is incorrect because cosine produces horizontal displacement, not vertical." },

    { text: "A line through the origin", correct: false, choiceExplanation: " is incorrect because this is not a linear polar equation." },

    { text: "An ellipse centered at the origin", correct: false, choiceExplanation: " is incorrect because r = a·cos(θ) produces a circle, not an ellipse." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "If tan(θ) = -3/4 and θ is in Quadrant IV, what is sin(θ)?",

  choices: [

    { text: "-3/5", correct: true, choiceExplanation: " is correct because tan(θ) = sin(θ)/cos(θ).\n\nUsing a 3-4-5 triangle, sin = 3/5 and cos = 4/5. In Quadrant IV, sine is negative, so sin(θ) = -3/5." },

    { text: "3/5", correct: false, choiceExplanation: " is incorrect because sine is negative in Quadrant IV." },

    { text: "-4/5", correct: false, choiceExplanation: " is incorrect because this corresponds to cosine, not sine." },

    { text: "4/5", correct: false, choiceExplanation: " is incorrect because both magnitude and sign are wrong." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the period of the function y = sin(πx)?",

  choices: [

    { text: "2", correct: true, choiceExplanation: " is correct because the period of sin(Bx) is 2π/B.\n\nHere B = π, so period = 2π/π = 2." },

    { text: "π", correct: false, choiceExplanation: " is incorrect because π is the frequency factor, not the period." },

    { text: "1", correct: false, choiceExplanation: " is incorrect because that would require B = 2π." },

    { text: "2π", correct: false, choiceExplanation: " is incorrect because that is the base period before scaling." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is the exact value of sin(7π/6)?",

  choices: [

    { text: "-1/2", correct: true, choiceExplanation: " is correct because 7π/6 is in Quadrant III where sine is negative.\n\nThe reference angle is π/6, and sin(π/6) = 1/2." },

    { text: "1/2", correct: false, choiceExplanation: " is incorrect because sine is negative in Quadrant III." },

    { text: "-√3/2", correct: false, choiceExplanation: " is incorrect because this corresponds to π/3, not π/6." },

    { text: "√3/2", correct: false, choiceExplanation: " is incorrect because both magnitude and sign are wrong." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Solve for θ in [0, 2π): cos(θ) = -1/2.",

  choices: [

    { text: "θ = 2π/3, 4π/3", correct: true, choiceExplanation: " is correct because cos(θ) = -1/2 has reference angle π/3.\n\nCosine is negative in Quadrants II and III." },

    { text: "θ = π/3, 5π/3", correct: false, choiceExplanation: " is incorrect because cosine is positive in Quadrants I and IV for those angles." },

    { text: "θ = π/6, 11π/6", correct: false, choiceExplanation: " is incorrect because these correspond to cos(θ) = ±√3/2." },

    { text: "θ = π/2, 3π/2", correct: false, choiceExplanation: " is incorrect because cosine is 0 at these angles." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the phase shift of y = sin(2x - π)?",

  choices: [

    { text: "π/2 to the right", correct: true, choiceExplanation: " is correct because factor out 2: sin[2(x - π/2)].\n\nThis shows a shift of π/2 to the right." },

    { text: "π to the right", correct: false, choiceExplanation: " is incorrect because π is inside the expression before factoring out 2." },

    { text: "π/2 to the left", correct: false, choiceExplanation: " is incorrect because the sign inside indicates a right shift." },

    { text: "No phase shift", correct: false, choiceExplanation: " is incorrect because the function is clearly shifted horizontally." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Convert the rectangular point (-2, 2√3) to polar form with 0 ≤ θ < 2π.",

  choices: [

    { text: "(4, 2π/3)", correct: true, choiceExplanation: " is correct because r = √((-2)² + (2√3)²) = 4.\n\nθ = 2π/3 since the point lies in Quadrant II with reference angle π/3." },

    { text: "(4, π/3)", correct: false, choiceExplanation: " is incorrect because π/3 lies in Quadrant I.\n\nThe point is in Quadrant II." },

    { text: "(2, 2π/3)", correct: false, choiceExplanation: " is incorrect because the radius is 4, not 2." },

    { text: "(4, 5π/3)", correct: false, choiceExplanation: " is incorrect because 5π/3 is in Quadrant IV." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is equivalent to cos(π - θ)?",

  choices: [

    { text: "-cos(θ)", correct: true, choiceExplanation: " is correct because cosine is negative in Quadrant II.\n\nThe identity cos(π - θ) = -cos(θ) holds." },

    { text: "cos(θ)", correct: false, choiceExplanation: " is incorrect because cosine changes sign after reflection across π." },

    { text: "sin(θ)", correct: false, choiceExplanation: " is incorrect because sine and cosine are different functions." },

    { text: "-sin(θ)", correct: false, choiceExplanation: " is incorrect because this corresponds to a different identity." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following best describes the graph of r = 2sin(θ)?",

  choices: [

    { text: "A circle centered at (0, 1) with radius 1", correct: true, choiceExplanation: " is correct because r = a·sin(θ) produces a circle centered at (0, a/2) with radius a/2.\n\nHere a = 2." },

    { text: "A circle centered at (1, 0)", correct: false, choiceExplanation: " is incorrect because sine produces vertical displacement, not horizontal." },

    { text: "A line through the origin", correct: false, choiceExplanation: " is incorrect because this is not a linear polar equation." },

    { text: "An ellipse", correct: false, choiceExplanation: " is incorrect because this form produces a circle." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "If y = A sin(Bx) has amplitude 5 and period π, what is B?",

  choices: [

    { text: "2", correct: true, choiceExplanation: " is correct because period = 2π/B.\n\nSo π = 2π/B → B = 2." },

    { text: "5", correct: false, choiceExplanation: " is incorrect because 5 is the amplitude, not B." },

    { text: "π", correct: false, choiceExplanation: " is incorrect because this does not satisfy the period formula." },

    { text: "1/2", correct: false, choiceExplanation: " is incorrect because it would produce a period of 4π." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is the exact value of tan(3π/4)?",

  choices: [

    { text: "-1", correct: true, choiceExplanation: " is correct because tan(3π/4) = tan(π - π/4) = -tan(π/4) = -1." },

    { text: "1", correct: false, choiceExplanation: " is incorrect because tangent is negative in Quadrant II." },

    { text: "√3", correct: false, choiceExplanation: " is incorrect because √3 corresponds to π/3." },

    { text: "-√3", correct: false, choiceExplanation: " is incorrect because this corresponds to a different angle." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

                           
{

  prompt: "If cos(θ) = -8/17 and θ is in Quadrant II, what is tan(θ)?",

  choices: [

    { text: "-15/8", correct: true, choiceExplanation: " is correct because sin²θ + cos²θ = 1.\n\nIf cos(θ) = -8/17, then sin(θ) = 15/17 in Quadrant II. Therefore tan(θ) = sin(θ)/cos(θ) = (15/17)/(-8/17) = -15/8." },

    { text: "15/8", correct: false, choiceExplanation: " is incorrect because tangent is negative in Quadrant II.\n\nSine is positive and cosine is negative, so their ratio is negative." },

    { text: "-8/15", correct: false, choiceExplanation: " is incorrect because this is the reciprocal of tangent.\n\nIt would match cotangent instead." },

    { text: "8/17", correct: false, choiceExplanation: " is incorrect because this uses the cosine magnitude instead of finding tangent." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the period of y = -4cos((1/3)x - π/6) + 2?",

  choices: [

    { text: "6π", correct: true, choiceExplanation: " is correct because the coefficient of x inside the cosine is B = 1/3.\n\nThe period of cos(Bx) is 2π/|B| = 2π/(1/3) = 6π." },

    { text: "π/6", correct: false, choiceExplanation: " is incorrect because π/6 is part of the phase shift expression, not the period.\n\nThe period depends on the coefficient of x." },

    { text: "2π/3", correct: false, choiceExplanation: " is incorrect because this comes from multiplying 2π by 1/3 instead of dividing by 1/3." },

    { text: "3π", correct: false, choiceExplanation: " is incorrect because the period formula is 2π/|B|.\n\nUsing B = 1/3 gives 6π, not 3π." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is the phase shift of y = 2sin(4x + π)?",

  choices: [

    { text: "π/4 to the left", correct: true, choiceExplanation: " is correct because 4x + π = 4(x + π/4).\n\nSince the expression is x + π/4, the graph shifts left π/4." },

    { text: "π to the left", correct: false, choiceExplanation: " is incorrect because you must factor out the coefficient 4 before identifying the shift.\n\nThe shift is π/4, not π." },

    { text: "π/4 to the right", correct: false, choiceExplanation: " is incorrect because x + π/4 indicates a left shift.\n\nA right shift would appear as x - π/4." },

    { text: "4π to the left", correct: false, choiceExplanation: " is incorrect because this multiplies instead of dividing by the coefficient of x." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Solve for θ in [0, 2π): tan(θ) = √3.",

  choices: [

    { text: "θ = π/3, 4π/3", correct: true, choiceExplanation: " is correct because tan(θ) = √3 has reference angle π/3.\n\nTangent is positive in Quadrants I and III, so θ = π/3 and 4π/3." },

    { text: "θ = π/6, 7π/6", correct: false, choiceExplanation: " is incorrect because tan(π/6) = √3/3, not √3." },

    { text: "θ = 2π/3, 5π/3", correct: false, choiceExplanation: " is incorrect because tangent is negative in Quadrants II and IV." },

    { text: "θ = π/3 only", correct: false, choiceExplanation: " is incorrect because tangent has period π.\n\nThere are two solutions on [0, 2π)." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Convert the polar point (6, 5π/6) to rectangular coordinates.",

  choices: [

    { text: "(-3√3, 3)", correct: true, choiceExplanation: " is correct because x = rcosθ and y = rsinθ.\n\ncos(5π/6) = -√3/2 and sin(5π/6) = 1/2, so x = 6(-√3/2) = -3√3 and y = 6(1/2) = 3." },

    { text: "(3, -3√3)", correct: false, choiceExplanation: " is incorrect because sine and cosine were swapped and the signs do not match Quadrant II." },

    { text: "(3√3, 3)", correct: false, choiceExplanation: " is incorrect because cosine is negative in Quadrant II.\n\nThe x-coordinate should be negative." },

    { text: "(-3, 3√3)", correct: false, choiceExplanation: " is incorrect because it uses the sine and cosine values for π/3 instead of 5π/6." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Convert the rectangular point (3, -3√3) to polar form with r > 0 and 0 ≤ θ < 2π.",

  choices: [

    { text: "(6, 5π/3)", correct: true, choiceExplanation: " is correct because r = √(3² + (-3√3)²) = √(9 + 27) = 6.\n\nThe point is in Quadrant IV with reference angle π/3, so θ = 5π/3." },

    { text: "(6, π/3)", correct: false, choiceExplanation: " is incorrect because π/3 is in Quadrant I.\n\nThe point has positive x and negative y, so it lies in Quadrant IV." },

    { text: "(3, 5π/3)", correct: false, choiceExplanation: " is incorrect because the radius is not 3.\n\nThe distance from the origin is 6." },

    { text: "(6, 2π/3)", correct: false, choiceExplanation: " is incorrect because 2π/3 is in Quadrant II.\n\nThe signs would be negative x and positive y." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is equivalent to sin(π/2 - θ)?",

  choices: [

    { text: "cos(θ)", correct: true, choiceExplanation: " is correct because sin(π/2 - θ) is the cofunction identity for cosine.\n\nAngles that are complements exchange sine and cosine." },

    { text: "-cos(θ)", correct: false, choiceExplanation: " is incorrect because the cofunction identity does not introduce a negative sign here." },

    { text: "sin(θ)", correct: false, choiceExplanation: " is incorrect because sine of a complement becomes cosine, not sine." },

    { text: "-sin(θ)", correct: false, choiceExplanation: " is incorrect because this is not the correct cofunction identity." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "A sinusoidal function has maximum value 9 and minimum value -3. What are its amplitude and midline?",

  choices: [

    { text: "Amplitude 6; midline y = 3", correct: true, choiceExplanation: " is correct because amplitude = (max - min)/2 = (9 - (-3))/2 = 6.\n\nThe midline is the average of max and min: (9 + (-3))/2 = 3." },

    { text: "Amplitude 12; midline y = 6", correct: false, choiceExplanation: " is incorrect because 12 is the total vertical distance, not the amplitude.\n\nAmplitude is half of that distance." },

    { text: "Amplitude 6; midline y = 6", correct: false, choiceExplanation: " is incorrect because the midline is the average of maximum and minimum.\n\nThat average is 3, not 6." },

    { text: "Amplitude 3; midline y = 6", correct: false, choiceExplanation: " is incorrect because both values are reversed/miscalculated.\n\nAmplitude is 6 and midline is y = 3." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following best describes r = 4sin(θ) as a rectangular equation?",

  choices: [

    { text: "x² + y² = 4y", correct: true, choiceExplanation: " is correct because r = 4sin(θ).\n\nUsing y = rsin(θ), multiply both sides by r: r² = 4r sin(θ). Since r² = x² + y² and r sin(θ) = y, the equation becomes x² + y² = 4y." },

    { text: "x² + y² = 4x", correct: false, choiceExplanation: " is incorrect because cosine relates to x, while sine relates to y.\n\nFor sin(θ), the equation involves y." },

    { text: "x² + y² = 16y", correct: false, choiceExplanation: " is incorrect because the coefficient remains 4 after multiplying by r.\n\nYou do not square the 4." },

    { text: "x² + y² = 4", correct: false, choiceExplanation: " is incorrect because this would be a circle centered at the origin.\n\nThe given polar equation produces a shifted circle." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "If r = 2 + 2cos(θ), what is the value of r when θ = π?",

  choices: [

    { text: "0", correct: true, choiceExplanation: " is correct because cos(π) = -1.\n\nSo r = 2 + 2(-1) = 0." },

    { text: "2", correct: false, choiceExplanation: " is incorrect because it ignores the cosine term.\n\nAt θ = π, the cosine term contributes -2." },

    { text: "4", correct: false, choiceExplanation: " is incorrect because r = 4 occurs when cos(θ) = 1, such as θ = 0." },

    { text: "-2", correct: false, choiceExplanation: " is incorrect because 2 + 2(-1) equals 0, not -2." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "If sin(θ) = -7/25 and θ is in Quadrant IV, what is sec(θ)?",

  choices: [

    { text: "25/24", correct: true, choiceExplanation: " is correct because sin²θ + cos²θ = 1.\n\ncos²θ = 1 - 49/625 = 576/625, so cosθ = 24/25 in Quadrant IV. Therefore secθ = 1/cosθ = 25/24." },

    { text: "-25/24", correct: false, choiceExplanation: " is incorrect because cosine is positive in Quadrant IV.\n\nSince secant is the reciprocal of cosine, secant is also positive." },

    { text: "-25/7", correct: false, choiceExplanation: " is incorrect because this is csc(θ), not sec(θ).\n\nSecant is the reciprocal of cosine." },

    { text: "24/25", correct: false, choiceExplanation: " is incorrect because this is cos(θ), not sec(θ)." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the period of y = 3sin((2π/5)x - π/4) - 1?",

  choices: [

    { text: "5", correct: true, choiceExplanation: " is correct because the period of sin(Bx) is 2π/|B|.\n\nHere B = 2π/5, so period = 2π / (2π/5) = 5." },

    { text: "2π/5", correct: false, choiceExplanation: " is incorrect because 2π/5 is the coefficient B, not the period.\n\nThe period is found by dividing 2π by B." },

    { text: "5π", correct: false, choiceExplanation: " is incorrect because the π terms cancel when computing 2π / (2π/5)." },

    { text: "π/4", correct: false, choiceExplanation: " is incorrect because π/4 affects horizontal shifting, not the period." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is the phase shift of y = -2cos(3x - 2π)?",

  choices: [

    { text: "2π/3 to the right", correct: true, choiceExplanation: " is correct because 3x - 2π = 3(x - 2π/3).\n\nThe graph shifts right 2π/3." },

    { text: "2π to the right", correct: false, choiceExplanation: " is incorrect because you must factor out the coefficient 3.\n\nThe shift is 2π/3, not 2π." },

    { text: "2π/3 to the left", correct: false, choiceExplanation: " is incorrect because x - 2π/3 indicates a right shift.\n\nA left shift would appear as x + 2π/3." },

    { text: "3π/2 to the right", correct: false, choiceExplanation: " is incorrect because this results from incorrectly dividing the terms.\n\nThe correct shift is 2π/3." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Solve for θ in [0, 2π): 2cos²(θ) - 1 = 0.",

  choices: [

    { text: "θ = π/4, 3π/4, 5π/4, 7π/4", correct: true, choiceExplanation: " is correct because 2cos²θ - 1 = 0 gives cos²θ = 1/2.\n\nSo cosθ = ±√2/2, which occurs at π/4, 3π/4, 5π/4, and 7π/4." },

    { text: "θ = π/4, 7π/4", correct: false, choiceExplanation: " is incorrect because this only includes where cosθ = √2/2.\n\nThe equation involves cos²θ, so both positive and negative cosine values work." },

    { text: "θ = 3π/4, 5π/4", correct: false, choiceExplanation: " is incorrect because this only includes where cosθ = -√2/2.\n\nThe positive values also satisfy the squared equation." },

    { text: "θ = π/2, 3π/2", correct: false, choiceExplanation: " is incorrect because cosine is 0 at those angles.\n\nThen 2cos²θ - 1 = -1, not 0." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Convert the polar point (-4, π/6) to rectangular coordinates.",

  choices: [

    { text: "(-2√3, -2)", correct: true, choiceExplanation: " is correct because x = rcosθ and y = rsinθ.\n\nWith r = -4 and θ = π/6, x = -4(√3/2) = -2√3 and y = -4(1/2) = -2. A negative radius places the point opposite the angle direction." },

    { text: "(2√3, 2)", correct: false, choiceExplanation: " is incorrect because it treats the radius as positive.\n\nThe negative radius changes both coordinate signs." },

    { text: "(-2, -2√3)", correct: false, choiceExplanation: " is incorrect because sine and cosine values are swapped.\n\ncos(π/6) = √3/2 and sin(π/6) = 1/2." },

    { text: "(2√3, -2)", correct: false, choiceExplanation: " is incorrect because only one sign was changed.\n\nA negative radius multiplies both x and y by -1." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which polar representation is equivalent to the rectangular point (-3, -3)?",

  choices: [

    { text: "(3√2, 5π/4)", correct: true, choiceExplanation: " is correct because r = √((-3)² + (-3)²) = 3√2.\n\nThe point is in Quadrant III with reference angle π/4, so θ = 5π/4." },

    { text: "(3√2, π/4)", correct: false, choiceExplanation: " is incorrect because π/4 is in Quadrant I.\n\nThat would give positive x and positive y." },

    { text: "(-3√2, 5π/4)", correct: false, choiceExplanation: " is incorrect because using a negative radius at 5π/4 points to the opposite direction.\n\nThat would represent Quadrant I." },

    { text: "(6, 5π/4)", correct: false, choiceExplanation: " is incorrect because the radius is √18 = 3√2, not 6." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is equivalent to cos(θ + π/2)?",

  choices: [

    { text: "-sin(θ)", correct: true, choiceExplanation: " is correct because cos(θ + π/2) = cosθcos(π/2) - sinθsin(π/2).\n\nThis becomes 0 - sinθ = -sinθ." },

    { text: "sin(θ)", correct: false, choiceExplanation: " is incorrect because the sign is negative.\n\nA positive sine result would correspond to cos(π/2 - θ)." },

    { text: "-cos(θ)", correct: false, choiceExplanation: " is incorrect because shifting cosine by π changes it to -cosθ, not shifting by π/2." },

    { text: "cos(θ)", correct: false, choiceExplanation: " is incorrect because cosine changes under a π/2 phase shift." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "A sinusoidal function has midline y = -2, amplitude 5, and period 8. Which of the following could represent the function?",

  choices: [

    { text: "y = 5sin((π/4)x) - 2", correct: true, choiceExplanation: " is correct because amplitude is 5, vertical shift is -2, and period = 2π/(π/4) = 8.\n\nAll required features match." },

    { text: "y = 5sin(8x) - 2", correct: false, choiceExplanation: " is incorrect because the period would be 2π/8 = π/4, not 8." },

    { text: "y = -2sin((π/4)x) + 5", correct: false, choiceExplanation: " is incorrect because the amplitude would be 2 and the midline would be y = 5.\n\nThe values are reversed." },

    { text: "y = 5sin((4/π)x) - 2", correct: false, choiceExplanation: " is incorrect because the period would be 2π/(4/π) = π²/2, not 8." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which rectangular equation is equivalent to r = 6cos(θ)?",

  choices: [

    { text: "x² + y² = 6x", correct: true, choiceExplanation: " is correct because r = 6cosθ.\n\nMultiplying by r gives r² = 6r cosθ. Since r² = x² + y² and rcosθ = x, the equation becomes x² + y² = 6x." },

    { text: "x² + y² = 6y", correct: false, choiceExplanation: " is incorrect because sine corresponds to y.\n\nCosine corresponds to x." },

    { text: "x² + y² = 36x", correct: false, choiceExplanation: " is incorrect because the coefficient 6 is not squared.\n\nMultiplying by r gives 6x, not 36x." },

    { text: "x² + y² = 36", correct: false, choiceExplanation: " is incorrect because this would be a circle centered at the origin with radius 6.\n\nThe polar equation gives a shifted circle." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "For the polar curve r = 2 - 4sin(θ), what is r when θ = 3π/2?",

  choices: [

    { text: "6", correct: true, choiceExplanation: " is correct because sin(3π/2) = -1.\n\nSo r = 2 - 4(-1) = 6." },

    { text: "-2", correct: false, choiceExplanation: " is incorrect because -2 occurs when sinθ = 1.\n\nAt θ = 3π/2, sine is -1." },

    { text: "2", correct: false, choiceExplanation: " is incorrect because it ignores the sine term.\n\nThe sine term contributes +4 at θ = 3π/2." },

    { text: "-6", correct: false, choiceExplanation: " is incorrect because the signs were reversed.\n\n2 - 4(-1) = 6." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

 {

  prompt: "If cot(θ) = -5/12 and θ is in Quadrant II, what is csc(θ)?",

  choices: [

    { text: "13/12", correct: true, choiceExplanation: " is correct because cot(θ) = adjacent/opposite = cos(θ)/sin(θ).\n\nUsing a 5-12-13 triangle, sin has magnitude 12/13. In Quadrant II, sine is positive, so sin(θ) = 12/13. Therefore csc(θ) = 13/12." },

    { text: "-13/12", correct: false, choiceExplanation: " is incorrect because sine is positive in Quadrant II.\n\nSince csc is the reciprocal of sine, csc is also positive." },

    { text: "-13/5", correct: false, choiceExplanation: " is incorrect because this would correspond to secant based on cosine, not csc." },

    { text: "12/13", correct: false, choiceExplanation: " is incorrect because this is sin(θ), not csc(θ)." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the period of y = -2tan((π/3)x)?",

  choices: [

    { text: "3", correct: true, choiceExplanation: " is correct because tangent has base period π.\n\nFor tan(Bx), the period is π/|B|. Here B = π/3, so the period is π/(π/3) = 3." },

    { text: "6", correct: false, choiceExplanation: " is incorrect because 6 would come from using the sine/cosine period formula 2π/B.\n\nTangent’s base period is π, not 2π." },

    { text: "π/3", correct: false, choiceExplanation: " is incorrect because π/3 is the coefficient B, not the period." },

    { text: "3π", correct: false, choiceExplanation: " is incorrect because the π values cancel when computing π/(π/3)." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is the phase shift of y = 4sin(5x + 2π) - 3?",

  choices: [

    { text: "2π/5 to the left", correct: true, choiceExplanation: " is correct because 5x + 2π = 5(x + 2π/5).\n\nAn expression of x + 2π/5 indicates a shift left 2π/5." },

    { text: "2π to the left", correct: false, choiceExplanation: " is incorrect because the coefficient 5 must be factored out before identifying the shift." },

    { text: "2π/5 to the right", correct: false, choiceExplanation: " is incorrect because x + 2π/5 means left shift, not right shift." },

    { text: "5π/2 to the left", correct: false, choiceExplanation: " is incorrect because this divides incorrectly.\n\nThe shift is 2π/5." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Solve for θ in [0, 2π): 2sin²(θ) - 3sin(θ) + 1 = 0.",

  choices: [

    { text: "θ = π/6, π/2, 5π/6", correct: true, choiceExplanation: " is correct because factor the equation:\n\n2sin²θ - 3sinθ + 1 = (2sinθ - 1)(sinθ - 1) = 0.\n\nSo sinθ = 1/2 or sinθ = 1. In [0, 2π), sinθ = 1/2 at π/6 and 5π/6, and sinθ = 1 at π/2." },

    { text: "θ = π/6, 5π/6", correct: false, choiceExplanation: " is incorrect because it only includes the solutions from sinθ = 1/2.\n\nThe equation also gives sinθ = 1, so θ = π/2 must be included." },

    { text: "θ = π/2 only", correct: false, choiceExplanation: " is incorrect because it only includes the solution from sinθ = 1.\n\nThe equation also gives sinθ = 1/2." },

    { text: "θ = 7π/6, 11π/6", correct: false, choiceExplanation: " is incorrect because sine is negative at those angles.\n\nThe equation requires positive sine values." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Convert the polar point (-6, 2π/3) to rectangular coordinates.",

  choices: [

    { text: "(3, -3√3)", correct: true, choiceExplanation: " is correct because x = rcosθ and y = rsinθ.\n\ncos(2π/3) = -1/2 and sin(2π/3) = √3/2. With r = -6, x = -6(-1/2) = 3 and y = -6(√3/2) = -3√3." },

    { text: "(-3, 3√3)", correct: false, choiceExplanation: " is incorrect because this treats the radius as positive.\n\nA negative radius reverses the signs of both rectangular coordinates." },

    { text: "(3√3, -3)", correct: false, choiceExplanation: " is incorrect because sine and cosine values were swapped." },

    { text: "(-3√3, 3)", correct: false, choiceExplanation: " is incorrect because it uses the reference-angle values incorrectly and does not account for negative radius properly." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which polar representation is equivalent to the rectangular point (0, -5) with r > 0 and 0 ≤ θ < 2π?",

  choices: [

    { text: "(5, 3π/2)", correct: true, choiceExplanation: " is correct because the point lies on the negative y-axis.\n\nThe distance from the origin is 5, and the angle is 3π/2." },

    { text: "(5, π/2)", correct: false, choiceExplanation: " is incorrect because π/2 points upward on the positive y-axis." },

    { text: "(-5, 3π/2)", correct: false, choiceExplanation: " is incorrect because the prompt requires r > 0.\n\nA negative radius is not allowed in this requested form." },

    { text: "(0, 3π/2)", correct: false, choiceExplanation: " is incorrect because r = 0 represents the origin, not (0, -5)." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is equivalent to tan(θ + π)?",

  choices: [

    { text: "tan(θ)", correct: true, choiceExplanation: " is correct because tangent has period π.\n\nAdding π to the input does not change the value of tangent." },

    { text: "-tan(θ)", correct: false, choiceExplanation: " is incorrect because tangent repeats every π rather than changing sign after π." },

    { text: "cot(θ)", correct: false, choiceExplanation: " is incorrect because adding π does not turn tangent into cotangent." },

    { text: "-cot(θ)", correct: false, choiceExplanation: " is incorrect because this confuses reciprocal and phase-shift behavior." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "A sinusoidal function has maximum value 11, minimum value -5, and period 6. Which of the following could represent the function?",

  choices: [

    { text: "y = 8cos((π/3)x) + 3", correct: true, choiceExplanation: " is correct because amplitude = (11 - (-5))/2 = 8 and midline = (11 + (-5))/2 = 3.\n\nThe period is 2π/B = 6, so B = π/3. Thus y = 8cos((π/3)x) + 3 matches the conditions." },

    { text: "y = 16cos((π/3)x) + 6", correct: false, choiceExplanation: " is incorrect because 16 is the total vertical range, not the amplitude.\n\nThe midline is also 3, not 6." },

    { text: "y = 8cos(6x) + 3", correct: false, choiceExplanation: " is incorrect because the period would be 2π/6 = π/3, not 6." },

    { text: "y = 3cos((π/3)x) + 8", correct: false, choiceExplanation: " is incorrect because it swaps the amplitude and midline.\n\nThe amplitude must be 8 and the midline must be y = 3." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which rectangular equation is equivalent to r = -8sin(θ)?",

  choices: [

    { text: "x² + y² = -8y", correct: true, choiceExplanation: " is correct because r = -8sinθ.\n\nMultiplying by r gives r² = -8r sinθ. Since r² = x² + y² and r sinθ = y, the rectangular equation is x² + y² = -8y." },

    { text: "x² + y² = -8x", correct: false, choiceExplanation: " is incorrect because cosine corresponds to x, while sine corresponds to y." },

    { text: "x² + y² = 64y", correct: false, choiceExplanation: " is incorrect because the coefficient is not squared.\n\nMultiplying by r gives -8y, not 64y." },

    { text: "x² + y² = 8y", correct: false, choiceExplanation: " is incorrect because the sign is wrong.\n\nThe negative sign in the polar equation must remain." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "For the polar curve r = 3 + 6cos(θ), what is r when θ = π?",

  choices: [

    { text: "-3", correct: true, choiceExplanation: " is correct because cos(π) = -1.\n\nSo r = 3 + 6(-1) = -3. A negative r means the point is plotted opposite the direction θ." },

    { text: "3", correct: false, choiceExplanation: " is incorrect because it ignores the cosine term at θ = π.\n\nThe cosine term contributes -6." },

    { text: "9", correct: false, choiceExplanation: " is incorrect because r = 9 occurs when cosθ = 1, such as θ = 0." },

    { text: "0", correct: false, choiceExplanation: " is incorrect because 3 - 6 = -3, not 0." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

}                          


],

     passages: [

{

  title: "Sinusoidal Modeling and Parameter Misinterpretation",

  text: "A function is modeled by f(x) = A sin(Bx + C) + D. A student observes a graph with maximum value 10, minimum value -2, and period π. The graph also passes through the midline at x = 0 while increasing. The student incorrectly determines that B = π because the period is π.",

  questions: [

{

  prompt: "Which of the following is the correct value of B?",

  choices: [

    { text: "2", correct: true, choiceExplanation: " is correct because the period of sin(Bx) is 2π/B.\n\nGiven period = π, we solve 2π/B = π → B = 2." },

    { text: "π", correct: false, choiceExplanation: " is incorrect because B is not equal to the period.\n\nB is related inversely to the period." },

    { text: "1/π", correct: false, choiceExplanation: " is incorrect because this would produce a period of 2π², not π." },

    { text: "1", correct: false, choiceExplanation: " is incorrect because this would give a period of 2π, not π." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following is the correct amplitude and midline of the function?",

  choices: [

    { text: "Amplitude 6, midline y = 4", correct: true, choiceExplanation: " is correct because amplitude = (max - min)/2 = (10 - (-2))/2 = 6.\n\nMidline = (10 + (-2))/2 = 4." },

    { text: "Amplitude 12, midline y = 4", correct: false, choiceExplanation: " is incorrect because 12 is the total vertical range, not the amplitude.\n\nAmplitude is half the range." },

    { text: "Amplitude 6, midline y = -2", correct: false, choiceExplanation: " is incorrect because -2 is the minimum value, not the midline." },

    { text: "Amplitude 4, midline y = 6", correct: false, choiceExplanation: " is incorrect because both values are miscalculated.\n\nCheck the average and half-distance properly." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What does the condition that the graph passes through the midline at x = 0 while increasing imply about C?",

  choices: [

    { text: "C = 0", correct: true, choiceExplanation: " is correct because sin(0) = 0 and the function crosses the midline at x = 0.\n\nSince it is increasing, it matches the standard sine curve with no phase shift." },

    { text: "C = π/2", correct: false, choiceExplanation: " is incorrect because this would place the function at a maximum at x = 0." },

    { text: "C = -π/2", correct: false, choiceExplanation: " is incorrect because this would place the function at a minimum at x = 0." },

    { text: "C = π", correct: false, choiceExplanation: " is incorrect because this would shift the function so it crosses the midline decreasing, not increasing." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

}

  ]

},

{

  title: "Polar Graph Interpretation and Sign Confusion",

  text: "A polar equation is given as r = -4cos(θ). A student claims that this represents a circle centered at (2, 0) with radius 2 because the equation resembles r = a cos(θ).",

  questions: [

{

  prompt: "Which of the following is the correct rectangular form of the equation?",

  choices: [

    { text: "x² + y² = -4x", correct: true, choiceExplanation: " is correct because multiplying both sides by r gives r² = -4r cos(θ).\n\nSubstitute r² = x² + y² and rcos(θ) = x to get x² + y² = -4x." },

    { text: "x² + y² = 4x", correct: false, choiceExplanation: " is incorrect because it ignores the negative sign in the original equation.\n\nThe negative flips the direction of the graph." },

    { text: "x² + y² = -4y", correct: false, choiceExplanation: " is incorrect because cosine corresponds to x, not y." },

    { text: "x² + y² = 4y", correct: false, choiceExplanation: " is incorrect because this corresponds to a sine-based equation." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following best describes the graph?",

  choices: [

    { text: "A circle centered at (-2, 0) with radius 2", correct: true, choiceExplanation: " is correct because x² + y² = -4x rewrites to (x + 2)² + y² = 4.\n\nThis is a circle centered at (-2, 0) with radius 2." },

    { text: "A circle centered at (2, 0) with radius 2", correct: false, choiceExplanation: " is incorrect because this ignores the negative sign, which shifts the circle left, not right." },

    { text: "A circle centered at (0, -2) with radius 2", correct: false, choiceExplanation: " is incorrect because this would result from a sine-based equation." },

    { text: "A line through the origin", correct: false, choiceExplanation: " is incorrect because the equation produces a circle, not a line." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the main conceptual mistake the student made?",

  choices: [

    { text: "Ignoring the effect of a negative radius on the graph’s direction", correct: true, choiceExplanation: " is correct because a negative radius reflects the graph across the origin.\n\nThis changes the location of the circle." },

    { text: "Confusing sine and cosine relationships", correct: false, choiceExplanation: " is incorrect because the student correctly identified the cosine structure." },

    { text: "Using the wrong formula for converting to rectangular form", correct: false, choiceExplanation: " is incorrect because the method is correct.\n\nThe issue is with interpreting the sign." },

    { text: "Assuming the graph is not a circle", correct: false, choiceExplanation: " is incorrect because the graph is still a circle.\n\nThe problem is its position." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

}

  ]

},

  {

  title: "Trigonometric Equation Structure and Extraneous Reasoning",

  text: "A student attempts to solve the equation 2sin²(θ) - sin(θ) - 1 = 0 on the interval [0, 2π). The student factors correctly but concludes that there are only two solutions because sine cannot equal negative values for this problem.",

  questions: [

{

  prompt: "Which of the following is the complete solution set?",

  choices: [

    { text: "θ = π/2, 7π/6, 11π/6", correct: true, choiceExplanation: " is correct because factoring gives (2sinθ + 1)(sinθ - 1) = 0.\n\nSo sinθ = -1/2 or sinθ = 1. On [0, 2π), sinθ = 1 at π/2 and sinθ = -1/2 at 7π/6 and 11π/6." },

    { text: "θ = π/2 only", correct: false, choiceExplanation: " is incorrect because it ignores the solutions from sinθ = -1/2.\n\nNegative sine values are valid depending on quadrant." },

    { text: "θ = 7π/6, 11π/6", correct: false, choiceExplanation: " is incorrect because it ignores the solution sinθ = 1 at θ = π/2." },

    { text: "θ = π/6, 5π/6", correct: false, choiceExplanation: " is incorrect because these correspond to sinθ = 1/2, not -1/2 or 1." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the student's conceptual mistake?",

  choices: [

    { text: "Assuming sine values must be positive", correct: true, choiceExplanation: " is correct because sine can be negative depending on the quadrant.\n\nThe student incorrectly restricted the range of sine." },

    { text: "Factoring incorrectly", correct: false, choiceExplanation: " is incorrect because the factoring step was done correctly.\n\nThe error occurs after factoring." },

    { text: "Using degrees instead of radians", correct: false, choiceExplanation: " is incorrect because the problem is clearly in radians.\n\nThis is unrelated to the mistake." },

    { text: "Failing to square both sides", correct: false, choiceExplanation: " is incorrect because the equation is already quadratic in sine.\n\nNo squaring step is required." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which reasoning correctly explains why θ = 7π/6 is a solution?",

  choices: [

    { text: "Because sin(7π/6) = -1/2, which satisfies one of the factored equations", correct: true, choiceExplanation: " is correct because sin(7π/6) = -1/2.\n\nThis satisfies the factor 2sinθ + 1 = 0." },

    { text: "Because cos(7π/6) = -√3/2", correct: false, choiceExplanation: " is incorrect because cosine is not part of the equation.\n\nOnly sine values matter here." },

    { text: "Because 7π/6 is in Quadrant II", correct: false, choiceExplanation: " is incorrect because 7π/6 is actually in Quadrant III.\n\nAlso, quadrant alone does not prove the value." },

    { text: "Because sin(7π/6) = 1/2", correct: false, choiceExplanation: " is incorrect because sine is negative in Quadrant III.\n\nThe value is -1/2." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

}

  ]

},

{

  title: "Polar Conversion and Quadrant Misinterpretation",

  text: "A point is given in rectangular form as (-√3, 1). A student converts the point to polar coordinates and states that the angle is π/6 because tan(θ) = 1/√3.",

  questions: [

{

  prompt: "Which of the following is the correct polar form (r > 0, 0 ≤ θ < 2π)?",

  choices: [

    { text: "(2, 5π/6)", correct: true, choiceExplanation: " is correct because r = √((-√3)² + 1²) = √(3 + 1) = 2.\n\nThe point lies in Quadrant II, so θ = π - π/6 = 5π/6." },

    { text: "(2, π/6)", correct: false, choiceExplanation: " is incorrect because π/6 is in Quadrant I.\n\nThe signs of x and y place the point in Quadrant II." },

    { text: "(2, 7π/6)", correct: false, choiceExplanation: " is incorrect because 7π/6 is in Quadrant III.\n\nThat would require both x and y to be negative." },

    { text: "(√3, 5π/6)", correct: false, choiceExplanation: " is incorrect because the radius is √4 = 2, not √3." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the student's main conceptual error?",

  choices: [

    { text: "Failing to account for the correct quadrant when determining θ", correct: true, choiceExplanation: " is correct because arctan gives a reference angle, not the actual angle.\n\nThe signs of x and y must be used to determine the correct quadrant." },

    { text: "Using tangent instead of sine", correct: false, choiceExplanation: " is incorrect because tangent is a valid method for finding the reference angle." },

    { text: "Computing the radius incorrectly", correct: false, choiceExplanation: " is incorrect because the radius was not the source of error.\n\nThe mistake is in determining the angle." },

    { text: "Using radians instead of degrees", correct: false, choiceExplanation: " is incorrect because the problem is already in radians.\n\nUnit choice is not the issue." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which reasoning correctly justifies θ = 5π/6?",

  choices: [

    { text: "Because the reference angle is π/6 and the point lies in Quadrant II", correct: true, choiceExplanation: " is correct because tan⁻¹(1/√3) = π/6.\n\nSince x is negative and y is positive, the point lies in Quadrant II, so θ = π - π/6 = 5π/6." },

    { text: "Because cosine is positive at π/6", correct: false, choiceExplanation: " is incorrect because cosine is negative in Quadrant II.\n\nThe sign must match the coordinates." },

    { text: "Because sine is negative at π/6", correct: false, choiceExplanation: " is incorrect because sine is positive at π/6.\n\nThe reasoning does not match the coordinate signs." },

    { text: "Because π/6 and 5π/6 are equivalent angles", correct: false, choiceExplanation: " is incorrect because they are not coterminal.\n\nThey lie in different quadrants." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

}

  ]

},

  {

  title: "Sinusoidal Transformation Trap and Graph Interpretation",

  text: "A function is defined as f(x) = -2cos(πx - π) + 3. A student claims the graph has a phase shift of π units to the right and a period of π because π appears in the equation.",

  questions: [

{

  prompt: "Which of the following is the correct period of f(x)?",

  choices: [

    { text: "2", correct: true, choiceExplanation: " is correct because the period of cos(Bx) is 2π/B.\n\nHere B = π, so period = 2π/π = 2." },

    { text: "π", correct: false, choiceExplanation: " is incorrect because π is the coefficient B, not the period.\n\nThe period is found by dividing 2π by B." },

    { text: "1/π", correct: false, choiceExplanation: " is incorrect because this would give a much larger period, not smaller." },

    { text: "2π", correct: false, choiceExplanation: " is incorrect because this is the base cosine period before scaling." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the correct phase shift of f(x)?",

  choices: [

    { text: "1 unit to the right", correct: true, choiceExplanation: " is correct because πx - π = π(x - 1).\n\nThus the graph shifts right by 1 unit." },

    { text: "π units to the right", correct: false, choiceExplanation: " is incorrect because the phase shift is determined after factoring out π.\n\nThe shift is 1, not π." },

    { text: "1 unit to the left", correct: false, choiceExplanation: " is incorrect because x - 1 indicates a right shift.\n\nA left shift would be x + 1." },

    { text: "No phase shift", correct: false, choiceExplanation: " is incorrect because the expression clearly contains a horizontal translation." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following best explains the student's mistake?",

  choices: [

    { text: "They failed to factor out the coefficient of x before identifying the phase shift and period", correct: true, choiceExplanation: " is correct because both period and phase shift depend on the coefficient of x.\n\nYou must factor first to interpret correctly." },

    { text: "They ignored the vertical shift", correct: false, choiceExplanation: " is incorrect because the vertical shift does not affect period or phase shift." },

    { text: "They confused sine and cosine", correct: false, choiceExplanation: " is incorrect because the function is correctly identified as cosine.\n\nThe error is in transformation interpretation." },

    { text: "They assumed the amplitude was negative", correct: false, choiceExplanation: " is incorrect because amplitude is always positive and unrelated to the error described." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

}

  ]

},

{

  title: "Polar Equation Behavior and Negative Radius Confusion",

  text: "A polar equation is given as r = 2 - 4sin(θ). A student claims that the graph is always nonnegative because r represents distance, and therefore the graph cannot cross the pole.",

  questions: [

{

  prompt: "What is the value of r when θ = π/2?",

  choices: [

    { text: "-2", correct: true, choiceExplanation: " is correct because sin(π/2) = 1.\n\nSo r = 2 - 4(1) = -2. A negative r means the point is plotted in the opposite direction." },

    { text: "2", correct: false, choiceExplanation: " is incorrect because it ignores the sine term.\n\nThe sine term contributes -4." },

    { text: "6", correct: false, choiceExplanation: " is incorrect because this would occur if sin(θ) = -1, not 1." },

    { text: "0", correct: false, choiceExplanation: " is incorrect because the calculation gives -2, not 0." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which statement best explains why the student's claim is incorrect?",

  choices: [

    { text: "Polar coordinates allow negative r, which reflects the point across the origin", correct: true, choiceExplanation: " is correct because a negative radius places the point in the opposite direction of θ.\n\nThus the graph can cross the pole." },

    { text: "Distance in polar form can be negative only for special angles", correct: false, choiceExplanation: " is incorrect because negative r is allowed for all θ.\n\nIt is not restricted to specific angles." },

    { text: "The sine function cannot produce negative values", correct: false, choiceExplanation: " is incorrect because sine is negative in Quadrants III and IV." },

    { text: "The graph must always remain in Quadrant I", correct: false, choiceExplanation: " is incorrect because polar graphs can occupy all quadrants." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which of the following values of θ produces a point at the pole (r = 0)?",

  choices: [

    { text: "θ = π/6, 5π/6", correct: true, choiceExplanation: " is correct because r = 0 when 2 - 4sinθ = 0.\n\nSo sinθ = 1/2, which occurs at π/6 and 5π/6." },

    { text: "θ = π/2", correct: false, choiceExplanation: " is incorrect because sin(π/2) = 1, giving r = -2, not 0." },

    { text: "θ = 3π/2", correct: false, choiceExplanation: " is incorrect because sin(3π/2) = -1, giving r = 6." },

    { text: "θ = 0, π", correct: false, choiceExplanation: " is incorrect because sin(0) = 0 and sin(π) = 0, giving r = 2, not 0." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

}

  ]

},

  {

  title: "Trigonometric Identity Misapplication in Equation Solving",

  text: "A student is solving the equation cos(2θ) = sin(θ) on the interval [0, 2π). The student rewrites cos(2θ) as 1 - sin²(θ) and sets 1 - sin²(θ) = sin(θ), but incorrectly concludes that sin(θ) = 1 is the only solution.",

  questions: [

{

  prompt: "Which of the following is the complete solution set?",

  choices: [

    { text: "θ = π/2, π/6, 5π/6", correct: true, choiceExplanation: " is correct because rewriting gives 1 - sin²θ = sinθ → sin²θ + sinθ - 1 = 0.\n\nSolve using quadratic formula: sinθ = (-1 ± √5)/2.\n\nOnly sinθ = (-1 + √5)/2 ≈ 0.618 is valid in [-1,1], plus sinθ = 1.\n\nThus θ = π/2 and the two angles where sinθ ≈ 0.618, which are π/6 and 5π/6 approximations." },

    { text: "θ = π/2 only", correct: false, choiceExplanation: " is incorrect because it ignores the solutions from the quadratic equation.\n\nsinθ = 1 is not the only valid value." },

    { text: "θ = π/6, 5π/6 only", correct: false, choiceExplanation: " is incorrect because it ignores the solution sinθ = 1 at θ = π/2." },

    { text: "θ = 0, π", correct: false, choiceExplanation: " is incorrect because these correspond to sinθ = 0, which does not satisfy the equation." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the student's primary mistake?",

  choices: [

    { text: "Failing to solve the quadratic equation completely", correct: true, choiceExplanation: " is correct because the student stopped after identifying one solution.\n\nThey did not solve for all possible values of sinθ." },

    { text: "Using the wrong identity for cos(2θ)", correct: false, choiceExplanation: " is incorrect because cos(2θ) = 1 - sin²θ is a valid identity.\n\nThe issue is not the identity used." },

    { text: "Confusing sine and cosine values", correct: false, choiceExplanation: " is incorrect because the substitution was done correctly.\n\nThe mistake is in solving the resulting equation." },

    { text: "Using radians instead of degrees", correct: false, choiceExplanation: " is incorrect because the problem is already in radians.\n\nThis is unrelated to the error." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Why is sin(θ) = (-1 - √5)/2 rejected?",

  choices: [

    { text: "Because it is less than -1 and outside the range of sine", correct: true, choiceExplanation: " is correct because (-1 - √5)/2 ≈ -1.618, which is not possible for sine.\n\nSine values must be between -1 and 1." },

    { text: "Because it produces angles outside [0, 2π)", correct: false, choiceExplanation: " is incorrect because the rejection is based on the sine value itself, not the resulting angles." },

    { text: "Because cosine cannot equal sine for negative values", correct: false, choiceExplanation: " is incorrect because sine and cosine can both be negative depending on the quadrant." },

    { text: "Because the identity only works for positive sine values", correct: false, choiceExplanation: " is incorrect because the identity holds for all real θ." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

}

  ]

},

{

  title: "Polar–Rectangular Conversion and Circle Interpretation Trap",

  text: "A polar equation is given as r = 6cos(θ) - 2. A student attempts to convert it to rectangular form by multiplying both sides by r and incorrectly concludes that the graph is centered at the origin.",

  questions: [

{

  prompt: "Which of the following is the correct rectangular form?",

  choices: [

    { text: "x² + y² + 2r = 6x", correct: true, choiceExplanation: " is correct because multiply both sides by r:\n\nr² = 6r cosθ - 2r.\n\nSubstitute r² = x² + y² and rcosθ = x to get x² + y² = 6x - 2r.\n\nRewriting gives x² + y² + 2r = 6x." },

    { text: "x² + y² = 6x - 2", correct: false, choiceExplanation: " is incorrect because it treats r as a constant when it is actually √(x² + y²).\n\nThe -2 must be multiplied by r." },

    { text: "x² + y² = 6x", correct: false, choiceExplanation: " is incorrect because it ignores the -2r term entirely.\n\nThis changes the graph significantly." },

    { text: "x² + y² = 6x - 2x", correct: false, choiceExplanation: " is incorrect because it incorrectly replaces r with x.\n\nr is not equal to x." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which statement best explains why the graph is not centered at the origin?",

  choices: [

    { text: "The presence of both x and r terms shifts the graph away from the origin", correct: true, choiceExplanation: " is correct because the equation includes both x² + y² and linear terms in x and r.\n\nThis indicates the graph is not centered at the origin." },

    { text: "The cosine function always produces horizontal shifts", correct: false, choiceExplanation: " is incorrect because cosine alone does not guarantee the center location.\n\nThe equation structure determines the center." },

    { text: "The graph must be a circle centered at the origin because it contains r²", correct: false, choiceExplanation: " is incorrect because additional terms shift the center.\n\nr² alone does not guarantee origin-centered symmetry." },

    { text: "Polar equations cannot represent shifted graphs", correct: false, choiceExplanation: " is incorrect because polar equations can represent many shifted shapes." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the key algebraic mistake the student made?",

  choices: [

    { text: "Treating r as a constant instead of √(x² + y²)", correct: true, choiceExplanation: " is correct because r depends on x and y.\n\nFailing to substitute properly leads to an incorrect rectangular equation." },

    { text: "Using cosine instead of sine", correct: false, choiceExplanation: " is incorrect because cosine is correctly used in the equation." },

    { text: "Squaring both sides unnecessarily", correct: false, choiceExplanation: " is incorrect because squaring was not the issue here." },

    { text: "Forgetting to convert radians to degrees", correct: false, choiceExplanation: " is incorrect because unit conversion is irrelevant in this context." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

}

  ]

},

  {

  title: "Inverse Trigonometric Reasoning and Restriction Trap",

  text: "A student is solving the equation sin(θ) = 1/2 and states that θ = π/6 is the only solution because sin⁻¹(1/2) = π/6. The student concludes that inverse trigonometric functions always give all possible solutions.",

  questions: [

{

  prompt: "Which of the following is the complete solution set for sin(θ) = 1/2 on [0, 2π)?",

  choices: [

    { text: "θ = π/6, 5π/6", correct: true, choiceExplanation: " is correct because sin(θ) = 1/2 has reference angle π/6.\n\nSine is positive in Quadrants I and II, so θ = π/6 and 5π/6." },

    { text: "θ = π/6 only", correct: false, choiceExplanation: " is incorrect because inverse sine gives only the principal value.\n\nThe second solution in Quadrant II must also be included." },

    { text: "θ = 5π/6 only", correct: false, choiceExplanation: " is incorrect because π/6 is also a valid solution in Quadrant I." },

    { text: "θ = 7π/6, 11π/6", correct: false, choiceExplanation: " is incorrect because sine is negative in Quadrants III and IV." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the student's conceptual mistake?",

  choices: [

    { text: "Assuming inverse trigonometric functions provide all solutions instead of only principal values", correct: true, choiceExplanation: " is correct because sin⁻¹(x) gives only one value in its restricted range.\n\nAdditional solutions must be found using symmetry." },

    { text: "Using radians instead of degrees", correct: false, choiceExplanation: " is incorrect because the unit system does not affect the number of solutions." },

    { text: "Confusing sine with cosine", correct: false, choiceExplanation: " is incorrect because the function used is correct.\n\nThe issue is interpretation." },

    { text: "Solving the equation algebraically instead of graphically", correct: false, choiceExplanation: " is incorrect because algebraic solving is valid.\n\nThe error lies in incomplete reasoning." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Why does sin⁻¹(1/2) only return π/6 and not 5π/6?",

  choices: [

    { text: "Because the range of sin⁻¹(x) is restricted to [-π/2, π/2]", correct: true, choiceExplanation: " is correct because inverse sine is defined to return values only in its principal interval.\n\nThus it cannot return angles in Quadrant II." },

    { text: "Because sine is not defined in Quadrant II", correct: false, choiceExplanation: " is incorrect because sine is positive in Quadrant II.\n\nThe restriction is on the inverse function, not sine itself." },

    { text: "Because π/6 and 5π/6 are not equivalent angles", correct: false, choiceExplanation: " is incorrect because both produce the same sine value.\n\nThe issue is the restricted output of the inverse function." },

    { text: "Because inverse sine only works for acute angles", correct: false, choiceExplanation: " is incorrect because its range includes negative angles as well.\n\nIt is not limited to acute angles only." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

}

  ]

},

{

  title: "Polar Graph Symmetry and Transformation Misinterpretation",

  text: "A polar equation is given as r = 4 + 4cos(θ). A student claims that the graph is symmetric about the y-axis because cosine is an even function, and therefore replacing θ with -θ should reflect across the y-axis.",

  questions: [

{

  prompt: "Which of the following best describes the symmetry of the graph?",

  choices: [

    { text: "Symmetric about the polar axis (x-axis)", correct: true, choiceExplanation: " is correct because replacing θ with -θ gives r = 4 + 4cos(-θ) = 4 + 4cos(θ).\n\nThus the graph is symmetric about the polar axis (x-axis)." },

    { text: "Symmetric about the y-axis", correct: false, choiceExplanation: " is incorrect because y-axis symmetry requires replacing θ with π - θ.\n\nThis does not preserve the equation." },

    { text: "Symmetric about the origin", correct: false, choiceExplanation: " is incorrect because origin symmetry requires replacing r with -r or θ with θ + π.\n\nThis does not leave the equation unchanged." },

    { text: "Not symmetric at all", correct: false, choiceExplanation: " is incorrect because the equation clearly has symmetry due to the cosine function." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "What is the student's main conceptual error?",

  choices: [

    { text: "Confusing symmetry about the polar axis with symmetry about the y-axis", correct: true, choiceExplanation: " is correct because replacing θ with -θ tests symmetry about the polar axis, not the y-axis.\n\nThe student misinterpreted the transformation." },

    { text: "Assuming cosine is not even", correct: false, choiceExplanation: " is incorrect because cosine is indeed even.\n\nThe issue is how symmetry is interpreted in polar coordinates." },

    { text: "Failing to evaluate the function at specific points", correct: false, choiceExplanation: " is incorrect because the mistake is conceptual, not computational." },

    { text: "Using rectangular reasoning instead of polar reasoning", correct: false, choiceExplanation: " is partially misleading but not the core issue.\n\nThe main error is misunderstanding symmetry tests." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

},

{

  prompt: "Which test would correctly determine symmetry about the y-axis?",

  choices: [

    { text: "Replace θ with π - θ", correct: true, choiceExplanation: " is correct because y-axis symmetry in polar coordinates is tested by substituting θ → π - θ.\n\nIf the equation remains unchanged, the graph is symmetric about the y-axis." },

    { text: "Replace θ with -θ", correct: false, choiceExplanation: " is incorrect because this tests symmetry about the polar axis (x-axis)." },

    { text: "Replace r with -r", correct: false, choiceExplanation: " is incorrect because this tests symmetry about the origin." },

    { text: "Replace θ with θ + π", correct: false, choiceExplanation: " is incorrect because this tests rotational symmetry about the origin." }

  ],

  category: "Unit 3: Trigonometric and Polar Functions"

}

  ]

}
       
     ]
  
});
