import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
})
export class UiButtonComponent implements OnInit {
  @Input() buttonColorClass: string = 'bg-primary';
  @Input() textColorClass: string = 'text-dark';
  @Input() isDisabled: boolean = false;

  ngOnInit(): void {}
}
