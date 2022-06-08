const uploadImage = require('../../controllers/Product/createProduct');
const uploadImageEdit = require('../../controllers/Product/editProduct');
const { Router } = require('express');

const router = Router();

router.post('/upload', uploadImage);
router.post('/edit', uploadImageEdit);

module.exports = router;
