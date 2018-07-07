import { NgModule } from '@angular/core';



import { ThemeModule } from '../../@theme/theme.module';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {VooRoutingModule} from "./voo-routing.module";
import {VooService} from "../../services/voo.service";
import {VooComponent} from "./voo.component";
import {CreateVooComponent} from "./create-voo/create-voo.component";
import {ListVooComponent} from "./list-voo/list-voo.component";
import {PassageiroService} from "../../services/passageiro.service";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";


const VOO_COMPONENTS = [
  VooComponent,
  CreateVooComponent,
  ListVooComponent,
];

@NgModule({
  imports: [
    Ng2SmartTableModule,
    VooRoutingModule,
    ThemeModule,
    NgSelectModule,
    FormsModule,
    //DashboardModule,
  ],
  declarations: [
    ...VOO_COMPONENTS,
  ],
  exports:[...VOO_COMPONENTS],
  providers:[PassageiroService, VooService]
})
export class VooModule {
}
