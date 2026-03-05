function calculateArea(shape) {
    switch(shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
            
        case 'rectangle':
            return shape.width * shape.height;
            
        case 'triangle':
            return (shape.base * shape.height) / 2;
            
        default:
            throw new Error('Неизвестная фигура');
    }
}

const shapes = [
    { kind: 'circle', radius: 5 },
    { kind: 'rectangle', width: 4, height: 6 },
    { kind: 'triangle', base: 3, height: 4 }
];

console.log("Tagged Union (Discriminated Union):");
shapes.forEach(shape => {
    console.log(`${shape.kind}: площадь = ${calculateArea(shape).toFixed(2)}`);
});
