function rpnCalculator(expression) {
    const stack = [];
    const tokens = expression.split(' ');
    
    for (const token of tokens) {
        switch(token) {
            case '+':
                stack.push(stack.pop() + stack.pop());
                break;
            case '-':
                const b = stack.pop();
                const a = stack.pop();
                stack.push(a - b);
                break;
            case '*':
                stack.push(stack.pop() * stack.pop());
                break;
            case '/':
                const divisor = stack.pop();
                const dividend = stack.pop();
                stack.push(dividend / divisor);
                break;
            default:
                stack.push(Number(token));
        }
    }
    
    return stack[0];
}

console.log("RPN (обратная польская нотация) калькулятор:");
console.log("3 4 + =", rpnCalculator("3 4 +"));
console.log("5 1 2 + 4 * + 3 - =", rpnCalculator("5 1 2 + 4 * + 3 -"));
console.log("15 7 1 1 + - / 3 * 2 1 1 + + - =", rpnCalculator("15 7 1 1 + - / 3 * 2 1 1 + + -"));
