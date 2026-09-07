window.questionBanks = window.questionBanks || {};
window.questionBanks.apStats = window.questionBanks.apStats || [];
window.questionBanks.apStats.push({
  "name": "Unit 5: Regression Analysis",
  "contentVersion": "2026.09",
  "rapidQuestions": [
    {
      "id": "stats-2026-5.1",
      "prompt": "A scatterplot of outside temperature (x) and heating use (y) follows a fairly tight downward trend. Which description fits?",
      "choices": [
        {
          "text": "A strong positive association",
          "correct": false,
          "choiceExplanation": "Incorrect. As x increases, y tends to decrease. The tight pattern indicates strength; association alone does not establish a causal direction."
        },
        {
          "text": "No association because values differ",
          "correct": false,
          "choiceExplanation": "Incorrect. As x increases, y tends to decrease. The tight pattern indicates strength; association alone does not establish a causal direction."
        },
        {
          "text": "Proof that heating use determines the weather",
          "correct": false,
          "choiceExplanation": "Incorrect. As x increases, y tends to decrease. The tight pattern indicates strength; association alone does not establish a causal direction."
        },
        {
          "text": "A strong negative association",
          "correct": true,
          "choiceExplanation": "Correct. As x increases, y tends to decrease. The tight pattern indicates strength; association alone does not establish a causal direction."
        }
      ],
      "topicIds": [
        "5.1"
      ],
      "category": "Unit 5: Regression Analysis",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Describe a scatterplot"
    },
    {
      "id": "stats-2026-5.2",
      "prompt": "A data set has correlation r=0.80 between height in centimeters and reach in centimeters. If every height is converted to meters, what is the new correlation?",
      "choices": [
        {
          "text": "80",
          "correct": false,
          "choiceExplanation": "Incorrect. Correlation is unitless and unchanged by multiplying one variable by a positive constant."
        },
        {
          "text": "−0.80",
          "correct": false,
          "choiceExplanation": "Incorrect. Correlation is unitless and unchanged by multiplying one variable by a positive constant."
        },
        {
          "text": "0.80",
          "correct": true,
          "choiceExplanation": "Correct. Correlation is unitless and unchanged by multiplying one variable by a positive constant."
        },
        {
          "text": "0.008",
          "correct": false,
          "choiceExplanation": "Incorrect. Correlation is unitless and unchanged by multiplying one variable by a positive constant."
        }
      ],
      "topicIds": [
        "5.2"
      ],
      "category": "Unit 5: Regression Analysis",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Interpret correlation"
    },
    {
      "id": "stats-2026-5.3",
      "prompt": "A fitted model predicts delivery time in minutes as y-hat=12+3x, where x is distance in kilometers. What does the slope mean?",
      "choices": [
        {
          "text": "Every observed delivery takes exactly its predicted time.",
          "correct": false,
          "choiceExplanation": "Incorrect. The slope is change in predicted response per unit increase in the explanatory variable: 3 minutes per kilometer."
        },
        {
          "text": "Each additional kilometer is associated with a 3-minute increase in predicted delivery time.",
          "correct": true,
          "choiceExplanation": "Correct. The slope is change in predicted response per unit increase in the explanatory variable: 3 minutes per kilometer."
        },
        {
          "text": "A zero-kilometer delivery must take exactly 3 minutes.",
          "correct": false,
          "choiceExplanation": "Incorrect. The slope is change in predicted response per unit increase in the explanatory variable: 3 minutes per kilometer."
        },
        {
          "text": "Each additional minute adds 12 kilometers.",
          "correct": false,
          "choiceExplanation": "Incorrect. The slope is change in predicted response per unit increase in the explanatory variable: 3 minutes per kilometer."
        }
      ],
      "topicIds": [
        "5.3"
      ],
      "category": "Unit 5: Regression Analysis",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Interpret a regression model"
    },
    {
      "id": "stats-2026-5.4",
      "prompt": "A regression model predicts a 26-minute delivery, but the observed time is 31 minutes. What is the residual?",
      "choices": [
        {
          "text": "5 minutes",
          "correct": true,
          "choiceExplanation": "Correct. Residual=observed−predicted=31−26=5 minutes. This delivery took longer than predicted."
        },
        {
          "text": "−5 minutes",
          "correct": false,
          "choiceExplanation": "Incorrect. Residual=observed−predicted=31−26=5 minutes. This delivery took longer than predicted."
        },
        {
          "text": "57 minutes",
          "correct": false,
          "choiceExplanation": "Incorrect. Residual=observed−predicted=31−26=5 minutes. This delivery took longer than predicted."
        },
        {
          "text": "31/26 minutes",
          "correct": false,
          "choiceExplanation": "Incorrect. Residual=observed−predicted=31−26=5 minutes. This delivery took longer than predicted."
        }
      ],
      "topicIds": [
        "5.4"
      ],
      "category": "Unit 5: Regression Analysis",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Calculate a residual"
    },
    {
      "id": "stats-2026-5.5",
      "prompt": "What quantity does a least-squares regression line minimize?",
      "choices": [
        {
          "text": "The sum of the x values",
          "correct": false,
          "choiceExplanation": "Incorrect. Least squares chooses the intercept and slope to minimize the sum of squared differences between observed and predicted responses."
        },
        {
          "text": "The number of observations above the line",
          "correct": false,
          "choiceExplanation": "Incorrect. Least squares chooses the intercept and slope to minimize the sum of squared differences between observed and predicted responses."
        },
        {
          "text": "The product of all predicted y values",
          "correct": false,
          "choiceExplanation": "Incorrect. Least squares chooses the intercept and slope to minimize the sum of squared differences between observed and predicted responses."
        },
        {
          "text": "The sum of squared vertical residuals",
          "correct": true,
          "choiceExplanation": "Correct. Least squares chooses the intercept and slope to minimize the sum of squared differences between observed and predicted responses."
        }
      ],
      "topicIds": [
        "5.5"
      ],
      "category": "Unit 5: Regression Analysis",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
      "skill": "Explain least squares"
    }
  ],
  "passages": [
    {
      "id": "stats-2026-regression-set",
      "title": "Bike distance and travel time",
      "text": "For 24 rides with distances between 2 and 12 km, a fitted linear model predicts travel time (minutes) as y-hat=5+4x, where x is distance (km). The coefficient of determination is r-squared=0.81. One observed 6 km ride took 32 minutes.",
      "image": "",
      "imageAlt": "",
      "reviewStatus": "original-practice",
      "originalEducationalMaterial": true,
      "contentVersion": "2026.09",
      "questions": [
        {
          "id": "stats-2026-regression-set-q1",
          "prompt": "What is the model’s predicted time for a 6 km ride?",
          "choices": [
            {
              "text": "35 minutes",
              "correct": false,
              "choiceExplanation": "Incorrect. Substitute x=6 into y-hat=5+4x: 5+24=29 minutes."
            },
            {
              "text": "29 minutes",
              "correct": true,
              "choiceExplanation": "Correct. Substitute x=6 into y-hat=5+4x: 5+24=29 minutes."
            },
            {
              "text": "24 minutes",
              "correct": false,
              "choiceExplanation": "Incorrect. Substitute x=6 into y-hat=5+4x: 5+24=29 minutes."
            },
            {
              "text": "32 minutes",
              "correct": false,
              "choiceExplanation": "Incorrect. Substitute x=6 into y-hat=5+4x: 5+24=29 minutes."
            }
          ],
          "topicIds": [
            "5.3"
          ],
          "category": "Unit 5: Regression Analysis",
          "reviewStatus": "original-practice",
          "originalEducationalMaterial": true,
          "contentVersion": "2026.09",
          "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
          "skill": "Interpret a regression model"
        },
        {
          "id": "stats-2026-regression-set-q2",
          "prompt": "What is the residual for the observed 6 km ride?",
          "choices": [
            {
              "text": "3 minutes",
              "correct": true,
              "choiceExplanation": "Correct. Residual=32−29=3 minutes; the observed ride took longer than predicted."
            },
            {
              "text": "−3 minutes",
              "correct": false,
              "choiceExplanation": "Incorrect. Residual=32−29=3 minutes; the observed ride took longer than predicted."
            },
            {
              "text": "61 minutes",
              "correct": false,
              "choiceExplanation": "Incorrect. Residual=32−29=3 minutes; the observed ride took longer than predicted."
            },
            {
              "text": "8 minutes",
              "correct": false,
              "choiceExplanation": "Incorrect. Residual=32−29=3 minutes; the observed ride took longer than predicted."
            }
          ],
          "topicIds": [
            "5.4"
          ],
          "category": "Unit 5: Regression Analysis",
          "reviewStatus": "original-practice",
          "originalEducationalMaterial": true,
          "contentVersion": "2026.09",
          "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
          "skill": "Calculate a residual"
        },
        {
          "id": "stats-2026-regression-set-q3",
          "prompt": "Which interpretation of r-squared is correct?",
          "choices": [
            {
              "text": "81% of rides lie exactly on the line.",
              "correct": false,
              "choiceExplanation": "Incorrect. The coefficient of determination describes explained variation in the response within the fitted data; it is not a causal fraction or a guarantee for extrapolation."
            },
            {
              "text": "Distance causes 81% of each ride’s travel time.",
              "correct": false,
              "choiceExplanation": "Incorrect. The coefficient of determination describes explained variation in the response within the fitted data; it is not a causal fraction or a guarantee for extrapolation."
            },
            {
              "text": "The model will predict a 100 km ride with 81% accuracy.",
              "correct": false,
              "choiceExplanation": "Incorrect. The coefficient of determination describes explained variation in the response within the fitted data; it is not a causal fraction or a guarantee for extrapolation."
            },
            {
              "text": "About 81% of the variability in observed travel time is explained by the fitted linear relationship with distance.",
              "correct": true,
              "choiceExplanation": "Correct. The coefficient of determination describes explained variation in the response within the fitted data; it is not a causal fraction or a guarantee for extrapolation."
            }
          ],
          "topicIds": [
            "5.5"
          ],
          "category": "Unit 5: Regression Analysis",
          "reviewStatus": "original-practice",
          "originalEducationalMaterial": true,
          "contentVersion": "2026.09",
          "frameworkSource": "https://apcentral.collegeboard.org/media/pdf/ap-statistics-course-and-exam-description-effective-fall-2026.pdf",
          "skill": "Explain least squares"
        }
      ]
    }
  ]
});
