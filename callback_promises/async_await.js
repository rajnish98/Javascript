function createPromise(){
  return new Promise(function exec(resolve, reject){
    setTimeout(function f(){
      console.log("timer done");
      reject(10);
    }, 3000);
  });
}
 
async function consume(){
  try {
  console.log("inside function");
  const response = await createPromise();
  console.log("response is", response);
  } catch(err){
    console.log("handled", err)
  }
  // console.log("inside function");
  // const response = await createPromise();
  // console.log("response is", response);
}

consume();

