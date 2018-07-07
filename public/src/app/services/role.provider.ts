import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';
import { NbRoleProvider } from '@nebular/security';
import {AuthService} from "./auth.service";

@Injectable()
export class RoleProvider implements NbRoleProvider {

  constructor(private authService: NbAuthService, private authUser: AuthService) {
  }

  getRole(): Observable<any> {
      return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {

            return token.isValid() ? 'admin' : 'guest';
        }),
      );
  }

  getUser(): Observable<string> {
    return this.authService.onTokenChange()
      .pipe(
        map((token: NbAuthJWTToken) => {
          return token.isValid() ? token.getPayload()['user'] : 'guest';
        }),
      );
  }
}
