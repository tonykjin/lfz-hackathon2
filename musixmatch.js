class MusixMatch {
    constructor() {
        this.initClient = this.initClient.bind(this);
    }
    initClient() {
        var getGenre = 'https://api.musixmatch.com/ws/1.1/music.genre.get'
        ajaxYoutubeData = {
            datatype: "json",
            url: getGenre,
            method: 'GET',
            data: {
                apikey: '16177ad0b93ec37e51b9cab63c2e8ad6',
            },
            success: function( response ) {
                console.log(response);
                var musicGenre = response['message']['body']['music_genre_list']['music_genre'];
            },
            error: function( response ) { console.log(response)},
        }
        $.ajax(ajaxYoutubeData);
    }
}