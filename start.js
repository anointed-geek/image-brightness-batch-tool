const jimp = require('jimp');
const fs = require('fs');
const pendingFolder = './pending';
const processedFolder = './processed';

// Look through all files in the folder
const files = fs.readdirSync(pendingFolder);
files.forEach(async (file) => {
    // For every image, go grab it and open the data stream
    console.log('file is ', pendingFolder, '/', file);

    // Run the image brightness on the master image
    const imageData = await jimp.read(`${pendingFolder}/${file}`);

    // Apply filter and save to target folder
    imageData.brightness(.3).write(`${processedFolder}/${file}`);
})