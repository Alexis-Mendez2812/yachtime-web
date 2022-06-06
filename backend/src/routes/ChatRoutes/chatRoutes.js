const router = require('express').Router();
const postMessage = require('../../controllers/Chat/postMessage');
const getMessages = require('../../controllers/Chat/getMessages');
const getAllChats = require('../../controllers/Chat/getAllChats');

router.post('/', postMessage);
router.get('/all', getAllChats);
router.get('/', getMessages);

module.exports = router;
