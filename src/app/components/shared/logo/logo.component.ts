import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  /** 'light' = fondo blanco (login), 'dark' = fondo oscuro (sidebar) */
  @Input() variant: 'light' | 'dark' = 'light';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
