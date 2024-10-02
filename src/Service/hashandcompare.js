import bcrypt from "bcrypt"


export const hashpass =  (password , salatround=parseInt(process.env.SALAT_ROUND))=>{

    let hashpassword =  bcrypt.hashSync(password,salatround)
    return hashpassword
}

export const comparePassword = (password,passdb)=>{
    let passeq= bcrypt.compareSync(password,passdb)
    return passeq
}
