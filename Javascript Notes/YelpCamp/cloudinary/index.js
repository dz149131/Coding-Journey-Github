const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
	cloud_name: process.env.CLOUDINATY_CLOUD_NAME,
	api_key: process.env.CLOUDINATY_KEY,
	api_secret: process.env.CLOUDINATY_SECRET,
});

const storage = new CloudinaryStorage({
	cloudinary,
	folder: 'YelpCamp',
	allowedFormats: ['jpeg', 'png', 'jpg'],
});

module.exports = {
	cloudinary,
	storage,
};
