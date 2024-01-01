// let emptySet = new Set();

// // console.log(emptySet.size);
// let myArray = [1, 2, 3, 4];
// // let newSet = new Set(myArray);
// let newSet = new Set([...myArray]);
// console.log(newSet);


// newSet.add(9);
// newSet.clear();
// console.log(newSet);
// console.log(newSet.has(9));

// set Difference 

function  setDifference(setA, setB){
  return new Set([...setA].filter(el => !setB.has(el)));
  // return new Set([...setA].filter(el => setB.has(el)));
}
let setA = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let setB = new Set([3, 4, 5, 6]);
console.log(setDifference(setA, setB));

// Map 

let map = new Map();

console.log(map.size);

let arr = [
  [1, "Mithun"],
  [2, "Maya"],
  [3, "Rajnag"],
  [4, "Saktiman"]
];
arr.map(arrayitem => map.Set(arrayitem[0],arrayitem[1]));
