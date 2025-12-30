    import {websiteController} from './api/website.controller.js'
    import {metaAdsController} from './api/MetaAds.controller.js'
    import {googleAdsController} from './api/googleAds.controller.js'
    import e from "express";
    import cors from 'cors'

    const app = e();

    app.use(cors())

    const PORT = 4000;

    app.listen(PORT, () => {
        console.log("listening");
    })

    app.get("/", (req, res) => {
        res.json({
            path: "default",
            status: 200
        })
    })

    app.get("/api/v1/google", googleAdsController)

    app.get("/api/v1/meta", metaAdsController)

    app.get("/api/v1/website", websiteController)