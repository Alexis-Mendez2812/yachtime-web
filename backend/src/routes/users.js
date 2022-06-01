const { Router } = require("express");

const { Users,Payments } = require(`../db`);
// const main = require("../controllers/mailer");

const router = Router();

//USERS

router.post("/", async (req, res) => {

	try {

		if (req.body.email_verified) {
			let { email, family_name, picture, given_name, nickname } = req.body;

			let usuario = await Users.findOne({
				where:{
					email,
				}
			})
			if(usuario && Object.keys(usuario).length){
				console.log("usuario existente")
				return res.status(200).json(usuario)
			  }else{
				
				  
				  const [user, created] = await Users.findOrCreate({
					  where: {
						  email: email,
						  firtsName: given_name,
						  lastName: family_name,
						  userName: nickname,
						  picture: picture,
						},
					});
					
					console.log("se creó el usuario por auth0 " + created);
					
					return res.status(201).json(user);
				}
			}
				const { email, firtsName, lastName, userName, picture, password } = req.body;

		const [user, created] = await Users.findOrCreate({
			where: {
				email,firtsName, lastName, userName, picture, password 
			},
		});
		console.log("se creó el usuario por el form " + created);

		return res.status(201).json( user );
	} catch (error) {
		console.log(error, "algo pasó con el post del user chequea los campos");
		return res
			.status(200)
			.json({ mensaje: "algo pasó con el post del user chequea los campos" });
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
			picture: req.body.picture
		});

		return res.status(201).json("Actualizacion exitosa");
	} catch (error) {
		console.log(error, "error en la ruta put /profile");
	}
});
router.get("/all", async (req, res) => {

	try {
		
		const users = await Users.findAll();
		
		return res.status(200).json(users);
	} catch (error) {
		console.log(error);
	}
});

router.get("/login/:email", async (req, res) => {
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



//ACTUALIZAR A USUARIO PAGO

router.post("/payment", async (req, res) => {
	const { email, orderID, payerID, amount } = req.body;
	try {
        const pago = await Payments.create({
            email, orderID, payerID, amount
          });
        const user = await Users.findOne({
            where: {
              email: email,
            }
        });
        user.update({role:"ROLE_PRIME"})
        console.log("se hizo el pago")

		return res.status(200).json({ user,pago});
	} catch (err) {
		console.log(err);
		// next(err)
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
			role:  "ROLE_ADMIN"
		});
		const uses = await Users.findAll()
		return res.status(201).json(uses);
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
			role:  "ROLE_USER"
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
			role:  "ROLE_BANNED"
		});

		return res.status(201).json("Actualizacion de baneo exitosa");
	} catch (error) {
		console.log(error, "error en la ruta put /banned");
	}
});
//PRECARGA

router.get("/precarga", async (req, res) => {
	const { email } = req.body;

	try {
		
		var superAdmin =await Users.findOrCreate({
			where: {
				email: "milagrosdiezbarrantes@gmail.com",
				password: 'mili123',
			firtsName: "mili ",
				lastName: "berrantez",
				userName: "La-Mili",
			picture:"https://img.freepik.com/vector-gratis/diseno-ilustracion-vector-personaje-avatar-mujer-joven_24877-18536.jpg",
				role: "ROLE_SUPER_ADMIN",
			},
		});
		var superAdmin2 =await Users.findOrCreate({
			where: {//email,firtsName, lastName, userName, picture, password 
				email: "281212.namaste@gmail.com",
				password: 'alex123',
				firtsName: "Alexis",
				lastName: "Mendez",
				userName: "The-Machine",
			picture: "https://lh3.googleusercontent.com/a-/AOh14GiUh1_SvyqlWseAfbiBc7zzmGHcr3_La0rCRMF7jA=s96-c-rg-br100",
				role: "ROLE_SUPER_ADMIN",
			},
		});
		var superAdmin3 =await Users.findOrCreate({
			where: {
				email: "ruartejoaquin@gmail.com",
				password: 'joaco123',
				firtsName: "Joaquin",
				lastName: "Ruarte",
				userName: "JoacoRuarte",
			picture: "https://lh3.googleusercontent.com/a-/AOh14GiCaJtDxJVq8_citOjdiBHTqCuZ6bXmeKKZMma77w=s96-c-rg-br100",
				role: "ROLE_SUPER_ADMIN",
			}
		});
		
		

		return res.status(201).json("Precarga exitosa");
	} catch (error) {
		
		console.log(error, "error en la ruta get /precarga");
		return res.status(200).json("Datos existentes");
	}
});




module.exports = router;
