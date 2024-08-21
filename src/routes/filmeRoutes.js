 import express  from "express";

 const router = express.Router();

 router.get('/',(req,res) =>{
    try{
      

    } catch(err){
        res.status(500).json({erro: err.mensage})

    }

 });
    export default router;

    router.post('/', (req,rest ) => {
      try {
         FileSystem.CadastrarFilme( req, res);
      }
      catch(err){
         res.status(500).json({erro:err.mensage})
    };
   });