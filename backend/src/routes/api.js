const { Router } = require("express");
const { cloudinary } = require('../controllers/cloudinary');
const axios = require("axios");
const { Users , Products } = require(`../db`);
// const main = require("../controllers/mailer");

const router = Router();

router.get('/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:deve')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});
router.post('/upload', async (req, res) => {
    try {
        console.log(req.body)
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'deve',
        });
        console.log(uploadResponse);
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});


module.exports = router;
