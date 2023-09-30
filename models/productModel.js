import mongoose from "mongoose"

const productSchema = mongoose.Schema({
  title: String,
  thumbnail: String,
  description: String,
  price: Number,
  category: String,
  stock: Number
})

const productModel = mongoose.model("product", productSchema)

export default productModel
