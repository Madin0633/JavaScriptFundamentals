// Singleton 
// Object.create is


// object literal

const mysmb = Symbol("mykey1")

const jsUser = {
    name:"madin",
    "Full Name": "Madin Bloch",
    [mysmb]: "key1",
    age:18,
    location: "juagadh",
    email: "madin@gmail.com",
    isloggenIn : false,
    lastLoginDays : ["Sun", "Mon", "Tue"]
}

jsUser.email ="madin@chatgpt.com"

// Object.freeze(jsUser)

// jsUser.name ="chirag"

// console.log(jsUser["Full Name"]);
// console.log(jsUser.email);

// console.log(jsUser[mysmb]);
// console.log(jsUser);

jsUser.greetting = function(){
    console.log("hello JS user!");
}

console.log(jsUser.greetting());

jsUser.greettingTwo = function(){
    console.log(`hello js user my name is, ${this.name}`);
}
console.log(jsUser.greettingTwo());
// console.log(jsUser);
