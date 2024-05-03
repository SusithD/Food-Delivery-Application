import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://susithdeshan:20020418@cluster0.vex2udj.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}