class Passageiro {


    constructor(id,nome,dataNascimento,etnia){
        console.log(nome)
        console.log('///////////')
        this._id = id;
        this._nome = nome;
        this._dataNascimento = dataNascimento;
        this._etnia = etnia;
    }

    returnObject(){
        return {id:this._id,nome:this._nome, dataNascimento:this._dataNascimento, etnia:this._etnia}
    }

    get id() {
        console.log('---', this._id)
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

    get dataNascimento() {
        return this._dataNascimento;
    }

    set dataNascimento(value) {
        this._dataNascimento = value;
    }

    get etnia() {
        return this._etnia;
    }

    set etnia(value) {
        this._etnia = value;
    }
}
module.exports = Passageiro;