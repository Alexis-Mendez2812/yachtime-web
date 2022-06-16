const uploadImage = require('../../controllers/Product/createProduct');
const uploadImageEdit = require('../../controllers/Product/editProduct');
const postNewUser = require('../../controllers/Users/postNewUser');
const loginUser = require('../../controllers/Users/loginUser');
const { Router } = require('express');

const router = Router();

router.post('/upload', uploadImage);
router.post('/edit', uploadImageEdit);
router.post('/user', postNewUser);
router.post('/loguser', loginUser);

module.exports = router;
