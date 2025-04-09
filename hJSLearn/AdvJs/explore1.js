function greet() {
    console.log("Hello");
}

setTimeout(() => {
    greet();
}, 4000);

for (let index = 0; index < 5; index++) {
    console.log(index);  
}

/*
This is how JS works:

lets say, a normal function and a timer function is used in the code.

The normal function would work as below:
client ---> Call stack->Event loop -->Event loop picks it up and completes it and removes it

The timer function would work as below:
client ---> Call stack->Event loop  -->browser/node/bun/deno->Normal Queue/VIP queue ---> goes back to Call stack 
-->Event loop picks it up and completes it and removes it

*/