let emp = {
  id: 101,
  name: 'sanket',
  age: 24
};

let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);
Object.freeze(emp);
Object.seal(emp);
emp.id = 100;
console.log(emp);

let o = Object.assign({}, emp);
console.log(o);