"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('usuarios', {
    usuarioID: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombreUsuario: {
        type: sequelize_1.DataTypes.STRING
    },
    CorreoElectronico: {
        type: sequelize_1.DataTypes.STRING
    },
    Contrasena: {
        type: sequelize_1.DataTypes.STRING
    },
    FechaRegistro: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    //para que corra el modelo 
    timestamps: false
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map