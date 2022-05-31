const { Router } = require("express");
const axios = require("axios");
const { Users, Products } = require(`../db`);
// const main = require("../controllers/mailer");
const{botes} = require("../yates.json");
const router = Router();

// let comicsDb = await Comics.findAll({order: [['updatedAt', 'DESC']]});
//USERS

router.post("/", async (req, res) => {
	try {
		const {
			make,
			model,
			year,
			cabins,
			bathrooms,
			guest,
			length,
			beam,
			draft,
			fuelCapacity,
			waterCapacity,
			cruiseVel,
			location,
			fuelType,
			description,
			pictures,
		} = req.body;
		const product = await Products.findOrCreate({
			where: {
			make,
			model,
			year,
			cabins,
			bathrooms,
			guest,
			length,
			beam,
			draft,
			fuelCapacity,
			waterCapacity,
			cruiseVel,
			location,
			fuelType,
			description,
			pictures,
			},
		});




		return res.status(201).json(product);
	} catch (error) {
		console.log(error, "algo pasó con el post del product chequea los campos");
		return res
			.status(200)
			.json({
				mensaje: "algo pasó con el post del product chequea los campos",
			});
	}
});
router.get("/cargafull", async (req, res) => {
	try {
		
	const [yates,created] =	botes.forEach(async (e) => { await Products.findOrCreate({
			where: {
			make:e.make,
			model:e.model,
			year:e.year,
			cabins:e.cabins,
			bathrooms:e.bathrooms,
			guests:e.guests,
			length:e.length,
			beam:e.beam,
			draft:e.draft,
			fuelCapacity:e.fuelCapacity,
			waterCapacity:e.waterCapacity,
			cruiseVel:e.cruiseVel,
			location:e.location,
			fuelType:e.fuelType,
			description:e.description,
			pictures:e.pictures,
			},
		});})
	



		return res.status(201).json(yates,created);
	} catch (error) {
		console.log(error, "algo pasó con el post del cargafull chequea los campos");
		return res
			.status(500)
			.json({
				mensaje: "algo pasó con el post del cargafull chequea los campos",
			});
	}
});
router.put("/profile", async (req, res) => {
	const { email } = req.body;

	try {
		console.log(email);
		const user = await Users.findOne({
			where: {
				email: email,
			},
		});
		console.log(email);
		console.log(user);
		//const { email, firtsName, lastName, userName, picture, password } = req.body;
		await user.update({
			email: req.body.email,
			firtsName: req.body.firtsName,
			lastName: req.body.lastName,
			userName: req.body.userName,
			password: req.body.password,
			picture: req.body.picture,
		});

		return res.status(201).json("Actualizacion exitosa");
	} catch (error) {
		console.log(error, "error en la ruta put /profile");
	}
});


router.get("/json", async (req, res) => {

	try {
		
		return res.status(200).json(botes);
	} catch (error) {
		console.log(error);
	}
});

router.post("/favorites", async (req, res) => {
	const { email, idProducts } = req.body;

	try {
		console.log(email);
		const user = await Users.findOne({
			include: Products,
			where: {
				email: email,
			},
		});
		console.log("soy idProducts", idProducts);
		user.setComics(idProducts);

		return res.status(200).send(user.Products);
	} catch (error) {
		console.log(error, "error en la ruta post/favorites");
	}
});

router.get("/favorites", async (req, res) => {
	const { email } = req.params;

	try {
		console.log(email);
		const favorites = await Users.findOne({
			include: Products,
			where: {
				email: email,
			},
		});
		console.log(favorites);
		return res.status(200).send(favorites.Products);
	} catch (error) {
		console.log(error, "error en la ruta get/favorites");
	}
});

//ADMIN

router.get("/all", async (req, res) => {
	try {
		const products = await Products.findAll();
		return res.status(200).json(products);
	} catch (error) {
		console.log(error);
	}
});

//ACTUALIZAR A USUARIO PAGO

router.put("/payment", async (req, res) => {
	const { email } = req.body;

	try {
		console.log(email);
		const user = await Users.findOne({
			where: {
				email: email,
			},
		});
		console.log(email);
		console.log(user);
		//const { email, firtsName, lastName, userName, picture, password } = req.body;
		user.update({ role: "ROLE_PRIME" });

		return res.status(201).json("Actualizacion de pago exitosa");
	} catch (error) {
		console.log(error, "error en la ruta put /payment");
	}
});
//DAR PERMISOS

router.put("/authorize", async (req, res) => {
	const { email } = req.body;

	try {
		console.log(email);
		const user = await Users.findOne({
			where: {
				email: email,
			},
		});
		console.log(email);
		console.log(user);
		//const { email, firtsName, lastName, userName, picture, password } = req.body;
		await user.update({
			role: "ROLE_ADMIN",
		});

		return res.status(201).json("Actualizacion de permisos exitosa");
	} catch (error) {
		console.log(error, "error en la ruta put /authorize");
	}
});
//QUITAR PERMISOS

router.put("/desauthorize", async (req, res) => {
	const { email } = req.body;

	try {
		console.log(email);
		const user = await Users.findOne({
			where: {
				email: email,
			},
		});
		console.log(email);
		console.log(user);
		//const { email, firtsName, lastName, userName, picture, password } = req.body;
		await user.update({
			role: "ROLE_USER",
		});

		return res.status(201).json("Actualizacion de permisos exitosa");
	} catch (error) {
		console.log(error, "error en la ruta put /desauthorize");
	}
});
//BANEAR USUARIO

router.put("/banned", async (req, res) => {
	const { email } = req.body;

	try {
		console.log(email);
		const user = await Users.findOne({
			where: {
				email: email,
			},
		});
		console.log(email);
		console.log(user);
		//const { email, firtsName, lastName, userName, picture, password } = req.body;
		await user.update({
			role: "ROLE_BANNED",
		});

		return res.status(201).json("Actualizacion de baneo exitosa");
	} catch (error) {
		console.log(error, "error en la ruta put /banned");
	}
});

router.get("/:email", async (req, res) => {
	const { email } = req.params;

	try {
		console.log(email);
		const user = await Users.findOne({
			where: {
				email: email,
			},
		});
		return res.status(201).json(user);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
