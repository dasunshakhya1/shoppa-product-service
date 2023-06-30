import express from "express";
import {addProduct, deleteProduct, getAllProducts, getProductById} from "../controller/productController.js";
import {createProductSchema, getProductSchema} from "../schemas/productSchemas.js";
import {postErrorHandling} from "../middleware/errorHandleMiddleware.js";


const router = express.Router()


router.get("/",  (req, res) => {
    getAllProducts(req, res)
})


router.get("/:id", getProductSchema, postErrorHandling,(req, res) => {
    getProductById(req, res)
})

router.post("/create", createProductSchema, postErrorHandling, (req, res) => {
    addProduct(req, res)
})

router.delete('/delete/:id', getProductSchema, postErrorHandling, (req, res) => {
    deleteProduct(req, res)

})

export default router