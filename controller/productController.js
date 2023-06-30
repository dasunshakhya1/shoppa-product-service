import {add, getAll, getById} from "../services/productService.js";

export const getAllProducts = (req, res) => {
    getAll().then(products => res.status(200).send({products}))
}


export const getProductById = (req, res) => {
    const id = req.params.id
    getById(id).then(product => {
        if (product.length > 0) {
            res.status(200).send({product: product[0]})
        } else {
            res.status(404).send({error: `Product with id ${id} not found`})
        }
    })
}


export const addProduct = (req, res) => {
    const {name, description, vendor, price} = req.body
    add({name, description, vendor, price}).then(product => {
        const {insertId} = product
        res.status(201).send({product: {id: insertId, name, description, vendor, price}})
    }).catch(err=>{
        res.status(500).send(err)
    })
}