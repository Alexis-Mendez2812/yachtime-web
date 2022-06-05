const { Chat } = require('../../db');

const getMessages = async (req, res) => {
   const { owner, receptor } = req.query;
   try {
      if (owner) {
         const allOwnerMessages = await Chat.findAll({
            where: { UserId: owner },
         });
         const allReceptorMessages = await Chat.findAll({
            where: { UserId: receptor },
         });
         let union;
         if (allOwnerMessages && allReceptorMessages) {
            union = { allOwnerMessages, allReceptorMessages };
         } else if (!allOwnerMessages) {
            union = { allReceptorMessages };
         } else {
            union = { allOwnerMessages };
         }

         return res.json(union);
      } else {
         return res
            .status(404)
            .json({ status: 'Especifique el dueño de los mensajes.' });
      }
   } catch (err) {
      console.log(err);
      return res.json(err);
   }
};

module.exports = getMessages;
