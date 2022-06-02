const { Router } = require('express');
// Importar todos los routers;

const users = require('./users.js');
const products = require('./products.js');
// const api = require('./api.js');
const cloudinaryRoutes = require('./CloudinaryRoutes/uploadRoute');

const router = Router();

// Configurar los routers

router.use('/api', cloudinaryRoutes);
router.use('/products', products);
router.use('/users', users);

module.exports = router;
