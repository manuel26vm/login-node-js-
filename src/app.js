import express from "express";
import morgan from "morgan";
import router from "./routes/routes.js";
import cookieParser from "cookie-parser";




const app = express();


//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())

app.use('/api/v1',router)


export default app;