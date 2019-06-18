$(document).ready(initializeApp);

function initializeApp() {
    $(".btn-success").click(function(){
        randomQuote();
    });

}
function randomQuote() {
    $.ajax
    ({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
            console.log(response);
            $("#createQuote").html("<p id='createQuote' class='lead text-center'>" +
                response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");

            $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
                ' (' + response.quoteAuthor + ')');
        }
    });
}
console.log($.ajax);
$(function() {
    randomQuote();
});
