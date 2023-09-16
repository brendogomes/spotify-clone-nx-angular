import { IMusic } from 'src/app/core/interface/music.interface';
import Spotify from 'spotify-web-api-js';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { newMusic } from '../factories/new-music-factorie';
import { SpotifyTrackToMusicHelper } from 'modules/main-content/src/core/helper/get-saved-tracks-helper';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  spotifyApi!: Spotify.SpotifyWebApiJs;
  currentMusic = new BehaviorSubject<IMusic>(newMusic());
  timerId?: number;

  constructor() {
    this.spotifyApi = new Spotify();
    this.getCurrentMusic();
  }

  async fetchCurrentTrack(): Promise<IMusic> {
    const currentMusicResponse: SpotifyApi.CurrentlyPlayingResponse = await this.spotifyApi.getMyCurrentPlayingTrack();
    return SpotifyTrackToMusicHelper(currentMusicResponse.item!);
  }

  async getCurrentMusic() {
    clearTimeout(this.timerId);
    const music = await this.fetchCurrentTrack();
    this.setCurrentMusic(music);
    this.timerId = setInterval(async () => {
      await this.getCurrentMusic();
    }, 2000);
  }

  setCurrentMusic(music: IMusic) {
    this.currentMusic.next(music);
  }

  async previousSong() {
    await this.spotifyApi.skipToPrevious();
  }

  async nextSong() {
    await this.spotifyApi.skipToNext();
  }

  async playMusic(musicId: string): Promise<void> {
    await this.spotifyApi.queue(musicId);
    await this.spotifyApi.skipToNext();
  }

  async pauseMusic(): Promise<void> {
    await this.spotifyApi.pause();
  }
}
