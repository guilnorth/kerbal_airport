
import {Passageiro} from "./passageiro";
import {Aeroporto} from "./aeroporto";
import {Aviao} from "./aviao";
export class Voo {
  id:number = 0;
  passageiro:Passageiro = new Passageiro();
  data_embarque:Date;
  data_desembarque:Date;
  aeroporto:Aeroporto = new Aeroporto();
  aviao:Aviao = new Aviao();
  passagem_num:string = "";
}
