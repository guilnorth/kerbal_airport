const PassageiroModel = require('./Passageiro');
const AeroportoModel = require('./Aeroporto');
const Aviao = require('./Aviao');

class Voo {

    constructor(id,passageiro,data_embarque,data_desembarque,aeroporto,passagem_num,aviao){

        this._id = id;
        this._passageiro = new PassageiroModel(passageiro.id,passageiro.nome,passageiro.dataNascimento,passageiro.etnia);
        this._data_embarque = data_embarque;
        this._data_desembarque = data_desembarque;
        this._aeroporto = new AeroportoModel(aeroporto.id,aeroporto.nome,aeroporto.planeta);
        this._passagem_num = passagem_num;
        this._aviao = new Aviao(aviao.id,aviao.modelo,aviao.empresa);
    }

    returnObject(){
        return {
            id:this._id,
            idPassageiro:this.passageiro.id,
            data_embarque:this._data_embarque,
            data_desembarque:this._data_desembarque,
            idAeroporto:this.aeroporto.id,
            passagem_num:this._passagem_num,
            idAviao:this.aviao._id
        }
    }

    get aviao() {
        return this._aviao;
    }

    set aviao(value) {
        this._aviao = new Aviao({...aviao});
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get passageiro() {
        return this._passageiro;
    }

    set passageiro(value) {
        this._passageiro = new PassageiroModel(...value);
    }

    get data_embarque() {
        return this._data_embarque;
    }

    set data_embarque(value) {
        this._data_embarque = value;
    }

    get data_desembarque() {
        return this._data_desembarque;
    }

    set data_desembarque(value) {
        this._data_desembarque = value;
    }

    get aeroporto() {
        return this._aeroporto;
    }

    set aeroporto(value) {
        this._aeroporto = new AeroportoModel(...value);
    }


    get passagem_num() {
        return this._passagem_num;
    }

    set passagem_num(value) {
        this._passagem_num = value;
    }
}
module.exports = Voo;