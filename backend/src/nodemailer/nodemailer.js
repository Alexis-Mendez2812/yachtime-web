const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: "yachtimepass@gmail.com",
		pass: "iygufxksbixnhjci",
	},
});

transporter.verify().then(() => {
	console.log("redy to send emails");
});

module.exports = transporter;
