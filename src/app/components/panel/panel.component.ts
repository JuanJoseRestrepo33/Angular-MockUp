import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  activeChallenges = 0;
  challengesCompletedToday = 2;
}
