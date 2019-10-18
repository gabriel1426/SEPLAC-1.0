import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrativosListarAdministrativoComponent } from './listar-administrativo/listar-administrativo.component';
import { AdministrativosRegistrarAdministrativoComponent } from './registrar-administrativo/registrar-administrativo.component';
import { AdministrativosModificarAdministrativoComponent } from './modificar-administrativo/modificar-administrativo.component';

const routes: Routes = [
  { path: '', component: AdministrativosListarAdministrativoComponent },
  { path: 'registrar-administrativo', component: AdministrativosRegistrarAdministrativoComponent },
  { path: 'modificar-administrativo', component: AdministrativosModificarAdministrativoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrativosRoutingModule {}
