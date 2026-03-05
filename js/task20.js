function repeat(str, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}

const str = "Hello";
const n = 3;
console.log(`repeat("${str}", ${n}) = "${repeat(str, n)}"`);
