const Atendimentos = require('../model/atendimentos')
module.exports = app =>{
    
    app.get('/atendimentos', (req, res)=> {res.send('você está na rota atendimentos')});



    app.post('/atendimentos', (req, res) => 
    {   
        const atendimento = req.body;
        Atendimentos.adiciona(atendimento)
        res.send('POST atendimentos')
    });
}
