import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { EjesEstrategicosRoutingModule } from './ejes-estrategicos-routing.module';
import { EjesEstrategicosModificarEjeComponent } from './modificar-eje/modificar-eje.component';
import { EjesEstrategicosListarEjeComponent } from './listar-eje/listar-eje.component';
import { EjesEstrategicosRegistrarEjeComponent } from './registrar-eje/registrar-eje.component';
import { DataTablesModule } from 'angular-datatables';
const COMPONENTS = [
  EjesEstrategicosModificarEjeComponent,
  EjesEstrategicosListarEjeComponent,
  EjesEstrategicosRegistrarEjeComponent,
];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule, EjesEstrategicosRoutingModule, DataTablesModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class EjesEstrategicosModule {}
