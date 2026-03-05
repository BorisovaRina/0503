function repl(command) {
    const parts = command.split(' ');
    const cmd = parts[0];
    
    switch(cmd) {
        case 'help':
            console.log('Доступные команды: help, echo, add, exit');
            break;
        case 'echo':
            console.log(parts.slice(1).join(' '));
            break;
        case 'add':
            const sum = parts.slice(1).reduce((a, b) => a + Number(b), 0);
            console.log(`Сумма: ${sum}`);
            break;
        case 'exit':
            console.log('Выход...');
            break;
        default:
            console.log(`Неизвестная команда: ${cmd}`);
    }
}

console.log("REPL симулятор:");
['help', 'echo Hello World', 'add 10 20 30', 'exit'].forEach(cmd => {
    console.log(`> ${cmd}`);
    repl(cmd);
});
