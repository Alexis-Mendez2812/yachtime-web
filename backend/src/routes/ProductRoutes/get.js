const allYates = require('../../controllers/Product/getAllProduct');
const { Router } = require('express');

const router = Router();

router.get('/all', allYates);

module.exports = router;
