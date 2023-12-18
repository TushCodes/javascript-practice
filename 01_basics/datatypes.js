// Stack (Primitive) Heap (Non-Primitive)

let myYoutubename = "tusharsachdevaisgreatdude"

let anothername = myYoutubename
anothername = "coffeeaurprogram"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = null

console.log(userOne.email)
console.log(userTwo.email)