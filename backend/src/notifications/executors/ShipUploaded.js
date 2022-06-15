const transportator = require('../transporters');
const { ShipUploaded } = require('../notifications');

const ConfirmUploadToUser = async (email, maker, model) => {
   try {
      transportator(ShipUploaded(email, maker, model));
   } catch (err) {
      console.log(err);
   }
};

module.exports = ConfirmUploadToUser;
