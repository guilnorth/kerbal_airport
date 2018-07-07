import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {AuthGuard} from "../../services/auth-guard.provider";
import {PlanetaComponent} from "./planeta.component";
import {CreatePlanetaComponent} from "./create-planeta/create-planeta.component";
import {ListPlanetaComponent} from "./list-planeta/list-planeta.component";

const routes: Routes = [{
  path: '',
  component: PlanetaComponent,
  canActivateChild: [AuthGuard],
  children: [
    {
      path: 'create',
      component: CreatePlanetaComponent,
    },
    {
      path: 'list',
      component: ListPlanetaComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetaRoutingModule {
}
