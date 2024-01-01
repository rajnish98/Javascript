let arr = [2, 3, 4]

arr.forEach(function(element, index, arr){
  console.log(index, element, arr);
});

arr.forEach((element, index, arr) => {
  console.log("arrow: ", index, element, arr);
});

const heros = ["naagraj", "doga", "dhurva", "maniraj"];

heros.forEach((el) => {
  console.log(el.toUpperCase());
});
// ------------------------ map ----------------------

arr.map(function(element, index, arr){
  console.log(element, index, arr);
});


heros.map((h) => console.log(h.toUpperCase()));

// Filter -----------------------------

console.log(heros);
const heroWithRaj = heros.filter((h) => {
  return h.endsWith('raj')
})

console.log(heroWithRaj);

// shopping cart

const cartBill = [20, 30, 50];
const sumOfCartBill = cartBill.reduce((prev, curr) => prev+curr, 0);
console.log(sumOfCartBill);

// ------------------
const gameScore = [200, 300, 310, 250, 150];

// check if all values are numbers

const gameScoreCheck = gameScore.every((v) => typeof v === 'number');

console.log("check: ", gameScoreCheck);

// find score above 200

const above200 = gameScore.find((score) => score > 200 );

console.log(above200);


// findIndex
// some
// sort