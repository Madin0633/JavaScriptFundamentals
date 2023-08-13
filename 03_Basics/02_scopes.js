// let a = 12;
var b = 13;
const c = 15;

console.log(b);
console.log(c);

if(true){
    var b = 100;
    console.log(b);
}

let a = 10;
if(true){
    let a = 100;
    console.log(a);
}
console.log(a);


function one(){
    const usename = "madin"

    function two(){
        const website =  "maidnkha  n"
        console.log(usename);
    }
    // console.log(website);

    two()
    console.log(usename);
}
one()


console.log(addone(5));

function addone(num){
    return num +1;
}

// if we call the fuction which is store in the variable in the ubove fuction its give error 
console.log(addtwo(6));
const addtwo = function(num){
    return num +2;
}