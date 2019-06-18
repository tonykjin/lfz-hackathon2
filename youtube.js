class Youtube {
    constructor() {
        this.initClient = this.initClient.bind(this);
    }
    initClient() {
        const SCOPE = 'https://www.googleapis.com/auth/youtube.force-ssl';
        const discoveryUrl = 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBz2sreZUd7JjlXMM5YJRnZhDoNyM7FVXw'
        ajaxYoutubeData = {
            datatype: "JSON",
            url: discoveryUrl,
            'scope': SCOPE,
            method: 'GET',
            success: function( response ) {
                console.log(response);
            },
            error: function( response ) { console.log(response)},
        }
        $.ajax(ajaxYoutubeData);
    }
}

//API key - youtube: AIzaSyBz2sreZUd7JjlXMM5YJRnZhDoNyM7FVXw

//possible url: https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest //most likely this one
// scope : https://www.googleapis.com/auth/youtube.force-ssl