require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function main() {
  // 1. Upload a sample image from Cloudinary's demo library
  console.log('Uploading image...');
  const result = await cloudinary.uploader.upload(
    'https://res.cloudinary.com/demo/image/upload/sample.jpg'
  );

  console.log('\nUpload complete!');
  console.log('Secure URL:', result.secure_url);
  console.log('Public ID: ', result.public_id);

  // 2. Print metadata returned by the upload response
  console.log('\nImage details:');
  console.log('Width:           ', result.width);
  console.log('Height:          ', result.height);
  console.log('Format:          ', result.format);
  console.log('File size (bytes):', result.bytes);

  // 3. Generate a transformed URL
  // f_auto: Cloudinary picks the best format for the requesting browser (WebP, AVIF, etc.)
  // q_auto: Cloudinary picks the optimal quality level to reduce file size without visible loss
  const transformedUrl = cloudinary.url(result.public_id, {
    fetch_format: 'auto',
    quality: 'auto',
    secure: true,
  });

  console.log('\nDone! Click link below to see optimized version of the image. Check the size and the format.');
  console.log('Transformed URL:', transformedUrl);
}

main().catch(console.error);
