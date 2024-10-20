const { run } = require("../utils/GeminiConfig");

const chatBot = async (req,res)=>{

    try{

        const { prompt } = req.body;

        if(!prompt){

            return res.status(200).json({status:404,success:false,message:'No prompt provided'});

        }

        const answer = await run(prompt);

        res.status(200).json({success:true,message:answer.text});
        
    }catch(error){

        res.status(500).json({success:false,message:'Internal server error',error:error.message});

    }
}

module.exports = { chatBot }