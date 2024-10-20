const { app } =  require("./app")

require("dotenv").config();


const express = require("express");


const PORT = process.env.PORT || 8000

const cors = require("cors")

const { databaseConnect } = require("../database/databaseConfig");



const helmet = require("helmet");

const morgan = require("morgan");

app.use(helmet());

app.use(morgan("DEV"));

app.use(cors())

app.use(express.json());


app.get('/',(req,res)=>{


    res.status(200).json({status:200,message:"Backend performing successfully"});
    

})



const AuthenticationRoutes = require("../routes/AuthenticationRoutes");


const GeminiRoute = require("../routes/GeminiRoute");


app.use('/api/auth',AuthenticationRoutes);


app.use('/api/ai',GeminiRoute);



app.listen(PORT,()=>{

    try{

        databaseConnect()

    console.log(`The server is running on PORT => ${PORT}`)

    }catch(error){

        console.log(`There was a problem when connecting to the server { error } => ${error.message
        }`)

    }

})