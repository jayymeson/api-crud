import Product from '../models/product.model';

class ProductServices {
  async allProduct() {
    const product = await Product.find();

    if (product.length === 0) {
      throw { status: 404, message: 'No products found' };
    }

    return product;
  }
}

export default ProductServices;
