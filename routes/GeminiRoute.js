const GeminiController = require("../controllers/GeminiController");


const Router = require("express").Router();


Router.post('/chat-bot',GeminiController.chatBot);


module.exports = Router;