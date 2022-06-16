const { Users } = require('../../db');

const loginUser = async (req, res) => {
   const { email, password } = req.body;
   try {
      if ((email, password)) {
         const usuario = await Users.findOne({
            where: {
               email: email,
            },
         });
         if (!usuario) {
            return res.json({ status: false });
         }
         if (usuario.password === password) {
            return res.json({ status: true });
         }
         return res.json({ status: false });
      } else {
         return res.json({ status: false });
      }
   } catch (err) {
      console.log(err);
      return res.json({ status: false });
   }
};

module.exports = loginUser;
