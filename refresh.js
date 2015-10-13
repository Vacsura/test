var requestDelay = 30000;    //kérések közti késleltetés ezredmásodpercben
var requestURL = "";    //há mennyen a rekveszt?
var venueId = 0;        //venue id
var lastCommentId = 0;   //ide kéne az uccsó komi id-je

$(document).ready(function () {
    setInterval(function() {
        $.post(requestURL, {
            venueId: venueId
            commentId: lastCommentId
        }, function (data, status) {
            document.getElementById("sec").innerHTML = data;
        });
    }, requestDelay);
});


