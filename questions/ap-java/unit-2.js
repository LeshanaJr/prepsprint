window.questionBanks = window.questionBanks || {};

window.questionBanks.apJava = window.questionBanks.apJava || [];

window.questionBanks.apJava.push({

name: "Unit 1",

rapidQuestions: [
{
  prompt: "What is the value of (5 > 3)?",
  choices: [
    { text: "true", correct: true, choiceExplanation: " is correct because 5 is greater than 3." },
    { text: "false", correct: false, choiceExplanation: " is incorrect because the statement is true." },
    { text: "5", correct: false, choiceExplanation: " is incorrect because the expression returns a boolean." },
    { text: "error", correct: false, choiceExplanation: " is incorrect because the expression is valid." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What does (7 <= 7) evaluate to?",
  choices: [
    { text: "true", correct: true, choiceExplanation: " is correct because 7 is equal to 7." },
    { text: "false", correct: false, choiceExplanation: " is incorrect because equality satisfies <=." },
    { text: "0", correct: false, choiceExplanation: " is incorrect because this is not numeric." },
    { text: "error", correct: false, choiceExplanation: " is incorrect because the syntax is valid." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which operator checks equality in Java?",
  choices: [
    { text: "=", correct: false, choiceExplanation: " is incorrect because = assigns values." },
    { text: "==", correct: true, choiceExplanation: " is correct because == compares values." },
    { text: "!=", correct: false, choiceExplanation: " is incorrect because it checks inequality." },
    { text: "equals", correct: false, choiceExplanation: " is incorrect because that's a method for objects." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What does (3 != 4) evaluate to?",
  choices: [
    { text: "true", correct: true, choiceExplanation: " is correct because 3 is not equal to 4." },
    { text: "false", correct: false, choiceExplanation: " is incorrect because they are different." },
    { text: "3", correct: false, choiceExplanation: " is incorrect because result is boolean." },
    { text: "error", correct: false, choiceExplanation: " is incorrect because syntax is valid." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which of the following is a valid if statement?",
  choices: [
    { text: "if x > 5", correct: false, choiceExplanation: " is incorrect because parentheses are required." },
    { text: "if (x > 5)", correct: true, choiceExplanation: " is correct because conditions must be in parentheses." },
    { text: "if x = 5", correct: false, choiceExplanation: " is incorrect because = is assignment." },
    { text: "if (x => 5)", correct: false, choiceExplanation: " is incorrect because => is not valid." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What happens if an if condition is false?",
  choices: [
    { text: "The block runs anyway", correct: false, choiceExplanation: " is incorrect because it only runs if true." },
    { text: "The block is skipped", correct: true, choiceExplanation: " is correct because false conditions skip execution." },
    { text: "The program stops", correct: false, choiceExplanation: " is incorrect because execution continues." },
    { text: "An error occurs", correct: false, choiceExplanation: " is incorrect because this is normal behavior." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which keyword is used for an alternative condition?",
  choices: [
    { text: "else", correct: true, choiceExplanation: " is correct because else runs when the if condition is false." },
    { text: "alt", correct: false, choiceExplanation: " is incorrect because this is not Java syntax." },
    { text: "otherwise", correct: false, choiceExplanation: " is incorrect because Java uses else." },
    { text: "switch", correct: false, choiceExplanation: " is incorrect because switch is different." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What does this code print?\nint x = 5;\nif (x > 3) { System.out.println(\"Yes\"); }",
  choices: [
    { text: "Yes", correct: true, choiceExplanation: " is correct because 5 > 3 is true." },
    { text: "No", correct: false, choiceExplanation: " is incorrect because the condition is true." },
    { text: "Nothing", correct: false, choiceExplanation: " is incorrect because the block executes." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because syntax is valid." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which loop repeats while a condition is true?",
  choices: [
    { text: "for", correct: false, choiceExplanation: " is incorrect because for loops are counted loops." },
    { text: "while", correct: true, choiceExplanation: " is correct because while loops run based on a condition." },
    { text: "if", correct: false, choiceExplanation: " is incorrect because if does not loop." },
    { text: "switch", correct: false, choiceExplanation: " is incorrect because it is for selection." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is the output?\nint i = 0;\nwhile (i < 3) {\n  System.out.print(i);\n  i++;\n}",
  choices: [
    { text: "012", correct: true, choiceExplanation: " is correct because i increments from 0 to 2." },
    { text: "123", correct: false, choiceExplanation: " is incorrect because it starts at 0." },
    { text: "03", correct: false, choiceExplanation: " is incorrect because all values print." },
    { text: "Infinite loop", correct: false, choiceExplanation: " is incorrect because i increments." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which for loop prints numbers 0 through 4?",
  choices: [
    { text: "for (int i = 0; i < 5; i++)", correct: true, choiceExplanation: " is correct because i starts at 0 and stops before 5." },
    { text: "for (int i = 1; i < 5; i++)", correct: false, choiceExplanation: " is incorrect because it starts at 1." },
    { text: "for (int i = 0; i <= 5; i++)", correct: false, choiceExplanation: " is incorrect because it includes 5." },
    { text: "for (int i = 5; i > 0; i++)", correct: false, choiceExplanation: " is incorrect because i increases while already greater than 0." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "How many times does this loop run?\nfor (int i = 0; i < 10; i++)",
  choices: [
    { text: "9", correct: false, choiceExplanation: " is incorrect because it includes 0 through 9." },
    { text: "10", correct: true, choiceExplanation: " is correct because there are 10 values from 0 to 9." },
    { text: "11", correct: false, choiceExplanation: " is incorrect because 10 is not included." },
    { text: "Infinite", correct: false, choiceExplanation: " is incorrect because i increases until the condition is false." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nfor (int i = 1; i <= 3; i++) {\n  System.out.print(i);\n}",
  choices: [
    { text: "012", correct: false, choiceExplanation: " is incorrect because i starts at 1." },
    { text: "123", correct: true, choiceExplanation: " is correct because i prints 1, 2, then 3." },
    { text: "1234", correct: false, choiceExplanation: " is incorrect because the loop stops after 3." },
    { text: "3", correct: false, choiceExplanation: " is incorrect because all iterations print." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nfor (int i = 5; i > 2; i--) {\n  System.out.print(i);\n}",
  choices: [
    { text: "543", correct: true, choiceExplanation: " is correct because i prints 5, 4, and 3." },
    { text: "5432", correct: false, choiceExplanation: " is incorrect because i > 2 excludes 2." },
    { text: "2345", correct: false, choiceExplanation: " is incorrect because i decreases." },
    { text: "52", correct: false, choiceExplanation: " is incorrect because 4 and 3 also print." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which loop is most appropriate when the number of repetitions is known?",
  choices: [
    { text: "for loop", correct: true, choiceExplanation: " is correct because for loops are commonly used for counted repetition." },
    { text: "if statement", correct: false, choiceExplanation: " is incorrect because if statements do not repeat." },
    { text: "else statement", correct: false, choiceExplanation: " is incorrect because else only provides an alternate branch." },
    { text: "return statement", correct: false, choiceExplanation: " is incorrect because return exits a method." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which loop is most appropriate when repetition depends on user input?",
  choices: [
    { text: "while loop", correct: true, choiceExplanation: " is correct because while loops repeat until a condition changes." },
    { text: "import statement", correct: false, choiceExplanation: " is incorrect because imports bring in classes." },
    { text: "assignment statement", correct: false, choiceExplanation: " is incorrect because assignment stores values." },
    { text: "constructor", correct: false, choiceExplanation: " is incorrect because constructors create objects." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is the output?\nint x = 4;\nif (x % 2 == 0) {\n  System.out.print(\"even\");\n} else {\n  System.out.print(\"odd\");\n}",
  choices: [
    { text: "even", correct: true, choiceExplanation: " is correct because 4 has remainder 0 when divided by 2." },
    { text: "odd", correct: false, choiceExplanation: " is incorrect because 4 is even." },
    { text: "evenodd", correct: false, choiceExplanation: " is incorrect because only one branch executes." },
    { text: "Nothing", correct: false, choiceExplanation: " is incorrect because one branch must execute." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which expression checks whether n is divisible by 3?",
  choices: [
    { text: "n / 3 == 0", correct: false, choiceExplanation: " is incorrect because division does not test divisibility." },
    { text: "n % 3 == 0", correct: true, choiceExplanation: " is correct because divisible numbers have remainder 0." },
    { text: "n * 3 == 0", correct: false, choiceExplanation: " is incorrect because multiplication does not check remainder." },
    { text: "n == 3", correct: false, choiceExplanation: " is incorrect because only one value equals 3." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nint score = 85;\nif (score >= 90) {\n  System.out.print(\"A\");\n} else if (score >= 80) {\n  System.out.print(\"B\");\n} else {\n  System.out.print(\"C\");\n}",
  choices: [
    { text: "A", correct: false, choiceExplanation: " is incorrect because 85 is not at least 90." },
    { text: "B", correct: true, choiceExplanation: " is correct because 85 satisfies score >= 80." },
    { text: "C", correct: false, choiceExplanation: " is incorrect because the else branch is skipped." },
    { text: "BC", correct: false, choiceExplanation: " is incorrect because only one branch of an if-else-if chain runs." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "In an if-else-if chain, what happens after one condition is true?",
  choices: [
    { text: "All later conditions are still checked", correct: false, choiceExplanation: " is incorrect because the chain stops after a true branch." },
    { text: "Only that branch executes", correct: true, choiceExplanation: " is correct because Java skips the remaining branches." },
    { text: "The program restarts", correct: false, choiceExplanation: " is incorrect because execution continues after the chain." },
    { text: "The code causes an error", correct: false, choiceExplanation: " is incorrect because this is normal behavior." }
  ],
  category: "Unit 2: Selection and Iteration"
},

  {
  prompt: "What is printed?\nint x = 10;\nif (x > 5 && x < 20) {\n  System.out.print(\"yes\");\n}",
  choices: [
    { text: "yes", correct: true, choiceExplanation: " is correct because both conditions are true." },
    { text: "no", correct: false, choiceExplanation: " is incorrect because there is no no branch." },
    { text: "Nothing", correct: false, choiceExplanation: " is incorrect because the condition is true." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What does the && operator require?",
  choices: [
    { text: "At least one condition must be true", correct: false, choiceExplanation: " is incorrect because that describes ||." },
    { text: "Both conditions must be true", correct: true, choiceExplanation: " is correct because && means logical AND." },
    { text: "Both conditions must be false", correct: false, choiceExplanation: " is incorrect because && checks for true conditions." },
    { text: "The values must be strings", correct: false, choiceExplanation: " is incorrect because && works with booleans." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What does the || operator require?",
  choices: [
    { text: "Both conditions must be true", correct: false, choiceExplanation: " is incorrect because that describes &&." },
    { text: "At least one condition must be true", correct: true, choiceExplanation: " is correct because || means logical OR." },
    { text: "Both conditions must be false", correct: false, choiceExplanation: " is incorrect because || is true when one or both are true." },
    { text: "The expression must contain numbers only", correct: false, choiceExplanation: " is incorrect because || works with boolean expressions." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nint age = 14;\nif (age < 13 || age > 19) {\n  System.out.print(\"not teen\");\n} else {\n  System.out.print(\"teen\");\n}",
  choices: [
    { text: "not teen", correct: false, choiceExplanation: " is incorrect because 14 is not less than 13 or greater than 19." },
    { text: "teen", correct: true, choiceExplanation: " is correct because both OR conditions are false, so else runs." },
    { text: "Nothing", correct: false, choiceExplanation: " is incorrect because either if or else must run." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the syntax is valid." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nint count = 0;\nwhile (count < 4) {\n  count++;\n}\nSystem.out.print(count);",
  choices: [
    { text: "3", correct: false, choiceExplanation: " is incorrect because the loop stops after count becomes 4." },
    { text: "4", correct: true, choiceExplanation: " is correct because count increments until count < 4 becomes false." },
    { text: "5", correct: false, choiceExplanation: " is incorrect because the condition is false when count is 4." },
    { text: "Infinite loop", correct: false, choiceExplanation: " is incorrect because count changes each iteration." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which code creates an infinite loop?",
  choices: [
    { text: "int i = 0; while (i < 5) { i++; }", correct: false, choiceExplanation: " is incorrect because i eventually reaches 5." },
    { text: "int i = 0; while (i < 5) { System.out.print(i); }", correct: true, choiceExplanation: " is correct because i never changes, so the condition stays true." },
    { text: "for (int i = 0; i < 5; i++)", correct: false, choiceExplanation: " is incorrect because i increments." },
    { text: "int i = 5; while (i > 0) { i--; }", correct: false, choiceExplanation: " is incorrect because i eventually reaches 0." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nString s = \"APCSA\";\nSystem.out.print(s.substring(0, 2));",
  choices: [
    { text: "A", correct: false, choiceExplanation: " is incorrect because substring(0, 2) includes indexes 0 and 1." },
    { text: "AP", correct: true, choiceExplanation: " is correct because the ending index is excluded." },
    { text: "APC", correct: false, choiceExplanation: " is incorrect because index 2 is not included." },
    { text: "PC", correct: false, choiceExplanation: " is incorrect because the substring starts at index 0." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nString word = \"loop\";\nfor (int i = 0; i < word.length(); i++) {\n  System.out.print(word.substring(i, i + 1));\n}",
  choices: [
    { text: "loop", correct: true, choiceExplanation: " is correct because each character is printed in order." },
    { text: "loo", correct: false, choiceExplanation: " is incorrect because the loop includes the last index." },
    { text: "oop", correct: false, choiceExplanation: " is incorrect because the loop starts at index 0." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because i + 1 is valid up to word.length()." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is the purpose of word.length() in a loop condition?",
  choices: [
    { text: "It changes the string", correct: false, choiceExplanation: " is incorrect because length() does not modify the string." },
    { text: "It helps loop through valid string indexes", correct: true, choiceExplanation: " is correct because indexes go from 0 to length - 1." },
    { text: "It prints the string", correct: false, choiceExplanation: " is incorrect because length() returns a number." },
    { text: "It creates a new string", correct: false, choiceExplanation: " is incorrect because length() is an accessor method." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "A loop that checks every character in a string has runtime most closely described as:",
  choices: [
    { text: "constant time", correct: false, choiceExplanation: " is incorrect because the time grows with the string length." },
    { text: "linear time", correct: true, choiceExplanation: " is correct because the loop runs once for each character." },
    { text: "quadratic time", correct: false, choiceExplanation: " is incorrect because there is only one loop." },
    { text: "zero time", correct: false, choiceExplanation: " is incorrect because the loop performs work." }
  ],
  category: "Unit 2: Selection and Iteration"
},

  {
  prompt: "What is printed?\nfor (int i = 1; i <= 3; i++) {\n  for (int j = 1; j <= 2; j++) {\n    System.out.print(i);\n  }\n}",
  choices: [
    { text: "123", correct: false, choiceExplanation: " is incorrect because each i prints twice." },
    { text: "112233", correct: true, choiceExplanation: " is correct because each outer iteration prints i two times." },
    { text: "121212", correct: false, choiceExplanation: " is incorrect because j does not affect output." },
    { text: "123123", correct: false, choiceExplanation: " is incorrect because i repeats consecutively." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "How many times does the inner loop run?\nfor (int i = 0; i < 4; i++) {\n  for (int j = 0; j < 3; j++) {\n    // do something\n  }\n}",
  choices: [
    { text: "3", correct: false, choiceExplanation: " is incorrect because that’s per outer loop." },
    { text: "4", correct: false, choiceExplanation: " is incorrect because that’s the outer loop." },
    { text: "12", correct: true, choiceExplanation: " is correct because 4 * 3 = 12 total iterations." },
    { text: "7", correct: false, choiceExplanation: " is incorrect because both loops multiply." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is the runtime of a nested loop where both loops run n times?",
  choices: [
    { text: "O(n)", correct: false, choiceExplanation: " is incorrect because there are two loops." },
    { text: "O(n^2)", correct: true, choiceExplanation: " is correct because n * n = n^2 operations." },
    { text: "O(1)", correct: false, choiceExplanation: " is incorrect because work increases with n." },
    { text: "O(2n)", correct: false, choiceExplanation: " is incorrect because nested loops multiply, not add." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nint sum = 0;\nfor (int i = 1; i <= 3; i++) {\n  sum += i;\n}\nSystem.out.print(sum);",
  choices: [
    { text: "3", correct: false, choiceExplanation: " is incorrect because all values are added." },
    { text: "6", correct: true, choiceExplanation: " is correct because 1 + 2 + 3 = 6." },
    { text: "5", correct: false, choiceExplanation: " is incorrect because that skips a value." },
    { text: "0", correct: false, choiceExplanation: " is incorrect because sum changes." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nint product = 1;\nfor (int i = 1; i <= 4; i++) {\n  product *= i;\n}\nSystem.out.print(product);",
  choices: [
    { text: "10", correct: false, choiceExplanation: " is incorrect because multiplication is used." },
    { text: "24", correct: true, choiceExplanation: " is correct because 1*2*3*4 = 24." },
    { text: "16", correct: false, choiceExplanation: " is incorrect because values are not squared." },
    { text: "4", correct: false, choiceExplanation: " is incorrect because all values are used." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nint i = 0;\nwhile (i < 3) {\n  System.out.print(i);\n  i += 2;\n}",
  choices: [
    { text: "012", correct: false, choiceExplanation: " is incorrect because i increases by 2." },
    { text: "02", correct: true, choiceExplanation: " is correct because i goes 0 → 2 → stops." },
    { text: "024", correct: false, choiceExplanation: " is incorrect because the loop stops before 4." },
    { text: "0", correct: false, choiceExplanation: " is incorrect because the loop runs twice." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nint x = 5;\nif (x > 10) {\n  System.out.print(\"A\");\n} else if (x > 3) {\n  System.out.print(\"B\");\n} else {\n  System.out.print(\"C\");\n}",
  choices: [
    { text: "A", correct: false, choiceExplanation: " is incorrect because x is not greater than 10." },
    { text: "B", correct: true, choiceExplanation: " is correct because x > 3 is true." },
    { text: "C", correct: false, choiceExplanation: " is incorrect because the else is skipped." },
    { text: "AB", correct: false, choiceExplanation: " is incorrect because only one branch runs." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which condition will ALWAYS be false?",
  choices: [
    { text: "x > x", correct: true, choiceExplanation: " is correct because a number cannot be greater than itself." },
    { text: "x == x", correct: false, choiceExplanation: " is incorrect because this is always true." },
    { text: "x <= x", correct: false, choiceExplanation: " is incorrect because this is always true." },
    { text: "x != x", correct: false, choiceExplanation: " is incorrect because this is always false only for !=." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nfor (int i = 0; i < 3; i++) {\n  System.out.print(\"*\");\n}",
  choices: [
    { text: "***", correct: true, choiceExplanation: " is correct because the loop runs 3 times." },
    { text: "**", correct: false, choiceExplanation: " is incorrect because it runs 3 times." },
    { text: "****", correct: false, choiceExplanation: " is incorrect because i < 3 stops at 2." },
    { text: "*", correct: false, choiceExplanation: " is incorrect because it repeats." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nfor (int i = 0; i < 2; i++) {\n  for (int j = 0; j < 2; j++) {\n    System.out.print(j);\n  }\n}",
  choices: [
    { text: "01", correct: false, choiceExplanation: " is incorrect because the inner loop runs twice per outer loop." },
    { text: "0101", correct: true, choiceExplanation: " is correct because j prints 0 and 1 twice." },
    { text: "0011", correct: false, choiceExplanation: " is incorrect because j resets each time." },
    { text: "11", correct: false, choiceExplanation: " is incorrect because both 0 and 1 print." }
  ],
  category: "Unit 2: Selection and Iteration"
},

  {
  prompt: "What is printed?\nint x = 0;\nwhile (x < 5) {\n  System.out.print(x);\n  x += 2;\n}",
  choices: [
    { text: "01234", correct: false, choiceExplanation: " is incorrect because x increases by 2 each time." },
    { text: "024", correct: true, choiceExplanation: " is correct because x goes 0 → 2 → 4 → stops." },
    { text: "12345", correct: false, choiceExplanation: " is incorrect because x starts at 0." },
    { text: "05", correct: false, choiceExplanation: " is incorrect because 5 is never printed." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nfor (int i = 3; i >= 1; i--) {\n  System.out.print(i);\n}",
  choices: [
    { text: "321", correct: true, choiceExplanation: " is correct because i counts down from 3 to 1." },
    { text: "123", correct: false, choiceExplanation: " is incorrect because the loop decreases." },
    { text: "32", correct: false, choiceExplanation: " is incorrect because 1 is included." },
    { text: "3", correct: false, choiceExplanation: " is incorrect because all iterations run." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which loop condition is equivalent to while (x != 0)?",
  choices: [
    { text: "while (x == 0)", correct: false, choiceExplanation: " is incorrect because this is the opposite condition." },
    { text: "while (!(x == 0))", correct: true, choiceExplanation: " is correct because it negates x == 0." },
    { text: "while (x = 0)", correct: false, choiceExplanation: " is incorrect because = assigns, not compares." },
    { text: "while (x < 0)", correct: false, choiceExplanation: " is incorrect because it only checks negative values." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nint x = 2;\nif (x > 5 || x < 3) {\n  System.out.print(\"true\");\n} else {\n  System.out.print(\"false\");\n}",
  choices: [
    { text: "true", correct: true, choiceExplanation: " is correct because x < 3 is true." },
    { text: "false", correct: false, choiceExplanation: " is incorrect because one condition is true." },
    { text: "Nothing", correct: false, choiceExplanation: " is incorrect because one branch runs." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because syntax is valid." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is the output?\nint total = 0;\nfor (int i = 1; i <= 4; i++) {\n  total += 2;\n}\nSystem.out.print(total);",
  choices: [
    { text: "4", correct: false, choiceExplanation: " is incorrect because the loop runs 4 times." },
    { text: "6", correct: false, choiceExplanation: " is incorrect because total increases each iteration." },
    { text: "8", correct: true, choiceExplanation: " is correct because 2 is added 4 times (2×4 = 8)." },
    { text: "10", correct: false, choiceExplanation: " is incorrect because total starts at 0." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nString s = \"cat\";\nfor (int i = s.length() - 1; i >= 0; i--) {\n  System.out.print(s.substring(i, i + 1));\n}",
  choices: [
    { text: "cat", correct: false, choiceExplanation: " is incorrect because the loop goes backward." },
    { text: "tac", correct: true, choiceExplanation: " is correct because characters are printed in reverse order." },
    { text: "cta", correct: false, choiceExplanation: " is incorrect because the order is reversed." },
    { text: "atc", correct: false, choiceExplanation: " is incorrect because the loop starts at the last index." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nint x = 0;\nwhile (x < 3) {\n  x++;\n  System.out.print(x);\n}",
  choices: [
    { text: "012", correct: false, choiceExplanation: " is incorrect because x increments before printing." },
    { text: "123", correct: true, choiceExplanation: " is correct because x is incremented before printing." },
    { text: "23", correct: false, choiceExplanation: " is incorrect because 1 is printed first." },
    { text: "Infinite loop", correct: false, choiceExplanation: " is incorrect because x changes." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which code correctly counts down from 5 to 1?",
  choices: [
    { text: "for (int i = 1; i <= 5; i++)", correct: false, choiceExplanation: " is incorrect because it counts up." },
    { text: "for (int i = 5; i >= 1; i--)", correct: true, choiceExplanation: " is correct because it starts at 5 and decreases." },
    { text: "for (int i = 5; i <= 1; i--)", correct: false, choiceExplanation: " is incorrect because the condition is false initially." },
    { text: "for (int i = 1; i >= 5; i++)", correct: false, choiceExplanation: " is incorrect because the condition is false." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "Which situation best represents O(n²) runtime?",
  choices: [
    { text: "One loop running n times", correct: false, choiceExplanation: " is incorrect because that is O(n)." },
    { text: "Two nested loops each running n times", correct: true, choiceExplanation: " is correct because n × n = n²." },
    { text: "A single if statement", correct: false, choiceExplanation: " is incorrect because that is constant time." },
    { text: "A method call", correct: false, choiceExplanation: " is incorrect because runtime depends on implementation." }
  ],
  category: "Unit 2: Selection and Iteration"
},

{
  prompt: "What is printed?\nint count = 0;\nfor (int i = 0; i < 3; i++) {\n  for (int j = 0; j < 2; j++) {\n    count++;\n  }\n}\nSystem.out.print(count);",
  choices: [
    { text: "3", correct: false, choiceExplanation: " is incorrect because the inner loop runs multiple times." },
    { text: "5", correct: false, choiceExplanation: " is incorrect because both loops multiply iterations." },
    { text: "6", correct: true, choiceExplanation: " is correct because 3 × 2 = 6 total increments." },
    { text: "9", correct: false, choiceExplanation: " is incorrect because the inner loop runs only 2 times." }
  ],
  category: "Unit 2: Selection and Iteration"
}
  
],

  passages: [

{
  title: "Checking Number Ranges",
  text: `
int num = 15;

if (num > 10 && num < 20) {
    System.out.println("In range");
} else {
    System.out.println("Out of range");
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "In range", correct: true, choiceExplanation: " is correct because 15 satisfies both conditions." },
        { text: "Out of range", correct: false, choiceExplanation: " is incorrect because both conditions are true." },
        { text: "15", correct: false, choiceExplanation: " is incorrect because the program prints text." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because syntax is valid." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "Which must be true for the if condition to run?",
      choices: [
        { text: "Only one condition", correct: false, choiceExplanation: " is incorrect because && requires both." },
        { text: "Both conditions", correct: true, choiceExplanation: " is correct because && means logical AND." },
        { text: "Neither condition", correct: false, choiceExplanation: " is incorrect because then it would be false." },
        { text: "At least one condition", correct: false, choiceExplanation: " is incorrect because that is ||." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Even or Odd Check",
  text: `
int value = 7;

if (value % 2 == 0) {
    System.out.println("Even");
} else {
    System.out.println("Odd");
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "Even", correct: false, choiceExplanation: " is incorrect because 7 is not divisible by 2." },
        { text: "Odd", correct: true, choiceExplanation: " is correct because remainder is 1." },
        { text: "7", correct: false, choiceExplanation: " is incorrect because output is text." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because code is valid." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "What does value % 2 represent?",
      choices: [
        { text: "Division result", correct: false, choiceExplanation: " is incorrect because % gives remainder." },
        { text: "Remainder after division", correct: true, choiceExplanation: " is correct because modulus finds remainder." },
        { text: "Multiplication", correct: false, choiceExplanation: " is incorrect because * multiplies." },
        { text: "Comparison", correct: false, choiceExplanation: " is incorrect because it calculates a value." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "While Loop Counting",
  text: `
int count = 1;

while (count <= 3) {
    System.out.print(count);
    count++;
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "123", correct: true, choiceExplanation: " is correct because count increments from 1 to 3." },
        { text: "0123", correct: false, choiceExplanation: " is incorrect because it starts at 1." },
        { text: "13", correct: false, choiceExplanation: " is incorrect because 2 is included." },
        { text: "Infinite loop", correct: false, choiceExplanation: " is incorrect because count increases." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "How many times does the loop execute?",
      choices: [
        { text: "2", correct: false, choiceExplanation: " is incorrect because it runs 3 times." },
        { text: "3", correct: true, choiceExplanation: " is correct because values 1, 2, 3 are used." },
        { text: "4", correct: false, choiceExplanation: " is incorrect because 4 is not included." },
        { text: "Infinite", correct: false, choiceExplanation: " is incorrect because the condition becomes false." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "For Loop Basics",
  text: `
for (int i = 0; i < 4; i++) {
    System.out.print(i);
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "0123", correct: true, choiceExplanation: " is correct because i runs from 0 to 3." },
        { text: "1234", correct: false, choiceExplanation: " is incorrect because it starts at 0." },
        { text: "01234", correct: false, choiceExplanation: " is incorrect because 4 is excluded." },
        { text: "123", correct: false, choiceExplanation: " is incorrect because 0 is included." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "How many times does the loop run?",
      choices: [
        { text: "3", correct: false, choiceExplanation: " is incorrect because there are 4 iterations." },
        { text: "4", correct: true, choiceExplanation: " is correct because i = 0,1,2,3." },
        { text: "5", correct: false, choiceExplanation: " is incorrect because 4 is not included." },
        { text: "Infinite", correct: false, choiceExplanation: " is incorrect because i increases." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "If-Else Ladder",
  text: `
int score = 72;

if (score >= 90) {
    System.out.print("A");
} else if (score >= 70) {
    System.out.print("C");
} else {
    System.out.print("F");
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "A", correct: false, choiceExplanation: " is incorrect because score is below 90." },
        { text: "C", correct: true, choiceExplanation: " is correct because 72 satisfies score >= 70." },
        { text: "F", correct: false, choiceExplanation: " is incorrect because one condition is true." },
        { text: "AC", correct: false, choiceExplanation: " is incorrect because only one branch runs." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "Why does only one branch execute?",
      choices: [
        { text: "Because of Java syntax error", correct: false, choiceExplanation: " is incorrect because syntax is valid." },
        { text: "Because if-else-if stops after first true condition", correct: true, choiceExplanation: " is correct because remaining conditions are skipped." },
        { text: "Because all conditions run", correct: false, choiceExplanation: " is incorrect because only one executes." },
        { text: "Because else is required", correct: false, choiceExplanation: " is incorrect because else is optional." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

    {
  title: "Nested Loop Output",
  text: `
for (int i = 1; i <= 2; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.print(i + "" + j + " ");
    }
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "11 12 13 21 22 23", correct: true, choiceExplanation: " is correct because outer loop runs twice and inner runs three times each." },
        { text: "11 21 12 22 13 23", correct: false, choiceExplanation: " is incorrect because loops are not interleaved that way." },
        { text: "123123", correct: false, choiceExplanation: " is incorrect because i is included in output." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because syntax is valid." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "How many total iterations occur?",
      choices: [
        { text: "3", correct: false, choiceExplanation: " is incorrect because inner loop runs multiple times." },
        { text: "5", correct: false, choiceExplanation: " is incorrect because loops multiply." },
        { text: "6", correct: true, choiceExplanation: " is correct because 2 × 3 = 6 iterations." },
        { text: "2", correct: false, choiceExplanation: " is incorrect because inner loop increases count." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "String Traversal",
  text: `
String word = "CODE";

for (int i = 0; i < word.length(); i++) {
    System.out.print(word.substring(i, i + 1));
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "CODE", correct: true, choiceExplanation: " is correct because each character is printed in order." },
        { text: "EDOC", correct: false, choiceExplanation: " is incorrect because it is not reversed." },
        { text: "CO", correct: false, choiceExplanation: " is incorrect because loop runs full length." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because substring is valid." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "How many times does the loop execute?",
      choices: [
        { text: "3", correct: false, choiceExplanation: " is incorrect because string has 4 characters." },
        { text: "4", correct: true, choiceExplanation: " is correct because CODE has length 4." },
        { text: "5", correct: false, choiceExplanation: " is incorrect because it stops before 4." },
        { text: "Infinite", correct: false, choiceExplanation: " is incorrect because i increases." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Conditional String Check",
  text: `
String text = "apple";

if (text.length() > 3 && text.substring(0,1).equals("a")) {
    System.out.println("Valid");
} else {
    System.out.println("Invalid");
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "Valid", correct: true, choiceExplanation: " is correct because both conditions are true." },
        { text: "Invalid", correct: false, choiceExplanation: " is incorrect because conditions pass." },
        { text: "apple", correct: false, choiceExplanation: " is incorrect because output is text." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because syntax is valid." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "Why does the condition evaluate to true?",
      choices: [
        { text: "Only length is true", correct: false, choiceExplanation: " is incorrect because both conditions matter." },
        { text: "Only substring is true", correct: false, choiceExplanation: " is incorrect because both must be true." },
        { text: "Both conditions are true", correct: true, choiceExplanation: " is correct because && requires both." },
        { text: "Neither is true", correct: false, choiceExplanation: " is incorrect because both are satisfied." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "While Loop with Condition",
  text: `
int x = 10;

while (x > 5) {
    x -= 2;
    System.out.print(x + " ");
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "8 6 4", correct: true, choiceExplanation: " is correct because loop subtracts 2 until condition fails." },
        { text: "10 8 6", correct: false, choiceExplanation: " is incorrect because print happens after subtraction." },
        { text: "8 6", correct: false, choiceExplanation: " is incorrect because 4 is also printed before stopping." },
        { text: "Infinite loop", correct: false, choiceExplanation: " is incorrect because x decreases." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "Why does the loop stop?",
      choices: [
        { text: "x becomes 0", correct: false, choiceExplanation: " is incorrect because it stops earlier." },
        { text: "x <= 5", correct: true, choiceExplanation: " is correct because condition becomes false." },
        { text: "Loop limit reached", correct: false, choiceExplanation: " is incorrect because while loops don’t use limits." },
        { text: "System stops automatically", correct: false, choiceExplanation: " is incorrect because condition controls it." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Runtime Comparison",
  text: `
for (int i = 0; i < n; i++) {
    System.out.print(i);
}
`,
  questions: [
    {
      prompt: "What is the runtime of this loop?",
      choices: [
        { text: "O(1)", correct: false, choiceExplanation: " is incorrect because it depends on n." },
        { text: "O(n)", correct: true, choiceExplanation: " is correct because it runs n times." },
        { text: "O(n^2)", correct: false, choiceExplanation: " is incorrect because there is only one loop." },
        { text: "O(log n)", correct: false, choiceExplanation: " is incorrect because it is not halving." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "If n doubles, what happens to runtime?",
      choices: [
        { text: "Stays the same", correct: false, choiceExplanation: " is incorrect because runtime increases." },
        { text: "Doubles", correct: true, choiceExplanation: " is correct because it scales linearly." },
        { text: "Squares", correct: false, choiceExplanation: " is incorrect because that would be O(n^2)." },
        { text: "Halves", correct: false, choiceExplanation: " is incorrect because it increases." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

   {
  title: "Counting Matching Characters",
  text: `
String word = "banana";
int count = 0;

for (int i = 0; i < word.length(); i++) {
    if (word.substring(i, i + 1).equals("a")) {
        count++;
    }
}

System.out.print(count);
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "2", correct: false, choiceExplanation: " is incorrect because banana contains three a characters." },
        { text: "3", correct: true, choiceExplanation: " is correct because the loop counts each occurrence of a." },
        { text: "6", correct: false, choiceExplanation: " is incorrect because the loop does not count every character." },
        { text: "0", correct: false, choiceExplanation: " is incorrect because the string contains a characters." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "What is the purpose of the if statement?",
      choices: [
        { text: "To stop the loop early", correct: false, choiceExplanation: " is incorrect because the loop continues through the whole string." },
        { text: "To check whether the current character is a", correct: true, choiceExplanation: " is correct because substring extracts one character and compares it to a." },
        { text: "To reverse the string", correct: false, choiceExplanation: " is incorrect because no reverse operation occurs." },
        { text: "To print each character", correct: false, choiceExplanation: " is incorrect because only count is printed." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Multiple Outcomes with Else-If",
  text: `
int temp = 45;

if (temp >= 80) {
    System.out.print("Hot");
} else if (temp >= 60) {
    System.out.print("Warm");
} else if (temp >= 40) {
    System.out.print("Cool");
} else {
    System.out.print("Cold");
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "Hot", correct: false, choiceExplanation: " is incorrect because 45 is not at least 80." },
        { text: "Warm", correct: false, choiceExplanation: " is incorrect because 45 is not at least 60." },
        { text: "Cool", correct: true, choiceExplanation: " is correct because 45 satisfies temp >= 40." },
        { text: "Cold", correct: false, choiceExplanation: " is incorrect because the previous condition is true." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "Why does the final else block not run?",
      choices: [
        { text: "Because the program has an error", correct: false, choiceExplanation: " is incorrect because the code is valid." },
        { text: "Because temp >= 40 is true", correct: true, choiceExplanation: " is correct because an else-if chain stops after the first true condition." },
        { text: "Because else blocks never run", correct: false, choiceExplanation: " is incorrect because else runs when no previous condition is true." },
        { text: "Because temp is greater than 80", correct: false, choiceExplanation: " is incorrect because 45 is not greater than 80." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Nested Loop Pattern",
  text: `
for (int row = 1; row <= 3; row++) {
    for (int col = 1; col <= row; col++) {
        System.out.print("*");
    }
    System.out.println();
}
`,
  questions: [
    {
      prompt: "What pattern is printed?",
      choices: [
        { text: "*\n**\n***", correct: true, choiceExplanation: " is correct because the inner loop runs row times." },
        { text: "***\n***\n***", correct: false, choiceExplanation: " is incorrect because the number of stars changes each row." },
        { text: "***\n**\n*", correct: false, choiceExplanation: " is incorrect because row increases, not decreases." },
        { text: "*\n*\n*", correct: false, choiceExplanation: " is incorrect because the inner loop runs more than once for later rows." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "How many total stars are printed?",
      choices: [
        { text: "3", correct: false, choiceExplanation: " is incorrect because rows 2 and 3 print multiple stars." },
        { text: "6", correct: true, choiceExplanation: " is correct because 1 + 2 + 3 = 6." },
        { text: "9", correct: false, choiceExplanation: " is incorrect because the inner loop does not always run 3 times." },
        { text: "12", correct: false, choiceExplanation: " is incorrect because there are only 3 rows." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Arithmetic Algorithm",
  text: `
int n = 1234;
int sum = 0;

while (n > 0) {
    sum += n % 10;
    n /= 10;
}

System.out.print(sum);
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "10", correct: true, choiceExplanation: " is correct because 1 + 2 + 3 + 4 = 10." },
        { text: "1234", correct: false, choiceExplanation: " is incorrect because the algorithm sums digits." },
        { text: "4", correct: false, choiceExplanation: " is incorrect because all digits are processed, not only the last." },
        { text: "0", correct: false, choiceExplanation: " is incorrect because sum increases inside the loop." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "What does n % 10 find?",
      choices: [
        { text: "The first digit", correct: false, choiceExplanation: " is incorrect because % 10 finds the last digit." },
        { text: "The last digit", correct: true, choiceExplanation: " is correct because the remainder after division by 10 is the ones digit." },
        { text: "The number of digits", correct: false, choiceExplanation: " is incorrect because it does not count digits." },
        { text: "The middle digit", correct: false, choiceExplanation: " is incorrect because it always works with the ones place." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Loop Runtime with Nested Loops",
  text: `
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        System.out.print("*");
    }
}
`,
  questions: [
    {
      prompt: "How many times does the print statement run?",
      choices: [
        { text: "n", correct: false, choiceExplanation: " is incorrect because the inner loop runs n times for each outer iteration." },
        { text: "2n", correct: false, choiceExplanation: " is incorrect because nested loops multiply, not simply add." },
        { text: "n squared", correct: true, choiceExplanation: " is correct because the outer loop runs n times and the inner loop runs n times each." },
        { text: "1", correct: false, choiceExplanation: " is incorrect because the statement runs many times." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "What is the runtime of this code?",
      choices: [
        { text: "O(1)", correct: false, choiceExplanation: " is incorrect because runtime increases as n increases." },
        { text: "O(n)", correct: false, choiceExplanation: " is incorrect because there are nested loops." },
        { text: "O(n^2)", correct: true, choiceExplanation: " is correct because the work grows with n times n." },
        { text: "O(log n)", correct: false, choiceExplanation: " is incorrect because the loop does not repeatedly divide n." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

    {
  title: "Finding a Maximum",
  text: `
int[] nums = {4, 9, 2, 7};
int max = nums[0];

for (int i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
}

System.out.print(max);
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "4", correct: false, choiceExplanation: " is incorrect because max changes when a larger value is found." },
        { text: "7", correct: false, choiceExplanation: " is incorrect because 9 is larger than 7." },
        { text: "9", correct: true, choiceExplanation: " is correct because 9 is the largest value in the array." },
        { text: "22", correct: false, choiceExplanation: " is incorrect because the algorithm finds the maximum, not the sum." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "What is the purpose of the if statement?",
      choices: [
        { text: "To add all values", correct: false, choiceExplanation: " is incorrect because no addition occurs." },
        { text: "To update max when a larger value is found", correct: true, choiceExplanation: " is correct because max is replaced only when nums[i] is greater." },
        { text: "To print every value", correct: false, choiceExplanation: " is incorrect because printing happens after the loop." },
        { text: "To sort the array", correct: false, choiceExplanation: " is incorrect because the values are not rearranged." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "String Building Algorithm",
  text: `
String word = "java";
String result = "";

for (int i = 0; i < word.length(); i++) {
    result = word.substring(i, i + 1) + result;
}

System.out.print(result);
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "java", correct: false, choiceExplanation: " is incorrect because each character is added to the front." },
        { text: "avaj", correct: true, choiceExplanation: " is correct because the algorithm reverses the string." },
        { text: "jvaa", correct: false, choiceExplanation: " is incorrect because the characters stay in reverse order." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the substring calls are valid." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "Why does the string become reversed?",
      choices: [
        { text: "Characters are added to the end of result", correct: false, choiceExplanation: " is incorrect because they are added before result." },
        { text: "Characters are added to the front of result", correct: true, choiceExplanation: " is correct because each new character is placed before the existing result." },
        { text: "The loop runs backward", correct: false, choiceExplanation: " is incorrect because the loop runs forward." },
        { text: "The word variable changes automatically", correct: false, choiceExplanation: " is incorrect because Strings do not change automatically." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Input-Based Selection",
  text: `
int choice = 2;

if (choice == 1) {
    System.out.print("Start");
} else if (choice == 2) {
    System.out.print("Settings");
} else if (choice == 3) {
    System.out.print("Quit");
} else {
    System.out.print("Invalid");
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "Start", correct: false, choiceExplanation: " is incorrect because choice is not 1." },
        { text: "Settings", correct: true, choiceExplanation: " is correct because choice == 2 is true." },
        { text: "Quit", correct: false, choiceExplanation: " is incorrect because choice == 3 is never checked after a true branch." },
        { text: "Invalid", correct: false, choiceExplanation: " is incorrect because one condition is true." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "What would print if choice were 5?",
      choices: [
        { text: "Start", correct: false, choiceExplanation: " is incorrect because choice would not equal 1." },
        { text: "Settings", correct: false, choiceExplanation: " is incorrect because choice would not equal 2." },
        { text: "Quit", correct: false, choiceExplanation: " is incorrect because choice would not equal 3." },
        { text: "Invalid", correct: true, choiceExplanation: " is correct because none of the listed conditions would be true." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "While Loop Sentinel",
  text: `
int input = 6;
int total = 0;

while (input != -1) {
    total += input;
    input -= 3;
}

System.out.print(total);
`,
  questions: [
    {
      prompt: "What happens when this code runs?",
      choices: [
        { text: "It prints 6", correct: false, choiceExplanation: " is incorrect because the loop continues after the first iteration." },
        { text: "It prints 9", correct: false, choiceExplanation: " is incorrect because the loop does not stop after input becomes 0." },
        { text: "It enters an infinite loop", correct: true, choiceExplanation: " is correct because input becomes 6, 3, 0, -3, and never equals -1." },
        { text: "It causes a syntax error", correct: false, choiceExplanation: " is incorrect because the code is syntactically valid." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "Which change would make the loop stop once input becomes negative?",
      choices: [
        { text: "while (input > 0)", correct: true, choiceExplanation: " is correct because the loop would stop when input is 0 or negative." },
        { text: "while (input != 6)", correct: false, choiceExplanation: " is incorrect because the loop would not run at all initially." },
        { text: "while (input == -1)", correct: false, choiceExplanation: " is incorrect because the loop would not run unless input starts at -1." },
        { text: "while (total > input)", correct: false, choiceExplanation: " is incorrect because that does not directly check whether input is negative." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Runtime with Changing Step Size",
  text: `
for (int i = 0; i < n; i += 2) {
    System.out.print(i);
}
`,
  questions: [
    {
      prompt: "About how many times does the loop run?",
      choices: [
        { text: "n times", correct: false, choiceExplanation: " is incorrect because i increases by 2 each time." },
        { text: "n / 2 times", correct: true, choiceExplanation: " is correct because the loop visits about half the values from 0 to n." },
        { text: "n squared times", correct: false, choiceExplanation: " is incorrect because there is only one loop." },
        { text: "1 time", correct: false, choiceExplanation: " is incorrect because the loop usually repeats." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "What is the runtime classification?",
      choices: [
        { text: "O(1)", correct: false, choiceExplanation: " is incorrect because the number of iterations grows with n." },
        { text: "O(n)", correct: true, choiceExplanation: " is correct because constants like dividing by 2 are ignored in Big-O." },
        { text: "O(n^2)", correct: false, choiceExplanation: " is incorrect because there is no nested loop." },
        { text: "O(2^n)", correct: false, choiceExplanation: " is incorrect because the loop is not exponential." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

    {
  title: "Checking for a Factor",
  text: `
int num = 24;
int divisor = 6;

if (num % divisor == 0) {
    System.out.print("Factor");
} else {
    System.out.print("Not factor");
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "Factor", correct: true, choiceExplanation: " is correct because 24 divided by 6 has remainder 0." },
        { text: "Not factor", correct: false, choiceExplanation: " is incorrect because 6 divides evenly into 24." },
        { text: "0", correct: false, choiceExplanation: " is incorrect because the program prints text, not the remainder." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "Which expression determines whether divisor is a factor of num?",
      choices: [
        { text: "num / divisor == 0", correct: false, choiceExplanation: " is incorrect because division gives the quotient." },
        { text: "num % divisor == 0", correct: true, choiceExplanation: " is correct because a factor divides with no remainder." },
        { text: "num * divisor == 0", correct: false, choiceExplanation: " is incorrect because multiplication does not test divisibility." },
        { text: "num + divisor == 0", correct: false, choiceExplanation: " is incorrect because addition is unrelated." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Counting Down with a While Loop",
  text: `
int x = 12;

while (x > 3) {
    System.out.print(x + " ");
    x -= 3;
}
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "12 9 6", correct: true, choiceExplanation: " is correct because 12, 9, and 6 are printed before x becomes 3." },
        { text: "12 9 6 3", correct: false, choiceExplanation: " is incorrect because the condition x > 3 excludes 3." },
        { text: "9 6 3", correct: false, choiceExplanation: " is incorrect because x is printed before it is decreased." },
        { text: "Infinite loop", correct: false, choiceExplanation: " is incorrect because x decreases each iteration." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "What is the value of x after the loop ends?",
      choices: [
        { text: "6", correct: false, choiceExplanation: " is incorrect because the loop continues after x becomes 6." },
        { text: "3", correct: true, choiceExplanation: " is correct because x becomes 3, making x > 3 false." },
        { text: "0", correct: false, choiceExplanation: " is incorrect because the loop stops before subtracting from 3." },
        { text: "12", correct: false, choiceExplanation: " is incorrect because x changes during the loop." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Nested Loop with Different Bounds",
  text: `
int count = 0;

for (int row = 0; row < 2; row++) {
    for (int col = 0; col < 4; col++) {
        count++;
    }
}

System.out.print(count);
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "2", correct: false, choiceExplanation: " is incorrect because the inner loop also runs." },
        { text: "4", correct: false, choiceExplanation: " is incorrect because 4 happens for each row." },
        { text: "6", correct: false, choiceExplanation: " is incorrect because the total is found by multiplying 2 and 4." },
        { text: "8", correct: true, choiceExplanation: " is correct because the inner loop runs 4 times for each of 2 rows." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "If the outer loop changed to row < n and the inner loop stayed col < 4, what would the runtime be?",
      choices: [
        { text: "O(1)", correct: false, choiceExplanation: " is incorrect because the loop depends on n." },
        { text: "O(n)", correct: true, choiceExplanation: " is correct because 4n operations simplifies to O(n)." },
        { text: "O(n^2)", correct: false, choiceExplanation: " is incorrect because only one loop depends on n." },
        { text: "O(4)", correct: false, choiceExplanation: " is incorrect because the outer loop changes with n." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Building a String from Every Other Character",
  text: `
String word = "selection";
String result = "";

for (int i = 0; i < word.length(); i += 2) {
    result += word.substring(i, i + 1);
}

System.out.print(result);
`,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "selection", correct: false, choiceExplanation: " is incorrect because the loop skips every other character." },
        { text: "slcin", correct: true, choiceExplanation: " is correct because indexes 0, 2, 4, 6, and 8 are used." },
        { text: "eeito", correct: false, choiceExplanation: " is incorrect because those are the characters at odd indexes." },
        { text: "slt", correct: false, choiceExplanation: " is incorrect because more even-indexed characters are included." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "Why does the loop skip characters?",
      choices: [
        { text: "Because i increases by 2", correct: true, choiceExplanation: " is correct because i += 2 moves to every other index." },
        { text: "Because substring removes characters", correct: false, choiceExplanation: " is incorrect because substring only extracts characters." },
        { text: "Because word.length() changes", correct: false, choiceExplanation: " is incorrect because the string word does not change." },
        { text: "Because result starts empty", correct: false, choiceExplanation: " is incorrect because the step size controls which characters are used." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
},

{
  title: "Comparing Runtime Patterns",
  text: `
Algorithm A:
for (int i = 0; i < n; i++) {
    System.out.print(i);
}

Algorithm B:
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        System.out.print(i + j);
    }
}
`,
  questions: [
    {
      prompt: "Which algorithm has linear runtime?",
      choices: [
        { text: "Algorithm A", correct: true, choiceExplanation: " is correct because it has one loop that runs n times." },
        { text: "Algorithm B", correct: false, choiceExplanation: " is incorrect because it has nested loops." },
        { text: "Both algorithms", correct: false, choiceExplanation: " is incorrect because Algorithm B is quadratic." },
        { text: "Neither algorithm", correct: false, choiceExplanation: " is incorrect because Algorithm A is linear." }
      ],
      category: "Unit 2: Selection and Iteration"
    },
    {
      prompt: "Which algorithm is expected to grow faster as n increases?",
      choices: [
        { text: "Algorithm A", correct: false, choiceExplanation: " is incorrect because linear growth is slower than quadratic growth." },
        { text: "Algorithm B", correct: true, choiceExplanation: " is correct because nested loops create O(n^2) growth." },
        { text: "They grow at the same rate", correct: false, choiceExplanation: " is incorrect because their runtimes are different." },
        { text: "Neither grows with n", correct: false, choiceExplanation: " is incorrect because both depend on n." }
      ],
      category: "Unit 2: Selection and Iteration"
    }
  ]
}
    
  ]
  
});
