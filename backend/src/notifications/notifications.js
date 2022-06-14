/*NUEVO USUARIO*/
const NewUser = (to, firstName) => {
   return {
      from: 'yachtimepass@gmail.com',
      to: `${to}`,
      subject: 'Welcome!',
      text: `Hello ${firstName}!, Welcome to YachtimeApp.`,
   };
};

/*PAGO CONCRETADO*/
const MembershipConfirmed = (to, firstName) => {
   return {
      from: 'yachtimepass@gmail.com',
      to: `${to}`,
      subject: 'YachtimeApp Membership',
      text: `Hello ${firstName}, we are glad to inform that your payment has been successfully completed.`,
   };
};

/*BARCO POSTEADO*/
const ShipUploaded = (to, maker, model) => {
   return {
      from: 'yachtimepass@gmail.com',
      to: `${to}`,
      subject: 'Ship Uploaded!',
      text: `Your ${maker} ${model} has been successfully uploaded. Check it out in https://yachtimeapp.com/userSite/myYacht`,
   };
};

module.exports = { ShipUploaded, MembershipConfirmed, NewUser };
