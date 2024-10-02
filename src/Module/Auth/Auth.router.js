import { Router } from "express";
import * as AuthContoller from "./Auth.controller.js"
import asynchandler from "../../Service/asynchandler.js";
import {valid} from "../../Midlleware/validation.midlleware.js"
import { loginSchema, signupschema } from "./validation/Auth.validation.js";
const authrouter = Router()

authrouter.post("/signup", valid(signupschema) ,AuthContoller.signup)
authrouter.get("/confirmEmail/:token",asynchandler( AuthContoller.confirmEmail))
authrouter.post("/login", valid(loginSchema) , (AuthContoller.loging))



export default authrouter