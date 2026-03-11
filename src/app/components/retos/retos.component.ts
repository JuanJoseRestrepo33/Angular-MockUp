import { Component, OnInit } from '@angular/core';
import { Reto } from '../../models';
import { RetosService } from '../../services/retos.service';

type FiltroTipo = 'nombre' | 'tipo' | 'nivel' | null;

@Component({
  selector: 'app-retos',
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.scss']
})
export class RetosComponent implements OnInit {
  searchQuery = '';
  filterOpen = false;
  filtroActivo: FiltroTipo = null;
  pageSize = 5;
  currentPage = 1;

  filtros: { key: FiltroTipo; label: string }[] = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'tipo', label: 'Tipo' },
    { key: 'nivel', label: 'Nivel' }
  ];

  allRetos: Reto[] = [];

  constructor(private retosService: RetosService) {}

  ngOnInit(): void {
    this.allRetos = this.retosService.getRetos();
  }

  get retosFiltrados(): Reto[] {
    let retos = [...this.allRetos];
    if (this.filtroActivo) {
      retos = retos.sort((a, b) => {
        const aVal = a[this.filtroActivo!];
        const bVal = b[this.filtroActivo!];
        return String(aVal).localeCompare(String(bVal));
      });
    }
    return retos;
  }

  get totalRetos(): number {
    return this.retosFiltrados.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalRetos / this.pageSize) || 1;
  }

  get retosPaginated(): Reto[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.retosFiltrados.slice(start, start + this.pageSize);
  }

  get paginationStart(): number {
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get paginationEnd(): number {
    return Math.min(this.currentPage * this.pageSize, this.totalRetos);
  }

  toggleReto(reto: Reto): void {
    reto.activo = !reto.activo;
  }

  toggleFilter(): void {
    this.filterOpen = !this.filterOpen;
  }

  selectFiltro(filtro: FiltroTipo): void {
    this.filtroActivo = this.filtroActivo === filtro ? null : filtro;
    this.filterOpen = false;
    this.currentPage = 1;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get filtroBtnLabel(): string {
    const f = this.filtros.find(x => x.key === this.filtroActivo);
    return f ? f.label : 'Filtro';
  }

  closeFilter(): void {
    this.filterOpen = false;
  }
}
