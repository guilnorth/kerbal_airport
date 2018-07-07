import { Injectable } from '@angular/core';
import {ActivatedRoute, CanActivate, CanActivateChild, Router} from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import {tap} from "rxjs/internal/operators";
import {NbAccessChecker} from "@nebular/security";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: NbAuthService,
              private router: Router,
              public accessChecker: NbAccessChecker, private activetedRouter:ActivatedRoute) {
  }

  canActivate() {
    console.log('canActivate');
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['auth/login']);
          }
        }),
      );
  }

  canActivateChild() {
    console.log('canActivate child');
    return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['auth/login']);
          }
        }),
      );
  }

  saveDataUser(){

  }
}
