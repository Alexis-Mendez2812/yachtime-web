const { Chat } = require('../../db');

const getAllChats = async (req, res) => {
   const { to } = req.query;
   console.log('SI ENTRA');
   try {
      if (to) {
         const allMyChats = await Chat.findAll({
            where: { to: to },
         });
         if (allMyChats) {
            return res.json(allMyChats);
         } else {
            return res.status(404).json({ status: 'No se encontraron chats.' });
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

module.exports = getAllChats;
