import { Injectable } from '@angular/core';
import { Usuario } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  getUsuario(): Usuario {
    return {
      name: 'Tomás Álvarez',
      email: 'tomas.alvarez@email.com',
      language: 'Español',
      timezone: '(GMT-5) Colombia'
    };
  }
}
