function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen1 = numberGenerator();
let gen2 = numberGenerator();

console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen2.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen2.next().value);