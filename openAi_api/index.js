const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const askOpenAi = async (title, abstract) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `"This is the title of an article - ${title} And this is its abstract - ${abstract}.
      Rewrite it, in a high-class, gay guy from New York vibe.
      Include a title and a body. Write this  - "ORIGINAL TITLE:${title}" , ORIGINAL ABSTRACT:${abstract}, in the end.`,
      max_tokens: 2048,
      //   temperature: 0,
    });
    return response.data.choices[0].text;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

module.exports = askOpenAi;
