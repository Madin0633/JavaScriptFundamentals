const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "batman", "Joker"]

// This is not a Good method for the marging the array

marvelHeros.push(dcHeros)
console.log(marvelHeros);

console.log(marvelHeros[3][1]);


// This is goood methoad to marging the array and get data from that use concat

const allNewHeros = marvelHeros.concat(dcHeros)
console.log(allNewHeros[4]);


// The Best Methoad is use spread Operator 

const all_new_heros = [...marvelHeros, ...dcHeros]
console.log(all_new_heros);


const another_array = [1, 3, 4, 5, [1, 2, 3,], 6, 7, [7, 6, 5,], 8, 9]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray("madin bloch"));

// From method is used to covert the array

console.log(Array.from("hello madin"));
console.log(Array.from({ name: "madin blocj" }));


// of method is used to convert variable or other in the array 


const score1 = 300
const score2 = 500
const score3 = 600

console.log(Array.of(score1, score2, score3));
