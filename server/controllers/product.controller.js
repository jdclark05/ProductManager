const Products = require('../models/product.model');


const getAllProducts = (req, res) => {
    Products.find({})
        .then(allProducts => res.json({allProducts: allProducts}))
        .catch((err) => res.json({message: "Error: Search request not fulfilled", error:err}))
}

const getOneProduct = (req, res) => {
    Products.find({_id: req.params.id})
        .then(newProduct => res.json({products: newProduct}))
        .catch((err) => res.json({message: "Error: Search request not fulfilled", error:err}))
}

const createProduct = (req, res) => {
    Products.create(req.body)
    .then((newProduct) => res.json({product: newProduct}))
    .catch(err => res.json({message: "Error: Create request not fulfilled", error:err}))
}

const updateProduct = (req, res) => {
    Products.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updateProduct => res.json({product: updateProduct}))
    .catch((err) => res.json({message: "Error: Update request not fulfilled", error:err}))
}

const deleteProduct = (req, res) => {
    Products.findByIdAndDelete({_id: req.params.id })
        .then(result => req.json({result: result}))
        .catch(err => res.json({message: "Error: Delete request not fulfilled", error:err}))
}

module.exports = { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct };

