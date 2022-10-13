
import express,{Request,Response,NextFunction} from 'express';
import { AppType } from '../types/types';
import mongoose from "mongoose";
const CategoryInstance = mongoose.model("CATEGORY_SCHEMA");

class Routes{

    categoriesRoutes(app:AppType){
        app.post("/postCategory",(req:Request,res:Response)=>{
            const date = Date.now();
            const categoryObject = new CategoryInstance({id:date,...req.body});
            categoryObject.save((err,docs)=>{
                if (!err){
                    res.status(200).json({"status":true})
                }else{
                    res.status(400).json({"status":false})
                }
            })
        }),
        app.post("/getCategory",(req:Request,res:Response)=>{
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
