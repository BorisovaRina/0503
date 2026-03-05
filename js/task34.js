function insertionSort(arr) {
    const sorted = [...arr];
    
    for (let i = 1; i < sorted.length; i++) {
        const key = sorted[i];
        let j = i - 1;
        
        while (j >= 0 && sorted[j] > key) {
            sorted[j + 1] = sorted[j];
            j--;
        }
        
        sorted[j + 1] = key;
    }
    
    return sorted;
}

const arr = [12, 11, 13, 5, 6];
console.log("Исходный массив:", arr);
console.log("Отсортированный (Insertion Sort):", insertionSort(arr));
