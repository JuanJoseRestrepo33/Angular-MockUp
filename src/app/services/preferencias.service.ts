import { Injectable } from '@angular/core';
import { Preferencias } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PreferenciasService {
  getPreferencias(): Preferencias {
    return {
      tipoReto: 'Pasos',
      periodoAnalisis: 'Semanal',
      ventanaValidacion: '5 minutos',
      visualizacion: 'Simple',
      sincronizacion: true,
      notificacionWeb: true
    };
  }
}
