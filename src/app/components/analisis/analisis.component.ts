import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js/auto';
import { PERIODOS_ANALISIS } from '../../models';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.scss']
})
export class AnalisisComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  periodosOpciones = PERIODOS_ANALISIS;
  selectedPeriod = '7';
  weekLabels = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
  chartData = [1, 2, 4, 2, 5, 2, 1, 0];
  retosFinalizados = 12;
  promedioPorDia = 3;
  private chart: Chart | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const periodo = this.route.snapshot.queryParams['periodo'];
    if (periodo && ['7', '14', '30'].includes(periodo)) {
      this.selectedPeriod = periodo;
    }
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  onPeriodoChange(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { periodo: this.selectedPeriod },
      queryParamsHandling: 'merge'
    });
    this.initChart();
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }

  private initChart(): void {
    if (!this.chartCanvas?.nativeElement) return;

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    this.chart?.destroy();
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.weekLabels,
        datasets: [{
          label: 'Retos completados',
          data: this.chartData,
          borderColor: '#6B7280',
          backgroundColor: 'transparent',
          borderWidth: 2,
          tension: 0.2,
          pointRadius: 4,
          pointBackgroundColor: '#ffffff',
          pointBorderColor: '#6B7280',
          pointBorderWidth: 2,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: '#364153',
              font: { family: 'Roboto', size: 14, weight: 500 },
              maxRotation: 0
            },
            border: { display: false }
          },
          y: {
            min: 0,
            max: 5,
            ticks: {
              stepSize: 1,
              color: '#364153',
              font: { family: 'Roboto', size: 14, weight: 500 }
            },
            grid: { color: 'rgba(226, 232, 240, 0.8)' },
            border: { display: false }
          }
        }
      }
    });
  }
}
