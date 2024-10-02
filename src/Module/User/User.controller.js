
import usermodel from "../../../DB/Model/User.model.js"
import Cloudinary from "../../Service/Cloudinary.js"
import { comparePassword , hashpass} from "../../Service/hashandcompare.js"
import bcrypt from "bcrypt"


export const getprofile = (req,res)=>{
    return res.json("profilee")
}


export const profilePic = async (req,res)=>{

   
    if(!req.file){
        return res.json({message:"file is Requiredddddddd"})
    }

   const {secure_url} = await Cloudinary.uploader.upload(req.file.path,{folder:`saraha2/user/${req.id}`})
   const user = await usermodel.updateOne({_id:req.id},{profilePic:secure_url})
  return res.json({message:"Success profile changed"})
    
}

export const updatePassword = async (req,res,next)=>{

    const { oldpassword, newpassword , cPassword } = req.body
    if(oldpassword==newpassword){
        return next( new Error("old password same new password"))
    }

    const user = await usermodel.findById(req.id)
    
    const match = comparePassword(oldpassword,user.password)
    if(!match){
        return next( new Error(" invalid old password"))
    }

    const hashpassword = hashpass(newpassword)
  
    user.password = hashpassword
    user.save()
   
    return res.status(200).json({message:"Success"})
    



}
export const shareProfile = async (req,res,next)=>{
    const {id}= req.params
    const user =  await usermodel.findById(id).select("userName email")
    return res.json(user)
    if(!user){
        return next(new Error(" Message not found "))
    }
    return res.json({message:"Success"})
}