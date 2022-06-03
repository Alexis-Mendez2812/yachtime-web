const deleteProduct = require('../../controllers/Product/deleteProduct');
const { Router } = require('express');

const router = Router();

router.put('/', deleteProduct);

module.exports = router;
