const express = require('express');
const addRouter = express.Router();
const addController = require("../controllers/add_controller");

addRouter.get('/item', addController.getOpenAddItemForm);
addRouter.get('/category', addController.getOpenAddCategoryForm);
addRouter.get('/vendor', addController.getOpenAddVendorForm);

addRouter.post('/item', addController.postAddNewItem);
addRouter.post('/category', addController.postAddNewCategory);
addRouter.post('/vendor', addController.postAddNewVendor);

module.exports = addRouter;