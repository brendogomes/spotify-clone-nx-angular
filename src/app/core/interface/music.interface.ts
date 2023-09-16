import { IAlbum } from './album.interface';
import { IArtist } from './artist.interface';

export interface IMusic {
  id: string;
  title: string;
  artists: IArtist[];
  album: IAlbum;
  duration: string;
}
