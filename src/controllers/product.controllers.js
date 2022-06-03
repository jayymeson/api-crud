import ProductServices from '../services/product.services';

const productServices = new ProductServices();

class ProductControllers {
  async allProduct(req, res) {
    try {
      const product = await productServices.allProduct();

      res.send(product);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }
}

export default ProductControllers;
