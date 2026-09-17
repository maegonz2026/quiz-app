const questions = [
  {
    id: "1",
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: "const",
    explanation: "const creates a variable binding that cannot be reassigned."
  },
  {
    id: "2",
    question: "Which symbol is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    answer: "===",
    explanation: "=== compares both value and type without type coercion."
  },
  {
    id: "3",
    question: "Which method adds an item to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
    explanation: "push() adds one or more elements to the end of an array."
  },
  {
    id: "4",
    question: "Which method removes the last item from an array?",
    options: ["shift()", "pop()", "slice()", "remove()"],
    answer: "pop()",
    explanation: "pop() removes and returns the last element of an array."
  },
  {
    id: "5",
    question: "Which method removes the first item from an array?",
    options: ["pop()", "shift()", "delete()", "remove()"],
    answer: "shift()",
    explanation: "shift() removes and returns the first element."
  },
  {
    id: "6",
    question: "Which method adds an item to the beginning of an array?",
    options: ["push()", "append()", "unshift()", "prepend()"],
    answer: "unshift()",
    explanation: "unshift() adds one or more elements to the beginning."
  },
  {
    id: "7",
    question: "Which data type represents true or false?",
    options: ["String", "Boolean", "Number", "Object"],
    answer: "Boolean",
    explanation: "Boolean values are either true or false."
  },
  {
    id: "8",
    question: "Which operator is used for logical AND?",
    options: ["||", "&&", "!", "&"],
    answer: "&&",
    explanation: "The && operator represents logical AND."
  },
  {
    id: "9",
    question: "Which operator is used for logical OR?",
    options: ["&&", "||", "!", "??"],
    answer: "||",
    explanation: "The || operator represents logical OR."
  },
  {
    id: "10",
    question: "Which keyword is used to define a function?",
    options: ["function", "def", "func", "method"],
    answer: "function",
    explanation: "The function keyword is used to declare a traditional function."
  },
  {
    id: "11",
    question: "What does typeof return?",
    options: [
      "The variable value",
      "The data type",
      "The variable name",
      "The memory address"
    ],
    answer: "The data type",
    explanation: "typeof returns a string describing the type of a value."
  },
  {
    id: "12",
    question: "Which value represents the absence of an assigned value?",
    options: ["undefined", "empty", "void", "none"],
    answer: "undefined",
    explanation: "A declared variable that has not been assigned a value is undefined."
  },
  {
    id: "13",
    question: "Which value represents an intentional empty value?",
    options: ["undefined", "null", "empty", "false"],
    answer: "null",
    explanation: "null is commonly used to represent an intentional absence of a value."
  },
  {
    id: "14",
    question: "Which method creates a new array by transforming every element?",
    options: ["filter()", "map()", "find()", "reduce()"],
    answer: "map()",
    explanation: "map() creates a new array containing the results of a callback."
  },
  {
    id: "15",
    question: "Which method returns only elements that pass a condition?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    answer: "filter()",
    explanation: "filter() creates a new array containing elements that satisfy a condition."
  },
  {
    id: "16",
    question: "Which method executes a function for each array element?",
    options: ["forEach()", "each()", "loop()", "iterate()"],
    answer: "forEach()",
    explanation: "forEach() executes a callback once for each array element."
  },
  {
    id: "17",
    question: "Which syntax creates an arrow function?",
    options: ["function => {}", "() => {}", "func() {}", "-> {}"],
    answer: "() => {}",
    explanation: "The arrow function syntax uses =>."
  },
  {
    id: "18",
    question: "Which keyword allows a function to access variables from its surrounding scope?",
    options: ["closure", "scope", "return", "this"],
    answer: "closure",
    explanation: "A closure allows a function to retain access to its lexical environment."
  },
  {
    id: "19",
    question: "Which statement stops a loop immediately?",
    options: ["stop", "break", "exit", "end"],
    answer: "break",
    explanation: "break immediately terminates the current loop."
  },
  {
    id: "20",
    question: "Which statement skips the current loop iteration?",
    options: ["skip", "continue", "next", "pass"],
    answer: "continue",
    explanation: "continue skips the rest of the current iteration."
  },
  {
    id: "21",
    question: "Which object stores key-value pairs?",
    options: ["Array", "Object", "String", "Boolean"],
    answer: "Object",
    explanation: "JavaScript objects commonly store data as key-value pairs."
  },
  {
    id: "22",
    question: "How do you access the name property of user?",
    options: [
      "user:name",
      "user.name",
      "user->name",
      "user/name"
    ],
    answer: "user.name",
    explanation: "Dot notation accesses an object's property."
  },
  {
    id: "23",
    question: "Which keyword refers to the current object context?",
    options: ["self", "current", "this", "object"],
    answer: "this",
    explanation: "this refers to a context-dependent object determined by how a function is called."
  },
  {
    id: "24",
    question: "Which method converts JSON text into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: "JSON.parse()",
    explanation: "JSON.parse() converts valid JSON text into a JavaScript value."
  },
  {
    id: "25",
    question: "Which method converts a JavaScript value into JSON text?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.text()"
    ],
    answer: "JSON.stringify()",
    explanation: "JSON.stringify() converts a JavaScript value into JSON text."
  },
  {
    id: "26",
    question: "Which keyword returns a value from a function?",
    options: ["send", "return", "output", "give"],
    answer: "return",
    explanation: "return ends a function and can provide a value to the caller."
  },
  {
    id: "27",
    question: "Which keyword is commonly used to handle asynchronous operations?",
    options: ["async", "wait", "later", "defer"],
    answer: "async",
    explanation: "async marks a function as asynchronous and allows await inside it."
  },
  {
    id: "28",
    question: "Which keyword pauses an async function until a Promise settles?",
    options: ["pause", "wait", "await", "hold"],
    answer: "await",
    explanation: "await pauses execution of an async function until the Promise settles."
  },
  {
    id: "29",
    question: "What does a Promise represent?",
    options: [
      "A future asynchronous result",
      "A CSS rule",
      "An array",
      "A loop"
    ],
    answer: "A future asynchronous result",
    explanation: "A Promise represents the eventual completion or failure of an asynchronous operation."
  },
  {
    id: "30",
    question: "Which method finds the first array element matching a condition?",
    options: ["find()", "search()", "first()", "match()"],
    answer: "find()",
    explanation: "find() returns the first element that satisfies the provided function."
  },
  {
    id: "31",
    question: "Which method checks whether an array includes a value?",
    options: ["contains()", "has()", "includes()", "exists()"],
    answer: "includes()",
    explanation: "includes() returns true when the array contains the specified value."
  },
  {
    id: "32",
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "var", "fixed"],
    answer: "let",
    explanation: "let declares a block-scoped variable that can be reassigned."
  },
  {
    id: "33",
    question: "What is NaN?",
    options: [
      "Not a Number",
      "New Array Name",
      "Null and Null",
      "Negative Array Number"
    ],
    answer: "Not a Number",
    explanation: "NaN is a special numeric value representing an invalid or unrepresentable number result."
  },
  {
    id: "34",
    question: "Which method reduces an array to a single value?",
    options: ["reduce()", "combine()", "joinAll()", "compress()"],
    answer: "reduce()",
    explanation: "reduce() processes array elements to produce a single accumulated result."
  },
  {
    id: "35",
    question: "Which syntax is used for a template literal?",
    options: [
      "'Hello'",
      "\"Hello\"",
      "`Hello`",
      "(Hello)"
    ],
    answer: "`Hello`",
    explanation: "Template literals use backticks and can contain embedded expressions."
  }
];

export default questions;