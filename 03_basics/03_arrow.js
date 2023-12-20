const user = {
    username: "tushar",
    price: 1500,

    welcomeMessage: function() {
        console.log(`${this.username} ,  welcome to website`)
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) //referring to empty object

// function chai() {
//     let username = "tushar"
//     console.log(this.username)
// } // can't use this just in normal function

// chai()

// const chai = function() {
//     let username = "tushar"
//     console.log(this.username)
// }
const chai = () => {
    let username = "tushar"
    console.log(this)
}



// chai() 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (  num1 + num2 ) // implicit return
const addTwo = (num1, num2) => ({username: "tushar"} )

console.log(addTwo(3,4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(() => {})

