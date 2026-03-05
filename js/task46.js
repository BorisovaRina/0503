function takeWhile(arr, predicate) {
    const result = [];
    
    for (const x of arr) {
        if (!predicate(x)) break;
        result.push(x);
    }
    
    return result;
}

function dropWhile(arr, predicate) {
    const result = [];
    let dropping = true;
    
    for (const x of arr) {
        if (dropping && predicate(x)) continue;
        dropping = false;
        result.push(x);
    }
    
    return result;
}

const arr = [1, 2, 3, 4, 5, 6];
console.log("Массив:", arr);
console.log("takeWhile(x => x < 4):", takeWhile(arr, x => x < 4));
console.log("dropWhile(x => x < 4):", dropWhile(arr, x => x < 4));
