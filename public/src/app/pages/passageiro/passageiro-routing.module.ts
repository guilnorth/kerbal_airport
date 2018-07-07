import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {AuthGuard} from "../../services/auth-guard.provider";
import {PassageiroComponent} from "./passageiro.component";
import {CreatePassageiroComponent} from "./create-passageiro/create-passageiro.component";
import {ListPassageiroComponent} from "./list-passageiro/list-passageiro.component";

const routes: Routes = [{
  path: '',
  component: PassageiroComponent,
  canActivateChild: [AuthGuard],
  children: [
    {
      path: 'create',
      component: CreatePassageiroComponent,
    },
    {
      path: 'list',
      component: ListPassageiroComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassageiroRoutingModule {
}
