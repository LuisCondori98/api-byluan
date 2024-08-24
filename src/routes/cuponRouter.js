import { Router } from "express";

export const cuponRouter = Router()

cuponRouter.post("/", (req, res) => {

  const body = req.body

  const cupones = ["GOKU", "KONG", "MARIO", "RESGUARD", "SERGIO"]

  const cuponExist = cupones.includes(body.cupon)

  console.log(cuponExist)

  if(body.cupon = cuponExist) {

    return res.json({
      status: "success",
      dscto: 0.15
    })
  } else {
    
    return res.json({
      status: "error",
    })
  }
})
