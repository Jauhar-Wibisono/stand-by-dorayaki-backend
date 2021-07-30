  
const express = require('express')
const router = express.Router()
const stokTokoController = require('../controllers/stok_toko.controller');

// create new stok
// fill request body with stok json
router.post('/', stokTokoController.create);

// get toko
// use query param "id_dorayaki" i.e. localhost:5000/stok_toko?id_dorayaki=1 to get stok by dorayaki id
// use query param "id_toko" i.e. localhost:5000/stok_toko?id_toko=1 to get stok by toko id
// leave blank to get all stok
router.get('/', stokTokoController.get);

// update stok
// fill request body with stok json
router.patch('/', stokTokoController.update);

// delete toko
// use query param "id_dorayaki" and "id_toko"
// i.e. localhost:5000/stok_toko?id_dorayaki=1&id_toko=1
// to specify deleted stok
router.delete('/', stokTokoController.delete);

module.exports = router;