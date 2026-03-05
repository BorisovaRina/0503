function evaluate(node) {
    switch(node.type) {
        case 'Literal':
            return node.value;
            
        case 'BinaryExpression':
            const left = evaluate(node.left);
            const right = evaluate(node.right);
            
            switch(node.operator) {
                case '+': return left + right;
                case '-': return left - right;
                case '*': return left * right;
                case '/': return left / right;
                default: throw new Error('Неизвестный оператор');
            }
            
        case 'UnaryExpression':
            const arg = evaluate(node.argument);
            switch(node.operator) {
                case '-': return -arg;
                case '+': return +arg;
                default: throw new Error('Неизвестный унарный оператор');
            }
            
        default:
            throw new Error('Неизвестный тип узла');
    }
}

const ast = {
    type: 'BinaryExpression',
    operator: '+',
    left: { type: 'Literal', value: 5 },
    right: {
        type: 'BinaryExpression',
        operator: '*',
        left: { type: 'Literal', value: 3 },
        right: { type: 'Literal', value: 4 }
    }
};

console.log("AST интерпретатор:");
console.log("AST:", JSON.stringify(ast, null, 2));
console.log("Результат: 5 + (3 * 4) =", evaluate(ast));
