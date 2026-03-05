function handleKeyPress(key) {
    switch(key) {
        case 'ArrowUp':
            console.log('⬆ Движение вверх');
            break;
        case 'ArrowDown':
            console.log('⬇ Движение вниз');
            break;
        case 'ArrowLeft':
            console.log('⬅ Движение влево');
            break;
        case 'ArrowRight':
            console.log('➡ Движение вправо');
            break;
        case 'Enter':
            console.log('✓ Подтверждение');
            break;
        case 'Escape':
            console.log('✕ Отмена');
            break;
        default:
            console.log(`Клавиша: ${key}`);
    }
}

console.log("Обработка клавиш:");
['ArrowUp', 'ArrowDown', 'Enter', 'Escape'].forEach(key => {
    handleKeyPress(key);
});
