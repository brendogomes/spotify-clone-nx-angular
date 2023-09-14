import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { newMusic } from '../../core/factories/new-music-factorie';
import { IMusic } from '../../core/interface/music.interface';
import { Subscription } from 'rxjs';
import { PlayerService } from '../../core/services/player.service';

@Component({
  selector: 'lib-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit, OnDestroy {
  music: IMusic = newMusic();
  subscriptionPlayer: Subscription[] = [];
  isPlaying: boolean = false;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.getPlayingMusic();
  }

  ngOnDestroy(): void {
    this.subscriptionPlayer.forEach((sub) => sub.unsubscribe());
  }

  getPlayingMusic(): void {
    const subscription = this.playerService.currentMusic.subscribe((music) => {
      this.music = music;
    });
    this.subscriptionPlayer.push(subscription);
  }

  async playMusic(music: IMusic): Promise<void> {
    await this.playerService.playMusic(music.id);
    this.playerService.setCurrentMusic(music);
    this.isPlaying = true;
  }

  async pauseMusic(): Promise<void> {
    this.playerService.pauseMusic();
    this.isPlaying = false;
  }

  previousTrack(): void {
    this.playerService.previousSong();
    this.isPlaying = true;
  }

  nextTrack(): void {
    this.playerService.nextSong();
    this.isPlaying = true;
  }
}
