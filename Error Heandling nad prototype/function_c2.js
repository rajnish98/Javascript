// anonymous function
const Product = function(n, p, r){
  this.name = n;
  this.price = p;
  this.rating = r;
}
const p = new Product("mackbook", 1500000, 5);
console.log(p);