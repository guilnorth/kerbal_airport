import { NgModule } from '@angular/core';



import { ThemeModule } from '../../@theme/theme.module';
import {PassageiroRoutingModule} from "./passageiro-routing.module";
import {PassageiroComponent} from "./passageiro.component";
import { CreatePassageiroComponent } from './create-passageiro/create-passageiro.component';
import { ListPassageiroComponent } from './list-passageiro/list-passageiro.component';
import {PassageiroService} from "../../services/passageiro.service";
import {Ng2SmartTableModule} from "ng2-smart-table";


const PASSAGEIRO_COMPONENTS = [
  PassageiroComponent,
  CreatePassageiroComponent,
  ListPassageiroComponent,
];

@NgModule({
  imports: [
    Ng2SmartTableModule,
    PassageiroRoutingModule,
    ThemeModule,
    //DashboardModule,
  ],
  declarations: [
    ...PASSAGEIRO_COMPONENTS,
  ],
  exports:[...PASSAGEIRO_COMPONENTS],
  providers:[PassageiroService]
})
export class PassageiroModule {
}
