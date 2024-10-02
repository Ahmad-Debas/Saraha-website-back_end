import mongoose, { Schema , model ,Types} from "mongoose";

const messageschema = new Schema({
    message:{
        type:String,
        required:true
    },
    receverId:{
        type:Types.ObjectId,
        required:true
    },
},
 {timestamps:true} )

const messagemodel = mongoose.models.Message || model("Message",messageschema)

export default messagemodel

