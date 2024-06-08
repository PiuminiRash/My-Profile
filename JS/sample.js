// var $root = $('html, body');
// var currNavLink = "1";
// $("a").click(function() {
//     $root.animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
//
//     var str = $(this).attr("href");
//     var strNum = str.charAt(str.length-1)
//     // $("#nav-link-" + currNavLink).css("border-color", "red");
//     $("#nav-link-" + currNavLink).css("background", "none");
//     $("#nav-link-" + strNum).css("background", "red");
//     currNavLink = strNum;
// });

var $root = $('html, body');
var currNavLink = "1";
$("a").click(function(event) {
    event.preventDefault(); // Prevent the default action of the anchor tag
    var target = $($(this).attr('href'));

    $root.animate({
        scrollTop: target.offset().top
    }, 500);

    var href = $(this).attr("href");
    var strNum = $(this).find('div').attr('id').split('-')[2]; // Extract the number from the id attribute

    // Reset the background of the previous nav link
    $("#nav-link-" + currNavLink).css("background", "none");

    // Set the background of the current nav link
    $("#nav-link-" + strNum).css("background", "white");

    currNavLink = strNum;
});