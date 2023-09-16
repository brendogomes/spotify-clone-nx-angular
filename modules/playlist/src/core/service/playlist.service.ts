import { Playlist } from './../../../../../src/app/core/class/playlist.model';
import Spotify from 'spotify-web-api-js';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlaylistService {
  spotifyApi!: Spotify.SpotifyWebApiJs;
  
  constructor() {
    this.spotifyApi = new Spotify();
  }

  async getSpotifyUser(): Promise<string> {
    const userInfo: SpotifyApi.CurrentUsersProfileResponse = await this.spotifyApi.getMe();
    return userInfo.id;
  }

  async getUserPlaylists(offset: number = 0, limit: number = 50): Promise<Playlist[]> {
    const userId: string = await this.getSpotifyUser();
    const playlists: SpotifyApi.ListOfUsersPlaylistsResponse = await this.spotifyApi.getUserPlaylists(userId, {
      offset,
      limit,
    });
  
    return playlists.items.map(playlistItem => {
      const imageUrl = playlistItem.images.length > 0 ? playlistItem.images[0].url : '';
      const formattedPlaylist = new Playlist(playlistItem.id, playlistItem.name, imageUrl);
      return formattedPlaylist;
    });
  }
}
