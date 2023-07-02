import {add, deleteById, getAll, getById} from "../services/productService.js";

export const getAllProductsImpl = async (req, res) => {
    const products = await getAll()
    res.status(200).send({products})
}

export const getAllProductsByIdImpl = async (req, res) => {
    const id = req.params.id
    const [product] = await getById(id)

    if (product) {
        res.status(200).send({product})
    } else {
        res.status(404).send({error: `Product with id ${id} not found.`})
    }
}

export const addProductImpl = async (req, res) => {
   try{
       const {name, description, vendor, price} = req.body
       const {insertId}  = await add({name, description, vendor, price})
       res.status(201).send({product: {id: insertId, name, description, vendor, price}})
   }catch (err){
       res.status(500).send(err)
   }
}

export const deleteProductImpl = async (req,res)=>{
    const id = req.params.id
    const prd = await getById(id)
    if (prd.length > 0) {
        const {affectedRows} = await deleteById(id)
        if (affectedRows) {
            res.status(204).send()
        } else {
            res.status(500).send({error: `Something went terribly wrong. Could not delete product with ${id}`})
        }
    } else {
        res.status(404).send({error: `Product with id ${id} not found`})
    }
}