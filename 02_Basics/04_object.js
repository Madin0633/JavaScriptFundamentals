// Constructor

// const Tindar = new Object()
// console.log(Tindar);

const TindarUser = {}
// console.log(TindarUser);

TindarUser.id ="123abc"
TindarUser.name = "Madin"
TindarUser.isLoggedIn = false

// console.log(TindarUser);


const regularUser = {
    email : "madin@gmail.com",
    fullname :{
            userfullname : {
                fistname: "Madin",
                lastname : "Bloch"
            }
    }
}

// console.log(regularUser.fullname.userfullname.fistname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {4: "a", 5: "b"}
const obj3 = {6: "a", 7: "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);   

const user =[
    {
        id:1,
        email : "madin@gmail.com",
    },
    {
        id:2,
        email : "example@gmail.com",
    },
    {
        id:3,
        email : "madin@gmail.com",
    }
]

//  console.log(user[0].email)

// console.log(TindarUser);

// console.log(Object.entries(TindarUser));
// console.log(Object.values(TindarUser));
// console.log(Object.keys(TindarUser));

// console.log(TindarUser.hasOwnProperty('id'));
// console.log(Object.values(TindarUser.name));


// Object Destructor  

const course = {
    coueseName : "javascript",
    price: "999",
    courseInstructor : "Hitesh"
}

    // course.couesename

    const {courseInstructor} = course
    console.log(courseInstructor);

    const {name : Username} = TindarUser;
    console.log(Username );

    
    const {email} = user[0]
    console.log(email);

   
