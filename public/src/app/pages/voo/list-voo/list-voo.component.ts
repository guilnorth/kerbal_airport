import { Component, OnInit } from '@angular/core';
import {NbAccessChecker} from "@nebular/security";
import {VooService} from "../../../services/voo.service";
import Utils from "../../../utils/utils";

@Component({
  selector: 'list-voo',
  templateUrl: './list-voo.component.html',
  styleUrls: ['./list-voo.component.scss']
})
export class ListVooComponent implements OnInit {

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
      passagem_num: {
        title: 'Passagem',
        type: 'string',
      },
      data_embarque: {
        title: 'Data Embarque',
        type: 'string',
        valuePrepareFunction: (row) => { return this.dateView(row);  }
      },
      data_desembarque: {
        title: 'Data Desembarque',
        type: 'string',
        valuePrepareFunction: (row) => { return this.dateView(row);  }
      },
    },
  };
  constructor(private accessChecker: NbAccessChecker,
              private vooService:VooService) { }


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
    this.getVoos();
  }

  getVoos(){
    this.accessChecker.isGranted('create','all').subscribe( (res) => {
      this.vooService.listAllVoos().subscribe((res)=>{
        this.source = res;
      });
    })
  }

  dateView(date){
    return Utils.formatLocalDate(date);
  }

}
