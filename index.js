let count = 0;

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Type your URL here :",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!

    const url = answers.URL;
    var url_to_qr = qr.image(url);
    count++;
    url_to_qr.pipe(fs.createWriteStream("qrImage" + count + ".png"));

    fs.writeFile("SavingURL.txt", url, (err) => {
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
