// function ram(){
//   console.log("hi there");
// }
// ram()

// function sqr(x){  // x is parameter
//   return x*x;
// }

// let a = sqr(8);  // pass argumnet inside function is 8
// console.log(a);

// function with one parameter

// function displayMessage(messageToBeDisplayed = "i there") {  //deafult argument
//   console.log(messageToBeDisplayed);
// }

// calling function

// displayMessage("i am good s/w engineer")
// displayMessage("i am good black hat hacker");
// displayMessage();

// arrgument left to right assign

// function sumOfTwoNumber([num1, num2]) {
//   return num1 + num2;
  
// }

// calling function
// 
// let numbers = [10, 40];
// let result = sumOfTwoNumber(numbers);
// console.log(result);


// function sumOfAllParameters(){
//   let sum = 0;
//   for (let index = 0; index < arguments.length; index++) sum += arguments[index];
//   return sum;
    
  
// }

// let result1 = sumOfAllParameters(1, 2, 3, 4, 5, 6);
// console.log(result1);


// arrow function

//  1. one parameter, and a single return statement

// const square = (x) => x * x;

//  2. two parameter, and a single return expression
// const sumOftwoNumber = (x, y) => x + y;

// 3. multiple statment in function expression

// const sum = (x, y) => {
//   console.log(`addind ${x} and ${y}`);
//   return x + y;
// };

// returning a object

// const sumAndDifference = (x, y) => ({sum: x + y, difference: x-y});

// calling a function

// let output1 = square(5);
// console.log(output1);
// let output2 = sumOftwoNumber(1, 2);
// console.log(output2);
// let output3 = sum(1, 2);
// console.log(output3);
// let output4 = sumAndDifference(5, 3);
// console.log(output4);


//  anonymous function

// let x = function(){
//   console.log("h1")
// }

// x();

// imgitely invoke function

  // name function expresion
// (function exec(){
//   console.log("named")
// })();

// (function (x){
//   console.log(x*x);
// })(5);



