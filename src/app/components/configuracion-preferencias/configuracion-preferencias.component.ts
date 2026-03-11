import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion-preferencias',
  templateUrl: './configuracion-preferencias.component.html',
  styleUrls: ['./configuracion-preferencias.component.scss']
})
export class ConfiguracionPreferenciasComponent {
  tipoReto = 'Pasos';
  periodoAnalisis = 'Semanal';
  ventanaValidacion = '5 minutos';
  visualizacion = 'Simple';
  sincronizacion = true;
  notificacionWeb = true;
  dropdownTipoOpen = false;
  dropdownPeriodoOpen = false;
  dropdownVentanaOpen = false;
  dropdownVisualizacionOpen = false;

  tipoRetoOpciones = ['Pasos', 'Ejercicios'];
  periodoOpciones = ['Semanal', 'Mensual', 'Trimestral'];
  ventanaOpciones = ['5 minutos', '10 minutos', '15 minutos', '30 minutos', '1 hora'];
  visualizacionOpciones = ['Simple', 'Detallada'];

  constructor(private router: Router) {}

  selectTipo(opt: string): void {
    this.tipoReto = opt;
    this.dropdownTipoOpen = false;
  }

  selectPeriodo(opt: string): void {
    this.periodoAnalisis = opt;
    this.dropdownPeriodoOpen = false;
  }

  selectVentana(opt: string): void {
    this.ventanaValidacion = opt;
    this.dropdownVentanaOpen = false;
  }

  selectVisualizacion(opt: string): void {
    this.visualizacion = opt;
    this.dropdownVisualizacionOpen = false;
  }

  volver(): void {
    this.router.navigate(['/app/preferencias']);
  }

  cancelar(): void {
    this.volver();
  }

  guardar(): void {
    console.log('Guardar preferencias', {
      tipoReto: this.tipoReto,
      periodoAnalisis: this.periodoAnalisis,
      ventanaValidacion: this.ventanaValidacion,
      visualizacion: this.visualizacion,
      sincronizacion: this.sincronizacion,
      notificacionWeb: this.notificacionWeb
    });
    this.volver();
  }
}
