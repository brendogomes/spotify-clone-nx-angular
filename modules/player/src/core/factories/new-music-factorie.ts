import { Artist } from 'src/app/core/class/artist.class';
import { Album } from 'src/app/core/class/album.class';
import { Music } from "src/app/core/class/music.class";


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
