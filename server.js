// Importamos las librerías necesarias
const express = require('express');
const bodyParser = require('body-parser');

// Creamos la aplicación
const app = express();

// Permite leer datos en formato JSON
app.use(bodyParser.json());

// Importamos las rutas
const authRoutes = require('./routes/auth');

// Usamos las rutas
app.use('/api', authRoutes);

// Definimos el puerto
const PORT = 3000;

// Encendemos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:3000`);
});