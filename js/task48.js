function slidingWindowMax(arr, k) {
    const result = [];
    
    for (let i = 0; i <= arr.length - k; i++) {
        let max = arr[i];
        
        for (let j = i; j < i + k; j++) {
            if (arr[j] > max) {
                max = arr[j];
            }
        }
        
        result.push(max);
    }
    
    return result;
}

const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;

console.log(`Массив: [${arr}]`);
console.log(`k = ${k}`);
console.log(`Максимумы в скользящем окне: [${slidingWindowMax(arr, k)}]`);
