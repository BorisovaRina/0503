console.log("Разница между for...of и for...in:\n");

const arr = ['a', 'b', 'c'];

console.log("for...in (перебирает индексы/ключи):");
for (const key in arr) {
    console.log(`Индекс: ${key}, Значение: ${arr[key]}`);
}

console.log("\nfor...of (перебирает значения):");
for (const val of arr) {
    console.log(`Значение: ${val}`);
}

console.log("\nВывод:");
console.log("- for...in используется для объектов (перебирает ключи)");
console.log("- for...of используется для итерируемых объектов (массивы, строки, Map, Set)");
