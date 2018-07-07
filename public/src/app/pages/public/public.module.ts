import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import {Ng2SmartTableModule} from "ng2-smart-table";
import {PublicComponent} from "./public.component";
import {PublicRoutingModule} from "./public-routing.module";
import {SearchVooComponent} from "./search-voo/search-voo.component";
import {VooService} from "../../services/voo.service";

const PUBLIC_COMPONENTS = [
  PublicComponent,
  SearchVooComponent
];

@NgModule({
  imports: [
    PublicRoutingModule,
    //FlowRoutingModule,
    ThemeModule,
    Ng2SmartTableModule

    //DashboardModule,
  ],
  declarations: [
    ...PUBLIC_COMPONENTS,
  ],
  exports:[...PUBLIC_COMPONENTS],

  providers:[VooService]
})
export class PublicModule {
}
