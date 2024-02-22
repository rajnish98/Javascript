const arr = [5, 1, 3, 2, 6];

 function isEven(arr){
  return arr % 2 === 0;
 }

 const output = arr.filter(isEven);
 console.log(output);


 const user = [
  {firstName: "rajnish", lastName: "pandey", age: 28},
  {firstName: "raj", lastName: "pandey", age: 27},
  {firstName: "raj babu", lastName: "pandey", age: 26},
  {firstName: "rajnikant", lastName: "pandey", age: 25},
];

const output1 = user.filter((x)=> x.age < 30) .map((x) => x.firstName);

console.log(output1);