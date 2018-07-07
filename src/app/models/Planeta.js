class Planeta {

    constructor(id,nome,setor,descricao){

        this._id = id;
        this._nome = nome;
        this._setor = setor;
        this._descricao = descricao;
    }

    returnObject(){
        return {id:this._id,nome:this._nome, setor:this._setor, descricao:this._descricao}
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

    get setor() {
        return this._setor;
    }

    set setor(value) {
        this._setor = value;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(value) {
        this._descricao = value;
    }
}
module.exports = Planeta;