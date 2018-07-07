import {Component, OnInit} from '@angular/core';
import {Voo} from "../../models/voo";
import Utils from "../../utils/utils";


@Component({
  selector: 'public-component',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit{

  voo:Voo = new Voo();
  nameActiveTab = 'Consulta';
  tabsVisible = {
    vooSearch:true,
    vooData:false,
  };

  constructor(){
  }
  ngOnInit() {
  }

  changeActiveTab(value,nameActive){
    if(nameActive)
      this.tabsVisible[nameActive] = true;
    this.nameActiveTab = value;
  }

  onChangeTab(event){
    this.nameActiveTab = event.tabTitle;
  }

  dateView(date){
    return Utils.formatLocalDate(date);
  }

}
