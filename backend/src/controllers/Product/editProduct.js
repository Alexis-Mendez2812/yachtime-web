const { Products, Users } = require('../../db');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImageEdit = async (req, res) => {
   try {
      const {
         id,
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
      
      console.log(id);
      var URLs = [];
      let nuevos = pictures.filter((e)=>!e.includes("cloudinary"))
      let viejos = pictures.filter((e)=> e.includes("cloudinary"))
      for (let i = 0; i < nuevos.length; i++) {
         const urlimg = await cloudinary.uploader.upload(pictures[i], {
            upload_preset: 'api-img',
         });
         console.log("hay nuevos")
         URLs.push(urlimg.secure_url);
      }
      URLs=[...URLs,...viejos]
      let resp = await Products.update(
			{
				make,
				model,
				year,
				cabins,
				bathrooms,
				guests: guest,
				length,
				beam,
				draft,
				fuelCapacity,
				waterCapacity,
				cruiseVel,
				location,
				fuelType,
				description,
				pictures:URLs,
			},
			{
				where: { id:req.body.id },
			}
		);
		return res.status(200).send(resp);
   } catch (err) {

      console.log("estoy en el catch");
      console.log("estoy en el catch");
      console.log("estoy en el catch");
      console.log(err);
      res.json(err);
   }
};

module.exports = uploadImageEdit;
