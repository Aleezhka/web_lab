const express = require('express');
const {
    getShoes,
    createShoe,
    updateShoe,
    deleteShoe,
    getShoe
} = require('../controllers/shoe.controller');

const router = express.Router();

router.get('/', getShoes);
router.post('/', createShoe);
router.get('/:id', getShoe);
router.put('/:id', updateShoe);
router.delete('/:id', deleteShoe);

module.exports = router;
