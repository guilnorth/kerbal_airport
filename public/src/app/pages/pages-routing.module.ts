import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import {AuthGuard} from "../services/auth-guard.provider";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    { path: 'public',
      loadChildren: './public/public.module#PublicModule'
    },
    { path: 'passageiro',
      loadChildren: './passageiro/passageiro.module#PassageiroModule'
    },
    { path: 'planeta',
      loadChildren: './planeta/planeta.module#PlanetaModule'
    },
    { path: 'voo',
      loadChildren: './voo/voo.module#VooModule'
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
