window.questionBanks = window.questionBanks || {};
window.questionBanks.apJava = window.questionBanks.apJava || [];

window.questionBanks.apJava.push({
  name: "Unit 1: Primitive Types & Expressions",

  rapidQuestions: [

   {

  prompt: "What data type would you use to store a whole number in Java?",

  choices: [

    { text: "double", correct: false, choiceExplanation: " is incorrect because double stores decimals." },

    { text: "int", correct: true, choiceExplanation: " is correct because int stores whole numbers." },

    { text: "boolean", correct: false, choiceExplanation: " is incorrect because boolean stores true/false." },

    { text: "String", correct: false, choiceExplanation: " is incorrect because String stores text." }

  ],

  category: "Unit 1: Using Objects and Methods"

},

{

  prompt: "Which data type stores decimal values?",

  choices: [

    { text: "int", correct: false, choiceExplanation: " is incorrect because int stores integers." },

    { text: "boolean", correct: false, choiceExplanation: " is incorrect because boolean stores true/false." },

    { text: "double", correct: true, choiceExplanation: " is correct because double stores decimals." },

    { text: "char", correct: false, choiceExplanation: " is incorrect because char stores a single character." }

  ],

  category: "Unit 1: Using Objects and Methods"

},

{

  prompt: "Which of the following is a valid boolean value?",

  choices: [

    { text: "yes", correct: false, choiceExplanation: " is incorrect because Java uses true/false." },

    { text: "1", correct: false, choiceExplanation: " is incorrect because numbers are not booleans." },

    { text: "true", correct: true, choiceExplanation: " is correct because true is a valid boolean." },

    { text: "maybe", correct: false, choiceExplanation: " is incorrect because it is not a boolean." }

  ],

  category: "Unit 1: Using Objects and Methods"

},

{

  prompt: "What is the result of 5 + 3 * 2 in Java?",

  choices: [

    { text: "16", correct: false, choiceExplanation: " is incorrect because multiplication happens first." },

    { text: "11", correct: true, choiceExplanation: " is correct because 3*2 = 6, then 5+6 = 11." },

    { text: "10", correct: false, choiceExplanation: " is incorrect because order of operations matters." },

    { text: "13", correct: false, choiceExplanation: " is incorrect because multiplication comes first." }

  ],

  category: "Unit 1: Using Objects and Methods"

},

{

  prompt: "What does the % operator do in Java?",

  choices: [

    { text: "Divides numbers", correct: false, choiceExplanation: " is incorrect because / divides." },

    { text: "Finds remainder", correct: true, choiceExplanation: " is correct because % returns the remainder." },

    { text: "Multiplies numbers", correct: false, choiceExplanation: " is incorrect because * multiplies." },

    { text: "Rounds numbers", correct: false, choiceExplanation: " is incorrect because it does not round." }

  ],

  category: "Unit 1: Using Objects and Methods"

},

{

  prompt: "Which line correctly declares an int variable?",

  choices: [

    { text: "int x = 5;", correct: true, choiceExplanation: " is correct because it declares and assigns an int." },

    { text: "x int = 5;", correct: false, choiceExplanation: " is incorrect because syntax is wrong." },

    { text: "int = x 5;", correct: false, choiceExplanation: " is incorrect because order is incorrect." },

    { text: "integer x = 5;", correct: false, choiceExplanation: " is incorrect because Java uses int, not integer." }

  ],

  category: "Unit 1: Using Objects and Methods"

},

{

  prompt: "What is the value of x after: int x = 10; x = x + 5;",

  choices: [

    { text: "10", correct: false, choiceExplanation: " is incorrect because x changes." },

    { text: "15", correct: true, choiceExplanation: " is correct because 10 + 5 = 15." },

    { text: "5", correct: false, choiceExplanation: " is incorrect because x is increased, not replaced." },

    { text: "0", correct: false, choiceExplanation: " is incorrect because x is not reset." }

  ],

  category: "Unit 1: Using Objects and Methods"

},

{

  prompt: "Which keyword is used to create a new object?",

  choices: [

    { text: "create", correct: false, choiceExplanation: " is incorrect because Java uses 'new'." },

    { text: "object", correct: false, choiceExplanation: " is incorrect because it's not a keyword." },

    { text: "new", correct: true, choiceExplanation: " is correct because 'new' creates objects." },

    { text: "make", correct: false, choiceExplanation: " is incorrect because it's not valid syntax." }

  ],

  category: "Unit 1: Using Objects and Methods"

},

{

  prompt: "What is a constructor?",

  choices: [

    { text: "A variable", correct: false, choiceExplanation: " is incorrect because it is not data." },

    { text: "A method used to create objects", correct: true, choiceExplanation: " is correct because constructors initialize objects." },

    { text: "A loop", correct: false, choiceExplanation: " is incorrect because it is not iteration." },

    { text: "A condition", correct: false, choiceExplanation: " is incorrect because it is not logic." }

  ],

  category: "Unit 1: Using Objects and Methods"

},

{

  prompt: "Which is an example of creating an object?",

  choices: [

    { text: "String name;", correct: false, choiceExplanation: " is incorrect because this only declares a variable." },

    { text: "String name = \"John\";", correct: false, choiceExplanation: " is incorrect because it assigns a literal, not using new." },

    { text: "String name = new String(\"John\");", correct: true, choiceExplanation: " is correct because it uses a constructor." },

    { text: "String(\"John\");", correct: false, choiceExplanation: " is incorrect because syntax is incomplete." }

  ],

  category: "Unit 1: Using Objects and Methods"

},

    {
  prompt: "What happens when you divide two ints in Java?",
  choices: [
    { text: "You always get a decimal", correct: false, choiceExplanation: " is incorrect because int division truncates decimals." },
    { text: "You get an int result with decimals removed", correct: true, choiceExplanation: " is correct because Java truncates the decimal part." },
    { text: "It causes an error", correct: false, choiceExplanation: " is incorrect because this is valid." },
    { text: "It converts automatically to double", correct: false, choiceExplanation: " is incorrect because both operands are ints." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is the value of 7 / 2 in Java (int division)?",
  choices: [
    { text: "3.5", correct: false, choiceExplanation: " is incorrect because decimals are truncated." },
    { text: "3", correct: true, choiceExplanation: " is correct because 7/2 = 3.5 → truncated to 3." },
    { text: "4", correct: false, choiceExplanation: " is incorrect because Java does not round up." },
    { text: "0", correct: false, choiceExplanation: " is incorrect because the result is not zero." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which line correctly assigns a double value?",
  choices: [
    { text: "double x = 5;", correct: false, choiceExplanation: " is incorrect because it's an int literal (though allowed, not ideal)." },
    { text: "double x = 5.0;", correct: true, choiceExplanation: " is correct because 5.0 is a double literal." },
    { text: "double x = \"5.0\";", correct: false, choiceExplanation: " is incorrect because that's a String." },
    { text: "double x = true;", correct: false, choiceExplanation: " is incorrect because boolean is not double." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is the value of 10 % 3?",
  choices: [
    { text: "3", correct: false, choiceExplanation: " is incorrect because that's the divisor." },
    { text: "1", correct: true, choiceExplanation: " is correct because 10 divided by 3 leaves remainder 1." },
    { text: "0", correct: false, choiceExplanation: " is incorrect because it is not evenly divisible." },
    { text: "2", correct: false, choiceExplanation: " is incorrect because remainder is 1." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is a variable?",
  choices: [
    { text: "A fixed value", correct: false, choiceExplanation: " is incorrect because variables can change." },
    { text: "A storage location with a name", correct: true, choiceExplanation: " is correct because variables store data." },
    { text: "A method", correct: false, choiceExplanation: " is incorrect because methods perform actions." },
    { text: "A class", correct: false, choiceExplanation: " is incorrect because classes define objects." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which statement correctly updates a variable?",
  choices: [
    { text: "x == 5;", correct: false, choiceExplanation: " is incorrect because == checks equality." },
    { text: "x = 5;", correct: true, choiceExplanation: " is correct because = assigns a value." },
    { text: "5 = x;", correct: false, choiceExplanation: " is incorrect because assignment direction is wrong." },
    { text: "x := 5;", correct: false, choiceExplanation: " is incorrect because := is not Java syntax." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is the output type of 5 + 2.0?",
  choices: [
    { text: "int", correct: false, choiceExplanation: " is incorrect because mixed types promote to double." },
    { text: "double", correct: true, choiceExplanation: " is correct because int + double → double." },
    { text: "boolean", correct: false, choiceExplanation: " is incorrect because it's numeric." },
    { text: "String", correct: false, choiceExplanation: " is incorrect because no text is involved." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is the value of x after: double x = 5 / 2;",
  choices: [
    { text: "2.5", correct: false, choiceExplanation: " is incorrect because division happens before assignment." },
    { text: "2.0", correct: true, choiceExplanation: " is correct because 5/2 = 2 (int division), then stored as 2.0." },
    { text: "3.0", correct: false, choiceExplanation: " is incorrect because Java does not round up." },
    { text: "5.0", correct: false, choiceExplanation: " is incorrect because division occurs." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is the purpose of a method?",
  choices: [
    { text: "Store values", correct: false, choiceExplanation: " is incorrect because variables store values." },
    { text: "Perform actions or calculations", correct: true, choiceExplanation: " is correct because methods define behavior." },
    { text: "Create loops", correct: false, choiceExplanation: " is incorrect because loops are separate constructs." },
    { text: "Define data types", correct: false, choiceExplanation: " is incorrect because types are predefined." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What does a void method return?",
  choices: [
    { text: "An int", correct: false, choiceExplanation: " is incorrect because void means no return." },
    { text: "A value", correct: false, choiceExplanation: " is incorrect because void returns nothing." },
    { text: "Nothing", correct: true, choiceExplanation: " is correct because void methods do not return a value." },
    { text: "A boolean", correct: false, choiceExplanation: " is incorrect because it returns nothing." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

    {
  prompt: "How do you call a method with no parameters?",
  choices: [
    { text: "method;", correct: false, choiceExplanation: " is incorrect because parentheses are required." },
    { text: "method()", correct: true, choiceExplanation: " is correct because parentheses call the method." },
    { text: "method[]", correct: false, choiceExplanation: " is incorrect because brackets are not used." },
    { text: "call method()", correct: false, choiceExplanation: " is incorrect because 'call' is not Java syntax." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "How do you call a method with parameters?",
  choices: [
    { text: "method", correct: false, choiceExplanation: " is incorrect because parameters require parentheses." },
    { text: "method[]", correct: false, choiceExplanation: " is incorrect because brackets are not used." },
    { text: "method(value)", correct: true, choiceExplanation: " is correct because parameters go inside parentheses." },
    { text: "method = value", correct: false, choiceExplanation: " is incorrect because that assigns, not calls." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is a parameter?",
  choices: [
    { text: "A variable used in a method", correct: true, choiceExplanation: " is correct because parameters accept input." },
    { text: "A loop", correct: false, choiceExplanation: " is incorrect because it is not iteration." },
    { text: "A class", correct: false, choiceExplanation: " is incorrect because classes define objects." },
    { text: "An output value", correct: false, choiceExplanation: " is incorrect because that is a return value." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is an argument?",
  choices: [
    { text: "A method name", correct: false, choiceExplanation: " is incorrect because it's not the method itself." },
    { text: "A value passed into a method", correct: true, choiceExplanation: " is correct because arguments supply data." },
    { text: "A return type", correct: false, choiceExplanation: " is incorrect because it's not the output." },
    { text: "A class", correct: false, choiceExplanation: " is incorrect because it's not a structure." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which is a correct method call?",
  choices: [
    { text: "printHello", correct: false, choiceExplanation: " is incorrect because parentheses are required." },
    { text: "printHello()", correct: true, choiceExplanation: " is correct because it calls the method." },
    { text: "printHello[]", correct: false, choiceExplanation: " is incorrect because brackets are not used." },
    { text: "call printHello()", correct: false, choiceExplanation: " is incorrect because 'call' is not valid." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which of the following uses a constructor?",
  choices: [
    { text: "int x = 5;", correct: false, choiceExplanation: " is incorrect because it is a primitive assignment." },
    { text: "String s = new String(\"hi\");", correct: true, choiceExplanation: " is correct because it uses 'new'." },
    { text: "x = 10;", correct: false, choiceExplanation: " is incorrect because no object is created." },
    { text: "print()", correct: false, choiceExplanation: " is incorrect because it is a method call." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What does 'new' do in Java?",
  choices: [
    { text: "Deletes objects", correct: false, choiceExplanation: " is incorrect because it creates objects." },
    { text: "Creates objects", correct: true, choiceExplanation: " is correct because it calls a constructor." },
    { text: "Runs methods", correct: false, choiceExplanation: " is incorrect because methods are separate." },
    { text: "Declares variables", correct: false, choiceExplanation: " is incorrect because declaration is separate." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which is an example of an API class?",
  choices: [
    { text: "System", correct: true, choiceExplanation: " is correct because System is part of Java’s API." },
    { text: "main", correct: false, choiceExplanation: " is incorrect because it's a method." },
    { text: "loop", correct: false, choiceExplanation: " is incorrect because it's not a class." },
    { text: "int", correct: false, choiceExplanation: " is incorrect because it's a primitive type." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which method prints output to the console?",
  choices: [
    { text: "System.print()", correct: false, choiceExplanation: " is incorrect because it's not valid syntax." },
    { text: "System.out.println()", correct: true, choiceExplanation: " is correct because it prints with a newline." },
    { text: "print()", correct: false, choiceExplanation: " is incorrect because Java requires full syntax." },
    { text: "console.log()", correct: false, choiceExplanation: " is incorrect because that's JavaScript." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What does println do?",
  choices: [
    { text: "Prints without newline", correct: false, choiceExplanation: " is incorrect because it moves to next line." },
    { text: "Prints and moves to next line", correct: true, choiceExplanation: " is correct because it adds a newline." },
    { text: "Deletes output", correct: false, choiceExplanation: " is incorrect because it prints output." },
    { text: "Stores output", correct: false, choiceExplanation: " is incorrect because it does not store values." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

    {
  prompt: "Which is a valid boolean expression?",
  choices: [
    { text: "5 > 3", correct: true, choiceExplanation: " is correct because it evaluates to true." },
    { text: "5 + 3", correct: false, choiceExplanation: " is incorrect because it results in a number, not boolean." },
    { text: "\"true\"", correct: false, choiceExplanation: " is incorrect because it's a String." },
    { text: "7 * 2", correct: false, choiceExplanation: " is incorrect because it is arithmetic." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is the value of (10 > 5)?",
  choices: [
    { text: "true", correct: true, choiceExplanation: " is correct because 10 is greater than 5." },
    { text: "false", correct: false, choiceExplanation: " is incorrect because the statement is true." },
    { text: "10", correct: false, choiceExplanation: " is incorrect because it's not numeric." },
    { text: "5", correct: false, choiceExplanation: " is incorrect because it's not a value comparison result." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which of the following is NOT a primitive type?",
  choices: [
    { text: "int", correct: false, choiceExplanation: " is incorrect because it is primitive." },
    { text: "double", correct: false, choiceExplanation: " is incorrect because it is primitive." },
    { text: "String", correct: true, choiceExplanation: " is correct because it is an object." },
    { text: "boolean", correct: false, choiceExplanation: " is incorrect because it is primitive." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is the default value of a boolean variable?",
  choices: [
    { text: "true", correct: false, choiceExplanation: " is incorrect because default is false." },
    { text: "false", correct: true, choiceExplanation: " is correct because booleans default to false." },
    { text: "0", correct: false, choiceExplanation: " is incorrect because that's numeric." },
    { text: "null", correct: false, choiceExplanation: " is incorrect because primitives are not null." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which of the following correctly declares a boolean?",
  choices: [
    { text: "boolean flag = true;", correct: true, choiceExplanation: " is correct because syntax is valid." },
    { text: "bool flag = true;", correct: false, choiceExplanation: " is incorrect because Java uses boolean." },
    { text: "boolean flag = \"true\";", correct: false, choiceExplanation: " is incorrect because that's a String." },
    { text: "boolean = flag true;", correct: false, choiceExplanation: " is incorrect because syntax is wrong." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What does an API provide?",
  choices: [
    { text: "Only variables", correct: false, choiceExplanation: " is incorrect because APIs include methods and classes." },
    { text: "Prewritten classes and methods", correct: true, choiceExplanation: " is correct because APIs provide reusable code." },
    { text: "Only loops", correct: false, choiceExplanation: " is incorrect because APIs are broader." },
    { text: "Only user input", correct: false, choiceExplanation: " is incorrect because APIs do more than input." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which is an example of using the Math API?",
  choices: [
    { text: "Math.abs(-5)", correct: true, choiceExplanation: " is correct because it returns absolute value." },
    { text: "abs(-5)", correct: false, choiceExplanation: " is incorrect because it needs Math." },
    { text: "Math(-5)", correct: false, choiceExplanation: " is incorrect because syntax is wrong." },
    { text: "abs.Math(-5)", correct: false, choiceExplanation: " is incorrect because order is wrong." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What does Math.abs(-8) return?",
  choices: [
    { text: "-8", correct: false, choiceExplanation: " is incorrect because abs makes it positive." },
    { text: "8", correct: true, choiceExplanation: " is correct because absolute value removes sign." },
    { text: "0", correct: false, choiceExplanation: " is incorrect because it's not zero." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because it is valid." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which method would generate a random number?",
  choices: [
    { text: "Math.random()", correct: true, choiceExplanation: " is correct because it generates a random double." },
    { text: "random()", correct: false, choiceExplanation: " is incorrect because it needs Math." },
    { text: "Math.rand()", correct: false, choiceExplanation: " is incorrect because it does not exist." },
    { text: "rand()", correct: false, choiceExplanation: " is incorrect because it's not valid." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What range does Math.random() return?",
  choices: [
    { text: "0 to 10", correct: false, choiceExplanation: " is incorrect because range is smaller." },
    { text: "0.0 to 1.0", correct: true, choiceExplanation: " is correct because it returns a double in that range." },
    { text: "1 to 100", correct: false, choiceExplanation: " is incorrect because that's not default." },
    { text: "-1 to 1", correct: false, choiceExplanation: " is incorrect because it does not return negatives." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

    {
  prompt: "Which of the following correctly assigns a value to a variable?",
  choices: [
    { text: "x == 10;", correct: false, choiceExplanation: " is incorrect because == checks equality." },
    { text: "x = 10;", correct: true, choiceExplanation: " is correct because = assigns a value." },
    { text: "10 = x;", correct: false, choiceExplanation: " is incorrect because assignment is reversed." },
    { text: "x := 10;", correct: false, choiceExplanation: " is incorrect because := is not Java syntax." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is the value of x after: int x = 4; x *= 3;",
  choices: [
    { text: "7", correct: false, choiceExplanation: " is incorrect because it's multiplication." },
    { text: "12", correct: true, choiceExplanation: " is correct because 4 * 3 = 12." },
    { text: "3", correct: false, choiceExplanation: " is incorrect because x is multiplied." },
    { text: "1", correct: false, choiceExplanation: " is incorrect because no division occurs." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What does x++ do?",
  choices: [
    { text: "Decreases x by 1", correct: false, choiceExplanation: " is incorrect because it increases." },
    { text: "Increases x by 1", correct: true, choiceExplanation: " is correct because it increments x." },
    { text: "Multiplies x by 2", correct: false, choiceExplanation: " is incorrect because it is not multiplication." },
    { text: "Sets x to 0", correct: false, choiceExplanation: " is incorrect because it does not reset." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which of the following is a valid object declaration?",
  choices: [
    { text: "String s;", correct: true, choiceExplanation: " is correct because it declares an object reference." },
    { text: "string s;", correct: false, choiceExplanation: " is incorrect because Java is case-sensitive." },
    { text: "String = s;", correct: false, choiceExplanation: " is incorrect because syntax is wrong." },
    { text: "s String;", correct: false, choiceExplanation: " is incorrect because order is wrong." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is the result of 3 + 4 + \"5\"?",
  choices: [
    { text: "75", correct: true, choiceExplanation: " is correct because 3+4=7, then \"7\" + \"5\" = \"75\"." },
    { text: "345", correct: false, choiceExplanation: " is incorrect because addition happens first." },
    { text: "12", correct: false, choiceExplanation: " is incorrect because it becomes a String." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because it is valid." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is the result of \"3\" + 4 + 5?",
  choices: [
    { text: "12", correct: false, choiceExplanation: " is incorrect because it becomes a String." },
    { text: "345", correct: true, choiceExplanation: " is correct because concatenation happens left to right." },
    { text: "75", correct: false, choiceExplanation: " is incorrect because no addition happens." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because it is valid." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What is the correct way to call a method from an object?",
  choices: [
    { text: "object method()", correct: false, choiceExplanation: " is incorrect because dot notation is needed." },
    { text: "object.method()", correct: true, choiceExplanation: " is correct because methods are called with dot notation." },
    { text: "method(object)", correct: false, choiceExplanation: " is incorrect because that's not standard syntax." },
    { text: "object->method()", correct: false, choiceExplanation: " is incorrect because Java does not use ->." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "What happens if you forget parentheses when calling a method?",
  choices: [
    { text: "It still works", correct: false, choiceExplanation: " is incorrect because it will not execute." },
    { text: "It causes a compile error", correct: true, choiceExplanation: " is correct because Java requires parentheses." },
    { text: "It runs twice", correct: false, choiceExplanation: " is incorrect because it won't run at all." },
    { text: "It becomes a variable", correct: false, choiceExplanation: " is incorrect because syntax is invalid." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which is an example of a non-static method call?",
  choices: [
    { text: "Math.random()", correct: false, choiceExplanation: " is incorrect because it's static." },
    { text: "System.out.println()", correct: false, choiceExplanation: " is incorrect because it's static." },
    { text: "myObject.doSomething()", correct: true, choiceExplanation: " is correct because it uses an object instance." },
    { text: "print()", correct: false, choiceExplanation: " is incorrect because it's incomplete." }
  ],
  category: "Unit 1: Using Objects and Methods"
},

{
  prompt: "Which concept allows reuse of code through predefined classes?",
  choices: [
    { text: "Variables", correct: false, choiceExplanation: " is incorrect because variables store data." },
    { text: "APIs", correct: true, choiceExplanation: " is correct because APIs provide reusable code." },
    { text: "Loops", correct: false, choiceExplanation: " is incorrect because loops repeat code." },
    { text: "Conditions", correct: false, choiceExplanation: " is incorrect because they control flow." }
  ],
  category: "Unit 1: Using Objects and Methods"
}

  ],

  passages: [

{
  title: "Variable Assignment and Arithmetic",
  text: `
int a = 5;
int b = 2;
int c = a / b;
double d = a / b;
double e = a / (double) b;
`,
  questions: [
    {
      prompt: "What is the value of c?",
      choices: [
        { text: "2.5", correct: false, choiceExplanation: " is incorrect because integer division truncates decimals." },
        { text: "2", correct: true, choiceExplanation: " is correct because 5 / 2 = 2 in integer division." },
        { text: "3", correct: false, choiceExplanation: " is incorrect because Java does not round up." },
        { text: "2.0", correct: false, choiceExplanation: " is incorrect because c is an int." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is the value of d?",
      choices: [
        { text: "2.5", correct: false, choiceExplanation: " is incorrect because division happens before assignment." },
        { text: "2.0", correct: true, choiceExplanation: " is correct because 5/2 = 2, then stored as 2.0." },
        { text: "2", correct: false, choiceExplanation: " is incorrect because d is a double." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is the value of e?",
      choices: [
        { text: "2", correct: false, choiceExplanation: " is incorrect because casting changes division." },
        { text: "2.0", correct: false, choiceExplanation: " is incorrect because result is not truncated." },
        { text: "2.5", correct: true, choiceExplanation: " is correct because casting makes it double division." },
        { text: "3", correct: false, choiceExplanation: " is incorrect because Java does not round." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Order of Operations",
  text: `
int x = 4 + 3 * 2;
int y = (4 + 3) * 2;
`,
  questions: [
    {
      prompt: "What is the value of x?",
      choices: [
        { text: "14", correct: false, choiceExplanation: " is incorrect because multiplication happens first." },
        { text: "10", correct: true, choiceExplanation: " is correct because 3*2=6, then 4+6=10." },
        { text: "7", correct: false, choiceExplanation: " is incorrect because multiplication is not ignored." },
        { text: "12", correct: false, choiceExplanation: " is incorrect because grouping is different." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is the value of y?",
      choices: [
        { text: "10", correct: false, choiceExplanation: " is incorrect because parentheses change order." },
        { text: "14", correct: true, choiceExplanation: " is correct because (4+3)=7, then 7*2=14." },
        { text: "7", correct: false, choiceExplanation: " is incorrect because multiplication still occurs." },
        { text: "12", correct: false, choiceExplanation: " is incorrect because math is incorrect." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Object Creation and Methods",
  text: `
String name = new String("Alex");
System.out.println(name.length());
`,
  questions: [
    {
      prompt: "What does new String(\"Alex\") do?",
      choices: [
        { text: "Declares a variable", correct: false, choiceExplanation: " is incorrect because it creates an object." },
        { text: "Creates a String object", correct: true, choiceExplanation: " is correct because it calls a constructor." },
        { text: "Prints output", correct: false, choiceExplanation: " is incorrect because printing is separate." },
        { text: "Changes a value", correct: false, choiceExplanation: " is incorrect because it initializes." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is printed?",
      choices: [
        { text: "Alex", correct: false, choiceExplanation: " is incorrect because length() returns a number." },
        { text: "4", correct: true, choiceExplanation: " is correct because 'Alex' has 4 characters." },
        { text: "5", correct: false, choiceExplanation: " is incorrect because there are 4 characters." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because code is valid." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Method Calls and Parameters",
  text: `
public void printSum(int a, int b) {
    System.out.println(a + b);
}

printSum(3, 5);
`,
  questions: [
    {
      prompt: "What are 3 and 5 in the method call?",
      choices: [
        { text: "Parameters", correct: false, choiceExplanation: " is incorrect because parameters are in the method definition." },
        { text: "Arguments", correct: true, choiceExplanation: " is correct because values passed into methods are arguments." },
        { text: "Variables", correct: false, choiceExplanation: " is incorrect because they are inputs." },
        { text: "Return values", correct: false, choiceExplanation: " is incorrect because nothing is returned." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is printed?",
      choices: [
        { text: "35", correct: false, choiceExplanation: " is incorrect because numbers are added, not concatenated." },
        { text: "8", correct: true, choiceExplanation: " is correct because 3 + 5 = 8." },
        { text: "15", correct: false, choiceExplanation: " is incorrect because multiplication is not used." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the method is valid." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Boolean Expressions",
  text: `
boolean result = (5 > 3) && (2 < 4);
`,
  questions: [
    {
      prompt: "What is the value of result?",
      choices: [
        { text: "true", correct: true, choiceExplanation: " is correct because both conditions are true." },
        { text: "false", correct: false, choiceExplanation: " is incorrect because both comparisons are true." },
        { text: "5", correct: false, choiceExplanation: " is incorrect because it's not numeric." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because code is valid." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

 {
  title: "String Method Calls",
  text: `
String word = "computer";
String part = word.substring(1, 4);
int len = word.length();
`,
  questions: [
    {
      prompt: "What is stored in part?",
      choices: [
        { text: "\"omp\"", correct: true, choiceExplanation: " is correct because substring(1, 4) includes indexes 1 through 3." },
        { text: "\"ompu\"", correct: false, choiceExplanation: " is incorrect because the ending index is not included." },
        { text: "\"com\"", correct: false, choiceExplanation: " is incorrect because index 1 starts at the second character." },
        { text: "\"ompu\"", correct: false, choiceExplanation: " is incorrect because substring stops before index 4." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is stored in len?",
      choices: [
        { text: "7", correct: false, choiceExplanation: " is incorrect because computer has 8 characters." },
        { text: "8", correct: true, choiceExplanation: " is correct because length() returns the number of characters." },
        { text: "9", correct: false, choiceExplanation: " is incorrect because Java does not count an extra character." },
        { text: "0", correct: false, choiceExplanation: " is incorrect because the String is not empty." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Math API",
  text: `
double a = Math.pow(2, 3);
double b = Math.sqrt(25);
double c = Math.abs(-7);
`,
  questions: [
    {
      prompt: "What is stored in a?",
      choices: [
        { text: "6.0", correct: false, choiceExplanation: " is incorrect because Math.pow uses exponents, not multiplication." },
        { text: "8.0", correct: true, choiceExplanation: " is correct because 2 to the third power is 8." },
        { text: "9.0", correct: false, choiceExplanation: " is incorrect because 2 + 3 is not used." },
        { text: "5.0", correct: false, choiceExplanation: " is incorrect because the numbers are not added." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is stored in b?",
      choices: [
        { text: "5.0", correct: true, choiceExplanation: " is correct because the square root of 25 is 5." },
        { text: "12.5", correct: false, choiceExplanation: " is incorrect because square root does not divide by 2." },
        { text: "25.0", correct: false, choiceExplanation: " is incorrect because sqrt returns the square root." },
        { text: "625.0", correct: false, choiceExplanation: " is incorrect because the value is not squared." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is stored in c?",
      choices: [
        { text: "-7.0", correct: false, choiceExplanation: " is incorrect because Math.abs returns the positive distance from zero." },
        { text: "7.0", correct: true, choiceExplanation: " is correct because the absolute value of -7 is 7." },
        { text: "0.0", correct: false, choiceExplanation: " is incorrect because abs does not reset the value." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the method call is valid." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Assignment Statements",
  text: `
int x = 6;
int y = x;
x = x + 4;
y = y * 2;
`,
  questions: [
    {
      prompt: "What is the final value of x?",
      choices: [
        { text: "6", correct: false, choiceExplanation: " is incorrect because x is updated by adding 4." },
        { text: "10", correct: true, choiceExplanation: " is correct because x becomes 6 + 4." },
        { text: "12", correct: false, choiceExplanation: " is incorrect because y changes do not affect x." },
        { text: "20", correct: false, choiceExplanation: " is incorrect because x is not multiplied." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is the final value of y?",
      choices: [
        { text: "6", correct: false, choiceExplanation: " is incorrect because y is multiplied by 2." },
        { text: "10", correct: false, choiceExplanation: " is incorrect because y does not update when x changes." },
        { text: "12", correct: true, choiceExplanation: " is correct because y first receives 6, then becomes 12." },
        { text: "20", correct: false, choiceExplanation: " is incorrect because y uses its own stored value." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Constructor Calls",
  text: `
Scanner input = new Scanner(System.in);
String message = new String("hello");
`,
  questions: [
    {
      prompt: "Which line creates an object with a constructor parameter?",
      choices: [
        { text: "Scanner input = new Scanner(System.in); only", correct: false, choiceExplanation: " is incorrect because both constructor calls use arguments." },
        { text: "String message = new String(\"hello\"); only", correct: false, choiceExplanation: " is incorrect because both constructor calls use arguments." },
        { text: "Both lines", correct: true, choiceExplanation: " is correct because both constructors receive a value inside parentheses." },
        { text: "Neither line", correct: false, choiceExplanation: " is incorrect because both use the new keyword with constructor calls." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What does the new keyword do in these lines?",
      choices: [
        { text: "Deletes an object", correct: false, choiceExplanation: " is incorrect because new creates objects." },
        { text: "Creates a new object", correct: true, choiceExplanation: " is correct because new calls a constructor to create an object." },
        { text: "Prints text", correct: false, choiceExplanation: " is incorrect because printing is not involved." },
        { text: "Compares objects", correct: false, choiceExplanation: " is incorrect because new does not compare values." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Void Method Calls",
  text: `
public class Dog {
    public void bark() {
        System.out.println("woof");
    }

    public void repeatBark(int times) {
        System.out.println("woof " + times);
    }
}

Dog pet = new Dog();
pet.bark();
pet.repeatBark(3);
`,
  questions: [
    {
      prompt: "Which method call has no parameters?",
      choices: [
        { text: "pet.bark();", correct: true, choiceExplanation: " is correct because bark takes no values inside parentheses." },
        { text: "pet.repeatBark(3);", correct: false, choiceExplanation: " is incorrect because 3 is passed as an argument." },
        { text: "System.out.println(\"woof \" + times);", correct: false, choiceExplanation: " is incorrect because this is inside the method body." },
        { text: "Dog pet = new Dog();", correct: false, choiceExplanation: " is incorrect because this creates an object." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is printed by pet.repeatBark(3);?",
      choices: [
        { text: "woof", correct: false, choiceExplanation: " is incorrect because the method prints the word and the number." },
        { text: "woof 3", correct: true, choiceExplanation: " is correct because times receives the value 3." },
        { text: "3 woof", correct: false, choiceExplanation: " is incorrect because the String comes before the number." },
        { text: "times", correct: false, choiceExplanation: " is incorrect because the value of times is printed, not the variable name." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

    {
  title: "Integer Division and Remainders",
  text: `
int total = 17;
int groups = 5;

int each = total / groups;
int leftOver = total % groups;
`,
  questions: [
    {
      prompt: "What is stored in each?",
      choices: [
        { text: "3", correct: true, choiceExplanation: " is correct because 17 / 5 uses integer division and truncates to 3." },
        { text: "3.4", correct: false, choiceExplanation: " is incorrect because both operands are integers." },
        { text: "4", correct: false, choiceExplanation: " is incorrect because Java does not round integer division." },
        { text: "2", correct: false, choiceExplanation: " is incorrect because 5 fits into 17 three full times." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is stored in leftOver?",
      choices: [
        { text: "1", correct: false, choiceExplanation: " is incorrect because 17 divided by 5 leaves more than 1." },
        { text: "2", correct: true, choiceExplanation: " is correct because 5 goes into 17 three times with 2 remaining." },
        { text: "3", correct: false, choiceExplanation: " is incorrect because 3 is the quotient, not the remainder." },
        { text: "5", correct: false, choiceExplanation: " is incorrect because the remainder must be less than the divisor." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Boolean Variables",
  text: `
int age = 16;
boolean hasPermit = true;
boolean canDriveAlone = age >= 18 && hasPermit;
boolean canPractice = age >= 15 && hasPermit;
`,
  questions: [
    {
      prompt: "What is stored in canDriveAlone?",
      choices: [
        { text: "true", correct: false, choiceExplanation: " is incorrect because age >= 18 is false." },
        { text: "false", correct: true, choiceExplanation: " is correct because an && expression is true only when both sides are true." },
        { text: "16", correct: false, choiceExplanation: " is incorrect because the result is a boolean value." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the boolean expression is valid." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is stored in canPractice?",
      choices: [
        { text: "true", correct: true, choiceExplanation: " is correct because age >= 15 is true and hasPermit is also true." },
        { text: "false", correct: false, choiceExplanation: " is incorrect because both parts of the && expression are true." },
        { text: "15", correct: false, choiceExplanation: " is incorrect because the result is not numeric." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the expression is valid." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Object References",
  text: `
String first = new String("cat");
String second = first;
first = new String("dog");
`,
  questions: [
    {
      prompt: "After the code runs, what does second refer to?",
      choices: [
        { text: "\"cat\"", correct: true, choiceExplanation: " is correct because second was assigned the original object before first changed." },
        { text: "\"dog\"", correct: false, choiceExplanation: " is incorrect because reassigning first does not automatically reassign second." },
        { text: "null", correct: false, choiceExplanation: " is incorrect because second still refers to an object." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the assignments are valid." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "Which statement best explains first = new String(\"dog\");?",
      choices: [
        { text: "It changes the original String object from cat to dog.", correct: false, choiceExplanation: " is incorrect because String objects are immutable." },
        { text: "It makes first refer to a new String object.", correct: true, choiceExplanation: " is correct because first is reassigned to a new object." },
        { text: "It also changes second.", correct: false, choiceExplanation: " is incorrect because second keeps its old reference." },
        { text: "It deletes the variable second.", correct: false, choiceExplanation: " is incorrect because second is unaffected." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Non-Static Void Methods",
  text: `
public class Counter {
    private int value;

    public Counter() {
        value = 0;
    }

    public void addOne() {
        value++;
    }

    public void addAmount(int amount) {
        value += amount;
    }
}

Counter c = new Counter();
c.addOne();
c.addAmount(4);
`,
  questions: [
    {
      prompt: "Which method call uses a parameter?",
      choices: [
        { text: "new Counter();", correct: false, choiceExplanation: " is incorrect because this is a constructor call." },
        { text: "c.addOne();", correct: false, choiceExplanation: " is incorrect because addOne has no parameter." },
        { text: "c.addAmount(4);", correct: true, choiceExplanation: " is correct because 4 is passed into the amount parameter." },
        { text: "value++;", correct: false, choiceExplanation: " is incorrect because this is a statement inside a method." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is the final value of value inside object c?",
      choices: [
        { text: "0", correct: false, choiceExplanation: " is incorrect because both methods change value." },
        { text: "1", correct: false, choiceExplanation: " is incorrect because addAmount also adds 4." },
        { text: "4", correct: false, choiceExplanation: " is incorrect because addOne happens before addAmount." },
        { text: "5", correct: true, choiceExplanation: " is correct because value starts at 0, then becomes 1, then 5." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Using API Documentation",
  text: `
A student reads documentation for a method:

public int indexOf(String str)

The documentation says the method returns the index of the first occurrence of str, or -1 if str is not found.

String phrase = "blueberry";
int result = phrase.indexOf("berry");
`,
  questions: [
    {
      prompt: "What does the method return type tell you?",
      choices: [
        { text: "The method returns a String.", correct: false, choiceExplanation: " is incorrect because the return type is int." },
        { text: "The method returns an int.", correct: true, choiceExplanation: " is correct because public int indexOf means the method returns an integer." },
        { text: "The method has no return value.", correct: false, choiceExplanation: " is incorrect because void methods have no return value." },
        { text: "The method creates an object.", correct: false, choiceExplanation: " is incorrect because this is a method signature, not a constructor." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is stored in result?",
      choices: [
        { text: "0", correct: false, choiceExplanation: " is incorrect because berry does not start at index 0." },
        { text: "4", correct: true, choiceExplanation: " is correct because berry begins at index 4 in blueberry." },
        { text: "5", correct: false, choiceExplanation: " is incorrect because indexes start at 0." },
        { text: "-1", correct: false, choiceExplanation: " is incorrect because berry is found in the string." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

  {
  title: "Compound Assignment",
  text: `
int score = 10;
score += 5;
score /= 3;
score *= 4;
`,
  questions: [
    {
      prompt: "What is the value of score after score += 5?",
      choices: [
        { text: "5", correct: false, choiceExplanation: " is incorrect because 5 is added to the original value." },
        { text: "10", correct: false, choiceExplanation: " is incorrect because score changes." },
        { text: "15", correct: true, choiceExplanation: " is correct because score += 5 means score = score + 5." },
        { text: "50", correct: false, choiceExplanation: " is incorrect because += does not multiply." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is the final value of score?",
      choices: [
        { text: "20", correct: true, choiceExplanation: " is correct because score becomes 15, then 5 after integer division, then 20." },
        { text: "18", correct: false, choiceExplanation: " is incorrect because integer division does not keep decimals." },
        { text: "24", correct: false, choiceExplanation: " is incorrect because 15 / 3 is 5, not 6." },
        { text: "5", correct: false, choiceExplanation: " is incorrect because score is multiplied by 4 afterward." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Constructor With Parameters",
  text: `
public class Player {
    private String name;
    private int points;

    public Player(String n, int p) {
        name = n;
        points = p;
    }

    public void addPoints(int amount) {
        points += amount;
    }
}

Player p1 = new Player("Maya", 12);
p1.addPoints(8);
`,
  questions: [
    {
      prompt: "Which values are passed to the constructor?",
      choices: [
        { text: "\"Maya\" and 12", correct: true, choiceExplanation: " is correct because those values are inside the constructor call." },
        { text: "name and points", correct: false, choiceExplanation: " is incorrect because those are instance variables." },
        { text: "n and p", correct: false, choiceExplanation: " is incorrect because those are parameters in the constructor definition." },
        { text: "8 only", correct: false, choiceExplanation: " is incorrect because 8 is passed to addPoints, not the constructor." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is the value of points after p1.addPoints(8)?",
      choices: [
        { text: "8", correct: false, choiceExplanation: " is incorrect because points already started at 12." },
        { text: "12", correct: false, choiceExplanation: " is incorrect because addPoints changes points." },
        { text: "20", correct: true, choiceExplanation: " is correct because 12 + 8 = 20." },
        { text: "96", correct: false, choiceExplanation: " is incorrect because the method adds, not multiplies." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Method Parameters and Local Variables",
  text: `
public void update(int x) {
    x = x + 10;
    System.out.println(x);
}

int num = 7;
update(num);
System.out.println(num);
`,
  questions: [
    {
      prompt: "What is printed by update(num)?",
      choices: [
        { text: "7", correct: false, choiceExplanation: " is incorrect because x is increased before printing." },
        { text: "10", correct: false, choiceExplanation: " is incorrect because x starts as 7." },
        { text: "17", correct: true, choiceExplanation: " is correct because x receives 7 and then adds 10." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the method call is valid in context." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is printed by System.out.println(num)?",
      choices: [
        { text: "7", correct: true, choiceExplanation: " is correct because changing parameter x does not change num." },
        { text: "10", correct: false, choiceExplanation: " is incorrect because num was never assigned 10." },
        { text: "17", correct: false, choiceExplanation: " is incorrect because only local parameter x changed." },
        { text: "0", correct: false, choiceExplanation: " is incorrect because num was initialized to 7." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Mixed Types in Expressions",
  text: `
int a = 9;
int b = 4;
double c = 2.0;

double result1 = a / b;
double result2 = a / c;
`,
  questions: [
    {
      prompt: "What is stored in result1?",
      choices: [
        { text: "2.25", correct: false, choiceExplanation: " is incorrect because a and b are both ints, so integer division happens first." },
        { text: "2.0", correct: true, choiceExplanation: " is correct because 9 / 4 becomes 2, then is stored as 2.0." },
        { text: "2", correct: false, choiceExplanation: " is incorrect because result1 is a double." },
        { text: "3.0", correct: false, choiceExplanation: " is incorrect because Java does not round up." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is stored in result2?",
      choices: [
        { text: "4", correct: false, choiceExplanation: " is incorrect because the result is a double." },
        { text: "4.0", correct: false, choiceExplanation: " is incorrect because 9 / 2.0 is 4.5." },
        { text: "4.5", correct: true, choiceExplanation: " is correct because dividing by a double causes floating-point division." },
        { text: "5.0", correct: false, choiceExplanation: " is incorrect because Java does not round the result." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Reading a Method Signature",
  text: `
A class named Timer has the following method:

public void setTime(int hours, int minutes)

A program contains this object declaration:

Timer alarm = new Timer();
`,
  questions: [
    {
      prompt: "Which method call is valid?",
      choices: [
        { text: "alarm.setTime();", correct: false, choiceExplanation: " is incorrect because the method requires two int arguments." },
        { text: "alarm.setTime(6);", correct: false, choiceExplanation: " is incorrect because the method requires two arguments." },
        { text: "alarm.setTime(6, 30);", correct: true, choiceExplanation: " is correct because it passes two int values." },
        { text: "setTime.alarm(6, 30);", correct: false, choiceExplanation: " is incorrect because dot notation is reversed." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What does void indicate in the method signature?",
      choices: [
        { text: "The method returns an int.", correct: false, choiceExplanation: " is incorrect because int would appear as the return type." },
        { text: "The method returns no value.", correct: true, choiceExplanation: " is correct because void methods perform actions without returning a value." },
        { text: "The method cannot use parameters.", correct: false, choiceExplanation: " is incorrect because this method has parameters." },
        { text: "The method must be static.", correct: false, choiceExplanation: " is incorrect because void does not mean static." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

    {
  title: "Using Math.random",
  text: `
double r = Math.random();
int num = (int)(Math.random() * 6) + 1;
`,
  questions: [
    {
      prompt: "Which best describes the possible values of r?",
      choices: [
        { text: "0.0 to 1.0, including 1.0", correct: false, choiceExplanation: " is incorrect because Math.random() never returns 1.0." },
        { text: "0.0 to less than 1.0", correct: true, choiceExplanation: " is correct because Math.random() returns a double from 0.0 inclusive to 1.0 exclusive." },
        { text: "1 to 6", correct: false, choiceExplanation: " is incorrect because r stores the direct result of Math.random()." },
        { text: "Only whole numbers", correct: false, choiceExplanation: " is incorrect because Math.random() returns a double." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What are the possible values of num?",
      choices: [
        { text: "0 through 5", correct: false, choiceExplanation: " is incorrect because 1 is added after casting." },
        { text: "1 through 6", correct: true, choiceExplanation: " is correct because Math.random() * 6 gives values from 0.0 to less than 6.0, then casting and adding 1 gives 1 through 6." },
        { text: "1 through 5", correct: false, choiceExplanation: " is incorrect because 5 can cast from values below 6, then adding 1 gives 6." },
        { text: "0 through 6", correct: false, choiceExplanation: " is incorrect because the final result cannot be 0." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "String Concatenation",
  text: `
int a = 3;
int b = 4;

String first = "Answer: " + a + b;
String second = "Answer: " + (a + b);
`,
  questions: [
    {
      prompt: "What is stored in first?",
      choices: [
        { text: "\"Answer: 7\"", correct: false, choiceExplanation: " is incorrect because concatenation happens left to right." },
        { text: "\"Answer: 34\"", correct: true, choiceExplanation: " is correct because after the String appears, a and b are concatenated." },
        { text: "\"Answer: a b\"", correct: false, choiceExplanation: " is incorrect because variable values are used." },
        { text: "7", correct: false, choiceExplanation: " is incorrect because the result is a String." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is stored in second?",
      choices: [
        { text: "\"Answer: 34\"", correct: false, choiceExplanation: " is incorrect because parentheses force addition first." },
        { text: "\"Answer: 7\"", correct: true, choiceExplanation: " is correct because a + b is evaluated before concatenation." },
        { text: "\"Answer: 3 + 4\"", correct: false, choiceExplanation: " is incorrect because Java uses the values of a and b." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the statement is valid." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Calling Object Methods",
  text: `
public class Light {
    private boolean on;

    public Light() {
        on = false;
    }

    public void turnOn() {
        on = true;
    }

    public void turnOff() {
        on = false;
    }
}

Light lamp = new Light();
lamp.turnOn();
lamp.turnOff();
`,
  questions: [
    {
      prompt: "What does new Light() do?",
      choices: [
        { text: "Calls the constructor and creates a Light object", correct: true, choiceExplanation: " is correct because new Light() creates an object using the constructor." },
        { text: "Calls turnOn automatically", correct: false, choiceExplanation: " is incorrect because only the constructor runs automatically." },
        { text: "Changes on to true", correct: false, choiceExplanation: " is incorrect because the constructor sets on to false." },
        { text: "Prints the object", correct: false, choiceExplanation: " is incorrect because no print statement appears." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is the final value of on inside lamp?",
      choices: [
        { text: "true", correct: false, choiceExplanation: " is incorrect because turnOff runs after turnOn." },
        { text: "false", correct: true, choiceExplanation: " is correct because turnOff changes on back to false." },
        { text: "0", correct: false, choiceExplanation: " is incorrect because on is a boolean." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the method calls are valid." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "Constructor Without Parameters",
  text: `
public class Book {
    private int pages;

    public Book() {
        pages = 100;
    }

    public void addPages(int amount) {
        pages += amount;
    }
}

Book novel = new Book();
novel.addPages(50);
`,
  questions: [
    {
      prompt: "Which statement correctly describes the constructor?",
      choices: [
        { text: "It requires one int parameter.", correct: false, choiceExplanation: " is incorrect because Book() has no parameters." },
        { text: "It has no parameters and sets pages to 100.", correct: true, choiceExplanation: " is correct because the constructor is Book() and assigns pages = 100." },
        { text: "It returns an int.", correct: false, choiceExplanation: " is incorrect because constructors do not have return types." },
        { text: "It is called using novel.Book().", correct: false, choiceExplanation: " is incorrect because constructors are called with new." }
      ],
      category: "Unit 1: Using Objects and Methods"
    },
    {
      prompt: "What is the final value of pages for novel?",
      choices: [
        { text: "50", correct: false, choiceExplanation: " is incorrect because pages starts at 100." },
        { text: "100", correct: false, choiceExplanation: " is incorrect because addPages changes pages." },
        { text: "150", correct: true, choiceExplanation: " is correct because pages starts at 100 and 50 is added." },
        { text: "5000", correct: false, choiceExplanation: " is incorrect because the method adds, not multiplies." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
},

{
  title: "API Return Values",
  text: `
String item = "notebook";
int location = item.indexOf("book");
String ending = item.substring(location);
`,
  questions: [
    {
      prompt: "What is stored in location?",
      choices: [
        { text: "0", correct: false, choiceExplanation: " is incorrect because book does not begin at the first character." },
        { text: "4", correct: true, choiceExplanation: " is correct because book begins at index 4 in notebook." },
        { text: "5", correct: false, choiceExplanation: " is incorrect because indexes start at 0." },
        { text: "-1", correct: false, choiceExplanation: " is incorrect because book is found in notebook." }
      ],
      category: "Unit 1: Using Objects and Methods"
    }
  ]
}
]
});
