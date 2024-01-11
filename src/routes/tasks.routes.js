import {Router} from "express";
import { authorizationRequired } from "../middleware/validateToken.js";
import { createTask, deleteTask, getTask, getTasks, updateTask } from "../controller/tasks.controller.js";


const router = Router();
 
router.get('/tasks',authorizationRequired ,getTasks)
router.get('/tasks/:id',authorizationRequired,getTask);
router.post('/tasks',authorizationRequired,createTask);
router.delete('/tasks/:id',authorizationRequired,deleteTask);
router.put('/tasks/:id',authorizationRequired,updateTask);

export default router;