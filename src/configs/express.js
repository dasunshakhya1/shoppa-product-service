
import router from '../routes/productRouter.js'

import express from "express";
const app = new express()

app.use(express.json())

app.use("/products",router)

export default  app