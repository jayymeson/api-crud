import Product from '../models/product.model';
import mongoose from 'mongoose';

const checkIdOfProduct = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID invalid' });
  }

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).send('Product not found');
  }
  
  next()
};

export default checkIdOfProduct;
