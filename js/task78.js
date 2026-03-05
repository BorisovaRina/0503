function handleEvent(event) {
    switch(event.type) {
        case 'click':
            console.log(`Клик по элементу: ${event.target}`);
            break;
        case 'mouseover':
            console.log(`Наведение на: ${event.target}`);
            break;
        case 'keydown':
            console.log(`Нажата клавиша: ${event.key}`);
            break;
        case 'submit':
            console.log('Отправка формы');
            break;
        default:
            console.log(`Событие: ${event.type}`);
    }
}

console.log("Симуляция обработки DOM-событий:");
handleEvent({ type: 'click', target: 'button' });
handleEvent({ type: 'mouseover', target: 'div' });
handleEvent({ type: 'keydown', key: 'Enter' });
handleEvent({ type: 'submit' });
