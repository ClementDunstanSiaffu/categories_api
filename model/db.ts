
import mongoose from "mongoose";

const uri = "mongodb+srv://Clement:Cle*1995@cluster0-my6sq.mongodb.net/Product_Category?retryWrites=true&w=majority"

mongoose.connect(uri)
.then(()=>console.log("mongo db connected"))
.catch((err)=>console.log("there is any error"))

import './schema'


