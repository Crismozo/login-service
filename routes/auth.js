const express = require('express');
const router = express.Router();

let usuarios = [];

router.post('/register', (req, res) => {
    const { usuario, password } = req.body;

    if (!usuario || !password) {
        return res.status(400).json({
            mensaje: 'Faltan datos'
        });
    }

    usuarios.push({ usuario, password });

    res.json({
        mensaje: 'Usuario registrado correctamente'
    });
});

router.post('/login', (req, res) => {
    const { usuario, password } = req.body;

    const user = usuarios.find(u =>
        u.usuario === usuario && u.password === password
    );

    if (user) {
        res.json({
            mensaje: 'Autenticación satisfactoria'
        });
    } else {
        res.status(401).json({
            mensaje: 'Error en la autenticación'
        });
    }
});

module.exports = router;