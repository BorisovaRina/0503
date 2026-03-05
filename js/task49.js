function twoSum(arr, target) {
    const map = new Map();
    
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(arr[i], i);
    }
    
    return null;
}

const arr = [2, 7, 11, 15];
const target = 9;

console.log(`Массив: [${arr}]`);
console.log(`Target: ${target}`);
console.log(`Индексы: [${twoSum(arr, target)}]`);
console.log(`Значения: ${arr[0]} + ${arr[1]} = ${target}`);
