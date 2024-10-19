
const { GoogleGenerativeAI } = require("@google/generative-ai");

require("dotenv").config();

const { geminiKey }  = require("../Config")

const genAI = new GoogleGenerativeAI(geminiKey.geminiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);


    const usersChart = result.response?.candidates?.[0]?.content?.parts?.[0] || "No response available";
    
    return usersChart;

  } catch (error) {
    console.error("Error during AI chat:", error);
    return "An error occurred while fetching the response.";
  }
}
(async () => {
  const response = await run("Who is the president of Kenya?");
  console.log("AI Response:", response);
})();