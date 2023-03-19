"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Producto = connection_1.default.define('Producto', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    //Para que corra el modelo
    timestamps: false
});
exports.default = Producto;
//# sourceMappingURL=producto.js.map