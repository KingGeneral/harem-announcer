var figure = $(".video").hover( hoverVideo, hideVideo );
var figure = $(".card").click( toggle );
var figure = $(".select-all").click( toggleAll );
var figure = $("#confirm").click( getSelected );
$("#script").load("install.txt");
$("#script2").load("install2.txt");

function getSelected(e) {
  var all = $(".card.selected").map(function() {
    return this.id;
  }).get();
  genScript(all);
  $("#script").load("install.txt");
}

function toggle(e) {
    if ( $(this).hasClass('hoverable')) {
        $(this).removeClass('hoverable');
        $(this).addClass('selected');
    }
    else {
        $(this).removeClass('selected');
        $(this).addClass('hoverable');
    }
}
function toggleAll(e) {
  var parent = $(this).parent().parent();
  $(parent).children('.col').each(function () {
    var card = $(this).children('.card')[0];
    $(card).trigger('click');
  });
}
function hoverVideo(e) {
    $('video', this).get(0).play();
}

function hideVideo(e) {
    $('video', this).get(0).pause();
}
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});
