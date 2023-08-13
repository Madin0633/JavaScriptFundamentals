function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("N");
}

// sayMyName()

function addTwoNumbers(number1, number2){

    // let result = number1 + number2;
    // return result;
  return number1 + number2;
}

// const result = addTwoNumbers(2,3)
// console.log("Result is",result);

function loginUserMassage(username = "sam"){
    if(!username){
            console.log("Please enter a username");
            return;
    }
    else{
    return `${username} just loginIn`;}
}
// console.log(loginUserMassage("hitesh"))
// console.log(loginUserMassage("madin"))



function calculateCartPrice(val1, val2,...price){
    return price
}
// console.log(calculateCartPrice(23,23,44,55));


// const user = {
//     username: "madin",
//     price : 199
// }

// function handelObject(anyobject){
//     console.log(`username is ${anyobject.username} and prices ${anyobject.price} and email ${anyobject.email}`);
// }
// // handelObject(user);
// handelObject({
//     name: "maidn",
//     price :199,
//     email :"demo@demo.com"
// })


// Array 

const anyArray = [20,39,44,55]

function returenSecondValue(getArray){
    return getArray[0]
}
// console.log(returenSecondValue(anyArray))

console.log(returenSecondValue([243,44,66,88]))