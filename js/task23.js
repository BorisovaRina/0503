function unique(arr) {
    const result = [];
    for (const x of arr) {
        if (!result.includes(x)) {
            result.push(x);
        }
    }
    return result;
}

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(`Исходный массив: [${arr}]`);
console.log(`Уникальные элементы: [${unique(arr)}]`);
