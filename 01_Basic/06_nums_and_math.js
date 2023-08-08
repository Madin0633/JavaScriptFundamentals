let score = 500
console.log(score);

const balance = new Number(200)
console.log(typeof balance);

console.log(balance.toString().length);

// to fixed is used for the next zero 2.0000
console.log(balance.toFixed(2));


let otherNumber = 1.456
console.log(otherNumber.toPrecision(2));


let hundered = 100000
// console.log(hundered.toLocaleString('en-IN'));   

// +++++++++++++ Maths +++++++++++++++++++++++++++++++++

// console.log(Math);
console.log(Math.abs(-4));

// round give a roundligure eg 4.6 its reture 5 and give 4.4 returns 4 
console.log(Math.round(4.5));


// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.5));
// console.log(Math.min(12,2,45,66));
// console.log(Math.max(12,2,45,66));

// console.log(Math.random()); 
// console.log(Math.random()*10 + 1); 

console.log(Math.floor(Math.random() * 10) + 1);


const min = 10;
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));




