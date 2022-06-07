const router = require('express').Router();
const postMessage = require('../../controllers/Chat/postMessage');
const getMessages = require('../../controllers/Chat/getMessages');
const getAllChats = require('../../controllers/Chat/getAllChats');
const getUserData = require('../../controllers/Chat/getUserData');

router.post('/', postMessage);
router.get('/data', getUserData);
router.get('/all', getAllChats);
router.get('/', getMessages);

module.exports = router;
