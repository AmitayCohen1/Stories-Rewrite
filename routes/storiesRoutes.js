const express = require("express");
const router = express.Router();
const { NYT_API_ROUTES } = require("../nyt_api/consts");
const getSoriesData = require("../nyt_api");
const askOpenAi = require("../openAi_api");

router.get("/us/:index", async (req, res) => {
  const { index } = req.params;
  const homeData = await getSoriesData(NYT_API_ROUTES.US, index);
  const { title, abstractData } = homeData;
  const openRes = await askOpenAi(title, abstractData);
  res.status(200).send(openRes);
});

router.get("/science/:index", async (req, res) => {
  const { index } = req.params;
  const homeData = await getSoriesData(NYT_API_ROUTES.SCIENCE, index);
  const { title, abstractData } = homeData;
  const openRes = await askOpenAi(title, abstractData);
  res.status(200).send(openRes);
});

router.get("/arts/:index", async (req, res) => {
  const { index } = req.params;
  const homeData = await getSoriesData(NYT_API_ROUTES.ARTS, index);
  const { title, abstractData } = homeData;
  const openRes = await askOpenAi(title, abstractData);
  res.status(200).send(openRes);
});

module.exports = router;
