export const enviroment = {
    production: false
}

export const SpotifyConfiguration = {
    clientId: '585ce67299f14874a79c2667292053dc',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    apiTokenEndpoint: 'https://accounts.spotify.com/api/token',
    redirectUrl: 'http://127.0.0.1:5173/callback/login',
    scopes: [
        'user-read-currently-playing', //Musica que esta tocando
        'user-read-recently-played', //Musicas que foram tocadas recentemente
        'user-read-playback-state', //Estado da reproduçao
        'user-top-read', //Top artistas e musicas
        'user-modify-playback-state', //Controlar a reproduçao
        'user-library-read', //Ler biblioteca de musicas
        'playlist-read-private', //Ler playlists privadas
        'playlist-read-collaborative' //Ler playlists colaborativas
    ]
}