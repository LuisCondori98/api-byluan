import { Router } from "express";
import { __dirname } from "../../utils.js";
import nodemailer from "nodemailer";

export const emailRouter = Router()

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "luisbarker11@gmail.com",
    pass: "rszm xorv cuey dqze"
  }
})

emailRouter.post("/sendEmail/:email", async (req, res) => {

  const email = req.params.email

  console.log(email)

  let result = await transport.sendMail({
    from: "ByLuan Shop <msm@gmail.com>",
    to: email,
    subject: "Catalogo",
    html: `
          <div>
            <h3>Gracias por suscribirte ahi te envio el catalogo</h3>
            <img src='/public/img/user.png'>
          </div>`,
    attachments: [{
      filename: "catalogo.rar",
      path: __dirname + "/public/catalogo.rar",
      cid: "perrito.png"
    }]
  })

  return res.json({
    status: "success"
  })
})
