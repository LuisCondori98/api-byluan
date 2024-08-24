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
    subject: "Bienvenido a ByLuan",
    html: `
          <div>
            <h3>Recibiras las mejores ofertas y cupones</h3>
            <img src="cid:offer"/>
          </div>`,
    attachments: [{
      filename: "offer.jpg",
      path: __dirname + "/public/img/offer.jpg",
      cid: "offer"
    }]
  })

  return res.json({
    status: "success"
  })
})
