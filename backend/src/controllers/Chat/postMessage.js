const { Chat, Users } = require('../../db');

const postMessage = async (req, res) => {
   const { owner, to, message } = req.body;
   try {
      if (!owner || !to || !message) {
         return res.status(400).json({ status: 'sdfgsdfsdfa.' });
      } else {
         const [newMessage] = await Chat.findOrCreate({
            where: {
               to: to,
               message: message,
            },
         });

         const messageOwner = await Users.findOne({ where: { id: owner } });
         console.log(messageOwner);
         await messageOwner.addChat(newMessage);
         return res.json({ status: 'message guardado.' });
      }
   } catch (err) {
      console.log(err);
      return res.json(err);
   }
};

module.exports = postMessage;
