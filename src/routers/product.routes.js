import { Router } from 'express';
import ProductControllers from '../controllers/product.controllers.js';
import checkIdOfProduct from '../middleware/checkIdOfProduct.middleware.js';
import checkDataOfProduts from '../middleware/checkDataOfProduct.middleware.js';

const productRouter = Router();
const productControllers = new ProductControllers();

productRouter.get('/all-product', productControllers.allProduct);
productRouter.get(
  '/list-product/:id',
  checkIdOfProduct,
  productControllers.listProductById,
);
productRouter.post(
  '/register-product',
  checkDataOfProduts,
  productControllers.createNewProduct,
);
productRouter.put(
  '/update-product/:id',
  checkDataOfProduts,
  checkIdOfProduct,
  productControllers.updateProduct,
);
productRouter.delete(
  '/delete-product/:id',
  checkIdOfProduct,
  productControllers.deleteProduct,
);

export default productRouter;
