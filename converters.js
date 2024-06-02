const sharp = require('sharp'); // Image processing library

function convertPngToJpg(filePath) {
  const outputPath = filePath.replace('.png', '.jpg');

  sharp(filePath)
    .jpeg()
    .toFile(outputPath, err => {
      if (err) {
        console.error('Error converting image:', err);
      } else {
        console.log('Image converted successfully:', outputPath);
      }
    });
}

function convertPngToWebP(filePath) {
  const outputPath = filePath.replace('.png', '.jpg');
  sharp(filePath)
    .webp()
    .toFile(outputPath, err => {
      if (err) {
        console.error('Error converting image:', err);
      } else {
        console.log('Image converted successfully:', outputPath);
      }
    });
}

function convertPngToGif(filePath) {
  const outputPath = filePath.replace('.png', '.jpg');
  sharp(filePath)
    .gif()
    .toFile(outputPath, err => {
      if (err) {
        console.error('Error converting image:', err);
      } else {
        console.log('Image converted successfully:', outputPath);
      }
    });
}

function convervtPngToAvif(filePath) {
  const outputPath = filePath.replace('.png', '.jpg');
  sharp(filePath)
    .avif()
    .toFile(outputPath, err => {
      if (err) {
        console.error('Error converting image:', err);
      } else {
        console.log('Image converted successfully:', outputPath);
      }
    });
}

module.exports = {
  convertPngToJpg,
  convertPngToGif,
  convertPngToWebP,
  convervtPngToAvif,
};
