// server.js (Node.js + Express)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Mock database
let users = [];
let anuncios = [];

// Rota de cadastro
app.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
    users.push({ nome, email, senha });
    res.send('Usuário cadastrado com sucesso!');
});

// Rota de login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    const user = users.find(u => u.email === email && u.senha === senha);
    if (user) {
        res.send('Login realizado com sucesso!');
    } else {
        res.send('Usuário ou senha incorretos.');
    }
});

// Rota para criar novo anúncio
app.post('/novo-anuncio', (req, res) => {
    const { titulo, descricao, preco, categoria } = req.body;
    anuncios.push({ titulo, descricao, preco, categoria });
    res.send('Anúncio criado com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});