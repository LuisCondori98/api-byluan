import productModel from "../models/productModel.js"

export class ProductManager {

  constructor() {

  }

  async getProducts() {

    const products = await productModel.find()

    return products
  }

  async getProductById(id) {

    const product = await productModel.find({_id: id})

    return product
  }

  async getModelPaginate(categoryId, limit) {

    const products = await productModel.paginate(categoryId ? {category: categoryId} : {}, {limit: limit})

    return products
  }

  async addProduct(data) {

    const product = await productModel.create({data})

    return product
  }
}