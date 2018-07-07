import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {NbAccessChecker} from "@nebular/security";
import {PlanetaService} from "../../../services/planeta.service";


@Component({
  selector: 'list-planeta',
  templateUrl: './list-planeta.component.html',
  styleUrls: ['./list-planeta.component.scss']
})
export class ListPlanetaComponent implements OnInit {

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
      setor: {
        title: 'Setor',
        type: 'string',
      },
      descricao: {
        title: 'Descrição',
        type: 'string',
      },
    },
  };
  constructor(private accessChecker: NbAccessChecker,
              private planetaService:PlanetaService) { }


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
    this.getPlanetas();
  }

  getPlanetas(){
    this.accessChecker.isGranted('create','all').subscribe( (res) => {
      this.planetaService.listAllPlanetas().subscribe((res)=>{
        this.source = res;
      });
    })
  }

}
