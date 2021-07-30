  
const express = require('express')
const router = express.Router()
const tokoController = require('../controllers/toko.controller');

// create new toko
// fill request body with toko json
router.post('/', tokoController.create);

// get toko
// use query param "id" i.e. localhost:5000/toko?id=1 to get toko by id
// leave blank to get all toko
router.get('/', tokoController.get);

// update toko
// fill request body with toko json
router.patch('/', tokoController.update);

// delete toko
// use query param "id" i.e. localhost:5000/toko?id=1 to specify deleted toko
router.delete('/', tokoController.delete);

module.exports = router;