import { IAlbum } from '../interface/album.interface';
import { IArtist } from '../interface/artist.interface';
import { IMusic } from '../interface/music.interface';

export class Music implements IMusic {
  constructor(
    public id: string,
    public title: string,
    public artists: IArtist[],
    public album: IAlbum,
    public duration: string
  ) {}
}
