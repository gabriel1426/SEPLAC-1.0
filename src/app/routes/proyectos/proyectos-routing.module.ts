import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosListarProyectoComponent } from './listar-proyecto/listar-proyecto.component';
import { ProyectosModificarProyectoComponent } from './modificar-proyecto/modificar-proyecto.component';
import { ProyectosRegistrarProyectoComponent } from './registrar-proyecto/registrar-proyecto.component';

const routes: Routes = [{ path: 'listar-proyecto', component: ProyectosListarProyectoComponent },
{ path: 'modificar-proyecto', component: ProyectosModificarProyectoComponent },
{ path: 'registrar-proyecto', component: ProyectosRegistrarProyectoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
