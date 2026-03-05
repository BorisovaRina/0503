function getShapeProperties(shape) {
    switch(shape) {
        case 'circle':
            return { sides: 0, type: 'круг' };
        case 'triangle':
            return { sides: 3, type: 'треугольник' };
        case 'square':
            return { sides: 4, type: 'квадрат' };
        case 'pentagon':
            return { sides: 5, type: 'пятиугольник' };
        case 'hexagon':
            return { sides: 6, type: 'шестиугольник' };
        default:
            return { sides: null, type: 'неизвестная фигура' };
    }
}

console.log("Свойства геометрических фигур:");
['circle', 'triangle', 'square', 'hexagon'].forEach(shape => {
    const props = getShapeProperties(shape);
    console.log(`${props.type}: ${props.sides} сторон`);
});
