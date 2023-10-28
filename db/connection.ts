import { Sequelize } from 'sequelize';


const db = new Sequelize('hackaton-bcp','root', '', {
    host: 'localhost',
    dialect: 'mysql'
    //logging: false,
});

export default db;
