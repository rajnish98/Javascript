// Anonymous function

let x= function () {
  console.log("hi");
}

x();

// invoke function

(function (x) {
  console.log(x*x);
  
})(5);

// named function expresion

(function exec() {
  console.log("named");
  
})();

