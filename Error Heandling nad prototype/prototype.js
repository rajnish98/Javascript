let myHero = ["thor", "spiderman"];
let dcHero = ["batman", "flash", "spiderman"];

let herpower = {
  thor: "hammer",
  spiderman: "sling",

  getSpidermanPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
  }
}

Object.prototype.rajnish = function(){
  console.log(`Rajnish is present in all object`);
}

console.log(myHero.rajnish());
console.log(herpower.rajnish());

Array.prototype.heyRajnish = function(){
  console.log(`Rajnish says hi`);
}

console.log(myHero.heyRajnish());
// console.log(herpower.heyRajnish());


// inheritance


const user = {
  name: "top name",
  email: "top@gmail.com"
}

const Teacher = {
  makeVideos: true
}

const TeachingSupport = {
  isAvailable: false
}

const TAAssistant = {
  makeAssignment: "js Assignment",
  fulltime: true,
  __proto__: TeachingSupport
}
// Teacher.__proto__ = user;
Object.setPrototypeOf(TeachingSupport, Teacher); //modern usees inheritance
console.log(TAAssistant.isAvailable);

String.prototype.truelength = function(){
  console.log(`True length is ${this.trim().length}`);
}

"rajnish    ".truelength()
"anurag     ".truelength()
