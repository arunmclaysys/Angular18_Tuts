// const person = (name) => {
//     this.name = name,
//     function greet () {
//         console.log(`The name is ${this.name}.`);
//     }
// };

// person.greet();

const person =  {
        name : "Ram",
        greet () {
            console.log(`The name is ${this.name}.`);
        }
    };
    
person.greet();

//But if u trasfer it to another const, the context is chaged/forgotten
const anotherPerson = person.greet;
anotherPerson();

//in order to fix the context, use "bind" method
const secondPerson = person.greet.bind({name : "Hanuman"});
secondPerson();

//also try bind, call and apply

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);
console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);
console.log(min);
// Expected output: 2

//other way is using sperad operator [...]
const max1 = Math.max(...numbers);
console.log(max1);

function Product(name, price, energyval) {
    this.name = name;
    this.price = price;
    this.energyval = energyval;
  }
  
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = "food";
  }
  
  console.log(new Food("cheese", 5).name);
  // Expected output: "cheese"