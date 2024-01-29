const radius = [3, 1, 2, 4];

const area = function (radius){
  return Math.PI * radius * radius;
};

const CircumFrance = function(radius){
  return 2 * Math.PI * radius;
};

const Diameter = function(radius){
  return 2 * radius;
};
const calculate = function (radius, logic){
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
    
  }
  return output;
};
console.log(calculate(radius, area));
console.log(calculate(radius, CircumFrance));
console.log(calculate(radius, Diameter));

const calculateArea = function(radius){
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
    
  }
  return output;
}
console.log(calculateArea(radius));