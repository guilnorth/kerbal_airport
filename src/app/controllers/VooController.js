const vooModule = {};
const db = require('../../database/connection');
const Voo = require('../models/Voo');

vooModule.register = async (req, res) => {

    const {passageiro,data_embarque,data_desembarque,aeroporto,passagem_num,aviao} = req.body;

    const novoVoo = new Voo('',passageiro,data_embarque,data_desembarque,aeroporto,passagem_num,aviao);
    try {
        db.query('INSERT INTO voos SET ?',  novoVoo.returnObject(), function(err, result) {
            if (err){
                console.log(err)
                return res.status(400).send({error: (err.message) ? err.message : 'Registration failed'});
            }

            return res.send(result);
        });

    } catch (err) {
        console.log((err));
        return res.status(400).send({error: (err.message) ? err.message : 'Registration failed'});
    }
};


vooModule.listOne = async (req, res) => {
    try {
        await db.query('SELECT v.data_embarque, v.data_desembarque, v.passagem_num,' +
            ' p.nome AS "Passageiro", p.etnia, p.dataNascimento, a.nome AS "Aeroporto" , pl.nome AS "Planeta" , ' +
            ' av.modelo AS "aviaoModelo", av.empresa AS "Empresa" ' +
            ' ' +
            ' FROM voos v ' +
            'INNER JOIN passageiros p ON v.idPassageiro = p.id ' +
            'INNER JOIN avioes av ON v.idAviao = av.id ' +
            'INNER JOIN aeroportos a ON v.idAeroporto = a.id ' +
            'INNER JOIN planetas pl ON a.idPlaneta = pl.id ' +
            ' WHERE v.passagem_num = ? ORDER BY v.id DESC ',[req.params.numPassagem], function(err, result) {
            if (err) throw err;

            return res.status(200).send(result);
        });
    } catch (e) {
        console.log(e);
        return res.status(400).send({error: 'List failed'});
    }

}

vooModule.listAll = async (req, res) => {
    //"user": new ObjectId(req.userId),

    try {
         await db.query('SELECT * FROM voos v ORDER BY v.id DESC', function(err, result) {
            if (err) throw err;
            console.log(result)
            return res.status(200).send(result);
        });

    } catch (e) {
        console.log(e);
        return res.status(400).send({error: 'List failed'});
    }
}

vooModule.listAllAeroportos = async (req, res) => {
    //"user": new ObjectId(req.userId),

    try {
         await db.query('SELECT * FROM aeroportos ORDER BY id DESC', function(err, result) {
            if (err) throw err;
            return res.status(200).send(result);
        });

    } catch (e) {
        console.log(e);
        return res.status(400).send({error: 'List failed'});
    }


}

vooModule.listAllAvioes = async (req, res) => {
    //"user": new ObjectId(req.userId),

    try {
        await db.query('SELECT * FROM avioes ORDER BY id DESC', function(err, result) {
            if (err) throw err;
            return res.status(200).send(result);
        });

    } catch (e) {
        console.log(e);
        return res.status(400).send({error: 'List failed'});
    }


}

module.exports = vooModule;
