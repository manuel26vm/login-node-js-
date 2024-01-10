import {Router} from "express";
import { login, logout, register,profile} from "../controller/auth.controller.js";
import { authorizationRequired } from "../middleware/validateToken.js";



const router = Router()

router.post('/register',register );
router.post('/login',login );
router.post('/logout',logout );

router.get('/profile',authorizationRequired,profile );



export default router