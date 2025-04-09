// Primitive ->String, bool, Number, bull, undefined, Symbol

// Non-Primitive ->  Object -> Array,functions, objects

let bal = 120;
console.log(typeof(bal))

let sm1 = Symbol();
console.log(sm1);

let username = {
    firstName:"Angular", 
    isLoggedin: true
};
console.log(typeof(username));
console.log(username);

let favouritePlaces = ["Bengaluru", "Chennai", "Mumbai"];
//soft copy
let anotherFavouritePlace = favouritePlaces;
console.log(favouritePlaces);
console.log(anotherFavouritePlace); 

anotherFavouritePlace.push("Pune");
console.log(favouritePlaces); 
console.log(anotherFavouritePlace); 

//hard copy
console.log("Hard copy");
//let anotherFavouritePlace2 = [...favouritePlaces]; //alternate option
let anotherFavouritePlace2 = favouritePlaces.slice();
favouritePlaces.pop();
console.log(favouritePlaces);
console.log(anotherFavouritePlace2);

//join arrays
console.log(favouritePlaces.concat(anotherFavouritePlace2));
let_isPuneAvailabe = favouritePlaces.includes("Pune");
console.log(let_isPuneAvailabe);

//Array.Shift()
const array1 = [1,2,3,4,5,6,7];
const firstElement = array1.shift();
console. log (array1);
// Expected output: Array 12, 3]
console. log (firstElement);
// Expected output: 1
const secondElement = array1.shift();
console. log (array1);
console. log (secondElement);
const array2 = [1, [2, [3, [4, [5, [6, [7]]]]]]];

console. log (array2.flat(Infinity));