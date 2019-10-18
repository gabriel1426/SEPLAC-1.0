import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ProgramasRoutingModule } from './programas-routing.module';
import { ProgramasListarProgramaComponent } from './listar-programa/listar-programa.component';
import { ProgramasModificarProgramaComponent } from './modificar-programa/modificar-programa.component';
import { ProgramasRegistrarProgramaComponent } from './registrar-programa/registrar-programa.component';

const COMPONENTS = [ProgramasListarProgramaComponent, ProgramasModificarProgramaComponent, ProgramasRegistrarProgramaComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    ProgramasRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class ProgramasModule { }
