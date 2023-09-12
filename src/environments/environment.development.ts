export const environment = {
  production: false,
};

export const SpotifyConfiguration = {
  clientId: 'a8bd92e8fffc4de996ab50cb614c35da',
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
