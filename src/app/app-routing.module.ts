import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PanelComponent } from './components/panel/panel.component';
import { RetosComponent } from './components/retos/retos.component';
import { AnalisisComponent } from './components/analisis/analisis.component';
import { PreferenciasComponent } from './components/preferencias/preferencias.component';
import { ConfiguracionRetosComponent } from './components/configuracion-retos/configuracion-retos.component';
import { ConfiguracionPreferenciasComponent } from './components/configuracion-preferencias/configuracion-preferencias.component';
import { ConfiguracionPerfilComponent } from './components/configuracion-perfil/configuracion-perfil.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: 'panel', component: PanelComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'perfil/configuracion', component: ConfiguracionPerfilComponent },
      { path: 'retos', component: RetosComponent },
      { path: 'retos/configuracion', component: ConfiguracionRetosComponent },
      { path: 'analisis', component: AnalisisComponent },
      { path: 'preferencias', component: PreferenciasComponent },
      { path: 'preferencias/configuracion', component: ConfiguracionPreferenciasComponent },
      { path: '', redirectTo: 'panel', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
