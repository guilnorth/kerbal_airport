import { Component, OnInit } from '@angular/core';
import {NbAccessChecker} from "@nebular/security";
import {BodyOutputType, Toast, ToasterService} from "angular2-toaster";
import {Router} from "@angular/router";
import {PlanetaService} from "../../../services/planeta.service";
import {Planeta} from "../../../models/planeta";

@Component({
  selector: 'create-planeta',
  templateUrl: './create-planeta.component.html',
  styleUrls: ['./create-planeta.component.scss']
})
export class CreatePlanetaComponent implements OnInit {

  planeta:Planeta = new Planeta();
  submitted:boolean = false;
  constructor(public accessChecker: NbAccessChecker,
              private planetaService: PlanetaService,
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
    this.planetaService.createPlaneta(this.planeta).subscribe((res) => {
      this.messageToast('Inserção', 'Planeta cadastrado com sucesso', 'success');
      this.submitted = false;
      this.router.navigateByUrl('/pages/planeta/list')
    }, (err) =>{
      this.submitted = false;
      console.log(err);
      this.messageToast('Inserção', `Houve o seguinte problema com a inserção: ${err.error.error}`, 'error',10000);
    })
  }


}
