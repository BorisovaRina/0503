function longestUniqueSubstring(str) {
    let maxLen = 0;
    let start = 0;
    const seen = new Map();
    
    for (let end = 0; end < str.length; end++) {
        const char = str[end];
        
        if (seen.has(char) && seen.get(char) >= start) {
            start = seen.get(char) + 1;
        }
        
        seen.set(char, end);
        maxLen = Math.max(maxLen, end - start + 1);
    }
    
    return maxLen;
}

const str = "abcabcbb";
console.log(`Строка: "${str}"`);
console.log(`Длина самой длинной подстроки без повторов: ${longestUniqueSubstring(str)}`);
