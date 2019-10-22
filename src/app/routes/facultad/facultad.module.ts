import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { FacultadRoutingModule } from './facultad-routing.module';
import { FacultadListasFacultadComponent } from './listas-facultad/listas-facultad.component';

const COMPONENTS = [FacultadListasFacultadComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    FacultadRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class FacultadModule { }
