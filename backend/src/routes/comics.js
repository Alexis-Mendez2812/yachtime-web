
   const {Router} = require('express');

   const router = Router();

   const {getComics, getById} = require('../controllers/comics.js');


   router.get('/', getComics);
   router.get('/:id', getById);

   module.exports = router;