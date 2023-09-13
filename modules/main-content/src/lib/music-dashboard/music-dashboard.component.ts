import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentService } from '../../core/service/main-content.service';
import { Music } from '../../core/class/music.class';

@Component({
  selector: 'lib-music-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-dashboard.component.html',
  styleUrls: ['./music-dashboard.component.scss'],
})
export class MusicDashboardComponent implements OnInit {
  musics: Music[] = []
  showButton: { [key: string]: boolean } = {};


  constructor(private mainContentService: MainContentService) {}

  ngOnInit(): void {
    this.fetchSavedTracks();
  }

  fetchSavedTracks(): void {
    const response = this.mainContentService.getSavedTracks();
    response
      .then((responseData) => {
        this.musics = responseData;
        console.log(responseData);
      })
      .catch((responseError) => {
        console.log(responseError);
      });
  }
}
