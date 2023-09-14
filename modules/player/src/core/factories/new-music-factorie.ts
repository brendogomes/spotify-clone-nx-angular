import { Album } from 'modules/main-content/src/core/class/album.class';
import { Artist } from 'modules/main-content/src/core/class/artist.class';
import { Music } from 'modules/main-content/src/core/class/music.class';

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
