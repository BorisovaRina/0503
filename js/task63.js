function factorialSwitch(n) {
    switch(n) {
        case 0:
        case 1:
            return 1;
        default:
            let result = 1;
            for (let i = 2; i <= n; i++) {
                result *= i;
            }
            return result;
    }
}

console.log("Факториалы с использованием switch:");
for (let i = 0; i <= 6; i++) {
    console.log(`${i}! = ${factorialSwitch(i)}`);
}
