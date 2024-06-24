import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([{
    message: "Please enter Your URL:",
    name: "Typed_URL",
},
//                                                                                "type": "checkbox",
//                                                                                "name": "data",
//                                                                                "message": "Who is the Strongest ",
//                                                                                "choices": ["SAITAMA", "MADARA","LUFFY","NARUTO","GOJO"],
//                                                                                "default": "GOKU",
])
.then((answer) =>{
    const ur_url = answer.Typed_URL;
    var qr_svg = qr.image(ur_url);
    qr_svg.pipe(fs.createWriteStream("Your_URL.png"));            //pngready
    fs.writeFile("Your_URL.txt", ur_url, 
    //arrow()
    (err) => {
        if(err)throw err;
        console.log("Your File Has Been Saved");
    });
})
.catch((error) =>{
    if (error.isTtyError){
       console.log("Prompt ERROR");
    } else {
        console.log("Something went wrong");
    }
});