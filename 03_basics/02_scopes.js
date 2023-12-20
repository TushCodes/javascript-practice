// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ", a)
}

function one() {
    const username = "tushar"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website)

    two()

}

// console.log(a)
// console.log(b)
// console.log(c)

// one()

if (true) {
    const username = "tushar"
    if (true) {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website)
}

// +++++++++++interesting++++++++++

function addone(num) {
    return num + 1
}

addone(5)



const addTwo = function(num) {
    return num+2
}
