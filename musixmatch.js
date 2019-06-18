class MusixMatch {
    constructor() {
        this.initClient = this.initClient.bind(this);
    }
    initClient() {
        const getGenre = 'https://api.musixmatch.com/ws/1.1/music.genre.get'
        ajaxYoutubeData = {
            datatype: "json",
            url: getGenre,
            method: 'GET',
            data: {
                apikey: '16177ad0b93ec37e51b9cab63c2e8ad6',
            },
            success: function( response ) {
                console.log(response);
            },
            error: function( response ) { console.log(response)},
        }
        $.ajax(ajaxYoutubeData);
    }
}