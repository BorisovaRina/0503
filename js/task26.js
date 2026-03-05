function flatten(arr) {
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            for (const subItem of item) {
                result.push(subItem);
            }
        } else {
            result.push(item);
        }
    }
    return result;
}

const nested = [[1, 2], [3, 4], [5]];
console.log("Исходный массив:", JSON.stringify(nested));
console.log("Развёрнутый массив:", flatten(nested));
