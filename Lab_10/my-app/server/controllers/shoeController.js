const Shoe = require('../models/shoeModel');

const getShoes = async (req, res) => {
    const { size, search } = req.query;
    try {
        let query = {};

        if (size) {
            query.size = size;
        }

        if (search) {
            query.name = { $regex: search, $options: 'i' };
        }

        const shoes = await Shoe.find(query);
        res.status(200).json(shoes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getShoe = async (req, res) => {
    const { id } = req.params;
    try {
        const shoe = await Shoe.findById(id);
        if (!shoe) return res.status(404).json({ message: 'Shoe not found' });
        res.status(200).json(shoe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getShoes,
    getShoe
};
