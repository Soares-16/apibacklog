import { Sequelize } from "sequelize"; 

const sequelize = new Sequelize('backlog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao MySQL com Sequelize');
    })
    .catch(err => {
        .console.error('Não foi possivel conectar ao banco de doados!' , err);
    });
