const YachtimeAppConfig = require('./configuration');

const transportator = (MailOptions) => {
   YachtimeAppConfig.sendMail(MailOptions, (err, info) => {
      if (err) {
         console.log(err);
      } else {
         console.log('Email sent to: ', info.accepted);
      }
   });
};

module.exports = transportator;
