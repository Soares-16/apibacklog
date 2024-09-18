import filmeModel from "../models/filmeModel.js";

export default class Filmes{
    async BuscarTodosOsFilmes(req, res){
        
        try{
            const filmes = await filmeModel.findAll();
            res.json(filmes);
        } catch(err){
           return res.status(500).json({erro: err.message});
        }
 
    }
    async BuscarFilmePorId(req,res){
        try{
            const filmeEncontrado = await filmeModel.findByPk(req.params.id)
            if(!filmeEncontrado){
                return res.status(404).json({erro:'Filme não encontrado'});
            }
            return res.json(filmeEncontrado);
            }
        
        catch(err){
            res.status(500).json({ erro:err.message});
        }
    }

    async CadastrarFilme (req, res){
        try{
            const filmeCadastrado = await filmeModel.create(req,body);
           return res.json({message:'Filme criado com sucesso!',filmeCadastrado});
         }
          catch(err){
            res.status(500).json({erro: err.message});
         }    
    };
    async AtualizarFilme(req,res){
        try{
            const [atualizado]=await filmeModel.update(req.body,
                { where:{id: req.params.id }}
            );
            if(atualizado){
                const filmeAtualizado = await filmeModel.findByPk(req.params.id);
               return res.json({mensagem: 'Filme atualizado com sucesso!',filme:filmeAtualizado});
            }else{
               return res.status(404).json({erro:'Filme não encontrado"'});
            }
        }
        catch(err){
            res.status(500).json({erro:err.message});
        }
    }
    async DeletarFilme(req,res){
        try {
            const FilmeDeletado = await filmeModel.destroy({
                where:{ id:req.params.id}
            });
            if(FilmeDeletado){
                res.status(204).json({mensagem:'Filme deletado com Sucesso'});
            }else{
                res.status(404).json({erro:'Filme não encontrado'})
            }
        } catch (err) {
            res.status(500).json({erro:err.mensagem});
        }
    }
 };


