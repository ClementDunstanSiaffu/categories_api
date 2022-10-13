
import './model/db'
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const Routes = require("./routes/")

app.use(express.json());
app.use(express.urlencoded({extended:false}));
Routes.categoriesRoutes(app);

app.listen(PORT)