function processCommand(cmd) {
    switch(cmd) {
        case 'start':
            return 'Запуск...';
        case 'stop':
            return 'Остановка...';
        default:
            return 'Неизвестная команда';
    }
}

console.log("Обработка команд:");
console.log(processCommand('start'));
console.log(processCommand('stop'));
console.log(processCommand('pause'));
console.log(processCommand('unknown'));

console.log("\ndefault в switch - это аналог else в if-else");
console.log("Выполняется, когда ни один case не подошёл");
