const transportator = require('../transporters');
const { NewUser } = require('../notifications');

const SendEmailToNewUser = async (email, firstName) => {
   try {
      transportator(NewUser(email, firstName));
   } catch (err) {
      console.log(err);
   }
};

module.exports = SendEmailToNewUser;
