// function helloWorld(word) {
//   return word;
// }

// let taco = "I like huge tacos!";
// console.log(helloWorld(taco));

// // function expression
// // function stored in a variable

// // First class function
// function displaySquare(fn) {
//   console.log("Square is " + fn(5));
// }

// square(5);

// // What is IIFE Imediately Invoked Function Expressions
// function square(num) {
//   var y = 10;
//   console.log(y);

//   console.log(num * num);
// }

// var x = 5;
// console.log(x);

// var x = 21;

// var fun = function () {
//   console.log(x);
//   var x = 20;
// };

// fun(); // <--- this will have arguments


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


// let user = {
//   username: "Roadside Coder",
//   rc1: () => {
//     console.log("Subscribe to " + this.username);
//   },
//   rc2() {
//     console.log("Subscribe to " + this.username);
//   },
// };

// user.rc1()
// user.rc2()


// const users = [
//   {
//     id: 1,
//     name: "Jack",
//     isActive: true
//   },
//   {
//     id: 2,
//     name: "John",
//     isActive: true
//   },
//   {
//     id: 3,
//     name: "Mike",
//     isActive: false
//   }
// ]

// function getUserName(users) {

//   const userNames = []

//   users.forEach(user => {
    
//     userNames.push(user.name)
    
//   });

//   return userNames
// }

// console.log(getUserName(users))

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count);
//   }
//     console.log(count);
// })();

// function createBase(num) {
//   return function (innerNum) {
//     console.log(innerNum + num);
//   }
// }

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// console.log(createBase(6));






// function  find(index) {
//   let a = []
//    for (let i = 0; i < 1000000; i++) {
//     a[i] = i * i
//   }
//     return function () {
//       console.log(a[index]);
      
//     }
//    console.log(a[index]);
//   }

//   const closure = find();
//   console.time("6")
//   find(6)
//   console.timeEnd("6")
//   console.time("12")
//   find(50)
//   console.timeEnd("12")





function human() {
  const name = 'Sina'
  function sayHi() {
    console.log(`Hi I am ${name}`);
  }
  function sayHowYouFeel() {
    console.log(`${name} is feeling good!`);
    
  }
  sayHi()
  sayHowYouFeel()
}


human()