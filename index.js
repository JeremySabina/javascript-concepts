function helloWorld(word) {
  return word;
}

let taco = "I like huge tacos!";
console.log(helloWorld(taco));

// function expression
// function stored in a variable

// First class function
function displaySquare(fn) {
    console.log("Square is " + fn(5))
}


// What is IIFE Imediately Invoked Function Expressions

(function square(num) {
    console.log(num * num)
})(10);

