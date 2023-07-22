/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

let count = 0;

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Type in your URL:",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!

    const url = answers.URL;
    var url_to_qr = qr.image(url);
    count++;
    url_to_qr.pipe(fs.createWriteStream("qrImage" + count + ".png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("file created successfuly and data saved in file.");

    })
    url_to_qr = null;
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });