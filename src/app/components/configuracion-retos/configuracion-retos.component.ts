import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion-retos',
  templateUrl: './configuracion-retos.component.html',
  styleUrls: ['./configuracion-retos.component.scss']
})
export class ConfiguracionRetosComponent {
  tipoReto: 'pasos' | 'ejercicios' = 'pasos';
  condicionReto = '300';
  ventanaValidacion = '5 minutos';
  nivelExigencia: 'estricto' | 'flexible' = 'estricto';
  nombreReto = 'Activación';
  descripcion = '';
  ventanaDropdownOpen = false;

  ventanasOpciones = ['5 minutos', '10 minutos', '15 minutos', '30 minutos', '1 hora'];

  constructor(private router: Router) {}

  volver(): void {
    this.router.navigate(['/app/retos']);
  }

  cancelar(): void {
    this.volver();
  }

  selectVentana(opt: string): void {
    this.ventanaValidacion = opt;
    this.ventanaDropdownOpen = false;
  }

  guardar(): void {
    console.log('Guardar reto', {
      tipoReto: this.tipoReto,
      condicionReto: this.condicionReto,
      ventanaValidacion: this.ventanaValidacion,
      nivelExigencia: this.nivelExigencia,
      nombreReto: this.nombreReto,
      descripcion: this.descripcion
    });
    this.volver();
  }
}
