console.log("Сравнение switch и if-else:\n");

console.log("Преимущества switch:");
console.log("1. Более читаемый для множественных проверок на равенство");
console.log("2. JIT-компиляторы могут оптимизировать в jump table");
console.log("3. Меньше повторений (не нужно писать переменную каждый раз)");

console.log("\nПреимущества if-else:");
console.log("1. Поддерживает сложные условия (>, <, &&, ||)");
console.log("2. Может использовать разные переменные в каждом условии");
console.log("3. Более гибкий");

console.log("\nПример switch:");
const value = 2;
switch(value) {
    case 1: console.log("Один"); break;
    case 2: console.log("Два"); break;
    case 3: console.log("Три"); break;
}

console.log("\nАналогичный if-else:");
if (value === 1) console.log("Один");
else if (value === 2) console.log("Два");
else if (value === 3) console.log("Три");
