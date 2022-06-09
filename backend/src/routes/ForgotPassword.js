//   ruta -> :3001/forgot-password

const { Router } = require("express");
const router = Router();
const { Users } = require(`../db`);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const transporter = require("../nodemailer/mailerConfig");

router.post("/", async (req, res) => {
	const { email } = req.body;
	const user = await Users.findOne({ where: { email: email } });

	if (!user) {
		return res.status(200).json({ ok: false, msg: "email not found" });
	}

	const token = jwt.sign({ userID: user.id }, process.env.JWT_SECRET, {
		expiresIn: "3m",
	});
	const verifyLink = `http://127.0.0.1:3000/new-password/${token}`;
	try {
		await transporter.sendMail({
			from: "Forgot Password <yachtimeapp.com>",
			to: `${email}`,
			subject: "Renew your password",
			html: `<p>Hola para restablecer tu contraseña has click en el siguiente enlace</p><a href="${verifyLink}">${verifyLink}</a>`,
		});

		res.status(200).json({ ok: true, msg: "email enviado" });
	} catch (error) {
		console.log(error);
	}
});

router.put("/", async (req, res) => {
	const { token, newPassword } = req.body;
	try {
		const { userID } = jwt.verify(token, process.env.JWT_SECRET);
		await Users.update(
			{
				password: newPassword,
			},
			{
				where: { id: userID },
			}
		);
		res.status(200).json({
			ok: true,
			msg: "cambio de contraseña exitosa!",
		});
	} catch (error) {
		res.status(200).json({ ok: false, msg: "token expired" });
		console.log(error);
	}
});

module.exports = router;
