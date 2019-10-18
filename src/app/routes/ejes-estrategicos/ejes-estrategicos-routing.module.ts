import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjesEstrategicosModificarEjeComponent } from './modificar-eje/modificar-eje.component';
import { EjesEstrategicosListarEjeComponent } from './listar-eje/listar-eje.component';
import { EjesEstrategicosRegistrarEjeComponent } from './registrar-eje/registrar-eje.component';

const routes: Routes = [
  { path: 'modificar-eje', component: EjesEstrategicosModificarEjeComponent },
  { path: '', component: EjesEstrategicosListarEjeComponent },
  { path: 'registrar-eje', component: EjesEstrategicosRegistrarEjeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjesEstrategicosRoutingModule {}
