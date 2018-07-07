import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Voo} from "../../../models/voo";
import {VooService} from "../../../services/voo.service";
import {BodyOutputType, Toast, ToasterService} from "angular2-toaster";


@Component({
  selector: 'search-voo',
  templateUrl: './search-voo.component.html',
  styleUrls: ['./search-voo.component.scss']
})
export class SearchVooComponent implements OnInit {

  @Input() voo:Voo;
  @Output() searchVooEmitter = new EventEmitter();
  submitted:boolean;

  constructor(private vooService:VooService,
              private toasterService: ToasterService) { }

  ngOnInit() {
  }

  searchVoo(){
    this.submitted = true;
    this.vooService.listOneVoo(this.voo.passagem_num).subscribe((res:any) => {
      if(res && res.length){
        this.voo.id = res[0].id;
        this.voo.data_embarque = res[0].data_embarque;
        this.voo.data_desembarque = res[0].data_desembarque;
        this.voo.passagem_num = res[0].passagem_num;
        this.voo.aeroporto.planeta.nome = res[0].Planeta;
        this.voo.passageiro.nome = res[0].Passageiro;
        this.voo.aviao.modelo = res[0].aviaoModelo;
        this.voo.aviao.empresa = res[0].Empresa;
        this.voo.aeroporto.nome = res[0].Aeroporto;

        this.searchVooEmitter.emit(true);
      }else {
        this.messageToast('Ooopss', 'Voo não encontrado.', 'warning');
      }
      this.submitted = false;
    }, (err) => {
      console.log(err);
      this.submitted = false;
    })
  }


  messageToast(title,text,type,timeout?){
    const toast: Toast = {
      type: type,
      title: title,
      body: text,
      timeout: (timeout)?timeout:5000,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }


}
