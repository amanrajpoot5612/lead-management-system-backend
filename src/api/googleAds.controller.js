import fs from "fs";

const data = JSON.parse(
  fs.readFileSync(new URL("../data/google.json", import.meta.url))
);

// console.log(data);

const googleAdsController = (req, res) => {
    try {
        res.json(data)
    } catch (error) {
        
    }
}

export {googleAdsController};