// Array

const myArr = [1,2,3,4,5]
const myHeros = ["ironman","shaktimaan"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2[2]);

// Array Method 

// myArr.push(8,9,10,"madin")
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()


console.log(myArr.includes(3));
console.log(myArr.indexOf(2));

// let newArr = myArr.join()
// join methoad is converted into string 
console.log(myArr);
console.log(typeof newArr);


// Slice, Splice

console.log("A", myArr);

const  myn1 = myArr.slice(1,3)
// The main diffent is if we slice the array the its don't change the main array 
// console.log(myn1);
// console.log(myArr);

const myn2 = myArr.splice(1,3)

// if we splice the array it will manipulate the main array
console.log(myn2);
console.log(myArr);