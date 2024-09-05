 import express  from "express";

 const router = express.Router();

 router.get('/',(req,res) =>{
    try{
      

    } catch(err){
        res.status(500).json({erro: err.mensage})

    }
 });
router.get("/:id", (req , res) =>{
   try {
      filmes.BuscarFilmePorId(req,res);
   }
   catch(err){
      res.status(500).json({erro: err.mensage});
   }
});
    export default router;

    router.post('/', (req,res) => {
      try {
         filmes.CadastrarFilme( req, res);
      }
      catch(err){
         res.status(500).json({erro:err.mensage})
    };
   });
   router.put('/:id',(req,res)=>{
      try{
         filme.AtualizarFilme(req,res);
      }catch(err){
         res.status(500).json({erro:err.mensage});
      }
   });