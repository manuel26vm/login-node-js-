import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import tasksRouter from "./routes/tasks.routes.js";






const app = express();


//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())

app.use('/api/v1',authRouter)
app.use('/api/v1',tasksRouter)


export default app;