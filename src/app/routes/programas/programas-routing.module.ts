import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramasListarProgramaComponent } from './listar-programa/listar-programa.component';
import { ProgramasModificarProgramaComponent } from './modificar-programa/modificar-programa.component';
import { ProgramasRegistrarProgramaComponent } from './registrar-programa/registrar-programa.component';

const routes: Routes = [{ path: '', component: ProgramasListarProgramaComponent },
{ path: 'modificar-programa', component: ProgramasModificarProgramaComponent },
{ path: 'registrar-programa', component: ProgramasRegistrarProgramaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramasRoutingModule { }
