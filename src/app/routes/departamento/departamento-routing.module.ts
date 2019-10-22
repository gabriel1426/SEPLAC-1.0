import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartamentoListasDepartamentoComponent } from './listas-departamento/listas-departamento.component';

const routes: Routes = [{ path: '', component: DepartamentoListasDepartamentoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentoRoutingModule { }
