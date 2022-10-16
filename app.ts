
require('dotenv').config();
import './model/db'
const express = require("express");
const app = express();
const PORT = process.env.PORT || process.env.DEV_PORT ;
const Routes = require("./routes/")

app.use(express.json());
app.use(express.urlencoded({extended:false}));
Routes.categoriesRoutes(app);

app.listen(PORT,()=>console.log("listening to the",PORT))