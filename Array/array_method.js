let arr = [1, 2, 3, 4, 5];

arr.push(6); //add array
console.log(arr);

arr.pop(); // remove element from last position
console.log(arr);

arr.shift(); // remove element from first position
console.log(arr); 

arr.unshift(9); // add element to the first position
console.log(arr);

let a1 = [1,2 ,3 ,4 ,5];
let a2 = [3, 4, 5];
let a3 = a1.concat(a2); // concatinate all the element
console.log(a1, a2, a3);

let s = a3.join(""); // join or club all the element
console.log(s);

a3.reverse(); //reverse all the array
console.log(a3);

console.log(a3.indexOf(2)); // find the vlue selcting index number in the array

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(2, 4)); // print element from given ndex method but not include given start and end element number 


arr1.splice(2, 1, 11); // add number and remove in array to the given index number stat point index middle point remove index and last one is add number. 
console.log(arr1);