import { DataTypes , Sequelize} from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('usuarios', {
    usuarioID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombreUsuario: {
        type: DataTypes.STRING
    },
    CorreoElectronico: {
        type: DataTypes.STRING
    },
    Contrasena:{
        type:DataTypes.STRING
    },
    FechaRegistro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
},
{
    //para que corra el modelo 
    timestamps:false
});


export default Usuario;