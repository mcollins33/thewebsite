$(document).ready(function() {

    var games = ['http://www.weirdgames.net/action/halo-2600', 'http://www.weirdgames.net/cartoon/super-sized-mario-bros', 'https://javasnake.neocities.org/cookie/', 'http://www.weirdgames.net/funny/poop-clicker'];

    $("#link").on("click", function(event) {
    	var numberoflinks = games.length;
        var random = Math.floor(Math.random() * numberoflinks);

        window.open(games[random], "_self");
    });


});