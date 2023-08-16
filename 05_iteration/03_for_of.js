// For Of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const key of arr) {
    console.log(key);
}

const gretting = ["hello world !"]
for (const greet of gretting) {
    // console.log(`Each char is ${greet}`);

}


// Maps 

const map = new Map();
map.set("name","madin")
map.set("name","madin")
map.set("email","madinkhan0633@gmail.com")
map.set("number","11111")

// console.log(map);
for (const[key,value] of map) {
    // console.log(key, ":-",value);
}

// OBJECT 

const myObject = {
    game1 : 'NFS',
    game2: 'Spiderman'
}

// Its give error beacuse  myObject is not iterable in For of loop 
for (const key of myObject) {
    console.log(key);
}