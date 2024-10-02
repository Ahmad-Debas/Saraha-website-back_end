import usermodel from "../../../DB/Model/User.model.js"
import messagemodel from "../../../DB/Model/message.model.js"

export const getMessage= async (req,res)=>{
    const user= await messagemodel.find({receverId:req.id})
    

    return res.json({message:"Sucess",user})
}

export const sendMessage = async(req,res)=>{
    const{receiverid} = req.params;
    const{message}= req.body;
    
    const user =await usermodel.findById(receiverid)
    if(!user)
    {
        return res.json({message:"user not found "})
    }
    const createuser = await messagemodel.create({message,receverId:receiverid})
    return res.json({ message:" Success Message send ",createuser})

}

export const deleteMessage = async (req,res)=>{
    const {message_id} = req.params
    let userid = req.id
    
    const userr = await usermodel.findById(userid)
    //return res.json(userid)
  
   if(!userr){
    return res.json({message:"user not found"})
   }

   const message = await messagemodel.deleteOne({_id:message_id,receverId:userid})
   
   if(message.deletedCount==0){
    return res.json({message:"user or message id not correct"})
   }
   return res.json({message:"Success deleted "})

  


}