import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramaAcademicoListarPragramaAcademicoComponent } from './listar-pragrama-academico/listar-pragrama-academico.component';

const routes: Routes = [{ path: 'listarPragramaAcademico', component: ProgramaAcademicoListarPragramaAcademicoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramaAcademicoRoutingModule { }
