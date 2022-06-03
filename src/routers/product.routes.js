import { Router } from 'express';
import ProductControllers from '../controllers/product.controllers';

const productRouter = Router();
const productControllers = new ProductControllers();

productRouter.get('/all-product', productControllers.allProduct);
productRouter.get('/list-product/:id', productControllers.listProductById);
productRouter.post('/register-product', productControllers.createNewProduct);
productRouter.put('/update-product/:id', productControllers.updateProduct);
productRouter.delete('/delete-product/:id', productControllers.deleteProduct)

export default productRouter;
