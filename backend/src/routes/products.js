const { Router } = require("express");
const axios = require("axios");
const { Users, Products } = require(`../db`);
// const main = require("../controllers/mailer");
const { botes } = require("../yates.json");
const router = Router();

// let comicsDb = await Comics.findAll({order: [['updatedAt', 'DESC']]});
//USERS

router.get("/cargafull", async (req, res) => {
	try {
		let yates = botes.forEach(async (e) => {
			await Products.findOrCreate({
				where: {
					make: e.make,
					model: e.model,
					year: e.year,
					cabins: e.cabins,
					bathrooms: e.bathrooms,
					guests: e.guests,
					length: e.length,
					beam: e.beam,
					draft: e.draft,
					fuelCapacity: e.fuelCapacity,
					waterCapacity: e.waterCapacity,
					cruiseVel: e.cruiseVel,
					fuelType: e.fuelType ? e.fuelType : "gasoline",
					description: e.description,
					pictures: e.pictures,
				},
			});
		});
		yates = await Products.findAll();

		return res.status(201).json(yates);
	} catch (error) {
		console.log(
			error,
			"algo pasó con el post del cargafull chequea los campos"
		);
		return res.status(500).json(botes);
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

router.get("/detail/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const products = await Products.findOne({
			where: { id },
		});
		return res.status(200).json(products);
	} catch (error) {
		console.log(error);
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

//------->

router.post("/", async (req, res) => {
	const { userId } = req.user;
	const {
		make,
		model,
		year,
		cabins,
		bathrooms,
		guest,
		length,
		lengthUno,
		lengthDos,
		beam,
		beamUno,
		beamDos,
		draft,
		draftUno,
		draftDos,
		fuelCapacity,
		waterCapacity,
		cruiseVel,
		location,
		fuelType,
		description,
		pictures,
	} = req.body;
	try {
		let resp = await Products.create({
			make,
			model,
			year,
			cabins,
			bathrooms,
			guest,
			length,
			lengthUno,
			lengthDos,
			beam,
			beamUno,
			beamDos,
			draft,
			draftUno,
			draftDos,
			fuelCapacity,
			waterCapacity,
			cruiseVel,
			location,
			fuelType,
			description,
			pictures,
			userId,
		});
		return res.status(200).send(resp);
	} catch (error) {
		console.log(error);
	}
});

router.put("/", async (req, res) => {
	const { editId } = req.editId;
	const {
		make,
		model,
		year,
		cabins,
		bathrooms,
		guest,
		length,
		lengthUno,
		lengthDos,
		beam,
		beamUno,
		beamDos,
		draft,
		draftUno,
		draftDos,
		fuelCapacity,
		waterCapacity,
		cruiseVel,
		location,
		fuelType,
		description,
		pictures,
	} = req.body;
	try {
		let resp = await Products.update(
			{
				make,
				model,
				year,
				cabins,
				bathrooms,
				guest,
				length,
				lengthUno,
				lengthDos,
				beam,
				beamUno,
				beamDos,
				draft,
				draftUno,
				draftDos,
				fuelCapacity,
				waterCapacity,
				cruiseVel,
				location,
				fuelType,
				description,
				pictures,
			},
			{
				where: { id: editId },
			}
		);
		return res.status(200).send(resp);
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
