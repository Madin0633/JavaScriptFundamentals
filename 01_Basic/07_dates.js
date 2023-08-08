// Dates

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


let myCreateDate = new Date(2023,0,23)
// let myCreateDate = new Date(2023,0,23,5,3)
// console.log(myCreateDate);

let myTimeStamp = Date.now()

console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000)+1);


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})