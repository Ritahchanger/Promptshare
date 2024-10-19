const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    fName:{

        type:String,

        required:true

    },
    lName:{

        type:String,

        required:true

    },
    email:{

        type:String,

        required:true

    },
    password:{

        type:String,

        required:true

    },
    createdAt:{

        type:Date,

        default:Date.now()

    }

})
const User = mongoose.model("User",UsersSchema);
module.exports = User;