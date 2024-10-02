
import usermodel from "../../../DB/Model/User.model.js"
import { gnerateToken, verifyToken } from "../../Service/GenerateandVerifyToken.js"
import { sendEmail } from "../../Service/SendEmail.js"
import asynchandler from "../../Service/asynchandler.js"
import { comparePassword, hashpass } from "../../Service/hashandcompare.js"
import {signupschema} from "./validation/Auth.validation.js"


 export const signup = async (req,res,next)=>{
    try{
        const {userName,email,password,age } = req.body
        

   const user = await usermodel.findOne({email})
   if(user){
    //return res.json({message:"exist email"})
    return next( new Error ("email isss exist"))
   }
   const passwordhash = hashpass(password)
   const token = gnerateToken({email})
   const link = `https://sarahanode2.onrender.com/auth/confirmEmail/${token}`
   const html = `<a href=${link}> Confirm Email </a>`
   await sendEmail(email,"Confirm your EMAIL",html)
   const userr = await usermodel.create({userName,email,password:passwordhash,age})
   return res.json({message:"Success", id:userr._id})



    }
    catch(err){
        return res.json({message:"error",err:err.stack})
    }
  

 } 

export const loging =  async (req,res,next)=>{

    const {email,password} =req.body
    
    
    const user = await usermodel.findOne({email})
    if(!user){
       // return res.json({message:" email not found "})
       return next( new Error("email not fouund"))

    }
    let equalpassword = comparePassword(password,user.password)
    if(!equalpassword){
        return res.json({message:" Invalid data "})
    }
    const token = gnerateToken({id:user._id},process.env.LOGIN_SIGNTURE)
    return res.json({message:"Success",token})


} 

 export const confirmEmail=  async(req,res)=>{
    const {token}= req.params
     let tokenDecode = verifyToken(token)
     if(!tokenDecode){
        return res.json({message:"invalid Token"})
     }
    
     const user = await usermodel.updateOne({email:tokenDecode.email},{confirmEmail:true})
     if(user.modifiedCount>0){
         return res.json({message:"Success",user})
     }
     return res.json({message:"account not found "})

    
     
   

 }