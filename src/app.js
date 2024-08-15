import express from "express"; 
import  bodyParser from "body-parser";
import filmeRoutes from "../src/routes.js"

const app = express(); 

app.use(bodyParser.json());

 app.use('/',filmeRoutes);


export default app; 