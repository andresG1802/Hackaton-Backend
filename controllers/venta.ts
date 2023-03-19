import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Venta from '../models/venta';


export const getVentas = async(req:Request,res:Response)=>{
    const ventas = await Venta.findAll();

    res.json({ventas});
}

export const postVenta = async(req:Request,res:Response) =>{
    const { body } = req;
    try{
        const venta = Venta.build(body);
        await venta.save();

        res.json(venta);
    }catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }
}

export const putVenta = async( req: Request , res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const venta = await Venta.findByPk( id );
        if ( !venta ) {
            return res.status(404).json({
                msg: 'No existe una venta con el id ' + id
            });
        }

        await venta.update( body );

        res.json( venta );

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}

export const deleteVenta = async (req:Request,res:Response)=>{
    const {id} = req.params;

    const venta = await Venta.findByPk(id);
    if(!venta){
        return res.status(404).json({
            msg:'No existe esa venta con ese id' + id
        });
    }
    await venta.update({estado:false});

    res.json(venta);
}