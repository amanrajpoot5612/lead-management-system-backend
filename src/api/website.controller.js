// website.controller.js
import fs from "fs";

const data = JSON.parse(
  fs.readFileSync(new URL("../data/website.json", import.meta.url))
);

// console.log(data);


const websiteController = (req, res) => {
    try {
        res.json(data)
    } catch (error) {
        
    }
}

export  {websiteController}