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

      var URLs = [];
      // pictures.forEach(async (pic, i) => {
      //    const urlimg = await cloudinary.uploader.upload(pic, {
      //       upload_preset: 'api-img',
      //    });
      //    URLs.push(urlimg.secure_url);
      //    if (i === pictures.length - 1) {
      //       console.log('ACA ', URLs);
      //    }
      // });

      for (let i = 0; i < pictures.length; i++) {
         const urlimg = await cloudinary.uploader.upload(pictures[i], {
            upload_preset: 'api-img',
         });
         URLs.push(urlimg.secure_url);
         if (i === pictures.length - 1) {
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
            console.log(URLs);
         }
      }

      res.json({ status: 'Product saved successfully.' });
   } catch (err) {
      console.log('Si', err);
      res.json(err);
   }
};

module.exports = uploadImage;
