function middlewareDispatcher(req, res, next) {
    switch(req.method) {
        case 'GET':
            console.log('GET middleware');
            return handleGet(req, res, next);
            
        case 'POST':
            console.log('POST middleware');
            return handlePost(req, res, next);
            
        case 'PUT':
            console.log('PUT middleware');
            return handlePut(req, res, next);
            
        case 'DELETE':
            console.log('DELETE middleware');
            return handleDelete(req, res, next);
            
        default:
            console.log('Метод не поддерживается');
            return res.status(405).send('Method Not Allowed');
    }
}

function handleGet(req, res, next) { return 'GET обработан'; }
function handlePost(req, res, next) { return 'POST обработан'; }
function handlePut(req, res, next) { return 'PUT обработан'; }
function handleDelete(req, res, next) { return 'DELETE обработан'; }

console.log("Middleware Dispatcher:");
console.log(middlewareDispatcher({ method: 'GET' }, {}, () => {}));
console.log(middlewareDispatcher({ method: 'POST' }, {}, () => {}));
