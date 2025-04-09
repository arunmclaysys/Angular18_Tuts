let computer = {cpu:2};
let lenovo = {
    screen:"HD",
    __proto__:computer
};
let tomson = {};

//console.log(`computer: `, computer.__proto__);
//console.log('lenovo', lenovo.__proto__);
//console.log('lenovo screen ',lenovo);
let genericCar = {typres:4};
let tesla = {driver:"AI"};
Object.setPrototypeOf(tesla, genericCar);
console.log('tesla', tesla);

//better than dunder - to get additionally injected properties
console.log('tesla aditional properties', Object.getPrototypeOf(tesla));
console.log('generic car aditional properties', Object.getPrototypeOf(genericCar));