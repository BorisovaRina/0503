function commonChars(str1, str2) {
    const common = [];
    const set2 = str2.split('');
    
    for (const ch of str1) {
        if (set2.includes(ch) && !common.includes(ch)) {
            common.push(ch);
        }
    }
    
    return common;
}

const str1 = "hello";
const str2 = "world";

console.log(`Строка 1: "${str1}"`);
console.log(`Строка 2: "${str2}"`);
console.log(`Общие символы: [${commonChars(str1, str2).join(', ')}]`);
