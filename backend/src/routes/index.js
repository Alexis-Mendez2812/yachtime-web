const { Router } = require('express');
// Importar todos los routers;

const users = require('./users.js');
const products = require('./products.js');
const api = require('./api.js');


const router = Router();

// Configurar los routers

router.use('/api', api);
router.use('/products', products);
router.use('/users', users);

module.exports = router;
