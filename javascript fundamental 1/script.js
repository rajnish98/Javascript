let age = 18;

if (age >= 19){

  console.log("You are eligible");
}
else {

  console.log("You are not eligible");

}

// switch statement

let user = "admin";
switch(user){

  case "admin":
    console.log("he is admin");
    break;

  case "student":
    console.log("he is student");
    break;

  case "teacher":
    console.log("he is teacher");
    break;

  default:
    console.log("it is default");

}

// loops statement

for (let i = 0; i < 5; i++){

  console.log(i)
  

}
//  while loop statment

let i = 0;
while (i < 5){
  console.log(i);
  i++;
}

// do while statment 
let i1 = 0;
do {
  console.log("hey there!");
  i1++;

}while(i1 < 5);

// ternery op / ternery condition

// islogedin = true;
islogedin = false;

islogedin ? console.log("Home Page") : console.log("loginpage");