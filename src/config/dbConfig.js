import { Sequelize } from "sequelize"; 

const sequelize = new Sequelize('back]
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Conectado ao MySQL com Sequel')

    })
