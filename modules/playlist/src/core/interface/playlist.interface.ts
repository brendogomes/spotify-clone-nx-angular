import { IMusic } from './music.interface';

export interface IPlaylist {
  id: string;
  name: string;
  imageUrl: string;
  songs?: IMusic[];
}
