import express from "express"
import * as dotenv from "dotenv"
import initapp from "./src/app.router.js"
dotenv.config()
const app = express()
const port = process.env.PORT
initapp(app,express)

app.listen(port,()=>{
    console.log(`this server runn on port${port} `)
})