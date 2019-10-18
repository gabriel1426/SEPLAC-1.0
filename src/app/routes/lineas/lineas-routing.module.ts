import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineasRegistrarLineaComponent } from './registrar-linea/registrar-linea.component';
import { LineasModificarLineaComponent } from './modificar-linea/modificar-linea.component';
import { LineasListarLineaComponent } from './listar-linea/listar-linea.component';

const routes: Routes = [
  { path: 'registrar-linea', component: LineasRegistrarLineaComponent },
  { path: 'modificar-linea', component: LineasModificarLineaComponent },
  { path: '', component: LineasListarLineaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineasRoutingModule {}
