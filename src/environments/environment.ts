export const environment = {
  production: true,
};

export const SpotifyConfiguration = {
  clientId: '870690e70b7843a49835df74a5948768',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    'user-read-currently-playing', // Currently playing music.
    'user-read-recently-played', // Read recently played tracks.
    'user-read-playback-state', // Read the user's player state.
    'user-top-read', // Read the user's top artists and tracks.
    'user-modify-playback-state', // Modify the user's player state.
    'user-library-read', // Read the user's library.
    'playlist-read-private', // Read private playlists.
    'playlist-read-collaborative', // Read collaborative playlists.
  ],
};
