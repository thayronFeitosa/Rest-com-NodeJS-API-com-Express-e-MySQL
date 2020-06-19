const Atendimentos = require('../model/atendimentos')
module.exports = app =>{
    
    app.get('/atendimentos', (req, res)=> 
    {
        Atendimentos.lista(res);
    });

    app.get('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id);
        Atendimentos.buscarPorId(id, res);

    })



    app.post('/atendimentos', (req, res) => 
    {   
        const atendimento = req.body;
        Atendimentos.adiciona(atendimento, res)
    })
}
