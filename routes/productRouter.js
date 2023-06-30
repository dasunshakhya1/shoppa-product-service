import express from "express";
import {addProduct, getAllProducts, getProductById} from "../controller/productController.js";
import {createProductSchema} from "../schemas/createProductSchema.js";
import {postErrorHandling} from "../middleware/errorHandleMiddleware.js";

const router = express.Router()


router.get("/", (req, res) => {
    getAllProducts(req, res)
})


router.get("/:id", (req, res) => {
    getProductById(req, res)
})

router.post("/create", createProductSchema, postErrorHandling, (req, res) => {
    console.log(req.body)
    addProduct(req, res)
})

export default router