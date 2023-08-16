// For in 

const myObject = {
    js : "javascript",
    py : "python",
    cpp : "c++",
    rb : "ruby"
}

for (const key in myObject) {
//    console.log(key); its give only key of object 

    // Its give myObject[key] give the value of the Object 
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "py","rb", "cpp","java"]

for (const key in programming) {

    // Its give the index of array 
    // console.log(key);
    console.log(`${key} shortcut is for ${programming[key]}`);

}


// Map is not Iterabal 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
//   console.log(key);
}