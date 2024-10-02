import mongoose from "mongoose";

const conn =  async ()=>{
   await mongoose.connect(process.env.DB_LOCAL)
   .then(()=>{console.log("Success connected DB")})
   .catch((err)=>{console.log("Error connectedDB",err)})
   
}
export default conn