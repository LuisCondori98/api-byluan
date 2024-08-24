import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { productsRouter } from './routes/productsRouter.js';
import { userRouter } from './routes/userRouter.js';
import { emailRouter } from './routes/emailRouter.js';
import { cuponRouter } from './routes/cuponRouter.js';

const app = express();

const PORT = 8080

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static("public"))

const MONGO_DB = "mongodb+srv://luisbarker11:IvkCQGSAr89lPcCh@cluster.p21e02a.mongodb.net/Steelecht?retryWrites=true&w=majority"

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
