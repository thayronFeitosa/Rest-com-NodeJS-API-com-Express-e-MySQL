const express = require('express');
const app = express();

app.listen(3000, () => console.log('Servidor rorando na porta 3000'))

app.get('/atendimentos', (req, res)=> res.send('você está na rota atendimentos'))
