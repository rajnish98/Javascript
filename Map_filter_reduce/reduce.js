const arr = [5, 1, 3, 2, 6];

// normal method to find sum
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

console.log(findSum(arr));


// reduce method to find sum

const output = arr.reduce(function(acc,curr){
  acc += curr;
  return acc;
}, 0);
console.log(output);

// sum pof max normal method

function findMax(arr){
  let max = 0;
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }
   }
   return max;
}

console.log(findMax(arr));

const output1 = arr.reduce(function(acc, curr){
  if(curr > acc){
    acc = curr;
  }
  return acc;
},0);

console.log(output1);


const user = [
  {firstName: "rajnish", lastName: "pandey", age: 28},
  {firstName: "raj", lastName: "pandey", age: 26},
  {firstName: "raj babu", lastName: "pandey", age: 26},
  {firstName: "rajnikant", lastName: "pandey", age: 25},
];

const output2 = user.reduce(function(acc, curr){
   if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age]
   }
   else{
    acc[curr.age] = 1;
   }
   return acc;
}, {});

console.log(output2);