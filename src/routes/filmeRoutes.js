 import express  from "express";

 const router = express.Router();

 router.get('/',(req,res) =>{
    try{
      filme.BuscarTodosOsFilmes(req,res);

    } catch(err){
        res.status(500).json({erro: err.mensage})
    }
 });
router.get("/:id", (req , res) =>{
   try {
      filme.BuscarFilmePorId(req,res);
   }
   catch(err){
      res.status(500).json({erro: err.message});
   }
});

router.post('/', (req,res) => {
   try {
      filme.CadastrarFilme( req, res);
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
router.delete('/:id',(req,res) =>{
    try {
       filme.DeletarFilme(req ,res);
    } catch (err ){
       res.status(500).json({erro: err.message});
    }
 });
 export default router;