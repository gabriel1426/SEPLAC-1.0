import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DepartamentoRoutingModule } from './departamento-routing.module';
import { DepartamentoListasDepartamentoComponent } from './listas-departamento/listas-departamento.component';
import { DataTablesModule } from 'angular-datatables';

const COMPONENTS = [DepartamentoListasDepartamentoComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    DepartamentoRoutingModule,
    DataTablesModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class DepartamentoModule { }
