const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static('public'));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'views', 'index.html')))
app.get('/hamilton', (req, res)=> res.sendFile(path.join(__dirname, 'views', 'hamilton.html')))
app.get('/lovelace', (req, res)=> res.sendFile(path.join(__dirname, 'views', 'lovelace.html')))
app.get('/turing', (req, res)=> res.sendFile(path.join(__dirname, 'views', 'turing.html')))
app.get('/hopper', (req, res)=> res.sendFile(path.join(__dirname, 'views', 'hopper.html')))
app.get('/berners-lee', (req, res)=> res.sendFile(path.join(__dirname, 'views', 'berner-lee.html')))
app.get('/babbage', (req, res) => res.sendFile(path.join(__dirname, 'views', 'babbage.html')))
app.get('/clarke', (req, res) => res.sendFile(path.join(__dirname, 'views', 'clarke.html')))

app.listen(3030, () => console.log("Servidor corriendo en http://localhost:" + port))

