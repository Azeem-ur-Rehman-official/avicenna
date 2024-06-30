// lib/multer.js
import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from './cloudinary';

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'university_applications', // Set the folder in your Cloudinary account
    allowed_formats: ['jpg', 'png', 'pdf', 'doc', 'docx'],
  },
});

const upload = multer({ storage });

export default upload;
