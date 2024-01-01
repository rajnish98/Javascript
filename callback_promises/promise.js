function createPromise(){
  return Promise(function exec(resolve, reject){
    setTimeout(function f(){
      console.log("timer done");
      resolve(10);
    }, 3000);
  });
}

console.log("start");
let x = createPromise();
console.log("got a new [promise");
x.then(function f(value){
  console.log("promise done", value);
}).catch(function g(value){
  console.log("handled", value);
}).finally(function fn(){
  console.log("finally");
});
console.log("end");
for(let i = 0; i < 100000; i++){
  // some code
}