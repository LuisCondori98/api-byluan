import { Router } from "express";
import { uploader } from "../utils.js"
import productModel from "../../models/productModel.js";

export const productsRouter = Router()

productsRouter.get("/", async (req, res) => {

  const prods = await productModel.find()

  return res.json(prods)
})

productsRouter.post("/", uploader.single("thumbnail"), async (req, res) => {

  const body = req.body

  const prodExisted = await productModel.findOne({ description: req.body.description, title: req.body.title})

  if(!prodExisted) {
    const prodSend = await productModel.create(body)
  }
  else {
    console.log("producto ya existe")
  }

  return res.status(200).json(body)
})

productsRouter.delete("/:id", async (req, res) => {

  const id = req.params.id

  const prod = await productModel.deleteOne({_id: id})

  console.log(prod)

})
