const coding = ["js", "java", "android", "react"]

const values =coding.forEach( (item) => {
    console.log(item);
} )

// its give an undefined value one 
// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]

// we give use return keyword 

const newNums= myNums.filter( (nums) => {
    return nums>4
} )

const newNumber =  myNums.filter( (item) => (item>4))
console.log(newNumber);

// const newNums = []


// Using if else 

myNums.forEach( (nums) => {
    if(nums > 4){
        newNums.push(nums);
    }
})
console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  
//  let  UserBook = books.filter( (bk) =>  bk.genre === 'History')

let UserBook = books.filter( (bk) => bk.edition >=2000)
 
UserBook = books.filter( (bk) => {
    return bk.edition >= 2000 && bk.genre === 'Science'
})

 console.log(UserBook);