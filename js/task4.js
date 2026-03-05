console.log("Симуляция ввода чисел до получения числа >= 10");
let x = 0;
let attempts = 0;
const testValues = [3, 5, 7, 12];

do {
    x = testValues[attempts] || 12;
    console.log(`Попытка ${attempts + 1}: введено число ${x}`);
    attempts++;
} while (x < 10);

console.log(`Получено число >= 10: ${x}`);
