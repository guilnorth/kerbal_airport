/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpResponse} from '@angular/common/http';
import { CoreModule } from './@core/core.module';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbEmailPassAuthProvider, NbAuthModule, NB_AUTH_TOKEN_CLASS, NbAuthJWTToken } from '@nebular/auth';

import {AuthGuard} from './services/auth-guard.provider'

import { RoleProvider } from './services/role.provider';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import {InterceptorService} from "./services/interceptor.service";

import {AuthService} from "./services/auth.service";
import {ToasterModule} from "angular2-toaster";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {BASE_API} from './app.api';
import {NG_SELECT_DEFAULT_CONFIG, NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    ToasterModule.forRoot(),
    Ng2SmartTableModule,
    NgSelectModule,
    FormsModule,

    /** Control Roles **/
    NbSecurityModule.forRoot({
      accessControl: {
        guest: {
          view: ['login'],
        },
        admin: {
          parent: 'guest',
          create: ['enterprise','/pages/employee/create','all'],
          view:['controlDashboard','/pages/employee/create'],
          remove: '*',
        },
      },
    }),

    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            baseEndpoint: BASE_API,
            login: {
              endpoint: '/auth/authenticate',
            },
            register: {
              endpoint: '/auth/register',
            },
            logout: {
              endpoint: '/auth/sign-out',
            },
            requestPass: {
              endpoint: '/auth/forgot_password',
            },
            resetPass: {
              endpoint: '/auth/reset_password',
            },
            token: {
              key: 'token', // this parameter tells Nebular where to look for the token
            },
            user: {
              key: 'user', // this parameter tells Nebular where to look for the token
            },
            messages: {
              key: 'data.messages',

            },
          },
        },
      },
      forms: {},
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthGuard,
    AuthService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken },
    { provide: NbRoleProvider, useClass: RoleProvider },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    {
      provide: NG_SELECT_DEFAULT_CONFIG,
      useValue: {
        notFoundText: 'Não há dados'
      }
    }
  ],
  exports:[NgSelectModule]
})
export class AppModule {
}
