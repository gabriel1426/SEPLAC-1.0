import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanesRegistrarPlanComponent } from './registrar-plan/registrar-plan.component';
import { PlanesModificarPlanComponent } from './modificar-plan/modificar-plan.component';
import { PlanesListarPlanComponent } from './listar-plan/listar-plan.component';

const routes: Routes = [{ path: 'registrar-plan', component: PlanesRegistrarPlanComponent },
{ path: 'modificar-plan', component: PlanesModificarPlanComponent },
{ path: 'listar-plan', component: PlanesListarPlanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }
