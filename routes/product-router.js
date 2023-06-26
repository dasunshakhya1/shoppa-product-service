const express = require('express')
const router = express.Router();


const ProductController = require('../controllers/product-controller')
const pc = new ProductController()
router.get("/", (req, res) => {
    pc.getAllProducts(req, res);
})


router.post("/create", (req, res) => {
    pc.addProduct(req, res)
})
router.delete("/delete/:id",(req,res)=>{
    pc.deleteProduct(req,res)
})
router.get('/:id',(req,res)=>{
    pc.getProductById(req,res)
})








module.exports = router;