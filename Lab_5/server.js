const express = require('express');
const mongoose = require('mongoose');
const shoeRoutes = require('./routes/shoeRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/shoes', shoeRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/create.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'create.html'));
});

app.get('/edit.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'edit.html'));
});

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
