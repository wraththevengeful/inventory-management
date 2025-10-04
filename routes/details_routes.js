const express = require('express')
const detailsRouter = express.Router();
const detailsController = require('../controllers/details_controller')

detailsRouter.all('/item/:itemid', detailsController.getItemDetails);

module.exports = detailsRouter;