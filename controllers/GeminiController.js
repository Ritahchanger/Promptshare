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
const sentimentAnalysis = async (req,res)=>{

    try{

        const { prompt } = req.body;

        if(!prompt){

            return res.status(200).json({status:404,success:false,message:'No prompt provided'});

        }

        const sentimentToAnalyse = `Analyse the following sentiment:'${prompt}'`;

        const answer = await run(sentimentToAnalyse);

        res.status(200).json({success:true,message:answer.text});
        
    }catch(error){

        res.status(500).json({success:false,message:'Internal server error',error:error.message});

    }
}
const keywordExtraction = async (req,res)=>{

    try{

        const { prompt } = req.body;

        if(!prompt){

            return res.status(200).json({status:404,success:false,message:'No prompt provided'});

        }

        const statementToExtractKeyWord = `Extract keywords from:'${prompt}'`;

        const answer = await run(statementToExtractKeyWord);

        res.status(200).json({success:true,message:answer.text});
        
    }catch(error){

        res.status(500).json({success:false,message:'Internal server error',error:error.message});

    }
}
const textClassification = async (req,res)=>{

    try{

        const { prompt } = req.body;

        if(!prompt){

            return res.status(200).json({status:404,success:false,message:'No prompt provided'});

        }

        const statementToClassify = `Classify the intent in: '${prompt}'`;

        const answer = await run(statementToClassify);

        res.status(200).json({success:true,message:answer.text});
        
    }catch(error){

        res.status(500).json({success:false,message:'Internal server error',error:error.message});

    }
}
const languageTranslation = async (req,res)=>{

    try{

        const { prompt,language } = req.body;

        if(!prompt || !language){

            return res.status(200).json({status:404,success:false,message:'Missing requirements'});

        }

        const statementToTranslate = `Translate '${prompt}' in to '${language}'`;

        const answer = await run(statementToTranslate);

        res.status(200).json({success:true,message:answer.text});
        
    }catch(error){

        res.status(500).json({success:false,message:'Internal server error',error:error.message});

    }
}

module.exports = { chatBot,sentimentAnalysis,keywordExtraction,textClassification,languageTranslation}