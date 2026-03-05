const arr = [1, 2, 3, 4, 5];
let product = 1;

for (const n of arr) {
    product *= n;
}

console.log(`Массив: [${arr}]`);
console.log(`Произведение элементов: ${product}`);
