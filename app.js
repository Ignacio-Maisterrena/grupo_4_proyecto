const express = require('express');
const path = require('path');
const publicPath = path.resolve(__dirname, './public');

const app = express();
app.use( express.static(publicPath));

app.listen(3000, () => {
    console.log('El servoidor está corriendo en el puerto 3000');
});

app.get('/', (req, res) => {
    let homePath = path.resolve(__dirname, './views/home.html');
    res.sendFile(homePath);
})

app.get('/login', (req, res) => {
    let loginPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(loginPath);
})

app.get('/register', (req, res) => {
    let registerPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(registerPath);
})
app.get('/productDetail', (req, res) => {
    let registerPath = path.resolve(__dirname, './views/productDetail.html');
    res.sendFile(registerPath);
})
app.get('/header', (req, res) => {
    let registerPath = path.resolve(__dirname, './views/header.html');
    res.sendFile(registerPath);
})

app.get('/carrito', (req, res) => {
    let registerPath = path.resolve(__dirname, './views/carrito.html');
    res.sendFile(registerPath);
})