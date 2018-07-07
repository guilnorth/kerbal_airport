import { Component, OnInit } from '@angular/core';
import {NbAccessChecker} from "@nebular/security";
import {BodyOutputType, Toast, ToasterService} from "angular2-toaster";
import {Router} from "@angular/router";
import {Passageiro} from "../../../models/passageiro";
import {PassageiroService} from "../../../services/passageiro.service";

@Component({
  selector: 'create-passageiro',
  templateUrl: './create-passageiro.component.html',
  styleUrls: ['./create-passageiro.component.scss']
})
export class CreatePassageiroComponent implements OnInit {

  passageiro:Passageiro = new Passageiro();
  submitted:boolean = false;
  constructor(public accessChecker: NbAccessChecker,
              private passageiroService: PassageiroService,
              private toasterService: ToasterService, private router:Router) { }

  ngOnInit() {

    this.accessChecker.isGranted('create','consumer').subscribe( (res) => {
      console.log('accessChecker',res);

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

  create(){
    this.submitted = true;
    this.passageiroService.createPassageiro(this.passageiro).subscribe((res) => {
      this.messageToast('Inserção', 'Passageiro cadastrado com sucesso', 'success');
      this.submitted = false;
      this.router.navigateByUrl('/pages/passageiro/list')
    }, (err) =>{
      this.submitted = false;
      console.log(err);
      this.messageToast('Inserção', `Houve o seguinte problema com a inserção: ${err.error.error}`, 'error',10000);
    })
  }


}
