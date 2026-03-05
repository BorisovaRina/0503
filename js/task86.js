class EventBus {
    constructor() {
        this.handlers = {
            userLogin: [],
            userLogout: [],
            dataFetch: [],
            dataError: []
        };
    }
    
    on(event, handler) {
        if (this.handlers[event]) {
            this.handlers[event].push(handler);
        }
    }
    
    emit(event, data) {
        switch(event) {
            case 'userLogin':
                console.log(`🔐 Событие: ${event}`);
                this.handlers.userLogin.forEach(h => h(data));
                break;
            case 'userLogout':
                console.log(`🚪 Событие: ${event}`);
                this.handlers.userLogout.forEach(h => h(data));
                break;
            case 'dataFetch':
                console.log(`📥 Событие: ${event}`);
                this.handlers.dataFetch.forEach(h => h(data));
                break;
            case 'dataError':
                console.log(`❌ Событие: ${event}`);
                this.handlers.dataError.forEach(h => h(data));
                break;
            default:
                console.log(`⚠ Неизвестное событие: ${event}`);
        }
    }
}

const bus = new EventBus();
bus.on('userLogin', user => console.log(`  Пользователь вошёл: ${user}`));
bus.on('dataFetch', data => console.log(`  Данные получены: ${data}`));

console.log("Event Bus:");
bus.emit('userLogin', 'admin');
bus.emit('dataFetch', 'users.json');
