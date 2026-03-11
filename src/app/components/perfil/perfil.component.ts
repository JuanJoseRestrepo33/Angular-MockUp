import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user: Usuario = {
    name: '',
    email: '',
    language: '',
    timezone: ''
  };

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.user = this.usuarioService.getUsuario();
  }

  cerrarSesion(): void {
    this.router.navigate(['/login']);
  }
}
