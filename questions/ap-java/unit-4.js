window.questionBanks = window.questionBanks || {};
window.questionBanks.apJava = window.questionBanks.apJava || [];

window.questionBanks.apJava.push({
  name: "Unit 4: Data Collections",

  rapidQuestions: [

{

  prompt: "What is the index of the first element in a Java array?",

  choices: [

    { text: "0", correct: true, choiceExplanation: " is correct because Java arrays are zero-indexed." },

    { text: "1", correct: false, choiceExplanation: " is incorrect because indexing starts at 0." },

    { text: "-1", correct: false, choiceExplanation: " is incorrect because negative indexing is not used in Java arrays." },

    { text: "Depends on size", correct: false, choiceExplanation: " is incorrect because indexing always starts at 0." }

  ],

  category: "Unit 4: Data Collections"

},

{

  prompt: "Which loop is best for iterating through every element of an array?",

  choices: [

    { text: "for loop", correct: true, choiceExplanation: " is correct because it allows indexed traversal of arrays." },

    { text: "if statement", correct: false, choiceExplanation: " is incorrect because it does not iterate." },

    { text: "switch statement", correct: false, choiceExplanation: " is incorrect because it is for branching." },

    { text: "try-catch", correct: false, choiceExplanation: " is incorrect because it handles exceptions." }

  ],

  category: "Unit 4: Data Collections"

},

{

  prompt: "What does arr.length return?",

  choices: [

    { text: "The last index", correct: false, choiceExplanation: " is incorrect because the last index is length - 1." },

    { text: "The number of elements", correct: true, choiceExplanation: " is correct because length gives total elements." },

    { text: "The first value", correct: false, choiceExplanation: " is incorrect because it returns size, not value." },

    { text: "The sum of elements", correct: false, choiceExplanation: " is incorrect because no summation occurs." }

  ],

  category: "Unit 4: Data Collections"

},

{

  prompt: "Which structure allows dynamic resizing?",

  choices: [

    { text: "Array", correct: false, choiceExplanation: " is incorrect because arrays are fixed size." },

    { text: "ArrayList", correct: true, choiceExplanation: " is correct because ArrayLists can grow and shrink." },

    { text: "int", correct: false, choiceExplanation: " is incorrect because it is a primitive type." },

    { text: "String", correct: false, choiceExplanation: " is incorrect because it is not a collection." }

  ],

  category: "Unit 4: Data Collections"

},

{

  prompt: "How do you access an element in an ArrayList?",

  choices: [

    { text: "list[i]", correct: false, choiceExplanation: " is incorrect because ArrayLists use methods." },

    { text: "list.get(i)", correct: true, choiceExplanation: " is correct because get() retrieves elements." },

    { text: "list.access(i)", correct: false, choiceExplanation: " is incorrect because this method does not exist." },

    { text: "list.value(i)", correct: false, choiceExplanation: " is incorrect because this method does not exist." }

  ],

  category: "Unit 4: Data Collections"

},

{

  prompt: "What is the result of this code?\nint[] arr = {1,2,3}; System.out.print(arr[1]);",

  choices: [

    { text: "1", correct: false, choiceExplanation: " is incorrect because index 1 holds 2." },

    { text: "2", correct: true, choiceExplanation: " is correct because arrays are zero-indexed." },

    { text: "3", correct: false, choiceExplanation: " is incorrect because index 2 holds 3." },

    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }

  ],

  category: "Unit 4: Data Collections"

},

{

  prompt: "Which algorithm repeatedly compares adjacent elements and swaps them?",

  choices: [

    { text: "Binary search", correct: false, choiceExplanation: " is incorrect because it searches, not sorts." },

    { text: "Merge sort", correct: false, choiceExplanation: " is incorrect because it divides and merges." },

    { text: "Bubble sort", correct: true, choiceExplanation: " is correct because it swaps adjacent elements." },

    { text: "Linear search", correct: false, choiceExplanation: " is incorrect because it searches sequentially." }

  ],

  category: "Unit 4: Data Collections"

},

{

  prompt: "What is required before using binary search?",

  choices: [

    { text: "The array must be sorted", correct: true, choiceExplanation: " is correct because binary search requires order." },

    { text: "The array must be reversed", correct: false, choiceExplanation: " is incorrect because order must be ascending or descending." },

    { text: "The array must contain only integers", correct: false, choiceExplanation: " is incorrect because binary search works on comparable data." },

    { text: "The array must be empty", correct: false, choiceExplanation: " is incorrect because searching requires data." }

  ],

  category: "Unit 4: Data Collections"

},

{

  prompt: "What does this return?\nArrayList<Integer> list = new ArrayList<>(); list.add(5); list.add(10); System.out.print(list.size());",

  choices: [

    { text: "1", correct: false, choiceExplanation: " is incorrect because two elements were added." },

    { text: "2", correct: true, choiceExplanation: " is correct because size() returns number of elements." },

    { text: "5", correct: false, choiceExplanation: " is incorrect because it returns count, not value." },

    { text: "10", correct: false, choiceExplanation: " is incorrect because it returns count, not value." }

  ],

  category: "Unit 4: Data Collections"

},

{

  prompt: "Which loop is required to traverse a 2D array?",

  choices: [

    { text: "Single for loop", correct: false, choiceExplanation: " is incorrect because two dimensions require nested loops." },

    { text: "Nested loops", correct: true, choiceExplanation: " is correct because rows and columns must both be accessed." },

    { text: "While loop only", correct: false, choiceExplanation: " is incorrect because it cannot handle both dimensions alone." },

    { text: "If statement", correct: false, choiceExplanation: " is incorrect because it does not iterate." }

  ],

  category: "Unit 4: Data Collections"

},

    {
  prompt: "What does this code print?\nint[] arr = {4, 8, 12}; System.out.print(arr.length - 1);",
  choices: [
    { text: "2", correct: true, choiceExplanation: " is correct because length is 3, so last index is 2." },
    { text: "3", correct: false, choiceExplanation: " is incorrect because length is 3 but last index is 2." },
    { text: "12", correct: false, choiceExplanation: " is incorrect because this prints an index, not a value." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "Which method adds an element to an ArrayList?",
  choices: [
    { text: "insert()", correct: false, choiceExplanation: " is incorrect because this method does not exist." },
    { text: "add()", correct: true, choiceExplanation: " is correct because add() appends elements." },
    { text: "push()", correct: false, choiceExplanation: " is incorrect because it is used in stacks, not ArrayLists." },
    { text: "append()", correct: false, choiceExplanation: " is incorrect because Java uses add()." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What is the result of this code?\nArrayList<String> list = new ArrayList<>(); list.add(\"A\"); list.add(\"B\"); System.out.print(list.get(0));",
  choices: [
    { text: "A", correct: true, choiceExplanation: " is correct because index 0 is the first element." },
    { text: "B", correct: false, choiceExplanation: " is incorrect because B is at index 1." },
    { text: "0", correct: false, choiceExplanation: " is incorrect because get returns the element, not index." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because syntax is valid." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "Which best describes a 2D array?",
  choices: [
    { text: "A single list of numbers", correct: false, choiceExplanation: " is incorrect because that is a 1D array." },
    { text: "An array of arrays", correct: true, choiceExplanation: " is correct because each element is another array." },
    { text: "A loop structure", correct: false, choiceExplanation: " is incorrect because arrays store data." },
    { text: "A method", correct: false, choiceExplanation: " is incorrect because it is a data structure." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this code print?\nint[][] grid = {{1,2},{3,4}}; System.out.print(grid[1][0]);",
  choices: [
    { text: "1", correct: false, choiceExplanation: " is incorrect because that is grid[0][0]." },
    { text: "2", correct: false, choiceExplanation: " is incorrect because that is grid[0][1]." },
    { text: "3", correct: true, choiceExplanation: " is correct because row 1, column 0 is 3." },
    { text: "4", correct: false, choiceExplanation: " is incorrect because that is grid[1][1]." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "Which algorithm divides the array into halves repeatedly?",
  choices: [
    { text: "Bubble sort", correct: false, choiceExplanation: " is incorrect because it compares adjacent elements." },
    { text: "Merge sort", correct: true, choiceExplanation: " is correct because it uses divide-and-conquer." },
    { text: "Linear search", correct: false, choiceExplanation: " is incorrect because it checks sequentially." },
    { text: "Selection sort", correct: false, choiceExplanation: " is incorrect because it finds minimums." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What is the time complexity of binary search?",
  choices: [
    { text: "O(n)", correct: false, choiceExplanation: " is incorrect because it does not check every element." },
    { text: "O(log n)", correct: true, choiceExplanation: " is correct because the search space halves each step." },
    { text: "O(n^2)", correct: false, choiceExplanation: " is incorrect because it is not quadratic." },
    { text: "O(1)", correct: false, choiceExplanation: " is incorrect because it depends on input size." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What happens if you access an index outside an array’s bounds?",
  choices: [
    { text: "Returns null", correct: false, choiceExplanation: " is incorrect because Java throws an error." },
    { text: "Returns 0", correct: false, choiceExplanation: " is incorrect because no default value is returned." },
    { text: "Throws an exception", correct: true, choiceExplanation: " is correct because Java enforces bounds checking." },
    { text: "Loops back to start", correct: false, choiceExplanation: " is incorrect because arrays do not wrap." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "Which is true about recursion?",
  choices: [
    { text: "It always uses loops", correct: false, choiceExplanation: " is incorrect because recursion replaces loops." },
    { text: "It calls itself", correct: true, choiceExplanation: " is correct because recursion involves self-calling methods." },
    { text: "It cannot return values", correct: false, choiceExplanation: " is incorrect because recursive methods can return values." },
    { text: "It is only used for sorting", correct: false, choiceExplanation: " is incorrect because it has many uses." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What is required for a recursive method to stop?",
  choices: [
    { text: "A loop", correct: false, choiceExplanation: " is incorrect because recursion replaces loops." },
    { text: "A base case", correct: true, choiceExplanation: " is correct because it prevents infinite recursion." },
    { text: "An ArrayList", correct: false, choiceExplanation: " is incorrect because recursion is independent of data structures." },
    { text: "A constructor", correct: false, choiceExplanation: " is incorrect because constructors are unrelated." }
  ],
  category: "Unit 4: Data Collections"
},

    {
  prompt: "What does this code print?\nint[] nums = {2, 4, 6, 8};\nSystem.out.print(nums[nums.length - 1]);",
  choices: [
    { text: "2", correct: false, choiceExplanation: " is incorrect because index 0 stores 2." },
    { text: "4", correct: false, choiceExplanation: " is incorrect because index 1 stores 4." },
    { text: "6", correct: false, choiceExplanation: " is incorrect because index 2 stores 6." },
    { text: "8", correct: true, choiceExplanation: " is correct because nums.length - 1 gives the last index." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "Which loop correctly traverses every element of an int array named nums?",
  choices: [
    { text: "for (int i = 0; i <= nums.length; i++)", correct: false, choiceExplanation: " is incorrect because i <= nums.length goes out of bounds." },
    { text: "for (int i = 0; i < nums.length; i++)", correct: true, choiceExplanation: " is correct because valid indexes go from 0 to nums.length - 1." },
    { text: "for (int i = 1; i <= nums.length; i++)", correct: false, choiceExplanation: " is incorrect because it skips index 0 and eventually goes out of bounds." },
    { text: "for (int i = nums.length; i > 0; i++)", correct: false, choiceExplanation: " is incorrect because it starts out of bounds and increases." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this code print?\nArrayList<Integer> values = new ArrayList<Integer>();\nvalues.add(3);\nvalues.add(6);\nvalues.add(9);\nvalues.remove(1);\nSystem.out.print(values.get(1));",
  choices: [
    { text: "3", correct: false, choiceExplanation: " is incorrect because 3 remains at index 0." },
    { text: "6", correct: false, choiceExplanation: " is incorrect because the element at index 1 was removed." },
    { text: "9", correct: true, choiceExplanation: " is correct because after removing 6, 9 shifts to index 1." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because index 1 still exists after the removal." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does list.set(2, \"cat\") do for an ArrayList<String> named list?",
  choices: [
    { text: "Adds cat to the end of the list", correct: false, choiceExplanation: " is incorrect because add appends elements." },
    { text: "Replaces the element at index 2 with cat", correct: true, choiceExplanation: " is correct because set changes an existing element." },
    { text: "Removes cat from the list", correct: false, choiceExplanation: " is incorrect because remove deletes elements." },
    { text: "Returns the size of the list", correct: false, choiceExplanation: " is incorrect because size returns the number of elements." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this code print?\nint[][] grid = {\n  {1, 2, 3},\n  {4, 5, 6}\n};\nSystem.out.print(grid.length);",
  choices: [
    { text: "2", correct: true, choiceExplanation: " is correct because grid.length gives the number of rows." },
    { text: "3", correct: false, choiceExplanation: " is incorrect because 3 is the number of columns in each row." },
    { text: "5", correct: false, choiceExplanation: " is incorrect because length does not add rows and columns." },
    { text: "6", correct: false, choiceExplanation: " is incorrect because length does not count all elements in a 2D array." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this code print?\nint[][] grid = {\n  {1, 2, 3},\n  {4, 5, 6}\n};\nSystem.out.print(grid[0].length);",
  choices: [
    { text: "2", correct: false, choiceExplanation: " is incorrect because 2 is the number of rows." },
    { text: "3", correct: true, choiceExplanation: " is correct because grid[0].length gives the number of columns in row 0." },
    { text: "5", correct: false, choiceExplanation: " is incorrect because length does not add dimensions." },
    { text: "6", correct: false, choiceExplanation: " is incorrect because grid[0].length counts only one row's elements." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "Which algorithm checks each element one at a time until the target is found?",
  choices: [
    { text: "Linear search", correct: true, choiceExplanation: " is correct because linear search moves through elements sequentially." },
    { text: "Binary search", correct: false, choiceExplanation: " is incorrect because binary search repeatedly halves a sorted data set." },
    { text: "Merge sort", correct: false, choiceExplanation: " is incorrect because merge sort sorts data." },
    { text: "Recursion", correct: false, choiceExplanation: " is incorrect because recursion is a technique, not specifically sequential search." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What is the worst-case runtime of linear search on an array of n elements?",
  choices: [
    { text: "O(1)", correct: false, choiceExplanation: " is incorrect because the search may need to check many elements." },
    { text: "O(log n)", correct: false, choiceExplanation: " is incorrect because linear search does not halve the data." },
    { text: "O(n)", correct: true, choiceExplanation: " is correct because the algorithm may check every element." },
    { text: "O(n^2)", correct: false, choiceExplanation: " is incorrect because there is no nested traversal." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What is the main advantage of merge sort?",
  choices: [
    { text: "It always runs in O(1)", correct: false, choiceExplanation: " is incorrect because sorting depends on the number of elements." },
    { text: "It efficiently sorts by dividing and merging data", correct: true, choiceExplanation: " is correct because merge sort uses divide-and-conquer." },
    { text: "It only works on unsorted 2D arrays", correct: false, choiceExplanation: " is incorrect because merge sort is not limited to 2D arrays." },
    { text: "It requires no comparisons", correct: false, choiceExplanation: " is incorrect because sorting uses comparisons." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What is the typical runtime of merge sort?",
  choices: [
    { text: "O(1)", correct: false, choiceExplanation: " is incorrect because sorting requires work based on input size." },
    { text: "O(log n)", correct: false, choiceExplanation: " is incorrect because merging work is also required." },
    { text: "O(n)", correct: false, choiceExplanation: " is incorrect because merge sort does more than one simple pass." },
    { text: "O(n log n)", correct: true, choiceExplanation: " is correct because merge sort divides the data and merges at each level." }
  ],
  category: "Unit 4: Data Collections"
},

    {
  prompt: "What does this code print?\nInteger x = Integer.valueOf(12);\nSystem.out.print(x.intValue());",
  choices: [
    { text: "12", correct: true, choiceExplanation: " is correct because intValue returns the primitive int value stored in the Integer object." },
    { text: "0", correct: false, choiceExplanation: " is incorrect because x stores 12." },
    { text: "Integer", correct: false, choiceExplanation: " is incorrect because the value is printed, not the class name." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this code print?\nDouble d = Double.valueOf(4.5);\nSystem.out.print(d.doubleValue());",
  choices: [
    { text: "4", correct: false, choiceExplanation: " is incorrect because doubleValue returns a double." },
    { text: "4.5", correct: true, choiceExplanation: " is correct because the Double object stores 4.5." },
    { text: "0.0", correct: false, choiceExplanation: " is incorrect because d was initialized to 4.5." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "Which ArrayList declaration correctly stores Integer objects?",
  choices: [
    { text: "ArrayList<int> nums = new ArrayList<int>();", correct: false, choiceExplanation: " is incorrect because ArrayLists cannot use primitive types." },
    { text: "ArrayList<Integer> nums = new ArrayList<Integer>();", correct: true, choiceExplanation: " is correct because ArrayLists store objects such as Integer." },
    { text: "int[] nums = new ArrayList<Integer>();", correct: false, choiceExplanation: " is incorrect because an array variable cannot store an ArrayList." },
    { text: "ArrayList nums<Integer> = new ArrayList();", correct: false, choiceExplanation: " is incorrect because the generic syntax is invalid." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this code print?\nArrayList<Integer> nums = new ArrayList<Integer>();\nnums.add(2);\nnums.add(4);\nnums.add(6);\nint total = 0;\nfor (int i = 0; i < nums.size(); i++) {\n  total += nums.get(i);\n}\nSystem.out.print(total);",
  choices: [
    { text: "6", correct: false, choiceExplanation: " is incorrect because all three elements are added." },
    { text: "10", correct: false, choiceExplanation: " is incorrect because 2 + 4 + 6 is not 10." },
    { text: "12", correct: true, choiceExplanation: " is correct because the loop adds 2, 4, and 6." },
    { text: "246", correct: false, choiceExplanation: " is incorrect because Integer values are added numerically." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this code print?\nint[] nums = {5, 1, 4};\nint min = nums[0];\nfor (int i = 1; i < nums.length; i++) {\n  if (nums[i] < min) {\n    min = nums[i];\n  }\n}\nSystem.out.print(min);",
  choices: [
    { text: "1", correct: true, choiceExplanation: " is correct because the algorithm finds the smallest value." },
    { text: "4", correct: false, choiceExplanation: " is incorrect because 1 is smaller than 4." },
    { text: "5", correct: false, choiceExplanation: " is incorrect because min changes after comparing values." },
    { text: "10", correct: false, choiceExplanation: " is incorrect because the algorithm does not sum values." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this code print?\nint[] nums = {3, 6, 9};\nboolean found = false;\nfor (int i = 0; i < nums.length; i++) {\n  if (nums[i] == 6) {\n    found = true;\n  }\n}\nSystem.out.print(found);",
  choices: [
    { text: "true", correct: true, choiceExplanation: " is correct because the value 6 appears in the array." },
    { text: "false", correct: false, choiceExplanation: " is incorrect because found is changed when 6 is reached." },
    { text: "6", correct: false, choiceExplanation: " is incorrect because found is a boolean." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this recursive method need to avoid infinite recursion?\npublic static void repeat() {\n  repeat();\n}",
  choices: [
    { text: "A base case", correct: true, choiceExplanation: " is correct because recursion must eventually stop calling itself." },
    { text: "An ArrayList", correct: false, choiceExplanation: " is incorrect because collections do not automatically stop recursion." },
    { text: "A constructor", correct: false, choiceExplanation: " is incorrect because constructors are unrelated to recursive stopping." },
    { text: "A 2D array", correct: false, choiceExplanation: " is incorrect because 2D arrays are unrelated to stopping recursion." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this code print?\npublic static int countDown(int n) {\n  if (n == 0) {\n    return 0;\n  }\n  return 1 + countDown(n - 1);\n}\n\nSystem.out.print(countDown(3));",
  choices: [
    { text: "0", correct: false, choiceExplanation: " is incorrect because 1 is added for each recursive call before reaching 0." },
    { text: "3", correct: true, choiceExplanation: " is correct because countDown(3) returns 1 + 1 + 1 + 0." },
    { text: "4", correct: false, choiceExplanation: " is incorrect because the base case returns 0." },
    { text: "Infinite recursion", correct: false, choiceExplanation: " is incorrect because n eventually reaches 0." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "Which statement about ethical data use is best?",
  choices: [
    { text: "Any online data can be copied freely if it is public", correct: false, choiceExplanation: " is incorrect because public access does not always mean legal or ethical reuse." },
    { text: "Data should be collected and used with permission, privacy, and legal limits in mind", correct: true, choiceExplanation: " is correct because ethical data use considers consent, privacy, and legality." },
    { text: "Private data is fine to use if it improves an algorithm", correct: false, choiceExplanation: " is incorrect because usefulness does not override privacy." },
    { text: "Data source reliability does not matter", correct: false, choiceExplanation: " is incorrect because reliable sources are important." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "Which data source would usually be most appropriate for a school project?",
  choices: [
    { text: "A public government data portal with clear usage terms", correct: true, choiceExplanation: " is correct because it is more likely to be legal, reliable, and reusable." },
    { text: "A private account’s hidden messages", correct: false, choiceExplanation: " is incorrect because private data should not be used without consent." },
    { text: "Random copied data with no source", correct: false, choiceExplanation: " is incorrect because it lacks reliability and usage permission." },
    { text: "A leaked database", correct: false, choiceExplanation: " is incorrect because leaked data raises serious legal and ethical problems." }
  ],
  category: "Unit 4: Data Collections"
},

   {
  prompt: "What does this code print?\nint[] arr = {1, 2, 3, 4};\nfor (int i = arr.length - 1; i >= 0; i--) {\n  System.out.print(arr[i] + \" \");\n}",
  choices: [
    { text: "1 2 3 4", correct: false, choiceExplanation: " is incorrect because the loop iterates backwards." },
    { text: "4 3 2 1", correct: true, choiceExplanation: " is correct because the loop starts at the last index and decrements." },
    { text: "1 3 2 4", correct: false, choiceExplanation: " is incorrect because no rearranging occurs." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because the loop bounds are valid." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this code print?\nArrayList<Integer> nums = new ArrayList<Integer>();\nnums.add(10);\nnums.add(20);\nnums.add(30);\nnums.remove(0);\nSystem.out.print(nums.get(0));",
  choices: [
    { text: "10", correct: false, choiceExplanation: " is incorrect because index 0 was removed." },
    { text: "20", correct: true, choiceExplanation: " is correct because after removing index 0, 20 shifts to index 0." },
    { text: "30", correct: false, choiceExplanation: " is incorrect because 30 is now at index 1." },
    { text: "Error", correct: false, choiceExplanation: " is incorrect because index 0 still exists." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "Which loop structure is required to sum all elements in a 2D array?",
  choices: [
    { text: "Single for loop", correct: false, choiceExplanation: " is incorrect because it cannot access both dimensions." },
    { text: "Nested for loops", correct: true, choiceExplanation: " is correct because one loop handles rows and another handles columns." },
    { text: "Only while loop", correct: false, choiceExplanation: " is incorrect because it does not inherently handle both dimensions." },
    { text: "If statement", correct: false, choiceExplanation: " is incorrect because it does not iterate." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What is the result of this code?\nint[][] grid = {{2,4},{6,8}};\nint sum = 0;\nfor (int i = 0; i < grid.length; i++) {\n  for (int j = 0; j < grid[i].length; j++) {\n    sum += grid[i][j];\n  }\n}\nSystem.out.print(sum);",
  choices: [
    { text: "10", correct: false, choiceExplanation: " is incorrect because not all elements are included." },
    { text: "12", correct: false, choiceExplanation: " is incorrect because only part of the array is summed." },
    { text: "20", correct: true, choiceExplanation: " is correct because all elements (2+4+6+8) are summed." },
    { text: "16", correct: false, choiceExplanation: " is incorrect because the values add to 20." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this code print?\nint[] nums = {7, 2, 9};\nint max = nums[0];\nfor (int i = 1; i < nums.length; i++) {\n  if (nums[i] > max) {\n    max = nums[i];\n  }\n}\nSystem.out.print(max);",
  choices: [
    { text: "2", correct: false, choiceExplanation: " is incorrect because 9 is larger." },
    { text: "7", correct: false, choiceExplanation: " is incorrect because max is updated." },
    { text: "9", correct: true, choiceExplanation: " is correct because the loop finds the largest value." },
    { text: "18", correct: false, choiceExplanation: " is incorrect because values are not summed." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What is the purpose of binary search?",
  choices: [
    { text: "To sort data", correct: false, choiceExplanation: " is incorrect because binary search finds elements." },
    { text: "To search a sorted list efficiently", correct: true, choiceExplanation: " is correct because it reduces the search space by half each step." },
    { text: "To reverse an array", correct: false, choiceExplanation: " is incorrect because it does not modify order." },
    { text: "To add elements", correct: false, choiceExplanation: " is incorrect because it only searches." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What happens in each step of binary search?",
  choices: [
    { text: "The list doubles in size", correct: false, choiceExplanation: " is incorrect because the list is not expanded." },
    { text: "The search space is cut in half", correct: true, choiceExplanation: " is correct because half the data is discarded each step." },
    { text: "All elements are checked", correct: false, choiceExplanation: " is incorrect because binary search avoids checking all elements." },
    { text: "Elements are swapped", correct: false, choiceExplanation: " is incorrect because swapping is part of sorting." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "What does this recursive method return?\npublic static int sum(int n) {\n  if (n == 1) return 1;\n  return n + sum(n - 1);\n}\n\nsum(4)",
  choices: [
    { text: "4", correct: false, choiceExplanation: " is incorrect because it adds all values down to 1." },
    { text: "6", correct: false, choiceExplanation: " is incorrect because it sums more than three values." },
    { text: "10", correct: true, choiceExplanation: " is correct because 4 + 3 + 2 + 1 = 10." },
    { text: "16", correct: false, choiceExplanation: " is incorrect because values are added, not multiplied." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "Which of the following best describes an ArrayList?",
  choices: [
    { text: "Fixed-size data structure", correct: false, choiceExplanation: " is incorrect because ArrayLists resize dynamically." },
    { text: "Resizable collection of objects", correct: true, choiceExplanation: " is correct because ArrayLists grow and shrink as needed." },
    { text: "Primitive data type", correct: false, choiceExplanation: " is incorrect because it is a class." },
    { text: "2D array", correct: false, choiceExplanation: " is incorrect because it is a 1D structure." }
  ],
  category: "Unit 4: Data Collections"
},

{
  prompt: "Which of the following is an example of recursion?",
  choices: [
    { text: "A method calling itself", correct: true, choiceExplanation: " is correct because recursion involves self-calling methods." },
    { text: "A loop repeating code", correct: false, choiceExplanation: " is incorrect because loops are iterative, not recursive." },
    { text: "An array storing values", correct: false, choiceExplanation: " is incorrect because arrays store data, not behavior." },
    { text: "An if statement checking conditions", correct: false, choiceExplanation: " is incorrect because conditionals do not call themselves." }
  ],
  category: "Unit 4: Data Collections"
} 
    
  ],

  passages: [

{
  title: "Iterating Through an Array",
  image: "",
  imageAlt: "",
  text: `
int[] scores = {85, 90, 78, 92};

int total = 0;
for (int i = 0; i < scores.length; i++) {
  total += scores[i];
}

System.out.print(total);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "85", correct: false, choiceExplanation: " is incorrect because all values are summed." },
        { text: "345", correct: true, choiceExplanation: " is correct because 85 + 90 + 78 + 92 = 345." },
        { text: "92", correct: false, choiceExplanation: " is incorrect because that is just the last value." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the loop is valid." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "What is the purpose of the loop?",
      choices: [
        { text: "Find the largest value", correct: false, choiceExplanation: " is incorrect because no comparisons are made." },
        { text: "Sum all elements in the array", correct: true, choiceExplanation: " is correct because each element is added to total." },
        { text: "Sort the array", correct: false, choiceExplanation: " is incorrect because no swapping occurs." },
        { text: "Search for a value", correct: false, choiceExplanation: " is incorrect because no condition is checked." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Searching an Array",
  image: "",
  imageAlt: "",
  text: `
int[] nums = {3, 7, 11, 15};
boolean found = false;

for (int i = 0; i < nums.length; i++) {
  if (nums[i] == 11) {
    found = true;
  }
}

System.out.print(found);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "true", correct: true, choiceExplanation: " is correct because 11 is in the array." },
        { text: "false", correct: false, choiceExplanation: " is incorrect because the value is found." },
        { text: "11", correct: false, choiceExplanation: " is incorrect because a boolean is printed." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the loop is valid." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "What type of algorithm is this?",
      choices: [
        { text: "Binary search", correct: false, choiceExplanation: " is incorrect because the array is not split in half." },
        { text: "Linear search", correct: true, choiceExplanation: " is correct because each element is checked sequentially." },
        { text: "Merge sort", correct: false, choiceExplanation: " is incorrect because no sorting occurs." },
        { text: "Recursion", correct: false, choiceExplanation: " is incorrect because no self-calling method exists." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Using an ArrayList",
  image: "",
  imageAlt: "",
  text: `
ArrayList<Integer> list = new ArrayList<Integer>();
list.add(5);
list.add(10);
list.add(15);

int sum = 0;
for (int i = 0; i < list.size(); i++) {
  sum += list.get(i);
}

System.out.print(sum);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "15", correct: false, choiceExplanation: " is incorrect because all values are added." },
        { text: "30", correct: true, choiceExplanation: " is correct because 5 + 10 + 15 = 30." },
        { text: "5", correct: false, choiceExplanation: " is incorrect because it sums all elements." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because syntax is valid." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Why is list.size() used instead of length?",
      choices: [
        { text: "ArrayLists use size() instead of length", correct: true, choiceExplanation: " is correct because ArrayLists are objects with methods." },
        { text: "length only works on Strings", correct: false, choiceExplanation: " is incorrect because arrays also use length." },
        { text: "size() is faster", correct: false, choiceExplanation: " is incorrect because both are constant time." },
        { text: "length does not exist in Java", correct: false, choiceExplanation: " is incorrect because arrays use length." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "2D Array Traversal",
  image: "",
  imageAlt: "",
  text: `
int[][] grid = {
  {1, 2},
  {3, 4}
};

int sum = 0;

for (int i = 0; i < grid.length; i++) {
  for (int j = 0; j < grid[i].length; j++) {
    sum += grid[i][j];
  }
}

System.out.print(sum);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "4", correct: false, choiceExplanation: " is incorrect because all values are summed." },
        { text: "6", correct: false, choiceExplanation: " is incorrect because only part of the array is included." },
        { text: "10", correct: true, choiceExplanation: " is correct because 1 + 2 + 3 + 4 = 10." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because nested loops are valid." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Why are two loops needed?",
      choices: [
        { text: "To access rows and columns", correct: true, choiceExplanation: " is correct because a 2D array has two dimensions." },
        { text: "To speed up execution", correct: false, choiceExplanation: " is incorrect because loops do not inherently speed up execution." },
        { text: "To prevent errors", correct: false, choiceExplanation: " is incorrect because one loop cannot access all elements." },
        { text: "To sort the array", correct: false, choiceExplanation: " is incorrect because no sorting occurs." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Binary Search Example",
  image: "",
  imageAlt: "",
  text: `
int[] nums = {2, 4, 6, 8, 10};

int target = 6;
int low = 0;
int high = nums.length - 1;
boolean found = false;

while (low <= high) {
  int mid = (low + high) / 2;

  if (nums[mid] == target) {
    found = true;
    break;
  } else if (nums[mid] < target) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

System.out.print(found);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "true", correct: true, choiceExplanation: " is correct because 6 is in the array." },
        { text: "false", correct: false, choiceExplanation: " is incorrect because the value is found." },
        { text: "6", correct: false, choiceExplanation: " is incorrect because a boolean is printed." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "What must be true for this algorithm to work correctly?",
      choices: [
        { text: "Array must be sorted", correct: true, choiceExplanation: " is correct because binary search requires order." },
        { text: "Array must contain duplicates", correct: false, choiceExplanation: " is incorrect because duplicates are not required." },
        { text: "Array must be reversed", correct: false, choiceExplanation: " is incorrect because order just needs to be consistent." },
        { text: "Array must be 2D", correct: false, choiceExplanation: " is incorrect because binary search works on 1D arrays." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

    {
  title: "Finding the Maximum in an Array",
  image: "",
  imageAlt: "",
  text: `
int[] values = {12, 7, 25, 19};

int max = values[0];

for (int i = 1; i < values.length; i++) {
  if (values[i] > max) {
    max = values[i];
  }
}

System.out.print(max);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "12", correct: false, choiceExplanation: " is incorrect because larger values exist." },
        { text: "25", correct: true, choiceExplanation: " is correct because it is the largest value." },
        { text: "19", correct: false, choiceExplanation: " is incorrect because it is not the maximum." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Why does the loop start at index 1?",
      choices: [
        { text: "To skip the smallest number", correct: false, choiceExplanation: " is incorrect because values are not sorted." },
        { text: "Because max is initialized with index 0", correct: true, choiceExplanation: " is correct because the first value is already used." },
        { text: "To avoid an error", correct: false, choiceExplanation: " is incorrect because starting at 0 would still work." },
        { text: "Because arrays start at index 1", correct: false, choiceExplanation: " is incorrect because arrays start at 0." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Counting Matches in an ArrayList",
  image: "",
  imageAlt: "",
  text: `
ArrayList<String> names = new ArrayList<String>();
names.add("Alex");
names.add("Jordan");
names.add("Alex");
names.add("Taylor");

int count = 0;

for (int i = 0; i < names.size(); i++) {
  if (names.get(i).equals("Alex")) {
    count++;
  }
}

System.out.print(count);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "1", correct: false, choiceExplanation: " is incorrect because Alex appears twice." },
        { text: "2", correct: true, choiceExplanation: " is correct because Alex appears twice." },
        { text: "3", correct: false, choiceExplanation: " is incorrect because it appears only twice." },
        { text: "0", correct: false, choiceExplanation: " is incorrect because matches exist." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Why is .equals() used instead of ==?",
      choices: [
        { text: "== does not work with loops", correct: false, choiceExplanation: " is incorrect because it does." },
        { text: "equals compares object content", correct: true, choiceExplanation: " is correct because Strings require .equals()." },
        { text: "equals is faster", correct: false, choiceExplanation: " is incorrect because speed is not the reason." },
        { text: "== compares numbers only", correct: false, choiceExplanation: " is incorrect because it compares references." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Enhanced For Loop",
  image: "",
  imageAlt: "",
  text: `
int[] nums = {2, 4, 6, 8};

int sum = 0;

for (int n : nums) {
  sum += n;
}

System.out.print(sum);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "8", correct: false, choiceExplanation: " is incorrect because all elements are added." },
        { text: "20", correct: true, choiceExplanation: " is correct because 2+4+6+8=20." },
        { text: "6", correct: false, choiceExplanation: " is incorrect because that is only one element." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because syntax is valid." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "What is a key limitation of enhanced for loops?",
      choices: [
        { text: "Cannot access index", correct: true, choiceExplanation: " is correct because only values are accessed." },
        { text: "Cannot loop arrays", correct: false, choiceExplanation: " is incorrect because it works on arrays." },
        { text: "Cannot modify values", correct: false, choiceExplanation: " is incorrect because modification depends on type." },
        { text: "Runs slower", correct: false, choiceExplanation: " is incorrect because performance is similar." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Nested Loop Counting",
  image: "",
  imageAlt: "",
  text: `
int[][] grid = {
  {1, 2, 3},
  {4, 5, 6}
};

int count = 0;

for (int i = 0; i < grid.length; i++) {
  for (int j = 0; j < grid[i].length; j++) {
    if (grid[i][j] % 2 == 0) {
      count++;
    }
  }
}

System.out.print(count);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "2", correct: false, choiceExplanation: " is incorrect because there are more even numbers." },
        { text: "3", correct: true, choiceExplanation: " is correct because 2, 4, 6 are even." },
        { text: "4", correct: false, choiceExplanation: " is incorrect because only three are even." },
        { text: "6", correct: false, choiceExplanation: " is incorrect because not all numbers are even." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "What does grid[i][j] represent?",
      choices: [
        { text: "Row only", correct: false, choiceExplanation: " is incorrect because both row and column are used." },
        { text: "Column only", correct: false, choiceExplanation: " is incorrect because both indices matter." },
        { text: "An element at row i and column j", correct: true, choiceExplanation: " is correct because 2D arrays use two indices." },
        { text: "Entire array", correct: false, choiceExplanation: " is incorrect because it accesses a single value." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Removing from ArrayList",
  image: "",
  imageAlt: "",
  text: `
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(10);
nums.add(20);
nums.add(30);

nums.remove(1);

System.out.print(nums);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "[10, 20, 30]", correct: false, choiceExplanation: " is incorrect because one element is removed." },
        { text: "[10, 30]", correct: true, choiceExplanation: " is correct because index 1 (20) is removed." },
        { text: "[20, 30]", correct: false, choiceExplanation: " is incorrect because 10 remains." },
        { text: "[10, 20]", correct: false, choiceExplanation: " is incorrect because 30 is removed incorrectly." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "What does remove(1) do?",
      choices: [
        { text: "Removes value 1", correct: false, choiceExplanation: " is incorrect because it removes by index." },
        { text: "Removes element at index 1", correct: true, choiceExplanation: " is correct because ArrayLists use index removal." },
        { text: "Removes last element", correct: false, choiceExplanation: " is incorrect because index is specified." },
        { text: "Clears the list", correct: false, choiceExplanation: " is incorrect because only one element is removed." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

   {
  title: "Objects Stored in an Array",
  image: "",
  imageAlt: "",
  text: `
class Book {
  private String title;
  private int pages;

  public Book(String t, int p) {
    title = t;
    pages = p;
  }

  public int getPages() {
    return pages;
  }
}

Book[] shelf = {
  new Book("A", 120),
  new Book("B", 200),
  new Book("C", 150)
};

int total = 0;
for (int i = 0; i < shelf.length; i++) {
  total += shelf[i].getPages();
}

System.out.print(total);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "120", correct: false, choiceExplanation: " is incorrect because all Book objects are processed." },
        { text: "350", correct: false, choiceExplanation: " is incorrect because it leaves out one book's pages." },
        { text: "470", correct: true, choiceExplanation: " is correct because 120 + 200 + 150 = 470." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because objects can be stored in arrays." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "What does shelf[i].getPages() do?",
      choices: [
        { text: "Accesses a Book object and calls its getPages method", correct: true, choiceExplanation: " is correct because shelf[i] is a Book object." },
        { text: "Accesses the array length", correct: false, choiceExplanation: " is incorrect because getPages returns pages." },
        { text: "Creates a new Book object", correct: false, choiceExplanation: " is incorrect because no constructor is called there." },
        { text: "Sorts the shelf array", correct: false, choiceExplanation: " is incorrect because no sorting occurs." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Finding an Object in an ArrayList",
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

ArrayList<Student> roster = new ArrayList<Student>();
roster.add(new Student("Ava"));
roster.add(new Student("Noah"));
roster.add(new Student("Mia"));

boolean found = false;

for (int i = 0; i < roster.size(); i++) {
  if (roster.get(i).getName().equals("Noah")) {
    found = true;
  }
}

System.out.print(found);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "true", correct: true, choiceExplanation: " is correct because Noah appears in the roster." },
        { text: "false", correct: false, choiceExplanation: " is incorrect because the loop finds Noah." },
        { text: "Noah", correct: false, choiceExplanation: " is incorrect because found is a boolean." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because the code is valid." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Why is getName() needed in the condition?",
      choices: [
        { text: "Because name is private", correct: true, choiceExplanation: " is correct because the method provides access to the private attribute." },
        { text: "Because ArrayLists cannot store objects", correct: false, choiceExplanation: " is incorrect because ArrayLists can store objects." },
        { text: "Because equals only works on arrays", correct: false, choiceExplanation: " is incorrect because equals compares String content." },
        { text: "Because found is private", correct: false, choiceExplanation: " is incorrect because found is a local variable." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Selection Sort Step",
  image: "",
  imageAlt: "",
  text: `
int[] nums = {5, 2, 8, 1};

int minIndex = 0;
for (int i = 1; i < nums.length; i++) {
  if (nums[i] < nums[minIndex]) {
    minIndex = i;
  }
}

int temp = nums[0];
nums[0] = nums[minIndex];
nums[minIndex] = temp;

System.out.print(nums[0]);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "1", correct: true, choiceExplanation: " is correct because the smallest value is swapped into index 0." },
        { text: "2", correct: false, choiceExplanation: " is incorrect because 1 is smaller than 2." },
        { text: "5", correct: false, choiceExplanation: " is incorrect because 5 is swapped out of index 0." },
        { text: "8", correct: false, choiceExplanation: " is incorrect because 8 is not the minimum." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Which standard sorting idea is shown in this code?",
      choices: [
        { text: "Selection sort", correct: true, choiceExplanation: " is correct because it finds the minimum and swaps it into position." },
        { text: "Binary search", correct: false, choiceExplanation: " is incorrect because the code searches for a minimum, not a target." },
        { text: "Merge sort", correct: false, choiceExplanation: " is incorrect because the array is not divided and merged." },
        { text: "Linear search only", correct: false, choiceExplanation: " is incorrect because the search is part of a sorting step." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Recursive Factorial",
  image: "",
  imageAlt: "",
  text: `
public static int factorial(int n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

System.out.print(factorial(4));
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "4", correct: false, choiceExplanation: " is incorrect because factorial multiplies down to 1." },
        { text: "10", correct: false, choiceExplanation: " is incorrect because that would be a sum." },
        { text: "24", correct: true, choiceExplanation: " is correct because 4 * 3 * 2 * 1 = 24." },
        { text: "Infinite recursion", correct: false, choiceExplanation: " is incorrect because n eventually reaches 1." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "What is the base case?",
      choices: [
        { text: "n == 1", correct: true, choiceExplanation: " is correct because the method stops recursion when n equals 1." },
        { text: "n * factorial(n - 1)", correct: false, choiceExplanation: " is incorrect because that is the recursive case." },
        { text: "factorial(4)", correct: false, choiceExplanation: " is incorrect because that is the original method call." },
        { text: "return n", correct: false, choiceExplanation: " is incorrect because the code does not use return n as the base case." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Ethical Data Collection",
  image: "",
  imageAlt: "",
  text: `
A student wants to build a study app that recommends practice questions based on user performance. The student stores quiz scores and weak areas. Before collecting names, emails, or detailed student information, the student reviews privacy rules and only collects the minimum data needed for the app to work.
  `,
  questions: [
    {
      prompt: "Which data practice is best shown by the passage?",
      choices: [
        { text: "Collecting as much private data as possible", correct: false, choiceExplanation: " is incorrect because the passage says to collect only what is needed." },
        { text: "Using data with privacy and legal limits in mind", correct: true, choiceExplanation: " is correct because the student reviews privacy rules and limits collection." },
        { text: "Avoiding all data sets", correct: false, choiceExplanation: " is incorrect because the app still uses performance data." },
        { text: "Copying user information without consent", correct: false, choiceExplanation: " is incorrect because the passage emphasizes responsible collection." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Why might collecting only weak areas and scores be better than collecting personal details?",
      choices: [
        { text: "It reduces privacy risks while still supporting the app’s purpose", correct: true, choiceExplanation: " is correct because the app can function with less sensitive data." },
        { text: "It makes arrays illegal", correct: false, choiceExplanation: " is incorrect because arrays are not illegal." },
        { text: "It prevents iteration", correct: false, choiceExplanation: " is incorrect because iteration can still be used on the data." },
        { text: "It makes binary search impossible", correct: false, choiceExplanation: " is incorrect because data privacy is unrelated to binary search mechanics." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

    {
  title: "Binary Search Example",
  image: "",
  imageAlt: "",
  text: `
int[] nums = {2, 4, 6, 8, 10, 12};

int target = 8;
int left = 0;
int right = nums.length - 1;

while (left <= right) {
  int mid = (left + right) / 2;

  if (nums[mid] == target) {
    System.out.print(mid);
    break;
  } else if (nums[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "2", correct: false, choiceExplanation: " is incorrect because index 2 contains 6." },
        { text: "3", correct: true, choiceExplanation: " is correct because nums[3] = 8." },
        { text: "4", correct: false, choiceExplanation: " is incorrect because index 4 contains 10." },
        { text: "0", correct: false, choiceExplanation: " is incorrect because index 0 contains 2." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Why must the array be sorted for binary search?",
      choices: [
        { text: "So mid is always the largest value", correct: false, choiceExplanation: " is incorrect because mid is just the middle index." },
        { text: "Because binary search relies on order to eliminate half the data", correct: true, choiceExplanation: " is correct because comparisons depend on sorted order." },
        { text: "So loops work correctly", correct: false, choiceExplanation: " is incorrect because loops work regardless of sorting." },
        { text: "To prevent errors", correct: false, choiceExplanation: " is incorrect because unsorted arrays don’t cause syntax errors." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Merge Sort Concept",
  image: "",
  imageAlt: "",
  text: `
Merge sort works by splitting an array into smaller parts, sorting each part, and then merging them back together in order.

Example:
[8, 3, 5, 2] → [8, 3] + [5, 2] → [3, 8] + [2, 5] → [2, 3, 5, 8]
  `,
  questions: [
    {
      prompt: "What is the final sorted array?",
      choices: [
        { text: "[8, 3, 5, 2]", correct: false, choiceExplanation: " is incorrect because this is the original array." },
        { text: "[2, 3, 5, 8]", correct: true, choiceExplanation: " is correct because merge sort produces a sorted array." },
        { text: "[3, 8, 2, 5]", correct: false, choiceExplanation: " is incorrect because the halves are not merged fully." },
        { text: "[5, 2, 8, 3]", correct: false, choiceExplanation: " is incorrect because it is not sorted." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "What is the key idea behind merge sort?",
      choices: [
        { text: "Divide and conquer", correct: true, choiceExplanation: " is correct because the array is split and merged." },
        { text: "Linear scanning only", correct: false, choiceExplanation: " is incorrect because recursion and merging are used." },
        { text: "Swapping adjacent elements", correct: false, choiceExplanation: " is incorrect because that describes bubble sort." },
        { text: "Random ordering", correct: false, choiceExplanation: " is incorrect because sorting is systematic." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "2D Array Traversal",
  image: "",
  imageAlt: "",
  text: `
int[][] matrix = {
  {1, 2},
  {3, 4},
  {5, 6}
};

int total = 0;

for (int i = 0; i < matrix.length; i++) {
  for (int j = 0; j < matrix[i].length; j++) {
    total += matrix[i][j];
  }
}

System.out.print(total);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "6", correct: false, choiceExplanation: " is incorrect because only the first row sums to 3." },
        { text: "10", correct: false, choiceExplanation: " is incorrect because it leaves out values." },
        { text: "21", correct: true, choiceExplanation: " is correct because 1+2+3+4+5+6 = 21." },
        { text: "15", correct: false, choiceExplanation: " is incorrect because not all values are included." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Why are nested loops required?",
      choices: [
        { text: "To access rows and columns", correct: true, choiceExplanation: " is correct because 2D arrays require two indices." },
        { text: "To speed up the program", correct: false, choiceExplanation: " is incorrect because nesting does not necessarily speed it up." },
        { text: "Because arrays cannot be accessed otherwise", correct: false, choiceExplanation: " is incorrect because single arrays don’t need nesting." },
        { text: "To avoid errors", correct: false, choiceExplanation: " is incorrect because nesting is for structure, not errors." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Using Wrapper Classes",
  image: "",
  imageAlt: "",
  text: `
Integer a = 10;
Integer b = 5;

double result = a.doubleValue() / b.doubleValue();

System.out.print(result);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "2", correct: false, choiceExplanation: " is incorrect because division is not integer division here." },
        { text: "2.0", correct: true, choiceExplanation: " is correct because both values are converted to doubles." },
        { text: "0", correct: false, choiceExplanation: " is incorrect because the result is not truncated." },
        { text: "Error", correct: false, choiceExplanation: " is incorrect because wrapper methods are valid." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "What is the purpose of doubleValue()?",
      choices: [
        { text: "To convert Integer to double", correct: true, choiceExplanation: " is correct because it returns a double value." },
        { text: "To store values", correct: false, choiceExplanation: " is incorrect because it converts, not stores." },
        { text: "To sort numbers", correct: false, choiceExplanation: " is incorrect because no sorting occurs." },
        { text: "To create arrays", correct: false, choiceExplanation: " is incorrect because arrays are unrelated." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Runtime Comparison",
  image: "",
  imageAlt: "",
  text: `
Algorithm A: Checks each element one by one to find a value.
Algorithm B: Uses binary search on a sorted array.

Both are used to find a target value.
  `,
  questions: [
    {
      prompt: "Which algorithm is faster for large sorted arrays?",
      choices: [
        { text: "Algorithm A", correct: false, choiceExplanation: " is incorrect because it checks every element." },
        { text: "Algorithm B", correct: true, choiceExplanation: " is correct because binary search is more efficient." },
        { text: "Both are equal", correct: false, choiceExplanation: " is incorrect because their runtimes differ." },
        { text: "Neither works", correct: false, choiceExplanation: " is incorrect because both work but differ in speed." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Why is binary search faster?",
      choices: [
        { text: "It eliminates half the data each step", correct: true, choiceExplanation: " is correct because it reduces the search space quickly." },
        { text: "It checks every value", correct: false, choiceExplanation: " is incorrect because that describes linear search." },
        { text: "It uses loops only", correct: false, choiceExplanation: " is incorrect because both can use loops." },
        { text: "It works on unsorted arrays", correct: false, choiceExplanation: " is incorrect because sorting is required." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

   {
  title: "Recursive Sum",
  image: "",
  imageAlt: "",
  text: `
public static int sumToN(int n) {
  if (n == 1) {
    return 1;
  }

  return n + sumToN(n - 1);
}

System.out.print(sumToN(5));
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "5", correct: false, choiceExplanation: " is incorrect because the method adds all values from 5 down to 1." },
        { text: "10", correct: false, choiceExplanation: " is incorrect because it leaves out some values." },
        { text: "15", correct: true, choiceExplanation: " is correct because 5 + 4 + 3 + 2 + 1 = 15." },
        { text: "Infinite recursion", correct: false, choiceExplanation: " is incorrect because the base case stops the recursion." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "What is the base case?",
      choices: [
        { text: "n == 1", correct: true, choiceExplanation: " is correct because recursion stops when n equals 1." },
        { text: "return n + sumToN(n - 1)", correct: false, choiceExplanation: " is incorrect because this is the recursive call." },
        { text: "System.out.print(sumToN(5))", correct: false, choiceExplanation: " is incorrect because this starts the method call." },
        { text: "n - 1", correct: false, choiceExplanation: " is incorrect because it moves toward the base case but is not the base case itself." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "ArrayList Filtering",
  image: "",
  imageAlt: "",
  text: `
ArrayList<Integer> nums = new ArrayList<Integer>();
nums.add(4);
nums.add(7);
nums.add(10);
nums.add(13);

int count = 0;

for (int i = 0; i < nums.size(); i++) {
  if (nums.get(i) > 6) {
    count++;
  }
}

System.out.print(count);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "1", correct: false, choiceExplanation: " is incorrect because more than one value is greater than 6." },
        { text: "2", correct: false, choiceExplanation: " is incorrect because 7, 10, and 13 are greater than 6." },
        { text: "3", correct: true, choiceExplanation: " is correct because three values are greater than 6." },
        { text: "4", correct: false, choiceExplanation: " is incorrect because 4 is not greater than 6." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "What kind of algorithm is being used?",
      choices: [
        { text: "Counting with a condition", correct: true, choiceExplanation: " is correct because it counts only values meeting a rule." },
        { text: "Binary search", correct: false, choiceExplanation: " is incorrect because no halving occurs." },
        { text: "Merge sort", correct: false, choiceExplanation: " is incorrect because no sorting occurs." },
        { text: "Recursive traversal", correct: false, choiceExplanation: " is incorrect because no method calls itself." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Sorting Data Before Searching",
  image: "",
  imageAlt: "",
  text: `
A program stores thousands of student ID numbers in an array. The programmer wants to quickly determine whether a specific ID exists in the data set. Before using binary search, the programmer sorts the array.
  `,
  questions: [
    {
      prompt: "Why should the array be sorted before binary search?",
      choices: [
        { text: "Binary search depends on ordered data", correct: true, choiceExplanation: " is correct because binary search uses comparisons to discard half the data." },
        { text: "Binary search changes unsorted data automatically", correct: false, choiceExplanation: " is incorrect because binary search does not sort the data." },
        { text: "Unsorted arrays cannot store integers", correct: false, choiceExplanation: " is incorrect because arrays can store integers in any order." },
        { text: "Sorting makes the array 2D", correct: false, choiceExplanation: " is incorrect because sorting does not change the array dimension." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Which combination is most efficient for many repeated searches?",
      choices: [
        { text: "Sort once, then use binary search repeatedly", correct: true, choiceExplanation: " is correct because the cost of sorting can pay off when many fast searches are needed." },
        { text: "Never sort and always use random guessing", correct: false, choiceExplanation: " is incorrect because this is unreliable." },
        { text: "Use binary search on unsorted data", correct: false, choiceExplanation: " is incorrect because binary search requires sorted data." },
        { text: "Convert every ID to a 2D array", correct: false, choiceExplanation: " is incorrect because 2D arrays are not required for searching." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Large Data Set in a 2D Array",
  image: "",
  imageAlt: "",
  text: `
int[][] sales = {
  {10, 20, 30},
  {15, 25, 35},
  {12, 22, 32}
};

int total = 0;

for (int row = 0; row < sales.length; row++) {
  for (int col = 0; col < sales[row].length; col++) {
    total += sales[row][col];
  }
}

System.out.print(total);
  `,
  questions: [
    {
      prompt: "What is printed?",
      choices: [
        { text: "90", correct: false, choiceExplanation: " is incorrect because that only represents part of the data." },
        { text: "201", correct: true, choiceExplanation: " is correct because all nine values are added." },
        { text: "171", correct: false, choiceExplanation: " is incorrect because it leaves out some values." },
        { text: "9", correct: false, choiceExplanation: " is incorrect because the code sums values, not counts them." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Why is a 2D array appropriate for this data?",
      choices: [
        { text: "It can represent rows and columns of related values", correct: true, choiceExplanation: " is correct because sales data can be organized by categories such as days and stores." },
        { text: "It automatically sorts the values", correct: false, choiceExplanation: " is incorrect because arrays do not sort themselves." },
        { text: "It prevents iteration", correct: false, choiceExplanation: " is incorrect because 2D arrays are commonly processed with iteration." },
        { text: "It removes the need for indexes", correct: false, choiceExplanation: " is incorrect because 2D arrays use row and column indexes." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
},

{
  title: "Responsible Use of Data Sets",
  image: "",
  imageAlt: "",
  text: `
A developer is building an app that analyzes public transportation delays. The developer uses an official city open-data portal that clearly states the data may be reused. The developer avoids collecting passenger names or private travel histories.
  `,
  questions: [
    {
      prompt: "Which practice is shown in the passage?",
      choices: [
        { text: "Using legally reusable public data", correct: true, choiceExplanation: " is correct because the source clearly allows reuse." },
        { text: "Collecting private passenger data", correct: false, choiceExplanation: " is incorrect because the developer avoids private data." },
        { text: "Using leaked data", correct: false, choiceExplanation: " is incorrect because the data comes from an official source." },
        { text: "Ignoring data permissions", correct: false, choiceExplanation: " is incorrect because the developer checks usage terms." }
      ],
      category: "Unit 4: Data Collections"
    },
    {
      prompt: "Why is avoiding private travel histories important?",
      choices: [
        { text: "It reduces privacy and ethical concerns", correct: true, choiceExplanation: " is correct because personal movement data can be sensitive." },
        { text: "It makes arrays impossible to use", correct: false, choiceExplanation: " is incorrect because privacy choices do not prevent arrays." },
        { text: "It guarantees binary search will work", correct: false, choiceExplanation: " is incorrect because binary search depends on sorted data." },
        { text: "It removes the need for algorithms", correct: false, choiceExplanation: " is incorrect because algorithms are still needed to analyze data." }
      ],
      category: "Unit 4: Data Collections"
    }
  ]
} 
    
  ]

});
