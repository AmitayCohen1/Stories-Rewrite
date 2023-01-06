require("dotenv").config();
const axios = require("axios");
const { NYT_API_BASE_URL } = require("./consts");

const getStories = async (route, index) => {
  let url = `${NYT_API_BASE_URL}${route}.json?api-key=${process.env.NYC_API_KEY}`;
  const data = await axios.get(url).then((response) => response.data);
  const title = data.results[index].title;
  const abstractData = data.results[index].abstract;
  return { title, abstractData };
};

module.exports = getStories;
