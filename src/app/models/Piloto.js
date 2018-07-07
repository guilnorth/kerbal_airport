class Piloto {

    constructor(id,nome){

        this._id = id;
        this._nome = nome;
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
}
module.exports = Piloto;