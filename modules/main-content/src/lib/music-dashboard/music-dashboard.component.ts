import { Subscription } from 'rxjs';
import { IMusic } from 'src/app/core/interface/music.interface';
import { Music } from 'src/app/core/class/music.class';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentService } from '../../core/service/main-content.service';
import { PlayerService } from 'modules/player/src/core/services/player.service';

@Component({
  selector: 'lib-music-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-dashboard.component.html',
  styleUrls: ['./music-dashboard.component.scss'],
})
export class MusicDashboardComponent implements OnInit {
  musics: Music[] = [];
  subscriptionPlayer: Subscription[] = [];
  selectedMusic?: Music;

  constructor(
    private mainContentService: MainContentService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.fetchSavedTracks();
    this.getPlayingMusic();
  }

  async fetchSavedTracks(): Promise<void> {
    this.musics = await this.mainContentService.getSavedTracks();
  }

  async playMusic(music: IMusic): Promise<void> {
    this.selectedMusic = music;
    await this.playerService.playMusic(music.id);
    this.playerService.setCurrentMusic(music);
  }

  getPlayingMusic(): void {
    const subscription = this.playerService.currentMusic.subscribe((music) => {
      if (this.selectedMusic?.id !== music.id) {
        this.selectedMusic = music;
      }
    });
    this.subscriptionPlayer.push(subscription);
  }
}
