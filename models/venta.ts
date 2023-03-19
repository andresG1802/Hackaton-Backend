import { DataTypes } from "sequelize";
import db from '../db/connection';

const Venta = db.define('Venta',{
    montoPagar: {
        type:DataTypes.FLOAT
    },
    fecha:{
        type:DataTypes.DATE
    },
    estado:{
        type:DataTypes.BOOLEAN
    }
},
{
    timestamps:false
});
export default Venta;