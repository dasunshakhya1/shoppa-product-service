const product = require('../models/product')

class ProductController {
    getAllProducts(req, res) {
        product.findAll().then(products => {
            res.status(200).send({products})
        }).catch(err => {
            res.status(502).send(err)
        })
    }

    _getProductById(id) {
        return product.findByPk(id)
    }

    getProductById(req, res) {
        const id = req.params.id
        this._getProductById(id).then(product => {
            if (product) {
                res.status(200).send({product})
            } else {
                res.status(404).send({error: `Product with id ${id} not found`})
            }
        }).catch(err => {
            res.status(502).send({err})
        })

    }


    deleteProduct(req, res) {
        const id = Number(req.params.id)
        this._getProductById(id).then(prd => {
            if (prd) {
                prd.destroy().then(r => res.status(204).send())
            } else {
                res.status(404).send({error: `Product with id ${id} not found`})
            }
        }).catch(err => res.status(502).send({err}))
    }

    addProduct(req, res) {

        const payload = req.body
        product.create(payload).then(product => {
            res.status(201).send({product})
        }).catch(err => {
            res.status(502).send({err})
        })

    }
}

module.exports = ProductController

// exports.getAllProducts = (req, res) => {
//     product.findAll().then(products => {
//         req.status(200).send(products)
//     }).catch(err => {
//         req.status(502).send(err)
//     })
// }