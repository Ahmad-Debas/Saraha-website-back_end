import Joi from "joi"
import generalfileds from "../../../Service/Generalfileds.js"


export const signupschema = {

body: Joi.object({

    userName:Joi.string().required().alphanum().max(30).min(3),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password:Joi.string().required().messages({
        "string.empty":"not allowed password to be empty  "
     
    }),
    age:Joi.number().integer().min(20).max(80),
    cpassword:Joi.string().valid(Joi.ref("password")).required(),
    gender:Joi.string().valid("female",'male').required().messages({
        "any.only":"only male or female"
    })

}).required(),

query:Joi.object({

    test:Joi.boolean().required()

}).required()

 }

 export const loginSchema = {
  
  body:Joi.object({
    email:generalfileds.email,
    password:generalfileds.password

  }).required()


 }