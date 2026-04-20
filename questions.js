const subjects = [
  {
    name: "AP Lang",
    rapidQuestions: [
      {
        prompt: "What does a 'critical' tone most nearly mean?",
        choices: [
          { text: "Strongly approving", correct: false, choiceExplanation: " is incorrect because approving is the opposite of critical." },
          { text: "Evaluating and pointing out flaws", correct: true, choiceExplanation: " is correct because a critical tone analyzes and critiques ideas." },
          { text: "Confused and uncertain", correct: false, choiceExplanation: " is incorrect because critical does not imply confusion." },
          { text: "Playful and humorous", correct: false, choiceExplanation: " is incorrect because humor is not necessarily critical." }
        ],
        category: "tone"
      },
      {
        prompt: "Which best describes an author's claim?",
        choices: [
          { text: "A minor detail", correct: false, choiceExplanation: " is incorrect because a claim is the main argument." },
          { text: "The central argument", correct: true, choiceExplanation: " is correct because a claim is the main point being argued." },
          { text: "A random quote", correct: false, choiceExplanation: " is incorrect because a claim is not just a quote." },
          { text: "A background fact", correct: false, choiceExplanation: " is incorrect because a claim is argumentative." }
        ],
        category: "main idea"
      }
    ],
    passages: [
      {
        title: "Passage 1",
        text: `Education plays a crucial role in shaping society. It not only provides knowledge but also builds critical thinking skills. Many argue that modern education systems focus too much on memorization rather than understanding.`,
        questions: [
          {
            prompt: "What is the author's main argument?",
            choices: [
              { text: "Education is unnecessary", correct: false, choiceExplanation: " is incorrect because..." },
              { text: "Education should focus more on understanding", correct: true, choiceExplanation: " is correct because the author criticizes memorization and supports deeper understanding." },
              { text: "Memorization is the best method", correct: false, choiceExplanation: " is incorrect because..." },
              { text: "Schools should be eliminated", correct: false, choiceExplanation: " is incorrect because..." }
            ],
            category: "main idea"
          },
          {
            prompt: "What tone does the author use?",
            choices: [
              { text: "Angry", correct: false, choiceExplanation: " is incorrect because..." },
              { text: "Critical", correct: true, choiceExplanation: " is correct because the author critiques the current system." },
              { text: "Neutral", correct: false, choiceExplanation: " is incorrect because..." },
              { text: "Humorous", correct: false, choiceExplanation: " is incorrect because..." }
            ],
            category: "tone"
          }
        ]
      }
    ]
  },
  {
    name: "AP World",
    rapidQuestions: [
      {
        prompt: "Which development most directly increased cultural exchange across regions?",
        choices: [
          { text: "Isolation", correct: false, choiceExplanation: " is incorrect because isolation reduces exchange." },
          { text: "Trade networks", correct: true, choiceExplanation: " is correct because trade networks connected different regions." },
          { text: "Crop failure", correct: false, choiceExplanation: " is incorrect because crop failure does not directly increase cultural exchange." },
          { text: "Local disputes", correct: false, choiceExplanation: " is incorrect because local disputes do not usually expand exchange." }
        ],
        category: "trade"
      }
    ],
    passages: [
      {
        title: "Passage 1",
        text: `Trade networks connected distant regions and encouraged cultural exchange.`,
        questions: [
          {
            prompt: "What is the main idea of the passage?",
            choices: [
              { text: "Trade had no major effect", correct: false, choiceExplanation: " is incorrect because..." },
              { text: "Trade encouraged exchange between regions", correct: true, choiceExplanation: " is correct because the passage says trade networks connected distant regions." },
              { text: "Cultural exchange was harmful", correct: false, choiceExplanation: " is incorrect because..." },
              { text: "Trade only mattered locally", correct: false, choiceExplanation: " is incorrect because..." }
            ],
            category: "main idea"
          }
        ]
      }
    ]
  }
];
