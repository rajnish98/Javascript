try {
  let x = undefined;
  console.log(x[0]);
} catch (error){
  console.log("error handling in catch", error);
} finally {
  console.log("Finally always gets excuted");
}

console.log("End");