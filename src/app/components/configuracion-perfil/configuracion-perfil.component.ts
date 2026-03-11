import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion-perfil',
  templateUrl: './configuracion-perfil.component.html',
  styleUrls: ['./configuracion-perfil.component.scss']
})
export class ConfiguracionPerfilComponent {
  nombre = 'Tomás Álvarez';
  email = 'tomas.alvarez@email.com';
  password = '';
  idioma = 'Español';
  zonaHoraria = '(GMT-5) Colombia';

  idiomaDropdownOpen = false;
  zonaHorariaDropdownOpen = false;

  idiomaOpciones = ['Español', 'English', 'Português', 'Français'];
  zonaHorariaOpciones = ['(GMT-5) Colombia', '(GMT-6) México', '(GMT-3) Argentina', '(GMT+1) España'];

  constructor(private router: Router) {}

  volver(): void {
    this.router.navigate(['/app/perfil']);
  }

  cancelar(): void {
    this.volver();
  }

  selectIdioma(opt: string): void {
    this.idioma = opt;
    this.idiomaDropdownOpen = false;
  }

  selectZonaHoraria(opt: string): void {
    this.zonaHoraria = opt;
    this.zonaHorariaDropdownOpen = false;
  }

  guardar(): void {
    console.log('Guardar perfil', {
      nombre: this.nombre,
      email: this.email,
      idioma: this.idioma,
      zonaHoraria: this.zonaHoraria
    });
    this.volver();
  }
}
