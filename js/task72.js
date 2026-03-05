function router(path) {
    switch(path) {
        case '/':
            return 'Главная страница';
        case '/about':
            return 'О нас';
        case '/contact':
            return 'Контакты';
        case '/products':
            return 'Каталог товаров';
        case '/cart':
            return 'Корзина';
        default:
            return '404 - Страница не найдена';
    }
}

console.log("Маршрутизация:");
['/', '/about', '/products', '/unknown'].forEach(path => {
    console.log(`${path} → ${router(path)}`);
});
