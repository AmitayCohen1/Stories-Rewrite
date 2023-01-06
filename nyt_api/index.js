require('dotenv').config()
const axios = require("axios");
const { NYT_API_BASE_URL } = require("./consts");

const getSoriesData = (route) => {
  let url = `${NYT_API_BASE_URL}${route}.json?api-key=${process.env.NYC_API_KEY}`;
  return axios.get(url).then((response) => response.data);
};


module.exports = getSoriesData;
