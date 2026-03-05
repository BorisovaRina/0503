function groupBy(arr, fn) {
    const result = {};
    
    for (const x of arr) {
        const key = fn(x);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(x);
    }
    
    return result;
}

const arr = [1.2, 2.3, 2.8, 3.1, 3.9];
const grouped = groupBy(arr, x => Math.floor(x));

console.log("Исходный массив:", arr);
console.log("Группировка по Math.floor:");
console.log(grouped);
