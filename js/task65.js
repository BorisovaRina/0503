function processAction(category, action) {
    switch(category) {
        case 'user':
            switch(action) {
                case 'create':
                    return 'Создание пользователя';
                case 'delete':
                    return 'Удаление пользователя';
                case 'update':
                    return 'Обновление пользователя';
                default:
                    return 'Неизвестное действие с пользователем';
            }
        case 'post':
            switch(action) {
                case 'create':
                    return 'Создание поста';
                case 'delete':
                    return 'Удаление поста';
                default:
                    return 'Неизвестное действие с постом';
            }
        default:
            return 'Неизвестная категория';
    }
}

console.log("Вложенный switch:");
console.log(processAction('user', 'create'));
console.log(processAction('user', 'delete'));
console.log(processAction('post', 'create'));
console.log(processAction('comment', 'create'));
