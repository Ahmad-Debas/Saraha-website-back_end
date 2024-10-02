import { Router, application } from "express";
import * as UserController from "./User.controller.js"
import {auth} from "../../Midlleware/auth.midlleware.js";
import fileUploade, { fileValidation }  from "../../Service/multer.js";
import asynchandler from "../../Service/asynchandler.js";

import * as validator from "./User.validation.js"
import { valid } from "../../Midlleware/validation.midlleware.js";
const userrouter = Router()

userrouter.get("/profile",auth,UserController.getprofile)
userrouter.patch("/profilePic", fileUploade([fileValidation.image]).single("image"), auth, valid(validator.profilevalidation) , UserController.profilePic)
userrouter.patch("/updatePassword" , auth , valid(validator.updatePassword)  , UserController.updatePassword)
userrouter.post("/:id/share",UserController.shareProfile)





export default userrouter