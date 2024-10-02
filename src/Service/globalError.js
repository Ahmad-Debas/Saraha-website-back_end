

const globalError = (err,req,res,next)=>{
    if(err){
        return res.json({message:err.message})
    }
}

export default globalError