const { Products } = require('../../db');

const getAllProduct = async (req, res) => {
   try {
      const allYates = await Products.findAll();
      if (allYates) {
         return res.json(allYates);
      } else {
         return res.json({ status: 'No products found.' });
      }
   } catch (err) {
      console.log(err);
      return res.json(err);
   }
};

module.exports = getAllProduct;
