import { Music } from 'src/app/core/class/music.class';
import { newMusic } from '../factories/new-music-factorie';
import { addMilliseconds, format } from 'date-fns';

export function SpotifyTrackToMusicHelper(spotifyTrack: SpotifyApi.TrackObjectFull): Music {
  if (!spotifyTrack) {
    return newMusic();
  }

  const msToMinutes = (ms: number) => {
    const date = addMilliseconds(new Date(0), ms);
    return format(date, 'mm:ss');
  };

  const artists = spotifyTrack.artists.map((artist) => ({
    id: artist.id,
    name: artist.name,
  }));

  const album = {
    id: spotifyTrack.album.id,
    imageUrl: spotifyTrack.album.images[0]?.url || '',
    name: spotifyTrack.album.name,
  };

  return {
    id: spotifyTrack.uri,
    title: spotifyTrack.name,
    artists,
    album,
    duration: msToMinutes(spotifyTrack.duration_ms),
  };
}
