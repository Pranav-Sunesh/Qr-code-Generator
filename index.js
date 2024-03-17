import inquirer from "inquirer";
import qr from "qr-image";
import {createWriteStream , writeFile} from "node:fs";
inquirer
.prompt([{
    "message" : "Enter the URL:",
    "name" : "URL"
}])
.then((ans) => {
    let qrImage = qr.image(ans["URL"]);
    writeFile("userinput.txt",ans["URL"],(err) => {
        if(err)throw err;
    })
    qrImage.pipe(createWriteStream("QR.png"));
})