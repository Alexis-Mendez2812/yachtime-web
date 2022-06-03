const { Products } = require('../../db');

const deleteProduct = async (req, res) => {
   const { id } = req.query;
   try {
      if (id) {
         await Products.destroy({ where: { id: id } });
         return res.json({ status: 'Successfully deleted.' });
      } else {
         return res.json({ status: 'NOT NAME' });
      }
   } catch (err) {
      console.log(err);
      return res.json(err);
   }
};

module.exports = deleteProduct;
