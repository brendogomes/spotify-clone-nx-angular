import { SpotifyConfiguration } from './../../../../../../src/environments/environment';
import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class SpotifyAuthServiceService {
  spotifyApi!: Spotify.SpotifyWebApiJs;
  user?: User;

  constructor() {
    this.spotifyApi = new Spotify();
  }

  async initializeUser(): Promise<boolean> {
    if (!!this.user) {
      return true;
    }

    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      this.setAccessToken(token);
      await this.getSpotifyUser();

      return !!this.user;
    } catch (error) {
      return false;
    }
  }

  async getSpotifyUser(): Promise<void> {
    const userInfo: SpotifyApi.CurrentUsersProfileResponse = await this.spotifyApi.getMe();
    this.user = new User(
      userInfo.id,
      userInfo.display_name!,
      userInfo.images!.pop()!.url
    );
  }

  getLoginUrl(): string {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  getTokenCallbackUrl(): string {
    if (!window.location.hash) {
      return '';
    }
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  setAccessToken(token: string): void {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}
