function tokenize(input) {
    const tokens = [];
    const chars = input.split('');
    
    for (const char of chars) {
        switch(char) {
            case '+':
            case '-':
            case '*':
            case '/':
                tokens.push({ type: 'OPERATOR', value: char });
                break;
            case '(':
            case ')':
                tokens.push({ type: 'PAREN', value: char });
                break;
            case ' ':
                // Пропускаем пробелы
                break;
            default:
                if (/[0-9]/.test(char)) {
                    tokens.push({ type: 'NUMBER', value: char });
                } else {
                    tokens.push({ type: 'UNKNOWN', value: char });
                }
        }
    }
    
    return tokens;
}

const expression = "2 + 3 * (4 - 1)";
console.log("Выражение:", expression);
console.log("Токены:", JSON.stringify(tokenize(expression), null, 2));
