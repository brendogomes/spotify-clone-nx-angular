import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss'],
})
export class UiCardComponent {}
