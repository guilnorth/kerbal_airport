/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NB_AUTH_OPTIONS } from '@nebular/auth/auth.options';
import { getDeepFromObject } from '@nebular/auth/helpers';
import { NbAuthService } from '@nebular/auth/services/auth.service';
import { NbAuthResult } from '@nebular/auth/services/auth-result';
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'nb-logout',
  template: `
    <div>Logging out, please wait...</div>
  `,
})
export class NbLogoutComponent implements OnInit {

  redirectDelay: number = 0;
  provider: string = '';

  constructor(//protected service: NbAuthService,
              // @Inject(NB_AUTH_OPTIONS) protected config = {},
              // protected router: Router,
              private authService: AuthService) {
    // this.redirectDelay = this.getConfigValue('forms.logout.redirectDelay');
    // this.provider = this.getConfigValue('forms.logout.provider');
  }

  ngOnInit(): void {
    this.authService.logout();
    // this.logout(this.provider);
  }

  /*logout(provider: string): void {
    this.service.logout(provider).subscribe((result: NbAuthResult) => {

      localStorage.clear();
      this.authService.resetAll();

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
    });
  }*/

  /*getConfigValue(key: string): any {
    return getDeepFromObject(this.config, key, null);
  }*/
}
