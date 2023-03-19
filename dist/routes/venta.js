"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const venta_1 = require("../controllers/venta");
const router = (0, express_1.Router)();
router.get('/', venta_1.getVentas);
router.post('/', venta_1.postVenta);
router.put('/:id', venta_1.putVenta);
router.delete('/:id', venta_1.deleteVenta);
exports.default = router;
//# sourceMappingURL=venta.js.map