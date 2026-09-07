window.questionBanks = window.questionBanks || {};
window.questionBanks.apChem = window.questionBanks.apChem || [];

window.questionBanks.apChem.push({
  name: "Unit 7: Equilibrium",

  rapidQuestions: [
{
  prompt: "What defines dynamic equilibrium?",
  choices: [
    { text: "Reaction stops completely", correct: false, choiceExplanation: " is incorrect because reactions continue." },
    { text: "Forward and reverse rates are equal", correct: true, choiceExplanation: " is correct because equilibrium is dynamic." },
    { text: "Only products remain", correct: false, choiceExplanation: " is incorrect because both are present." },
    { text: "Only reactants remain", correct: false, choiceExplanation: " is incorrect because reaction proceeds." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "What does the equilibrium constant (K) represent?",
  choices: [
    { text: "Rate of reaction", correct: false, choiceExplanation: " is incorrect because K is not about speed." },
    { text: "Ratio of products to reactants at equilibrium", correct: true, choiceExplanation: " is correct because K compares concentrations." },
    { text: "Energy change", correct: false, choiceExplanation: " is incorrect because this is ΔH." },
    { text: "Temperature change", correct: false, choiceExplanation: " is incorrect because K is not ΔT." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "If K >> 1, what is true about the system?",
  choices: [
    { text: "Reactants are favored", correct: false, choiceExplanation: " is incorrect because products dominate." },
    { text: "Products are favored", correct: true, choiceExplanation: " is correct because numerator is larger." },
    { text: "Equal amounts exist", correct: false, choiceExplanation: " is incorrect because K is large." },
    { text: "Reaction stops", correct: false, choiceExplanation: " is incorrect because equilibrium is dynamic." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "If K << 1, what is true?",
  choices: [
    { text: "Products dominate", correct: false, choiceExplanation: " is incorrect because reactants dominate." },
    { text: "Reactants are favored", correct: true, choiceExplanation: " is correct because denominator is larger." },
    { text: "Equal amounts exist", correct: false, choiceExplanation: " is incorrect because K is small." },
    { text: "Reaction is fast", correct: false, choiceExplanation: " is incorrect because rate is unrelated." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "What does Q (reaction quotient) represent?",
  choices: [
    { text: "Equilibrium constant", correct: false, choiceExplanation: " is incorrect because Q is current state." },
    { text: "Current ratio of products to reactants", correct: true, choiceExplanation: " is correct because Q uses current concentrations." },
    { text: "Rate of reaction", correct: false, choiceExplanation: " is incorrect because not about speed." },
    { text: "Energy released", correct: false, choiceExplanation: " is incorrect because this is thermodynamics." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "If Q < K, what will happen?",
  choices: [
    { text: "Shift left", correct: false, choiceExplanation: " is incorrect because system needs more products." },
    { text: "Shift right", correct: true, choiceExplanation: " is correct because products must increase." },
    { text: "No change", correct: false, choiceExplanation: " is incorrect because not at equilibrium." },
    { text: "Reaction stops", correct: false, choiceExplanation: " is incorrect because equilibrium not reached." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "If Q > K, what will happen?",
  choices: [
    { text: "Shift right", correct: false, choiceExplanation: " is incorrect because too many products exist." },
    { text: "Shift left", correct: true, choiceExplanation: " is correct because system forms reactants." },
    { text: "No change", correct: false, choiceExplanation: " is incorrect because not at equilibrium." },
    { text: "Reaction speeds up", correct: false, choiceExplanation: " is incorrect because rate is unrelated." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "Which species are NOT included in equilibrium expressions?",
  choices: [
    { text: "Gases", correct: false, choiceExplanation: " is incorrect because gases are included." },
    { text: "Aqueous solutions", correct: false, choiceExplanation: " is incorrect because they are included." },
    { text: "Solids", correct: true, choiceExplanation: " is correct because pure solids are omitted." },
    { text: "Ions", correct: false, choiceExplanation: " is incorrect because ions are included." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "Which species are also excluded from K?",
  choices: [
    { text: "Liquids", correct: true, choiceExplanation: " is correct because pure liquids are omitted." },
    { text: "Gases", correct: false, choiceExplanation: " is incorrect because gases are included." },
    { text: "Aqueous", correct: false, choiceExplanation: " is incorrect because they are included." },
    { text: "Products", correct: false, choiceExplanation: " is incorrect because products are included." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "What effect does a catalyst have on equilibrium?",
  choices: [
    { text: "Changes K", correct: false, choiceExplanation: " is incorrect because K depends on temperature." },
    { text: "Shifts equilibrium", correct: false, choiceExplanation: " is incorrect because position is unchanged." },
    { text: "Speeds up reaching equilibrium", correct: true, choiceExplanation: " is correct because both rates increase equally." },
    { text: "Stops reaction", correct: false, choiceExplanation: " is incorrect because reaction continues." }
  ],
  category: "Unit 7: Equilibrium"
},

{

  prompt: "For the reaction: A ⇌ 2B, what is the correct expression for K?",

  choices: [

    { text: "[B]/[A]", correct: false, choiceExplanation: " is incorrect because coefficients become exponents." },

    { text: "[B]²/[A]", correct: true, choiceExplanation: " is correct because B has coefficient 2." },

    { text: "[A]/[B]²", correct: false, choiceExplanation: " is incorrect because ratio is inverted." },

    { text: "2[B]/[A]", correct: false, choiceExplanation: " is incorrect because coefficients are exponents, not multipliers." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "For A ⇌ B, if K = 5.0 and [A] = 2.0 M at equilibrium, what is [B]?",

  choices: [

    { text: "2.5 M", correct: false, choiceExplanation: " is incorrect because K = [B]/[A]." },

    { text: "10.0 M", correct: true, choiceExplanation: " is correct because B = 5 × 2." },

    { text: "0.4 M", correct: false, choiceExplanation: " is incorrect because ratio is inverted." },

    { text: "5.0 M", correct: false, choiceExplanation: " is incorrect because A ≠ 1." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "For the reaction: 2A ⇌ B, how does doubling the equation affect K?",

  choices: [

    { text: "K doubles", correct: false, choiceExplanation: " is incorrect because not linear." },

    { text: "K is squared", correct: true, choiceExplanation: " is correct because coefficients scale exponents." },

    { text: "K halves", correct: false, choiceExplanation: " is incorrect because not inverse." },

    { text: "K stays the same", correct: false, choiceExplanation: " is incorrect because coefficients change K." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "If a reaction is reversed, what happens to K?",

  choices: [

    { text: "K stays the same", correct: false, choiceExplanation: " is incorrect because ratio flips." },

    { text: "K becomes 1/K", correct: true, choiceExplanation: " is correct because products and reactants switch." },

    { text: "K doubles", correct: false, choiceExplanation: " is incorrect because not linear." },

    { text: "K becomes zero", correct: false, choiceExplanation: " is incorrect because equilibrium still exists." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "If K = 0.20 and Q = 0.05, what will happen?",

  choices: [

    { text: "Shift left", correct: false, choiceExplanation: " is incorrect because Q < K." },

    { text: "Shift right", correct: true, choiceExplanation: " is correct because products must increase." },

    { text: "No change", correct: false, choiceExplanation: " is incorrect because not at equilibrium." },

    { text: "Reaction stops", correct: false, choiceExplanation: " is incorrect because equilibrium not reached." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "If K = 0.20 and Q = 1.0, what will happen?",

  choices: [

    { text: "Shift right", correct: false, choiceExplanation: " is incorrect because Q > K." },

    { text: "Shift left", correct: true, choiceExplanation: " is correct because system forms reactants." },

    { text: "No change", correct: false, choiceExplanation: " is incorrect because not at equilibrium." },

    { text: "Reaction speeds up", correct: false, choiceExplanation: " is incorrect because rate is unrelated." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "For A ⇌ B, initial [A] = 1.0 M, [B] = 0.0 M. At equilibrium [B] = 0.30 M. What is [A]?",

  choices: [

    { text: "0.70 M", correct: true, choiceExplanation: " is correct because A decreases by 0.30." },

    { text: "1.30 M", correct: false, choiceExplanation: " is incorrect because A is consumed." },

    { text: "0.30 M", correct: false, choiceExplanation: " is incorrect because that is B." },

    { text: "1.0 M", correct: false, choiceExplanation: " is incorrect because reaction occurred." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "Which equilibrium expression is correct for: 2NO₂ ⇌ N₂O₄?",

  choices: [

    { text: "[N₂O₄]/[NO₂]²", correct: true, choiceExplanation: " is correct because coefficient becomes exponent." },

    { text: "[NO₂]²/[N₂O₄]", correct: false, choiceExplanation: " is incorrect because ratio is reversed." },

    { text: "2[N₂O₄]/[NO₂]", correct: false, choiceExplanation: " is incorrect because coefficients are exponents." },

    { text: "[N₂O₄]²/[NO₂]", correct: false, choiceExplanation: " is incorrect because exponents are incorrect." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "If all coefficients in a reaction are halved, what happens to K?",

  choices: [

    { text: "K doubles", correct: false, choiceExplanation: " is incorrect because not linear." },

    { text: "K is square-rooted", correct: true, choiceExplanation: " is correct because exponents are halved." },

    { text: "K halves", correct: false, choiceExplanation: " is incorrect because not linear." },

    { text: "K stays the same", correct: false, choiceExplanation: " is incorrect because coefficients affect K." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "Which statement is ALWAYS true at equilibrium?",

  choices: [

    { text: "Concentrations are equal", correct: false, choiceExplanation: " is incorrect because depends on K." },

    { text: "Forward rate equals reverse rate", correct: true, choiceExplanation: " is correct by definition." },

    { text: "All reactants are gone", correct: false, choiceExplanation: " is incorrect because equilibrium is dynamic." },

    { text: "Reaction stops", correct: false, choiceExplanation: " is incorrect because reactions continue." }

  ],

  category: "Unit 7: Equilibrium"

},

    {

  prompt: "For A ⇌ 2B, initial [A] = 1.0 M, [B] = 0. If K = 0.25, what is [B] at equilibrium (approx)?",

  choices: [

    { text: "0.50 M", correct: false, choiceExplanation: " is incorrect because K is small." },

{ text: "0.40 M", correct: true, choiceExplanation: " is correct because K = (2x)²/(1−x), giving x ≈ 0.20, so [B] ≈ 0.40 M." },

    { text: "0.25 M", correct: false, choiceExplanation: " is incorrect because it underestimates." },

    { text: "1.0 M", correct: false, choiceExplanation: " is incorrect because it cannot exceed initial A." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "When is the small-x approximation valid?",

  choices: [

    { text: "When K is large", correct: false, choiceExplanation: " is incorrect because large K causes large change." },

    { text: "When K is very small", correct: true, choiceExplanation: " is correct because change is negligible." },

    { text: "When concentrations are equal", correct: false, choiceExplanation: " is incorrect because not related." },

    { text: "Always", correct: false, choiceExplanation: " is incorrect because must be justified." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "For A ⇌ B, if K = 1000, what is true about equilibrium?",

  choices: [

    { text: "Reactants dominate", correct: false, choiceExplanation: " is incorrect because K is large." },

    { text: "Products dominate", correct: true, choiceExplanation: " is correct because K >> 1." },

    { text: "Equal amounts exist", correct: false, choiceExplanation: " is incorrect because K ≠ 1." },

    { text: "Reaction does not proceed", correct: false, choiceExplanation: " is incorrect because it strongly proceeds." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "Which ICE table setup is correct for A ⇌ 2B starting with only A?",

  choices: [

    { text: "A: 1−x, B: x", correct: false, choiceExplanation: " is incorrect because B forms twice as fast." },

    { text: "A: 1−x, B: 2x", correct: true, choiceExplanation: " is correct because coefficient is 2." },

    { text: "A: 1−2x, B: x", correct: false, choiceExplanation: " is incorrect because A decreases by x." },

    { text: "A: x, B: 2x", correct: false, choiceExplanation: " is incorrect because initial A is 1." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "If K is very small, what can you assume about equilibrium?",

  choices: [

    { text: "Products dominate", correct: false, choiceExplanation: " is incorrect because reactants dominate." },

    { text: "Very little product forms", correct: true, choiceExplanation: " is correct because reaction barely proceeds." },

    { text: "All reactants disappear", correct: false, choiceExplanation: " is incorrect because change is small." },

    { text: "Reaction is fast", correct: false, choiceExplanation: " is incorrect because K ≠ rate." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "For the reaction: 2A ⇌ B, initial [A] = 1.0 M. Which equilibrium expression is correct?",

  choices: [

    { text: "[B]/[A]²", correct: true, choiceExplanation: " is correct because coefficient becomes exponent." },

    { text: "[A]²/[B]", correct: false, choiceExplanation: " is incorrect because ratio is reversed." },

    { text: "2[B]/[A]", correct: false, choiceExplanation: " is incorrect because coefficients are exponents." },

    { text: "[B]²/[A]", correct: false, choiceExplanation: " is incorrect because exponent is wrong." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "What happens if your small-x assumption is invalid?",

  choices: [

    { text: "Nothing changes", correct: false, choiceExplanation: " is incorrect because answer will be wrong." },

    { text: "You must solve quadratic equation", correct: true, choiceExplanation: " is correct because approximation fails." },

    { text: "K changes", correct: false, choiceExplanation: " is incorrect because K is constant." },

    { text: "Reaction stops", correct: false, choiceExplanation: " is incorrect because equilibrium still occurs." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "Which is the most common mistake in ICE problems?",

  choices: [

    { text: "Forgetting coefficients in change row", correct: true, choiceExplanation: " is correct because stoichiometry matters." },

    { text: "Using K", correct: false, choiceExplanation: " is incorrect because K is required." },

    { text: "Balancing equation", correct: false, choiceExplanation: " is incorrect because that is separate step." },

    { text: "Writing units", correct: false, choiceExplanation: " is incorrect because not main issue." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "If equilibrium concentration of product is very small, what does that imply about K?",

  choices: [

    { text: "K is large", correct: false, choiceExplanation: " is incorrect because products are small." },

    { text: "K is small", correct: true, choiceExplanation: " is correct because reactants are favored." },

    { text: "K = 1", correct: false, choiceExplanation: " is incorrect because not equal." },

    { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because relationship is clear." }

  ],

  category: "Unit 7: Equilibrium"

},

   {
  prompt: "For the reaction A ⇌ B, K = 4.0. If initial [A] = 1.0 M and [B] = 0, what is [B] at equilibrium?",
  choices: [
    { text: "0.80 M", correct: true, choiceExplanation: " is correct because 4 = x/(1−x) → x = 0.80." },
    { text: "0.67 M", correct: false, choiceExplanation: " is incorrect because algebra was done incorrectly." },
    { text: "0.50 M", correct: false, choiceExplanation: " is incorrect because that gives K = 1." },
    { text: "0.20 M", correct: false, choiceExplanation: " is incorrect because too small." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "For A ⇌ B, K = 4.0. Initial: [A] = 1.0 M, [B] = 1.0 M. Which direction will the reaction shift?",
  choices: [
    { text: "Left", correct: false, choiceExplanation: " is incorrect because Q = 1, K = 4." },
    { text: "Right", correct: true, choiceExplanation: " is correct because Q < K so products increase." },
    { text: "No shift", correct: false, choiceExplanation: " is incorrect because Q ≠ K." },
    { text: "Reaction stops", correct: false, choiceExplanation: " is incorrect because equilibrium not reached." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "For A ⇌ 2B, initial [A] = 1.0 M, [B] = 0.50 M, K = 4.0. What is the direction of shift?",
  choices: [
    { text: "Left", correct: false, choiceExplanation: " is incorrect because Q < K." },
    { text: "Right", correct: true, choiceExplanation: " is correct because Q = 0.25 < 4." },
    { text: "No change", correct: false, choiceExplanation: " is incorrect because Q ≠ K." },
    { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because Q and K are known." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "For A ⇌ 2B, K = 1.0, initial [A] = 1.0 M. Which is true at equilibrium?",
  choices: [
    { text: "[A] = [B]", correct: false, choiceExplanation: " is incorrect because coefficients differ." },
    { text: "[B] = 2[A]", correct: false, choiceExplanation: " is incorrect because depends on equilibrium shift." },
    { text: "K does not determine exact concentrations", correct: true, choiceExplanation: " is correct because initial conditions matter." },
    { text: "All A converts to B", correct: false, choiceExplanation: " is incorrect because K = 1." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "Which condition guarantees small-x approximation is valid?",
  choices: [
    { text: "K ≈ 1", correct: false, choiceExplanation: " is incorrect because change may be large." },
    { text: "K < 10⁻³", correct: true, choiceExplanation: " is correct because change is negligible." },
    { text: "Initial concentration is large", correct: false, choiceExplanation: " is incorrect because K matters more." },
    { text: "Temperature is high", correct: false, choiceExplanation: " is incorrect because unrelated." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "For 2A ⇌ B, initial [A] = 1.0 M, K is very small. What is true?",
  choices: [
    { text: "[A] ≈ 1.0 M", correct: true, choiceExplanation: " is correct because very little reacts." },
    { text: "[B] ≈ 1.0 M", correct: false, choiceExplanation: " is incorrect because little product forms." },
    { text: "[A] = [B]", correct: false, choiceExplanation: " is incorrect because K is small." },
    { text: "Reaction goes to completion", correct: false, choiceExplanation: " is incorrect because K is small." }
  ],
  category: "Unit 7: Equilibrium"
},

{
prompt: "For A ⇌ B starting with [A] = 1.0 M and [B] = 1.0 M, if Q < K, which ICE setup is correct?",
  choices: [
    { text: "A: 1−x, B: 1+x", correct: true, choiceExplanation: " is correct if reaction shifts right." },
    { text: "A: 1+x, B: 1−x", correct: false, choiceExplanation: " is incorrect for forward shift." },
    { text: "A: x, B: x", correct: false, choiceExplanation: " is incorrect because initial values exist." },
    { text: "A: 1−2x, B: 1+x", correct: false, choiceExplanation: " is incorrect because coefficients are 1:1." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "What is the biggest mistake when products are initially present?",
  choices: [
    { text: "Ignoring Q", correct: true, choiceExplanation: " is correct because direction must be determined first." },
    { text: "Using K", correct: false, choiceExplanation: " is incorrect because K is needed." },
    { text: "Writing equation", correct: false, choiceExplanation: " is incorrect because that is basic step." },
    { text: "Balancing equation", correct: false, choiceExplanation: " is incorrect because separate step." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "If K is extremely large, what simplification is often valid?",
  choices: [
    { text: "Ignore products", correct: false, choiceExplanation: " is incorrect because products dominate." },
    { text: "Ignore reactants in denominator", correct: true, choiceExplanation: " is correct because reactants are very small." },
    { text: "Ignore coefficients", correct: false, choiceExplanation: " is incorrect because always needed." },
    { text: "Ignore K", correct: false, choiceExplanation: " is incorrect because K defines system." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "For A ⇌ B, K = 1. If initial concentrations differ, what happens?",
  choices: [
    { text: "They stay the same", correct: false, choiceExplanation: " is incorrect because system shifts." },
    { text: "System shifts until ratio equals 1", correct: true, choiceExplanation: " is correct because equilibrium condition is K." },
    { text: "Reaction stops immediately", correct: false, choiceExplanation: " is incorrect because adjustment occurs." },
    { text: "Products dominate", correct: false, choiceExplanation: " is incorrect because depends on initial." }
  ],
  category: "Unit 7: Equilibrium"
},

{
  prompt: "Which best describes equilibrium calculations?",
  choices: [
    { text: "Always simple algebra", correct: false, choiceExplanation: " is incorrect because quadratics often appear." },
    { text: "Often require approximation or quadratic solving", correct: true, choiceExplanation: " is correct because ICE problems vary." },
    { text: "Never require math", correct: false, choiceExplanation: " is incorrect because math is central." },
    { text: "Only conceptual", correct: false, choiceExplanation: " is incorrect because calculations are key." }
  ],
  category: "Unit 7: Equilibrium"
},

 {

  prompt: "For A ⇌ B, K = 9.0. Initial: [A] = 1.0 M, [B] = 0.0 M. What is [B] at equilibrium?",

  choices: [

    { text: "0.75 M", correct: false, choiceExplanation: " is incorrect because K = x/(1−x)." },

    { text: "0.90 M", correct: true, choiceExplanation: " is correct because 9 = x/(1−x) → x = 0.90." },

    { text: "0.50 M", correct: false, choiceExplanation: " is incorrect because that gives K = 1." },

    { text: "0.10 M", correct: false, choiceExplanation: " is incorrect because too small." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "For A ⇌ 2B, K = 0.040, initial [A] = 1.0 M. Which is TRUE?",

  choices: [

    { text: "[B] ≈ 0.20 M", correct: true, choiceExplanation: " is correct using small-x: K ≈ (2x)²/1 = 4x² → x = 0.10 → B = 0.20." },

    { text: "[B] ≈ 1.0 M", correct: false, choiceExplanation: " is incorrect because K is small." },

    { text: "[B] ≈ 0.80 M", correct: false, choiceExplanation: " is incorrect because overestimates." },

    { text: "[B] ≈ 0.01 M", correct: false, choiceExplanation: " is incorrect because too small." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "For A ⇌ B, K = 1.0. Initial: [A] = 2.0 M, [B] = 0.0 M. What happens?",

  choices: [

    { text: "[A] = [B] at equilibrium", correct: true, choiceExplanation: " is correct because K = 1 means ratio = 1." },

    { text: "[A] remains 2.0 M", correct: false, choiceExplanation: " is incorrect because reaction proceeds." },

    { text: "[B] remains 0", correct: false, choiceExplanation: " is incorrect because products form." },

    { text: "Reaction stops immediately", correct: false, choiceExplanation: " is incorrect because system shifts." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "For 2A ⇌ B, K = 1000. Initial [A] = 1.0 M. Which assumption is BEST?",

  choices: [

    { text: "x is very small", correct: false, choiceExplanation: " is incorrect because K is large." },

    { text: "[A] ≈ 0 at equilibrium", correct: true, choiceExplanation: " is correct because reaction goes to products." },

    { text: "[B] ≈ 0", correct: false, choiceExplanation: " is incorrect because products dominate." },

    { text: "No reaction occurs", correct: false, choiceExplanation: " is incorrect because K is large." }

  ],

  category: "Unit 7: Equilibrium"

},

{
  prompt: "For A ⇌ 2B, initial [A] = 1.0 M, [B] = 1.0 M, K = 1.0. Which direction?",
  choices: [
    { text: "Left", correct: false, choiceExplanation: " is incorrect because Q = K." },
    { text: "Right", correct: false, choiceExplanation: " is incorrect because Q = K." },
    { text: "No shift", correct: true, choiceExplanation: " is correct because Q = 1 = K." },
    { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because Q and K are known." }
  ],
  category: "Unit 7: Equilibrium"
},

    
{

  prompt: "For A ⇌ B, K = 0.010. Initial [A] = 1.0 M. What is TRUE?",

  choices: [

    { text: "[A] ≈ 1.0 M", correct: true, choiceExplanation: " is correct because K is small." },

    { text: "[B] ≈ 1.0 M", correct: false, choiceExplanation: " is incorrect because little product forms." },

    { text: "[A] = [B]", correct: false, choiceExplanation: " is incorrect because K ≠ 1." },

    { text: "All A converts to B", correct: false, choiceExplanation: " is incorrect because reaction barely proceeds." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "Which scenario REQUIRES solving a quadratic?",

  choices: [

    { text: "K is very small", correct: false, choiceExplanation: " is incorrect because small-x works." },

    { text: "K is very large", correct: false, choiceExplanation: " is incorrect because approximation works." },

    { text: "K ≈ 1", correct: true, choiceExplanation: " is correct because change is significant." },

    { text: "Initial concentration is large", correct: false, choiceExplanation: " is incorrect because K matters more." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "prompt: For 2A ⇌ B, starting with only A at [A] = 1.0 M and K is unknown, which must initially be true?",

  choices: [

    { text: "[A] decreases", correct: true, choiceExplanation: " is correct because reaction proceeds forward initially." },

    { text: "[B] decreases", correct: false, choiceExplanation: " is incorrect because B forms." },

    { text: "[A] increases", correct: false, choiceExplanation: " is incorrect because it is consumed." },

    { text: "[B] stays zero", correct: false, choiceExplanation: " is incorrect because product forms." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "If your calculated x is not small, what should you do?",

  choices: [

    { text: "Ignore it", correct: false, choiceExplanation: " is incorrect because answer will be wrong." },

    { text: "Recalculate using quadratic", correct: true, choiceExplanation: " is correct because approximation fails." },

    { text: "Change K", correct: false, choiceExplanation: " is incorrect because K is constant." },

    { text: "Restart problem", correct: false, choiceExplanation: " is incorrect because only method changes." }

  ],

  category: "Unit 7: Equilibrium"

},

{

  prompt: "Which is the MOST common AP trap in equilibrium?",

  choices: [

    { text: "Using wrong units", correct: false, choiceExplanation: " is incorrect because less critical." },

    { text: "Forgetting to compare Q and K first", correct: true, choiceExplanation: " is correct because direction matters." },

    { text: "Writing equation", correct: false, choiceExplanation: " is incorrect because basic step." },

    { text: "Balancing reaction", correct: false, choiceExplanation: " is incorrect because separate step." }

  ],

  category: "Unit 7: Equilibrium"

}   
    
],

  passages: [

{

  title: "Equilibrium Establishment",

  image: "",

  imageAlt: "",

  text: `

A sealed container contains only A at a concentration of 1.0 M. The reaction A ⇌ B proceeds until equilibrium is reached. At equilibrium, both A and B are present.

  `,

  questions: [

    {

      prompt: "What must be true at equilibrium?",

      choices: [

        { text: "Only B is present", correct: false, choiceExplanation: " is incorrect because both species exist." },

        { text: "Forward rate equals reverse rate", correct: true, choiceExplanation: " is correct by definition of equilibrium." },

        { text: "Reaction stops", correct: false, choiceExplanation: " is incorrect because equilibrium is dynamic." },

        { text: "A is completely consumed", correct: false, choiceExplanation: " is incorrect because equilibrium mixture remains." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "Which statement best describes the concentrations at equilibrium?",

      choices: [

        { text: "They must be equal", correct: false, choiceExplanation: " is incorrect because depends on K." },

        { text: "They remain constant over time", correct: true, choiceExplanation: " is correct because equilibrium is stable." },

        { text: "They continuously increase", correct: false, choiceExplanation: " is incorrect because equilibrium reached." },

        { text: "They drop to zero", correct: false, choiceExplanation: " is incorrect because system stabilizes." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Reaction Quotient vs Equilibrium Constant",

  image: "",

  imageAlt: "",

  text: `

For the reaction A ⇌ B, K = 5.0. A system currently has [A] = 1.0 M and [B] = 1.0 M.

  `,

  questions: [

    {

      prompt: "What is the value of Q?",

      choices: [

        { text: "1.0", correct: true, choiceExplanation: " is correct because Q = [B]/[A]." },

        { text: "5.0", correct: false, choiceExplanation: " is incorrect because that is K." },

        { text: "0.20", correct: false, choiceExplanation: " is incorrect because ratio is 1." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because concentrations are given." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What will happen to the system?",

      choices: [

        { text: "Shift left", correct: false, choiceExplanation: " is incorrect because Q < K." },

        { text: "Shift right", correct: true, choiceExplanation: " is correct because products must increase." },

        { text: "No shift", correct: false, choiceExplanation: " is incorrect because Q ≠ K." },

        { text: "Reaction stops", correct: false, choiceExplanation: " is incorrect because equilibrium not reached." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Le Châtelier’s Principle",

  image: "",

  imageAlt: "",

  text: `

For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), the system is at equilibrium. Additional H₂ gas is added.

  `,

  questions: [

    {

      prompt: "What is the immediate effect of adding H₂?",

      choices: [

        { text: "Increase in Q", correct: false, choiceExplanation: " is incorrect because denominator increases." },

        { text: "Decrease in Q", correct: true, choiceExplanation: " is correct because more reactant lowers Q." },

        { text: "No change in Q", correct: false, choiceExplanation: " is incorrect because concentrations changed." },

        { text: "K changes", correct: false, choiceExplanation: " is incorrect because temperature determines K." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is the resulting shift?",

      choices: [

        { text: "Left", correct: false, choiceExplanation: " is incorrect because system makes products." },

        { text: "Right", correct: true, choiceExplanation: " is correct because it consumes added H₂." },

        { text: "No shift", correct: false, choiceExplanation: " is incorrect because disturbance occurred." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because direction is clear." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Temperature and Equilibrium",

  image: "",

  imageAlt: "",

  text: `

For an exothermic reaction, heat can be treated as a product. The system is at equilibrium and temperature is increased.

  `,

  questions: [

    {

      prompt: "How does increasing temperature affect the system?",

      choices: [

        { text: "Shifts right", correct: false, choiceExplanation: " is incorrect because heat is added." },

        { text: "Shifts left", correct: true, choiceExplanation: " is correct because system absorbs heat." },

        { text: "No shift", correct: false, choiceExplanation: " is incorrect because temperature changes equilibrium." },

        { text: "Reaction stops", correct: false, choiceExplanation: " is incorrect because equilibrium adjusts." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What happens to K when temperature increases?",

      choices: [

        { text: "K increases", correct: false, choiceExplanation: " is incorrect for exothermic reaction." },

        { text: "K decreases", correct: true, choiceExplanation: " is correct because equilibrium shifts left." },

        { text: "K stays the same", correct: false, choiceExplanation: " is incorrect because temperature affects K." },

        { text: "K becomes zero", correct: false, choiceExplanation: " is incorrect because equilibrium still exists." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

    {

  title: "ICE Table Setup from Data",

  image: "",

  imageAlt: "",

  text: `

For the reaction A ⇌ B, K = 4.0. A container initially has [A] = 1.0 M and [B] = 0.0 M. The system is allowed to reach equilibrium.

  `,

  questions: [

    {

      prompt: "Which ICE setup is correct?",

      choices: [

        { text: "A: 1−x, B: x", correct: true, choiceExplanation: " is correct because A decreases and B increases." },

        { text: "A: 1+x, B: x", correct: false, choiceExplanation: " is incorrect because A is consumed." },

        { text: "A: x, B: 1−x", correct: false, choiceExplanation: " is incorrect because B starts at 0." },

        { text: "A: 1−2x, B: x", correct: false, choiceExplanation: " is incorrect because coefficients are 1:1." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is the equilibrium concentration of B?",

      choices: [

        { text: "0.80 M", correct: true, choiceExplanation: " is correct because 4 = x/(1−x) → x = 0.80." },

        { text: "0.50 M", correct: false, choiceExplanation: " is incorrect because that gives K = 1." },

        { text: "0.20 M", correct: false, choiceExplanation: " is incorrect because too small." },

        { text: "1.0 M", correct: false, choiceExplanation: " is incorrect because cannot exceed initial A." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Initial Products Present",

  image: "",

  imageAlt: "",

  text: `

For the reaction A ⇌ 2B, K = 1.0. Initially, [A] = 1.0 M and [B] = 1.0 M.

  `,

  questions: [

    {

      prompt: "What is the value of Q?",

      choices: [

        { text: "1.0", correct: true, choiceExplanation: " is correct because Q = (1²)/1 = 1." },

        { text: "2.0", correct: false, choiceExplanation: " is incorrect because coefficient is exponent." },

        { text: "0.5", correct: false, choiceExplanation: " is incorrect because ratio is 1." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because values are given." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What will the system do?",

      choices: [

        { text: "Shift left", correct: false, choiceExplanation: " is incorrect because Q = K." },

        { text: "Shift right", correct: false, choiceExplanation: " is incorrect because Q = K." },

        { text: "No shift", correct: true, choiceExplanation: " is correct because system is at equilibrium." },

        { text: "Reaction stops", correct: false, choiceExplanation: " is incorrect because equilibrium is dynamic." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Small-x Approximation Context",

  image: "",

  imageAlt: "",

  text: `

For the reaction A ⇌ 2B, K = 1.0 × 10⁻⁴. Initial [A] = 1.0 M, [B] = 0. The system reaches equilibrium.

  `,

  questions: [

    {

      prompt: "Which assumption is valid?",

      choices: [

        { text: "x is large", correct: false, choiceExplanation: " is incorrect because K is very small." },

        { text: "x is negligible", correct: true, choiceExplanation: " is correct because little product forms." },

        { text: "[A] = 0", correct: false, choiceExplanation: " is incorrect because little reacts." },

        { text: "[B] = 1.0", correct: false, choiceExplanation: " is incorrect because product is small." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is [B] at equilibrium (approx)?",

      choices: [

        { text: "0.020 M", correct: true, choiceExplanation: " is correct because K ≈ 4x² → x ≈ 0.01 → B = 2x ≈ 0.02." },

        { text: "1.0 M", correct: false, choiceExplanation: " is incorrect because K is small." },

        { text: "0.50 M", correct: false, choiceExplanation: " is incorrect because overestimates." },

        { text: "0.001 M", correct: false, choiceExplanation: " is incorrect because too small." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Le Châtelier + Quantitative Reasoning",

  image: "",

  imageAlt: "",

  text: `

For the reaction 2NO₂(g) ⇌ N₂O₄(g), K = 2.0. Initially, [NO₂] = 1.0 M and [N₂O₄] = 0.0 M. The system reaches equilibrium, then additional NO₂ is added.

  `,

  questions: [

    {

      prompt: "After equilibrium is first established, which species is favored?",

      choices: [

        { text: "NO₂", correct: false, choiceExplanation: " is incorrect because K > 1 favors products." },

        { text: "N₂O₄", correct: true, choiceExplanation: " is correct because products are favored." },

        { text: "Equal amounts", correct: false, choiceExplanation: " is incorrect because K ≠ 1." },

        { text: "No reaction occurs", correct: false, choiceExplanation: " is incorrect because equilibrium forms." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What happens immediately after adding NO₂?",

      choices: [

        { text: "Q increases", correct: false, choiceExplanation: " is incorrect because denominator increases." },

        { text: "Q decreases", correct: true, choiceExplanation: " is correct because more NO₂ lowers Q." },

        { text: "K changes", correct: false, choiceExplanation: " is incorrect because temperature unchanged." },

        { text: "No change", correct: false, choiceExplanation: " is incorrect because disturbance occurs." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is the resulting shift?",

      choices: [

        { text: "Left", correct: false, choiceExplanation: " is incorrect because system forms products." },

        { text: "Right", correct: true, choiceExplanation: " is correct because it consumes NO₂." },

        { text: "No shift", correct: false, choiceExplanation: " is incorrect because Q ≠ K." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because direction is clear." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

    {

  title: "Full ICE + Algebra",

  image: "",

  imageAlt: "",

  text: `

For the reaction A ⇌ B, K = 9.0. Initially, [A] = 1.0 M and [B] = 0.0 M. The system is allowed to reach equilibrium.

  `,

  questions: [

    {

      prompt: "Which equation must be solved?",

      choices: [

        { text: "9 = x/(1−x)", correct: true, choiceExplanation: " is correct from ICE table." },

        { text: "9 = (1−x)/x", correct: false, choiceExplanation: " is incorrect because ratio is reversed." },

        { text: "9 = x²", correct: false, choiceExplanation: " is incorrect because no exponent." },

        { text: "9 = 1/x", correct: false, choiceExplanation: " is incorrect because setup is wrong." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is [B] at equilibrium?",

      choices: [

        { text: "0.90 M", correct: true, choiceExplanation: " is correct because x = 0.90." },

        { text: "0.50 M", correct: false, choiceExplanation: " is incorrect because that gives K = 1." },

        { text: "0.10 M", correct: false, choiceExplanation: " is incorrect because too small." },

        { text: "1.0 M", correct: false, choiceExplanation: " is incorrect because cannot exceed initial A." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Initial Products + Shift Direction",

  image: "",

  imageAlt: "",

  text: `

For the reaction A ⇌ 2B, K = 4.0. Initially, [A] = 1.0 M and [B] = 2.0 M.

  `,

  questions: [

    {

      prompt: "What is Q?",

      choices: [

        { text: "4.0", correct: true, choiceExplanation: " is correct because Q = (2²)/1 = 4." },

        { text: "2.0", correct: false, choiceExplanation: " is incorrect because exponent matters." },

        { text: "1.0", correct: false, choiceExplanation: " is incorrect because ratio is 4." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because concentrations given." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is the direction of shift?",

      choices: [

        { text: "Left", correct: false, choiceExplanation: " is incorrect because Q = K." },

        { text: "Right", correct: false, choiceExplanation: " is incorrect because Q = K." },

        { text: "No shift", correct: true, choiceExplanation: " is correct because system is already at equilibrium." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because Q = K." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Small-x vs Quadratic Decision",

  image: "",

  imageAlt: "",

  text: `

For the reaction A ⇌ 2B, K = 1.0 × 10⁻². Initial [A] = 1.0 M, [B] = 0.

  `,

  questions: [

    {

      prompt: "Is small-x approximation valid?",

      choices: [

        { text: "Yes", correct: true, choiceExplanation: " is correct because K is small enough." },

        { text: "No", correct: false, choiceExplanation: " is incorrect because change is small." },

        { text: "Only if B is large", correct: false, choiceExplanation: " is incorrect because K determines." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because K given." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "Which expression is correct using approximation?",

      choices: [

        { text: "K ≈ 4x²", correct: true, choiceExplanation: " is correct because B = 2x." },

        { text: "K ≈ x²", correct: false, choiceExplanation: " is incorrect because coefficient matters." },

        { text: "K ≈ x", correct: false, choiceExplanation: " is incorrect because exponent present." },

        { text: "K ≈ 2x", correct: false, choiceExplanation: " is incorrect because squared term required." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Disturbance + New Equilibrium",

  image: "",

  imageAlt: "",

  text: `

A system at equilibrium for A ⇌ B has [A] = 0.50 M and [B] = 0.50 M (K = 1.0). Additional A is added, raising [A] to 1.0 M instantly.

  `,

  questions: [

    {

      prompt: "What is Q immediately after adding A?",

      choices: [

        { text: "0.50", correct: true, choiceExplanation: " is correct because Q = 0.50 / 1.0." },

        { text: "1.0", correct: false, choiceExplanation: " is incorrect because concentrations changed." },

        { text: "2.0", correct: false, choiceExplanation: " is incorrect because ratio is inverted." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because values are given." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is the direction of shift?",

      choices: [

        { text: "Left", correct: false, choiceExplanation: " is incorrect because Q < K." },

        { text: "Right", correct: true, choiceExplanation: " is correct because system forms more B." },

        { text: "No shift", correct: false, choiceExplanation: " is incorrect because Q ≠ K." },

        { text: "Reaction stops", correct: false, choiceExplanation: " is incorrect because equilibrium adjusts." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

    {

  title: "Two-Step Equilibrium Adjustment",

  image: "",

  imageAlt: "",

  text: `

For the reaction A ⇌ B, K = 4.0. Initially, [A] = 1.0 M and [B] = 0.0 M. The system reaches equilibrium. Then additional B is added so that [B] instantly becomes 1.5 M.

  `,

  questions: [

    {

      prompt: "What is [B] at the FIRST equilibrium?",

      choices: [

        { text: "0.80 M", correct: true, choiceExplanation: " is correct because 4 = x/(1−x)." },

        { text: "0.50 M", correct: false, choiceExplanation: " is incorrect because that gives K = 1." },

        { text: "1.0 M", correct: false, choiceExplanation: " is incorrect because cannot exceed initial A." },

        { text: "0.20 M", correct: false, choiceExplanation: " is incorrect because too small." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "Immediately after adding B, what is Q?",

      choices: [

        { text: "1.5 / 0.20 = 7.5", correct: true, choiceExplanation: " is correct using new [B] and old [A]." },

        { text: "4.0", correct: false, choiceExplanation: " is incorrect because that was equilibrium before." },

        { text: "1.5", correct: false, choiceExplanation: " is incorrect because ratio must be used." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because values are known." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is the direction of the shift after disturbance?",

      choices: [

        { text: "Right", correct: false, choiceExplanation: " is incorrect because Q > K." },

        { text: "Left", correct: true, choiceExplanation: " is correct because system forms A." },

        { text: "No shift", correct: false, choiceExplanation: " is incorrect because Q ≠ K." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because Q and K are known." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Quadratic Required Scenario",

  image: "",

  imageAlt: "",

  text: `

For the reaction A ⇌ B, K = 1.0. Initially, [A] = 1.0 M and [B] = 0.0 M.

  `,

  questions: [

    {

      prompt: "Which method must be used?",

      choices: [

        { text: "Small-x approximation", correct: false, choiceExplanation: " is incorrect because K ≈ 1." },

        { text: "Quadratic equation", correct: true, choiceExplanation: " is correct because change is significant." },

        { text: "Ignore equilibrium", correct: false, choiceExplanation: " is incorrect because system adjusts." },

        { text: "No math needed", correct: false, choiceExplanation: " is incorrect because calculation required." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is [B] at equilibrium?",

      choices: [

        { text: "0.50 M", correct: true, choiceExplanation: " is correct because ratio becomes 1." },

        { text: "1.0 M", correct: false, choiceExplanation: " is incorrect because A also present." },

        { text: "0.25 M", correct: false, choiceExplanation: " is incorrect because ratio not satisfied." },

        { text: "0.75 M", correct: false, choiceExplanation: " is incorrect because ratio not 1." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Multi-Reaction Logic (Competing Shifts)",

  image: "",

  imageAlt: "",

  text: `

For the reaction 2A ⇌ B, K = 0.50. Initially, [A] = 1.0 M and [B] = 0.0 M. The system reaches equilibrium, then the volume is decreased (compression).

  `,

  questions: [

    {

      prompt: "Before compression, which side is favored?",

      choices: [

        { text: "Reactants", correct: true, choiceExplanation: " is correct because K < 1." },

        { text: "Products", correct: false, choiceExplanation: " is incorrect because K < 1." },

        { text: "Equal", correct: false, choiceExplanation: " is incorrect because K ≠ 1." },

        { text: "No reaction", correct: false, choiceExplanation: " is incorrect because equilibrium forms." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is the effect of decreasing volume?",

      choices: [

        { text: "Shift toward more moles", correct: false, choiceExplanation: " is incorrect because system reduces pressure." },

        { text: "Shift toward fewer moles", correct: true, choiceExplanation: " is correct because fewer gas particles." },

        { text: "No shift", correct: false, choiceExplanation: " is incorrect because moles differ." },

        { text: "K increases", correct: false, choiceExplanation: " is incorrect because temperature unchanged." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "Which direction does the system shift after compression?",

      choices: [

        { text: "Left (toward A)", correct: false, choiceExplanation: " is incorrect because more moles exist there." },

        { text: "Right (toward B)", correct: true, choiceExplanation: " is correct because fewer moles." },

        { text: "No shift", correct: false, choiceExplanation: " is incorrect because disturbance occurs." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because stoichiometry known." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Temperature + K Change",

  image: "",

  imageAlt: "",

  text: `

For an exothermic reaction, K = 10 at a certain temperature. The temperature is increased.

  `,

  questions: [

    {

      prompt: "What happens to K?",

      choices: [

        { text: "K increases", correct: false, choiceExplanation: " is incorrect because reaction shifts left." },

        { text: "K decreases", correct: true, choiceExplanation: " is correct for exothermic reactions." },

        { text: "K stays the same", correct: false, choiceExplanation: " is incorrect because temperature affects K." },

        { text: "K becomes 1", correct: false, choiceExplanation: " is incorrect because not guaranteed." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What happens to equilibrium concentrations?",

      choices: [

        { text: "More products form", correct: false, choiceExplanation: " is incorrect because system shifts left." },

        { text: "More reactants form", correct: true, choiceExplanation: " is correct because heat added." },

        { text: "No change", correct: false, choiceExplanation: " is incorrect because equilibrium shifts." },

        { text: "All reactants disappear", correct: false, choiceExplanation: " is incorrect because equilibrium persists." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

    {

  title: "Full System Re-Equilibration",

  image: "",

  imageAlt: "",

  text: `

For the reaction A ⇌ B, K = 9.0. Initially, [A] = 1.0 M and [B] = 0.0 M. The system reaches equilibrium. Then the volume is doubled instantly.

  `,

  questions: [

    {

      prompt: "What are the equilibrium concentrations BEFORE volume change?",

      choices: [

        { text: "[A] = 0.10 M, [B] = 0.90 M", correct: true, choiceExplanation: " is correct because 9 = x/(1−x)." },

        { text: "[A] = 0.50 M, [B] = 0.50 M", correct: false, choiceExplanation: " is incorrect because K ≠ 1." },

        { text: "[A] = 0.90 M, [B] = 0.10 M", correct: false, choiceExplanation: " is incorrect because K is large." },

        { text: "[A] = 1.0 M, [B] = 0", correct: false, choiceExplanation: " is incorrect because equilibrium was reached." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What happens immediately after doubling volume?",

      choices: [

        { text: "Q increases", correct: false, choiceExplanation: " is incorrect because both concentrations decrease proportionally." },

        { text: "Q decreases", correct: false, choiceExplanation: " is incorrect because ratio stays same." },

        { text: "Q stays the same", correct: true, choiceExplanation: " is correct because ratio unchanged." },

        { text: "K changes", correct: false, choiceExplanation: " is incorrect because temperature unchanged." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is the resulting shift?",

      choices: [

        { text: "Left", correct: false, choiceExplanation: " is incorrect because Q = K." },

        { text: "Right", correct: false, choiceExplanation: " is incorrect because Q = K." },

        { text: "No shift", correct: true, choiceExplanation: " is correct because system is still at equilibrium." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because Q = K." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Multiple Disturbances",

  image: "",

  imageAlt: "",

  text: `

For the reaction 2A ⇌ B, K = 4.0. Initially, [A] = 1.0 M and [B] = 0.0 M. The system reaches equilibrium. Then A is added, followed by a decrease in temperature (reaction is endothermic).

  `,

  questions: [

    {

      prompt: "Before disturbances, which side is favored?",

      choices: [

        { text: "Reactants", correct: false, choiceExplanation: " is incorrect because K > 1." },

        { text: "Products", correct: true, choiceExplanation: " is correct because K > 1." },

        { text: "Equal", correct: false, choiceExplanation: " is incorrect because K ≠ 1." },

        { text: "No reaction", correct: false, choiceExplanation: " is incorrect because equilibrium forms." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is the effect of adding A?",

      choices: [

        { text: "Q increases", correct: false, choiceExplanation: " is incorrect because denominator increases." },

        { text: "Q decreases", correct: true, choiceExplanation: " is correct because more A lowers Q." },

        { text: "No change", correct: false, choiceExplanation: " is incorrect because concentrations changed." },

        { text: "K changes", correct: false, choiceExplanation: " is incorrect because temperature unchanged." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is the effect of decreasing temperature (endothermic reaction)?",

      choices: [

        { text: "Shift right", correct: false, choiceExplanation: " is incorrect because heat is reactant." },

        { text: "Shift left", correct: true, choiceExplanation: " is correct because system releases heat." },

        { text: "No shift", correct: false, choiceExplanation: " is incorrect because temperature affects equilibrium." },

        { text: "K increases", correct: false, choiceExplanation: " is incorrect because K decreases." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Competing Effects + ICE",

  image: "",

  imageAlt: "",

  text: `

For A ⇌ 2B, K = 1.0. Initially, [A] = 1.0 M and [B] = 0.0 M. The system reaches equilibrium. Then B is removed from the system.

  `,

  questions: [

    {

      prompt: "What are approximate equilibrium concentrations initially?",

      choices: [

{ text: "[A] ≈ 0.64, [B] ≈ 0.72", correct: true, choiceExplanation: " is correct because K = (2x)²/(1−x) = 1, so x ≈ 0.36, giving [A] ≈ 0.64 and [B] ≈ 0.72." },

        { text: "[A] ≈ 1.0, [B] ≈ 0", correct: false, choiceExplanation: " is incorrect because reaction proceeds." },

        { text: "[A] ≈ 0, [B] ≈ 2.0", correct: false, choiceExplanation: " is incorrect because not complete reaction." },

       { text: "[A] ≈ 0.50, [B] ≈ 1.0", correct: false, choiceExplanation: " is incorrect because it does not satisfy K = [B]²/[A] for A ⇌ 2B." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What happens immediately after removing B?",

      choices: [

        { text: "Q increases", correct: false, choiceExplanation: " is incorrect because numerator decreases." },

        { text: "Q decreases", correct: true, choiceExplanation: " is correct because less B lowers Q." },

        { text: "No change", correct: false, choiceExplanation: " is incorrect because system disturbed." },

        { text: "K changes", correct: false, choiceExplanation: " is incorrect because temperature unchanged." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "What is the resulting shift?",

      choices: [

        { text: "Left", correct: false, choiceExplanation: " is incorrect because system makes more B." },

        { text: "Right", correct: true, choiceExplanation: " is correct because products must increase." },

        { text: "No shift", correct: false, choiceExplanation: " is incorrect because Q ≠ K." },

        { text: "Cannot determine", correct: false, choiceExplanation: " is incorrect because direction is clear." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

},

{

  title: "Edge Case Logic Trap",

  image: "",

  imageAlt: "",

  text: `

A system at equilibrium has K = 1.0. A student claims that all species must have equal concentrations.

  `,

  questions: [

    {

      prompt: "Why is the student's claim incorrect?",

      choices: [

        { text: "K does not depend on concentration", correct: false, choiceExplanation: " is incorrect because K defines ratio." },

        { text: "Stoichiometry affects concentration ratios", correct: true, choiceExplanation: " is correct because coefficients matter." },

        { text: "K is always 1", correct: false, choiceExplanation: " is incorrect because varies." },

        { text: "Equilibrium does not exist", correct: false, choiceExplanation: " is incorrect because system is at equilibrium." }

      ],

      category: "Unit 7: Equilibrium"

    },

    {

      prompt: "Which is a correct statement about K = 1 systems?",

      choices: [

        { text: "Products always dominate", correct: false, choiceExplanation: " is incorrect because K = 1." },

        { text: "Reactants always dominate", correct: false, choiceExplanation: " is incorrect because K = 1." },

        { text: "Neither side is strongly favored", correct: true, choiceExplanation: " is correct because ratio is balanced." },

        { text: "Reaction stops", correct: false, choiceExplanation: " is incorrect because equilibrium is dynamic." }

      ],

      category: "Unit 7: Equilibrium"

    }

  ]

}
    
  ]
});
