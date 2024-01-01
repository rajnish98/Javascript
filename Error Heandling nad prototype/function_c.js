// function constructor
function Product(n, p, r) {
  this.name = n;
  this.price = p;
  this.rating = r;
}

const p = new Product("mackbook", 1500000, 5);
console.log(p);

// calling context 
let x = {
  p: Product
};

x.p("airpods", 20000, 5);
console.log(x);

/**
 * 1. This is keyword in js diff than other languages
 * 2. this keyword refers to the context from where we called
 * 
 * in the function constructor also
 * - if you return primitive it is ignored and we return the object refered by this
 * - if you return a custom obj, then the custom obj is returned
 * - if you don't return anything , than object referred by this is returned
 */