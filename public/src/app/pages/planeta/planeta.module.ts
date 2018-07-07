import { NgModule } from '@angular/core';



import { ThemeModule } from '../../@theme/theme.module';
import {Ng2SmartTableModule} from "ng2-smart-table";
import {PlanetaRoutingModule} from "./planeta-routing.module";
import {PlanetaService} from "../../services/planeta.service";
import {PlanetaComponent} from "./planeta.component";
import {CreatePlanetaComponent} from "./create-planeta/create-planeta.component";
import {ListPlanetaComponent} from "./list-planeta/list-planeta.component";


const PLANETA_COMPONENTS = [
  PlanetaComponent,
  CreatePlanetaComponent,
  ListPlanetaComponent,
];

@NgModule({
  imports: [
    Ng2SmartTableModule,
    PlanetaRoutingModule,
    ThemeModule,
  ],
  declarations: [
    ...PLANETA_COMPONENTS,
  ],
  exports:[...PLANETA_COMPONENTS],
  providers:[PlanetaService]
})
export class PlanetaModule {
}
