function typeSafeSwitch(value) {
    switch(value) {
        case 'option1':
            return 'Опция 1';
        case 'option2':
            return 'Опция 2';
        case 'option3':
            return 'Опция 3';
        default:
            const exhaustive = value;
            throw new TypeError(`Необработанное значение: ${exhaustive} (тип: ${typeof exhaustive})`);
    }
}

console.log("Type-safe switch:");
try {
    console.log(typeSafeSwitch('option1'));
    console.log(typeSafeSwitch('option2'));
    console.log(typeSafeSwitch('unknown'));
} catch (e) {
    console.error(e.message);
}

console.log("\nВ TypeScript exhaustive проверка гарантирует обработку всех типов");
