const { Chat, Users } = require('../../db');

const postMessage = async (req, res) => {
   const { owner, to, messages } = req.body;
   try {
      if (!owner || !to || !messages || messages.length === 0) {
         return res.status(400).json({ status: 'No hay datos.' });
      } else {
         messages.forEach(async (m) => {
            const [newMessage] = await Chat.findOrCreate({
               where: {
                  to: to,
                  message: m,
               },
            });
            const messageOwner = await Users.findOne({ where: { id: owner } });
            await messageOwner.addChat(newMessage);
         });

         return res.json({ status: 'message guardado.' });
      }
   } catch (err) {
      console.log(err);
      return res.json(err);
   }
};

module.exports = postMessage;
