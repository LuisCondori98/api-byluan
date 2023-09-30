import { Router } from "express";
import userModel from "../../models/userModel.js";

export const userRouter = Router()

userRouter.post("/", async (req, res) => {

  const body = req.body;

  const user = await userModel.findOne({email: body.email, password: body.password})
  
  console.log(user)

  return res.json({status: "succes", role: "user"})
})

userRouter.post("/register", async (req, res) => {

  const body = req.body

  const userExisted = await userModel.findOne({ email: req.body.email })

  if(userExisted) {

    console.log("usuario ya existe")

    return res.json({
      user: "user-exist",
    })
  } else {

    const userReg = await userModel.create(body)

    return res.json({
      user: "user-register",
      status: true
    })

  }
})
