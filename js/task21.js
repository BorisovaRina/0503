function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

const str = "Hello World";
console.log(`Исходная строка: "${str}"`);
console.log(`Развёрнутая строка: "${reverseString(str)}"`);
