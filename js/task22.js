function findMax(arr) {
    let max = arr[0];
    for (const x of arr) {
        if (x > max) {
            max = x;
        }
    }
    return max;
}

const arr = [3, 7, 2, 9, 1, 5];
console.log(`Массив: [${arr}]`);
console.log(`Максимальный элемент: ${findMax(arr)}`);
