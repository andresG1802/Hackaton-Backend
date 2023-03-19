"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Venta = connection_1.default.define('Venta', {
    montoPagar: {
        type: sequelize_1.DataTypes.FLOAT
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
}, {
    timestamps: false
});
exports.default = Venta;
//# sourceMappingURL=venta.js.map