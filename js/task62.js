function getHTTPStatusMessage(status) {
    switch(status) {
        case 200:
            return 'OK - Успешный запрос';
        case 201:
            return 'Created - Ресурс создан';
        case 400:
            return 'Bad Request - Неверный запрос';
        case 401:
            return 'Unauthorized - Требуется авторизация';
        case 403:
            return 'Forbidden - Доступ запрещён';
        case 404:
            return 'Not Found - Ресурс не найден';
        case 500:
            return 'Internal Server Error - Ошибка сервера';
        case 503:
            return 'Service Unavailable - Сервис недоступен';
        default:
            return `Статус ${status}`;
    }
}

console.log("HTTP-статусы:");
[200, 404, 500, 201, 403].forEach(status => {
    console.log(`${status}: ${getHTTPStatusMessage(status)}`);
});
