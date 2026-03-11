import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.scss']
})
export class AnalisisComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;

  selectedPeriod = '7';
  weekLabels = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
  chartData = [1, 2, 4, 2, 5, 2, 1, 0];
  retosFinalizados = 12;
  promedioPorDia = 3;
  private chart: Chart | null = null;

  ngAfterViewInit(): void {
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
