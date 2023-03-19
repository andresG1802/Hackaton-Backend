import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';
import productRoutes from '../routes/productos';

import db from '../db/connection';


class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
        productos:'/api/productos'
    }

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || '8000';

        // Métodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {
            
            await db.authenticate();
            console.log('Database online');

        } catch (error) {
            console.log('Error al conectar la base de datos');
        }
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura del body
        this.app.use( express.json() );

        // Carpeta pública
        this.app.use( express.static('public') );
    }


    routes() {
        this.app.use( this.apiPaths.usuarios, userRoutes );
        this.app.use(this.apiPaths.productos,productRoutes);
    }


    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port );
        })
    }

}

export default Server;