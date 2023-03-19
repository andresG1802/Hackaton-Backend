"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVenta = exports.putVenta = exports.postVenta = exports.getVentas = void 0;
const venta_1 = __importDefault(require("../models/venta"));
const getVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ventas = yield venta_1.default.findAll();
    res.json({ ventas });
});
exports.getVentas = getVentas;
const postVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const venta = venta_1.default.build(body);
        yield venta.save();
        res.json(venta);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postVenta = postVenta;
const putVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const venta = yield venta_1.default.findByPk(id);
        if (!venta) {
            return res.status(404).json({
                msg: 'No existe una venta con el id ' + id
            });
        }
        yield venta.update(body);
        res.json(venta);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putVenta = putVenta;
const deleteVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const venta = yield venta_1.default.findByPk(id);
    if (!venta) {
        return res.status(404).json({
            msg: 'No existe esa venta con ese id' + id
        });
    }
    yield venta.update({ estado: false });
    res.json(venta);
});
exports.deleteVenta = deleteVenta;
//# sourceMappingURL=venta.js.map