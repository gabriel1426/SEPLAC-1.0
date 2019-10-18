import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ActividadesRoutingModule } from './actividades-routing.module';
import { ActividadesRegistrarActividadComponent } from './registrar-actividad/registrar-actividad.component';
import { ActividadesListarActividadComponent } from './listar-actividad/listar-actividad.component';
import { ActividadesModificarActividadComponent } from './modificar-actividad/modificar-actividad.component';

const COMPONENTS = [ActividadesRegistrarActividadComponent, ActividadesListarActividadComponent, ActividadesModificarActividadComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    ActividadesRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class ActividadesModule { }
