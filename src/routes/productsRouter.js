import { Router } from "express";
import { uploader } from "../../utils.js"
import { ProductManager } from "../../Manager/productManager.js";
import productModel from "../../models/productModel.js";

export const productsRouter = Router()

const productManager = new ProductManager()

productsRouter.get("/", async (req, res) => {

  const {limit} = req.query
  const {category} = req.query

  const product = await productManager.getModelPaginate(category, limit)

  return res.json(product)
})

productsRouter.get("/:id", async (req, res) => {

  const id = req.params.id

  const product = await productManager.getProductById(id)

  return res.json(product)
})

productsRouter.post("/", async (req, res) => {

  const body = req.body

  const product = await productModel.create(body)

  console.log(body)

  return res.json({
    status: "success",
    product: product
  })
})
