// regular expersion

let pattern ='pw';

let regExOne = new RegExp(pattern);

let flag = 'gi'
let regExtwo = new RegExp(pattern, flag);

let regExThree = /pw/gi 

const strToCheck = "pw is growing at a rapid speed and recently they are workng on pwskils to crate sklla based pwcontent"

const result = regExThree.test(strToCheck);
console.log(result);

const anotherResult = strToCheck.match(regExThree);
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'p-w');
console.log(oneMoreResult);

const webUrl = "https://pwskills.com/rajnish%310pandey";

const userbleUrl = webUrl.replace(/%\d\d0/, '-');  //\d recognise number
console.log(userbleUrl);