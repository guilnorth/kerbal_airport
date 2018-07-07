import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {PublicComponent} from "./public.component";
import {SearchVooComponent} from "./search-voo/search-voo.component";





const routes: Routes = [{

  path: '',
  component: PublicComponent,
  //canActivateChild: [AuthGuard],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {

}
