import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dusuzbovd',
  api_key: '795778497569153',
  api_secret: '9ybOhFzx71tYxHS689aVbk1Xj9o',
});

export default cloudinary;

// Client-side upload configuration
export const cloudinaryConfig = {
  cloudName: 'dusuzbovd',
  uploadPreset: 'choudhary-interiors', // You'll need to create this in Cloudinary dashboard
};
