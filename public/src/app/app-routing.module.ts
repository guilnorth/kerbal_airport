import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { NbAuthComponent, NbLoginComponent,
  NbLogoutComponent, NbRegisterComponent,
  NbRequestPasswordComponent, NbResetPasswordComponent,
  NbAuthBlockComponent
} from './@theme/components/auth'; //'@nebular/auth';

import {AuthGuard} from './services/auth-guard.provider';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        canActivate: [AuthGuard],
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },

  { path: '',   redirectTo: 'pages/public', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/public' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
