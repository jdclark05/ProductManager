const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/form/allproducts', ProductController.getAllProducts);
    app.get('/form/:id', ProductController.getOneProduct);
    app.post('/form/product', ProductController.createProduct);
    app.put('/form/:id/update', ProductController.updateProduct);
    app.delete("/form/:id/delete", ProductController.deleteProduct);
}