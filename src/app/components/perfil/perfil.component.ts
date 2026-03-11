import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  user = {
    name: 'Tomás Álvarez',
    email: 'tomas.alvarez@email.com',
    language: 'Español',
    timezone: '(GMT-5) Colombia'
  };

  constructor(private router: Router) {}

  cerrarSesion(): void {
    this.router.navigate(['/login']);
  }
}
