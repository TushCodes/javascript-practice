function sayMyName() {
    console.log("T");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("R");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {

//     return(number1 + number2)
// }

function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(47389, 5)

// console.log("Result: ", result)

function loginUserMessage(username = "Mark") {
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Tushar"))
// console.log(loginUserMessage("tushar"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 3000, 20))

const user = {
    username: "Tushar",
    price: 350
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 500
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));