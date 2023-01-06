const express = require("express");
const router = express.Router();
const { NYT_API_ROUTES } = require("../nyt_api/consts");
const getHomeStories = require("../nyt_api");
const askOpenAi = require("../openAi_api");

router.get("/us", async (req, res) => {
  const homeData = await getHomeStories(NYT_API_ROUTES.US)
 const abstractData = homeData.results[0].abstract
  const openRes = await askOpenAi(abstractData);
  res.send(openRes);
});

module.exports = router;
