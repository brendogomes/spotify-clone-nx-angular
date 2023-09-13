import { Album } from '../class/album.class';
import { Artist } from '../class/artist.class';
import { Music } from '../class/music.class';

export function newMusic(): Music {
  const album: Album = {
    id: '',
    imageUrl: '',
    name: '',
  };

  const artists: Artist[] = [];

  const music: Music = {
    id: '',
    album,
    artists,
    duration: '',
    title: '',
  };

  return music;
}
