let obj = {id: 101, name: 'Alex', salary: 10000};
let emp = new Object();
emp.id = 102;
emp.name = "sam";
console.log(emp);
console.log(obj);


function Emp(i, n, s){
   this.id = i;
   this.name = n;
   this.salary = s;
}

const e = new Emp(103, 'amy', 12000);
console.log(e);

// 
console.log(emp.id);
console.log(emp['name']);

emp.salary = 13000;

emp['name'] = 'mr. sam';
delete emp.id;
console.log(emp);