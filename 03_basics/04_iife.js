// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
})(); // name IIFE

( (username) => {
    console.log(`DB CONNECTED TWO ${username}`);
} )('tushar'); // simple IIFE

