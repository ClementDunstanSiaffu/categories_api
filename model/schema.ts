
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    
    id:{
        type:String
    },
    categoryName:{
        type:String
    },
    categoryImage:{
        type:String
    }
    
})

mongoose.model("CATEGORY_SCHEMA",categorySchema);