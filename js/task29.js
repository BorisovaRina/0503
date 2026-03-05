function countOccurrences(arr, val) {
    let count = 0;
    for (const x of arr) {
        if (x === val) {
            count++;
        }
    }
    return count;
}

const arr = [1, 2, 3, 2, 4, 2, 5];
const val = 2;

console.log(`Массив: [${arr}]`);
console.log(`Значение: ${val}`);
console.log(`Количество вхождений: ${countOccurrences(arr, val)}`);
