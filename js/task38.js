function chunk(arr, size) {
    const result = [];
    
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    
    return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Исходный массив:", arr);
console.log("chunk(arr, 3):", JSON.stringify(chunk(arr, 3)));
console.log("chunk(arr, 2):", JSON.stringify(chunk(arr, 2)));
