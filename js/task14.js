const str = "hello world";
const vowels = "aeiouAEIOU";
let count = 0;

for (const ch of str) {
    if (vowels.includes(ch)) {
        count++;
    }
}

console.log(`Строка: "${str}"`);
console.log(`Количество гласных: ${count}`);
