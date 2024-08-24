import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from "dotenv"
import { productsRouter } from './routes/productsRouter.js';
import { userRouter } from './routes/userRouter.js';
import { emailRouter } from './routes/emailRouter.js';
import { cuponRouter } from './routes/cuponRouter.js';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000

console.log(process.env.PORT)

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static("public"))

const MONGO_DB = process.env.MONGO_URL

mongoose.connect(MONGO_DB)
  .then(() => {
    console.log("Connected to Mongo")
  })
  .catch(err => {
    console.log(err.message)
  })

app.get("/", (req, res) => {

  return res.json({
    status: "success",
    date: new Date().toLocaleString()
  })
})

app.use("/api/mail", emailRouter)
app.use("/api/cupon", cuponRouter)
app.use("/api/users", userRouter)
app.use("/api/products", productsRouter)

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
