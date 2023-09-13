import Spotify from 'spotify-web-api-js';
import { Injectable } from '@angular/core';
import { Artist } from '../class/artist.class';
import { Music } from '../class/music.class';
import { SpotifyTrackToMusicHelper } from '../helper/get-saved-tracks-helper';

@Injectable({
  providedIn: 'root',
})
export class MainContentService {
  spotifyApi!: Spotify.SpotifyWebApiJs;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  async getTopArtists(limit: number = 10): Promise<Artist[]> {
    const artists: SpotifyApi.UsersTopArtistsResponse = await this.spotifyApi.getMyTopArtists({ limit });
    return artists.items.map((artistItem) => {
      const formattedArtistList = new Artist(artistItem.id, artistItem.name);
      return formattedArtistList;
    });
  }

  async getSavedTracks(offset: number = 0, limit: number = 50): Promise<Music[]> {
    const savedTracks = await this.spotifyApi.getMySavedTracks({ offset, limit });
    return savedTracks.items.map((trackItem) => {
      return SpotifyTrackToMusicHelper(trackItem.track);
    });
  }

}
