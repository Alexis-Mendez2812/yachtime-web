const { Router } = require('express');
// Importar todos los routers;

const users = require('./users.js');
const products = require('./products.js');


const router = Router();

// Configurar los routers

router.use('/products', products);
router.use('/users', users);

module.exports = router;
