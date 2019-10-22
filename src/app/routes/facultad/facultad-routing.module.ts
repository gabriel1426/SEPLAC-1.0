import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultadListasFacultadComponent } from './listas-facultad/listas-facultad.component';

const routes: Routes = [{ path: '', component: FacultadListasFacultadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultadRoutingModule { }
