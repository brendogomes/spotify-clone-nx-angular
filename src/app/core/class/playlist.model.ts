import { IMusic } from '../interface/music.interface';
import { IPlaylist } from '../interface/playlist.interface';

export class Playlist implements IPlaylist {
  constructor(
    public id: string,
    public name: string,
    public imageUrl: string,
    public songs: IMusic[] = []
  ) {}
}
