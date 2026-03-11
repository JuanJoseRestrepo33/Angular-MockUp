import { Injectable } from '@angular/core';
import { Reto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RetosService {
  getRetos(): Reto[] {
    return [
      { nombre: 'Rutina de ejercicios', tipo: 'Basico', nivel: 'Avanzado', activo: true },
      { nombre: 'Caminata diaria', tipo: 'Intermedio', nivel: 'Principiante', activo: true },
      { nombre: 'Yoga matutino', tipo: 'Basico', nivel: 'Intermedio', activo: false },
      { nombre: 'Crossfit', tipo: 'Avanzado', nivel: 'Avanzado', activo: true },
      { nombre: 'Estiramientos', tipo: 'Basico', nivel: 'Principiante', activo: true },
      { nombre: 'Running 5K', tipo: 'Intermedio', nivel: 'Avanzado', activo: true },
      { nombre: 'Natación', tipo: 'Avanzado', nivel: 'Intermedio', activo: false }
    ];
  }
}
