const PlanetaModel = require('./Planeta');

class Aeroporto {

    constructor(id,nome,planeta){
        this._id = id;
        this._nome = nome;
        this._planeta = new PlanetaModel(planeta.id,planeta.nome,planeta.setor,planeta.descricao);
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get planeta() {
        return this._planeta;
    }

    set planeta(value) {
        this._planeta = new PlanetaModel(...value);
    }
}
module.exports = Aeroporto;