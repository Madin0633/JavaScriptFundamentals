// For Loop 

// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     console.log(element);

// }

// Table 
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(`${i} * ${j} =  ${i*j}`);
    }
}


// Array Print 
const myArray = ["superman", "Batman", "Joker"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}


// Break and continue

for (let i = 1; i <=20; i++) {

    if(i == 5)
    {
        // console.log("5 Number is the best");
        break;
    }
//    console.log(i);
    
}

for (let i = 1; i <=20; i++) {

    if(i == 5)
    {
        // console.log("5 Number is the best");
        continue;
    }
   console.log(i);
    
}