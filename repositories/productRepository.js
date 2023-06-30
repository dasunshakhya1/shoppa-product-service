import {POOL} from "../utils/db-util.js";


const executeQuery = async (query) => {
    const [data, fields] = await POOL.query(query)
    return data
}
export const findAllProducts = () => {
    return executeQuery("SELECT * FROM shoppa.products")
}

export const findProductById = (id) => {
    const query = `SELECT *
                   FROM shoppa.products
                   WHERE ID = ${id}`

    return executeQuery(query)
}

export const createProduct = ({name, description, vendor, price}) => {
    const query = `INSERT INTO shoppa.products (name, description, vendor, price)
                   values ("${name}", "${description}",
                           "${vendor}", ${price})`
    return executeQuery(query)
}
