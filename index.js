function helloWorld(word) {
  return word;
}

let taco = "I like huge tacos!";
console.log(helloWorld(taco));

// function expression
// function stored in a variable

// First class function
function displaySquare(fn) {
  console.log("Square is " + fn(5));
}

square(5);

// What is IIFE Imediately Invoked Function Expressions
function square(num) {
  var y = 10;
  console.log(y);

  console.log(num * num);
}

var x = 5;
console.log(x);

var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun(); // <--- this will have arguments

// params vs arguments

// function multiply(...nums) {
//   console.log(nums);
// }

// var arr = [7, 6];

// multiply(...arr);

// function greeting(name) {
//   alert("Hello " + name);
// }

// function processUserInput(callback) {
//   var userName = prompt("Please enter your name.");
//   callback(userName);
// }

// processUserInput(greeting);

// document.addEventListener("click", (params) => {});

let user = {
  username: "Roadside Coder",
  rc1: () => {
    console.log("Subscribe to " + this.username);
  },
  rc2() {
    console.log("Subscribe to " + this.username);
  },
};

user.rc1()
user.rc2()
