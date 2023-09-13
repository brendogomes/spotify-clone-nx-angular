import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaylistViewComponent } from '../playlist-view/playlist-view.component';
import { MusicDashboardComponent } from '../music-dashboard/music-dashboard.component';

@Component({
  selector: 'lib-main-content',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    PlaylistViewComponent,
    MusicDashboardComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent {}
