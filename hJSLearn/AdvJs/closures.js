function Outer() {
    let counter = 4;
    return function () {
        counter++;
        return counter;
    }
}

let incrementNum = Outer();
console.log(incrementNum());
console.log(incrementNum());
console.log(incrementNum());

/*
In Short, Closures are 
If any function is created, it retains the memory of the function.
in the above example, even though lines 10, 11 and 12 are executing the same methods, 
the output increments as 5,6,7 for the 3 console.log statements.
*/