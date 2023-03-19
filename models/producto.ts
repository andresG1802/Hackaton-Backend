import {DataTypes} from 'sequelize';
import db from '../db/connection';

const Producto = db.define('Producto',{
    nombre:{
        type:DataTypes.STRING
    },
    categoria:{
        type:DataTypes.STRING
    },
    precio:{
        type:DataTypes.FLOAT
    },
    estado:{
        type:DataTypes.BOOLEAN
    }
},
{
    //Para que corra el modelo
    timestamps:false
});


export default Producto;