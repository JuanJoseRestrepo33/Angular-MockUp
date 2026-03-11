import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { LogoComponent } from './components/shared/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    PanelComponent,
    RetosComponent,
    AnalisisComponent,
    PreferenciasComponent,
    ConfiguracionRetosComponent,
    ConfiguracionPreferenciasComponent,
    ConfiguracionPerfilComponent,
    PerfilComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
