const commands = {
    add: { execute: (a, b) => a + b },
    subtract: { execute: (a, b) => a - b },
    multiply: { execute: (a, b) => a * b },
    divide: { execute: (a, b) => a / b }
};

function executeCommand(type, a, b) {
    switch(type) {
        case 'add':
            return commands.add.execute(a, b);
        case 'subtract':
            return commands.subtract.execute(a, b);
        case 'multiply':
            return commands.multiply.execute(a, b);
        case 'divide':
            return commands.divide.execute(a, b);
        default:
            throw new Error('Неизвестная команда');
    }
}

console.log("Command Pattern:");
console.log("add(10, 5) =", executeCommand('add', 10, 5));
console.log("multiply(10, 5) =", executeCommand('multiply', 10, 5));
console.log("divide(10, 5) =", executeCommand('divide', 10, 5));
