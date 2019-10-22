import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ProgramaAcademicoRoutingModule } from './programa-academico-routing.module';
import { ProgramaAcademicoListarPragramaAcademicoComponent } from './listar-pragrama-academico/listar-pragrama-academico.component';

const COMPONENTS = [ProgramaAcademicoListarPragramaAcademicoComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    ProgramaAcademicoRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class ProgramaAcademicoModule { }
