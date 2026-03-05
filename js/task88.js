const TYPE_A = Symbol('A');
const TYPE_B = Symbol('B');
const TYPE_C = Symbol('C');

function processType(type) {
    switch(type) {
        case TYPE_A:
            return 'Обработка типа A';
        case TYPE_B:
            return 'Обработка типа B';
        case TYPE_C:
            return 'Обработка типа C';
        default:
            return 'Неизвестный тип';
    }
}

console.log("Использование Symbol в switch:");
console.log(processType(TYPE_A));
console.log(processType(TYPE_B));
console.log(processType(TYPE_C));
console.log(processType(Symbol('A'))); // Не совпадёт!

console.log("\nSymbol гарантирует уникальность значений");
console.log("Даже Symbol('A') !== Symbol('A')");
