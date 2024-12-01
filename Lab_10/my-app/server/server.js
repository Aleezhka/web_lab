const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const shoeRoutes = require('./routes/shoeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use('/api/shoes', shoeRoutes);

mongoose.connect("mongodb+srv://admin:kzOCzieQKeGfk8Iq@backenddb.cbtb6.mongodb.net/Lab-5?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.log("Database connection error:", error.message);
});