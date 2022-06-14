const nodemailer = require('nodemailer');

const YachtimeAppConfig = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      user: 'yachtimeappcrew@gmail.com',
      pass: 'hemiopzzrfqnomhz',
   },
});

module.exports = YachtimeAppConfig;
