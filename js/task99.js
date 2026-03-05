class PluginRegistry {
    constructor() {
        this.plugins = new Map();
    }
    
    register(type, handler) {
        this.plugins.set(type, handler);
    }
    
    execute(type, data) {
        switch(true) {
            case this.plugins.has(type):
                return this.plugins.get(type)(data);
            default:
                throw new Error(`Плагин ${type} не найден`);
        }
    }
}

const registry = new PluginRegistry();

registry.register('logger', data => console.log(`[LOG] ${data}`));
registry.register('validator', data => data.length > 0);
registry.register('transformer', data => data.toUpperCase());

console.log("Plugin Registry:");
registry.execute('logger', 'Hello World');
console.log("Validation:", registry.execute('validator', 'test'));
console.log("Transform:", registry.execute('transformer', 'hello'));
