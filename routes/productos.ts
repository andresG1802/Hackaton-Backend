import{Router} from 'express';
import { deleteProducto, getProducto, getProductos, postProducto, putProducto } from '../controllers/producto';
const router = Router();

router.get('/', getProductos);
router.get('/:id', getProducto);
router.post('/', postProducto);
router.put('/:id',putProducto);
router.delete('/:id',deleteProducto);

export default router;
