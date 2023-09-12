import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui-photo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui-photo.component.html',
  styleUrls: ['./ui-photo.component.scss'],
})
export class UiPhotoComponent {
  @Input() imageUrl: string = 'assets/img/default_playlist_image.jpg';
}
