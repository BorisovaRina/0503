function permutations(arr) {
    if (arr.length <= 1) return [arr];
    
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
        const perms = permutations(remaining);
        
        for (const perm of perms) {
            result.push([current, ...perm]);
        }
    }
    
    return result;
}

const arr = [1, 2, 3];
console.log("Массив:", arr);
console.log("Все перестановки:");
console.log(JSON.stringify(permutations(arr)));
