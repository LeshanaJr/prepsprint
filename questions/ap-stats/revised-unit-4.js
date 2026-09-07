window.questionBanks = window.questionBanks || {};
window.questionBanks.apStats = window.questionBanks.apStats || [];
window.questionBanks.apStats.push({
  "name": "Unit 4: Inference for Quantitative Data: Means",
  "contentVersion": "2026.09",
  "rapidQuestions": [
    {
      "id": "stats-2026-4.1",
      "prompt": "A population has mean 72 and standard deviation 12. For independent random samples of 36 observations, what are the mean and standard deviation of the sample mean?",
      "choices": [
        {
          "text": "72 and 12",
          "correct": false,
          "choiceExplanation": "Incorrect. The sample mean is centered at the population mean, and its standard deviation is 12/sqrt(36)=2."
        },
        {
          "text": "2 and 72",
          "correct": false,
          "choiceExplanation": "Incorrect. The sample mean is centered at the population mean, and its standard deviation is 12/sqrt(36)=2."
        },
        {
          "text": "432 and 12",
          "correct": false,
          "choiceExplanation": "Incorrect. The sample mean is centered at the population mean, and its standard deviation is 12/sqrt(36)=2."
        },
        {
          "text": "72 and 2",
          "correct": true,
          "choiceExplanation": "Correct. The sample mean is centered at the population mean, and its standard deviation is 12/sqrt(36)=2."
        }
      ],
      "topicIds": [
        "4.1"
      ],
      "category": "Unit 4: Inference for Quantitative Data: Means",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Describe a sampling distribution"
    },
    {
      "id": "stats-2026-4.2",
      "prompt": "A random sample of 25 observations from an approximately normal population has mean 40 and standard deviation 5. Which expression constructs a confidence interval for the population mean?",
      "choices": [
        {
          "text": "40 ± t*×5, using 25 degrees of freedom",
          "correct": false,
          "choiceExplanation": "Incorrect. With unknown population standard deviation, use a one-sample t-interval with standard error s/sqrt(n) and n−1 degrees of freedom."
        },
        {
          "text": "40 ± 0.95×5/25 for every confidence level",
          "correct": false,
          "choiceExplanation": "Incorrect. With unknown population standard deviation, use a one-sample t-interval with standard error s/sqrt(n) and n−1 degrees of freedom."
        },
        {
          "text": "40 ± t*×5/sqrt(25), using 24 degrees of freedom",
          "correct": true,
          "choiceExplanation": "Correct. With unknown population standard deviation, use a one-sample t-interval with standard error s/sqrt(n) and n−1 degrees of freedom."
        },
        {
          "text": "40 ± z*×25/5 because the population standard deviation is unknown",
          "correct": false,
          "choiceExplanation": "Incorrect. With unknown population standard deviation, use a one-sample t-interval with standard error s/sqrt(n) and n−1 degrees of freedom."
        }
      ],
      "topicIds": [
        "4.2"
      ],
      "category": "Unit 4: Inference for Quantitative Data: Means",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Construct a t-interval"
    },
    {
      "id": "stats-2026-4.3",
      "prompt": "A valid confidence interval for the mean difference in commute time, after minus before a new route, is (−8, −2) minutes. What does it suggest?",
      "choices": [
        {
          "text": "The route had no estimated effect because the interval is negative.",
          "correct": false,
          "choiceExplanation": "Incorrect. Both bounds for after minus before are negative, indicating an estimated decrease in the population mean paired difference."
        },
        {
          "text": "The mean commute time decreased by an estimated 2–8 minutes.",
          "correct": true,
          "choiceExplanation": "Correct. Both bounds for after minus before are negative, indicating an estimated decrease in the population mean paired difference."
        },
        {
          "text": "Every student saved exactly five minutes.",
          "correct": false,
          "choiceExplanation": "Incorrect. Both bounds for after minus before are negative, indicating an estimated decrease in the population mean paired difference."
        },
        {
          "text": "The mean commute time increased by 2–8 minutes.",
          "correct": false,
          "choiceExplanation": "Incorrect. Both bounds for after minus before are negative, indicating an estimated decrease in the population mean paired difference."
        }
      ],
      "topicIds": [
        "4.3"
      ],
      "category": "Unit 4: Inference for Quantitative Data: Means",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Interpret paired differences"
    },
    {
      "id": "stats-2026-4.4",
      "prompt": "Researchers record each of 30 volunteers’ reaction times before and after training. Which test addresses whether the mean change is zero?",
      "choices": [
        {
          "text": "A one-sample t-test on the 30 paired differences",
          "correct": true,
          "choiceExplanation": "Correct. Each person supplies linked measurements. Form after-minus-before differences and perform inference on their population mean, checking conditions for those differences."
        },
        {
          "text": "An independent two-sample t-test treating all 60 times as unrelated",
          "correct": false,
          "choiceExplanation": "Incorrect. Each person supplies linked measurements. Form after-minus-before differences and perform inference on their population mean, checking conditions for those differences."
        },
        {
          "text": "A two-proportion z-test",
          "correct": false,
          "choiceExplanation": "Incorrect. Each person supplies linked measurements. Form after-minus-before differences and perform inference on their population mean, checking conditions for those differences."
        },
        {
          "text": "A chi-square test for a mean",
          "correct": false,
          "choiceExplanation": "Incorrect. Each person supplies linked measurements. Form after-minus-before differences and perform inference on their population mean, checking conditions for those differences."
        }
      ],
      "topicIds": [
        "4.4"
      ],
      "category": "Unit 4: Inference for Quantitative Data: Means",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Select a paired procedure"
    },
    {
      "id": "stats-2026-4.5",
      "prompt": "For H0: mu=50, a random sample of 16 observations has mean 53 and standard deviation 6. Assuming t-test conditions hold, what is the test statistic?",
      "choices": [
        {
          "text": "0.5",
          "correct": false,
          "choiceExplanation": "Incorrect. t=(53−50)/(6/sqrt(16))=3/1.5=2."
        },
        {
          "text": "8",
          "correct": false,
          "choiceExplanation": "Incorrect. t=(53−50)/(6/sqrt(16))=3/1.5=2."
        },
        {
          "text": "12",
          "correct": false,
          "choiceExplanation": "Incorrect. t=(53−50)/(6/sqrt(16))=3/1.5=2."
        },
        {
          "text": "2",
          "correct": true,
          "choiceExplanation": "Correct. t=(53−50)/(6/sqrt(16))=3/1.5=2."
        }
      ],
      "topicIds": [
        "4.5"
      ],
      "category": "Unit 4: Inference for Quantitative Data: Means",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Calculate a test statistic"
    },
    {
      "id": "stats-2026-4.6",
      "prompt": "Independent sample means have sampling standard deviations 3 and 4. What is the standard deviation of their difference?",
      "choices": [
        {
          "text": "7",
          "correct": false,
          "choiceExplanation": "Incorrect. For independent sample means, variances add: sqrt(3²+4²)=5. This concerns the sampling distribution of a difference of means."
        },
        {
          "text": "25",
          "correct": false,
          "choiceExplanation": "Incorrect. For independent sample means, variances add: sqrt(3²+4²)=5. This concerns the sampling distribution of a difference of means."
        },
        {
          "text": "5",
          "correct": true,
          "choiceExplanation": "Correct. For independent sample means, variances add: sqrt(3²+4²)=5. This concerns the sampling distribution of a difference of means."
        },
        {
          "text": "1",
          "correct": false,
          "choiceExplanation": "Incorrect. For independent sample means, variances add: sqrt(3²+4²)=5. This concerns the sampling distribution of a difference of means."
        }
      ],
      "topicIds": [
        "4.6"
      ],
      "category": "Unit 4: Inference for Quantitative Data: Means",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Calculate sampling variability"
    },
    {
      "id": "stats-2026-4.7",
      "prompt": "Independent random samples have means 18 and 15, standard deviations 4 and 3, and sample sizes 25 and 36. Which expression is a two-sample t confidence interval for mu1−mu2?",
      "choices": [
        {
          "text": "3 ± t*(4+3)",
          "correct": false,
          "choiceExplanation": "Incorrect. Center at 18−15=3 and combine the independent estimated variances s1²/n1+s2²/n2. Use the appropriate two-sample t critical value."
        },
        {
          "text": "3 ± t* sqrt(16/25 + 9/36)",
          "correct": true,
          "choiceExplanation": "Correct. Center at 18−15=3 and combine the independent estimated variances s1²/n1+s2²/n2. Use the appropriate two-sample t critical value."
        },
        {
          "text": "3 ± t* sqrt(16/25 − 9/36)",
          "correct": false,
          "choiceExplanation": "Incorrect. Center at 18−15=3 and combine the independent estimated variances s1²/n1+s2²/n2. Use the appropriate two-sample t critical value."
        },
        {
          "text": "33 ± t* sqrt(16/25 + 9/36)",
          "correct": false,
          "choiceExplanation": "Incorrect. Center at 18−15=3 and combine the independent estimated variances s1²/n1+s2²/n2. Use the appropriate two-sample t critical value."
        }
      ],
      "topicIds": [
        "4.7"
      ],
      "category": "Unit 4: Inference for Quantitative Data: Means",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Construct a two-sample interval"
    },
    {
      "id": "stats-2026-4.8",
      "prompt": "A valid 95% confidence interval for muA−muB is (−1.2, 3.8). Which claim is supported?",
      "choices": [
        {
          "text": "The interval does not establish a difference from zero at the corresponding two-sided 5% level.",
          "correct": true,
          "choiceExplanation": "Correct. Zero is a plausible value in this interval. This is insufficient evidence of a difference, not proof of equality or a statement about individual values."
        },
        {
          "text": "The two population means have been proven identical.",
          "correct": false,
          "choiceExplanation": "Incorrect. Zero is a plausible value in this interval. This is insufficient evidence of a difference, not proof of equality or a statement about individual values."
        },
        {
          "text": "Population A definitely has the larger mean.",
          "correct": false,
          "choiceExplanation": "Incorrect. Zero is a plausible value in this interval. This is insufficient evidence of a difference, not proof of equality or a statement about individual values."
        },
        {
          "text": "95% of individual differences lie in this interval.",
          "correct": false,
          "choiceExplanation": "Incorrect. Zero is a plausible value in this interval. This is insufficient evidence of a difference, not proof of equality or a statement about individual values."
        }
      ],
      "topicIds": [
        "4.8"
      ],
      "category": "Unit 4: Inference for Quantitative Data: Means",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Interpret an interval"
    },
    {
      "id": "stats-2026-4.9",
      "prompt": "Two independent random samples compare mean wait times at clinics A and B. Investigators suspect A’s mean is lower. Which alternative hypothesis is appropriate?",
      "choices": [
        {
          "text": "Ha: muA−muB>0",
          "correct": false,
          "choiceExplanation": "Incorrect. The response is quantitative, and the hypothesis concerns population means. A lower mean at A gives a negative difference A−B."
        },
        {
          "text": "Ha: sample mean A−sample mean B<0",
          "correct": false,
          "choiceExplanation": "Incorrect. The response is quantitative, and the hypothesis concerns population means. A lower mean at A gives a negative difference A−B."
        },
        {
          "text": "Ha: pA−pB<0",
          "correct": false,
          "choiceExplanation": "Incorrect. The response is quantitative, and the hypothesis concerns population means. A lower mean at A gives a negative difference A−B."
        },
        {
          "text": "Ha: muA−muB<0",
          "correct": true,
          "choiceExplanation": "Correct. The response is quantitative, and the hypothesis concerns population means. A lower mean at A gives a negative difference A−B."
        }
      ],
      "topicIds": [
        "4.9"
      ],
      "category": "Unit 4: Inference for Quantitative Data: Means",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "State hypotheses"
    },
    {
      "id": "stats-2026-4.10",
      "prompt": "A valid two-sample t-test of equal population means versus unequal means has p-value 0.12. At alpha=0.05, what is the correct conclusion?",
      "choices": [
        {
          "text": "Reject equality because 0.12 is greater than zero.",
          "correct": false,
          "choiceExplanation": "Incorrect. Because 0.12>0.05, the result is not statistically significant at the stated level. Failing to reject does not prove equality."
        },
        {
          "text": "The probability the means are equal is 0.12.",
          "correct": false,
          "choiceExplanation": "Incorrect. Because 0.12>0.05, the result is not statistically significant at the stated level. Failing to reject does not prove equality."
        },
        {
          "text": "Fail to reject equality; the data do not provide sufficient evidence of different means.",
          "correct": true,
          "choiceExplanation": "Correct. Because 0.12>0.05, the result is not statistically significant at the stated level. Failing to reject does not prove equality."
        },
        {
          "text": "The population means are certainly equal.",
          "correct": false,
          "choiceExplanation": "Incorrect. Because 0.12>0.05, the result is not statistically significant at the stated level. Failing to reject does not prove equality."
        }
      ],
      "topicIds": [
        "4.10"
      ],
      "category": "Unit 4: Inference for Quantitative Data: Means",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Make an inference decision"
    }
  ],
  "passages": []
});
