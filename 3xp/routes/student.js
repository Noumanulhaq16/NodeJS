import { Router } from "express";
import { userID,user } from "../controllers/studentController.js";
const route = Router();

route.get('/',user)

route.get('/user',userID)


export default route;