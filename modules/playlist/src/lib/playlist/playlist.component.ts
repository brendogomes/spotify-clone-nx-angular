import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistService } from '../../core/service/playlist.service';
import { Playlist } from '../../core/class/playlist.model';
import { UiCardComponent, UiPhotoComponent, UiPlayerComponent } from 'modules/shared/ui';

@Component({
  selector: 'lib-playlist',
  standalone: true,
  imports: [CommonModule, UiCardComponent, UiPhotoComponent, UiPlayerComponent], 
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  playlists: Playlist[] = [];

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.fetchPlaylists();
  }

  fetchPlaylists(): void {
    const response = this.playlistService.getUserPlaylists();
    response.then((responseData) => {
        this.playlists = responseData;
        console.log(this.playlists)
      })
      .catch((responseError) => {});
  }
}
