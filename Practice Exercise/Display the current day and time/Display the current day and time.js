var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

console.log("Today is: " + daylist[day] + ".");

var hour = today.getHours();
const minute = today.getMinutes();
var second = today.getSeconds();

var prepend = (hour >= 12) ? "PM" : "AM"; 
hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && prepend === 'PM') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepend = 'Noon';
  } else {
    hour = 12;
    prepend = 'Noon';
  }
  if (hour === 0 && prepend === ' AM ') {
    if (minute === 0 && second === 0) {
      hour = 12;
      prepend = ' Midnight';
    } else {
      hour = 12;
      prepend = ' AM';
    }
  }
}
console.log("Current Time: " + hour + ":" +minute + ":" + second + prepend);
document.getElementById("p1").innerHTML = daylist[day] +"."+ " " + hour +":"+ minute + ":"+ second + prepend;