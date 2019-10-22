import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoListasDepartamentoComponent } from './listas-departamento/listas-departamento.component';

const COMPONENTS = [DepartamentoListasDepartamentoComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    DepartamentoRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class DepartamentoModule { }
