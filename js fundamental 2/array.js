let a = [1, 2, 3, 4, "rajnish", false];

console.log(a);

let b = new Array("abc")
console.log(b);


console.log(a[14])
a[4] = 5;
console.log(a);

// Array methods 

let arr = [1, 2, 3, 4, 5];
arr.push(6, 7);
console.log(arr);

// remove 
arr.pop();
console.log(arr);

// remove first element

arr.shift();
let f = arr.shift();   //it's also return remove element
console.log(f);
console.log(arr);

//  add first element 
arr.unshift(9);
console.log(arr);

//  add two array

let a1 = [1, 2, 3, 4, 5];
let a2 = [3, 4, 5];
let a3 = a1.concat(a2);
console.log(a3);

//  joint element

let s = a3.join("");
console.log(s);

// reverse array

a3.reverse();
console.log(a3);

// find index 

console.log(a3.indexOf(4));

// fetching array

let arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.slice(2, 5));

// add elemwnt mid in array

arr1.splice(2, 1, 11);
console.log(arr1);