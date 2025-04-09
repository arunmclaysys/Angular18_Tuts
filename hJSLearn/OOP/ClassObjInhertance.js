function Animal(species) {
    this.species = species;    
}
Animal.prototype.sound = function() {
    return `the ${this.species} makes this sound`;
}
console.log(new Animal("dog").sound());

Array.prototype.Hitesh = function() {   //by doing this I have injected it to all arrays
    return `seeddha prog`;
}

// let myArray = [1,2,3];
// console.log(myArray.Hitesh());
// console.log(myArray);

// let myArray = ["ram","krsna","lakshman"];
// console.log(myArray.Hitesh());
// console.log(myArray);

Array.prototype.customFunc = function() {
    //return `Randomness,${this}`;
    return ["randomness",...this]           //returning as an array
}

let myArray = ["ram","krsna","lakshman"];
//console.log(myArray.length);
//console.log(myArray.customFunc());
let arr2 = myArray.customFunc();
//console.log(arr2);
//console.log(arr2.length);

//class
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    //functions written inside class are called as METHODS.
    start() {
        return `I bought a new ${this.make} ${this.model} today`;
    }
}

class Car extends Vehicle {     //the keyword extends is inheriting the vehicle method here
    drive() {
        return `This ${this.make} ${this.model} is inherited.`;
    }
}
let myCar = new Car("Tata","Nexon").start();
//console.log(myCar);
let myVehicle = new Vehicle("Tata","Tiago");
//console.log(myVehicle.make);

//Encapsulation - In js we can do it by adding #, so that that variable is accessible only inside the function.
class BankAccount{
    #accountType = "savings";

    getAccountType() {
        return `${this.#accountType} is your type.`;
    }
}
let newbkAcc = new BankAccount();
//console.log(newbkAcc.getAccountType());

//Abstraction - hode complex implementation details
class CoffeeMachine{
    start() {
        //some complex calc
        return `starting machine`;
    }
    brewCoffee() {
        //some other calc
        return `brewing started`;
    }
    pressStartButton() {
        let msg_One = this.start();
        let msg_Two = this.brewCoffee();
        return `${msg_One}, ${msg_Two}`;
    }
}
let myCoffee = new CoffeeMachine();
//console.log(myCoffee.pressStartButton());

//Polymorphism - more than one form
class Bird {
    fly() {
        return `flying...`;
    }
}
class Penguin extends Bird {
    fly() {
        return `Penguins Can't fly`;
    }
}
class Parrot extends Bird {
    speak() {
        return `Parrots can speak`;
    }
}
let bird = new Bird();
//console.log(bird.fly());
let penguin = new Penguin();
//console.log(penguin.fly());
let parrot = new Parrot();
//console.log(parrot.fly());

//Static Methods -- Cannot be used by using the created instance i.e new keyword, but is accessible directly by dot walking the class
class Calculator {
    static add(a,b) {
        return a+b;
    }
}
let miniCalc = new Calculator();
//console.log(miniCalc.add(2,3));
//console.log(Calculator.add(2,3));

//getters and setters
class EmployeeSalary {
    #salary;                    //made it private..encapsulation
    constructor(name, salary) {
        if(salary < 0){
            throw new Error("Salary cannot be negative");
        }
        this.name = name;
        this.#salary = salary;   
        //It was previoulsy this._salary = salary, the underscore denotes getters and setters are about to come, but since it has limitation,
        //  we use encapsulation to make it leak proof.
    }

    get salary() {
        return `Not authorised to get it.`;
    }
    set salary(salaryAmount) {
        if (salaryAmount < 0) {
            console.error(`Not a valid amount`);
        } else {
            this.#salary = salaryAmount;
        }     
    }
}

let emp = new EmployeeSalary('ram',999999);
//console.log(emp.salary);  //Not authorized
//console.log(emp._salary); //you'll get result
//console.log(emp.salary);
emp.salary = -60000; //it will go inside set method and will say "Not a valid amount"

