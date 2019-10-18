import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadesRegistrarActividadComponent } from './registrar-actividad/registrar-actividad.component';
import { ActividadesListarActividadComponent } from './listar-actividad/listar-actividad.component';
import { ActividadesModificarActividadComponent } from './modificar-actividad/modificar-actividad.component';

const routes: Routes = [{ path: 'registrar-actividad', component: ActividadesRegistrarActividadComponent },
{ path: 'listar-actividad', component: ActividadesListarActividadComponent },
{ path: 'modificar-actividad', component: ActividadesModificarActividadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadesRoutingModule { }
