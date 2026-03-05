function exhaustiveSwitch(value) {
    switch(value) {
        case 'option1':
            return 'Опция 1';
        case 'option2':
            return 'Опция 2';
        case 'option3':
            return 'Опция 3';
        default:
            throw new Error(`Необработанное значение: ${value}`);
    }
}

console.log("Exhaustive switch (обязательная обработка всех случаев):");
try {
    console.log(exhaustiveSwitch('option1'));
    console.log(exhaustiveSwitch('option2'));
    console.log(exhaustiveSwitch('unknown'));
} catch (e) {
    console.error('Ошибка:', e.message);
}

console.log("\nExhaustive switch гарантирует обработку всех возможных значений");
console.log("В TypeScript это помогает при type checking");
