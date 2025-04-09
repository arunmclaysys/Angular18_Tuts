function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return `My name is ${this.name}.`;
}

let newPerson = new Person("Ram");
console.log(newPerson.greet());


//PrototypalInheritance is availabe for functions, arrays, objects etc.