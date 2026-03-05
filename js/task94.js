function visit(node) {
    switch(node.type) {
        case 'Literal':
            return visitLiteral(node);
            
        case 'BinaryExpression':
            return visitBinaryExpression(node);
            
        case 'UnaryExpression':
            return visitUnaryExpression(node);
            
        case 'Identifier':
            return visitIdentifier(node);
            
        default:
            throw new Error(`Неизвестный тип узла: ${node.type}`);
    }
}

function visitLiteral(node) {
    return `Literal(${node.value})`;
}

function visitBinaryExpression(node) {
    const left = visit(node.left);
    const right = visit(node.right);
    return `(${left} ${node.operator} ${right})`;
}

function visitUnaryExpression(node) {
    const arg = visit(node.argument);
    return `${node.operator}${arg}`;
}

function visitIdentifier(node) {
    return node.name;
}

const ast = {
    type: 'BinaryExpression',
    operator: '+',
    left: { type: 'Literal', value: 5 },
    right: { type: 'Identifier', name: 'x' }
};

console.log("Visitor Pattern:");
console.log(visit(ast));
