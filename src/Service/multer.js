import multer from "multer";
import { nanoid } from "nanoid";




export const fileValidation = {
    image:["image/png",'image/jpeg',"image/webp"],

    pdf:["application/pdf"]

}


  function fileUploade(customValidation = []){



    const storage = multer.diskStorage({})
    function fileFilter (req,file,cb){
        
        if(customValidation.includes(file.mimetype)){
            cb(null,true)
        }else{
            cb("invalid format",false)
        }
    }
    const upload= multer({fileFilter,storage})
    return upload



} 
export default fileUploade
    
