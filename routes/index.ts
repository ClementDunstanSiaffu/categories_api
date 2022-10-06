
import express,{Request,Response,NextFunction} from 'express';
import { AppType } from '../types/types';
import mongoose from "mongoose";
const CategoryInstance = mongoose.model("CATEGORY_SCHEMA");

class Routes{

    categoriesRoutes(app:AppType){
        app.post("/postCategory",(req:Request,res:Response)=>{
            const categoryObject = new CategoryInstance(req.body);
            categoryObject.save((err,docs)=>{
                if (!err){
                    res.status(200).json({"status":true})
                }else{
                    res.status(400).json({"status":false})
                }
            })
        }),
        app.get("/getCategory",(req:Request,res:Response)=>{
            CategoryInstance.find((err,docs)=>{
                if (!err){
                    res.status(200).json(docs);
                }else{
                    res.status(400).json({"status":false});
                }
                
            })
        })
    }
}

module.exports =  new Routes();
