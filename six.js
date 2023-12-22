// const coding = ["js", "ruby"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

// console.log(myNums.filter( (num) => {
//     return num > 4
// } ))


const newNums = []

myNums.forEach( (num)=>{
    if (num > 4) {
        newNums.push(num)
    }
} )

// console.log(myNums);

// const userBooks = books.filter( (bk) => bk.genre === 'History' )

// console.log(userBooks);

let myNumbers = [1,2,3,4,5,6,7,8,9,10]

myNumbers = myNumbers.map((num)=>num*10).map((num1)=>num1+10).filter( (num) => num>=40 )

console.log(myNumbers)