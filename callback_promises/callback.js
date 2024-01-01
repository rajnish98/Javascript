function h(x, fn) {

  // h is hof
  // fn is call
  console.log(x*x);
  fn(x*x);
}

h(10, function(){
  console.log("done with callback");
})
h(10,exec)

function exec(n){
  console.log("swuared value is", n);
}

// Asynchronous
// console.log("start");
// setTimeout(function () {
//   console.log("timer done");
// }, 3000);

// console.log("end");

