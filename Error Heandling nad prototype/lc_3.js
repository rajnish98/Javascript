// what are class and objects

class Product {
  // properties -> variable -> data member
  // name;
  // price;
  // rating;
  #rating; //private data member

  constructor(n, p, r) {
    console.log("calling the constructor");
    this.name = n;
    this.price = p;
    this.#rating = r;
    // return 10; if you're returning primitive then it will be avoided in constructor
    // return {x:0, y:20} // if you are no primitive then it will be returned
  }


  static custom(){
    console.log("calling the static function");
  }

  
  // getter and setter

  get ratinggetter(){
    console.log(this.#rating);
  }

  set ratingSetter(r){
    if(r < 0) return;
    this.#rating = r;
  }

  // behaviour -> function -> member function
  display(){
    console.log("this is refer", this);
    console.log("Display the current product");
  }
}

const p = new Product("iphone", 100000, 5); // new crat an empty plain object
//  -> in the above piece of code we are calling the constructor method.
console.log(p);
p.name = "samsung s23"
console.log(p.name);
p.ratingSetter = 10;
p.ratinggetter;
p.display();
Product.custom(); //claiing class name as a static method

