const myNums = [1,2,3]

// myTotal = myNums.reduce(function(acc, currVal) {
//     return acc+currVal
// }, 0)


const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)
console.log(myTotal);


const shoppingcart = [
    {
        itemName: "js course",
        price: 3000
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 6000
    },
    {
        itemName: "data science course",
        price: 13000
    }
]

console.log(shoppingcart.reduce((acc, item)=>{return acc+item.price}, 0))