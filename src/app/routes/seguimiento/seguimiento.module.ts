import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { SeguimientoRoutingModule } from './seguimiento-routing.module';

const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    SeguimientoRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class SeguimientoModule { }
