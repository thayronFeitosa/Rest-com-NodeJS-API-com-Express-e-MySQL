const moment = require('moment')
const conexao = require('../infraestrutura/conexao');

class Atendimento{
    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss');
        const data  = moment(atendimento.data,'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        const atendimentoDatado= {...atendimento, dataCriacao, data};

        const sql = 'INSERT INTO atendimentos SET ?';

        conexao.query(sql, atendimentoDatado, (erro, resultado) => {
            if(erro){
                res.status(404).json(erro);
            }else{
                res.status(201).json(resultado);
            }
        });
    }
}

module.exports = new Atendimento()