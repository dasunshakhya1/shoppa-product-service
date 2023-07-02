import {
    addProductImpl,
    deleteProductImpl,
    getAllProductsByIdImpl,
    getAllProductsImpl
} from "../serviceImpls/productServiceImpl.js";

export const getAllProducts = (req, res) => {
    getAllProductsImpl(req, res)
}


export const getProductById = (req, res) => {
    getAllProductsByIdImpl(req, res)
}


export const addProduct = (req, res) => {
    addProductImpl(req, res)
}


export const deleteProduct = async (req, res) => {
    deleteProductImpl(req, res)
}