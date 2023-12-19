// const tinderUser = new Object() //singleton
const tinderUser = {} //non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Ranbir"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj5 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj5)

const obj3 = {...obj1, ...obj2, ...obj5}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]
// console.log(tinderUser)
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



// destructuring

const course = {
    coursename: "js in hindi",
    price: 1000,
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor)

// APIs - delegation of function

// {
//     "name": "tushar",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

