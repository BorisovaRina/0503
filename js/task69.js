console.log("Сравнение Object lookup и switch:\n");

// Object lookup
const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
};

function calcObject(a, op, b) {
    return operations[op] ? operations[op](a, b) : 'Неизвестная операция';
}

// Switch
function calcSwitch(a, op, b) {
    switch(op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 'Неизвестная операция';
    }
}

console.log("Object lookup: 10 + 5 =", calcObject(10, '+', 5));
console.log("Switch: 10 + 5 =", calcSwitch(10, '+', 5));

console.log("\nObject lookup:");
console.log("+ O(1) хеш-таблица");
console.log("+ Удобно добавлять операции динамически");
console.log("- Может быть медленнее для малого числа case");

console.log("\nSwitch:");
console.log("+ JIT оптимизация (jump table)");
console.log("+ Быстрее для малого числа проверок");
console.log("- Статическая структура");
