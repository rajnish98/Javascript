// arrow function

const Product = (n, p , r) => {
  this.name = n;
  this.price = p;
  this.rating = r;
}

const p = new Product("mackbook", 1500000, 5);
console.log(p);

// The theory of keyword pointing to calling context is not applicable with arrow function