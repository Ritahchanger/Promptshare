const mongoose = require("mongoose");


require("dotenv").config()


const databaseConnect =() =>{

    mongoose.connect(process.env.MONGO_URI);

    console.log('The database was configured and its working properly')

}

module.exports = { databaseConnect }