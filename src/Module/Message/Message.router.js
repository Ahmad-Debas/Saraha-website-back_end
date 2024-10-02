import { Router } from "express";
import * as MessageController from "./Message.controller.js"
import { auth } from "../../Midlleware/auth.midlleware.js";
import asynchandler from "../../Service/asynchandler.js";
const messageRouter = Router()

messageRouter.get("/getmessage",auth,MessageController.getMessage)
messageRouter.post("/sendMessage/:receiverid",  asynchandler( MessageController.sendMessage) )
messageRouter.delete("/:message_id",auth,MessageController.deleteMessage)



export default messageRouter