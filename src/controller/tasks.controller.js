import task from "../models/tasks.model.js";

task;

export const getTasks = async (req, res) => {
  const Tasks = await task.find({user:req.user.id}).populate('user');
  res.json(Tasks);
};

export const getTask = async (req, res) => {
  const Tasks = await task.findById(req.params.id).populate('user');
  if (!Tasks) return res.status(404).json({ message: "tasks not found" });
  res.json(Tasks);
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;
   console.log(req.user)
  const newTask = new task({
    title,
    description,
    date,
    user: req.user.id
  });

  const savedTask = await newTask.save();
  res.json(savedTask);
};

export const deleteTask = async (req, res) => {
  const Tasks = await task.findByIdAndDelete(req.params.id);
  if (!Tasks) return res.status(404).json({ message: "tasks not found" });
  res.sendStatus(204);
};
export const updateTask = async (req, res) => {
  const Tasks = await task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!Tasks) return res.status(404).json({ message: "tasks not found" });
  res.json(Tasks);
};
   
