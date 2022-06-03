import mongoose from 'mongoose';

const {Schema, model} = mongoose

const ProductSchema = new Schema(
  {
    club: { type: String, require: true, unique: true },
    description: { type: String, require: true },
    img: { type: String, require: true },
    price: { type: Number, require: true },
  },
  { versionKey: false },
);

const Product = model('catalog_jerseys', ProductSchema);

export default Product;
