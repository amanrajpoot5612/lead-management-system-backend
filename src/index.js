import { websiteController } from "./api/website.controller.js";
import { metaAdsController } from "./api/MetaAds.controller.js";
import { googleAdsController } from "./api/googleAds.controller.js";
import e from "express";
import cors from "cors";
import { frontend_uri } from "./config.js";

const app = e();

app.use(
  cors({
    origin: [frontend_uri],
  })
);

console.log("FRONTEND URI : ", frontend_uri)

const PORT = 4000;

app.listen(PORT, () => {
  console.log("listening");
});

app.get("/", (req, res) => {
  res.json({
    path: "default",
    status: 200,
  });
});

app.get("/api/v1/google", googleAdsController);

app.get("/api/v1/meta", metaAdsController);

app.get("/api/v1/website", websiteController);
