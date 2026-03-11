import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-configuracion-perfil',
  templateUrl: './configuracion-perfil.component.html',
  styleUrls: ['./configuracion-perfil.component.scss']
})
export class ConfiguracionPerfilComponent implements OnInit {
  nombre = '';
  email = '';
  password = '';
  idioma = '';
  zonaHoraria = '';

  idiomaDropdownOpen = false;
  zonaHorariaDropdownOpen = false;

  idiomaOpciones = ['Español', 'English', 'Português', 'Français'];
  zonaHorariaOpciones = ['(GMT-5) Colombia', '(GMT-6) México', '(GMT-3) Argentina', '(GMT+1) España'];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    const u = this.usuarioService.getUsuario();
    this.nombre = u.name;
    this.email = u.email;
    this.idioma = u.language;
    this.zonaHoraria = u.timezone;
  }

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
