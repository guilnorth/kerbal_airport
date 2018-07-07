const planetaModule = {};
const db = require('../../database/connection');
const Planeta = require('../models/Planeta');

planetaModule.register = async (req, res) => {
    const {nome,setor,descricao} = req.body;

    const novoPlaneta = new Planeta('',nome,setor,descricao);
    try {
        db.query('INSERT INTO planetas SET ?',  novoPlaneta.returnObject(), function(err, result) {
            if (err)
                return res.status(400).send({error: (err.message) ? err.message : 'Registration failed'});

            return res.send(result);
        });

    } catch (err) {
        console.log((err));
        return res.status(400).send({error: (err.message) ? err.message : 'Registration failed'});
    }
};


/*planetaModule.listOne = async (req, res) => {
    try {
        const enterprise = await TransactionModel.findOne(
            {"_id": new ObjectId(req.params.id)}).populate(['enterprise', 'consumer', 'user']);
        return res.status(200).send(enterprise);
    } catch (e) {
        console.log(e);
        return res.status(400).send({error: 'List failed'});
    }

}*/

planetaModule.listAll = async (req, res) => {
    //"user": new ObjectId(req.userId),

    try {
        const planetas = await db.query('SELECT * FROM planetas ORDER BY id DESC', function(err, result) {
            if (err) throw err;
            return res.status(200).send(result);
        });

    } catch (e) {
        console.log(e);
        return res.status(400).send({error: 'List failed'});
    }


}


module.exports = planetaModule;
