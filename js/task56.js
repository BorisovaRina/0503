function executeCommand(cmd) {
    switch(cmd) {
        case 'start':
            console.log('▶ Запуск процесса...');
            break;
        case 'stop':
            console.log('■ Остановка процесса...');
            break;
        case 'pause':
            console.log('⏸ Пауза...');
            break;
        case 'resume':
            console.log('▶ Возобновление...');
            break;
        default:
            console.log('❌ Неизвестная команда:', cmd);
    }
}

console.log("Выполнение команд:");
['start', 'pause', 'resume', 'stop', 'unknown'].forEach(cmd => {
    executeCommand(cmd);
});
