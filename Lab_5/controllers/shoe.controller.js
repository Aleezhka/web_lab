const Shoe = require('../models/shoe.model');

const getShoes = async (req, res) => {
    try {
        const shoes = await Shoe.find();
        res.status(200).json(shoes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getShoe = async (req, res) => {
    try {
        const { id } = req.params;
        const shoe = await Shoe.findById(id);
        if (!shoe) {
            return res.status(404).json({ message: 'Shoe not found' });
        }
        res.status(200).json(shoe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createShoe = async (req, res) => {
    try {
        const shoe = await Shoe.create(req.body);
        res.status(201).json(shoe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateShoe = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedShoe = await Shoe.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedShoe) {
            return res.status(404).json({ message: 'Shoe not found' });
        }
        res.status(200).json(updatedShoe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteShoe = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedShoe = await Shoe.findByIdAndDelete(id);
        if (!deletedShoe) {
            return res.status(404).json({ message: 'Shoe not found' });
        }
        res.status(200).json({ message: 'Shoe deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getShoes,
    getShoe,
    createShoe,
    updateShoe,
    deleteShoe,
};
