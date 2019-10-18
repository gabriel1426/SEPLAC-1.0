import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { LineasRoutingModule } from './lineas-routing.module';
import { LineasRegistrarLineaComponent } from './registrar-linea/registrar-linea.component';
import { LineasModificarLineaComponent } from './modificar-linea/modificar-linea.component';
import { LineasListarLineaComponent } from './listar-linea/listar-linea.component';
import { DataTablesModule } from 'angular-datatables';
const COMPONENTS = [
  LineasRegistrarLineaComponent,
  LineasModificarLineaComponent,
  LineasListarLineaComponent,
];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule, LineasRoutingModule, DataTablesModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class LineasModule {}
