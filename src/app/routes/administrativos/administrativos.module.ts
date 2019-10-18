import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AdministrativosRoutingModule } from './administrativos-routing.module';
import { AdministrativosListarAdministrativoComponent } from './listar-administrativo/listar-administrativo.component';
import { AdministrativosRegistrarAdministrativoComponent } from './registrar-administrativo/registrar-administrativo.component';
import { AdministrativosModificarAdministrativoComponent } from './modificar-administrativo/modificar-administrativo.component';
import { DataTablesModule } from 'angular-datatables';
const COMPONENTS = [
  AdministrativosListarAdministrativoComponent,
  AdministrativosRegistrarAdministrativoComponent,
  AdministrativosModificarAdministrativoComponent,
];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule, AdministrativosRoutingModule, DataTablesModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class AdministrativosModule {}
