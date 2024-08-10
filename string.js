let name="sahil"
let repoCount=10
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`) // this is string interpolation

const gameName = new String("sahil-hc-coms")

// console.log(gameName[0]);
// console.log(gameName.__proto__); // ek object dega,,joki dekhne me empty lgega but console me dekhne pr bhut sara properties milega


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(1, 4) // starting from index 1 till index 4-1
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

// console.log(url.includes('htesh'))

// console.log(gameName.split('-'));

// console.log(gameName.lastIndexOf("s"));

