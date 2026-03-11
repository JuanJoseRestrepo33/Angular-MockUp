export interface PeriodoAnalisis {
  valor: string;
  etiqueta: string;
}

export const PERIODOS_ANALISIS: PeriodoAnalisis[] = [
  { valor: '7', etiqueta: 'Últimos 7 días' },
  { valor: '14', etiqueta: 'Últimos 14 días' },
  { valor: '30', etiqueta: 'Últimos 30 días' }
];
