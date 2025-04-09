function car(make, model) {
    this.make = make;
    this.model = model;
}

let myCar = new car("Tata","Tiago");
//console.log(myCar);

let myNewCar = new car("Toyota","Innova");
//console.log(myNewCar);

function teaType(type) {
    this.type = type;
    this.details = function(){
        return `You have ordered ${this.type}`;
    }; 
}
let myTea = new teaType("lemon tea");  //do not miss the "new" keyword
//console.log(myTea.details());

function Animal(species) {
    this.species = species;
}
Animal.prototype.sound = function (soundDetail) {
    return `Animal ${this.species} makes sound as ${soundDetail}.`;
};
let myDog = new Animal("Dog");
//console.log(myDog.sound("grrr"));

function Drink(name) {
    this.name = name;
    if (!new.target) {
        throw new Error(`Please use new keyword`);
    }
    return `The drink is ${this.name}`;
}
let myNewDrink = new Drink("tea");
console.log(myNewDrink.name);
//let mySecondDrink = Drink("coffee");
//console.log(mySecondDrink);