const Router = require("express").Router();


const AuthenticationController = require("../controllers/AuthenticationController");

Router.get("/",AuthenticationController.getUsers)


Router.post('/signup',AuthenticationController.SignUp)


Router.post('/login',AuthenticationController.Login)


module.exports = Router;