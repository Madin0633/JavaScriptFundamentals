const name = "madin"
const repoCount = 10

// console.log(name + repoCount + "values"); do not use this decalaration 
// for the variable

// Use this methoad ${} for declare a variable
// console.log(`My name is ${name} and my repo count is ${repoCount}`); 


const gameName = new String('madin-bloch')
// Index Of String 
// console.log(gameName[0]);


// length string 
console.log(gameName.length);

// Upper case string
console.log(gameName.toUpperCase());

// Lower case string
console.log(gameName.toLowerCase());

// Charater At find the postion of the caracter in string 
console.log(gameName.charAt(8));

// Index Of find the particular character in string
console.log(gameName.indexOf('b'));


// Substring find
const newString = gameName.substring(0,9)
// console.log(newString);

const anotherString = gameName.slice(-6,9)
// console.log(anotherString);


// trim for the white space removed 
let newStringOne = "     madin  "
console.log(newStringOne);
console.log(newStringOne.trim());


// Replace the Word 
const url = "http://madinbloch/20%.com"
console.log(url.replace('/20%',''));

// find the word includes
console.log(url.includes('1'));

// Split 
let test = "hello my name is madin.. i am from-junagadh-where-one"
console.log(test.split('-'));



let madin = new String('hello world')
console.log(typeof madin);
// typeof is object 

// check the last word 
console.log(madin.endsWith('world'));

let userone = "madin is a good person"
// let usertwo =  "that right "




