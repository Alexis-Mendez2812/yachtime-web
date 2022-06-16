const { Users } = require('../../db');
const SendEmailToNewUser = require('../../notifications/executors/NewUser');

const postNewUser = async (req, res) => {
   const { firstName, lastName, username, password, email } = req.body;
   try {
      if ((firstName, lastName, username, password, email)) {
         await Users.findOrCreate({
            where: {
               firtsName: firstName,
               lastName,
               userName: username,
               password,
               email,
               role: 'ROLE_USER',
            },
         });
         SendEmailToNewUser(email, firstName);
         return res.json({ status: true });
      } else {
         return res.json({ status: false });
      }
   } catch (err) {
      console.log(err);
      return res.json({ status: false });
   }
};

module.exports = postNewUser;
