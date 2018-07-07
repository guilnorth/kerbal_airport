import { Component, OnInit } from '@angular/core';
import {NbAccessChecker} from "@nebular/security";
import {BodyOutputType, Toast, ToasterService} from "angular2-toaster";
import {Router} from "@angular/router";
import {Voo} from "../../../models/voo";
import {VooService} from "../../../services/voo.service";
import {PassageiroService} from "../../../services/passageiro.service";

@Component({
  selector: 'create-voo',
  templateUrl: './create-voo.component.html',
  styleUrls: ['./create-voo.component.scss']
})
export class CreateVooComponent implements OnInit {

  passageirosList = [{}];
  aeroportosList = [{}];
  aviaoList = [{}];
  voo:Voo = new Voo();
  submitted:boolean = false;
  constructor(public accessChecker: NbAccessChecker,
              private vooService: VooService,
              private toasterService: ToasterService,
              private router:Router,
              private passageiroService:PassageiroService) { }

  ngOnInit() {

    this.accessChecker.isGranted('create','consumer').subscribe( (res) => {
      console.log('accessChecker',res);
    });

    this.getListPassageiros();
    this.getListAir();
    this.getListAviao();

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

  create(){
    this.submitted = true;
    this.vooService.createVoo(this.voo).subscribe((res) => {
      this.messageToast('Inserção', 'Voo cadastrado com sucesso', 'success');
      this.submitted = false;
      this.router.navigateByUrl('/pages/voo/list')
    }, (err) =>{
      this.submitted = false;
      console.log(err);
      this.messageToast('Inserção', `Houve o seguinte problema com a inserção: ${err.error.error}`, 'error',10000);
    })
  }

  getListPassageiros(){
    this.passageiroService.listAllPassageiros().subscribe((res)=>{
      this.passageirosList = res;
    })
  }

  getListAir(){
    this.vooService.listAllAeroportos().subscribe((res)=>{
      this.aeroportosList = res;
    })
  }
  getListAviao(){
    this.vooService.listAllAvioes().subscribe((res)=>{
      this.aviaoList = res;
    })
  }


}
