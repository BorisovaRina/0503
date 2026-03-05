function range(start, end, step = 1) {
    const result = [];
    let current = start;
    
    while (current <= end) {
        result.push(current);
        current += step;
    }
    
    return result;
}

console.log("range(1, 10, 1):", range(1, 10, 1));
console.log("range(0, 20, 5):", range(0, 20, 5));
console.log("range(5, 15, 2):", range(5, 15, 2));
