
import  Jwt  from "jsonwebtoken"
 export const gnerateToken = (payloade,sighnture = process.env.SIGNUP_SIGNTURE,expiresIn="1h")=>{
   const Token = Jwt.sign(payloade,sighnture,{expiresIn})
   return Token

}


export const verifyToken = (token ,sighnture= process.env.SIGNUP_SIGNTURE)=>{
      let decode = Jwt.verify(token,sighnture)
      return decode
}
