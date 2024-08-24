import { Router } from "express";
import { UserManager } from "../../Manager/userManager.js";
import { createHash, isValidPassword } from "../../utils.js";
import userModel from "../../models/userModel.js";

const user = new UserManager()

export const userRouter = Router()

userRouter.get("/", async (req, res) => {

  const users = await user.getAllUsers()

  console.log(users)

  return res.json(users)

})

userRouter.post("/login", async (req, res) => {

  const userExist = await user.getUser(req.body.email)
  
  if(userExist) {

    const body = req.body

    const userLogin = await user.getUser(body.email)

    return res.json({
      status: "user",
      user: userLogin
    })
  } else {
    console.log("user no existe")

    return res.json({
      status: "user not existed"
    })
  }
})

userRouter.post("/register", async (req, res) => {

  const userExist = await user.getUser(req.body.email)

  if(!userExist) {

    const body = req.body

    body.password = createHash(body.password)

    const userCreate = await user.addUser(body)

    return res.json({
      status: "user create",
    })
  } else {

    return res.json({
      status: "user existed",
    })
  }
})
