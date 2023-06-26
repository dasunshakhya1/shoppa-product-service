const express = require('express')
const app = new express()


// routes
const productRoute = require('./routes/product-router')

// other imports
const sequelize = require('./utils/model-init')


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use("/products", productRoute)


app.use((error, req, res, next) => {
    res.status(500).send(error)
})
sequelize.then(r => {
    app.listen(3000)
}).catch(err => {
    console.log(err)
})