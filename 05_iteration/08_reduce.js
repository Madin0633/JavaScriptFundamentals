const myNumber = [1,2,3]

// const myTotal  = myNumber.reduce(function (acc, curval) {

//         console.log(`acc value is ${acc} and curval is ${curval}`);
//         return acc+curval;
// },0)
// console.log(myTotal);



// const myTotal =  myNumber.reduce( (acc,curval ) => acc + curval, 0)
// console.log(myTotal);


const myShoppingCart = [

    {
        itemName : "Web Development",
        price : 2999
    },

    {
        itemName : "Android Development",
        price : 12999
    },

    {
        itemName : "Flutter Development",
        price : 29999
    },
]

const PriceToPay =  myShoppingCart.reduce( (acc , item) => (acc + item.price),0);
console.log(PriceToPay);