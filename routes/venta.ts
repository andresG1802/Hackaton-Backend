import { Router } from 'express';
import { deleteVenta, getVentas, postVenta, putVenta } from '../controllers/venta';

const router = Router();

router.get('/',getVentas);
router.post('/',postVenta);
router.put('/:id',putVenta);
router.delete('/:id',deleteVenta);

export default router;
