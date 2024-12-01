const express = require('express');
const {
    getShoes,
    getShoe
} = require('../controllers/shoeController');

const router = express.Router();

router.get('/', getShoes);   
router.get('/:id', getShoe);

module.exports = router;
