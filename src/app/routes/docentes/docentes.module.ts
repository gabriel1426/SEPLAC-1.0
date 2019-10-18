import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DocentesRoutingModule } from './docentes-routing.module';
import { DocentesRegistrarDocenteComponent } from './registrar-docente/registrar-docente.component';
import { DocentesModificarDocenteComponent } from './modificar-docente/modificar-docente.component';
import { DocentesListarDocenteComponent } from './listar-docente/listar-docente.component';
import { DataTablesModule } from 'angular-datatables';

const COMPONENTS = [
  DocentesRegistrarDocenteComponent,
  DocentesModificarDocenteComponent,
  DocentesListarDocenteComponent,
];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule, DocentesRoutingModule, DataTablesModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class DocentesModule {}
