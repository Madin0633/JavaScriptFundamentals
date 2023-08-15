const userEmail = ["madinkham0663@gmail.com"]

if(userEmail){
    console.log("Successfully logged in");
}
else{
    console.log("Failed to log in");
}


// Fasly value 
// false, 0, -0, BigInt,"", null, undefined , NaN

// truthy values 
// "0", 'false'," spance ", [],{}, function () {}



// Check Array is Empty or Not 
if(userEmail.length === 0){
    console.log("Array is empty");
}else {
    console.log(`${userEmail}, is Logged in Successfully`); 
}



// Check Object is not empty or Not
const User = {
    name : "mdain",
    email : "mdain@gmail.com"
}

if(Object.keys(User).length === 0){
    console.log("Object is empty");
}else{
    console.log(`${User.name}, Is logged in Successfully`);
}

// Nullish coalesing Opeator (??) : null undefined
let val1;
// val1= 8 ?? 82
// val1 = null ?? 22;
// val1 = undefined ?? 12
val1 = null ?? 10 ?? 20
console.log(val1);