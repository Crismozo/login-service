const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // 

const app = express();

// CONFIGURACIÓN DE CORS
app.use(cors({
    origin: '*', // permite cualquier origen
}));

app.use(bodyParser.json());

// Rutas
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

// Puerto
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
});