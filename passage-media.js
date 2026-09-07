/* Original PrepSprint visual practice. No external images or executable markup. */
(function () {
  "use strict";

  const SOURCE = "Original PrepSprint educational illustration and practice questions; illustrative data, not a released AP exam item.";
  const c = (text, correct, choiceExplanation) => ({ text, correct, choiceExplanation });
  const q = (prompt, choices) => ({ prompt, choices });
  const sets = [
    {
      subjects: ["apCalcAB", "apCalcBC"], unit: 6, slug: "signed-area", title: "Accumulation from a piecewise linear graph",
      image: "signed-area.svg",
      imageAlt: "Graph of f made of line segments through (0,0), (2,4), (4,0), and (6,-2).",
      imageCaption: "A continuous, piecewise linear function on 0 ≤ x ≤ 6.",
      imageDescription: "The graph joins the points (0,0), (2,4), (4,0), and (6,-2) with straight line segments. The horizontal axis is x; the vertical axis is f(x). The graph lies above the x-axis for 0 < x < 4 and below it for 4 < x ≤ 6.",
      text: "The graph defines a continuous function f on [0,6]. Each part of the graph is a straight line segment. Define g(x) = ∫₀ˣ f(t) dt. Use signed area and the Fundamental Theorem of Calculus to answer the questions. The complete coordinates are also available in the image description.",
      questions: [
        q("What is g(6)?", [c("6", true, "The positive triangle has area (1/2)(4)(4) = 8. The negative triangle contributes −(1/2)(2)(2) = −2. Thus g(6) = 8 − 2 = 6."), c("10", false, "This adds the absolute areas, 8 + 2, and gives total unsigned area rather than the signed integral."), c("8", false, "This includes only the region from x = 0 to x = 4 and omits the negative area from 4 to 6."), c("−2", false, "This is the signed area only on [4,6], not the integral on [0,6].")]),
        q("At which x-value does g attain its absolute maximum on [0,6]?", [c("2", false, "The graph of f peaks at x = 2, but g continues increasing as long as f is positive."), c("4", true, "Because g′ = f, g increases on (0,4) and decreases on (4,6). Its absolute maximum occurs at x = 4."), c("6", false, "The negative values of f after x = 4 make g decrease on (4,6)."), c("0", false, "g(0) = 0, while the positive signed area gives g(4) = 8.")])
      ]
    },
    {
      subjects: ["apPhysicsCMechanics"], unit: 1, slug: "velocity", title: "A cart reverses direction",
      image: "velocity.svg", imageAlt: "Velocity-time graph through (0 s,0 m/s), (2 s,4 m/s), (4 s,0 m/s), and (6 s,−2 m/s).",
      imageCaption: "An idealized cart moving along a straight track; positive velocity points right.",
      imageDescription: "Time t is measured in seconds and velocity v in meters per second. Straight segments join (0,0), (2,4), (4,0), and (6,−2). Velocity is positive from 0 to 4 seconds and negative after 4 seconds.",
      text: "A motion sensor records the velocity of a cart moving along a straight horizontal track. Model the sensor readings by the straight segments shown. Let rightward motion be positive. The graph gives velocity, including its sign, rather than speed.",
      questions: [
        q("What is the cart's displacement from t = 0 s to t = 6 s?", [c("10 m right", false, "Ten meters is the total distance: the sum of the magnitudes of the two triangular areas."), c("6 m right", true, "Displacement is the signed area under v(t). The cart moves 8 m right and then 2 m left, for +6 m."), c("2 m left", false, "The −2 m contribution describes only the final two seconds."), c("4 m right", false, "A velocity value cannot be read directly as a displacement; integrate over time.")]),
        q("What is the cart's acceleration at t = 3 s?", [c("2 m/s²", false, "The velocity is decreasing between 2 and 4 seconds, so acceleration is negative."), c("0 m/s²", false, "A straight velocity-time segment has constant acceleration, which need not be zero."), c("−2 m/s²", true, "Acceleration is the slope of v(t): (0 − 4)/(4 − 2) = −2 m/s²."), c("−1 m/s²", false, "This is the slope on the later segment from 4 to 6 seconds, not at 3 seconds.")])
      ]
    },
    {
      subjects: ["apBio"], unit: 3, slug: "enzyme", title: "Substrate concentration and initial reaction rate",
      image: "enzyme-rate.svg", imageAlt: "Reaction rate rises with substrate concentration and approaches a plateau.",
      imageCaption: "Illustrative initial-rate measurements with the same enzyme concentration, temperature, and pH.",
      imageDescription: "Substrate concentration in mmol/L and initial rate in micromol/min are respectively: (0,0), (1,4), (2,6), (4,8), (8,9), and (12,9.5). Points are joined by guide segments. The final two points are close to a plateau.",
      text: "Students measure initial reaction rates while changing substrate concentration. Enzyme concentration, temperature, and pH are held constant. Each plotted value is the mean of repeated trials. The measurements are illustrative; no error bars or statistical test are provided.",
      questions: [
        q("Which explanation best accounts for the leveling of the curve at high substrate concentrations?", [c("Most enzyme active sites are occupied, so enzyme availability limits the rate.", true, "At high substrate concentration, enzymes spend most of their time bound to substrate. Adding more substrate produces progressively smaller changes in the initial rate."), c("Increasing substrate concentration destroys all enzyme molecules.", false, "The rate stays high rather than dropping to zero, and the data do not show enzyme destruction."), c("The reaction has reached equilibrium before the initial rate is measured.", false, "These are initial rates measured at the start of the reaction, not equilibrium measurements."), c("Every substrate molecule is permanently attached to an enzyme.", false, "Enzymes release products and can catalyze additional reactions; binding is not permanent.")]),
        q("Which follow-up most directly tests whether enzyme availability causes the plateau?", [c("Raise both the temperature and substrate concentration.", false, "Changing two variables does not isolate the effect of enzyme availability."), c("Repeat the high-substrate trials with twice the enzyme concentration and all other conditions held constant.", true, "Increasing enzyme concentration while controlling other conditions tests whether the number of available active sites limits the rate."), c("Measure only the final product amount after all substrate is consumed.", false, "Final product amount does not directly measure the initial-rate plateau."), c("Remove the enzyme and also lower the pH.", false, "Changing enzyme presence and pH together introduces a confounding variable.")])
      ]
    },
    {
      subjects: ["apChem"], unit: 5, slug: "reaction-energy", title: "Two pathways for the same reaction",
      image: "reaction-energy.svg", imageAlt: "Energy profiles with reactants at 40, products at 10, and peaks at 100 and 70 kJ/mol.",
      imageCaption: "Schematic potential-energy profiles, using a common energy reference.",
      imageDescription: "The vertical axis is potential energy in kJ/mol; the horizontal axis is reaction progress. Reactants have energy 40 and products 10. The solid uncatalyzed pathway has a maximum of 100. The dashed catalyzed pathway has a maximum of 70. Both pathways begin and end at the same energy levels.",
      text: "The diagram models an exothermic reaction with and without a catalyst. Treat the marked reactant-to-product energy difference as the reaction's enthalpy change for this model. Both pathways produce the same products from the same reactants.",
      questions: [
        q("What is the forward activation energy for the catalyzed pathway?", [c("70 kJ/mol", false, "Seventy is the peak's energy relative to the arbitrary zero. Activation energy is measured upward from the reactants."), c("30 kJ/mol", true, "The catalyzed peak is at 70 and the reactants are at 40, so Ea = 70 − 40 = 30 kJ/mol."), c("−30 kJ/mol", false, "−30 is the product-minus-reactant energy difference, not an activation barrier."), c("60 kJ/mol", false, "This is the uncatalyzed forward barrier: 100 − 40 = 60 kJ/mol.")]),
        q("How does the catalyst change the reaction enthalpy in this model?", [c("It changes ΔH from −30 to −60 kJ/mol.", false, "A catalyst changes the pathway, but it does not change the reactant or product energy levels."), c("It changes ΔH from negative to positive.", false, "The products remain lower in energy in both pathways."), c("It makes ΔH equal to zero.", false, "Lowering the activation barrier does not make reactants and products equal in energy."), c("It leaves ΔH at −30 kJ/mol.", true, "Both pathways have ΔH = 10 − 40 = −30 kJ/mol. A catalyst lowers the activation barrier without changing this difference.")])
      ]
    },
    {
      subjects: ["apStats"], unit: 1, slug: "dotplots", title: "Comparing two distributions of waiting times",
      image: "waiting-times.svg", imageAlt: "Two dotplots centered at 4 minutes; sample B is more spread out.",
      imageCaption: "Illustrative waiting-time observations; each dot represents one customer.",
      imageDescription: "Both dotplots use a horizontal scale from 0 to 8 minutes. Sample A values are 2,3,3,4,4,4,5,5,6. Sample B values are 0,2,2,4,4,4,6,6,8. Each sample contains nine observations.",
      text: "A student observes nine customer waiting times at each of two counters. The dotplots use the same horizontal scale. These small convenience samples describe the observed customers; no random assignment or random sampling is claimed.",
      questions: [
        q("Which comparison of the sample standard deviations is correct?", [c("A has the larger standard deviation because its dots are closer together.", false, "Closer clustering means smaller deviations from the mean, not larger ones."), c("B has the larger standard deviation because its values lie farther from the same mean.", true, "Both means are 4, but B's deviations from 4 are twice A's corresponding deviations. B's sample standard deviation is therefore twice A's."), c("They have equal standard deviations because both have nine observations.", false, "Equal sample sizes do not imply equal variability."), c("The standard deviations cannot be compared without knowing the population means.", false, "Sample standard deviations use the observed sample means, which can be computed from these data.")]),
        q("What are the mean and median of sample A?", [c("Mean 4 minutes; median 4 minutes.", true, "The sum is 36 across nine observations, giving mean 4. The fifth ordered observation is also 4."), c("Mean 4 minutes; median 5 minutes.", false, "With nine values, the median is the fifth value, which is 4."), c("Mean 3 minutes; median 4 minutes.", false, "The values sum to 36, so the mean is 36/9 = 4."), c("Mean 4.5 minutes; median 4.5 minutes.", false, "The sample is symmetric around 4, and its middle observation is 4.")])
      ]
    },
    {
      subjects: ["apEnvironmentalScience"], unit: 1, slug: "energy-transfer", title: "Energy transfer in a simplified food chain",
      image: "energy-transfer.svg", imageAlt: "Grass to grasshopper to frog to snake food chain with 10,000, 1,000, 100, and 10 joules.",
      imageCaption: "An illustrative model using 10% trophic-transfer efficiency at each step.",
      imageDescription: "Four boxes show producers (grass), 10,000 J; primary consumers (grasshoppers), 1,000 J; secondary consumers (frogs), 100 J; and tertiary consumers (snakes), 10 J. Arrows point from food to consumer. The figures represent energy transferred into biomass at successive levels for the same area and time interval.",
      text: "For one area over one time interval, a simplified food chain transfers 10% of the energy in biomass from each trophic level into biomass at the next. Actual ecosystems vary; use the efficiency explicitly stated in this model.",
      questions: [
        q("If producers store 20,000 J under the same model, how much energy enters tertiary-consumer biomass?", [c("2,000 J", false, "This accounts for only the first transfer from producers to primary consumers."), c("200 J", false, "This accounts for two transfers, ending at secondary consumers."), c("20 J", true, "Three transfers occur: 20,000 × 0.1 × 0.1 × 0.1 = 20 J."), c("2 J", false, "This applies four transfers, but there are only three between producers and tertiary consumers.")]),
        q("Which statement best explains why less energy enters biomass at the next trophic level?", [c("Energy is destroyed whenever an organism moves.", false, "Energy is conserved; it changes form rather than being destroyed."), c("Some energy is used in metabolism and dissipated as heat, and some biomass is not consumed or assimilated.", true, "These processes limit how much energy becomes new consumer biomass. Energy not transferred to that level can enter detrital pathways or leave as heat."), c("Consumers return all energy directly to plants for reuse.", false, "Matter cycles, but energy flows through the ecosystem and dissipates as heat."), c("The number of organisms must decrease by exactly 90% at every level.", false, "The model describes energy transfer, not a fixed ratio of organism numbers.")])
      ]
    },
    {
      subjects: ["apPrecalc"], unit: 3, slug: "periodic-height", title: "A point moving on a wheel",
      image: "periodic-height.svg", imageAlt: "Height-time sinusoid with midline 5 m, minimum 2 m, maximum 8 m, and period 8 s.",
      imageCaption: "An idealized periodic height model over two complete rotations.",
      imageDescription: "The horizontal axis is time in seconds; the vertical axis is height in meters. The plotted smooth curve passes through (0,2), (2,5), (4,8), (6,5), (8,2), (10,5), (12,8), (14,5), and (16,2). Its dashed midline is h = 5.",
      text: "A marked point on a wheel rotates at constant angular speed. Its height above the ground ranges from 2 m to 8 m. At time zero it is at its lowest point, and it next reaches that point at 8 seconds. The graph shows two rotations. Angles in the answer choices are in radians.",
      questions: [
        q("Which function models the height shown?", [c("h(t) = 5 + 3 cos(πt/4)", false, "This begins at the highest point, 8 m, rather than the lowest point."), c("h(t) = 3 − 5 cos(πt/4)", false, "This swaps the midline and amplitude, giving a different height range."), c("h(t) = 5 − 3 cos(πt/4)", true, "The midline is (8 + 2)/2 = 5, amplitude is 3, and angular frequency is 2π/8 = π/4. The negative cosine starts at the minimum."), c("h(t) = 5 − 3 cos(πt/8)", false, "This has period 16 seconds, twice the graphed period.")]),
        q("What is the wheel's radius under this model?", [c("8 m", false, "Eight meters is the maximum height, which includes the height of the wheel's center."), c("6 m", false, "Six meters is the full vertical range and therefore the diameter."), c("5 m", false, "Five meters is the height of the wheel's center, not its radius."), c("3 m", true, "The radius equals the amplitude, half the difference between maximum and minimum height: (8 − 2)/2 = 3 m.")])
      ]
    },
    {
      subjects: ["apCSP"], unit: 4, slug: "network", title: "Routing around a failed connection",
      image: "redundant-network.svg", imageAlt: "Network links A-B, A-C, B-C, B-D, and C-D; the B-D link has failed.",
      imageCaption: "A simplified network; lines are bidirectional connections, not distances or transmission speeds.",
      imageDescription: "Four routers form a diamond: A on the left, B at the top, C at the bottom, and D on the right. Links exist between A and B, A and C, B and C, B and D, and C and D. The B-D link is crossed out to mark a failure. All other links are working.",
      text: "A packet must travel from router A to router D. Each working link can carry packets in either direction. The B-D connection fails, while all other shown connections remain available. Assume routers can select a working route.",
      questions: [
        q("Which route still delivers the packet using exactly two working links?", [c("A → B → D", false, "The second connection, B-D, has failed."), c("A → C → D", true, "Both A-C and C-D remain working, so this route reaches D in two links."), c("A → D", false, "The diagram does not contain a direct A-D connection."), c("A → B → A", false, "This returns to the starting router and never reaches D.")]),
        q("Which network-design benefit does the working alternative route illustrate?", [c("Encryption prevents any network link from failing.", false, "Encryption protects data confidentiality; it does not prevent physical or network connection failures."), c("Redundant paths can allow communication to continue when a link fails.", true, "Multiple possible paths allow the network to route around this failed link. This is an example of fault tolerance."), c("Every packet is guaranteed to take the geographically shortest route.", false, "The graph gives no distances, and redundancy does not guarantee a shortest geographic path."), c("Adding a link removes the need for routing protocols.", false, "Routers still need methods for choosing paths through the available connections.")])
      ]
    },
    {
      subjects: ["apPsych"], unit: 2, slug: "memory-experiment", title: "Study schedule and later recall",
      image: "memory-experiment.svg", imageAlt: "Mean words recalled after a week: massed study 8 of 20, spaced study 12 of 20.",
      imageCaption: "Hypothetical randomized experiment; bars show group means only.",
      imageDescription: "The vertical axis runs from 0 to 20 words recalled. The massed-study group mean is 8 and the spaced-study group mean is 12. Each group contains 40 participants. No individual scores, variability estimates, or confidence intervals are shown.",
      text: "Researchers randomly assign 80 volunteers to two groups. One group studies 20 words in a single 30-minute session. The other studies the same words in three 10-minute sessions across three days. Total study time is equal. Each participant completes the same recall test one week after their final study session. The chart reports hypothetical group means.",
      questions: [
        q("What is the operational definition of memory performance in this experiment?", [c("Whether a participant likes the word list.", false, "Preference was not the measured outcome."), c("The number of study sessions assigned to a participant.", false, "The study schedule is the independent variable, not the memory-performance measure."), c("The number of words correctly recalled on the one-week test.", true, "An operational definition specifies how a concept is measured. Here memory is measured by the count of correctly recalled words."), c("A participant's self-reported intelligence.", false, "Intelligence was not measured or used as the outcome in the described design.")]),
        q("Which conclusion is supported by the displayed results alone?", [c("Every spaced-study participant recalled more words than every massed-study participant.", false, "Group means do not reveal the ordering of individual scores."), c("The four-word difference is statistically significant.", false, "The graph provides no variability or inferential analysis, so statistical significance cannot be established from it alone."), c("All students in the population would improve by exactly four words.", false, "An average difference among volunteers does not imply identical effects or establish representativeness for all students."), c("The spaced-study group recalled four more words on average in this sample.", true, "The displayed means differ by 12 − 8 = 4 words. Further analysis is needed to assess statistical uncertainty and generalization.")])
      ]
    },
    {
      subjects: ["apPhysicsCEM"], unit: 11, slug: "parallel-circuit", title: "Two branches across an ideal battery",
      image: "parallel-circuit.svg", imageAlt: "A 12 V ideal battery is connected across parallel 6 ohm and 3 ohm resistors.",
      imageCaption: "Ideal wires and an ideal battery; steady direct current.",
      imageDescription: "A 12-volt battery joins top and bottom conducting rails. Two separate branches each connect the top rail to the bottom rail. One branch contains a 6-ohm resistor and the other a 3-ohm resistor. The resistor branches are in parallel, so they share both electrical nodes.",
      text: "The circuit contains an ideal 12 V battery, a 6 Ω resistor, and a 3 Ω resistor. Both resistors connect between the same pair of nodes. Neglect wire resistance and the battery's internal resistance, and assume the circuit has reached steady state.",
      questions: [
        q("What current passes through the 3 Ω resistor?", [c("1.33 A", false, "This treats the resistors as a 9 Ω series combination; they are connected in parallel."), c("2 A", false, "Two amperes is the current through the 6 Ω branch."), c("4 A", true, "The 3 Ω resistor has the full 12 V across it. Ohm's law gives I = 12/3 = 4 A."), c("6 A", false, "Six amperes is the battery's total current, the sum of the two branch currents.")]),
        q("If the 6 Ω branch is disconnected while the ideal battery remains connected, how does current through the 3 Ω resistor change?", [c("It remains 4 A.", true, "The ideal battery still fixes 12 V across the remaining 3 Ω branch, so its current remains 12/3 = 4 A."), c("It rises to 6 A.", false, "The removed branch's current is not forced into the remaining branch; the battery supplies less total current."), c("It drops to 2 A.", false, "The voltage across the remaining branch has not changed."), c("It becomes zero.", false, "The 3 Ω branch still forms a complete circuit through the battery.")])
      ]
    },
    {
      subjects: ["apHumanGeo"], unit: 2, slug: "population-age", title: "Age structures in two hypothetical regions",
      image: "population-age.svg", imageAlt: "Age-composition bars for regions A and B, with A having a larger young population share.",
      imageCaption: "Hypothetical percentages; the same three age groups are used in both regions.",
      imageDescription: "Region A: ages 0–14 are 40%, ages 15–64 are 55%, and ages 65+ are 5%. Region B: ages 0–14 are 15%, ages 15–64 are 60%, and ages 65+ are 25%. Each region's percentages total 100. The diagram is a broad age-composition chart, not a sex-specific population pyramid.",
      text: "A planner compares the age composition of two hypothetical regions. To calculate an age-dependency ratio for this exercise, divide the combined population ages 0–14 and 65+ by the population ages 15–64, then multiply by 100. This demographic measure does not indicate whether a particular person is employed.",
      questions: [
        q("Which region has the higher total age-dependency ratio?", [c("A, approximately 82 dependents per 100 working-age people.", true, "A's ratio is (40 + 5)/55 × 100 ≈ 81.8. B's is (15 + 25)/60 × 100 ≈ 66.7, so A is higher."), c("B, approximately 67 dependents per 100 working-age people.", false, "The value for B is about 67, but A's corresponding value is larger, about 82."), c("They are equal because each bar totals 100%.", false, "A total of 100% does not make the ratios of dependent to working-age groups equal."), c("A, exactly 45 dependents per 100 working-age people.", false, "Forty-five percent is the dependent share of the entire population; the ratio uses 55% as the denominator.")]),
        q("Which planning comparison is most directly supported by the age shares?", [c("Region A necessarily has a larger total population.", false, "Percentages do not reveal the total population sizes."), c("Region B necessarily has a higher unemployment rate.", false, "Age composition alone does not measure employment."), c("Region A has a larger school-age-related population share, while Region B has a larger older-adult share.", true, "A's 0–14 share is 40% compared with B's 15%; B's 65+ share is 25% compared with A's 5%. These differences can inform service planning."), c("Both regions must have identical migration rates.", false, "The chart provides age composition, not migration flows.")])
      ]
    },
    {
      subjects: ["apJava"], unit: 4, slug: "array", title: "Tracing indexed array updates",
      image: "array-indexes.svg", imageAlt: "An int array a has index-value pairs 0:2, 1:4, 2:6, 3:8, 4:10.",
      imageCaption: "Initial contents of a Java int array; index labels begin at zero.",
      imageDescription: "Five adjacent array cells are labeled with indexes 0, 1, 2, 3, and 4. Their respective initial values are 2, 4, 6, 8, and 10. Thus a.length is 5, and a[4] is initially 10.",
      text: "A Java program begins with int[] a = {2, 4, 6, 8, 10};. It then runs the following loop:\nfor (int i = 1; i < a.length; i++) {\n    a[i] = a[i] + a[i - 1];\n}\nThe diagram shows the array before the loop, and each assignment immediately updates the stored value.",
      questions: [
        q("What is a[3] after the loop finishes?", [c("14", false, "This adds 8 to the original a[2] value of 6, but a[2] has already been updated to 12."), c("20", true, "The loop produces a[1] = 6, then a[2] = 12, then a[3] = 8 + 12 = 20."), c("8", false, "The loop reaches i = 3 and changes that cell."), c("30", false, "Thirty is the final value of a[4], not a[3].")]),
        q("Why would changing the loop condition to i <= a.length cause an error?", [c("Java arrays cannot store sums.", false, "An int array can store integer sums; the problem is the index range."), c("The loop would start at index zero.", false, "Changing the condition does not change the initialization i = 1."), c("The final iteration would try to access a[5], outside the valid indexes 0 through 4.", true, "a.length is the number of elements, 5. The largest valid index is a.length − 1, which is 4."), c("The array length would automatically increase on every iteration.", false, "Assigning elements does not change the fixed length of a Java array.")])
      ]
    },
    {
      subjects: ["apGov"], unit: 2, slug: "treaty", title: "Shared responsibility in the treaty process",
      image: "treaty-process.svg", imageAlt: "President negotiates a treaty; Senate considers advice and consent; President may then ratify.",
      imageCaption: "A simplified Article II treaty process; this is not a diagram of every type of international agreement.",
      imageDescription: "A flowchart has three steps: (1) President negotiates and submits a treaty; (2) Senate provides advice and consent if two-thirds of senators present concur; (3) President may ratify. The flow proceeds only if the required consent is obtained. Senate consent permits presidential ratification; it does not itself ratify the treaty.",
      imageSource: "Original PrepSprint diagram. Constitutional process: U.S. Senate, About Treaties (senate.gov/about/powers-procedures/treaties.htm).",
      text: "The diagram summarizes the shared constitutional roles in making an Article II treaty. Consider a hypothetical treaty for which all 100 senators are present. There are 65 votes for advice and consent and 35 against. Assume the constitutional treaty process shown applies.",
      questions: [
        q("Do the 65 affirmative votes meet the constitutional requirement in this scenario?", [c("Yes, because every treaty requires only a simple majority.", false, "For an Article II treaty, the Constitution requires two-thirds of senators present, not a simple majority."), c("No; with 100 senators present, at least 67 must concur.", true, "Two-thirds of 100 is 66⅔, so at least 67 affirmative votes are required. Sixty-five falls short."), c("Yes, because the vice president can add two votes.", false, "The vice president cannot supply two votes or convert 65 into the required 67."), c("No; all 100 senators must agree.", false, "The requirement is two-thirds of senators present, not unanimity.")]),
        q("Which constitutional principle does the Senate's role most directly illustrate?", [c("Checks and balances between the legislative and executive branches.", true, "The president's treaty-making power is constrained by the Senate's constitutionally required participation."), c("Direct democracy through a nationwide referendum.", false, "The diagram describes action by elected institutions, not a popular referendum."), c("Exclusive presidential power over every step of treaty making.", false, "The Senate's required advice and consent makes the authority shared."), c("Judicial selection of foreign-policy agreements.", false, "Courts do not select treaties in the process shown.")])
      ]
    }
  ];

  // Apply after curriculum updates, before the app builds its subject index.
  // Match official unit numbers because Physics C E&M numbers begin at Unit 8.
  window.applyPassageMedia = function applyPassageMedia(banks = window.questionBanks) {
    if (!banks || typeof banks !== "object") throw new Error("Question banks must be loaded before passage media.");
    let added = 0;
    for (const set of sets) {
      for (const subject of set.subjects) {
        const units = banks[subject];
        if (!Array.isArray(units)) continue;
        const metadata = window.AP_CURRICULUM?.subjects?.[subject]?.units;
        const metaIndex = metadata?.findIndex(unit => unit.number === set.unit);
        const fallbackIndex = subject === "apPhysicsCEM" ? set.unit - 8 : set.unit - 1;
        const index = Number.isInteger(metaIndex) && metaIndex >= 0 ? metaIndex : fallbackIndex;
        const unit = units[index];
        if (!unit) throw new Error(`Missing unit for visual practice: ${subject} ${set.unit}`);
        const id = `visual-${subject}-${set.slug}`;
        unit.passages = unit.passages || [];
        if (unit.passages.some(passage => passage.id === id)) continue;
        unit.passages.push({
          id, title: set.title, text: set.text,
          image: `images/diagrams/${set.image}`,
          imageAlt: set.imageAlt,
          imageCaption: set.imageCaption,
          imageDescription: set.imageDescription,
          imageSource: set.imageSource || SOURCE,
          originalEducationalMaterial: true,
          reviewStatus: "original-practice", contentVersion: "2026.09",
          questions: set.questions.map((question, questionIndex) => ({
            ...question,
            id: `${id}-q${questionIndex + 1}`,
            category: unit.name, unitId: unit.id,
            choices: question.choices.map(choice => ({ ...choice })),
            originalEducationalMaterial: true,
            reviewStatus: "original-practice", contentVersion: "2026.09"
          }))
        });
        added++;
      }
    }
    return added;
  };
})();
