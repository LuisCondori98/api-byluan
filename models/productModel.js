import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const productSchema = mongoose.Schema({
  title: String,
  thumbnail: String,
  description: String,
  category: String,
  stock: Number
})

productSchema.plugin(mongoosePaginate)

const productModel = mongoose.model("product", productSchema)

export default productModel
