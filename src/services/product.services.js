import Product from '../models/product.model';

class ProductServices {
  async allProduct() {
    const product = await Product.find();

    if (product.length === 0) {
      throw { status: 404, message: 'No products found' };
    }

    return product;
  }

  async listProductById({ id }) {
    const productID = await Product.findById(id);

    return productID;
  }

  async createNewProduct({ club, description, img, price }) {
    const newProduct = {
      club,
      description,
      img,
      price,
    };
    try {
      const product = await Product.create(newProduct);

      return product;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct({ club, description, img, price, id }) {
    const updatedProduct = {
      club,
      description,
      img,
      price,
    };

    try {
      await Product.updateOne({ _id: id }, updatedProduct);

      const product = await Product.findById(id);

      return product;
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct({ id }) {
    const product = await Product.findByIdAndDelete(id);

    return product;
  }
}

export default ProductServices;
