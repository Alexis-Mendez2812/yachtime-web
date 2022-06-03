const { Router } = require('express');
// Importar todos los routers;

const users = require('./users.js');
const products = require('./products.js');
const getProductRoutes = require('./ProductRoutes/get');
const deleteProductRoutes = require('./ProductRoutes/delete');
const cloudinaryRoutes = require('./PostForm/uploadRoute');

const router = Router();

// Configurar los routers
router.use('/delete', deleteProductRoutes);
router.use('/product', getProductRoutes);

router.use('/api', cloudinaryRoutes);
router.use('/products', products);
router.use('/users', users);

module.exports = router;
