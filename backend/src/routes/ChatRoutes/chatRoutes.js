const router = require('express').Router();
const getMessages = require('../../controllers/Chat/getMessages');
const postMessage = require('../../controllers/Chat/postMessage');

router.post('/', postMessage);
router.get('/', getMessages);

module.exports = router;
