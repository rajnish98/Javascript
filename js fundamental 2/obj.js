let obj = {id: 101, name: "Alex", salary: 10000};

let emp = new Object();
emp.id = 102;
emp.name = "Alex";
console.log(emp);
console.log(obj);

// using constructor to build object 

function Emp(i, n, s){
  this.id = i;
  this.name = n;
  this.salary = s;

}

const e = new Emp(103, "Amy", 12000);
console.log(e);

//  data fatcinh . and [] oprator

console.log(emp.id);
console.log(emp['name']);

emp.salary = 13000;
emp.id = 13;
emp['name'] = 'mr.sam';

delete emp.id;

console.log(emp);

