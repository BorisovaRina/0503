function flatten(arr, depth = 1) {
    const result = [];
    
    for (const item of arr) {
        if (Array.isArray(item) && depth > 0) {
            result.push(...flatten(item, depth - 1));
        } else {
            result.push(item);
        }
    }
    
    return result;
}

const nested = [1, [2, [3, [4]], 5]];
console.log("Исходный массив:", JSON.stringify(nested));
console.log("flatten(arr, 1):", flatten(nested, 1));
console.log("flatten(arr, 2):", flatten(nested, 2));
console.log("flatten(arr, Infinity):", flatten(nested, Infinity));
