const uploadImage = require('../../controllers/Product/createProduct');
const { Router } = require('express');

const router = Router();

router.post('/upload', uploadImage);

module.exports = router;
