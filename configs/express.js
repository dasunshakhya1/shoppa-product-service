
import router from '../routes/productRouter.js'

import express from "express";
import {postErrorHandling, validateRequests} from "../middleware/errorHandleMiddleware.js";
const app = new express()

app.use(express.json())

app.use("/products",router)

export default  app