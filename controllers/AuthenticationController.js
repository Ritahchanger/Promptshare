const User = require("../models/Users.model");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const SignUp = async (req,res,next)=>{

    try{

        const {  fName,lName,email,password } = req.body;

        const user = await User.findOne({email})

        if(user){

            return res.status(200).json({status:200, success:false, message:"The email is already registered"});

        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({

            fName,

            lName,

            email,

            password:hashedPassword
        })
        
        await newUser.save();

        return res.status(200).json({status:200,success:true,message:"The user has been registered successfully"});

    }catch(error){

        res.status(500).json({success:false,message:'Internal erver error',error:error.message});

    }


}
const Login = async (req,res,next)=>{

    try{

        const { email,password } = req.body;

        const user = await User.findOne({email})

        if(!user){

            return res.status(200).json({status:404,success:false,message:"The user was not found"});

        }
        else{

            const isMatch = await bcrypt.compare(password,user.password);

            if(!isMatch){

                return res.status(200).json({status:200,success:true,message:"Wrong password"});

            }

            const token = jwt.sign({_id:user.id,email:user.email},process.env.JWT_SECRET,{expiresIn:"1h"});


            res.status(200).json({success:true,message:'successfully authenticated',token:token})

        }

    }catch(error){

        res.status(500).json({success:false,message:'Internal server error',error:error.message});   

    }


}


const getUsers = async (req,res)=>{

    try{

        const users = await User.find({});

        if(!users || users.length === 0){

            res.status(500).json({status:404,success:false,message:'Users not found'});

        }

        res.status(200).json({status:200,success:true,data:users});

    }catch(error){

        res.status(500).json({success:false,message:'Internal server error',error:error.message});

    }


}
module.exports = { SignUp,Login,getUsers }