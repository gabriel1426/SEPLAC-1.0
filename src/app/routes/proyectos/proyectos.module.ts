import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosListarProyectoComponent } from './listar-proyecto/listar-proyecto.component';
import { ProyectosModificarProyectoComponent } from './modificar-proyecto/modificar-proyecto.component';
import { ProyectosRegistrarProyectoComponent } from './registrar-proyecto/registrar-proyecto.component';

const COMPONENTS = [ProyectosListarProyectoComponent, ProyectosModificarProyectoComponent, ProyectosRegistrarProyectoComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    ProyectosRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class ProyectosModule { }
