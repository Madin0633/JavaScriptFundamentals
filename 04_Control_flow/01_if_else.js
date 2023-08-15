const isUserLoggedIn = true;
const temparture = 29

if (temparture == 40) {
    console.log("temparture is less than 40");
}else{
    console.log("temparture is greater than 40");
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 100
if(score >= 100){
    let power = "fly"
    console.log(`Use Power : ${power}`);
}
else{
    console.log(`Power is not use score is ${score}`);
}


const balance = 1900

// if(balance > 500 ) console.log("test"), console.log("test2");


if(balance < 500){
    console.log("less than 500");
}else if(balance < 730){
    console.log("less than 730");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("greater than 1000");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}