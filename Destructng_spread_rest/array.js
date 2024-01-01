const oneArray = [1, 2, 3, 4];
const twoArray = [5, 6, 7, 8];
// spread oprator

// const threeArray = oneArray.concat(twoArray);
// const threeArray = [oneArray, twoArray];
const threeArray = [...oneArray, ...twoArray]; //sprade oprator
console.log(threeArray);

// Rest oprator***************************************

function manyArgument1() {
  let args = Array.from(arguments);
  let finalArr = args.map(e => e);
  console.log(finalArr);
}
// rest
function manyArgument2(...args) {
  console.log(typeof args);
  let finalArt   = args.map(e => e);
  console.log(finalArt);
}

// manyArgument1(1,2,3);
manyArgument2(1, 2, 3, 4, 5, 6, 7);

// ------------------------------------------

// spread
const names = ["superman", "flash"];
const newNames = ["Batman", ...names, "thor"];
const sitename = "pwskills";
console.log([...sitename]);
// rest
function pwskills(...values){
  return values;
}

console.log(pwskills("superman", "flash"));