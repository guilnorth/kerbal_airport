class Aviao {

    constructor(id,modelo,empresa){

        this._id = id;
        this._modelo = modelo;
        this._empresa = empresa;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(value) {
        this._modelo = value;
    }

    get empresa() {
        return this._empresa;
    }

    set empresa(value) {
        this._empresa = value;
    }
}
module.exports = Aviao;