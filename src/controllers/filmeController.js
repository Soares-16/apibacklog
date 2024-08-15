import filmeModel from "../models/filmeModel.js";

class filmes{
    async BuscarTodosOsFilmes(req, res){
        try{
            const filmes = await filmeModel.findAll();
            res.json(filmes);
        } catch(err){
            res.status(500).json({erro: err.message});
        }
    }
}

export default filmes {
    async CadastrarFilme (req, res){
        try{
            const filmeCadastrado = await filmeModel.create();
            res.json({message:'Fime criado com sucesso!',filmeCadastrado});
         } catch(err){
            res.status(500).json({erro: err.message});
    }
};
await filmeModel.create(req,body);