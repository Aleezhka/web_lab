const mongoose = require('mongoose');

const shoeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
    },
    size: {
        type: Number,
        required: [true, "Please enter product size"],
    },
}, {
    timestamps: true,
});

const Shoe = mongoose.model("Shoe", shoeSchema);

module.exports = Shoe;
