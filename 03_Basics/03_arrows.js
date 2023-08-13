const user = {

    username: "Madin",
    price: 199,
    welcomeMassage: function () {
        // console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }
}
user.welcomeMassage();
user.username = "Sam"
user.welcomeMassage();

// console.log(this);

function madin() {
    console.log(this);
}
// madin();


function  one(){
    let user = "madin bloch"
    console.log(this.username);
}
one();

// const chai = function(){
//     let usename = "Madin Bloch"
//     console.log(this.usename);
// }


const chai =  () =>{
    let usename = "Madin Bloch"
    console.log(usename);
}
// chai()


// if we use this methoad we can use retur keyword
const add_Two = (val1, val2) => {
   return val1+val2;
}
console.log(addTwo(1, 2));


// if we use this methoad we can't use retur keyword
const addTwo =  (val1, val2)=>(val1+val2);
console.log(addTwo(2,4));


// Use Object 
const addtwo = (num1, num2) => ({
    usename: "madin"
})

console.log(addTwo(2,4));