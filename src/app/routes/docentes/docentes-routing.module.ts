import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocentesRegistrarDocenteComponent } from './registrar-docente/registrar-docente.component';
import { DocentesModificarDocenteComponent } from './modificar-docente/modificar-docente.component';
import { DocentesListarDocenteComponent } from './listar-docente/listar-docente.component';

const routes: Routes = [
  { path: 'registrar-docente', component: DocentesRegistrarDocenteComponent },
  { path: 'modificar-docente', component: DocentesModificarDocenteComponent },
  { path: '', component: DocentesListarDocenteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocentesRoutingModule {}
