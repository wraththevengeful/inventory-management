const express = require('express');
const indexRouter = express.Router();
const indexController = require('../controllers/index_controller')

indexRouter.get('/', indexController.getIndexAllItems);

module.exports = indexRouter;