const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const askOpenAi = async (promt) => {

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `"Write an article about ${promt}". The vibe should feel high class, gay guy from new york.`,
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
