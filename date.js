// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //date is an object in JS

// let myCreatedDate = new Date(2023, 0, 23) //year,month(starts with 0 i.e Jan),date
let myCreatedDate = new Date(2023, 0, 23, 5, 3,45)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth() + 1); // starts from 0 i.e January so we did +1
// console.log(newDate.getDay());  // starts from monday--index starts from 1

// console.log(`${newDate.getDay()} and the time is ${newDate.toLocaleString()}`)

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })
