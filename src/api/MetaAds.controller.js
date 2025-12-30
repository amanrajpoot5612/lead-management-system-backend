import fs from "fs";

const data = JSON.parse(
  fs.readFileSync(new URL("../data/meta.json", import.meta.url))
);

// console.log(data);

const metaAdsController = (req, res) => {
    try {
        res.json(data)
    } catch (error) {
        
    }
}

export {metaAdsController}