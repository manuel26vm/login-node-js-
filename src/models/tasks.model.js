import mongoose from "mongoose";

 const tasksSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
        trim: true,
    },
    description:{
        type: String,
        required:true,
        trim:true,
    },
    date:{
        type: Date,
        default: Date.now
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true,
    },
},{
    timestamps:true
})

 const task = mongoose.model('task',tasksSchema);
 export default task;