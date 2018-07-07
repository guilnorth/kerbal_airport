const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const db = require('../../database/connection');

const authConfig = require('../../config/auth');
const Administrador = require('../models/Administrador');
const authModule = {};

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}


authModule.register = async (req, res) =>{
    const { login,senha } = req.body;

    const adm = new Administrador('',login,senha);
    try {
        db.query('SELECT id FROM administradores WHERE login = ?', [login], async (err, result) => {
            if (err)
                return res.status(400).send({error: (err.message) ? err.message : 'Select failed'});

            if (!result || !result.length){
                /** Encript Password **/
                adm.senha = await bcrypt.hash(senha, 10);

                db.query('INSERT INTO administradores SET ?', adm.returnObject(),
                    function(err, result) {
                        if (err){
                           console.log(err)
                            return res.status(400).send({error: (err.message) ? err.message : 'Registration failed'});
                        }

                        adm.senha = undefined;
                        return res.send({
                            administrador:adm.returnObject(),
                            token: generateToken({ login: adm.login }),
                        });
                })
            }
            else{
                return res.status(400).send({ error: 'User already exists' });
            }

        });

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Registration failed' });
    }
};


authModule.authenticate = async (req, res) => {
  const { login, senha } = req.body;

  console.log( login, senha)

    try {
        db.query('SELECT * FROM administradores WHERE login = ?', [login], async (err, result) => {
            if (err)
                return res.status(400).send({error: (err.message) ? err.message : 'Login failed'});

            if (!result || !result.length)
                return res.status(400).send({ error: 'User not found' });
            else{
                if (!await bcrypt.compare(senha, result[0].senha))
                    return res.status(400).send({ error: 'Invalid password' });
                result[0].senha = undefined;
                return res.send({
                    result,
                    token: generateToken({ login: result[0].login }),
                });
            }

        });

    } catch (err) {
        console.log((err));
        return res.status(400).send({error: (err.message) ? err.message : 'Registration failed'});
    }

};


authModule.sign_out = async (req, res) =>{
    return res.send();
};

module.exports = authModule;
