function* fib() {
    let a = 0, b = 1;
    
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

console.log("Первые 10 чисел Фибоначчи через генератор:");
const generator = fib();

for (let i = 0; i < 10; i++) {
    console.log(generator.next().value);
}
