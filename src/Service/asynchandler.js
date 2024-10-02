

const asynchandler = (fun)=>{
    return (req,res)=>{
        fun(req,res).catch(error=>{
            return res.json({message:"catch error",err:error.stack})
        })
    }
}

export default asynchandler