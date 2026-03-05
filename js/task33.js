function bubbleSort(arr) {
    const n = arr.length;
    const sorted = [...arr];
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sorted[j] > sorted[j + 1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }
    
    return sorted;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Исходный массив:", arr);
console.log("Отсортированный (Bubble Sort):", bubbleSort(arr));
