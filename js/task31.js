function zip(arr1, arr2) {
    const result = [];
    const len = Math.min(arr1.length, arr2.length);
    
    for (let i = 0; i < len; i++) {
        result.push([arr1[i], arr2[i]]);
    }
    
    return result;
}

const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

console.log("Массив 1:", arr1);
console.log("Массив 2:", arr2);
console.log("Результат zip:", JSON.stringify(zip(arr1, arr2)));
