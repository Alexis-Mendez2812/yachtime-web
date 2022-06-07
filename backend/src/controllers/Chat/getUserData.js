const { Users } = require('../../db');

const getUserData = async (req, res) => {
   const { email } = req.query;
   try {
      if (email) {
         const data = await Users.findAll({
            where: { email: email },
         });
         if (data) {
            return res.json(data);
         } else {
            return res.status(404).json({ status: 'No se .' });
         }
      } else {
         return res
            .status(404)
            .json({ status: 'Especifique el administrador.' });
      }
   } catch (err) {
      console.log(err);
      return res.json(err);
   }
};

module.exports = getUserData;
