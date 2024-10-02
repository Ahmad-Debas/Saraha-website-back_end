
 import usermodel from "../../DB/Model/User.model.js"
 import { verifyToken } from "../Service/GenerateandVerifyToken.js"
 export const auth =    async (req,res,next)=>{
  
    try{
        const {authrization} = req.headers
   
    if(!authrization?.startsWith(process.env.BERRAR_KEY)){
        return res.json({message:"Invalid Berea Key "})

    }
    const token = authrization.split(process.env.BERRAR_KEY)[1]
    if(!token){
        return res.json({message:" token Reqired"})
    }

     const decode = verifyToken(token,process.env.LOGIN_SIGNTURE)
     const user = await usermodel.findById(decode.id)
     if(!user){
         return res.status(401).json({message:"user not Regester" })
     }
   
    
     req.id=user._id

     return next()

    }
    catch(err){
        return res.json({message:"Error",err:err.stack})
    }
    

}