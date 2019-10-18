import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';

import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from '../theme/auth-layout/auth-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard', titleI18n: 'dashboard' },
      },
      {
        path: 'sessions',
        loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Sessions', titleI18n: 'Sessions' },
      },
      {
        path: 'docentes',
        loadChildren: () => import('./docentes/docentes.module').then(m => m.DocentesModule),
      },
      {
        path: 'administrativos',
        loadChildren: () =>
          import('./administrativos/administrativos.module').then(m => m.AdministrativosModule),
      },
      {
        path: 'ejes_estrategicos',
        loadChildren: () =>
          import('./ejes-estrategicos/ejes-estrategicos.module').then(
            m => m.EjesEstrategicosModule
          ),
      },
      {
        path: 'lineas',
        loadChildren: () => import('./lineas/lineas.module').then(m => m.LineasModule),
      },
      {
        path: 'programas',
        loadChildren: () => import('./programas/programas.module').then(m => m.ProgramasModule),
      },
      {
        path: 'planes',
        loadChildren: () => import('./planes/planes.module').then(m => m.PlanesModule),
      },
      {
        path: 'proyectos',
        loadChildren: () => import('./proyectos/proyectos.module').then(m => m.ProyectosModule),
      },
      {
        path: 'actividades',
        loadChildren: () =>
          import('./actividades/actividades.module').then(m => m.ActividadesModule),
      },
      {
        path: 'seguimiento',
        loadChildren: () =>
          import('./seguimiento/seguimiento.module').then(m => m.SeguimientoModule),
      },
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login', titleI18n: 'Login' },
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { title: 'Register', titleI18n: 'Register' },
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
