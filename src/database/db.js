import mongoose from "mongoose";

export const conectionDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/crud");
    console.log('conexion exitosa') 
  } catch (error) {
    console.log(error);  
  }
};