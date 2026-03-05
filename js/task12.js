const obj = {a: 1, b: 2, c: 3};
console.log("Перебор объекта с for...in:");
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}
