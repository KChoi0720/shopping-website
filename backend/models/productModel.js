import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  size: { type: Array, required: true },
  bestseller: { type: Boolean },
  date: { type: Number, required: true },
});

// to create the model, it will use product first, if not available, then will create new model 'product'
const prooductModel = mongoose.models.product || mongoose.model("product", productSchema)

export default prooductModel;




