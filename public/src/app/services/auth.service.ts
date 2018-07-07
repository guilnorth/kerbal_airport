import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {NB_AUTH_OPTIONS, NbAuthJWTToken, NbAuthResult, NbAuthService} from '@nebular/auth';
import {BASE_API} from '../app.api';

import {getDeepFromObject} from "@nebular/auth/helpers";
import {Router} from "@angular/router";
import {Administrador} from "../models/administrador";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AuthService {

  private token: string;
  public admin: Administrador = new Administrador;


  constructor(private nbAuthService: NbAuthService,
              protected router: Router,
              private http: HttpClient,@Inject(NB_AUTH_OPTIONS) protected config = {}) {
    this.configUser()
  }


  awaitDataAuth():Observable<any>{
    return Observable.of(true)
  }
   configUser(){
    let dataLocal = localStorage.getItem('authData');
    try {
      let dataUser = (dataLocal) ? JSON.parse(dataLocal) : null;

      if (dataUser){
        this.admin = ({
          id: dataUser.id,
          login:dataUser.login,
          senha:''
        });

      }
    } catch (e) {
      console.log(e)
    }
  }



  resetAll(){
    this.token = null;
    this.admin = new Administrador();

  }

  logout(): void {
    this.nbAuthService.logout(this.getConfigValue('forms.logout.provider')).subscribe((result: NbAuthResult) => {

      localStorage.clear();
      this.resetAll();

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, 0);
      }
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }

}
