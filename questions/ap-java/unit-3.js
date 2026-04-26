window.questionBanks = window.questionBanks || {};

window.questionBanks.apJava = window.questionBanks.apJava || [];

window.questionBanks.apJava.push({

  name: "Unit 3",

rapidQuestions: [
{
  prompt: "What is a class in Java?",
  choices: [
    { text: "A loop structure", correct: false, choiceExplanation: " is incorrect because loops control repetition." },
    { text: "A blueprint for creating objects", correct: true, choiceExplanation: " is correct because classes define attributes and behaviors." },
    { text: "A variable type", correct: false, choiceExplanation: " is incorrect because variables store values." },
    { text: "A method", correct: false, choiceExplanation: " is incorrect because methods define behavior inside classes." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "An object is best described as:",
  choices: [
    { text: "A function", correct: false, choiceExplanation: " is incorrect because functions are methods." },
    { text: "An instance of a class", correct: true, choiceExplanation: " is correct because objects are created from classes." },
    { text: "A loop", correct: false, choiceExplanation: " is incorrect because loops repeat code." },
    { text: "A condition", correct: false, choiceExplanation: " is incorrect because conditions control flow." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which keyword is used to create a new object?",
  choices: [
    { text: "create", correct: false, choiceExplanation: " is incorrect because Java does not use create." },
    { text: "new", correct: true, choiceExplanation: " is correct because new constructs an object." },
    { text: "object", correct: false, choiceExplanation: " is incorrect because this is not a keyword." },
    { text: "make", correct: false, choiceExplanation: " is incorrect because Java does not use make." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which of the following is an attribute?",
  choices: [
    { text: "A method", correct: false, choiceExplanation: " is incorrect because methods define behavior." },
    { text: "A variable inside a class", correct: true, choiceExplanation: " is correct because attributes store object data." },
    { text: "A loop", correct: false, choiceExplanation: " is incorrect because loops repeat actions." },
    { text: "A parameter", correct: false, choiceExplanation: " is incorrect because parameters are inputs." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What does private mean for a variable?",
  choices: [
    { text: "It can be accessed anywhere", correct: false, choiceExplanation: " is incorrect because private restricts access." },
    { text: "It can only be accessed inside its class", correct: true, choiceExplanation: " is correct because private limits visibility." },
    { text: "It is global", correct: false, choiceExplanation: " is incorrect because private is not global." },
    { text: "It cannot be used", correct: false, choiceExplanation: " is incorrect because private variables are usable within the class." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What does public mean for a method?",
  choices: [
    { text: "It can only be used in loops", correct: false, choiceExplanation: " is incorrect because access is not loop-related." },
    { text: "It can be accessed from other classes", correct: true, choiceExplanation: " is correct because public allows access anywhere." },
    { text: "It cannot return values", correct: false, choiceExplanation: " is incorrect because methods can return values." },
    { text: "It must be static", correct: false, choiceExplanation: " is incorrect because public and static are different." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is the purpose of a constructor?",
  choices: [
    { text: "To destroy objects", correct: false, choiceExplanation: " is incorrect because constructors initialize objects." },
    { text: "To initialize object attributes", correct: true, choiceExplanation: " is correct because constructors set initial values." },
    { text: "To loop through values", correct: false, choiceExplanation: " is incorrect because constructors are not loops." },
    { text: "To compare variables", correct: false, choiceExplanation: " is incorrect because constructors do not compare." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which method type does NOT return a value?",
  choices: [
    { text: "int", correct: false, choiceExplanation: " is incorrect because int returns a number." },
    { text: "double", correct: false, choiceExplanation: " is incorrect because double returns a value." },
    { text: "void", correct: true, choiceExplanation: " is correct because void methods return nothing." },
    { text: "String", correct: false, choiceExplanation: " is incorrect because String returns text." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is a method?",
  choices: [
    { text: "A variable", correct: false, choiceExplanation: " is incorrect because variables store data." },
    { text: "A behavior of an object", correct: true, choiceExplanation: " is correct because methods define actions." },
    { text: "A class", correct: false, choiceExplanation: " is incorrect because classes contain methods." },
    { text: "A loop", correct: false, choiceExplanation: " is incorrect because loops repeat code." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Why are methods useful?",
  choices: [
    { text: "They make code longer", correct: false, choiceExplanation: " is incorrect because methods help organize code." },
    { text: "They break problems into smaller parts", correct: true, choiceExplanation: " is correct because methods improve organization." },
    { text: "They remove variables", correct: false, choiceExplanation: " is incorrect because variables are still needed." },
    { text: "They stop execution", correct: false, choiceExplanation: " is incorrect because methods do not stop programs." }
  ],
  category: "Unit 3: Class Creation"
},

{

  prompt: "What happens when a constructor is called?",

  choices: [

    { text: "A method is deleted", correct: false, choiceExplanation: " is incorrect because constructors create objects." },

    { text: "An object is initialized", correct: true, choiceExplanation: " is correct because constructors set up the object’s initial state." },

    { text: "A loop runs", correct: false, choiceExplanation: " is incorrect because constructors are not loops." },

    { text: "A class is destroyed", correct: false, choiceExplanation: " is incorrect because classes are not destroyed." }

  ],

  category: "Unit 3: Class Creation"

},

{

  prompt: "Which of the following is a correct constructor?",

  choices: [

    { text: "public void Person()", correct: false, choiceExplanation: " is incorrect because constructors do not have a return type." },

    { text: "public Person()", correct: true, choiceExplanation: " is correct because constructors match the class name and have no return type." },

    { text: "void Person()", correct: false, choiceExplanation: " is incorrect because constructors should not use void." },

    { text: "Person void()", correct: false, choiceExplanation: " is incorrect because the syntax is invalid." }

  ],

  category: "Unit 3: Class Creation"

},

{

  prompt: "What is the purpose of parameters in a constructor?",

  choices: [

    { text: "To loop through values", correct: false, choiceExplanation: " is incorrect because parameters pass data." },

    { text: "To set initial values for attributes", correct: true, choiceExplanation: " is correct because parameters allow customization of objects." },

    { text: "To delete variables", correct: false, choiceExplanation: " is incorrect because parameters do not delete variables." },

    { text: "To stop execution", correct: false, choiceExplanation: " is incorrect because parameters do not stop programs." }

  ],

  category: "Unit 3: Class Creation"

},

{

  prompt: "Which line creates an object of class Car?",

  choices: [

    { text: "Car = new Car();", correct: false, choiceExplanation: " is incorrect because a variable name is missing." },

    { text: "Car car = new Car();", correct: true, choiceExplanation: " is correct because it declares and constructs an object." },

    { text: "new Car();", correct: false, choiceExplanation: " is incorrect because it does not store the object." },

    { text: "Car.new();", correct: false, choiceExplanation: " is incorrect because this is not valid syntax." }

  ],

  category: "Unit 3: Class Creation"

},

{

  prompt: "What is an instance variable?",

  choices: [

    { text: "A variable inside a loop", correct: false, choiceExplanation: " is incorrect because loops are unrelated." },

    { text: "A variable defined in a class for each object", correct: true, choiceExplanation: " is correct because each object gets its own copy." },

    { text: "A global variable", correct: false, choiceExplanation: " is incorrect because instance variables belong to objects." },

    { text: "A method parameter", correct: false, choiceExplanation: " is incorrect because parameters are temporary." }

  ],

  category: "Unit 3: Class Creation"

},

{

  prompt: "Which keyword refers to the current object?",

  choices: [

    { text: "this", correct: true, choiceExplanation: " is correct because this refers to the current instance." },

    { text: "self", correct: false, choiceExplanation: " is incorrect because Java uses this, not self." },

    { text: "current", correct: false, choiceExplanation: " is incorrect because this is the correct keyword." },

    { text: "object", correct: false, choiceExplanation: " is incorrect because object is not a keyword." }

  ],

  category: "Unit 3: Class Creation"

},

{

  prompt: "Why is the 'this' keyword useful?",

  choices: [

    { text: "It creates loops", correct: false, choiceExplanation: " is incorrect because this does not control loops." },

    { text: "It distinguishes instance variables from parameters", correct: true, choiceExplanation: " is correct because it avoids naming conflicts." },

    { text: "It deletes objects", correct: false, choiceExplanation: " is incorrect because Java handles memory differently." },

    { text: "It runs constructors", correct: false, choiceExplanation: " is incorrect because constructors run when called." }

  ],

  category: "Unit 3: Class Creation"

},

{

  prompt: "What will happen if a class has no constructor defined?",

  choices: [

    { text: "The program crashes", correct: false, choiceExplanation: " is incorrect because Java provides a default constructor." },

    { text: "Java creates a default constructor", correct: true, choiceExplanation: " is correct because Java automatically provides one." },

    { text: "Objects cannot be created", correct: false, choiceExplanation: " is incorrect because objects can still be created." },

    { text: "Methods stop working", correct: false, choiceExplanation: " is incorrect because methods are unaffected." }

  ],

  category: "Unit 3: Class Creation"

},

{

  prompt: "What is method overloading?",

  choices: [

    { text: "Having multiple methods with the same name but different parameters", correct: true, choiceExplanation: " is correct because Java allows methods with different signatures." },

    { text: "Calling a method twice", correct: false, choiceExplanation: " is incorrect because that is just reuse." },

    { text: "Deleting methods", correct: false, choiceExplanation: " is incorrect because methods are not removed." },

    { text: "Running multiple loops", correct: false, choiceExplanation: " is incorrect because loops are unrelated." }

  ],

  category: "Unit 3: Class Creation"

},

{

  prompt: "What is returned by a void method?",

  choices: [

    { text: "0", correct: false, choiceExplanation: " is incorrect because void returns nothing." },

    { text: "null", correct: false, choiceExplanation: " is incorrect because null is a value." },

    { text: "Nothing", correct: true, choiceExplanation: " is correct because void means no return value." },

    { text: "A default value", correct: false, choiceExplanation: " is incorrect because no value is returned." }

  ],

  category: "Unit 3: Class Creation"

},

  {
  prompt: "What is printed by the following code?\n\nclass Dog {\n  String name;\n\n  public Dog(String n) {\n    name = n;\n  }\n}\n\nDog d = new Dog(\"Max\");\nSystem.out.print(d.name);",
  choices: [
    { text: "Max", correct: true, choiceExplanation: " is correct because the constructor sets name to \"Max\"." },
    { text: "Dog", correct: false, choiceExplanation: " is incorrect because Dog is the class name." },
    { text: "null", correct: false, choiceExplanation: " is incorrect because name is initialized by the constructor." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What happens when the following code is compiled?\n\nclass Car {\n  private int speed;\n\n  public Car(int s) {\n    speed = s;\n  }\n}\n\nCar c = new Car(60);\nSystem.out.print(c.speed);",
  choices: [
    { text: "It prints 60", correct: false, choiceExplanation: " is incorrect because speed is private." },
    { text: "It prints 0", correct: false, choiceExplanation: " is incorrect because speed is not accessible directly." },
    { text: "It causes an error", correct: true, choiceExplanation: " is correct because private variables cannot be accessed directly outside the class." },
    { text: "It prints null", correct: false, choiceExplanation: " is incorrect because speed is an int." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is printed by the following code?\n\nclass Counter {\n  int count;\n\n  public void increment() {\n    count++;\n  }\n}\n\nCounter c = new Counter();\nc.increment();\nSystem.out.print(c.count);",
  choices: [
    { text: "0", correct: false, choiceExplanation: " is incorrect because increment increases count." },
    { text: "1", correct: true, choiceExplanation: " is correct because int instance variables start at 0 and increment changes count to 1." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." },
    { text: "null", correct: false, choiceExplanation: " is incorrect because count is an int." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is printed after calling b.printTitle()?\n\nclass Book {\n  String title;\n\n  public Book(String t) {\n    title = t;\n  }\n\n  public void printTitle() {\n    System.out.print(title);\n  }\n}\n\nBook b = new Book(\"APCS\");\nb.printTitle();",
  choices: [
    { text: "APCS", correct: true, choiceExplanation: " is correct because printTitle prints the title attribute." },
    { text: "Book", correct: false, choiceExplanation: " is incorrect because Book is the class name." },
    { text: "null", correct: false, choiceExplanation: " is incorrect because title was set by the constructor." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which line correctly calls a method named drive on an object named car?",
  choices: [
    { text: "car.drive();", correct: true, choiceExplanation: " is correct because object methods are called using dot notation." },
    { text: "drive(car);", correct: false, choiceExplanation: " is incorrect because that is not the standard object method call syntax." },
    { text: "car->drive();", correct: false, choiceExplanation: " is incorrect because Java does not use -> for method calls." },
    { text: "Car.drive;", correct: false, choiceExplanation: " is incorrect because parentheses are needed for a method call." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What happens if a method requires an int parameter, but the method is called with no arguments?",
  choices: [
    { text: "It runs using 0", correct: false, choiceExplanation: " is incorrect because Java does not automatically fill in missing arguments." },
    { text: "It runs using null", correct: false, choiceExplanation: " is incorrect because null cannot replace a missing int argument." },
    { text: "It causes a compile-time error", correct: true, choiceExplanation: " is correct because the method call must match the method signature." },
    { text: "It skips the method", correct: false, choiceExplanation: " is incorrect because invalid method calls do not compile." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is printed by the following code?\n\nclass Student {\n  int grade;\n\n  public Student(int g) {\n    grade = g;\n  }\n}\n\nStudent s1 = new Student(90);\nStudent s2 = new Student(80);\nSystem.out.print(s1.grade + s2.grade);",
  choices: [
    { text: "9080", correct: false, choiceExplanation: " is incorrect because grade values are ints, so addition occurs." },
    { text: "170", correct: true, choiceExplanation: " is correct because 90 + 80 equals 170." },
    { text: "90", correct: false, choiceExplanation: " is incorrect because both objects are used." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Why is it useful to split a large program into multiple methods?",
  choices: [
    { text: "It makes code harder to reuse", correct: false, choiceExplanation: " is incorrect because methods usually make code easier to reuse." },
    { text: "It improves readability and organization", correct: true, choiceExplanation: " is correct because smaller methods make programs easier to understand and maintain." },
    { text: "It removes the need for objects", correct: false, choiceExplanation: " is incorrect because objects can still use methods." },
    { text: "It prevents constructors from being used", correct: false, choiceExplanation: " is incorrect because constructors are still used to initialize objects." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which statement best describes encapsulation?",
  choices: [
    { text: "Repeating code with loops", correct: false, choiceExplanation: " is incorrect because loops are unrelated to encapsulation." },
    { text: "Protecting object data by making attributes private", correct: true, choiceExplanation: " is correct because encapsulation hides internal data and controls access through methods." },
    { text: "Creating only static methods", correct: false, choiceExplanation: " is incorrect because encapsulation is not about static methods." },
    { text: "Printing object values automatically", correct: false, choiceExplanation: " is incorrect because encapsulation does not automatically print values." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is printed by the following code?\n\nclass Test {\n  public void sayHi() {\n    System.out.print(\"Hi\");\n  }\n}\n\nTest t = new Test();\nt.sayHi();\nt.sayHi();",
  choices: [
    { text: "Hi", correct: false, choiceExplanation: " is incorrect because the method is called twice." },
    { text: "HiHi", correct: true, choiceExplanation: " is correct because each method call prints Hi." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." },
    { text: "null", correct: false, choiceExplanation: " is incorrect because the method prints text." }
  ],
  category: "Unit 3: Class Creation"
},

  {
  prompt: "Which constructor correctly matches a class named Account?",
  choices: [
    { text: "public void Account()", correct: false, choiceExplanation: " is incorrect because constructors do not have a return type." },
    { text: "public Account()", correct: true, choiceExplanation: " is correct because a constructor must match the class name and have no return type." },
    { text: "public account()", correct: false, choiceExplanation: " is incorrect because Java is case-sensitive." },
    { text: "public int Account()", correct: false, choiceExplanation: " is incorrect because constructors do not return values." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is wrong with this constructor?\n\npublic void Student(String n) {\n  name = n;\n}",
  choices: [
    { text: "It has a return type", correct: true, choiceExplanation: " is correct because constructors cannot use void." },
    { text: "It has a parameter", correct: false, choiceExplanation: " is incorrect because constructors may have parameters." },
    { text: "It assigns a variable", correct: false, choiceExplanation: " is incorrect because constructors often assign variables." },
    { text: "It uses parentheses", correct: false, choiceExplanation: " is incorrect because constructors require parentheses." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which line correctly creates a new object using a constructor with two parameters?",
  choices: [
    { text: "Player p = new Player;", correct: false, choiceExplanation: " is incorrect because constructor calls need parentheses." },
    { text: "Player p = Player(\"Ana\", 5);", correct: false, choiceExplanation: " is incorrect because new is missing." },
    { text: "Player p = new Player(\"Ana\", 5);", correct: true, choiceExplanation: " is correct because it passes two arguments to the constructor." },
    { text: "new Player = p(\"Ana\", 5);", correct: false, choiceExplanation: " is incorrect because the assignment syntax is invalid." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is the best reason to make instance variables private?",
  choices: [
    { text: "To prevent outside code from directly changing object data", correct: true, choiceExplanation: " is correct because private variables support encapsulation." },
    { text: "To stop constructors from using them", correct: false, choiceExplanation: " is incorrect because constructors can use private instance variables." },
    { text: "To make them global", correct: false, choiceExplanation: " is incorrect because private limits access." },
    { text: "To make them print automatically", correct: false, choiceExplanation: " is incorrect because access modifiers do not print values." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which method is most likely an accessor method?",
  choices: [
    { text: "public int getAge()", correct: true, choiceExplanation: " is correct because accessor methods usually return private data." },
    { text: "public void setAge(int a)", correct: false, choiceExplanation: " is incorrect because this is more likely a mutator method." },
    { text: "public void increaseAge()", correct: false, choiceExplanation: " is incorrect because it changes object state." },
    { text: "private int age", correct: false, choiceExplanation: " is incorrect because this is a variable, not a method." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which method is most likely a mutator method?",
  choices: [
    { text: "public String getName()", correct: false, choiceExplanation: " is incorrect because getter methods usually access data." },
    { text: "public int getScore()", correct: false, choiceExplanation: " is incorrect because it returns data without changing it." },
    { text: "public void setScore(int s)", correct: true, choiceExplanation: " is correct because mutator methods change object data." },
    { text: "public double calculateAverage()", correct: false, choiceExplanation: " is incorrect because it likely calculates and returns a value." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is the main purpose of a helper method?",
  choices: [
    { text: "To break a larger task into a smaller task", correct: true, choiceExplanation: " is correct because helper methods organize repeated or detailed work." },
    { text: "To replace every constructor", correct: false, choiceExplanation: " is incorrect because helper methods do not replace constructors." },
    { text: "To make all variables public", correct: false, choiceExplanation: " is incorrect because helper methods are unrelated to access level." },
    { text: "To prevent object creation", correct: false, choiceExplanation: " is incorrect because helper methods do not stop constructors." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is printed by this code?\n\nclass Box {\n  private int size;\n\n  public Box(int s) {\n    size = s;\n  }\n\n  public int getSize() {\n    return size;\n  }\n}\n\nBox b = new Box(12);\nSystem.out.print(b.getSize());",
  choices: [
    { text: "12", correct: true, choiceExplanation: " is correct because getSize returns the private size value." },
    { text: "0", correct: false, choiceExplanation: " is incorrect because the constructor sets size to 12." },
    { text: "size", correct: false, choiceExplanation: " is incorrect because the value is returned, not the variable name." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because accessing size through a public method is valid." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What happens when this code runs?\n\nclass Box {\n  private int size;\n\n  public Box(int s) {\n    size = s;\n  }\n}\n\nBox b = new Box(12);\nSystem.out.print(b.size);",
  choices: [
    { text: "It prints 12", correct: false, choiceExplanation: " is incorrect because size is private." },
    { text: "It prints 0", correct: false, choiceExplanation: " is incorrect because private access prevents compilation." },
    { text: "It causes an error", correct: true, choiceExplanation: " is correct because private instance variables cannot be accessed directly outside the class." },
    { text: "It prints null", correct: false, choiceExplanation: " is incorrect because size is an int." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which statement best explains why methods help with problem decomposition?",
  choices: [
    { text: "They allow one large task to be divided into smaller named steps", correct: true, choiceExplanation: " is correct because methods can represent smaller parts of a larger solution." },
    { text: "They force every variable to become public", correct: false, choiceExplanation: " is incorrect because methods do not require public variables." },
    { text: "They remove the need for classes", correct: false, choiceExplanation: " is incorrect because methods usually belong inside classes." },
    { text: "They prevent objects from storing attributes", correct: false, choiceExplanation: " is incorrect because objects can still store attributes." }
  ],
  category: "Unit 3: Class Creation"
},

  {
  prompt: "What is printed by this code?\n\nclass Wallet {\n  private int dollars;\n\n  public Wallet() {\n    dollars = 5;\n  }\n\n  public void addMoney(int amount) {\n    dollars += amount;\n  }\n\n  public int getDollars() {\n    return dollars;\n  }\n}\n\nWallet w = new Wallet();\nw.addMoney(10);\nSystem.out.print(w.getDollars());",
  choices: [
    { text: "5", correct: false, choiceExplanation: " is incorrect because addMoney changes dollars." },
    { text: "10", correct: false, choiceExplanation: " is incorrect because dollars starts at 5." },
    { text: "15", correct: true, choiceExplanation: " is correct because dollars starts at 5 and then 10 is added." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the private variable is accessed through a public method." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which method would be best for changing a private variable named health?",
  choices: [
    { text: "public int getHealth()", correct: false, choiceExplanation: " is incorrect because a getter only returns the value." },
    { text: "public void setHealth(int h)", correct: true, choiceExplanation: " is correct because a setter can update a private variable." },
    { text: "private int health", correct: false, choiceExplanation: " is incorrect because this declares a variable, not a method." },
    { text: "public Health()", correct: false, choiceExplanation: " is incorrect because this looks like a constructor." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is printed by this code?\n\nclass Score {\n  private int points;\n\n  public Score(int p) {\n    points = p;\n  }\n\n  public void doublePoints() {\n    points *= 2;\n  }\n\n  public int getPoints() {\n    return points;\n  }\n}\n\nScore s = new Score(7);\ns.doublePoints();\nSystem.out.print(s.getPoints());",
  choices: [
    { text: "7", correct: false, choiceExplanation: " is incorrect because doublePoints changes points." },
    { text: "14", correct: true, choiceExplanation: " is correct because 7 doubled is 14." },
    { text: "0", correct: false, choiceExplanation: " is incorrect because points is initialized by the constructor." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the method calls are valid." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which statement best describes a constructor with no parameters?",
  choices: [
    { text: "It cannot initialize attributes", correct: false, choiceExplanation: " is incorrect because it can set default values." },
    { text: "It creates an object using default setup code", correct: true, choiceExplanation: " is correct because a no-argument constructor initializes an object without input values." },
    { text: "It must return void", correct: false, choiceExplanation: " is incorrect because constructors do not have return types." },
    { text: "It cannot be public", correct: false, choiceExplanation: " is incorrect because constructors are often public." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is printed by this code?\n\nclass Rectangle {\n  private int width;\n  private int height;\n\n  public Rectangle(int w, int h) {\n    width = w;\n    height = h;\n  }\n\n  public int area() {\n    return width * height;\n  }\n}\n\nRectangle r = new Rectangle(4, 6);\nSystem.out.print(r.area());",
  choices: [
    { text: "10", correct: false, choiceExplanation: " is incorrect because area multiplies width and height." },
    { text: "24", correct: true, choiceExplanation: " is correct because 4 times 6 equals 24." },
    { text: "46", correct: false, choiceExplanation: " is incorrect because the values are ints and are multiplied." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Why might a class use private attributes with public methods?",
  choices: [
    { text: "To prevent any object from being created", correct: false, choiceExplanation: " is incorrect because private attributes do not prevent object creation." },
    { text: "To control how outside code reads or changes object data", correct: true, choiceExplanation: " is correct because public methods can safely manage access to private data." },
    { text: "To make constructors unnecessary", correct: false, choiceExplanation: " is incorrect because constructors may still be needed." },
    { text: "To make all methods run automatically", correct: false, choiceExplanation: " is incorrect because methods run only when called." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is printed by this code?\n\nclass Message {\n  private String text;\n\n  public Message(String t) {\n    text = t;\n  }\n\n  public void addExclamation() {\n    text += \"!\";\n  }\n\n  public String getText() {\n    return text;\n  }\n}\n\nMessage m = new Message(\"Hi\");\nm.addExclamation();\nm.addExclamation();\nSystem.out.print(m.getText());",
  choices: [
    { text: "Hi", correct: false, choiceExplanation: " is incorrect because addExclamation is called twice." },
    { text: "Hi!", correct: false, choiceExplanation: " is incorrect because two exclamation marks are added." },
    { text: "Hi!!", correct: true, choiceExplanation: " is correct because each method call adds one exclamation mark." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which option is the best example of decomposing a problem into methods?",
  choices: [
    { text: "Putting all code into main", correct: false, choiceExplanation: " is incorrect because that keeps the problem as one large block." },
    { text: "Creating separate methods for input, calculation, and output", correct: true, choiceExplanation: " is correct because each method handles a smaller part of the overall task." },
    { text: "Making every variable public", correct: false, choiceExplanation: " is incorrect because public variables do not decompose a problem." },
    { text: "Avoiding constructors", correct: false, choiceExplanation: " is incorrect because constructors are unrelated to breaking tasks into steps." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "What is printed by this code?\n\nclass Timer {\n  private int seconds;\n\n  public Timer() {\n    seconds = 0;\n  }\n\n  public void tick() {\n    seconds++;\n  }\n\n  public int getSeconds() {\n    return seconds;\n  }\n}\n\nTimer t = new Timer();\nt.tick();\nt.tick();\nt.tick();\nSystem.out.print(t.getSeconds());",
  choices: [
    { text: "0", correct: false, choiceExplanation: " is incorrect because tick is called three times." },
    { text: "1", correct: false, choiceExplanation: " is incorrect because tick runs more than once." },
    { text: "3", correct: true, choiceExplanation: " is correct because seconds starts at 0 and is incremented three times." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
  ],
  category: "Unit 3: Class Creation"
},

{
  prompt: "Which statement best describes a class’s attributes and behaviors?",
  choices: [
    { text: "Attributes are methods, and behaviors are variables", correct: false, choiceExplanation: " is incorrect because this reverses the meanings." },
    { text: "Attributes store data, and behaviors are defined by methods", correct: true, choiceExplanation: " is correct because variables represent state and methods represent actions." },
    { text: "Attributes only exist in loops", correct: false, choiceExplanation: " is incorrect because attributes belong to objects." },
    { text: "Behaviors must always be private variables", correct: false, choiceExplanation: " is incorrect because behaviors are methods." }
  ],
  category: "Unit 3: Class Creation"
}
  
],

  passages: [

{
  title: "Creating a Simple Class",
  image: "",
  imageAlt: "",
  text: `
A class named Car stores information about a vehicle. It has private instance variables for brand and speed. A constructor initializes these values, and methods allow access and modification.
  `,
  questions: [
    {
      prompt: "Why are the instance variables declared private?",
      choices: [
        { text: "To prevent direct access from outside the class", correct: true, choiceExplanation: " is correct because private enforces encapsulation." },
        { text: "To make them global", correct: false, choiceExplanation: " is incorrect because private restricts access." },
        { text: "To allow automatic printing", correct: false, choiceExplanation: " is incorrect because access modifiers don’t control printing." },
        { text: "To prevent constructors from using them", correct: false, choiceExplanation: " is incorrect because constructors can access private variables." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "What is the role of the constructor in this class?",
      choices: [
        { text: "To print values", correct: false, choiceExplanation: " is incorrect because constructors initialize objects." },
        { text: "To initialize instance variables", correct: true, choiceExplanation: " is correct because constructors set starting values." },
        { text: "To delete objects", correct: false, choiceExplanation: " is incorrect because constructors create objects." },
        { text: "To return values", correct: false, choiceExplanation: " is incorrect because constructors do not return values." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},
{
  title: "Constructor Behavior",
  image: "",
  imageAlt: "",
  text: `
class Student {
  private String name;

  public Student(String n) {
    name = n;
  }

  public String getName() {
    return name;
  }
}
  `,
  questions: [
    {
      prompt: "What does the constructor do?",
      choices: [
        { text: "Assigns name using the parameter", correct: true, choiceExplanation: " is correct because n is assigned to name." },
        { text: "Returns the name", correct: false, choiceExplanation: " is incorrect because the getter does that." },
        { text: "Creates multiple objects", correct: false, choiceExplanation: " is incorrect because each call creates one object." },
        { text: "Deletes the name variable", correct: false, choiceExplanation: " is incorrect because it assigns it." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "What is returned by getName()?",
      choices: [
        { text: "The parameter n", correct: false, choiceExplanation: " is incorrect because n is not stored after construction." },
        { text: "The instance variable name", correct: true, choiceExplanation: " is correct because it returns name." },
        { text: "Nothing", correct: false, choiceExplanation: " is incorrect because it returns a String." },
        { text: "An int", correct: false, choiceExplanation: " is incorrect because the return type is String." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},
{
  title: "Mutator Method",
  image: "",
  imageAlt: "",
  text: `
class Counter {
  private int count;

  public Counter() {
    count = 0;
  }

  public void increment() {
    count++;
  }

  public int getCount() {
    return count;
  }
}
  `,
  questions: [
    {
      prompt: "What type of method is increment()?",
      choices: [
        { text: "Accessor", correct: false, choiceExplanation: " is incorrect because it modifies data." },
        { text: "Mutator", correct: true, choiceExplanation: " is correct because it changes count." },
        { text: "Constructor", correct: false, choiceExplanation: " is incorrect because it has a return type." },
        { text: "Static method", correct: false, choiceExplanation: " is incorrect because it uses instance variables." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "What happens after calling increment() three times?",
      choices: [
        { text: "count becomes 3", correct: true, choiceExplanation: " is correct because count increases by 1 each call." },
        { text: "count becomes 0", correct: false, choiceExplanation: " is incorrect because increment changes it." },
        { text: "count becomes 1", correct: false, choiceExplanation: " is incorrect because it's called multiple times." },
        { text: "Error occurs", correct: false, choiceExplanation: " is incorrect because the code is valid." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},
{
  title: "Object Creation",
  image: "",
  imageAlt: "",
  text: `
class Dog {
  private String name;

  public Dog(String n) {
    name = n;
  }
}

Dog d = new Dog("Max");
  `,
  questions: [
    {
      prompt: "What does new Dog(\"Max\") do?",
      choices: [
        { text: "Calls the constructor", correct: true, choiceExplanation: " is correct because it creates and initializes the object." },
        { text: "Deletes the object", correct: false, choiceExplanation: " is incorrect because new creates objects." },
        { text: "Returns nothing", correct: false, choiceExplanation: " is incorrect because it returns a Dog object." },
        { text: "Prints Max", correct: false, choiceExplanation: " is incorrect because no print statement exists." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "What value is stored in name?",
      choices: [
        { text: "Max", correct: true, choiceExplanation: " is correct because the constructor assigns it." },
        { text: "Dog", correct: false, choiceExplanation: " is incorrect because that's the class name." },
        { text: "null", correct: false, choiceExplanation: " is incorrect because it was initialized." },
        { text: "0", correct: false, choiceExplanation: " is incorrect because name is a String." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},
{
  title: "Method Decomposition",
  image: "",
  imageAlt: "",
  text: `
A program calculates the total price of items by splitting the task into smaller methods: one method calculates tax, another calculates discounts, and another computes the final total.
  `,
  questions: [
    {
      prompt: "Why are multiple methods used?",
      choices: [
        { text: "To break a problem into smaller parts", correct: true, choiceExplanation: " is correct because this improves readability and organization." },
        { text: "To remove variables", correct: false, choiceExplanation: " is incorrect because variables are still needed." },
        { text: "To avoid constructors", correct: false, choiceExplanation: " is incorrect because constructors serve a different purpose." },
        { text: "To make everything public", correct: false, choiceExplanation: " is incorrect because access level is unrelated." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "What is this approach called?",
      choices: [
        { text: "Encapsulation", correct: false, choiceExplanation: " is incorrect because encapsulation is about data protection." },
        { text: "Decomposition", correct: true, choiceExplanation: " is correct because the problem is divided into smaller tasks." },
        { text: "Iteration", correct: false, choiceExplanation: " is incorrect because loops are not described." },
        { text: "Inheritance", correct: false, choiceExplanation: " is incorrect because classes are not extended here." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

    {
  title: "Multiple Objects",
  image: "",
  imageAlt: "",
  text: `
class Player {
  private String name;
  private int score;

  public Player(String n, int s) {
    name = n;
    score = s;
  }

  public void addPoints(int amount) {
    score += amount;
  }

  public int getScore() {
    return score;
  }
}

Player p1 = new Player("Kai", 10);
Player p2 = new Player("Mia", 20);

p1.addPoints(5);
p2.addPoints(10);

System.out.print(p1.getScore() + " " + p2.getScore());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "10 20", correct: false, choiceExplanation: " is incorrect because both objects have their scores changed." },
        { text: "15 30", correct: true, choiceExplanation: " is correct because p1 becomes 15 and p2 becomes 30." },
        { text: "30 15", correct: false, choiceExplanation: " is incorrect because p1 and p2 keep separate scores." },
        { text: "25 25", correct: false, choiceExplanation: " is incorrect because each object is updated separately." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Why do p1 and p2 store different scores?",
      choices: [
        { text: "Each object has its own copy of instance variables", correct: true, choiceExplanation: " is correct because instance variables belong to individual objects." },
        { text: "Private variables cannot store values", correct: false, choiceExplanation: " is incorrect because private variables still store data." },
        { text: "Constructors only work once per class", correct: false, choiceExplanation: " is incorrect because constructors run for each new object." },
        { text: "Methods automatically reset values", correct: false, choiceExplanation: " is incorrect because addPoints changes existing values." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Using this in a Constructor",
  image: "",
  imageAlt: "",
  text: `
class Laptop {
  private String model;
  private int year;

  public Laptop(String model, int year) {
    this.model = model;
    this.year = year;
  }

  public String getModel() {
    return model;
  }
}
  `,
  questions: [
    {
      prompt: "What does this.model = model; do?",
      choices: [
        { text: "Assigns the parameter model to the instance variable model", correct: true, choiceExplanation: " is correct because this.model refers to the object's instance variable." },
        { text: "Creates a new class named model", correct: false, choiceExplanation: " is incorrect because no class is being created." },
        { text: "Deletes the parameter", correct: false, choiceExplanation: " is incorrect because assignment does not delete variables." },
        { text: "Calls getModel()", correct: false, choiceExplanation: " is incorrect because no method is called on that line." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Why is this useful in the constructor?",
      choices: [
        { text: "It separates loop variables from method names", correct: false, choiceExplanation: " is incorrect because no loop is involved." },
        { text: "It distinguishes instance variables from parameters with the same name", correct: true, choiceExplanation: " is correct because this refers to the current object's fields." },
        { text: "It makes all variables public", correct: false, choiceExplanation: " is incorrect because this does not change access modifiers." },
        { text: "It prevents objects from being created", correct: false, choiceExplanation: " is incorrect because this is used after object creation begins." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Accessor and Mutator Methods",
  image: "",
  imageAlt: "",
  text: `
class BankAccount {
  private double balance;

  public BankAccount(double startingBalance) {
    balance = startingBalance;
  }

  public double getBalance() {
    return balance;
  }

  public void deposit(double amount) {
    balance += amount;
  }
}
  `,
  questions: [
    {
      prompt: "Which method is an accessor?",
      choices: [
        { text: "BankAccount(double startingBalance)", correct: false, choiceExplanation: " is incorrect because this is a constructor." },
        { text: "getBalance()", correct: true, choiceExplanation: " is correct because it returns the value of an instance variable." },
        { text: "deposit(double amount)", correct: false, choiceExplanation: " is incorrect because it changes balance." },
        { text: "balance += amount", correct: false, choiceExplanation: " is incorrect because this is a statement, not a method." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Which method is a mutator?",
      choices: [
        { text: "getBalance()", correct: false, choiceExplanation: " is incorrect because it only returns balance." },
        { text: "deposit(double amount)", correct: true, choiceExplanation: " is correct because it modifies the object's balance." },
        { text: "BankAccount(double startingBalance)", correct: false, choiceExplanation: " is incorrect because this is the constructor." },
        { text: "private double balance", correct: false, choiceExplanation: " is incorrect because this declares an instance variable." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Method Calls Changing State",
  image: "",
  imageAlt: "",
  text: `
class Light {
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

  public boolean isOn() {
    return on;
  }
}

Light lamp = new Light();
lamp.turnOn();
lamp.turnOff();
System.out.print(lamp.isOn());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "true", correct: false, choiceExplanation: " is incorrect because turnOff is called after turnOn." },
        { text: "false", correct: true, choiceExplanation: " is correct because the final method call sets on to false." },
        { text: "0", correct: false, choiceExplanation: " is incorrect because isOn returns a boolean." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the method calls are valid." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Which method returns the current state of the object?",
      choices: [
        { text: "Light()", correct: false, choiceExplanation: " is incorrect because this is the constructor." },
        { text: "turnOn()", correct: false, choiceExplanation: " is incorrect because it changes on to true." },
        { text: "turnOff()", correct: false, choiceExplanation: " is incorrect because it changes on to false." },
        { text: "isOn()", correct: true, choiceExplanation: " is correct because it returns the value of on." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Decomposing a Rectangle Problem",
  image: "",
  imageAlt: "",
  text: `
class Rectangle {
  private int width;
  private int height;

  public Rectangle(int w, int h) {
    width = w;
    height = h;
  }

  public int area() {
    return width * height;
  }

  public int perimeter() {
    return 2 * (width + height);
  }

  public void printSummary() {
    System.out.println(area());
    System.out.println(perimeter());
  }
}

Rectangle r = new Rectangle(3, 5);
r.printSummary();
  `,
  questions: [
    {
      prompt: "What is printed first by printSummary()?",
      choices: [
        { text: "8", correct: false, choiceExplanation: " is incorrect because 8 is width + height, not area." },
        { text: "15", correct: true, choiceExplanation: " is correct because area returns 3 * 5." },
        { text: "16", correct: false, choiceExplanation: " is incorrect because 16 is the perimeter." },
        { text: "30", correct: false, choiceExplanation: " is incorrect because the dimensions are not both multiplied by 2." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "How does printSummary() show problem decomposition?",
      choices: [
        { text: "It performs all math directly in one long statement", correct: false, choiceExplanation: " is incorrect because it calls separate methods." },
        { text: "It uses smaller methods for area and perimeter", correct: true, choiceExplanation: " is correct because the larger task is broken into smaller behaviors." },
        { text: "It makes instance variables public", correct: false, choiceExplanation: " is incorrect because the variables are private." },
        { text: "It avoids using constructors", correct: false, choiceExplanation: " is incorrect because a constructor is used." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

    {
  title: "Constructor with Default Values",
  image: "",
  imageAlt: "",
  text: `
class GameCharacter {
  private String name;
  private int health;

  public GameCharacter() {
    name = "Unknown";
    health = 100;
  }

  public GameCharacter(String n, int h) {
    name = n;
    health = h;
  }

  public String getName() {
    return name;
  }

  public int getHealth() {
    return health;
  }
}

GameCharacter a = new GameCharacter();
GameCharacter b = new GameCharacter("Hero", 75);

System.out.print(a.getName() + " " + a.getHealth() + " ");
System.out.print(b.getName() + " " + b.getHealth());
  `,
  questions: [
    {
      prompt: "What is printed for object a?",
      choices: [
        { text: "Unknown 100", correct: true, choiceExplanation: " is correct because the no-argument constructor sets default values." },
        { text: "Hero 75", correct: false, choiceExplanation: " is incorrect because those values belong to object b." },
        { text: "null 0", correct: false, choiceExplanation: " is incorrect because the constructor initializes both variables." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the no-argument constructor is valid." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Which constructor is used for object b?",
      choices: [
        { text: "GameCharacter()", correct: false, choiceExplanation: " is incorrect because b is created with two arguments." },
        { text: "GameCharacter(String n, int h)", correct: true, choiceExplanation: " is correct because b passes a String and an int." },
        { text: "getName()", correct: false, choiceExplanation: " is incorrect because getName is a method, not a constructor." },
        { text: "getHealth()", correct: false, choiceExplanation: " is incorrect because getHealth is a method, not a constructor." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Changing Object State",
  image: "",
  imageAlt: "",
  text: `
class Temperature {
  private double degrees;

  public Temperature(double d) {
    degrees = d;
  }

  public void increase(double amount) {
    degrees += amount;
  }

  public void decrease(double amount) {
    degrees -= amount;
  }

  public double getDegrees() {
    return degrees;
  }
}

Temperature t = new Temperature(70.0);
t.increase(5.5);
t.decrease(2.0);
System.out.print(t.getDegrees());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "70.0", correct: false, choiceExplanation: " is incorrect because increase and decrease change degrees." },
        { text: "75.5", correct: false, choiceExplanation: " is incorrect because decrease runs after increase." },
        { text: "73.5", correct: true, choiceExplanation: " is correct because 70.0 + 5.5 - 2.0 = 73.5." },
        { text: "77.5", correct: false, choiceExplanation: " is incorrect because the second method subtracts." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Which methods are mutators?",
      choices: [
        { text: "increase and decrease", correct: true, choiceExplanation: " is correct because both methods modify degrees." },
        { text: "getDegrees only", correct: false, choiceExplanation: " is incorrect because getDegrees only returns a value." },
        { text: "Temperature only", correct: false, choiceExplanation: " is incorrect because Temperature is a constructor." },
        { text: "All methods return double", correct: false, choiceExplanation: " is incorrect because increase and decrease are void methods." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Private Data and Public Access",
  image: "",
  imageAlt: "",
  text: `
class Phone {
  private String model;
  private int battery;

  public Phone(String m) {
    model = m;
    battery = 100;
  }

  public void useBattery(int amount) {
    battery -= amount;
  }

  public int getBattery() {
    return battery;
  }
}

Phone p = new Phone("Nova");
p.useBattery(30);
System.out.print(p.getBattery());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "100", correct: false, choiceExplanation: " is incorrect because useBattery reduces battery." },
        { text: "70", correct: true, choiceExplanation: " is correct because battery starts at 100 and decreases by 30." },
        { text: "30", correct: false, choiceExplanation: " is incorrect because amount is subtracted from 100." },
        { text: "Nova", correct: false, choiceExplanation: " is incorrect because getBattery returns an int, not the model." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Why can outside code call getBattery() but not directly access battery?",
      choices: [
        { text: "battery is public and getBattery is private", correct: false, choiceExplanation: " is incorrect because battery is private and getBattery is public." },
        { text: "battery is private and getBattery is public", correct: true, choiceExplanation: " is correct because public methods can provide controlled access to private data." },
        { text: "constructors block all variables", correct: false, choiceExplanation: " is incorrect because constructors initialize variables." },
        { text: "int variables cannot be accessed in Java", correct: false, choiceExplanation: " is incorrect because access depends on modifiers." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Methods Calling Other Methods",
  image: "",
  imageAlt: "",
  text: `
class Circle {
  private double radius;

  public Circle(double r) {
    radius = r;
  }

  public double diameter() {
    return radius * 2;
  }

  public double circumference() {
    return 3.14 * diameter();
  }
}

Circle c = new Circle(5.0);
System.out.print(c.circumference());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "10.0", correct: false, choiceExplanation: " is incorrect because 10.0 is the diameter, not circumference." },
        { text: "15.7", correct: false, choiceExplanation: " is incorrect because circumference uses diameter, not radius alone." },
        { text: "31.4", correct: true, choiceExplanation: " is correct because diameter is 10.0 and 3.14 * 10.0 = 31.4." },
        { text: "78.5", correct: false, choiceExplanation: " is incorrect because that would be area-style multiplication." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "How does circumference() demonstrate decomposition?",
      choices: [
        { text: "It uses diameter() to complete part of its calculation", correct: true, choiceExplanation: " is correct because one method handles a smaller subtask." },
        { text: "It directly accesses private data from outside the class", correct: false, choiceExplanation: " is incorrect because circumference is inside the class." },
        { text: "It avoids using a constructor", correct: false, choiceExplanation: " is incorrect because a constructor initializes radius." },
        { text: "It makes radius public", correct: false, choiceExplanation: " is incorrect because radius remains private." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Two Objects, Same Class",
  image: "",
  imageAlt: "",
  text: `
class Pet {
  private String name;
  private int age;

  public Pet(String n, int a) {
    name = n;
    age = a;
  }

  public void birthday() {
    age++;
  }

  public int getAge() {
    return age;
  }
}

Pet pet1 = new Pet("Luna", 2);
Pet pet2 = new Pet("Rocky", 5);

pet1.birthday();
pet1.birthday();
pet2.birthday();

System.out.print(pet1.getAge() + " " + pet2.getAge());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "2 5", correct: false, choiceExplanation: " is incorrect because birthday changes both objects." },
        { text: "4 6", correct: true, choiceExplanation: " is correct because pet1 increases twice and pet2 increases once." },
        { text: "6 4", correct: false, choiceExplanation: " is incorrect because each object keeps its own age." },
        { text: "3 7", correct: false, choiceExplanation: " is incorrect because the method calls do not match those changes." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "What does this example show about instance variables?",
      choices: [
        { text: "All objects share one copy of age", correct: false, choiceExplanation: " is incorrect because pet1 and pet2 have different ages." },
        { text: "Each object maintains its own attribute values", correct: true, choiceExplanation: " is correct because each Pet object stores its own age." },
        { text: "Private variables cannot change", correct: false, choiceExplanation: " is incorrect because private variables can change inside the class." },
        { text: "Constructors run every time a method is called", correct: false, choiceExplanation: " is incorrect because constructors run when objects are created." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

   {
  title: "Organizing Attributes and Behaviors",
  image: "",
  imageAlt: "",
  text: `
class Playlist {
  private String title;
  private int songCount;

  public Playlist(String t) {
    title = t;
    songCount = 0;
  }

  public void addSong() {
    songCount++;
  }

  public int getSongCount() {
    return songCount;
  }

  public String getTitle() {
    return title;
  }
}

Playlist p = new Playlist("Study Mix");
p.addSong();
p.addSong();
System.out.print(p.getTitle() + ": " + p.getSongCount());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "Study Mix: 0", correct: false, choiceExplanation: " is incorrect because addSong is called twice." },
        { text: "Study Mix: 2", correct: true, choiceExplanation: " is correct because songCount starts at 0 and increases twice." },
        { text: "Playlist: 2", correct: false, choiceExplanation: " is incorrect because the title attribute is Study Mix." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the code uses public methods to access private data." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Which pair correctly identifies an attribute and a behavior in the class?",
      choices: [
        { text: "title is an attribute; addSong is a behavior", correct: true, choiceExplanation: " is correct because title stores data and addSong performs an action." },
        { text: "addSong is an attribute; title is a behavior", correct: false, choiceExplanation: " is incorrect because addSong is a method and title is a variable." },
        { text: "getTitle is an attribute; songCount is a behavior", correct: false, choiceExplanation: " is incorrect because getTitle is a method and songCount is a variable." },
        { text: "Playlist is an attribute; private is a behavior", correct: false, choiceExplanation: " is incorrect because Playlist is the class name and private is an access modifier." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Setter Method with Validation",
  image: "",
  imageAlt: "",
  text: `
class Player {
  private int level;

  public Player() {
    level = 1;
  }

  public void setLevel(int newLevel) {
    if (newLevel > 0) {
      level = newLevel;
    }
  }

  public int getLevel() {
    return level;
  }
}

Player p = new Player();
p.setLevel(5);
p.setLevel(-2);
System.out.print(p.getLevel());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "1", correct: false, choiceExplanation: " is incorrect because setLevel(5) changes level." },
        { text: "5", correct: true, choiceExplanation: " is correct because 5 is accepted and -2 is ignored." },
        { text: "-2", correct: false, choiceExplanation: " is incorrect because the setter rejects values less than or equal to 0." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "How does setLevel demonstrate encapsulation?",
      choices: [
        { text: "It allows outside code to directly change level", correct: false, choiceExplanation: " is incorrect because level is private." },
        { text: "It controls how a private variable can be changed", correct: true, choiceExplanation: " is correct because the method validates newLevel before changing level." },
        { text: "It prevents objects from being created", correct: false, choiceExplanation: " is incorrect because the constructor still creates objects." },
        { text: "It makes level public only when negative", correct: false, choiceExplanation: " is incorrect because level remains private." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Helper Methods",
  image: "",
  imageAlt: "",
  text: `
class ReportCard {
  private int grade1;
  private int grade2;

  public ReportCard(int g1, int g2) {
    grade1 = g1;
    grade2 = g2;
  }

  private double average() {
    return (grade1 + grade2) / 2.0;
  }

  public boolean isPassing() {
    return average() >= 60.0;
  }
}

ReportCard r = new ReportCard(70, 80);
System.out.print(r.isPassing());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "true", correct: true, choiceExplanation: " is correct because the average is 75.0, which is at least 60.0." },
        { text: "false", correct: false, choiceExplanation: " is incorrect because the average is passing." },
        { text: "75.0", correct: false, choiceExplanation: " is incorrect because isPassing returns a boolean." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because a public method can call a private helper method inside the same class." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Why is average() private?",
      choices: [
        { text: "It is only used as a helper inside the class", correct: true, choiceExplanation: " is correct because outside code only needs the public isPassing behavior." },
        { text: "Private methods cannot return values", correct: false, choiceExplanation: " is incorrect because private methods can return values." },
        { text: "Private methods are constructors", correct: false, choiceExplanation: " is incorrect because average has a return type and is not a constructor." },
        { text: "It must be private because it uses doubles", correct: false, choiceExplanation: " is incorrect because access modifiers are unrelated to data type." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Constructor Parameters and Instance Variables",
  image: "",
  imageAlt: "",
  text: `
class Movie {
  private String title;
  private int rating;

  public Movie(String title, int rating) {
    this.title = title;
    this.rating = rating;
  }

  public void improveRating() {
    rating++;
  }

  public int getRating() {
    return rating;
  }
}

Movie m = new Movie("Sky Quest", 7);
m.improveRating();
System.out.print(m.getRating());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "7", correct: false, choiceExplanation: " is incorrect because improveRating increases rating." },
        { text: "8", correct: true, choiceExplanation: " is correct because the constructor sets rating to 7 and improveRating adds 1." },
        { text: "Sky Quest", correct: false, choiceExplanation: " is incorrect because getRating returns the rating." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because this.title and this.rating are valid uses of this." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Why is this.rating used in the constructor?",
      choices: [
        { text: "To refer to the instance variable instead of the parameter", correct: true, choiceExplanation: " is correct because the parameter and instance variable have the same name." },
        { text: "To make rating public", correct: false, choiceExplanation: " is incorrect because this does not change access." },
        { text: "To call improveRating automatically", correct: false, choiceExplanation: " is incorrect because no method call occurs there." },
        { text: "To create a second Movie object", correct: false, choiceExplanation: " is incorrect because this refers to the current object." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Breaking a Larger Task into Methods",
  image: "",
  imageAlt: "",
  text: `
class Order {
  private double subtotal;

  public Order(double s) {
    subtotal = s;
  }

  public double tax() {
    return subtotal * 0.06;
  }

  public double shipping() {
    return 5.00;
  }

  public double total() {
    return subtotal + tax() + shipping();
  }
}

Order o = new Order(100.00);
System.out.print(o.total());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "100.0", correct: false, choiceExplanation: " is incorrect because tax and shipping are added." },
        { text: "106.0", correct: false, choiceExplanation: " is incorrect because shipping is also added." },
        { text: "111.0", correct: true, choiceExplanation: " is correct because subtotal is 100.0, tax is 6.0, and shipping is 5.0." },
        { text: "5.0", correct: false, choiceExplanation: " is incorrect because shipping is only one part of the total." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Which statement best explains the design of total()?",
      choices: [
        { text: "It decomposes the calculation by using tax() and shipping()", correct: true, choiceExplanation: " is correct because total relies on smaller methods for parts of the task." },
        { text: "It avoids using object attributes", correct: false, choiceExplanation: " is incorrect because tax uses subtotal." },
        { text: "It directly modifies subtotal", correct: false, choiceExplanation: " is incorrect because total returns a value without changing subtotal." },
        { text: "It prevents constructors from running", correct: false, choiceExplanation: " is incorrect because the constructor already initialized the object." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

    {
  title: "Class Design for a Game Item",
  image: "",
  imageAlt: "",
  text: `
class GameItem {
  private String name;
  private int durability;

  public GameItem(String n, int d) {
    name = n;
    durability = d;
  }

  public void useItem() {
    durability--;
  }

  public boolean isBroken() {
    return durability <= 0;
  }

  public String getName() {
    return name;
  }
}

GameItem item = new GameItem("Shield", 2);
item.useItem();
item.useItem();
System.out.print(item.getName() + " " + item.isBroken());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "Shield true", correct: true, choiceExplanation: " is correct because durability becomes 0 after two uses, so isBroken returns true." },
        { text: "Shield false", correct: false, choiceExplanation: " is incorrect because durability is no longer above 0." },
        { text: "GameItem true", correct: false, choiceExplanation: " is incorrect because getName returns Shield, not the class name." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because all method calls are valid." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Which method changes the object's state?",
      choices: [
        { text: "useItem()", correct: true, choiceExplanation: " is correct because it decreases durability." },
        { text: "isBroken()", correct: false, choiceExplanation: " is incorrect because it only returns a boolean." },
        { text: "getName()", correct: false, choiceExplanation: " is incorrect because it only returns name." },
        { text: "GameItem(String n, int d)", correct: false, choiceExplanation: " is incorrect because this is the constructor, not a regular mutator method." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Using a Private Helper Method",
  image: "",
  imageAlt: "",
  text: `
class PasswordChecker {
  private String password;

  public PasswordChecker(String p) {
    password = p;
  }

  private boolean hasEnoughCharacters() {
    return password.length() >= 8;
  }

  public boolean isValid() {
    return hasEnoughCharacters();
  }
}

PasswordChecker checker = new PasswordChecker("prep1234");
System.out.print(checker.isValid());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "true", correct: true, choiceExplanation: " is correct because prep1234 has 8 characters." },
        { text: "false", correct: false, choiceExplanation: " is incorrect because the password meets the length requirement." },
        { text: "8", correct: false, choiceExplanation: " is incorrect because isValid returns a boolean, not the length." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because a public method can call a private helper inside the same class." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Why is hasEnoughCharacters() a helper method?",
      choices: [
        { text: "It handles one smaller part of the larger validity check", correct: true, choiceExplanation: " is correct because it separates one step of the validation process." },
        { text: "It creates a new PasswordChecker object", correct: false, choiceExplanation: " is incorrect because constructors create objects." },
        { text: "It directly prints the password", correct: false, choiceExplanation: " is incorrect because it returns a boolean." },
        { text: "It makes password public", correct: false, choiceExplanation: " is incorrect because password remains private." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Two Constructors in One Class",
  image: "",
  imageAlt: "",
  text: `
class Badge {
  private String label;
  private int points;

  public Badge() {
    label = "Starter";
    points = 0;
  }

  public Badge(String l, int p) {
    label = l;
    points = p;
  }

  public int getPoints() {
    return points;
  }
}

Badge b1 = new Badge();
Badge b2 = new Badge("Expert", 50);

System.out.print(b1.getPoints() + b2.getPoints());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "0", correct: false, choiceExplanation: " is incorrect because b2 contributes 50 points." },
        { text: "50", correct: true, choiceExplanation: " is correct because b1 has 0 points and b2 has 50 points." },
        { text: "Expert", correct: false, choiceExplanation: " is incorrect because getPoints returns an int." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because overloaded constructors are allowed." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "What concept is shown by having Badge() and Badge(String l, int p)?",
      choices: [
        { text: "Constructor overloading", correct: true, choiceExplanation: " is correct because the class has multiple constructors with different parameter lists." },
        { text: "Infinite recursion", correct: false, choiceExplanation: " is incorrect because the constructors are not calling themselves." },
        { text: "Loop nesting", correct: false, choiceExplanation: " is incorrect because no loop is shown." },
        { text: "Direct public data access", correct: false, choiceExplanation: " is incorrect because the instance variables are private." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Public Methods with Private Attributes",
  image: "",
  imageAlt: "",
  text: `
class Locker {
  private int code;
  private boolean open;

  public Locker(int c) {
    code = c;
    open = false;
  }

  public void tryCode(int guess) {
    if (guess == code) {
      open = true;
    }
  }

  public boolean isOpen() {
    return open;
  }
}

Locker locker = new Locker(2468);
locker.tryCode(1234);
locker.tryCode(2468);
System.out.print(locker.isOpen());
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "true", correct: true, choiceExplanation: " is correct because the second guess matches the private code." },
        { text: "false", correct: false, choiceExplanation: " is incorrect because tryCode(2468) sets open to true." },
        { text: "2468", correct: false, choiceExplanation: " is incorrect because isOpen returns a boolean." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because outside code uses public methods rather than directly accessing private variables." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "How does this class protect the locker code?",
      choices: [
        { text: "The code variable is private and only checked through a public method", correct: true, choiceExplanation: " is correct because outside code cannot directly access code." },
        { text: "The code variable is public so anyone can view it", correct: false, choiceExplanation: " is incorrect because code is private." },
        { text: "The constructor deletes the code after storing it", correct: false, choiceExplanation: " is incorrect because the code is kept as an instance variable." },
        { text: "The isOpen method changes the code", correct: false, choiceExplanation: " is incorrect because isOpen only returns open." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
},

{
  title: "Combining Behaviors",
  image: "",
  imageAlt: "",
  text: `
class Workout {
  private int pushups;
  private int situps;

  public Workout(int p, int s) {
    pushups = p;
    situps = s;
  }

  public int totalExercises() {
    return pushups + situps;
  }

  public boolean completedGoal(int goal) {
    return totalExercises() >= goal;
  }
}

Workout w = new Workout(25, 30);
System.out.print(w.completedGoal(50));
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "true", correct: true, choiceExplanation: " is correct because totalExercises returns 55, which is at least 50." },
        { text: "false", correct: false, choiceExplanation: " is incorrect because 25 + 30 meets the goal." },
        { text: "55", correct: false, choiceExplanation: " is incorrect because completedGoal returns a boolean." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because one method can call another method in the same class." }
      ],
      category: "Unit 3: Class Creation"
    },
    {
      prompt: "Why is totalExercises() useful in this class?",
      choices: [
        { text: "It separates the total calculation from the goal-checking method", correct: true, choiceExplanation: " is correct because completedGoal can reuse totalExercises as a smaller step." },
        { text: "It prevents objects from having attributes", correct: false, choiceExplanation: " is incorrect because the object still has pushups and situps." },
        { text: "It makes pushups and situps public", correct: false, choiceExplanation: " is incorrect because the variables remain private." },
        { text: "It forces completedGoal to return an int", correct: false, choiceExplanation: " is incorrect because completedGoal returns a boolean." }
      ],
      category: "Unit 3: Class Creation"
    }
  ]
}
    
    ]
  
});
