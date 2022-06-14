const transportator = require('../transporters');
const { MembershipConfirmed } = require('../notifications');

const ConfirmPaymentToUser = async (email, firstName) => {
   try {
      transportator(MembershipConfirmed(email, firstName));
   } catch (err) {
      console.log(err);
   }
};

module.exports = ConfirmPaymentToUser;
