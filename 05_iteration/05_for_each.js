const coding =  ["js", "py","cpp", "java"]

coding.forEach(function (val){
    console.log(val);
})


coding.forEach( (item) => {
    console.log(item);
} )


// use fuction for print the array and give refrence to the for ecah  
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe) // refrence of PrintMe 




// Create Array and In the Array We have object 
const myCoding = [

    {
        name : "maidn",
        email : "madin122@gmail.com",
        password : "secret"
    },
    {
        name : "chirag",
        email : "chirag@gmail.com",
        password : "xyz"
    },
    {
        name : "khushi",
        email : "khushi22@gmail.com",
        password : "test"
    }
]
  
// Retrive the value of object 

myCoding.forEach( (item) =>{
        console.log((item.name));
})