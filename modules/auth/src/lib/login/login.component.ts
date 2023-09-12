import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyAuthServiceService } from '../service/spotify-auth.service.service';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private spotifyAuthServiceService: SpotifyAuthServiceService
  ) {}

  ngOnInit(): void {
    this.checkTokenUrlCallback();
  }

  checkTokenUrlCallback(): void {
    const token = this.spotifyAuthServiceService.getTokenCallbackUrl();
    if (token) {
      this.spotifyAuthServiceService.setAccessToken(token);
      this.router.navigate(['/web-player']);
    } else {
      const token = localStorage.getItem('token');
      if (token) {
        this.router.navigate(['/web-player']);
      } else {
        localStorage.clear();
      }
    }
  }

  openLoginPage(): void {
    window.location.href = this.spotifyAuthServiceService.getLoginUrl();
  }
}
