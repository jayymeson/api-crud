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

  async listProductById(req, res) {
    const id = req.params.id;

    const product = await productServices.listProductById({ id });

    res.send(product);
  }

  async createNewProduct(req, res) {
    const { club, description, img, price } = req.body;

    try {
      const newProduct = await productServices.createNewProduct({
        club,
        description,
        img,
        price,
      });

      res.status(201).send(newProduct);
    } catch (error) {
      if (error.cod === 11000) {
        res.status(400).send('Product already registered');
      }
    }
  }

  async updateProduct(req, res) {
    const { club, description, img, price } = req.body;
    const id = req.params.id;

    try {
      const updatedProduct = await productServices.updateProduct({
        club,
        description,
        img,
        price,
        id,
      });

      res.send(updatedProduct);
    } catch (error) {
      res.status(400).send('Product already found');
    }
  }

  async deleteProduct(req, res) {
    const id = req.params.body;

    const product = await productServices.deleteProduct({ id });

    res.status(200).send(product);
  }
}

export default ProductControllers;
