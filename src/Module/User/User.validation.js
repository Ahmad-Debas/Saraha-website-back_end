import Joi from "joi";
import generalfileds from "../../Service/Generalfileds.js";



export const profilevalidation = {

    
        
file :generalfileds.file.required()
    



}
export const updatePassword = {
    body:Joi.object({
        oldpassword: generalfileds.password,
        newpassword:generalfileds.password,
        cPassword:Joi.string().valid(Joi.ref("newpassword")).required()
    }).required()
}


