import {createProduct, findAllProducts, findProductById} from "../repositories/productRepository.js";

export const getAll = () => findAllProducts()
export const getById = (id) => findProductById(id)

export const add = ({name, description, vendor, price}) => createProduct({name, description, vendor, price})



