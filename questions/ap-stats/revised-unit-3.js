window.questionBanks = window.questionBanks || {};
window.questionBanks.apStats = window.questionBanks.apStats || [];
window.questionBanks.apStats.push({
  "name": "Unit 3: Inference for Categorical Data: Proportions",
  "contentVersion": "2026.09",
  "rapidQuestions": [
    {
      "id": "stats-2026-3.1",
      "prompt": "Across many random samples, an estimator’s average equals the population parameter. What property does this describe?",
      "choices": [
        {
          "text": "Zero sampling variability",
          "correct": false,
          "choiceExplanation": "Incorrect. An unbiased estimator is centered on the parameter over repeated sampling. Individual estimates can still differ from the parameter."
        },
        {
          "text": "A census",
          "correct": false,
          "choiceExplanation": "Incorrect. An unbiased estimator is centered on the parameter over repeated sampling. Individual estimates can still differ from the parameter."
        },
        {
          "text": "A guaranteed correct estimate in every sample",
          "correct": false,
          "choiceExplanation": "Incorrect. An unbiased estimator is centered on the parameter over repeated sampling. Individual estimates can still differ from the parameter."
        },
        {
          "text": "Unbiasedness",
          "correct": true,
          "choiceExplanation": "Correct. An unbiased estimator is centered on the parameter over repeated sampling. Individual estimates can still differ from the parameter."
        }
      ],
      "topicIds": [
        "3.1"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Interpret estimator bias"
    },
    {
      "id": "stats-2026-3.2",
      "prompt": "A population proportion is p=0.40. For independent random samples of n=100, what is the standard deviation of the sample proportion?",
      "choices": [
        {
          "text": "sqrt(0.40×0.60), about 0.490",
          "correct": false,
          "choiceExplanation": "Incorrect. The sampling standard deviation is sqrt(p(1−p)/n). If sampling without replacement, also check the 10% condition."
        },
        {
          "text": "100×0.40, or 40",
          "correct": false,
          "choiceExplanation": "Incorrect. The sampling standard deviation is sqrt(p(1−p)/n). If sampling without replacement, also check the 10% condition."
        },
        {
          "text": "sqrt(0.40×0.60/100), about 0.049",
          "correct": true,
          "choiceExplanation": "Correct. The sampling standard deviation is sqrt(p(1−p)/n). If sampling without replacement, also check the 10% condition."
        },
        {
          "text": "0.40/100, or 0.004",
          "correct": false,
          "choiceExplanation": "Incorrect. The sampling standard deviation is sqrt(p(1−p)/n). If sampling without replacement, also check the 10% condition."
        }
      ],
      "topicIds": [
        "3.2"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Calculate sampling variability"
    },
    {
      "id": "stats-2026-3.3",
      "prompt": "In a random sample of 200 voters from a large population, 120 favor a proposal. Which expression is a 95% one-proportion confidence interval?",
      "choices": [
        {
          "text": "0.60 ± 0.95 sqrt(0.60×0.40/200)",
          "correct": false,
          "choiceExplanation": "Incorrect. For a confidence interval, estimate the standard error using the sample proportion 120/200=0.60; 1.96 is the 95% normal critical value. Counts of 120 and 80 meet the large-count condition."
        },
        {
          "text": "0.60 ± 1.96 sqrt(0.60×0.40/200)",
          "correct": true,
          "choiceExplanation": "Correct. For a confidence interval, estimate the standard error using the sample proportion 120/200=0.60; 1.96 is the 95% normal critical value. Counts of 120 and 80 meet the large-count condition."
        },
        {
          "text": "0.60 ± 1.96 sqrt(0.50×0.50/200)",
          "correct": false,
          "choiceExplanation": "Incorrect. For a confidence interval, estimate the standard error using the sample proportion 120/200=0.60; 1.96 is the 95% normal critical value. Counts of 120 and 80 meet the large-count condition."
        },
        {
          "text": "120 ± 1.96 sqrt(120×80/200)",
          "correct": false,
          "choiceExplanation": "Incorrect. For a confidence interval, estimate the standard error using the sample proportion 120/200=0.60; 1.96 is the 95% normal critical value. Counts of 120 and 80 meet the large-count condition."
        }
      ],
      "topicIds": [
        "3.3"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Construct a confidence interval"
    },
    {
      "id": "stats-2026-3.4",
      "prompt": "A valid 95% confidence interval for the proportion of district students who walk to school is (0.22, 0.30). Which interpretation is appropriate?",
      "choices": [
        {
          "text": "We are 95% confident that 22%–30% of district students walk to school.",
          "correct": true,
          "choiceExplanation": "Correct. A confidence interval estimates a population parameter. The confidence level describes the long-run success rate of the method, not the probability that an individual has a characteristic."
        },
        {
          "text": "There is a 95% chance that a randomly selected student walks to school.",
          "correct": false,
          "choiceExplanation": "Incorrect. A confidence interval estimates a population parameter. The confidence level describes the long-run success rate of the method, not the probability that an individual has a characteristic."
        },
        {
          "text": "95% of sample proportions equal 0.26.",
          "correct": false,
          "choiceExplanation": "Incorrect. A confidence interval estimates a population parameter. The confidence level describes the long-run success rate of the method, not the probability that an individual has a characteristic."
        },
        {
          "text": "95% of individual students have a walking proportion between 0.22 and 0.30.",
          "correct": false,
          "choiceExplanation": "Incorrect. A confidence interval estimates a population parameter. The confidence level describes the long-run success rate of the method, not the probability that an individual has a characteristic."
        }
      ],
      "topicIds": [
        "3.4"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Interpret a confidence interval"
    },
    {
      "id": "stats-2026-3.5",
      "prompt": "A manufacturer claims that 10% of devices fail. An inspector tests whether the failure proportion is higher. Which hypotheses are correct?",
      "choices": [
        {
          "text": "H0: sample proportion=0.10; Ha: sample proportion>0.10",
          "correct": false,
          "choiceExplanation": "Incorrect. Hypotheses refer to the population failure proportion p, with equality in the null and the suspected increase in the alternative."
        },
        {
          "text": "H0: p>0.10; Ha: p=0.10",
          "correct": false,
          "choiceExplanation": "Incorrect. Hypotheses refer to the population failure proportion p, with equality in the null and the suspected increase in the alternative."
        },
        {
          "text": "H0: p=0.90; Ha: p<0.90",
          "correct": false,
          "choiceExplanation": "Incorrect. Hypotheses refer to the population failure proportion p, with equality in the null and the suspected increase in the alternative."
        },
        {
          "text": "H0: p=0.10; Ha: p>0.10",
          "correct": true,
          "choiceExplanation": "Correct. Hypotheses refer to the population failure proportion p, with equality in the null and the suspected increase in the alternative."
        }
      ],
      "topicIds": [
        "3.5"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "State hypotheses"
    },
    {
      "id": "stats-2026-3.6",
      "prompt": "A one-sided test gives p-value 0.03. What does that value mean?",
      "choices": [
        {
          "text": "The probability the alternative hypothesis is true is 0.97.",
          "correct": false,
          "choiceExplanation": "Incorrect. The p-value is calculated under the null model and describes data extremeness; it is not the posterior probability of either hypothesis."
        },
        {
          "text": "Exactly 3% of the population has the measured trait.",
          "correct": false,
          "choiceExplanation": "Incorrect. The p-value is calculated under the null model and describes data extremeness; it is not the posterior probability of either hypothesis."
        },
        {
          "text": "If the null model is true, the probability of a result at least as extreme in the alternative’s direction is 0.03.",
          "correct": true,
          "choiceExplanation": "Correct. The p-value is calculated under the null model and describes data extremeness; it is not the posterior probability of either hypothesis."
        },
        {
          "text": "The probability the null hypothesis is true is 0.03.",
          "correct": false,
          "choiceExplanation": "Incorrect. The p-value is calculated under the null model and describes data extremeness; it is not the posterior probability of either hypothesis."
        }
      ],
      "topicIds": [
        "3.6"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Interpret a p-value"
    },
    {
      "id": "stats-2026-3.7",
      "prompt": "A test of H0: p=0.50 versus Ha: p>0.50 has p-value 0.018. At significance level 0.05, what conclusion follows?",
      "choices": [
        {
          "text": "Accept H0 because 0.018 is less than 0.05.",
          "correct": false,
          "choiceExplanation": "Incorrect. Because 0.018<0.05, reject the null and describe evidence for the stated alternative. A significance test does not prove an exact parameter value."
        },
        {
          "text": "Reject H0; the data provide evidence that the population proportion exceeds 0.50.",
          "correct": true,
          "choiceExplanation": "Correct. Because 0.018<0.05, reject the null and describe evidence for the stated alternative. A significance test does not prove an exact parameter value."
        },
        {
          "text": "Fail to reject H0 because 0.018 is positive.",
          "correct": false,
          "choiceExplanation": "Incorrect. Because 0.018<0.05, reject the null and describe evidence for the stated alternative. A significance test does not prove an exact parameter value."
        },
        {
          "text": "Prove that p equals the sample proportion.",
          "correct": false,
          "choiceExplanation": "Incorrect. Because 0.018<0.05, reject the null and describe evidence for the stated alternative. A significance test does not prove an exact parameter value."
        }
      ],
      "topicIds": [
        "3.7"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Make an inference decision"
    },
    {
      "id": "stats-2026-3.8",
      "prompt": "A quality test rejects H0: p=0.02 in favor of p>0.02 even though the true defect proportion is 0.02. What happened?",
      "choices": [
        {
          "text": "A Type I error",
          "correct": true,
          "choiceExplanation": "Correct. A Type I error is rejecting a true null hypothesis. A Type II error instead fails to reject a false null."
        },
        {
          "text": "A Type II error",
          "correct": false,
          "choiceExplanation": "Incorrect. A Type I error is rejecting a true null hypothesis. A Type II error instead fails to reject a false null."
        },
        {
          "text": "An increase in power with no error",
          "correct": false,
          "choiceExplanation": "Incorrect. A Type I error is rejecting a true null hypothesis. A Type II error instead fails to reject a false null."
        },
        {
          "text": "A correct rejection",
          "correct": false,
          "choiceExplanation": "Incorrect. A Type I error is rejecting a true null hypothesis. A Type II error instead fails to reject a false null."
        }
      ],
      "topicIds": [
        "3.8"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Identify a statistical error"
    },
    {
      "id": "stats-2026-3.9",
      "prompt": "Two independent populations have p1=0.60 and p2=0.40. For independent random samples, what is the mean of the sampling distribution of sample proportion 1 minus sample proportion 2?",
      "choices": [
        {
          "text": "1.00",
          "correct": false,
          "choiceExplanation": "Incorrect. The expected difference of the sample proportions is p1−p2=0.20."
        },
        {
          "text": "0.24",
          "correct": false,
          "choiceExplanation": "Incorrect. The expected difference of the sample proportions is p1−p2=0.20."
        },
        {
          "text": "0.50",
          "correct": false,
          "choiceExplanation": "Incorrect. The expected difference of the sample proportions is p1−p2=0.20."
        },
        {
          "text": "0.20",
          "correct": true,
          "choiceExplanation": "Correct. The expected difference of the sample proportions is p1−p2=0.20."
        }
      ],
      "topicIds": [
        "3.9"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Describe a sampling distribution"
    },
    {
      "id": "stats-2026-3.10",
      "prompt": "Independent random samples have proportions 0.60 and 0.45 with sizes 100 and 200. Which expression estimates the standard error for a confidence interval for p1−p2?",
      "choices": [
        {
          "text": "0.60−0.45",
          "correct": false,
          "choiceExplanation": "Incorrect. An interval for independent proportions uses the sum of the two estimated variances, with each sample proportion and its own sample size."
        },
        {
          "text": "sqrt((0.60+0.45)/300)",
          "correct": false,
          "choiceExplanation": "Incorrect. An interval for independent proportions uses the sum of the two estimated variances, with each sample proportion and its own sample size."
        },
        {
          "text": "sqrt(0.60×0.40/100 + 0.45×0.55/200)",
          "correct": true,
          "choiceExplanation": "Correct. An interval for independent proportions uses the sum of the two estimated variances, with each sample proportion and its own sample size."
        },
        {
          "text": "sqrt(0.60×0.40/100 − 0.45×0.55/200)",
          "correct": false,
          "choiceExplanation": "Incorrect. An interval for independent proportions uses the sum of the two estimated variances, with each sample proportion and its own sample size."
        }
      ],
      "topicIds": [
        "3.10"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Calculate a standard error"
    },
    {
      "id": "stats-2026-3.11",
      "prompt": "A valid 95% confidence interval for pA−pB is (0.04, 0.12). Which conclusion is supported?",
      "choices": [
        {
          "text": "Every member of A differs from every member of B by 0.08.",
          "correct": false,
          "choiceExplanation": "Incorrect. The parameter is a difference in population proportions. The entire interval is positive and the scale corresponds to percentage-point differences."
        },
        {
          "text": "The proportion in population A is estimated to exceed B by 4–12 percentage points.",
          "correct": true,
          "choiceExplanation": "Correct. The parameter is a difference in population proportions. The entire interval is positive and the scale corresponds to percentage-point differences."
        },
        {
          "text": "A is estimated to be 4–12 times as large as B.",
          "correct": false,
          "choiceExplanation": "Incorrect. The parameter is a difference in population proportions. The entire interval is positive and the scale corresponds to percentage-point differences."
        },
        {
          "text": "There is no evidence of any difference because the interval excludes 1.",
          "correct": false,
          "choiceExplanation": "Incorrect. The parameter is a difference in population proportions. The entire interval is positive and the scale corresponds to percentage-point differences."
        }
      ],
      "topicIds": [
        "3.11"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Interpret a difference in proportions"
    },
    {
      "id": "stats-2026-3.12",
      "prompt": "Independent random samples compare the proportions of two towns supporting a policy. Which null hypothesis is appropriate for a two-proportion z-test?",
      "choices": [
        {
          "text": "H0: p1−p2=0",
          "correct": true,
          "choiceExplanation": "Correct. A two-proportion test compares population proportions. Equal population proportions are expressed as a zero difference."
        },
        {
          "text": "H0: sample proportion 1−sample proportion 2=0",
          "correct": false,
          "choiceExplanation": "Incorrect. A two-proportion test compares population proportions. Equal population proportions are expressed as a zero difference."
        },
        {
          "text": "H0: mean 1−mean 2=0",
          "correct": false,
          "choiceExplanation": "Incorrect. A two-proportion test compares population proportions. Equal population proportions are expressed as a zero difference."
        },
        {
          "text": "H0: p1+p2=0",
          "correct": false,
          "choiceExplanation": "Incorrect. A two-proportion test compares population proportions. Equal population proportions are expressed as a zero difference."
        }
      ],
      "topicIds": [
        "3.12"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "State hypotheses"
    },
    {
      "id": "stats-2026-3.13",
      "prompt": "Two independent random samples have 60 successes in 100 trials and 80 successes in 200 trials. What pooled proportion is used when testing H0: p1=p2?",
      "choices": [
        {
          "text": "(0.60+0.40)/2",
          "correct": false,
          "choiceExplanation": "Incorrect. Under the equal-proportions null, pool all successes and all trials: (60+80)/(100+200)=140/300. An unweighted average ignores unequal sample sizes."
        },
        {
          "text": "60/200",
          "correct": false,
          "choiceExplanation": "Incorrect. Under the equal-proportions null, pool all successes and all trials: (60+80)/(100+200)=140/300. An unweighted average ignores unequal sample sizes."
        },
        {
          "text": "80/100",
          "correct": false,
          "choiceExplanation": "Incorrect. Under the equal-proportions null, pool all successes and all trials: (60+80)/(100+200)=140/300. An unweighted average ignores unequal sample sizes."
        },
        {
          "text": "140/300",
          "correct": true,
          "choiceExplanation": "Correct. Under the equal-proportions null, pool all successes and all trials: (60+80)/(100+200)=140/300. An unweighted average ignores unequal sample sizes."
        }
      ],
      "topicIds": [
        "3.13"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Calculate a pooled estimate"
    },
    {
      "id": "stats-2026-3.14",
      "prompt": "A random sample of adults is classified by neighborhood and preferred transit mode. Which procedure tests whether these two categorical variables are associated?",
      "choices": [
        {
          "text": "A confidence interval for a regression slope",
          "correct": false,
          "choiceExplanation": "Incorrect. A chi-square independence test uses a two-way table from one sampled population. Check randomization, the 10% condition when relevant, and expected cell counts of at least five."
        },
        {
          "text": "A paired t-test",
          "correct": false,
          "choiceExplanation": "Incorrect. A chi-square independence test uses a two-way table from one sampled population. Check randomization, the 10% condition when relevant, and expected cell counts of at least five."
        },
        {
          "text": "A chi-square test of independence",
          "correct": true,
          "choiceExplanation": "Correct. A chi-square independence test uses a two-way table from one sampled population. Check randomization, the 10% condition when relevant, and expected cell counts of at least five."
        },
        {
          "text": "A one-sample t-test for a mean",
          "correct": false,
          "choiceExplanation": "Incorrect. A chi-square independence test uses a two-way table from one sampled population. Check randomization, the 10% condition when relevant, and expected cell counts of at least five."
        }
      ],
      "topicIds": [
        "3.14"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Select an inference procedure"
    },
    {
      "id": "stats-2026-3.15",
      "prompt": "In a 3-by-2 table, a cell has row total 40 and column total 60; the grand total is 120. What are that cell’s expected count under independence and the test’s degrees of freedom?",
      "choices": [
        {
          "text": "Expected count 0.50; degrees of freedom 6",
          "correct": false,
          "choiceExplanation": "Incorrect. Expected count=(40×60)/120=20, and degrees of freedom=(3−1)(2−1)=2."
        },
        {
          "text": "Expected count 20; degrees of freedom 2",
          "correct": true,
          "choiceExplanation": "Correct. Expected count=(40×60)/120=20, and degrees of freedom=(3−1)(2−1)=2."
        },
        {
          "text": "Expected count 20; degrees of freedom 5",
          "correct": false,
          "choiceExplanation": "Incorrect. Expected count=(40×60)/120=20, and degrees of freedom=(3−1)(2−1)=2."
        },
        {
          "text": "Expected count 100; degrees of freedom 2",
          "correct": false,
          "choiceExplanation": "Incorrect. Expected count=(40×60)/120=20, and degrees of freedom=(3−1)(2−1)=2."
        }
      ],
      "topicIds": [
        "3.15"
      ],
      "category": "Unit 3: Inference for Categorical Data: Proportions",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Calculate expected counts and degrees of freedom"
    }
  ],
  "passages": []
});
