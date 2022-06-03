import { Router } from "express";
import ProductControllers from "../controllers/product.controllers";

const productRouter = Router();
const productControllers = new ProductControllers();

productRouter.get('/all-product', productControllers.allProduct);


export default productRouter;
