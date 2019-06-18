$(document).ready(initializeApp);

function initializeApp() {
    $("input").click(function(){
        randomQuote();
    });

}
var quote = 'null';
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

            var text = $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText+
                ' (' + response.quoteAuthor + ')');
            quote = response.text; 
            console.log('this is text: ', text);
            console.log('response.quoteText: ', response.quoteText);
            $('.Daily_quote').append(response.quoteText);
            
        }
    });
}
console.log('this', $.ajax);
$(function() {
    randomQuote();
});
