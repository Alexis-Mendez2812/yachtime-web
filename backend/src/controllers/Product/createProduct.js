const { Products, Users } = require('../../db');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});
const { botes } = require('../../yates.json');

const uploadImage = async (req, res) => {
   try {
      const { owner ,botes} = req.body;
      botes.forEach(async (e) => {
         const [save] = await Products.findOrCreate({
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
               fuelType: e.fuelType ? e.fuelType : 'gasoline',
               description: e.description,
               pictures: e.pictures,
            },
         });


   const user = await Users.findOne({ where: { id: owner } });
   await user.addProducts(save);

      });
      //    const {
      //       make,
      //       model,
      //       year,
      //       cabins,
      //       bathrooms,
      //       guest,
      //       length,
      //       beam,
      //       draft,
      //       fuelCapacity,
      //       waterCapacity,
      //       cruiseVel,
      //       location,
      //       fuelType,
      //       description,
      //       pictures,
      //       owner,
      //    } = req.body;

      //    var URLs = [];

      //    for (let i = 0; i < pictures.length; i++) {
      //       const urlimg = await cloudinary.uploader.upload(pictures[i], {
      //          upload_preset: 'api-img',
      //       });
      //       URLs.push(urlimg.secure_url);
      //       if (i === pictures.length - 1) {
      //          const [newProduct, bool] = await Products.findOrCreate({
      //             where: {
      //                make,
      //                model,
      //                year,
      //                cabins,
      //                bathrooms,
      //                guests: guest,
      //                length,
      //                beam,
      //                draft,
      //                fuelCapacity,
      //                waterCapacity,
      //                cruiseVel,
      //                location,
      //                fuelType,
      //                description,
      //                pictures: URLs,
      //             },
      // //          });
      // const user = await Users.findOne({ where: { id: owner } });
      // await user.addProducts(newProduct);
      //    }
      // }

      res.json({ status: 'Product saved successfully.' });
   } catch (err) {
      console.log(err);
      res.json(err);
   }
};

module.exports = uploadImage;
