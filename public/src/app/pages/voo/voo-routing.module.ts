import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {AuthGuard} from "../../services/auth-guard.provider";
import {VooComponent} from "./voo.component";
import {CreateVooComponent} from "./create-voo/create-voo.component";
import {ListVooComponent} from "./list-voo/list-voo.component";

const routes: Routes = [{
  path: '',
  component: VooComponent,
  canActivateChild: [AuthGuard],
  children: [
    {
      path: 'create',
      component: CreateVooComponent,
    },
    {
      path: 'list',
      component: ListVooComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VooRoutingModule {
}
