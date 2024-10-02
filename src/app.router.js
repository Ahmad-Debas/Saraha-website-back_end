import conn from "../DB/connection.js"
import authrouter from "./Module/Auth/Auth.router.js"
import messageRouter from "./Module/Message/Message.router.js"
import userrouter from "./Module/User/User.router.js"
import cors from "cors"
import globalError from "./Service/globalError.js"






const initapp = (app,express)=>{
    app.use(express.json())
    conn()
    app.use("/uplaod",express.static("src/upload"))
    app.use(cors())
    app.use("/",(req,res)=>{
        return res.json({message:"Welcomme "})
    })
    app.use("/auth",authrouter)
    app.use("/user",userrouter)
    app.use("/message",messageRouter)
    app.use("/*",(req,res)=>{
        return res.json({message:"Page not found"})
    })

    app.use(globalError)
}


export default initapp