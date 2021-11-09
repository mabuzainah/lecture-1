// We want to write a script that we can type 
// node printName.js [testName]
// ==> Welcome to WedDecCore [testName]

//printName(); // in JS will run despite the function being run below. 

//creating a constant and assigning it to the first word after the JS file name
const userName = process.argv[2];
const userNameFULL = process.arg; // will return full length string including "node" and "printName.js" 

function printName () {
    console.log("Welcome to WebDevCore", userName);
    console.log("Welcome to WebDevCore " + userName + "!");
    
}

printName(); // BEST HOWEVER TO CALL FUNCTION AFTER IT'S CREATION
