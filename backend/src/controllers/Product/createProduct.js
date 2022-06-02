const { Products } = require('../../db');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadImage = async (req, res) => {
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

      const URLs = [];

      pictures.forEach(async (pic) => {
         const URLimg = await cloudinary.uploader.upload(pic, {
            upload_preset: 'api-img',
         });
         URLs.push(URLimg);
      });

      await Products.findOrCreate({
         where: {
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
            pictures: URLs,
         },
      });

      res.json({ status: 'Product saved successfully.' });
   } catch (err) {
      console.log('Si', err);
      res.json(err);
   }
};

module.exports = uploadImage;
