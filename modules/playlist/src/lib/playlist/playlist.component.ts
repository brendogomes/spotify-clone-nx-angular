import { Playlist } from 'src/app/core/class/playlist.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistService } from '../../core/service/playlist.service';
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
      })
      .catch((responseError) => {});
  }
}
