
module.exports = app =>{
    
    app.get('/atendimentos', (req, res)=> {res.send('você está na rota atendimentos')});

    app.post('/atendimentos', (req, res) => 
    {   console.log(req.body)
        res.send('voce está na rota de atendimentos e está realizando um post')
    });
}
