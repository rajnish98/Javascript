const arr = [5, 1, 3, 2, 6];
function binary(arr){
  return arr.toString(2);
}
const output = arr.map(binary);
console.log(output); 


// tricky map


const user = [
  {firstName: "rajnish", lastName: "pandey", age: 28},
  {firstName: "raj", lastName: "pandey", age: 27},
  {firstName: "raj babu", lastName: "pandey", age: 26},
  {firstName: "rajnikant", lastName: "pandey", age: 25},
];

const output1 = user.map(x => x.firstName + " " + x.lastName);

console.log(output1);