import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {NbAccessChecker} from "@nebular/security";
import {PassageiroService} from "../../../services/passageiro.service";

@Component({
  selector: 'list-passageiro',
  templateUrl: './list-passageiro.component.html',
  styleUrls: ['./list-passageiro.component.scss']
})
export class ListPassageiroComponent implements OnInit {

  source = [];
  settings = {
    hideSubHeader: true,
    mode:'external',
    actions:{
      add:false,
      edit:false,
      delete:false
    },
    filter:false,
    editable:false,
    columns: {
      nome: {
        title: 'Nome',
        type: 'string',
      },
      dataNascimento: {
        title: 'Data de Nascimento',
        type: 'string',
        valuePrepareFunction: (row) => { return moment((row)).format('DD/MM/YYYY');  }
      },
      etnia: {
        title: 'Nome',
        type: 'string',
      },
    },
  };
  constructor(private accessChecker: NbAccessChecker,
              private passageiroService:PassageiroService) { }


  deleteEmployee(event){
    console.log(event)
  }
  editEmployee(event){
    console.log(event)
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  ngOnInit() {
    this.getPassageiros();
  }

  getPassageiros(){

    this.accessChecker.isGranted('create','all').subscribe( (res) => {
      this.passageiroService.listAllPassageiros().subscribe((res)=>{
        this.source = res;
        console.log(this.source)
      });
    })
  }

}
