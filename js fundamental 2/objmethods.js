let emp = {
  id: 101,
  name:'alex',
  age: 27

};

let keys = Object.keys(emp); //key astract fro array form
console.log(keys);


let values = Object.values(emp); // value retrun from array form
console.log(values);

let entries = Object.entries(emp); // both key and value return from array form
console.log(entries);


// Object.freeze(emp); //u can't change any thing in freeze
Object.seal(emp); //can't add and delete in seal method
emp.id = 100;
console.log(emp);


let o = Object.assign({x: 16}, emp); // move one value from another
console.log(o); 