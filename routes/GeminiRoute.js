const GeminiController = require("../controllers/GeminiController");
const Router = require("express").Router();


Router.post('/chat-bot', GeminiController.chatBot);


Router.post('/sentiment-analysis', GeminiController.sentimentAnalysis);


Router.post('/keyword-extraction', GeminiController.keywordExtraction);


Router.post('/text-classification', GeminiController.textClassification);


Router.post('/language-translation', GeminiController.languageTranslation);


module.exports = Router;
