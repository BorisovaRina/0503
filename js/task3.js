console.log("Разница между do...while и while:");
console.log("1. while проверяет условие ДО выполнения тела цикла");
console.log("2. do...while проверяет условие ПОСЛЕ выполнения тела цикла");
console.log("3. do...while гарантирует хотя бы одно выполнение тела цикла");

console.log("\nПример while:");
let i = 10;
while (i < 10) {
    console.log("Это не выполнится");
}
console.log("Цикл while не выполнился ни разу");

console.log("\nПример do...while:");
let j = 10;
do {
    console.log("Это выполнится один раз: j =", j);
} while (j < 10);
