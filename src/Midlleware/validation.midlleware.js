    const array = ["body","query","params","file"]

 export const valid= (Schema)=>{
    return (req,res,next)=>{
      const RedaultValidation= []
      array.forEach(key=>{
         if(Schema[key]){
            let validationResault = Schema[key].validate(req[key],{abortEarly:false})
            if(validationResault.error){
               RedaultValidation.push(validationResault)
            }
            
         }
      })
    
      if(RedaultValidation.length>0){
         return res.json({message:"Error validation",RedaultValidation})
      }else{

         return next()
      }
   }
}