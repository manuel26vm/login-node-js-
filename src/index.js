import app from './app.js'
import {conectionDB  } from "./database/db.js";


const puerto = process.env.PORT || 4000


conectionDB();
app.listen(puerto,()=>{
    console.log('ejecutandose en el puerto '+puerto)

})


// console.log(process.env.PORT);