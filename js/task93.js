function tokenize(code) {
    const tokens = [];
    let i = 0;
    
    while (i < code.length) {
        const char = code[i];
        
        switch(true) {
            case /[a-zA-Z]/.test(char):
                let word = '';
                while (i < code.length && /[a-zA-Z0-9]/.test(code[i])) {
                    word += code[i++];
                }
                tokens.push({ type: 'IDENTIFIER', value: word });
                break;
                
            case /[0-9]/.test(char):
                let num = '';
                while (i < code.length && /[0-9]/.test(code[i])) {
                    num += code[i++];
                }
                tokens.push({ type: 'NUMBER', value: num });
                break;
                
            case char === '+':
            case char === '-':
            case char === '*':
            case char === '/':
                tokens.push({ type: 'OPERATOR', value: char });
                i++;
                break;
                
            case char === ' ':
                i++;
                break;
                
            default:
                tokens.push({ type: 'UNKNOWN', value: char });
                i++;
        }
    }
    
    return tokens;
}

const code = "x = 10 + 20 * 3";
console.log("Токенизация:");
console.log("Код:", code);
console.log("Токены:", JSON.stringify(tokenize(code), null, 2));
