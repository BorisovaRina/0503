function calculate(a, operator, b) {
    switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Деление на ноль';
        case '%':
            return a % b;
        case '**':
            return a ** b;
        default:
            return 'Неизвестная операция';
    }
}

console.log("Калькулятор:");
console.log(`10 + 5 = ${calculate(10, '+', 5)}`);
console.log(`10 - 5 = ${calculate(10, '-', 5)}`);
console.log(`10 * 5 = ${calculate(10, '*', 5)}`);
console.log(`10 / 5 = ${calculate(10, '/', 5)}`);
console.log(`10 % 3 = ${calculate(10, '%', 3)}`);
console.log(`2 ** 8 = ${calculate(2, '**', 8)}`);
