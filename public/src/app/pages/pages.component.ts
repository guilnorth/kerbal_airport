import { Component } from '@angular/core';

import { MENU_ITEMS_ADMIN,MENU_ITEMS_GUEST } from './pages-menu';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {

  public menu = [];
  constructor(private authService: AuthService) {
    if(this.authService.admin.id)
        this.menu = MENU_ITEMS_ADMIN;
    else
       this.menu = MENU_ITEMS_GUEST;
  }



}
