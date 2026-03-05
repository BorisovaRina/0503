function findFirstGreater(arr, target) {
    for (const x of arr) {
        if (x > target) {
            return x;
        }
    }
    return null;
}

const arr = [1, 3, 5, 7, 9, 11];
const target = 6;
const result = findFirstGreater(arr, target);

console.log(`Массив: [${arr}]`);
console.log(`Target: ${target}`);
console.log(`Первый элемент > ${target}: ${result}`);
