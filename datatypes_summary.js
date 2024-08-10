//  Primitive (call by value->> isme copy of the variable pass hota h)

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
// console.log(typeof(userEmail)); // undefined


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive datatypes) -> call by reference hota h

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "sahil",
    age: 21,
}
// console.log(myObj);// iske ander ka sara value print ho jayega
// console.log(myObj.name);  // name print hoga


const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
1.) Primitive datatype me stack memory used hoti h
    Isme jo v variable hm declare krte h uska copy milta h
2.) Non-Primitive datatype me heap memory used hoti h
    Isme jo v variable hm declare krte h uska reference milta h
*/

let myName="sahil_kumar"

let myName1=myName;
// console.log(myName1);
myName1="newname"
// console.log(myName1);
// console.log(myName);

let userOne={
    email:"sk@gmail.com",
    upi:"sk@ybl"
}
console.log(userOne)

let userTwo=userOne;
console.log(userTwo);
userTwo.email="sknew@gmail.com" // call by refernce hua,,dono ek hi memory address ko refer kr rha h,,isiliye userOne ka email change ho gya

console.log(userOne)