import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { PlanesRoutingModule } from './planes-routing.module';
import { PlanesRegistrarPlanComponent } from './registrar-plan/registrar-plan.component';
import { PlanesModificarPlanComponent } from './modificar-plan/modificar-plan.component';
import { PlanesListarPlanComponent } from './listar-plan/listar-plan.component';

const COMPONENTS = [PlanesRegistrarPlanComponent, PlanesModificarPlanComponent, PlanesListarPlanComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    PlanesRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class PlanesModule { }
